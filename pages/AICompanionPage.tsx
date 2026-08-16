import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Send, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { sendMessageToGemini, ChatMessage } from '../services/gemini';
import ThreeCharacter from '../components/ThreeCharacter';
import { useLanguage } from '../contexts/LanguageContext';

const AICompanionPage: React.FC = () => {
    const navigate = useNavigate();
    const { t, language, isVi } = useLanguage();

    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState('');
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    // Reset initial greeting on language change
    useEffect(() => {
        setMessages([
            {
                role: 'model',
                text: isVi
                    ? 'Chào bé! Tớ là Wonder đây! Hôm nay bé muốn trò chuyện về chủ đề gì nào? 🌟'
                    : 'Hello little friend! Wonder is here! What would you like to explore or talk about today? 🌟'
            }
        ]);
    }, [language, isVi]);

    // Auto-scroll to bottom
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        return () => {
            if (window.speechSynthesis) {
                window.speechSynthesis.cancel();
            }
            setIsSpeaking(false);
        };
    }, []);

    const speak = (text: string) => {
        if (isMuted || !window.speechSynthesis) return;

        window.speechSynthesis.cancel();
        setIsSpeaking(false);

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = isVi ? 'vi-VN' : 'en-US';
        utterance.rate = 1.0;
        utterance.pitch = 1.0;
        utterance.volume = 1.0;

        const voices = window.speechSynthesis.getVoices();
        const targetVoice = voices.find(v => v.lang.startsWith(isVi ? 'vi' : 'en'));
        if (targetVoice) {
            utterance.voice = targetVoice;
        } else if (voices.length > 0) {
            utterance.voice = voices[0];
        }

        utterance.onstart = () => {
            setIsSpeaking(true);
        };
        utterance.onend = () => {
            setIsSpeaking(false);
        };
        utterance.onerror = () => {
            setIsSpeaking(false);
        };

        window.speechSynthesis.speak(utterance);
    };

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        if (!apiKey) {
            const errorMsg = t('aiChat.missingKeyNotice');
            setMessages(prev => [...prev, { role: 'model', text: errorMsg }]);
            speak(errorMsg);
            return;
        }

        const userMsg = input;
        setInput('');
        setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        setIsLoading(true);

        try {
            const reply = await sendMessageToGemini(messages, userMsg, apiKey, language);
            setMessages(prev => [...prev, { role: 'model', text: reply }]);
            speak(reply);
        } catch (error: any) {
            const errorMsg = t('aiChat.errorMessage') + error.message;
            setMessages(prev => [...prev, { role: 'model', text: errorMsg }]);
            speak(errorMsg);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="relative h-screen bg-gradient-to-b from-indigo-100 via-purple-50 to-white overflow-hidden font-sans">
            {/* Top Controls (Floating) */}
            <div className="absolute top-4 left-4 right-4 z-20 flex justify-between items-start pointer-events-none">
                <button
                    onClick={() => navigate('/')}
                    className="pointer-events-auto p-3 bg-white/80 backdrop-blur-md rounded-full shadow-lg text-brand-purple hover:scale-110 transition-transform"
                >
                    <ArrowLeft size={24} />
                </button>

                <div className="pointer-events-auto flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
                    <span className="font-bold text-brand-purple flex items-center gap-2">
                        <Sparkles size={18} className="text-yellow-500 fill-yellow-500" />
                        Wonder AI
                    </span>
                    <button
                        onClick={() => {
                            if (isSpeaking && window.speechSynthesis) window.speechSynthesis.cancel();
                            setIsMuted(!isMuted);
                        }}
                        className={`p-2 rounded-full transition-all ${isMuted ? 'text-gray-400' : 'text-brand-purple bg-purple-100'}`}
                    >
                        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                    </button>
                </div>
            </div>

            {/* 3D Character - Dominant View */}
            <div className="absolute inset-0 z-0 h-[65%] w-full">
                <ThreeCharacter speaking={isSpeaking} />
            </div>

            {/* Chat Interface - Bottom Sheet Style */}
            <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-white/90 backdrop-blur-xl rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] flex flex-col z-10 border-t border-white/50 transition-all duration-500 ease-out">
                {/* Drag Handle Indicator */}
                <div className="w-16 h-1.5 bg-gray-300 rounded-full mx-auto mt-4 mb-2 opacity-50"></div>

                {/* Messages List */}
                <div className="flex-1 overflow-y-auto px-4 md:px-20 py-4 scroll-smooth">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex gap-3 mb-4 animate-in slide-in-from-bottom-5 fade-in duration-300 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                            {/* Avatar */}
                            <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center shadow-sm border-2 border-white
                                ${msg.role === 'user' ? 'bg-indigo-100 text-indigo-600' : 'bg-brand-purple text-white'}
                            `}>
                                {msg.role === 'user' ? 'U' : <Sparkles size={18} />}
                            </div>

                            {/* Bubble */}
                            <div className={`
                                max-w-[80%] px-5 py-3 rounded-[2rem] text-[16px] leading-relaxed shadow-sm
                                ${msg.role === 'user'
                                    ? 'bg-brand-purple text-white rounded-br-none'
                                    : 'bg-white border border-purple-100 text-gray-700 rounded-bl-none'
                                }
                            `}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex gap-3 mb-4 pl-2">
                            <div className="w-10 h-10 rounded-full bg-brand-purple flex-shrink-0 flex items-center justify-center border-2 border-white shadow-sm">
                                <Sparkles size={18} className="text-white" />
                            </div>
                            <div className="bg-white border border-purple-100 px-5 py-4 rounded-[2rem] rounded-bl-none shadow-sm flex items-center gap-1.5">
                                <span className="w-2 h-2 bg-brand-purple/50 rounded-full animate-bounce"></span>
                                <span className="w-2 h-2 bg-brand-purple/50 rounded-full animate-bounce delay-150"></span>
                                <span className="w-2 h-2 bg-brand-purple/50 rounded-full animate-bounce delay-300"></span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 md:px-20 pb-8 bg-white/50 backdrop-blur-md">
                    <div className="relative shadow-lg rounded-full">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            placeholder={t('aiChat.inputPlaceholder')}
                            className="w-full bg-white pl-6 pr-14 py-4 rounded-full outline-none border-2 border-transparent focus:border-brand-purple/30 transition-all text-gray-700 placeholder:text-gray-400 text-lg"
                        />
                        <button
                            onClick={handleSend}
                            disabled={isLoading || !input.trim()}
                            className="absolute right-2 top-2 w-10 h-10 rounded-full bg-brand-purple text-white flex items-center justify-center hover:scale-110 hover:bg-brand-darkPurple disabled:opacity-50 disabled:hover:scale-100 transition-all shadow-md"
                        >
                            <Send size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AICompanionPage;
