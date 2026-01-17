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
                    {ageGroups.map((group, index) => (
                        <div
                            key={group.id}
                            onClick={() => navigate(`/lessons/${group.id}`)}
                            className="animate-pop-up group relative h-[32rem] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            {/* Background Image with Zoom Effect */}
                            <div className="absolute inset-0">
                                <img
                                    src={group.img}
                                    alt={group.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    onError={(e) => {
                                        e.currentTarget.src = "https://placehold.co/400x600/png?text=WonderKids";
                                    }}
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 transition-opacity duration-300" />
                            </div>

                            {/* Content Layer */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">


                                {/* Age Indicator */}
                                <div className="mb-2 overflow-hidden">
                                    <span className={`inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-bold tracking-widest uppercase transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100`}>
                                        Độ tuổi phù hợp
                                    </span>
                                </div>

                                {/* Title & Subtitle */}
                                <h3 className="text-4xl font-black mb-2 tracking-tight group-hover:text-brand-yellow transition-colors duration-300">
                                    {group.title}
                                </h3>
                                <div className={`h-1 w-20 rounded-full mb-4 ${group.color}`} />

                                <p className="text-xl font-bold mb-3 text-white/90">
                                    {group.subtitle}
                                </p>

                                {/* Description - Expandable on hover could be nice, but keeping it visible is safer for UX */}
                                <p className="text-gray-200 text-sm leading-relaxed mb-6 line-clamp-3 opacity-80 group-hover:opacity-100 transition-opacity">
                                    {group.desc}
                                </p>

                                {/* CTA Button */}
                                <button className={`
                                    w-full py-2 rounded-full font-black text-white bg-white/20 backdrop-blur-md
                                    border border-white/30
                                    transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 
                                    transition-all duration-500 ease-out shadow-2xl
                                    hover:bg-white hover:text-gray-900 hover:border-white
                                    flex items-center justify-between px-2 pl-5 group/btn
                                `}>
                                    <span className="text-xs font-black uppercase tracking-widest">Khám phá</span>
                                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover/btn:rotate-45 transition-transform duration-300 group-hover:bg-gray-100">
                                        <ArrowUpRight size={16} />
                                    </div>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default TopicSelection;
