import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ArrowUpRight } from 'lucide-react';
import { ScribbleArrow, ScribbleUnderline, ScribbleLoop } from '../components/Icons';

const TopicSelection: React.FC = () => {
    const navigate = useNavigate();

    const ageGroups = [
        {
            id: '6-8',
            title: '6 - 8 Tuổi',
            subtitle: 'Khám phá cơ thể & An toàn',
            color: 'bg-[#a5f3fc]', // Cyan-200
            borderColor: 'border-[#22d3ee]', // Cyan-400
            textColor: 'text-[#0e7490]', // Cyan-700
            hoverColor: 'hover:bg-[#67e8f9]',
            img: '/age-6-8.png',
            desc: 'Học về tên gọi cơ thể, vùng riêng tư và kỹ năng tự bảo vệ.',
            decor: 'top-2 right-2'
        },
        {
            id: '9-11',
            title: '9 - 11 Tuổi',
            subtitle: 'Tuổi dậy thì & Cảm xúc',
            color: 'bg-[#fef08a]', // Yellow-200
            borderColor: 'border-[#facc15]', // Yellow-400
            textColor: 'text-[#a16207]', // Yellow-700
            hoverColor: 'hover:bg-[#fde047]',
            img: '/age-9-11.png',
            desc: 'Tìm hiểu những thay đổi của cơ thể và quản lý cảm xúc.',
            decor: 'bottom-2 left-2'
        },
        {
            id: '12-14',
            title: '12 - 14 Tuổi',
            subtitle: 'Tôn trọng & Trưởng thành',
            color: 'bg-[#e9d5ff]', // Purple-200
            borderColor: 'border-[#c084fc]', // Purple-400
            textColor: 'text-[#7e22ce]', // Purple-700
            hoverColor: 'hover:bg-[#d8b4fe]',
            img: '/age-12-14.png',
            desc: 'Kiến thức khoa học về sức khỏe sinh sản và sự đồng thuận.',
            decor: 'top-10 -right-4'
        },
        {
            id: '15-17',
            title: '15 - 17 Tuổi',
            subtitle: 'Trách nhiệm & Quyết định',
            color: 'bg-[#bbf7d0]', // Green-200
            borderColor: 'border-[#4ade80]', // Green-400
            textColor: 'text-[#15803d]', // Green-700
            hoverColor: 'hover:bg-[#86efac]',
            img: '/age-15-17.png',
            desc: 'Hiểu về mối quan hệ lành mạnh, trách nhiệm cá nhân và kỹ năng số.',
            decor: '-bottom-4 -right-2'
        }
    ];

    return (
        <div className="min-h-screen bg-[#fffbeb] font-sans selection:bg-brand-yellow/30">
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
                {/* Decorative Background Elements */}
                <div className="hidden lg:block absolute top-10 left-10 text-brand-purple/20">
                    <ScribbleLoop className="w-32 h-32" />
                </div>
                <div className="hidden lg:block absolute bottom-10 right-10 text-brand-yellow/30">
                    <ScribbleArrow className="w-40 h-40 rotate-180" />
                </div>

                <div className="flex flex-col items-center text-center mb-20 relative z-10">
                    <span className="py-1 px-3 rounded-full bg-brand-lightPurple text-brand-purple text-sm font-bold tracking-wider uppercase mb-4 animate-bounce">
                        Bắt đầu hành trình
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 relative inline-block">
                        Con đang ở độ tuổi nào?
                        <span className="absolute -bottom-6 right-0 hidden md:block text-brand-yellow">
                            <ScribbleUnderline className="w-64" />
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Chọn một cánh cửa để bước vào thế giới kiến thức thú vị, an toàn và đầy màu sắc!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {ageGroups.map((group) => (
                        <div
                            key={group.id}
                            onClick={() => navigate(`/lessons/${group.id}`)}
                            className={`
                                group relative p-8 rounded-[2.5rem] border-4 
                                ${group.borderColor} ${group.color} ${group.hoverColor}
                                cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:rotate-1 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)]
                                flex flex-col h-full
                            `}
                        >
                            {/* Card Header Illustration */}
                            <div className="relative mb-6 transform group-hover:scale-105 transition-transform duration-500">
                                <div className="absolute inset-0 bg-white/40 rounded-full blur-2xl group-hover:blur-3xl transition-all" />
                                <img
                                    src={group.img}
                                    alt={group.title}
                                    className="relative w-40 h-40 mx-auto object-cover object-top rounded-3xl drop-shadow-md z-10"
                                    onError={(e) => {
                                        // Fallback if image not generated yet
                                        e.currentTarget.src = "https://placehold.co/200x200/png?text=Image";
                                    }}
                                />
                            </div>

                            {/* Text Content */}
                            <div className="relative z-10 text-center flex-grow">
                                <div className="mb-2">
                                    <span className={`inline-block px-3 py-1 bg-white/60 rounded-full text-xs font-black tracking-widest uppercase ${group.textColor}`}>
                                        Giai đoạn
                                    </span>
                                </div>
                                <h3 className={`text-2xl font-black mb-2 ${group.textColor} drop-shadow-sm`}>
                                    {group.title}
                                </h3>
                                <p className="font-bold text-gray-700 text-sm mb-4 leading-tight opacity-90">
                                    {group.subtitle}
                                </p>
                                <p className="text-gray-600 text-sm line-clamp-3 mb-6 bg-white/40 p-3 rounded-xl">
                                    {group.desc}
                                </p>
                            </div>

                            {/* Button */}
                            <div className="mt-auto">
                                <button className="w-full bg-white text-gray-800 py-3 rounded-2xl font-bold shadow-sm group-hover:bg-brand-purple group-hover:text-white transition-colors flex items-center justify-center gap-2">
                                    Khám phá <ArrowUpRight size={18} />
                                </button>
                            </div>

                            {/* Fun Badge/Sticker Effect */}
                            <div className={`absolute w-4 h-4 rounded-full bg-white/50 ${group.decor}`} />
                            <div className={`absolute w-2 h-2 rounded-full bg-white/30 top-1/2 left-4`} />
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default TopicSelection;
