import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ScribbleUnderline, ScribbleLoop, ScribbleArrow } from './Icons';
import FadeIn from './animations/FadeIn';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <div className="relative z-10 order-2 lg:order-1 text-center lg:text-left">
            <FadeIn direction="right" delay={0.2} className="relative h-full">
              {/* Decoration */}
              <div className="absolute -top-10 -left-10 text-brand-yellow hidden lg:block">
                <ScribbleLoop className="w-24 h-24" />
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-8">
                {t('hero.titlePart1')} <br />
                <span className="relative inline-block text-brand-purple italic px-2">
                  {t('hero.titleHighlight1')}
                  <ScribbleUnderline className="absolute -bottom-2 left-0 w-full text-brand-yellow" />
                </span>{' '}
                {t('hero.titlePart2')}{' '}
                <span className="text-brand-yellow font-hand">{t('hero.titleHighlight2')}</span> <br />
                {t('hero.titlePart3')}
              </h1>

              <p className="text-lg text-gray-600 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                {t('hero.description')}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => navigate('/curriculum')}
                  className="bg-brand-purple text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-darkPurple transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-2"
                >
                  {t('common.startNow')}
                  <div className="bg-white/20 rounded-full p-1">
                    <ArrowRight size={20} />
                  </div>
                </button>

                {/* Optional secondary button for design balance */}
                <button
                  onClick={() => {
                    const featuresSection = document.getElementById('features');
                    if (featuresSection) {
                      featuresSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-500 font-bold hover:text-brand-purple transition-colors px-6 py-4"
                >
                  {t('common.learnMore')}
                </button>
              </div>

              <div className="absolute top-full right-0 lg:right-20 mt-4 text-brand-purple/30 hidden lg:block">
                <ScribbleArrow className="w-32 h-32 rotate-12" />
              </div>
            </FadeIn>
          </div>

          {/* Image Content */}
          <div className="relative z-10 order-1 lg:order-2 hidden lg:block">
            <FadeIn direction="left" delay={0.4}>
              <div className="relative w-full aspect-square max-w-[500px] mx-auto">

                {/* Abstract Blob Background */}
                <div className="absolute inset-0 bg-brand-lightPurple/50 rounded-full blur-3xl transform translate-x-10 translate-y-10"></div>

                {/* Main Image Container */}
                <div className="relative w-full h-full">
                  {/* Center Kid */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] z-20">
                    <div className="absolute inset-0 bg-brand-yellow rounded-[40px] rotate-3 transform"></div>
                    <img
                      src="/hero-child.jpg"
                      alt={t('hero.imgAlt')}
                      className="absolute inset-0 w-full h-full object-cover rounded-[40px] -rotate-3 border-4 border-white shadow-xl"
                    />
                  </div>

                  {/* Floating Elements (Badges/Stickers) */}
                  <div className="absolute top-0 right-10 bg-white p-4 rounded-full shadow-lg z-30 animate-bounce" style={{ animationDuration: '3s' }}>
                    <div className="text-center">
                      <span className="block font-bold text-brand-purple text-sm">{t('hero.badgeSexEd')}</span>
                      <span className="block text-xs text-gray-500">{t('hero.badgeSexEdSub')}</span>
                    </div>
                  </div>

                  <div className="absolute bottom-10 -left-4 bg-white p-3 rounded-2xl shadow-lg z-30 flex items-center gap-3 animate-pulse">
                    <div className="w-10 h-10 rounded-full bg-brand-purple flex items-center justify-center text-white">
                      <ArrowRight size={20} />
                    </div>
                    <div>
                      <span className="block font-bold text-gray-800">{t('hero.badgeJoin')}</span>
                      <span className="block text-xs text-gray-500">{t('hero.badgeLearners')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;