import React from 'react';
import { X, Check, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

export interface ProgramData {
  id: string;
  title: string;
  ageGroup: string;
  tagline: string;
  description: string;
  image: string;
  highlights: string[];
  schedule: string;
  ratio: string;
  fee: string;
}

export const PROGRAM_DETAILS: Record<string, ProgramData> = {
  beginner: {
    id: 'beginner',
    title: 'FOUNDATION PROGRAM',
    ageGroup: 'Ages 6 - 12 Years',
    tagline: 'Start Strong. Learn Right.',
    description: 'For young players beginning their cricket journey.',
    image: '/images/program-beginner.jpg',
    highlights: [
      'Cricket fundamentals',
      'Basic batting & bowling',
      'Fielding skills',
      'Coordination',
      'Fun-based learning'
    ],
    schedule: 'Mon - Fri : 5:00 PM – 7:00 PM',
    ratio: '1 Coach for every 6 Students',
    fee: '₹4,500 / Month ($60/mo)'
  },
  intermediate: {
    id: 'intermediate',
    title: 'DEVELOPMENT PROGRAM',
    ageGroup: 'Ages 12 - 16 Years',
    tagline: 'Learn. Improve. Compete.',
    description: 'For players with basic cricket experience.',
    image: '/images/program-intermediate.jpg',
    highlights: [
      'Advanced skills',
      'Technique development',
      'Game awareness',
      'Match practice',
      'Fitness development'
    ],
    schedule: 'Mon - Fri : 5:00 PM – 7:00 PM',
    ratio: '1 Coach for every 5 Students',
    fee: '₹7,000 / Month ($95/mo)'
  },
  advanced: {
    id: 'advanced',
    title: 'HIGH PERFORMANCE PROGRAM',
    ageGroup: 'Ages 15+ / Competitive',
    tagline: 'For Players Who Want To Compete At The Next Level',
    description: 'For players who want to compete at the next level.',
    image: '/images/program-advanced.jpg',
    highlights: [
      'Individual skill development',
      'Performance analysis',
      'Match preparation',
      'Advanced fitness',
      'Competitive match exposure'
    ],
    schedule: "Mon - Fri : 5:00 PM – 7:00 PM\nSat - Sun : On Demand",
    ratio: '1-on-1 and 1 Coach for every 3 Students',
    fee: '₹12,000 / Month ($160/mo)'
  }
};

interface ProgramDetailModalProps {
  programKey: string | null;
  onClose: () => void;
  onEnroll: (programTitle: string) => void;
}

export const ProgramDetailModal: React.FC<ProgramDetailModalProps> = ({
  programKey,
  onClose,
  onEnroll
}) => {
  if (!programKey || !PROGRAM_DETAILS[programKey]) return null;
  const program = PROGRAM_DETAILS[programKey];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn" onClick={onClose}>
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden my-6 max-h-[90vh] flex flex-col animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Hero Image Banner */}
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B2D] via-[#0B1B2D]/60 to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white transition-all active:scale-90 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            {/* <span className="inline-block px-3 py-1 bg-[#DC2626] text-white text-[11px] font-semibold font-inter rounded-full mb-2 uppercase tracking-wider">
              {program.ageGroup}
            </span> */}
            <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight uppercase leading-snug">{program.title}</h2>
          </div>
        </div>

        {/* Modal Scroll Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-700 text-sm">
          <p className="text-base text-slate-700 leading-relaxed font-inter font-normal">
            {program.description}
          </p>

          {/* Key Program Highlights Grid */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B1B2D] mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#DC2626]" /> Key Curriculum & Training Modules
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {program.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2.5 bg-slate-50 rounded-lg border border-slate-200/80">
                  <div className="w-5 h-5 rounded-full bg-[#DC2626]/10 text-[#DC2626] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs font-semibold text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Info Grid */}
          <div className="bg-slate-100 p-4 rounded-xl border border-slate-200">
            <div className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-[#DC2626] mt-0.5" />
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-500 block">Batch Timing</span>
                <span className="text-xs font-semibold text-slate-800 whitespace-pre-line">{program.schedule}</span>
              </div>
            </div>

            {/* <div className="flex items-start gap-2.5">
              <Users className="w-4 h-4 text-[#DC2626] mt-0.5" />
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-500 block">Coach Ratio</span>
                <span className="text-xs font-semibold text-slate-800">{program.ratio}</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Calendar className="w-4 h-4 text-[#DC2626] mt-0.5" />
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-500 block">Fee Investment</span>
                <span className="text-xs font-bold text-[#DC2626]">{program.fee}</span>
              </div>
            </div> */}
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900"
          >
            Close
          </button>

          <button
            onClick={() => {
              onClose();
              onEnroll(program.title);
            }}
            className="px-6 py-3 bg-[#DC2626] hover:bg-red-700 text-white font-bold rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg hover:shadow-red-500/20 transition-all"
          >
            Enroll In {program.title} <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
