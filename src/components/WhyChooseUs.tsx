import React from 'react';
import { FocusUserIcon, FitnessIcon, CrossedBatsIcon, VideoAnalysisIcon, TournamentIcon } from './CricketIcons';

export const WhyChooseUs: React.FC = () => {

  const features = [
    {
      id: 1,
      icon: <FocusUserIcon className="w-6 h-6" />,
      title: 'Individual Attention',
      desc: 'Low coach-to-student ratio (1:5 max) for custom technique correction.',
    },
    {
      id: 2,
      icon: <FitnessIcon className="w-6 h-6" />,
      title: 'Fitness & Conditioning',
      desc: 'Sports-specific agility, core strength, and injury prevention regimes.',
    },
    {
      id: 3,
      icon: <CrossedBatsIcon className="w-6 h-6" />,
      title: 'Match Simulations',
      desc: 'Real pressure scenarios and weekly center pitch practice matches.',
    },
    {
      id: 4,
      icon: <VideoAnalysisIcon className="w-6 h-6" />,
      title: 'Video Analysis & Feedback',
      desc: 'High-speed camera biomechanics review for bowling and batting arcs.',
    },
    {
      id: 5,
      icon: <TournamentIcon className="w-6 h-6" />,
      title: 'Tournaments & Exposure',
      desc: 'Direct registration in state, district, and all-India invitation cups.',
    },
  ];

  return (
    <section id="why-us" className="bg-[#0A192F] text-white py-14 sm:py-16 relative overflow-hidden border-t border-b border-slate-800">
      {/* Background Action Player Watermark Silhouette */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-15 pointer-events-none mix-blend-luminosity">
        <img
          src="https://images.pexels.com/photos/30387508/pexels-photo-30387508.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800"
          alt="Cricket Action"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="text-amber-500 font-semibold text-xs tracking-[0.2em] uppercase font-inter block mb-3">
            PROVEN EXCELLENCE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight tracking-tight uppercase text-white">
            WHY CHOOSE VERTEX?
          </h2>
          <div className="w-16 h-1 bg-[#DC2626] mx-auto mt-3 rounded-full"></div>
        </div>

        {/* 5 Feature Badges Row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-4 items-start">
          {features.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              {/* Circular Outline Icon Container */}
              <div className="w-16 h-16 rounded-full border-2 border-slate-600 group-hover:border-[#DC2626] bg-slate-900/80 group-hover:bg-[#DC2626] text-slate-200 group-hover:text-white flex items-center justify-center mb-3 transition-all duration-300 shadow-md group-hover:shadow-red-500/20 group-hover:scale-110">
                {item.icon}
              </div>

              <h3 className="text-base sm:text-lg font-semibold font-display tracking-normal uppercase text-slate-100 group-hover:text-white transition-colors max-w-[140px] leading-tight">
                {item.title}
              </h3>

              {/* Hover description popup or snippet */}
              <p className="text-xs text-slate-400 font-inter mt-2 leading-relaxed font-normal max-w-[150px] opacity-80 group-hover:opacity-100 transition-opacity">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
