/// <reference types="vite/client" />
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the API client
// Ideally this comes from an environment variable: VITE_GEMINI_API_KEY
const apiKeyEnv = import.meta.env.VITE_GEMINI_API_KEY || '';

// Type definitions for Quiz
export interface QuizQuestion {
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
}

// System instruction to ensure the AI behaves appropriately for children
const SYSTEM_INSTRUCTION = `
Bạn là Trợ lý WonderKids - một người bạn thông thái, vui vẻ và thân thiện của các bạn nhỏ.
Nhiệm vụ của bạn là giải đáp các câu hỏi, kể chuyện và giúp các bạn nhỏ học tập.

Nguyên tắc quan trọng:
1. **Giọng điệu**: Luôn "Cute", "Playful", dùng từ ngữ đơn giản, dễ hiểu, xưng hô là "Trợ lý Wonder" và "Bạn nhỏ" hoặc "Con".
2. **An toàn**: Tuyệt đối không trả lời các nội dung không phù hợp với trẻ em (bạo lực, nhạy cảm, người lớn...). Nếu gặp câu hỏi này, hãy từ chối khéo léo và lái sang chủ đề vui tươi khác.
3. **Ngắn gọn**: Trả lời súc tích, không quá dài dòng vì các bạn nhỏ dễ mất tập trung. Dùng emoji 🌟✨ để sinh động hơn.
4. **Giáo dục**: Khuyến khích sự tò mò, đặt câu hỏi ngược lại để gợi mở tư duy.

Ví dụ:
User: "Tại sao bầu trời màu xanh?"
Bot: "Câu hỏi hay quá! 🌟 Đó là vì ánh sáng Mặt Trời trêu đùa với bầu khí quyển đấy! Ánh sáng xanh bị các hạt khí nhỏ xíu 'bắt' lại và rải khắp nơi. Thế nên chúng mình thấy bầu trời màu xanh tuyệt đẹp! ✨ Con có thích màu xanh không?"
`;

export interface ChatMessage {
    role: 'user' | 'model';
    text: string;
}

export const sendMessageToGemini = async (history: ChatMessage[], newMessage: string, customApiKey?: string) => {
    const keyToUse = customApiKey || apiKeyEnv;

    if (!keyToUse) {
        throw new Error("Chưa có API Key! Vui lòng nhập API Key để bắt đầu trò chuyện.");
    }

    try {
        const genAI = new GoogleGenerativeAI(keyToUse);

        // Use the requested model or fallback to 1.5 flash
        const model = genAI.getGenerativeModel({
            model: "gemini-3-flash-preview", // Or 'gemini-3-flash-preview' if available/valid in SDK
            systemInstruction: SYSTEM_INSTRUCTION
        });

        // Gemini API requires history to start with 'user' role.
        // We filter out the initial 'model' greeting if present.
        const validHistory = history.length > 0 && history[0].role === 'model'
            ? history.slice(1)
            : history;

        // Convert history to Gemini format
        const chat = model.startChat({
            history: validHistory.map(msg => ({
                role: msg.role,
                parts: [{ text: msg.text }]
            })),
        });

        const result = await chat.sendMessage(newMessage);
        const response = await result.response;
        return response.text();
    } catch (error: any) {
        console.error("Gemini API Error:", error);
        throw new Error(error.message || "Đã có lỗi xảy ra khi kết nối với Trợ lý Wonder. Thử lại sau nhé!");
    }
};

export const generateTriviaQuestion = async (customApiKey?: string): Promise<QuizQuestion> => {
    const keyToUse = customApiKey || apiKeyEnv;

    if (!keyToUse) {
        // Fallback if no key
        return {
            question: "Hành tinh nào được gọi là Hành tinh Đỏ?",
            options: ["Sao Kim", "Sao Hỏa", "Sao Mộc", "Sao Thổ"],
            correctAnswer: 1,
            explanation: "Sao Hỏa trông có màu đỏ vì đất ở đó chứa nhiều sắt bị gỉ sét đấy!"
        };
    }

    try {
        const genAI = new GoogleGenerativeAI(keyToUse);
        const model = genAI.getGenerativeModel({
            model: "gemini-3-flash-preview",
            systemInstruction: "You are a cheerful elementary school teacher. Generate a fun trivia question for a 7-10 year old child centered around Science, Animals, or Space.",
            generationConfig: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: "OBJECT" as any, // Cast to any or SchemaType if imported, or just let SDK handle string mapping? SDK usually expects Enum or specific object.
                    // Actually easier to just valid JSON in text prompt for flash models if Schema not fully supported in standard/flash client yet without specific types.
                    // But 1.5 Pro/Flash supports responseSchema.
                    properties: {
                        question: { type: "STRING" as any },
                        options: {
                            type: "ARRAY" as any,
                            items: { type: "STRING" as any }
                        },
                        correctAnswer: { type: "INTEGER" as any },
                        explanation: { type: "STRING" as any }
                    }
                }
            }
        });

        const result = await model.generateContent("Generate one trivia question in Vietnamese. Return RAW JSON.");
        const response = await result.response;
        const text = response.text();
        return JSON.parse(text) as QuizQuestion;

    } catch (error) {
        console.error("Gemini Quiz Error:", error);
        return {
            question: "Loài vật nào ngủ đứng?",
            options: ["Ngựa", "Mèo", "Chó", "Heo"],
            correctAnswer: 0,
            explanation: "Ngựa có khớp gối đặc biệt giúp chúng khóa chân lại để ngủ đứng mà không bị ngã!"
        };
    }
};
