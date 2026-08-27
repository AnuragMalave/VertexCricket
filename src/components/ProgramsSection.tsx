import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { useScrollReveal } from '../utils/useScrollReveal';

interface ProgramsSectionProps {
  onSelectProgramKey: (key: string) => void;
  onOpenEnroll: (programTitle: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({
  onSelectProgramKey,
  onOpenEnroll
}) => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  const programs = [
    {
      key: 'beginner',
      title: 'FOUNDATION PROGRAM',
      image: '/images/program-beginner.jpg',
      description: 'Start Strong. Learn Right. For young players beginning their cricket journey.',
      stars: 1,
    },
    {
      key: 'intermediate',
      title: 'DEVELOPMENT PROGRAM',
      image: '/images/program-intermediate.jpg',
      description: 'Learn. Improve. Compete. For players with basic cricket experience.',
      stars: 2,
    },
    {
      key: 'advanced',
      title: 'HIGH PERFORMANCE PROGRAM',
      image: '/images/program-advanced.jpg',
      description: 'For players who want to compete at the next level.',
      stars: 3,
    },
  ];

  return (
    <section ref={ref} id="programs" className="py-12 lg:py-16 bg-[#F8FAFC]">
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 apple-reveal ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>

        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4 border-b border-slate-200/80 pb-5">
          <div>
            {/* <span className="text-[#0B1B2D] font-semibold text-xs tracking-[0.2em] uppercase font-inter block mb-2">
              OUR PROGRAMS
            </span> */}
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display uppercase leading-tight text-[#053E58]">
              TRAINING FOR EVERY STAGE
            </h2>
          </div>

          <div className="self-start sm:self-auto text-slate-500 font-semibold font-inter text-xs uppercase tracking-wider select-none">
            <span> OUR PROGRAMS </span>
          </div>
        </div>

        {/* 3 Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((prog, idx) => (
            <div
              onClick={() => onSelectProgramKey(prog.key)}
              key={prog.key}
              style={{ transitionDelay: `${idx * 100}ms` }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group border border-slate-200/80 apple-card-interactive"
            >
              {/* Image Container with Inset 6px Padding & Circular Badge Overlay */}
              <div className="relative p-1.5 pb-0">
                <div className="h-48 sm:h-52 overflow-hidden rounded-xl bg-slate-200">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Circular Badge Icon Overlay */}
                <div className="absolute -bottom-5 left-5 z-20">
                  <div className="w-12 h-12 rounded-full bg-[#053E58] text-white flex items-center justify-center border-4 border-white shadow-md transition-transform duration-300 group-hover:scale-110 px-1">
                    <div className="flex items-end justify-center gap-0.1 pb-0">
                      {prog.stars === 3 ? (
                        <>
                          <Star className="w-2.5 h-2.5 text-white fill-white mb-0.5" />
                          <Star className="w-4 h-4 text-white fill-white -translate-y-1" />
                          <Star className="w-2.5 h-2.5 text-white fill-white mb-0.5" />
                        </>
                      ) : prog.stars === 2 ? (
                        <>
                          <Star className="w-3.5 h-3.5 text-white fill-white" />
                          <Star className="w-3.5 h-3.5 text-white fill-white" />
                        </>
                      ) : (
                        <Star className="w-5 h-5 text-white fill-white" />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 pt-8 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-display font-extrabold text-base sm:text-lg text-[#0B1B2D] tracking-tight uppercase">
                    {prog.title}
                  </h3>

                  {/* Red accent line */}
                  <div className="w-7 h-0.5 bg-[#DC2626] rounded-full my-2.5 transition-all duration-300 group-hover:w-12" />

                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-inter font-normal">
                    {prog.description}
                  </p>
                </div>

                {/* Bottom Red Link & Pill Action */}
                <div className="pt-3.5 flex items-center justify-between border-t border-slate-100">
                  <button
                    onClick={() => onSelectProgramKey(prog.key)}
                    className="text-[#DC2626] hover:text-red-700 font-bold font-inter text-xs uppercase tracking-wider flex items-center gap-1.5 group/link cursor-pointer active:scale-95 transition-transform"
                  >
                    <span>LEARN MORE</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                  </button>

                  <button
                    onClick={() => onOpenEnroll(prog.title)}
                    className="text-[10px] font-bold font-inter text-slate-600 hover:text-slate-900 uppercase tracking-wider border border-slate-300 hover:border-slate-400 px-3.5 py-1.5 rounded-full transition-all cursor-pointer active:scale-95"
                  >
                    Quick Enroll
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};
