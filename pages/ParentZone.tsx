import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ShieldCheck, Heart, Users, Star, Lock, EyeOff, MessageCircleOff, GraduationCap, Stethoscope, Smile } from 'lucide-react';
import { ScribbleUnderline, ScribbleLoop, ScribbleArrow } from '../components/Icons';
import FadeIn from '../components/animations/FadeIn';

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
                    <FadeIn delay={0.2}>
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
                    </FadeIn>
                </div>
            </div>

            {/* Combined Journey & Values Section - Journey Style */}
            <div className="max-w-7xl mx-auto px-4 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                    {/* Item 1: Heart / Trust */}
                    <FadeIn delay={0.3} className="h-full">
                        <div className="flex flex-col items-center text-center group h-full">
                            <div className="relative mb-8 transform group-hover:scale-105 transition-transform duration-500">
                                <div className="absolute inset-0 bg-blue-200 rounded-[2.5rem] rotate-6 opacity-60 scale-105 group-hover:rotate-12 transition-transform"></div>
                                <div className="relative">
                                    <img src="/images/trust_team.png" alt="Giáo dục từ Tâm" className="w-72 h-64 object-cover rounded-[2rem] shadow-xl border-4 border-white -rotate-3 group-hover:rotate-0 transition-transform duration-700" />
                                    <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center border-4 border-white shadow-lg z-20 animate-bounce-slow">
                                        <Heart size={28} className="text-blue-600" fill="currentColor" />
                                    </div>
                                </div>
                            </div>
                            <span className="text-blue-500 font-bold tracking-wider text-xs uppercase mb-2">Khởi nguồn yêu thương</span>
                            <h3 className="text-3xl font-black text-gray-900 mb-4">Giáo dục từ Tâm</h3>
                            <p className="text-gray-600 leading-relaxed px-4">
                                Bắt đầu từ mong muốn bảo vệ trẻ em, chúng tôi xây dựng nội dung dựa trên sự thấu hiểu tâm lý trẻ thơ, nhẹ nhàng và tinh tế như lời thủ thỉ của mẹ.
                            </p>
                        </div>
                    </FadeIn>

                    {/* Item 2: Science / Growth */}
                    <FadeIn delay={0.5} className="h-full">
                        <div className="flex flex-col items-center text-center group mt-12 md:mt-0 h-full">
                            <div className="relative mb-8 transform group-hover:scale-105 transition-transform duration-500">
                                <div className="absolute inset-0 bg-purple-200 rounded-[2.5rem] -rotate-3 opacity-60 scale-105 group-hover:-rotate-6 transition-transform"></div>
                                <div className="relative">
                                    <img src="/images/growth_puberty.png" alt="Chuẩn Khoa học" className="w-72 h-64 object-cover rounded-[2rem] shadow-xl border-4 border-white rotate-2 group-hover:rotate-0 transition-transform duration-700" />
                                    <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center border-4 border-white shadow-lg z-20 animate-bounce-slow delay-150">
                                        <ShieldCheck size={28} className="text-brand-purple" />
                                    </div>
                                </div>
                            </div>
                            <span className="text-brand-purple font-bold tracking-wider text-xs uppercase mb-2">Vun đắp hiểu biết</span>
                            <h3 className="text-3xl font-black text-gray-900 mb-4">Chuẩn Khoa học</h3>
                            <p className="text-gray-600 leading-relaxed px-4">
                                Kiến thức y khoa chuẩn xác được cố vấn bởi đội ngũ chuyên gia hàng đầu. Xây dựng nền tảng vững chắc cho sự phát triển toàn diện của trẻ.
                            </p>
                        </div>
                    </FadeIn>

                    {/* Item 3: Fun / Future */}
                    <FadeIn delay={0.7} className="h-full">
                        <div className="flex flex-col items-center text-center group mt-12 md:mt-0 h-full">
                            <div className="relative mb-8 transform group-hover:scale-105 transition-transform duration-500">
                                <div className="absolute inset-0 bg-yellow-200 rounded-[2.5rem] rotate-3 opacity-60 scale-105 group-hover:rotate-6 transition-transform"></div>
                                <div className="relative">
                                    <img src="/images/helping_hand.png" alt="Học vui - Nhớ lâu" className="w-72 h-64 object-cover rounded-[2rem] shadow-xl border-4 border-white -rotate-2 group-hover:rotate-0 transition-transform duration-700" />
                                    <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center border-4 border-white shadow-lg z-20 animate-bounce-slow delay-300">
                                        <Smile size={28} className="text-yellow-600" />
                                    </div>
                                </div>
                            </div>
                            <span className="text-yellow-600 font-bold tracking-wider text-xs uppercase mb-2">Hướng tới tương lai</span>
                            <h3 className="text-3xl font-black text-gray-900 mb-4">Học vui - Nhớ lâu</h3>
                            <p className="text-gray-600 leading-relaxed px-4">
                                Biến bài học thành trò chơi thú vị giúp con tiếp thu tự nhiên. Kiến tạo một thế hệ trẻ tự tin, bản lĩnh và biết yêu thương bản thân.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </div>

            {/* Team Members Section */}
            <div className="bg-white py-20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-8 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDEyMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PHBhdGggZD0iTTAgMGw2MDAgMTAwTDEyMDAgMHYxMjBIMHoiIGZpbGw9IiNmZmZiZWIiLz48L3N2Zz4')] transform rotate-180"></div>

                <div className="max-w-7xl mx-auto px-4 text-center">
                    <FadeIn delay={0.2}>
                        <div className="inline-block relative mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Đội ngũ thành viên</h2>
                            <div className="absolute -top-6 -right-8 text-brand-yellow">
                                <ScribbleArrow className="w-16 h-16 transform rotate-45" />
                            </div>
                        </div>
                    </FadeIn>

                    <div className="flex flex-wrap justify-center gap-20">
                        {/* Member 1 */}
                        <FadeIn delay={0.3}>
                            <div className="flex flex-col items-center group">
                                <div className="relative mb-4">
                                    <div className="absolute inset-0 bg-yellow-100 rounded-full transform scale-90 group-hover:scale-105 transition-transform duration-300"></div>
                                    <img src="/images/avatars/member1.jpg" alt="Lương Ngọc Bảo Trân" className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-lg" />
                                </div>
                                <h3 className="text-xl font-black text-gray-900">Lương Ngọc Bảo Trân</h3>
                                <p className="text-brand-purple font-bold text-sm">Thành viên</p>
                            </div>
                        </FadeIn>
                        {/* Member 2 */}
                        <FadeIn delay={0.5}>
                            <div className="flex flex-col items-center group">
                                <div className="relative mb-4">
                                    <div className="absolute inset-0 bg-pink-100 rounded-full transform scale-90 group-hover:scale-105 transition-transform duration-300"></div>
                                    <img src="/images/avatars/member2.jpg" alt="Phan Thị Thuỳ Nhung" className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-lg" />
                                </div>
                                <h3 className="text-xl font-black text-gray-900">Phan Thị Thuỳ Nhung</h3>
                                <p className="text-brand-purple font-bold text-sm">Thành viên</p>
                            </div>
                        </FadeIn>
                        {/* Member 3 */}
                        <FadeIn delay={0.7}>
                            <div className="flex flex-col items-center group">
                                <div className="relative mb-4">
                                    <div className="absolute inset-0 bg-blue-100 rounded-full transform scale-90 group-hover:scale-105 transition-transform duration-300"></div>
                                    <img src="/images/avatars/member3.jpg" alt="Nguyễn Gia Triều" className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-lg" />
                                </div>
                                <h3 className="text-xl font-black text-gray-900">Nguyễn Gia Triều</h3>
                                <p className="text-brand-purple font-bold text-sm">Thành viên</p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>

            {/* Safety Commitment - Split Layout */}
            <div className="py-24 px-4 bg-white relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60 transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-60 transform translate-x-1/3 translate-y-1/3"></div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                    {/* Left: Image */}
                    <div className="relative order-2 lg:order-1">
                        <FadeIn direction="right" delay={0.3}>
                            <div className="absolute inset-0 bg-brand-purple/10 rounded-[3rem] rotate-3 transform scale-105"></div>
                            <img src="/images/digital_footprint.png" alt="Safety First" className="relative w-full rounded-[2.5rem] shadow-2xl border-8 border-white transform -rotate-2 hover:rotate-0 transition-transform duration-500" />

                            {/* Floating Badge */}
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce-slow">
                                <ShieldCheck size={40} className="text-green-500" />
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right: Content */}
                    <div className="order-1 lg:order-2">
                        <FadeIn direction="left" delay={0.3} className="h-full">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 font-bold tracking-wider uppercase mb-6">
                                Ưu tiên hàng đầu
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
                                Cam kết <span className="text-brand-purple">An toàn tuyệt đối</span> cho trẻ
                            </h2>

                            <div className="space-y-8">
                                {/* Point 1 */}
                                <div className="flex gap-6 group">
                                    <div className="flex-shrink-0 w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                                        <Lock size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Bảo mật thông tin 100%</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Chúng tôi cam kết không thu thập hình ảnh, vị trí hay bất kỳ dữ liệu nhạy cảm nào của trẻ. Mọi thông tin đều được mã hóa.
                                        </p>
                                    </div>
                                </div>

                                {/* Point 2 */}
                                <div className="flex gap-6 group">
                                    <div className="flex-shrink-0 w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300">
                                        <MessageCircleOff size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Không tính năng Chat 1-1</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Loại bỏ hoàn toàn rủi ro từ người lạ. Trẻ chỉ tương tác với các nội dung học tập đã được kiểm duyệt, không thể nhắn tin riêng tư.
                                        </p>
                                    </div>
                                </div>

                                {/* Point 3 */}
                                <div className="flex gap-6 group">
                                    <div className="flex-shrink-0 w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center text-yellow-600 group-hover:bg-yellow-500 group-hover:text-white transition-colors duration-300">
                                        <EyeOff size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Kiểm duyệt nội dung chặt chẽ</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            100% nội dung hình ảnh, âm thanh và ngôn ngữ đều được đội ngũ chuyên gia tâm lý và giáo dục kiểm tra kỹ lưỡng.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ParentZone;
