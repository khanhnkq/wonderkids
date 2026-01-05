import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { curriculumData } from '../data/curriculum';
import { ArrowLeft, ChevronRight, CheckCircle, XCircle, Home, Volume2 } from 'lucide-react';
import { ScribbleLoop, ScribbleUnderline } from '../components/Icons';
import TourGuide, { TourStep } from '../components/TourGuide';

const LessonPlayer: React.FC = () => {
    const { lessonId } = useParams<{ lessonId: string }>();
    const navigate = useNavigate();
    const lesson = curriculumData.find(l => l.id === lessonId);

    const [currentStep, setCurrentStep] = useState(0);
    const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
    const [showExplanation, setShowExplanation] = useState(false);

    const [showTour, setShowTour] = useState(false);

    // Scroll to top on step change
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentStep]);

    // Scroll to explanation when shown
    useEffect(() => {
        if (showExplanation) {
            const timer = setTimeout(() => {
                document.getElementById('quiz-explanation')?.scrollIntoView({ behavior: 'smooth', block: 'end' });
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [showExplanation]);

    // Check for Tour
    useEffect(() => {
        const hasSeenTour = localStorage.getItem('hasSeenPlayerTour');
        if (!hasSeenTour) {
            const timer = setTimeout(() => setShowTour(true), 1500); // Slightly longer delay for player
            return () => clearTimeout(timer);
        }
    }, []);

    const tourSteps: TourStep[] = [
        {
            targetId: 'player-header',
            title: 'Thanh điều hướng',
            content: 'Tại đây con có thể xem tên bài học và bấm nút "Quay lại" để về danh sách bài học bất cứ lúc nào.',
            position: 'bottom',
            gap: 30
        },
        {
            targetId: 'player-content',
            title: 'Không gian học tập',
            content: 'Nội dung bài học, hình ảnh minh họa và các câu đố thú vị sẽ xuất hiện ở ngay chính giữa màn hình này.',
            position: 'top',
            gap: -100 // Negative gap or adjust position to ensure it's visible? 
            // Actually 'top' relative to the huge content div might be too high.
            // Let's try 'bottom' relative to header? No.
            // Let's rely on auto-flip and maybe 'top'. 
            // Better yet, let's target the 'player-controls' next.
        },
        {
            targetId: 'player-controls',
            title: 'Thanh điều khiển',
            content: 'Dùng các nút này để chuyển sang phần tiếp theo hoặc xem lại phần trước đó. Thanh màu sắc sẽ chỉ cho con biết con đã học được bao nhiêu rồi.',
            position: 'top',
            gap: 30
        }
    ];

    if (!lesson) {
        return <div>Bài học không tồn tại</div>;
    }

    // Dynamic Theme based on Age Group
    const getTheme = () => {
        switch (lesson.ageGroup) {
            case '6-8': return { bg: 'bg-[#ecfeff]', accent: 'bg-[#a5f3fc]', text: 'text-[#0e7490]', border: 'border-[#22d3ee]', button: 'bg-[#06b6d4]' }; // Cyan
            case '9-11': return { bg: 'bg-[#fefce8]', accent: 'bg-[#fef08a]', text: 'text-[#a16207]', border: 'border-[#facc15]', button: 'bg-[#eab308]' }; // Yellow
            case '12-14': return { bg: 'bg-[#faf5ff]', accent: 'bg-[#e9d5ff]', text: 'text-[#7e22ce]', border: 'border-[#c084fc]', button: 'bg-[#9333ea]' }; // Purple
            case '15-17': return { bg: 'bg-[#f0fdf4]', accent: 'bg-[#bbf7d0]', text: 'text-[#15803d]', border: 'border-[#4ade80]', button: 'bg-[#16a34a]' }; // Green
            default: return { bg: 'bg-white', accent: 'bg-gray-100', text: 'text-gray-900', border: 'border-gray-200', button: 'bg-brand-purple' };
        }
    };
    const theme = getTheme();

    // Steps: 0 = Intro, 1..N = MainPoints, N+1 = Interactive/Quiz
    const totalSteps = 1 + lesson.content.mainPoints.length + (lesson.content.interactive ? 1 : 0);

    const handleNext = () => {
        if (currentStep < totalSteps - 1) {
            setCurrentStep(currentStep + 1);
            setQuizAnswer(null); // Reset quiz state
            setShowExplanation(false);
        } else {
            navigate(`/lessons/${lesson.ageGroup}`);
        }
    };

    const renderContent = () => {
        // 1. Introduction
        if (currentStep === 0) {
            return (
                <div className="text-center max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <div className="mb-8 relative inline-block">
                        <div className={`absolute inset-0 ${theme.accent} rounded-full blur-2xl opacity-60 animate-pulse`}></div>
                        <img
                            src={lesson.thumbnail}
                            alt={lesson.title}
                            className="relative w-48 h-48 sm:w-64 sm:h-64 object-cover rounded-full border-8 border-white shadow-2xl mx-auto rotate-3 hover:rotate-0 transition-all duration-500"
                        />
                        <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-full shadow-lg animate-bounce">
                            <span className="text-4xl">👋</span>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 drop-shadow-sm">
                        Chào mừng con đến với bài học <br />
                        <span className={`text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 relative`}>
                            "{lesson.title}"
                            <ScribbleUnderline className={`absolute -bottom-4 left-0 w-full ${theme.text} opacity-50 h-4`} />
                        </span>
                    </h1>

                    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-[2rem] shadow-sm border-2 border-white mt-10">
                        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                            {lesson.content.introduction}
                        </p>
                    </div>
                </div>
            );
        }

        // 2. Main Points
        if (currentStep > 0 && currentStep <= lesson.content.mainPoints.length) {
            const point = lesson.content.mainPoints[currentStep - 1];
            return (
                <div className="max-w-6xl mx-auto animate-in fade-in slide-in-from-right-12 duration-500">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        {/* Text Content */}
                        <div className="order-2 lg:order-1">
                            <div className={`inline-block px-4 py-2 rounded-full ${theme.accent} ${theme.text} font-black text-sm uppercase tracking-widest mb-6 shadow-sm`}>
                                Phần {currentStep} / {lesson.content.mainPoints.length}
                            </div>
                            <h2 className={`text-4xl md:text-5xl font-black ${theme.text} mb-8 leading-tight drop-shadow-sm`}>
                                {point.title}
                            </h2>
                            <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border-l-8 border-gray-100 leading-relaxed text-xl text-gray-700">
                                {point.text}
                            </div>
                        </div>

                        {/* Image Content */}
                        {point.image && (
                            <div className="order-1 lg:order-2 relative group">
                                <div className={`absolute inset-0 ${theme.accent} rounded-[3rem] rotate-6 transform group-hover:rotate-3 transition-transform duration-500 opacity-60`}></div>
                                <img
                                    src={point.image}
                                    alt={point.title}
                                    className="relative rounded-[2.5rem] shadow-2xl w-full object-cover border-8 border-white transform -rotate-2 group-hover:rotate-0 transition-transform duration-500"
                                />
                                {/* Decorative elements */}
                                <div className="absolute -top-6 -right-6 text-yellow-400 rotate-12 animate-pulse">
                                    <ScribbleLoop className="w-20 h-20" />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            );
        }

        // 3. Interactive Quiz
        if (currentStep === totalSteps - 1 && lesson.content.interactive) {
            const quiz = lesson.content.interactive;
            return (
                <div className="max-w-3xl mx-auto animate-in fade-in zoom-in-95 duration-500 w-full">
                    <div className="text-center mb-6 md:mb-10">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-sm border-4 border-white animate-bounce-slow">
                            <span className="text-3xl md:text-4xl">🤔</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">Thử tài của con nhé!</h2>
                        <div className="h-1 w-20 bg-gray-200 mx-auto rounded-full mb-6"></div>
                        <h3 className="text-xl md:text-2xl font-bold text-brand-darkPurple leading-relaxed px-4 py-2 bg-white/50 rounded-xl inline-block">
                            {quiz.question}
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {quiz.options.map((option, idx) => {
                            let btnClass = "w-full p-4 md:p-5 text-left rounded-2xl border-4 transition-all font-bold text-lg flex justify-between items-center shadow-sm relative overflow-hidden group ";

                            if (showExplanation) {
                                if (idx === quiz.correctAnswer) btnClass += "border-green-400 bg-green-50 text-green-700 scale-[1.02] shadow-md";
                                else if (idx === quizAnswer) btnClass += "border-red-300 bg-red-50 text-red-700 opacity-80";
                                else btnClass += "border-gray-100 bg-gray-50 text-gray-300 opacity-50";
                            } else {
                                btnClass += "border-white bg-white hover:border-brand-purple hover:bg-purple-50 hover:shadow-md hover:-translate-y-1";
                            }

                            return (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        if (!showExplanation) {
                                            setQuizAnswer(idx);
                                            setShowExplanation(true);
                                        }
                                    }}
                                    disabled={showExplanation}
                                    className={btnClass}
                                >
                                    <span className="relative z-10 flex items-center gap-3 md:gap-4">
                                        <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm border-2 flex-shrink-0
                                            ${showExplanation && idx === quiz.correctAnswer ? 'bg-green-500 border-green-500 text-white' :
                                                showExplanation && idx === quizAnswer ? 'bg-red-400 border-red-400 text-white' :
                                                    'bg-gray-100 border-gray-200 text-gray-500 group-hover:bg-brand-purple group-hover:border-brand-purple group-hover:text-white transition-colors'}
                                        `}>
                                            {String.fromCharCode(65 + idx)}
                                        </span>
                                        <span className="leading-tight">{option}</span>
                                    </span>
                                    {showExplanation && idx === quiz.correctAnswer && <CheckCircle size={24} className="text-green-500 animate-bounce absolute right-2 top-2" />}
                                    {showExplanation && idx === quizAnswer && idx !== quiz.correctAnswer && <XCircle size={24} className="text-red-400 absolute right-2 top-2" />}
                                </button>
                            );
                        })}
                    </div>

                    {showExplanation && (
                        <div
                            id="quiz-explanation"
                            className={`mt-8 p-6 rounded-[2rem] animate-in fade-in slide-in-from-bottom-4 border-4 dashed ${quizAnswer === quiz.correctAnswer ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}
                        >
                            <div className="flex items-start gap-4">
                                <span className="text-4xl animate-bounce">{quizAnswer === quiz.correctAnswer ? '🎉' : '💪'}</span>
                                <div>
                                    <h4 className={`font-black text-lg mb-1 ${quizAnswer === quiz.correctAnswer ? 'text-green-700' : 'text-red-700'}`}>
                                        {quizAnswer === quiz.correctAnswer ? 'Chính xác rồi!' : 'Cố lên nhé!'}
                                    </h4>
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        {quiz.explanation}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            );
        }

        return null;
    };

    return (
        <div className={`min-h-screen ${theme.bg} flex flex-col font-sans transition-colors duration-500 selection:bg-brand-yellow/30`}>
            {/* Custom Navbar */}
            <TourGuide
                steps={tourSteps}
                isOpen={showTour}
                onClose={() => {
                    setShowTour(false);
                    localStorage.setItem('hasSeenPlayerTour', 'true');
                }}
            />

            <div id="player-header" className="px-4 py-4 md:px-8 md:py-6 flex justify-between items-center sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100/50 shadow-sm">
                <button
                    onClick={() => navigate(`/lessons/${lesson.ageGroup}`)}
                    className="p-3 bg-white hover:bg-gray-50 rounded-2xl text-gray-500 hover:text-brand-purple transition-all shadow-sm border border-gray-100 group flex items-center gap-2"
                >
                    <ArrowLeft size={20} />
                    <span className="font-bold hidden sm:inline">Quay lại</span>
                </button>

                <div className="flex flex-col items-center">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-0.5">Bài học</span>
                    <span className="font-black text-gray-800 text-lg md:text-xl">{lesson.title}</span>
                </div>

                <div className="w-24 flex justify-end">
                    <button className="p-3 bg-white rounded-2xl text-gray-400 hover:text-brand-purple transition-all shadow-sm border border-gray-100">
                        <Home size={20} onClick={() => navigate('/')} />
                    </button>
                </div>
            </div>

            <div id="player-content" className="flex-1 flex flex-col justify-center w-full px-4 pt-8 pb-40 md:py-12 md:pb-32 overflow-x-hidden relative">
                {/* Decorative background blobs */}
                <div className={`absolute top-20 left-10 w-64 h-64 ${theme.accent} rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob`}></div>
                <div className={`absolute bottom-20 right-10 w-64 h-64 ${theme.accent} rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000`}></div>

                {renderContent()}
            </div>

            {/* Footer Navigation bar */}
            <div id="player-controls" className="p-4 md:p-6 bg-white border-t border-gray-100 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)] sticky bottom-0 z-50">
                <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center">

                    {/* Fun Progress Bar */}
                    <div className="flex gap-1.5 bg-gray-100 p-2 rounded-full">
                        {Array.from({ length: totalSteps }).map((_, i) => (
                            <div
                                key={i}
                                className={`h-3 w-8 md:w-12 rounded-full transition-all duration-300 ${i <= currentStep ? `${theme.button} shadow-sm` : 'bg-gray-300/50'
                                    }`}
                            />
                        ))}
                    </div>

                    <div className="flex gap-4 w-full sm:w-auto">
                        <button
                            onClick={() => currentStep > 0 && setCurrentStep(currentStep - 1)}
                            disabled={currentStep === 0}
                            className={`flex-1 sm:flex-none px-6 py-3 rounded-2xl font-bold transition-all border-2 border-transparent
                                ${currentStep === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-50 hover:border-gray-200'}
                             `}
                        >
                            Trước
                        </button>

                        <button
                            onClick={handleNext}
                            disabled={currentStep === totalSteps - 1 && !showExplanation && lesson.content.interactive}
                            className={`flex-1 sm:flex-none px-8 py-3 rounded-2xl font-black text-white flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1
                                ${currentStep === totalSteps - 1 && !showExplanation && lesson.content.interactive
                                    ? 'bg-gray-300 cursor-not-allowed'
                                    : `${theme.button} hover:opacity-90`
                                }
                            `}
                        >
                            {currentStep === totalSteps - 1 ? 'Hoàn thành' : 'Tiếp theo'}
                            <ChevronRight size={20} strokeWidth={3} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LessonPlayer;
