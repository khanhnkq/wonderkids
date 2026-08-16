import React from 'react';
import { Gamepad2, Palette, ArrowUpRight, MessageCircle } from 'lucide-react';
import { useChat } from '../contexts/ChatContext';
import { useLanguage } from '../contexts/LanguageContext';
import FadeIn from './animations/FadeIn';

const Features: React.FC = () => {
  const { openChat } = useChat();
  const { t } = useLanguage();

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('features.titlePart1')} <span className="text-brand-purple italic">{t('features.titleHighlight')}</span> <br />
            {t('features.titlePart2')}
          </h2>
          <div className="flex gap-2 mt-4">
            <span className="px-4 py-1 bg-purple-100 text-brand-purple rounded-full text-sm font-bold">{t('features.tagSafe')}</span>
            <span className="px-4 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-bold">{t('features.tagRespect')}</span>
            <span className="px-4 py-1 bg-brand-purple text-white rounded-full text-sm font-bold">{t('features.tagGrowth')}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Fun Chat AI */}
          <FadeIn delay={0.2} className="h-full">
            <div
              className="group relative bg-brand-lightPurple rounded-[2.5rem] min-h-[400px] p-8 h-full flex flex-col justify-end overflow-hidden cursor-pointer hover:shadow-xl transition-all hover:-translate-y-2"
              onClick={() => openChat()}
            >
              {/* Background Image */}
              <img
                src="/chat-friends.jpg"
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-95 transition-opacity"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-lightPurple/90 via-brand-lightPurple/30 to-transparent"></div>

              <div className="absolute top-8 left-8 bg-white p-3 rounded-2xl shadow-sm z-10">
                <MessageCircle size={32} className="text-brand-purple" />
              </div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-gray-800 mb-3 group-hover:text-brand-purple transition-colors">
                  {t('features.card1Title')}
                </h3>
                <p className="text-gray-600 mb-2">{t('features.card1Desc')}</p>
                <span className="text-sm font-bold text-brand-purple flex items-center gap-2">
                  {t('common.tryNow')} <ArrowUpRight size={16} />
                </span>
              </div>
            </div>
          </FadeIn>

          {/* Card 2: Creative Activities */}
          <FadeIn delay={0.4} className="h-full">
            <div className="group relative bg-brand-purple rounded-[2.5rem] p-8 min-h-[400px] h-full flex flex-col justify-end overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2">
              {/* Background Image */}
              <img
                src="/creative-activity.jpg"
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/90 via-brand-purple/40 to-transparent"></div>

              <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20 z-10">
                <Palette size={32} className="text-white" />
              </div>

              <div className="relative z-10 text-white">
                <h3 className="text-3xl font-bold mb-3">{t('features.card2Title')}</h3>
                <p className="text-brand-lightPurple mb-2">{t('features.card2Desc')}</p>
              </div>
            </div>
          </FadeIn>

          {/* Card 3: Learn with Games */}
          <FadeIn delay={0.6} className="h-full">
            <div className="group relative bg-brand-yellow rounded-[2.5rem] p-8 min-h-[400px] h-full flex flex-col justify-end overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2">
              {/* Background Image */}
              <img
                src="/learn-games.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-95 transition-opacity"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-yellow/90 via-brand-yellow/30 to-transparent"></div>

              <div className="absolute top-8 left-8 bg-white p-3 rounded-2xl shadow-sm z-10">
                <Gamepad2 size={32} className="text-brand-darkPurple" />
              </div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-3">{t('features.card3Title')}</h3>
                <p className="text-gray-800 mb-2">{t('features.card3Desc')}</p>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default Features;