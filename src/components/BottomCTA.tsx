import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../utils/useScrollReveal';

interface BottomCTAProps {
  onOpenEnroll: () => void;
}

export const BottomCTA: React.FC<BottomCTAProps> = ({ onOpenEnroll }) => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} id="contact" data-has-cta="true" className="relative py-16 sm:py-18 overflow-hidden bg-[#07111E] text-white border-t border-slate-800">
      {/* Background Stadium Photo Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/bottom-cta-bg.jpg"
          alt="Stadium background"
          className="w-full h-full object-cover opacity-45 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07111E] via-[#07111E]/80 to-[#07111E]/90 pointer-events-none" />
      </div>

      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 apple-reveal ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* Left Text */}
          <div className="space-y-4 text-center lg:text-left max-w-2xl">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display uppercase text-white leading-tight">
              READY TO START YOUR JOURNEY?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-inter font-normal max-w-xl">
              Join Vertex Cricket Academy today and take the first step towards a brighter cricketing future.
            </p>
          </div>

          {/* Right Red CTA Button */}
          <div className="flex-shrink-0">
            <button
              onClick={onOpenEnroll}
              className="btn-primary text-white px-8 py-4 rounded-md font-semibold font-inter text-xs sm:text-sm tracking-wider uppercase flex items-center gap-3 shadow-2xl cursor-pointer group active:scale-95 transition-transform"
            >
              <span>ENROLL NOW</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

