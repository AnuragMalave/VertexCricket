import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Globe, Award } from 'lucide-react';

export const CoachesSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const coaches = [
    {
      id: 1,
      name: 'RAHUL SHARMA',
      role: 'Head Coach',
      qualification: 'Former Ranji Player',
      image: '/images/coach-rahul.jpg',
      experience: '12+ Years Experience',
      bio: 'Ex-State Ranji Captain with 4,000+ First-Class runs. Specialized in tactical match awareness and top-order batting.',
    },
    {
      id: 2,
      name: 'VIKRAM SINGH',
      role: 'Batting Coach',
      qualification: 'BCCI Certified Level 2',
      image: '/images/coach-vikram.jpg',
      experience: '9+ Years Experience',
      bio: 'BCCI accredited High Performance Coach. Pioneer of video biomechanics analysis for power-hitting & stroke consistency.',
    },
    {
      id: 3,
      name: 'AJAY VERMA',
      role: 'Bowling Coach',
      qualification: 'Ex First Class Cricketer',
      image: '/images/coach-ajay.jpg',
      experience: '10+ Years Experience',
      bio: 'Former express fast bowler with over 180 wickets in professional domestic tournaments. Expert in pace variation and swing.',
    },
    {
      id: 4,
      name: 'SURESH KUMAR',
      role: 'Spin Bowling Mentor',
      qualification: 'BCCI Level 3 Specialist',
      image: 'https://images.pexels.com/photos/30671898/pexels-photo-30671898.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=500',
      experience: '14+ Years Experience',
      bio: 'Spin specialist known for flight, drift, and deceptive variation training for wrist & finger spinners.',
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? Math.max(0, coaches.length - 3) : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= coaches.length - 3 ? 0 : prev + 1));
  };

  const visibleCoaches = coaches.slice(currentIndex, currentIndex + 3);

  return (
    <section id="coaches" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header with Nav Arrows */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 border-b border-slate-100 pb-6">
          <div>
            <span className="text-[#0B1B2D] font-semibold text-xs tracking-[0.2em] uppercase font-inter block mb-3">
              OUR COACHES
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display uppercase leading-tight text-[#0B1B2D]">
              LEARN FROM THE BEST
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 hover:text-[#DC2626] hover:border-[#DC2626] hover:bg-red-50 transition-all cursor-pointer shadow-sm"
              aria-label="Previous coach"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 hover:text-[#DC2626] hover:border-[#DC2626] hover:bg-red-50 transition-all cursor-pointer shadow-sm"
              aria-label="Next coach"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3 Coach Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleCoaches.map((coach) => (
            <div
              key={coach.id}
              className="bg-slate-50/80 rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative h-72 sm:h-80 overflow-hidden bg-slate-200">
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="w-full h-full object-cover object-[center_15%] transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Experience Badge */}
                <div className="absolute top-3 right-3 bg-[#0B1B2D]/80 backdrop-blur-md text-white text-[10px] font-semibold font-inter px-2.5 py-1 rounded-full flex items-center gap-1 border border-white/10 uppercase tracking-wider">
                  <Award className="w-3 h-3 text-amber-400" />
                  <span>{coach.experience}</span>
                </div>
              </div>

              {/* Coach Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1">
                  <h3 className="font-display font-semibold text-xl text-[#0B1B2D] tracking-normal uppercase">
                    {coach.name}
                  </h3>
                  <p className="text-xs font-medium font-inter text-slate-600 uppercase tracking-wider">
                    {coach.role}
                  </p>
                  <p className="text-[11px] font-medium font-inter text-[#DC2626] uppercase tracking-wider">
                    {coach.qualification}
                  </p>

                  <p className="text-xs text-slate-600 pt-2 leading-relaxed font-inter font-normal line-clamp-2">
                    {coach.bio}
                  </p>
                </div>

                {/* Social Media Links Bar */}
                <div className="pt-3 border-t border-slate-200/80 flex items-center gap-3 text-slate-500">
                  <a href="#coaches" className="p-1.5 rounded-full hover:bg-slate-200 hover:text-[#0B1B2D] transition-colors" aria-label="Facebook">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                  </a>
                  <a href="#coaches" className="p-1.5 rounded-full hover:bg-slate-200 hover:text-[#DC2626] transition-colors" aria-label="Instagram">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                  </a>
                  <a href="#coaches" className="p-1.5 rounded-full hover:bg-slate-200 hover:text-[#DC2626] transition-colors" aria-label="Youtube">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                  </a>
                  <a href="#coaches" className="p-1.5 rounded-full hover:bg-slate-200 hover:text-[#0B1B2D] transition-colors" aria-label="Website">
                    <Globe className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
