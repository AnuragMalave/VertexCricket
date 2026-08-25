import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

interface ProgramsSectionProps {
  onSelectProgramKey: (key: string) => void;
  onOpenEnroll: (programTitle: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({
  onSelectProgramKey,
  onOpenEnroll
}) => {
  const programs = [
    {
      key: 'beginner',
      title: 'FOUNDATION PROGRAM',
      image: '/images/program-beginner.jpg',
      description: 'Perfect for new players to learn basics, techniques and game understanding.',
      stars: 1,
    },
    {
      key: 'intermediate',
      title: 'DEVELOPMENT PROGRAM',
      image: '/images/program-intermediate.jpg',
      description: 'Enhance your skills, game sense and performance with advanced training.',
      stars: 2,
    },
    {
      key: 'advanced',
      title: 'HIGH PERFORMANCE PROGRAM',
      image: '/images/program-advanced.jpg',
      description: 'High-performance training for competitions and professional cricket.',
      stars: 3,
    },
  ];

  return (
    <section id="programs" className="py-12 lg:py-16 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

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
          {programs.map((prog) => (
            <div
              key={prog.key}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group border border-slate-200/80"
            >
              {/* Image Container with Inset Circular Badge Icon Overlay */}
              <div className="relative">
                <div className="h-44 sm:h-48 overflow-hidden bg-slate-200">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Circular Badge Icon Overlay on top layer */}
                <div className="absolute -bottom-5 left-5 z-20">
                  <div className="w-11 h-11 rounded-full bg-[#053E58] text-white flex items-center justify-center border-4 border-white shadow-md transition-transform group-hover:scale-110 px-1">
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
              <div className="p-5 pt-8 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#0B1B2D] tracking-normal uppercase">
                    {prog.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-inter font-normal">
                    {prog.description}
                  </p>
                </div>

                {/* Bottom Red Link Action */}
                <div className="pt-3 flex items-center justify-between border-t border-slate-100">
                  <button
                    onClick={() => onSelectProgramKey(prog.key)}
                    className="text-[#DC2626] hover:text-red-700 font-semibold font-inter text-xs uppercase tracking-wider flex items-center gap-1.5 group/link cursor-pointer"
                  >
                    <span>LEARN MORE</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                  </button>

                  <button
                    onClick={() => onOpenEnroll(prog.title)}
                    className="text-[10px] font-semibold font-inter text-slate-600 hover:text-[#0B1B2D] uppercase tracking-wider bg-slate-100 px-2.5 py-1 rounded cursor-pointer"
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
