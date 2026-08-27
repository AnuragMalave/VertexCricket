import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, X } from 'lucide-react';
import coachImg from '../assets/Coach Image (2).png';
import { useScrollReveal } from '../utils/useScrollReveal';

export const MeetCoachSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);

  // Close modal on Escape key press
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsCertModalOpen(false);
      }
    };
    if (isCertModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCertModalOpen]);

  return (
    <section ref={ref} id="meet-coach" className="relative py-16 lg:py-24 bg-[#0B1B2D] text-white overflow-hidden selection:bg-[#DC2626] selection:text-white">
      {/* Background Subtle Grid Pattern & Dark Radial Glow */}
      <div className="absolute inset-0 bg-grid-dots-dark opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 apple-reveal ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">

          {/* Left Column: Coach Cutout & Radial Background Rings */}
          <div className="w-full lg:w-4/12 relative flex items-center justify-center py-4 lg:py-0">
            {/* Glow Rings behind Coach */}
            <div className="absolute w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] rounded-full bg-blue-600/10 blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] rounded-full border border-blue-500/20 pointer-events-none" />
            <div className="absolute w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] rounded-full border border-blue-400/10 pointer-events-none" />

            {/* Coach Image */}
            <div className="relative z-10 w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[340px] mx-auto flex justify-center">
              <img
                src={coachImg}
                alt="Coach Sanjay Darwatkar - Founder & Head Coach"
                className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
              />
            </div>
          </div>

          {/* Center Column: Text Content */}
          <div className="w-full lg:w-4/12 text-left space-y-6">
            <div>
              <span className="text-amber-400 font-semibold text-xs tracking-[0.2em] uppercase font-inter block mb-2">
                ABOUT VERTEX
              </span>
              <div className="w-8 h-[2px] bg-amber-400 mb-4" />

              <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-extrabold tracking-tight font-display uppercase leading-[1.05]">
                <span className="block text-white">MEET THE COACH.</span>
                <span className="block text-amber-400">THE LEADER BEHIND</span>
                <span className="block text-amber-400">EVERY CHAMPION.</span>
              </h2>
            </div>

            <div className="w-full h-[1px] bg-slate-800/80" />

            <div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-wide">
                Sanjay Darwatkar
              </h3>
              <p className="text-xs font-bold font-inter text-amber-400 uppercase tracking-widest mt-1">
                FOUNDER &amp; HEAD COACH
              </p>
              <div className="w-8 h-[2px] bg-amber-400 mt-2 mb-4" />
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-inter font-normal">
              A dedicated mentor and leader with 25+ years of coaching experience. He has mentored 1000+ young cricketers, helping them grow into confident, skilled and disciplined athletes ready for the future.
            </p>
          </div>

          {/* Vertical Line Divider (Desktop Only) */}
          <div className="hidden lg:block w-[1px] self-stretch bg-blue-900/30 my-4" />

          {/* Right Column: Certificate Card */}
          <div className="w-full lg:w-4/12">
            <div className="bg-[#061628]/90 border border-[#132A44] rounded-2xl p-5 sm:p-6 shadow-2xl flex flex-col justify-between h-full apple-card-interactive">
              <div>
                {/* Card Top Badge */}
                <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs tracking-wider uppercase mb-5">
                  <ShieldCheck className="w-4.5 h-4.5 text-amber-400" />
                  <span>CERTIFIED COACH</span>
                </div>

                {/* Inner Grid: Image Left, Text Right */}
                <div className="flex flex-row items-start gap-4 mb-6">
                  {/* Certificate Image cutout */}
                  <div
                    onClick={() => setIsCertModalOpen(true)}
                    className="relative group cursor-pointer shrink-0 w-[110px] sm:w-[130px] rounded border border-white/80 bg-white shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.05] active:scale-95"
                  >
                    <img
                      src="/images/coach-certificate.jpg"
                      alt="National Cricket Academy Level I Certificate"
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white text-[10px] font-bold bg-black/80 px-2 py-0.5 rounded">
                        Zoom
                      </span>
                    </div>
                  </div>

                  {/* Certificate Details */}
                  <div className="space-y-2 text-left">
                    <h4 className="font-bold text-sm sm:text-base text-white leading-snug">
                      Board of Control for Cricket in India (BCCI)
                    </h4>
                    <p className="text-xs text-slate-300 font-medium">
                      Level I Coaching Certificate
                    </p>

                    <div className="w-10 h-[1px] bg-slate-700/60 my-2" />

                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      Officially certified by the Board of Control for Cricket in India.
                    </p>
                  </div>
                </div>
              </div>

              {/* View Certificate Action Button */}
              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setIsCertModalOpen(true)}
                  className="py-2.5 px-4 rounded-lg border border-amber-400/80 bg-transparent hover:bg-amber-400/10 active:scale-95 text-amber-400 font-semibold text-xs tracking-wider uppercase flex items-center gap-2 transition-all cursor-pointer shadow-sm group"
                >
                  <span>VIEW CERTIFICATE</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* High-Res Certificate Modal */}
      {isCertModalOpen && (
        <div
          onClick={() => setIsCertModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full bg-[#0B1B2D] border border-slate-700 rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6 cursor-default animate-scaleUp"
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-700/80 mb-4">
              <div>
                <h3 className="text-lg font-bold text-white font-display uppercase tracking-wider">
                  BCCI Level I Coaching Certificate
                </h3>
                <p className="text-xs text-amber-400 font-inter">National Cricket Academy — Darwatkar Sanjay</p>
              </div>
              <button
                onClick={() => setIsCertModalOpen(false)}
                className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer active:scale-90"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-[75vh] overflow-y-auto rounded-lg border border-slate-800 bg-white p-2 flex justify-center">
              <img
                src="/images/coach-certificate.jpg"
                alt="National Cricket Academy Level 1 Certificate"
                className="w-full h-auto object-contain rounded"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

