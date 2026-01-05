import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Send, User, Mail, Phone, MessageSquare, CheckCircle } from 'lucide-react';
import { ScribbleLoop, ScribbleUnderline, ScribbleArrow } from '../components/Icons';

const Contact: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // Simulate API call
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <div className="min-h-screen bg-[#fffbeb] font-sans selection:bg-brand-yellow/30 relative overflow-hidden">
            <Navbar />

            {/* Decorative Background Elements */}
            <div className="absolute top-20 left-10 text-brand-purple/10 hidden lg:block">
                <ScribbleLoop className="w-32 h-32" />
            </div>
            <div className="absolute bottom-40 right-10 text-brand-yellow/20 hidden lg:block">
                <ScribbleLoop className="w-40 h-40 rotate-45" />
            </div>

            <main className="max-w-4xl mx-auto px-4 py-16 relative z-10">
                <div className="flex flex-col items-center text-center mb-12">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-brand-purple/10 text-brand-purple font-black tracking-wider uppercase mb-4 animate-fade-in">
                        Kết nối với WonderKids
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 relative inline-block">
                        Liên hệ tư vấn
                        <span className="absolute -bottom-4 right-0 w-full text-brand-yellow">
                            <ScribbleUnderline />
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-6">
                        Ba mẹ để lại thông tin, WonderKids sẽ liên hệ lại ngay để tư vấn lộ trình học phù hợp nhất cho bé nhé!
                    </p>
                </div>

                <div className="bg-white rounded-[2.5rem] shadow-xl p-8 md:p-12 relative border-4 border-white">
                    {/* Decorative Sticker */}
                    <div className="absolute -top-6 -right-6 bg-brand-yellow text-yellow-900 font-bold px-6 py-2 rounded-full transform rotate-12 shadow-md hidden md:block">
                        Hỗ trợ 24/7 ✨
                    </div>

                    {submitted ? (
                        <div className="text-center py-20 animate-in fade-in slide-in-from-bottom-4">
                            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle size={48} className="text-green-600" />
                            </div>
                            <h3 className="text-3xl font-black text-gray-900 mb-4">Gửi thành công!</h3>
                            <p className="text-xl text-gray-600">
                                Cảm ơn ba mẹ. WonderKids sẽ liên hệ lại sớm nhất có thể ạ! ❤️
                            </p>
                            <button
                                onClick={() => setSubmitted(false)}
                                className="mt-8 text-brand-purple font-bold hover:underline"
                            >
                                Gửi thêm thông tin khác
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="font-bold text-gray-700 ml-1 flex items-center gap-2">
                                        <User size={18} className="text-brand-purple" /> Họ và tên ba mẹ
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/10 transition-all font-medium outline-none placeholder:text-gray-400"
                                        placeholder="Ví dụ: Nguyễn Văn A"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="font-bold text-gray-700 ml-1 flex items-center gap-2">
                                        <Phone size={18} className="text-brand-purple" /> Số điện thoại
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/10 transition-all font-medium outline-none placeholder:text-gray-400"
                                        placeholder="0912 345 678"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="font-bold text-gray-700 ml-1 flex items-center gap-2">
                                    <Mail size={18} className="text-brand-purple" /> Email (nếu có)
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/10 transition-all font-medium outline-none placeholder:text-gray-400"
                                    placeholder="ba_me@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="font-bold text-gray-700 ml-1 flex items-center gap-2">
                                    <MessageSquare size={18} className="text-brand-purple" /> Nội dung cần tư vấn
                                </label>
                                <textarea
                                    rows={4}
                                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/10 transition-all font-medium outline-none placeholder:text-gray-400 resize-none"
                                    placeholder="Ba mẹ quan tâm đến khóa học cho bé mấy tuổi? Bé có vấn đề gì cần hỗ trợ không ạ?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-brand-purple hover:bg-brand-darkPurple text-white font-black text-lg py-4 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group"
                            >
                                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                                Gửi thông tin ngay
                            </button>
                        </form>
                    )}
                </div>

                {/* Additional Contact Info */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-6 bg-white rounded-3xl shadow-sm border border-gray-100">
                        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Phone size={24} />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-1">Hotline</h3>
                        <p className="text-gray-500 font-medium">1900 1234 56</p>
                    </div>
                    <div className="p-6 bg-white rounded-3xl shadow-sm border border-gray-100">
                        <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Mail size={24} />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                        <p className="text-gray-500 font-medium">hello@wonderkids.vn</p>
                    </div>
                    <div className="p-6 bg-white rounded-3xl shadow-sm border border-gray-100">
                        <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <MessageSquare size={24} />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-1">Facebook</h3>
                        <p className="text-gray-500 font-medium">WonderKids Vietnam</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Contact;
