import React from 'react';
import { ArrowRight, Play, Users, ShieldCheck, Trophy } from 'lucide-react';
import heroBg from '../assets/herobackground.svg';
import mobileHeroBg from '../assets/mobile hero image.svg';

interface HeroProps {
  onOpenEnroll: () => void;
  onOpenVideo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnroll, onOpenVideo }) => {
  return (
    <section id="home" data-has-cta="true" className="relative mt-16 sm:mt-20 lg:mt-24 pt-0 md:pt-8 lg:pt-16 pb-16 lg:pb-24 overflow-hidden bg-white flex flex-col justify-center">

      {/* Mobile-Only Top Hero Image (Stacked above text under navbar) */}
      <div className="block md:hidden relative w-full h-[320px] sm:h-[400px] overflow-hidden bg-white">
        <img
          src={mobileHeroBg}
          alt="Vertex Cricket Academy Hero Background"
          className="w-full h-full object-cover object-[72%_center] sm:object-[70%_center]"
        />
        {/* Bottom Fade Mask into white background */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
      </div>

      {/* Desktop-Only Full Background Image */}
      <div className="hidden md:block absolute inset-0 z-0 pointer-events-none">
        <img
          src={heroBg}
          alt="Vertex Cricket Academy Hero Background"
          className="w-full h-full object-cover object-right sm:object-center lg:object-right"
        />
        {/* Left Gradient Fade for Desktop */}
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Text Content */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5 pt-0 md:pt-4 text-left">

            {/* Tagline Badge */}
            <div>
              <span className="text-amber-600 font-semibold text-xs tracking-[0.2em] uppercase font-inter block mb-2 sm:mb-3">
                SHAPE TALENT. BUILD CHAMPIONS.
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-display uppercase leading-none">
              <span className="block text-[#053E58]">TRAIN HARD.</span>
              <span className="block text-[#DC2626]">PLAY FEARLESS.</span>
            </h1>

            {/* Subtext Body */}
            <p className="text-slate-600 text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed font-inter font-normal pt-1">
              Vertex Cricket Academy is where passion meets professional training. Join us and elevate your game to the next level.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-row items-center gap-3 sm:gap-4 pt-2 sm:pt-3">
              <button
                onClick={onOpenEnroll}
                className="btn-navy text-white px-5 sm:px-7 py-3.5 rounded-md font-semibold font-inter text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2 sm:gap-3 shadow-lg group cursor-pointer"
              >
                <span>ENROLL NOW</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenVideo}
                className="bg-slate-100/90 hover:bg-slate-200 border border-slate-300 text-slate-800 px-4 sm:px-6 py-3.5 rounded-md font-semibold font-inter text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2 transition-all cursor-pointer shadow-sm hover:shadow"
              >
                <div className="w-5 h-5 rounded-full bg-slate-300 text-slate-800 flex items-center justify-center flex-shrink-0">
                  <Play className="w-2.5 h-2.5 fill-slate-800 ml-0.5" />
                </div>
                <span>WATCH VIDEO</span>
              </button>
            </div>

            {/* Trust Indicators 3-Column Row */}
            <div className="pt-6 grid grid-cols-3 divide-x divide-slate-200/90 items-start text-left gap-1 sm:gap-2">
              {/* Item 1: Expert Coaches */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-2.5 sm:pr-4">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-red-100/80 flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4 text-[#DC2626]" />
                </div>
                <div className="text-left">
                  <h4 className="font-inter font-bold text-xs sm:text-sm text-[#0B1B2D] leading-tight">
                    Expert Coaches
                  </h4>
                  <p className="font-inter text-[10px] sm:text-[11px] text-slate-500 font-normal leading-tight mt-0.5">
                    Experienced &amp; certified
                  </p>
                </div>
              </div>

              {/* Item 2: World-Class Facilities */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-2.5 pl-2 sm:px-4">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-blue-100/80 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                </div>
                <div className="text-left">
                  <h4 className="font-inter font-bold text-xs sm:text-sm text-[#0B1B2D] leading-tight">
                    World-Class Facilities
                  </h4>
                  <p className="font-inter text-[10px] sm:text-[11px] text-slate-500 font-normal leading-tight mt-0.5">
                    Train like a pro
                  </p>
                </div>
              </div>

              {/* Item 3: Proven Results */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-2.5 pl-2 sm:pl-4">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-emerald-100/80 flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="text-left">
                  <h4 className="font-inter font-bold text-xs sm:text-sm text-[#0B1B2D] leading-tight">
                    Proven Results
                  </h4>
                  <p className="font-inter text-[10px] sm:text-[11px] text-slate-500 font-normal leading-tight mt-0.5">
                    Champions in the making
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column Spacer for Desktop */}
          <div className="hidden lg:block lg:col-span-6 min-h-[460px] pointer-events-none" />

        </div>
      </div>

      {/* Floating "Book a Free Trial" Pill */}
      {/* <div
        onClick={onOpenEnroll}
        className="fixed bottom-20 right-5 sm:bottom-24 sm:right-6 z-30 flex items-center gap-2.5 bg-[#0B1B2D] hover:bg-slate-900 text-white p-1.5 pr-4 pl-1.5 rounded-full shadow-2xl border border-slate-700/80 cursor-pointer transition-transform hover:scale-105 group"
      >
        <div className="w-9 h-9 rounded-full bg-[#DC2626] text-white flex items-center justify-center flex-shrink-0 shadow-md group-hover:bg-red-700 transition-colors">
          <Calendar className="w-4.5 h-4.5 text-white" />
        </div>
        <div className="text-left leading-none">
          <span className="block font-display font-bold text-xs tracking-wider text-white uppercase">
            BOOK A FREE TRIAL
          </span>
          <span className="block font-inter font-bold text-[10px] tracking-wider text-amber-400 uppercase mt-0.5">
            1-DAY PITCH PASS
          </span>
        </div>
      </div> */}
    </section>
  );
};
