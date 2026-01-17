import React from 'react';
import { Teacher } from '../types';
import { Sparkle } from './Icons';

const teachers: Teacher[] = [
  { id: 1, name: "Lương Ngọc Bảo Trân", role: "Thành viên", image: "/images/avatars/member1.jpg", color: "bg-yellow-100" },
  { id: 2, name: "Phan Thị Thuỳ Nhung", role: "Thành viên", image: "/images/avatars/member2.jpg", color: "bg-pink-100" },
  { id: 3, name: "Nguyễn Gia Triều", role: "Thành viên", image: "/images/avatars/member3.jpg", color: "bg-blue-100" },
];

const Mission: React.FC = () => {
  return (
    <section id="about" className="bg-brand-purple py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <Sparkle className="absolute top-10 left-10 text-brand-yellow w-12 h-12 opacity-50" />
        <Sparkle className="absolute bottom-20 right-20 text-brand-lightPurple w-16 h-16 opacity-30" />
        <div className="absolute top-1/2 left-[-100px] w-[300px] h-[300px] bg-brand-darkPurple rounded-full blur-[100px] opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Chúng tôi mong muốn giúp trẻ <br />
            <span className="text-brand-yellow italic font-hand">khám phá và yêu thương</span> <br />
            bản thân để phát triển toàn diện.
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-20">
          {teachers.map((teacher) => (
            <div key={teacher.id} className="text-center group cursor-pointer">
              <div className="relative inline-block mb-4">
                {/* Circle background with hover effect */}
                <div className={`absolute inset-0 ${teacher.color} rounded-full transform scale-0 group-hover:scale-110 transition-transform duration-300 -z-10`}></div>
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white/20 p-1 group-hover:border-white transition-colors overflow-hidden mx-auto bg-white/5">
                  <img src={teacher.image} alt={teacher.name} className="w-full h-full object-cover rounded-full" />
                </div>
                {/* Hover Icon */}
                <div className="absolute bottom-0 right-0 bg-white text-brand-purple rounded-full p-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                  <Sparkle className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-white font-bold text-lg">{teacher.name}</h3>
              <p className="text-brand-lightPurple text-sm">{teacher.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;