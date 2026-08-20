import React from 'react';
import { ArrowRight, Play, Users, ShieldCheck, Trophy } from 'lucide-react';

interface HeroProps {
  onOpenEnroll: () => void;
  onOpenVideo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnroll, onOpenVideo }) => {
  return (
    <section id="home" className="relative mt-20 lg:mt-24 pt-8 sm:pt-12 lg:pt-16 pb-16 lg:pb-24 overflow-hidden bg-white min-h-[580px] lg:min-h-[660px] flex items-center">
      {/* Full Section Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/4k.svg"
          alt="Vertex Cricket Academy Hero Background 4K"
          className="w-full h-full object-cover object-right sm:object-center lg:object-right"
        />
        {/* Subtle Gradient Fade for Mobile Responsiveness on Left Text */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-2/3 lg:w-1/2 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none sm:hidden" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left Column Content */}
          <div className="lg:col-span-6 space-y-5 pt-4 lg:pt-0 text-left">
            {/* Tagline Badge */}
            <div>
              <span className="text-amber-600 font-semibold text-xs tracking-[0.2em] uppercase font-inter block mb-3">
                SHAPE TALENT. BUILD CHAMPIONS.
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-display uppercase leading-none">
              <span className="block text-[#0B1B2D]">TRAIN HARD.</span>
              <span className="block text-[#DC2626]">PLAY FEARLESS.</span>
            </h1>

            {/* Subtext Body */}
            <p className="text-slate-600 text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed font-inter font-normal pt-1">
              Vertex Cricket Academy is where passion meets professional training. Join us and elevate your game to the next level.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={onOpenEnroll}
                className="btn-navy text-white px-7 py-3.5 rounded-md font-semibold font-inter text-xs sm:text-sm tracking-wider uppercase flex items-center gap-3 shadow-lg group cursor-pointer"
              >
                <span>ENROLL NOW</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenVideo}
                className="bg-slate-100/90 hover:bg-slate-200 border border-slate-300 text-slate-800 px-6 py-3.5 rounded-md font-semibold font-inter text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2.5 transition-all cursor-pointer shadow-sm hover:shadow"
              >
                <div className="w-5 h-5 rounded-full bg-slate-300 text-slate-800 flex items-center justify-center">
                  <Play className="w-2.5 h-2.5 fill-slate-800 ml-0.5" />
                </div>
                <span>WATCH VIDEO</span>
              </button>
            </div>

            {/* Bottom Highlights Row matching reference design */}
            <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-start gap-3 sm:gap-0 sm:divide-x sm:divide-slate-200/90">
              {/* Item 1: Expert Coaches */}
              <div className="flex items-center gap-2.5 sm:pr-4">
                <div className="w-9 h-9 rounded-full bg-red-100/70 flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4 text-[#DC2626]" />
                </div>
                <div className="text-left">
                  <h4 className="font-inter font-bold text-xs text-[#0B1B2D] leading-tight whitespace-nowrap">
                    Expert Coaches
                  </h4>
                  <p className="font-inter text-[11px] text-slate-500 font-normal leading-tight whitespace-nowrap">
                    Experienced &amp; certified
                  </p>
                </div>
              </div>

              {/* Item 2: World-Class Facilities */}
              <div className="flex items-center gap-2.5 sm:px-4">
                <div className="w-9 h-9 rounded-full bg-blue-100/70 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                </div>
                <div className="text-left">
                  <h4 className="font-inter font-bold text-xs text-[#0B1B2D] leading-tight whitespace-nowrap">
                    World-Class Facilities
                  </h4>
                  <p className="font-inter text-[11px] text-slate-500 font-normal leading-tight whitespace-nowrap">
                    Train like a pro
                  </p>
                </div>
              </div>

              {/* Item 3: Proven Results */}
              <div className="flex items-center gap-2.5 sm:pl-4">
                <div className="w-9 h-9 rounded-full bg-emerald-100/70 flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="text-left">
                  <h4 className="font-inter font-bold text-xs text-[#0B1B2D] leading-tight whitespace-nowrap">
                    Proven Results
                  </h4>
                  <p className="font-inter text-[11px] text-slate-500 font-normal leading-tight whitespace-nowrap">
                    Champions in the making
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Spacer */}
          <div className="hidden lg:block lg:col-span-6 min-h-[460px] pointer-events-none" />

        </div>
      </div>
    </section>
  );
};
