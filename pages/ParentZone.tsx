import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ShieldCheck, Heart, Users, Star, Lock, EyeOff, MessageCircleOff, GraduationCap, Stethoscope, Smile } from 'lucide-react';
import { ScribbleUnderline, ScribbleLoop, ScribbleArrow } from '../components/Icons';

const ParentZone: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#fffbeb] font-sans selection:bg-brand-yellow/30">
            <Navbar />

            {/* Hero Section */}
            <div className="relative pt-16 pb-20 px-4 text-center overflow-hidden">
                <div className="absolute top-10 left-10 text-brand-purple/10 hidden lg:block">
                    <ScribbleLoop className="w-32 h-32" />
                </div>
                <div className="absolute top-20 right-10 text-brand-yellow/30 hidden lg:block">
                    <ScribbleLoop className="w-40 h-40 rotate-90" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-brand-purple/10 text-brand-purple font-black tracking-wider uppercase mb-6 animate-fade-in">
                        Câu chuyện của chúng mình
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 relative inline-block">
                        Hành trình khôn lớn <br />
                        <span className="text-brand-purple">An toàn & Hạnh phúc</span>
                        <div className="absolute -bottom-4 left-0 w-full text-brand-yellow">
                            <ScribbleUnderline />
                        </div>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto font-medium">
                        WonderKids ra đời với mong muốn trở thành người bạn đồng hành đáng tin cậy, giúp con khám phá bản thân và thế giới xung quanh một cách an toàn nhất.
                    </p>
                </div>
            </div>

            {/* Core Values Section */}
            <div className="max-w-6xl mx-auto px-4 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Value 1 */}
                    <div className="bg-white rounded-[2.5rem] p-8 border-4 border-white shadow-lg shadow-blue-100 hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600">
                            <Heart size={32} fill="currentColor" />
                        </div>
                        <h3 className="text-2xl font-black text-gray-900 mb-4">Giáo dục từ Tâm</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Nội dung được xây dựng dựa trên sự thấu hiểu tâm lý trẻ thơ, nhẹ nhàng và tinh tế như lời thủ thỉ của mẹ.
                        </p>
                    </div>

                    {/* Value 2 */}
                    <div className="bg-white rounded-[2.5rem] p-8 border-4 border-white shadow-lg shadow-purple-100 hover:-translate-y-2 transition-transform duration-300 transform md:-rotate-1">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 text-brand-purple">
                            <ShieldCheck size={32} />
                        </div>
                        <h3 className="text-2xl font-black text-gray-900 mb-4">Chuẩn Khoa học</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Kiến thức y khoa chuẩn xác được cố vấn bởi đội ngũ Bác sĩ và Chuyên gia tâm lý hàng đầu.
                        </p>
                    </div>

                    {/* Value 3 */}
                    <div className="bg-white rounded-[2.5rem] p-8 border-4 border-white shadow-lg shadow-yellow-100 hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6 text-yellow-600">
                            <Smile size={32} />
                        </div>
                        <h3 className="text-2xl font-black text-gray-900 mb-4">Học vui - Nhớ lâu</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Biến những bài học khô khan thành trò chơi, câu chuyện thú vị giúp con tiếp thu tự nhiên.
                        </p>
                    </div>
                </div>
            </div>

            {/* Expert Team Section */}
            <div className="bg-white py-20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-8 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDEyMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PHBhdGggZD0iTTAgMGw2MDAgMTAwTDEyMDAgMHYxMjBIMHoiIGZpbGw9IiNmZmZiZWIiLz48L3N2Zz4')] transform rotate-180"></div>

                <div className="max-w-5xl mx-auto px-4 text-center">
                    <div className="inline-block relative mb-12">
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900">Ban cố vấn chuyên môn</h2>
                        <div className="absolute -top-6 -right-8 text-brand-yellow">
                            <ScribbleArrow className="w-16 h-16 transform rotate-45" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Box 1 */}
                        <div className="flex flex-col items-center group">
                            <div className="w-32 h-32 bg-blue-50 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-lg group-hover:scale-110 transition-transform">
                                <Stethoscope size={48} className="text-blue-500" />
                            </div>
                            <h3 className="text-2xl font-black text-gray-900 mb-1">Bác sĩ Nhi khoa</h3>
                            <p className="text-brand-purple font-bold mb-3">Cố vấn Y khoa</p>
                            <p className="text-gray-600 max-w-sm mx-auto">
                                Đảm bảo các kiến thức về cơ thể, sức khỏe sinh sản là hoàn toàn chính xác và phù hợp lứa tuổi.
                            </p>
                        </div>

                        {/* Box 2 */}
                        <div className="flex flex-col items-center group">
                            <div className="w-32 h-32 bg-pink-50 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-lg group-hover:scale-110 transition-transform">
                                <Users size={48} className="text-pink-500" />
                            </div>
                            <h3 className="text-2xl font-black text-gray-900 mb-1">Chuyên gia Tâm lý</h3>
                            <p className="text-brand-purple font-bold mb-3">Cố vấn Giáo dục</p>
                            <p className="text-gray-600 max-w-sm mx-auto">
                                Xây dựng phương pháp truyền tải, cách đặt vấn đề khéo léo giúp trẻ không bị ngại ngùng, sợ hãi.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Safety Commitment - Redesigned */}
            <div className="py-20 px-4 bg-[#fffbeb]">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-brand-purple text-white rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
                        {/* Decorative circles */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-5 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>

                        <div className="text-center relative z-10">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-8 shadow-md">
                                <ShieldCheck size={40} className="text-brand-purple" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black mb-12">Cam kết An toàn tuyệt đối</h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl border border-white/20">
                                    <Lock className="mb-4 text-green-300" size={32} />
                                    <h3 className="font-bold text-xl mb-2">Bảo mật 100%</h3>
                                    <p className="text-brand-lightPurple text-sm leading-relaxed">
                                        Chúng tôi không thu thập hình ảnh cá nhân hay dữ liệu nhạy cảm của trẻ dưới mọi hình thức.
                                    </p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl border border-white/20">
                                    <MessageCircleOff className="mb-4 text-pink-300" size={32} />
                                    <h3 className="font-bold text-xl mb-2">Không Chat 1-1</h3>
                                    <p className="text-brand-lightPurple text-sm leading-relaxed">
                                        Hệ thống chặn mọi tính năng nhắn tin riêng tư để ngăn ngừa rủi ro từ người lạ.
                                    </p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl border border-white/20">
                                    <EyeOff className="mb-4 text-yellow-300" size={32} />
                                    <h3 className="font-bold text-xl mb-2">Kiểm duyệt</h3>
                                    <p className="text-brand-lightPurple text-sm leading-relaxed">
                                        Mọi nội dung đều được kiểm duyệt chặt chẽ, loại bỏ hoàn toàn từ ngữ không phù hợp.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ParentZone;
