/// <reference types="vite/client" />
import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot, Sparkles, Key } from 'lucide-react';
import { sendMessageToGemini, ChatMessage } from '../services/gemini';
import { useChat } from '../contexts/ChatContext';

const AIChatWidget: React.FC = () => {
    const { isOpen, closeChat, toggleChat } = useChat();
    const [messages, setMessages] = useState<ChatMessage[]>([
        { role: 'model', text: 'Chào bạn nhỏ! 👋 Trợ lý WonderKids đây! Bạn có câu hỏi gì cho mình không? ✨' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Use key from env directly
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        if (!apiKey) {
            setMessages(prev => [...prev, { role: 'model', text: 'Ôi, mình chưa tìm thấy "Chìa khóa" (API Key) trong cấu hình rồi! Nhờ người lớn kiểm tra lại file .env giúp mình nhé. 🔑' }]);
            return;
        }

        const userMsg = input;
        setInput('');
        setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        setIsLoading(true);

        try {
            const reply = await sendMessageToGemini(messages, userMsg, apiKey);
            setMessages(prev => [...prev, { role: 'model', text: reply }]);
        } catch (error: any) {
            setMessages(prev => [...prev, { role: 'model', text: 'Huhu, có lỗi rồi! ' + error.message }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100] font-sans">
            {/* Chat Window */}
            {isOpen && (
                <div className="absolute bottom-20 right-0 w-[350px] sm:w-[400px] h-[500px] bg-white rounded-[2rem] shadow-2xl border-4 border-white flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300 origin-bottom-right">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-brand-purple to-purple-500 p-4 flex items-center justify-between text-white shadow-md z-10">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-purple shadow-inner">
                                <Bot size={24} />
                            </div>
                            <div>
                                <h3 className="font-black text-lg leading-none">Trợ lý Wonder</h3>
                                <div className="flex items-center gap-1 text-xs opacity-90 mt-1">
                                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                    Sẵn sàng hỗ trợ
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={closeChat}
                            className="p-2 hover:bg-white/20 rounded-full transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 bg-gray-50 p-4 overflow-y-auto scroll-smooth">
                        <div className="space-y-4">
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    {msg.role === 'model' && (
                                        <div className="w-8 h-8 rounded-full bg-brand-purple flex-shrink-0 flex items-center justify-center text-white mr-2 mt-auto shadow-sm">
                                            <Bot size={16} />
                                        </div>
                                    )}
                                    <div
                                        className={`max-w-[80%] px-4 py-3 rounded-2xl shadow-sm text-sm md:text-base leading-relaxed
                                            ${msg.role === 'user'
                                                ? 'bg-brand-purple text-white rounded-br-none'
                                                : 'bg-white text-gray-800 border border-gray-100 rounded-bl-none'
                                            }
                                        `}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="w-8 h-8 rounded-full bg-brand-purple flex-shrink-0 flex items-center justify-center text-white mr-2 mt-auto">
                                        <Bot size={16} />
                                    </div>
                                    <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-none border border-gray-100 shadow-sm">
                                        <div className="flex gap-1.5">
                                            <div className="w-2 h-2 bg-brand-purple/40 rounded-full animate-bounce"></div>
                                            <div className="w-2 h-2 bg-brand-purple/40 rounded-full animate-bounce delay-150"></div>
                                            <div className="w-2 h-2 bg-brand-purple/60 rounded-full animate-bounce delay-300"></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-white border-t border-gray-100">
                        <div className="flex gap-2">

                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && !e.shiftKey) {
                                        if (e.nativeEvent.isComposing) return;
                                        e.preventDefault();
                                        handleSend();
                                    }
                                }}
                                placeholder="Hỏi tớ đi nào..."
                                className="flex-1 px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 outline-none text-gray-700 placeholder:text-gray-400"
                            />
                            <button
                                onClick={handleSend}
                                disabled={isLoading || !input.trim()}
                                className={`p-3 rounded-xl bg-brand-purple text-white shadow-sm transition-all
                                    ${isLoading || !input.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 hover:bg-brand-darkPurple'}
                                `}
                            >
                                <Send size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={toggleChat}
                className={`
                    w-16 h-16 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-4 border-white
                    flex items-center justify-center transition-all duration-300 transform hover:scale-110
                    ${isOpen ? 'bg-gray-200 rotate-90 text-gray-600' : 'bg-gradient-to-br from-brand-yellow to-yellow-400 text-white animate-bounce-slow'}
                `}
            >
                {isOpen ? <X size={32} /> : <Bot size={32} />}

                {!isOpen && (
                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
                    </span>
                )}
            </button>
        </div>
    );
};

export default AIChatWidget;
