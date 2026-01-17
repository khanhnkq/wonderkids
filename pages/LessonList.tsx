import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { curriculumData } from '../data/curriculum';
import { ArrowLeft, Play, Clock, BookOpen } from 'lucide-react';
import { ScribbleUnderline, ScribbleLoop } from '../components/Icons';

import TourGuide, { TourStep } from '../components/TourGuide';

const LessonList: React.FC = () => {
    const { ageId } = useParams<{ ageId: string }>();
    const navigate = useNavigate();
    const [showTour, setShowTour] = useState(false);

    useEffect(() => {
        // Check if tour has been seen
        const hasSeenTour = localStorage.getItem('hasSeenLessonTour');

        if (!hasSeenTour) {
            // Auto-show tour after a short delay for better UX
            const timer = setTimeout(() => setShowTour(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const lessons = curriculumData.filter(l => l.ageGroup === ageId);

    // Define color theme based on age group directly
    const getTheme = () => {
        switch (ageId) {
            case '6-8': return {
                bg: 'bg-[#a5f3fc]',
                border: 'border-[#22d3ee]',
                text: 'text-[#0e7490]',
                lightBg: 'bg-[#ecfeff]',
                buttonClass: 'bg-cyan-600 hover:bg-cyan-700 text-white shadow-cyan-200',
                bgImage: '/images/bg_sky.png'
            };
            case '9-11': return {
                bg: 'bg-[#fef08a]',
                border: 'border-[#facc15]',
                text: 'text-[#a16207]',
                lightBg: 'bg-[#fefce8]',
                buttonClass: 'bg-yellow-600 hover:bg-yellow-700 text-white shadow-yellow-200',
                bgImage: '/images/bg_sun.jpg'
            };
            case '12-14': return {
                bg: 'bg-[#e9d5ff]',
                border: 'border-[#c084fc]',
                text: 'text-[#7e22ce]',
                lightBg: 'bg-[#faf5ff]',
                buttonClass: 'bg-purple-600 hover:bg-purple-700 text-white shadow-purple-200',
                bgImage: '/images/bg_twilight.jpg'
            };
            case '15-17': return {
                bg: 'bg-[#bbf7d0]',
                border: 'border-[#4ade80]',
                text: 'text-[#15803d]',
                lightBg: 'bg-[#f0fdf4]',
                buttonClass: 'bg-green-600 hover:bg-green-700 text-white shadow-green-200',
                bgImage: '/images/bg_forest.jpg'
            };
            default: return {
                bg: 'bg-brand-purple',
                border: 'border-brand-darkPurple',
                text: 'text-brand-purple',
                lightBg: 'bg-gray-50',
                buttonClass: 'bg-brand-purple hover:bg-brand-darkPurple text-white',
                bgImage: '/images/bg_sky.png'
            };
        }
    };

    const theme = getTheme();
    const ageDisplay = ageId === '6-8' ? '6 - 8 Tuổi' : ageId === '9-11' ? '9 - 11 Tuổi' : ageId === '12-14' ? '12 - 14 Tuổi' : '15 - 17 Tuổi';

    const tourSteps: TourStep[] = [
        {
            targetId: 'page-header',
            title: 'Lộ trình học tập',
            content: 'Chào mừng con! Đây là nơi con tìm thấy những bài học thú vị dành riêng cho lứa tuổi của mình.',
            position: 'bottom',
            gap: 60
        },
        {
            targetId: lessons.length > 0 ? 'first-lesson' : 'empty-state',
            title: 'Kho tàng bài học',
            content: 'Nơi chứa các bài học thú vị về Cơ thể, An toàn và Cảm xúc. Hãy chọn một thẻ để bắt đầu khám phá nhé!',
            position: 'right',
            gap: 60
        },
        {
            targetId: 'back-btn',
            title: 'Quay lại bất cứ lúc nào',
            content: 'Nếu con muốn xem nội dung của độ tuổi khác, hãy bấm vào đây để quay lại màn hình chọn tuổi.',
            position: 'bottom',
            gap: 100
        }
    ];

    return (
        <div className={`min-h-screen font-sans selection:bg-brand-yellow/30 relative overflow-hidden`}>
            {/* Thematic Background Layer */}
            <div className="fixed inset-0 z-0">
                <img
                    src={theme.bgImage}
                    alt="theme-background"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        e.currentTarget.style.display = 'none';
                    }}
                />
                {/* Overlays for readability */}
                <div className={`absolute inset-0 ${theme.lightBg} opacity-70 mix-blend-multiply`} />
                <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
            </div>



            <TourGuide
                steps={tourSteps}
                isOpen={showTour}
                onClose={() => {
                    setShowTour(false);
                    localStorage.setItem('hasSeenLessonTour', 'true');
                }}
            />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
                {/* Decorative Elements */}
                <div className="hidden lg:block absolute top-[15%] left-10 text-brand-purple/20">
                    <ScribbleLoop className="w-24 h-24" />
                </div>
                <div className="hidden lg:block absolute bottom-[10%] right-5 text-brand-yellow/30">
                    <ScribbleLoop className="w-32 h-32 rotate-90" />
                </div>

                {/* Header */}
                <div className="mb-12 relative z-10">
                    <div className="inline-block" id="back-btn">
                        <button
                            onClick={() => navigate('/curriculum')}
                            className="group flex items-center gap-2 text-gray-500 hover:text-brand-purple font-bold mb-6 transition-all hover:-translate-x-1"
                        >
                            <div className="bg-white p-2 rounded-full shadow-sm group-hover:shadow-md transition-all">
                                <ArrowLeft size={20} />
                            </div>
                            <span>Chọn độ tuổi khác</span>
                        </button>
                    </div>

                    <div className="flex flex-col items-center text-center" id="page-header">
                        <div className={`px-4 py-1.5 rounded-full ${theme.bg} ${theme.text} bg-opacity-30 text-sm font-black tracking-wider uppercase mb-3 animate-fade-in`}>
                            Dành cho lứa tuổi {ageDisplay}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 relative inline-block">
                            Danh sách bài học
                            <span className="absolute -bottom-6 right-0 w-full text-brand-yellow">
                                <ScribbleUnderline />
                            </span>
                        </h1>
                    </div>


                </div>

                {lessons.length === 0 ? (
                    <div id="empty-state" className="text-center py-20 bg-white rounded-[2.5rem] border-4 border-dashed border-gray-200">
                        <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <BookOpen size={40} className="text-gray-300" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Đang xây dựng...</h3>
                        <p className="text-gray-500">Nội dung cho độ tuổi này sẽ sớm ra mắt!</p>
                    </div>
                ) : (
                    <div id="lesson-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
                        {lessons.map((lesson, index) => (
                            <div
                                key={lesson.id}
                                id={index === 0 ? 'first-lesson' : undefined}
                                className="animate-pop-up group bg-white/60 backdrop-blur-xl border border-white/50 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer flex flex-col h-full ring-4 ring-transparent hover:ring-white/50"
                                onClick={() => navigate(`/lesson/${lesson.id}`)}
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                {/* Image Section */}
                                <div className="relative h-56 overflow-hidden">
                                    {/* Dark Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity" />

                                    <img
                                        src={lesson.thumbnail}
                                        alt={lesson.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />

                                    {/* Play Button Overlay (Centered) */}
                                    <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100">
                                        <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                                            <Play size={32} fill="white" className="text-white ml-1" />
                                        </div>
                                    </div>

                                    {/* Top Badges */}
                                    <div className="absolute top-4 left-4 z-20 flex gap-2">
                                        <span className={`
                                            px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-white border border-white/20 shadow-lg backdrop-blur-md
                                            ${lesson.category === 'Body' ? 'bg-blue-500/80' :
                                                lesson.category === 'Safety' ? 'bg-red-500/80' :
                                                    lesson.category === 'Respect' ? 'bg-green-500/80' : 'bg-purple-500/80'}
                                        `}>
                                            {lesson.category === 'Body' ? 'Cơ thể' :
                                                lesson.category === 'Safety' ? 'An toàn' :
                                                    lesson.category === 'Respect' ? 'Tôn trọng' : 'Cảm xúc'}
                                        </span>
                                    </div>

                                    <div className="absolute top-4 right-4 z-20">
                                        <div className="bg-black/30 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1 border border-white/20 shadow-lg">
                                            <Clock size={12} className="text-brand-yellow" /> {lesson.duration}
                                        </div>
                                    </div>
                                </div>

                                {/* Content Body */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-black text-gray-900 mb-3 leading-tight group-hover:text-brand-purple transition-colors">
                                        {lesson.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-6 line-clamp-2 leading-relaxed font-medium">
                                        {lesson.description}
                                    </p>

                                    {/* Button */}
                                    <div className="mt-auto">
                                        <button className={`
                                            w-full py-3 rounded-full font-black ${theme.buttonClass}
                                            shadow-lg group-hover:shadow-xl group-hover:scale-[1.02]
                                            transition-all duration-300
                                            flex items-center justify-between px-2 pl-6
                                        `}>
                                            <span className="text-xs uppercase tracking-widest">Bắt đầu học</span>
                                            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                                <Play size={14} fill="currentColor" />
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};

export default LessonList;
