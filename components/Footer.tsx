import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-brand-purple flex items-center justify-center">
                <span className="text-white font-bold">W</span>
              </div>
              <span className="font-bold text-xl text-gray-800">WonderKids</span>
            </div>
            <p className="text-gray-500 text-sm mb-6">
              {t('footer.aboutText')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-brand-purple hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-brand-purple hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-brand-purple hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">{t('footer.aboutUs')}</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#about" className="hover:text-brand-purple">{t('footer.aboutIntro')}</a></li>
              <li><a href="#features" className="hover:text-brand-purple">{t('footer.aboutFeatures')}</a></li>
              <li><a href="#blog" className="hover:text-brand-purple">{t('footer.aboutNews')}</a></li>
              <li><a href="#about" className="hover:text-brand-purple">{t('footer.aboutCareers')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">{t('footer.support')}</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="/contact" className="hover:text-brand-purple">{t('footer.faq')}</a></li>
              <li><a href="/contact" className="hover:text-brand-purple">{t('footer.helpCenter')}</a></li>
              <li><a href="/contact" className="hover:text-brand-purple">{t('footer.contactLink')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">{t('footer.contactHeader')}</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>hello@wonderkids.vn</li>
              <li>+84 (028) 123-4567</li>
              <li>{t('footer.address')}</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-100 pt-8 text-center text-sm text-gray-400">
          <p>{t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;