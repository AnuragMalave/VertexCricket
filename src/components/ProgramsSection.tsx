import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PlayerActionIcon } from './CricketIcons';

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
      title: 'BEGINNER PROGRAM',
      image: '/images/program-beginner.jpg',
      description: 'Perfect for new players to learn basics, techniques and game understanding.',
    },
    {
      key: 'intermediate',
      title: 'INTERMEDIATE PROGRAM',
      image: '/images/program-intermediate.jpg',
      description: 'Enhance your skills, game sense and performance with advanced training.',
    },
    {
      key: 'advanced',
      title: 'ADVANCED PROGRAM',
      image: '/images/program-advanced.jpg',
      description: 'High-performance training for competitions and professional cricket.',
    },
  ];

  return (
    <section id="programs" className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 border-b border-slate-200/80 pb-6">
          <div>
            <span className="text-[#0B1B2D] font-semibold text-xs tracking-[0.2em] uppercase font-inter block mb-3">
              OUR PROGRAMS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display uppercase leading-tight text-[#0B1B2D]">
              TRAINING FOR EVERY STAGE
            </h2>
          </div>

          <button
            onClick={() => onSelectProgramKey('beginner')}
            className="self-start sm:self-auto bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 px-5 py-2.5 rounded-md font-semibold font-inter text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-sm cursor-pointer"
          >
            <span>VIEW ALL PROGRAMS</span>
            <ArrowRight className="w-4 h-4 text-slate-700" />
          </button>
        </div>

        {/* 3 Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((prog) => (
            <div
              key={prog.key}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group border border-slate-100"
            >
              {/* Image Container with Inset Circular Badge Icon Overlay */}
              <div className="relative h-60 overflow-hidden bg-slate-200">
                <img
                  src={prog.image}
                  alt={prog.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Circular Badge Icon Overlay on bottom center/left */}
                <div className="absolute -bottom-6 left-6 z-10">
                  <div className="w-14 h-14 rounded-full bg-[#0B1B2D] text-white flex items-center justify-center border-4 border-white shadow-lg transition-transform group-hover:scale-110">
                    <PlayerActionIcon className="w-7 h-7 text-white" />
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 pt-10 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-display font-semibold text-lg sm:text-xl text-[#0B1B2D] tracking-normal uppercase">
                    {prog.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-inter font-normal">
                    {prog.description}
                  </p>
                </div>

                {/* Bottom Red Link Action */}
                <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                  <button
                    onClick={() => onSelectProgramKey(prog.key)}
                    className="text-[#DC2626] hover:text-red-700 font-semibold font-inter text-xs uppercase tracking-wider flex items-center gap-1.5 group/link cursor-pointer"
                  >
                    <span>LEARN MORE</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
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
