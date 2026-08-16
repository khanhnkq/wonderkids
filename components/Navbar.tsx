import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer md:w-60"
            onClick={() => navigate('/')}
          >
            <div className="w-8 h-8 rounded-full bg-brand-purple flex items-center justify-center">
              <span className="text-white font-bold text-lg">W</span>
            </div>
            <span className="font-bold text-2xl text-gray-800">Wonder<span className="text-brand-purple">Kids</span></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 items-center justify-center space-x-8">
            <button onClick={() => navigate('/')} className="text-gray-600 hover:text-brand-purple font-medium transition-colors">
              {t('navbar.home')}
            </button>
            <button onClick={() => navigate('/curriculum')} className="text-gray-600 hover:text-brand-purple font-medium transition-colors">
              {t('navbar.curriculum')}
            </button>
            <button onClick={() => navigate('/parents')} className="text-gray-600 hover:text-brand-purple font-medium transition-colors">
              {t('navbar.aboutUs')}
            </button>
            <button onClick={() => navigate('/contact')} className="text-gray-600 hover:text-brand-purple font-medium transition-colors">
              {t('navbar.contact')}
            </button>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center justify-end space-x-3 md:w-80">
            <LanguageSwitcher />

            <button
              className="bg-white border-2 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white px-5 py-2 rounded-full font-bold transition-all duration-300 flex items-center gap-2 group text-sm"
              onClick={() => navigate('/contact')}
            >
              {t('navbar.consultNow')}
              <div className="bg-brand-purple text-white rounded-full p-1 w-5 h-5 flex items-center justify-center group-hover:bg-white group-hover:text-brand-purple transition-colors">
                <ArrowUpRight size={12} />
              </div>
            </button>
          </div>

          {/* Mobile menu button & switcher */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-brand-purple p-1">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white border-b border-gray-100 shadow-lg animate-in slide-in-from-top-5 duration-200 z-50">
          <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col items-center">
            <button
              onClick={() => { navigate('/'); setIsOpen(false); }}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-purple"
            >
              {t('navbar.home')}
            </button>
            <button
              onClick={() => { navigate('/curriculum'); setIsOpen(false); }}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-purple"
            >
              {t('navbar.curriculum')}
            </button>
            <button
              onClick={() => { navigate('/parents'); setIsOpen(false); }}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-purple"
            >
              {t('navbar.aboutUs')}
            </button>
            <button
              onClick={() => { navigate('/contact'); setIsOpen(false); }}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-purple"
            >
              {t('navbar.contact')}
            </button>

            <div className="w-full border-t border-gray-100 my-2"></div>

            <div className="w-full flex justify-center py-1">
              <LanguageSwitcher variant="mobile" />
            </div>

            <button
              className="bg-brand-purple text-white px-6 py-3 rounded-full font-bold w-full text-center"
              onClick={() => { navigate('/contact'); setIsOpen(false); }}
            >
              {t('navbar.consultNow')}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;