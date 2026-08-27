import React, { useState, useEffect } from 'react';
import { TrainedPlayersIcon, TrophyIcon, CoachBadgeIcon, DedicationIcon } from './CricketIcons';
import impactImg from '../assets/Impact Section image.png';
import { useScrollReveal } from '../utils/useScrollReveal';

// Helper component for smooth number count up animation
const CountUp: React.FC<{ end: number; suffix?: string; isVisible: boolean }> = ({ end, suffix = '', isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp: number | null = null;
    const duration = 2500; // 2.5 seconds

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Apple ease-out cubic curve
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easedProgress * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [end, isVisible]);

  return <>{count}{suffix}</>;
};

export const ImpactSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  const stats = [
    {
      id: 1,
      targetNum: 500,
      suffix: '+',
      textFallback: null,
      label: 'TRAINED PLAYERS',
      icon: <TrainedPlayersIcon className="w-8 h-8 text-slate-700" />,
    },
    {
      id: 2,
      targetNum: 50,
      suffix: '+',
      textFallback: null,
      label: 'TOURNAMENTS WON',
      icon: <TrophyIcon className="w-8 h-8 text-slate-700" />,
    },
    {
      id: 3,
      targetNum: null,
      suffix: '',
      textFallback: 'LEVEL 1',
      label: 'BCCI CERTIFIED COACH',
      icon: <CoachBadgeIcon className="w-8 h-8 text-slate-700" />,
    },
    {
      id: 4,
      targetNum: 100,
      suffix: '%',
      textFallback: null,
      label: 'DEDICATION',
      icon: <DedicationIcon className="w-8 h-8 text-slate-700" />,
    },
  ];

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-[#F8FAFC] relative overflow-hidden">
      {/* Top Right Grid Dot Background Accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-grid-dots opacity-40 pointer-events-none" />

      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 apple-reveal ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Equipment Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group apple-card-interactive">
              <img
                src={impactImg}
                alt="Vertex Cricket Equipment"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B2D]/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Heading & 4 Stat Columns */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div>
              <span className="text-amber-600 font-semibold text-xs tracking-[0.2em] uppercase font-inter block mb-3">
                OUR IMPACT
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display uppercase leading-tight text-[#053E58]">
                NUMBERS THAT SPEAK SUCCESS
              </h2>
            </div>

            {/* 4 Stats Grid with Outline Icons and Vertical Dividers */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-slate-200">
              {stats.map((item, idx) => (
                <div
                  key={item.id}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                  className={`flex flex-col items-center sm:items-center text-center space-y-2 py-2 apple-card-interactive p-2 rounded-xl hover:bg-white/60 ${idx !== stats.length - 1 ? 'sm:border-r border-slate-200/80 pr-2' : ''
                    }`}
                >
                  <div className="mb-1 text-slate-700 transition-transform duration-300 hover:scale-110">
                    {item.icon}
                  </div>
                  <span className="text-3xl sm:text-4xl font-bold font-display text-[#DC2626] tracking-tight">
                    {item.targetNum !== null ? (
                      <CountUp end={item.targetNum} suffix={item.suffix} isVisible={isVisible} />
                    ) : (
                      item.textFallback
                    )}
                  </span>
                  <span className="text-[11px] sm:text-xs font-semibold font-inter text-slate-700 tracking-wider uppercase">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

