import React from 'react';
import { HelmetIcon, NetFacilityIcon, PlayerActionIcon, TrophyIcon } from './CricketIcons';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-20 lg:py-28 bg-[#0B1B2D] text-white overflow-hidden">
      {/* Subtle Grid Dot Background Pattern */}
      <div className="absolute inset-0 bg-grid-dots-dark opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Heading & Paragraph & Signature */}
          <div className="lg:col-span-5 space-y-5 text-left">
            <div>
              <span className="text-amber-500 font-semibold text-xs tracking-[0.2em] uppercase font-inter block mb-3">
                ABOUT VERTEX
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display uppercase leading-tight">
                <span className="block text-white">BUILDING SKILLS.</span>
                <span className="block text-amber-500">BUILDING FUTURES.</span>
              </h2>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-inter font-normal max-w-xl pt-1">
              We believe in holistic development of a cricketer. From beginners to advanced players, our structured programs and expert coaching help players unlock their true potential on and off the field.
            </p>

            {/* Signature Accent */}
            <div className="pt-3">
              <span className="font-signature text-3xl sm:text-4xl text-amber-400 block tracking-wide">
                Annamalai Sundaram
              </span>
              <span className="text-[11px] text-slate-400 font-inter font-medium tracking-wider uppercase">
                Founder & Technical Director
              </span>
            </div>
          </div>

          {/* Right Column: 2x2 Grid of Feature Blocks with Divider Lines */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 border-t sm:border-t-0 sm:border-l border-slate-700/60">

              {/* Feature 1: EXPERT COACHING */}
              <div className="p-6 sm:p-8 border-b sm:border-b-1 border-r-0 sm:border-r border-slate-700/60 space-y-3 group hover:bg-slate-800/40 transition-colors">
                <div className="w-12 h-12 rounded-full bg-slate-800/80 border border-slate-700 text-amber-400 flex items-center justify-center transition-transform group-hover:scale-110">
                  <HelmetIcon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-semibold text-lg tracking-normal uppercase text-white">
                  EXPERT COACHING
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-inter font-normal">
                  Learn from experienced players and certified coaches.
                </p>
              </div>

              {/* Feature 2: MODERN FACILITIES */}
              <div className="p-6 sm:p-8 border-b border-slate-700/60 space-y-3 group hover:bg-slate-800/40 transition-colors">
                <div className="w-12 h-12 rounded-full bg-slate-800/80 border border-slate-700 text-amber-400 flex items-center justify-center transition-transform group-hover:scale-110">
                  <NetFacilityIcon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-semibold text-lg tracking-normal uppercase text-white">
                  TOP QUALITY INDOOR FACILITIES
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-inter font-normal">
                  Train in state-of-the-art nets, turf pitches & fitness zones.
                </p>
              </div>

              {/* Feature 3: PLAYER DEVELOPMENT */}
              <div className="p-6 sm:p-8 border-r-0 sm:border-r border-slate-700/60 space-y-3 group hover:bg-slate-800/40 transition-colors">
                <div className="w-12 h-12 rounded-full bg-slate-800/80 border border-slate-700 text-amber-400 flex items-center justify-center transition-transform group-hover:scale-110">
                  <PlayerActionIcon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-semibold text-lg tracking-normal uppercase text-white">
                  PLAYER DEVELOPMENT
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-inter font-normal">
                  Focus on skills, fitness, mindset and match readiness.
                </p>
              </div>

              {/* Feature 4: DISCIPLINE & VALUES */}
              <div className="p-6 sm:p-8 space-y-3 group hover:bg-slate-800/40 transition-colors">
                <div className="w-12 h-12 rounded-full bg-slate-800/80 border border-slate-700 text-amber-400 flex items-center justify-center transition-transform group-hover:scale-110">
                  <TrophyIcon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-semibold text-lg tracking-normal uppercase text-white">
                  DISCIPLINE & VALUES
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-inter font-normal">
                  We build champions with the right attitude and character.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
