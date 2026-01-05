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
            case '6-8': return { bg: 'bg-[#a5f3fc]', border: 'border-[#22d3ee]', text: 'text-[#0e7490]', lightBg: 'bg-[#ecfeff]' };
            case '9-11': return { bg: 'bg-[#fef08a]', border: 'border-[#facc15]', text: 'text-[#a16207]', lightBg: 'bg-[#fefce8]' };
            case '12-14': return { bg: 'bg-[#e9d5ff]', border: 'border-[#c084fc]', text: 'text-[#7e22ce]', lightBg: 'bg-[#faf5ff]' };
            case '15-17': return { bg: 'bg-[#bbf7d0]', border: 'border-[#4ade80]', text: 'text-[#15803d]', lightBg: 'bg-[#f0fdf4]' };
            default: return { bg: 'bg-brand-purple', border: 'border-brand-darkPurple', text: 'text-brand-purple', lightBg: 'bg-gray-50' };
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
        <div className={`min-h-screen ${theme.lightBg} font-sans selection:bg-brand-yellow/30`}>
            <Navbar />

            <TourGuide
                steps={tourSteps}
                isOpen={showTour}
                onClose={() => {
                    setShowTour(false);
                    localStorage.setItem('hasSeenLessonTour', 'true');
                }}
            />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative">
                {/* Decorative Elements */}
                <div className="hidden lg:block absolute top-[15%] left-10 text-brand-purple/10">
                    <ScribbleLoop className="w-24 h-24" />
                </div>
                <div className="hidden lg:block absolute bottom-[10%] right-5 text-brand-yellow/20">
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
                                className={`
                                    group bg-white rounded-[2.5rem] p-3
                                    border-b-8 border-r-4 border-l-2 border-t-2 ${theme.border}
                                    shadow-lg hover:shadow-2xl
                                    transition-all duration-300 hover:-translate-y-2 hover:rotate-1 cursor-pointer
                                    flex flex-col
                                `}
                                onClick={() => navigate(`/lesson/${lesson.id}`)}
                            >
                                {/* Image Container (Inner Frame) */}
                                <div className="relative h-48 rounded-[2rem] overflow-hidden mb-4 shadow-inner">
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
                                    <img
                                        src={lesson.thumbnail}
                                        alt={lesson.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />

                                    {/* Category Sticker */}
                                    <div className="absolute top-2 left-2 z-20">
                                        <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider border-2 border-white shadow-md transform -rotate-3
                                            ${lesson.category === 'Body' ? 'bg-blue-400 text-white' :
                                                lesson.category === 'Safety' ? 'bg-red-400 text-white' :
                                                    lesson.category === 'Respect' ? 'bg-green-400 text-white' :
                                                        'bg-purple-400 text-white'
                                            }`}
                                        >
                                            {lesson.category === 'Body' ? '★ Cơ thể' :
                                                lesson.category === 'Safety' ? '★ An toàn' :
                                                    lesson.category === 'Respect' ? '★ Tôn trọng' : '★ Cảm xúc'}
                                        </span>
                                    </div>

                                    {/* Duration Sticker */}
                                    <div className="absolute bottom-2 right-2 z-20">
                                        <div className="bg-white/95 backdrop-blur px-2 py-1 rounded-xl text-xs font-bold text-gray-800 flex items-center gap-1 shadow-sm border-2 border-white/50">
                                            <Clock size={12} className="text-brand-yellow" /> {lesson.duration}
                                        </div>
                                    </div>
                                </div>

                                {/* Content Body */}
                                <div className="px-2 pb-2 flex-grow flex flex-col">
                                    <h3 className="text-xl font-black text-gray-800 mb-2 leading-tight group-hover:text-brand-purple transition-colors">
                                        {lesson.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed font-medium">
                                        {lesson.description}
                                    </p>

                                    {/* Play Button */}
                                    <div className="mt-auto">
                                        <button className={`
                                            w-full py-3 rounded-2xl font-black text-sm uppercase tracking-wide
                                            flex items-center justify-center gap-2
                                            ${theme.bg} ${theme.text}
                                            group-hover:bg-brand-purple group-hover:text-white
                                            transition-all duration-300 shadow-sm
                                        `}>
                                            <Play size={16} fill="currentColor" /> Bắt đầu học
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
