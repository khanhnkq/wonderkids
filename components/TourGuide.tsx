import React, { useState, useEffect } from 'react';
import { X, ChevronRight, ChevronLeft } from 'lucide-react';

export interface TourStep {
    targetId: string;
    title: string;
    content: string;
    position: 'top' | 'bottom' | 'left' | 'right';
    gap?: number; // Optional custom gap
}

interface TourGuideProps {
    steps: TourStep[];
    isOpen: boolean;
    onClose: () => void;
}

const TourGuide: React.FC<TourGuideProps> = ({ steps, isOpen, onClose }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [positionStyle, setPositionStyle] = useState<React.CSSProperties>({});

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            updateHighlight();
        } else {
            document.body.style.overflow = 'auto';
            clearHighlight();
        }

        return () => {
            document.body.style.overflow = 'auto';
            clearHighlight();
        };
    }, [isOpen, currentStep]);

    const updateHighlight = () => {
        // Remove highlight from previous step
        clearHighlight();

        const step = steps[currentStep];
        const target = document.getElementById(step.targetId);

        if (target) {
            // Scroll element into view first to get correct bounding rects relative to viewport
            target.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Add highlight class
            target.classList.add('tour-highlight', 'relative', 'z-[60]', 'bg-white', 'rounded-[2rem]', 'shadow-[0_0_0_9999px_rgba(0,0,0,0.7)]');

            // Calculate tooltip position with auto-flip logic
            const rect = target.getBoundingClientRect();
            const style: React.CSSProperties = {};

            // Estimate tooltip height/width
            const TOOLTIP_WIDTH = 300;
            const TOOLTIP_HEIGHT = 150;
            const GAP = step.gap ?? 24; // Use custom gap or default

            let finalPosition = step.position;

            // Simple Auto-flip (vertical only for now as horizontal flow is rare)
            if (step.position === 'top' && rect.top < (TOOLTIP_HEIGHT + GAP)) {
                finalPosition = 'bottom';
            } else if (step.position === 'bottom' && (window.innerHeight - rect.bottom) < (TOOLTIP_HEIGHT + GAP)) {
                finalPosition = 'top';
            }

            // Calculate base position
            let topPosition = 0;
            let leftPosition = 0;
            let transformString = '';

            // Horizontal Clamping Function
            const getClampedLeft = (targetCenter: number) => {
                const halfWidth = TOOLTIP_WIDTH / 2;
                const screenWidth = window.innerWidth;
                const PADDING = 20;

                let left = targetCenter;

                // If moving left center puts left edge offscreen
                if (left - halfWidth < PADDING) {
                    left = halfWidth + PADDING;
                    // Adjust transform to not be strictly centered if needed, 
                    // but for simplicity here we just shift the 'left' coordinate 
                    // and keep translate(-50%) so it effectively shifts the box right.
                    // Actually, if we want strict clamping with translate(-50%), 
                    // we need to set left such that (left - 150) > 20 => left > 170.
                }
                // If moving right center puts right edge offscreen
                if (left + halfWidth > screenWidth - PADDING) {
                    left = screenWidth - PADDING - halfWidth;
                }
                return left;
            };

            switch (finalPosition) {
                case 'bottom':
                    style.top = rect.bottom + GAP;
                    style.left = getClampedLeft(rect.left + rect.width / 2);
                    style.transform = 'translateX(-50%)';
                    break;
                case 'top':
                    style.bottom = window.innerHeight - rect.top + GAP;
                    style.left = getClampedLeft(rect.left + rect.width / 2);
                    style.transform = 'translateX(-50%)';
                    break;
                case 'left':
                    style.top = rect.top + rect.height / 2;
                    style.right = window.innerWidth - rect.left + GAP;
                    style.transform = 'translateY(-50%)';
                    break;
                case 'right':
                    style.top = rect.top + rect.height / 2;
                    style.left = rect.right + GAP;
                    style.transform = 'translateY(-50%)';
                    break;
            }
            setPositionStyle(style);
        }
    };

    const clearHighlight = () => {
        steps.forEach(step => {
            const el = document.getElementById(step.targetId);
            if (el) {
                el.classList.remove('tour-highlight', 'relative', 'z-[60]', 'bg-white', 'shadow-[0_0_0_9999px_rgba(0,0,0,0.7)]');
            }
        });
    };

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(prev => prev + 1);
        } else {
            onClose();
        }
    };

    const handlePrev = () => {
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
        }
    };

    if (!isOpen) return null;

    const step = steps[currentStep];

    return (
        <div className="fixed inset-0 z-[100] pointer-events-none">
            {/* The dark overlay is actually handled via the box-shadow trick on the target element for smoother transition, 
                 but we add a fallback simplified overlay for clicks outside if needed, 
                 though pointer-events-none means we click through the empty spaces.
                 Actually, simpler approach: Full screen overlay that is transparent, and we use z-index to bring target above.
             */}

            {/* Simple click catcher for dismissal or blocking interaction */}
            <div className="absolute inset-0 z-40" style={{ pointerEvents: 'auto' }}></div>

            {/* Tooltip Card - Compact Design */}
            <div
                className="absolute z-[70] w-auto max-w-[300px] bg-white rounded-2xl p-5 shadow-2xl border-2 border-brand-purple animate-in fade-in zoom-in-95 duration-300"
                style={{ ...positionStyle, pointerEvents: 'auto' }}
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-300 hover:text-gray-500"
                >
                    <X size={18} />
                </button>

                <div className="mb-3">
                    <span className="inline-block px-2 py-0.5 rounded-full bg-brand-purple/10 text-brand-purple text-[10px] font-black uppercase tracking-wider mb-1">
                        Bước {currentStep + 1}/{steps.length}
                    </span>
                    <h3 className="text-lg font-black text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-gray-600 leading-snug font-medium text-xs">
                        {step.content}
                    </p>
                </div>

                <div className="flex justify-between items-center mt-4">
                    <button
                        onClick={handlePrev}
                        disabled={currentStep === 0}
                        className={`p-1.5 rounded-lg hover:bg-gray-100 transition-colors ${currentStep === 0 ? 'invisible' : ''}`}
                    >
                        <ChevronLeft size={18} />
                    </button>

                    <div className="flex gap-1">
                        {steps.map((_, idx) => (
                            <div
                                key={idx}
                                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === currentStep ? 'bg-brand-purple w-4' : 'bg-gray-200'}`}
                            ></div>
                        ))}
                    </div>

                    <button
                        onClick={handleNext}
                        className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-brand-purple text-white text-xs font-bold hover:bg-brand-darkPurple shadow-sm hover:shadow transition-all hover:-translate-y-0.5"
                    >
                        {currentStep === steps.length - 1 ? 'Xong' : 'Tiếp'}
                        {currentStep !== steps.length - 1 && <ChevronRight size={14} />}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TourGuide;
