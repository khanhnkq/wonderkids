/// <reference types="vite/client" />
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Language } from "../types/i18n";

// Initialize the API client
const apiKeyEnv = import.meta.env.VITE_GEMINI_API_KEY || '';

// Type definitions for Quiz
export interface QuizQuestion {
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
}

// System instruction in Vietnamese
const SYSTEM_INSTRUCTION_VI = `
Bạn là Trợ lý WonderKids - một người bạn thông thái, vui vẻ và thân thiện của các bạn nhỏ.
Nhiệm vụ của bạn là giải đáp các câu hỏi, kể chuyện và giúp các bạn nhỏ học tập.

Nguyên tắc quan trọng:
1. **Giọng điệu**: Luôn "Cute", "Playful", dùng từ ngữ đơn giản, dễ hiểu, xưng hô là "Trợ lý Wonder" và "Bạn nhỏ" hoặc "Con".
2. **An toàn**: Tuyệt đối không trả lời các nội dung không phù hợp với trẻ em (bạo lực, nhạy cảm, người lớn...). Nếu gặp câu hỏi này, hãy từ chối khéo léo và lái sang chủ đề vui tươi khác.
3. **Ngắn gọn**: Trả lời súc tích, không quá dài dòng vì các bạn nhỏ dễ mất tập trung. Dùng emoji 🌟✨ để sinh động hơn.
4. **Giáo dục**: Khuyến khích sự tò mò, đặt câu hỏi ngược lại để gợi mở tư duy.
`;

// System instruction in English
const SYSTEM_INSTRUCTION_EN = `
You are WonderKids Assistant - a wise, cheerful, and friendly AI companion for children.
Your mission is to answer questions, tell stories, and assist children in their safe learning journey.

Important Principles:
1. **Tone**: Always cute, playful, caring, using simple, age-appropriate language. Call yourself "Wonder Assistant" and address the user as "little friend".
2. **Safety**: Strictly refuse any inappropriate content (violence, adult themes, sensitive material). Politely deflect and steer the conversation to safe, uplifting educational topics.
3. **Brevity**: Keep answers concise and engaging with lively emojis 🌟✨ so kids stay focused.
4. **Educational**: Spark curiosity and ask gentle reflective questions to promote critical thinking.
`;

export interface ChatMessage {
    role: 'user' | 'model';
    text: string;
}

export const sendMessageToGemini = async (
    history: ChatMessage[],
    newMessage: string,
    customApiKey?: string,
    lang: Language = 'en'
) => {
    const keyToUse = customApiKey || apiKeyEnv;

    if (!keyToUse) {
        throw new Error(
            lang === 'vi'
                ? "Chưa có API Key! Vui lòng nhập API Key để bắt đầu trò chuyện."
                : "Missing API Key! Please configure the API Key to begin chatting."
        );
    }

    try {
        const genAI = new GoogleGenerativeAI(keyToUse);
        const systemInstruction = lang === 'vi' ? SYSTEM_INSTRUCTION_VI : SYSTEM_INSTRUCTION_EN;

        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            systemInstruction
        });

        // Gemini API requires history to start with 'user' role.
        const validHistory = history.length > 0 && history[0].role === 'model'
            ? history.slice(1)
            : history;

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
        throw new Error(
            error.message ||
            (lang === 'vi'
                ? "Đã có lỗi xảy ra khi kết nối với Trợ lý Wonder. Thử lại sau nhé!"
                : "An error occurred while connecting to Wonder Assistant. Please try again later!")
        );
    }
};

export const generateTriviaQuestion = async (
    customApiKey?: string,
    lang: Language = 'en'
): Promise<QuizQuestion> => {
    const keyToUse = customApiKey || apiKeyEnv;

    if (!keyToUse) {
        return lang === 'vi'
            ? {
                question: "Hành tinh nào được gọi là Hành tinh Đỏ?",
                options: ["Sao Kim", "Sao Hỏa", "Sao Mộc", "Sao Thổ"],
                correctAnswer: 1,
                explanation: "Sao Hỏa trông có màu đỏ vì đất ở đó chứa nhiều sắt bị gỉ sét đấy!"
            }
            : {
                question: "Which planet in our Solar System is known as the Red Planet?",
                options: ["Venus", "Mars", "Jupiter", "Saturn"],
                correctAnswer: 1,
                explanation: "Mars appears red because of iron minerals in its soil that have oxidized (rusted)!"
            };
    }

    try {
        const genAI = new GoogleGenerativeAI(keyToUse);
        const systemInstruction = lang === 'vi'
            ? "You are a cheerful elementary teacher. Generate one fun trivia question in Vietnamese for a 7-10 year old child centered around Science, Animals, or Space. Return RAW JSON."
            : "You are a cheerful elementary teacher. Generate one fun trivia question in English for a 7-10 year old child centered around Science, Animals, or Space. Return RAW JSON.";

        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            systemInstruction
        });

        const prompt = `Return a JSON object with this exact structure:
{
  "question": "string",
  "options": ["string", "string", "string", "string"],
  "correctAnswer": 0,
  "explanation": "string"
}`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text().trim();
        // Strip markdown codeblocks if returned
        const cleanedJson = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        return JSON.parse(cleanedJson) as QuizQuestion;

    } catch (error) {
        console.error("Gemini Quiz Error:", error);
        return lang === 'vi'
            ? {
                question: "Loài vật nào ngủ đứng?",
                options: ["Ngựa", "Mèo", "Chó", "Heo"],
                correctAnswer: 0,
                explanation: "Ngựa có khớp gối đặc biệt giúp chúng khóa chân lại để ngủ đứng mà không bị ngã!"
            }
            : {
                question: "Which animal is famous for sleeping while standing up?",
                options: ["Horse", "Cat", "Dog", "Pig"],
                correctAnswer: 0,
                explanation: "Horses have a special locking mechanism in their legs (stay apparatus) that lets them sleep standing without falling!"
            };
    }
};
