import React from 'react';
import { Gamepad2, Palette, Lightbulb, ArrowUpRight, MessageCircle } from 'lucide-react';
import { useChat } from '../contexts/ChatContext';

const Features: React.FC = () => {
  const { openChat } = useChat();

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Phương pháp <span className="text-brand-purple italic">giáo dục</span> <br />
            tương tác
          </h2>
          <div className="flex gap-2 mt-4">
            <span className="px-4 py-1 bg-purple-100 text-brand-purple rounded-full text-sm font-bold">#an_toàn</span>
            <span className="px-4 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-bold">#tôn_trọng</span>
            <span className="px-4 py-1 bg-brand-purple text-white rounded-full text-sm font-bold">#phát_triển</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1: Fun Chat AI */}
          <div
            className="group relative bg-brand-lightPurple rounded-[2.5rem] p-8 min-h-[400px] flex flex-col justify-end overflow-hidden cursor-pointer hover:shadow-xl transition-all hover:-translate-y-2"
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
              <h3 className="text-3xl font-bold text-gray-800 mb-3 group-hover:text-brand-purple transition-colors">Trò chuyện vui</h3>
              <p className="text-gray-600 mb-2">Hỏi đáp cùng Trợ lý Wonder về mọi điều thắc mắc nhé!</p>
              <span className="text-sm font-bold text-brand-purple flex items-center gap-2">Thử ngay <ArrowUpRight size={16} /></span>
            </div>
          </div>

          {/* Card 2: Creative Activities */}
          <div className="group relative bg-brand-purple rounded-[2.5rem] p-8 min-h-[400px] flex flex-col justify-end overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2">
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
              <h3 className="text-3xl font-bold mb-3">Hoạt động sáng tạo</h3>
              <p className="text-brand-lightPurple mb-2">Khám phá các hoạt động như vẽ tranh và tìm hiểu cấu tạo cơ thể.</p>
            </div>
          </div>

          {/* Card 3: Learn with Games */}
          <div className="group relative bg-brand-yellow rounded-[2.5rem] p-8 min-h-[400px] flex flex-col justify-end overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2">
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
              <h3 className="text-3xl font-bold text-gray-900 mb-3">Học qua trò chơi</h3>
              <p className="text-gray-800 mb-2">Học cách tự bảo vệ bản thân qua các trò chơi tình huống!</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;