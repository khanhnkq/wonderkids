import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer md:w-60">
            <div className="w-8 h-8 rounded-full bg-brand-purple flex items-center justify-center">
              <span className="text-white font-bold text-lg">W</span>
            </div>
            <span className="font-bold text-2xl text-gray-800">Wonder<span className="text-brand-purple">Kids</span></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 items-center justify-center space-x-8">
            <button onClick={() => navigate('/')} className="text-gray-600 hover:text-brand-purple font-medium transition-colors">Trang chủ</button>
            <button onClick={() => navigate('/curriculum')} className="text-gray-600 hover:text-brand-purple font-medium transition-colors">Chương trình học</button>
            <button onClick={() => navigate('/parents')} className="text-gray-600 hover:text-brand-purple font-medium transition-colors">Về chúng tôi</button>
            <button onClick={() => navigate('/contact')} className="text-gray-600 hover:text-brand-purple font-medium transition-colors">Liên hệ</button>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center justify-end space-x-4 md:w-60">
            <button className="bg-white border-2 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white px-6 py-2.5 rounded-full font-bold transition-all duration-300 flex items-center gap-2 group" onClick={() => navigate('/contact')}>
              Tư vấn ngay
              <div className="bg-brand-purple text-white rounded-full p-1 w-6 h-6 flex items-center justify-center group-hover:bg-white group-hover:text-brand-purple transition-colors">
                <ArrowUpRight size={14} />
              </div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-brand-purple">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white border-b border-gray-100 shadow-lg animate-in slide-in-from-top-5 duration-200 z-50">
          <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col items-center">
            <button onClick={() => { navigate('/'); setIsOpen(false); }} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-purple">Trang chủ</button>
            <button onClick={() => { navigate('/curriculum'); setIsOpen(false); }} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-purple">Chương trình học</button>
            <button onClick={() => { navigate('/parents'); setIsOpen(false); }} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-purple">Về chúng tôi</button>
            <button onClick={() => { navigate('/contact'); setIsOpen(false); }} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-purple">Liên hệ</button>
            <div className="w-full border-t border-gray-100 my-2"></div>
            <button className="bg-brand-purple text-white px-6 py-3 rounded-full font-bold w-full" onClick={() => { navigate('/contact'); setIsOpen(false); }}>
              Tư vấn ngay
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;