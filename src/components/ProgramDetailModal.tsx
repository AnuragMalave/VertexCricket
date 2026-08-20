import React from 'react';
import { X, Check, Clock, ShieldCheck, Users, Calendar, ArrowRight } from 'lucide-react';

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
    title: 'BEGINNER PROGRAM',
    ageGroup: 'Ages 6 - 12 Years',
    tagline: 'Perfect for new players to learn basics, techniques and game understanding.',
    description: 'Designed specifically for young aspirants starting their cricket journey. We focus on establishing solid fundamental mechanics for grip, stance, swing, bowling action, catch technique, and field agility while fostering maximum joy for the game.',
    image: '/images/program-beginner.jpg',
    highlights: [
      'Basic Batting Mechanics & Stance Alignment',
      'Fundamentals of Bowling Action & Arm Path',
      'Soft-ball Hand-Eye Coordination Drills',
      'Basic Fielding & Catching Techniques',
      'Fun Mini-Matches & Rules Orientation',
      'Weekly Progress Card for Parents'
    ],
    schedule: 'Mon, Wed, Fri (6:30 AM - 8:30 AM) OR (4:00 PM - 6:00 PM)',
    ratio: '1 Coach for every 6 Students',
    fee: '₹4,500 / Month ($60/mo)'
  },
  intermediate: {
    id: 'intermediate',
    title: 'INTERMEDIATE PROGRAM',
    ageGroup: 'Ages 12 - 16 Years',
    tagline: 'Enhance your skills, game sense and performance with advanced training.',
    description: 'Targeted at club players and school team members looking to refine shot selection, spin vs pace execution, tactical awareness, pitch reading, match simulations, and specialized physical conditioning.',
    image: '/images/program-intermediate.jpg',
    highlights: [
      'Advanced Shot Building (Drive, Sweep, Pull, Loft)',
      'Pace & Spin Bowling Variations & Control',
      'Live Net Practice with Bowler Speed Radar',
      'Match Simulation Scenarios under Pressure',
      'Fitness, Core Strength & Speed Conditioning',
      'High-Speed Video Stroke Analysis'
    ],
    schedule: 'Tue, Thu, Sat (6:00 AM - 8:30 AM) OR (4:30 PM - 7:00 PM)',
    ratio: '1 Coach for every 5 Students',
    fee: '₹7,000 / Month ($95/mo)'
  },
  advanced: {
    id: 'advanced',
    title: 'ADVANCED PROGRAM',
    ageGroup: 'Ages 15+ / Competitive',
    tagline: 'High-performance training for competitions and professional cricket.',
    description: 'An elite high-performance pathway for state, district, and professional league aspirants. Includes personalized bi-weekly match analytics, mental toughness coaching, custom nutrition plans, and exposure to top-tier tournaments.',
    image: '/images/program-advanced.jpg',
    highlights: [
      'Biomechanical Pitch Video Analysis',
      'State-Level Tournament Placement & Trial Prep',
      'Mental Conditioning & High-Pressure Scenarios',
      'Dedicated Fast Bowling / Spin Bowling Lab',
      '1-on-1 Mentorship by Ex-Ranji Trophy Stars',
      'Customized Sports Diet & Recovery Protocol'
    ],
    schedule: 'Daily (Mon to Sat) 6:00 AM - 9:00 AM & 4:00 PM - 7:00 PM',
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden my-6 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Hero Image Banner */}
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B2D] via-[#0B1B2D]/60 to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="inline-block px-3 py-1 bg-[#DC2626] text-white text-[11px] font-semibold font-inter rounded-full mb-2 uppercase tracking-wider">
              {program.ageGroup}
            </span>
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-slate-100 p-4 rounded-xl border border-slate-200">
            <div className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-[#DC2626] mt-0.5" />
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-500 block">Batch Timing</span>
                <span className="text-xs font-semibold text-slate-800">{program.schedule}</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
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
            </div>
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
