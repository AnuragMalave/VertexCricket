import React, { useState } from 'react';
import { NetFacilityIcon } from './CricketIcons';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import internationalStandersImg from '../assets/international standers.jpg';
import astroTurfImg from '../assets/Astro turf.jpg';
import biomechanicsLabImg from '../assets/biomechanics_lab.jpg';
import { useScrollReveal } from '../utils/useScrollReveal';

export const FacilitiesSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  const [activeFacility, setActiveFeature] = useState(0);

  const facilities = [
    {
      id: 'turf',
      title: 'International Standard Turf Pitches',
      subtitle: '8 Clay & Black Soil Center Wickets',
      desc: 'Accurately curated turf pitches providing varied bounce, pace, and turn conditions matching international stadium specs.',
      image: internationalStandersImg,
      specs: ['Custom Soil Mix', 'Sub-surface Drainage System', 'Curator Maintained Daily'],
    },
    {
      id: 'nets',
      title: 'Astro-Turf & Automated Bowling Nets',
      subtitle: '12 All-Weather Practice Lanes',
      desc: 'High-density AstroTurf and artificial rubber nets equipped with professional Bola bowling machines capable of 150km/h seam & spin.',
      image: astroTurfImg,
      specs: ['Programmable Bowling Machines', 'All-Weather Enclosed Nets', 'Speed Gun Radar Tracking', 'Safety Netting Enclosures'],
    },
    {
      id: 'video',
      title: 'Biomechanics Video Analysis Lab',
      subtitle: '240fps High-Speed Multi-Angle Cameras',
      desc: 'State-of-the-art visual recording studio with Dartfish biomechanical feedback software for pinpointing release angles & footwork.',
      image: biomechanicsLabImg,
      specs: ['3D Motion Capture', 'Instant Dugout Display Sync', 'Release Point Tracking', 'Biweekly Player Reports'],
    },
    {
      id: 'gym',
      title: 'High-Performance Sports Gym & Rehab',
      subtitle: 'Cricket-Specific Physical Conditioning',
      desc: 'Equipped with pneumatic resistance machines, plyometric turf tracks, ice baths, and dedicated physio recovery tables.',
      image: 'https://images.pexels.com/photos/30387504/pexels-photo-30387504.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1000',
      specs: ['Sports Physiotherapist On-Site', 'Cryotherapy & Ice Baths', 'Power Lifting Platforms', 'Agility Speed Ladders'],
    },
  ];

  const current = facilities[activeFacility];

  return (
    <section ref={ref} id="facilities" className="py-20 lg:py-16 bg-[#0B1B2D] text-white relative overflow-hidden">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-slate-800 pb-4">
          <div>
            <span className="text-amber-500 font-semibold text-xs tracking-[0.2em] uppercase font-inter block mb-3">
              WORLD-CLASS INFRASTRUCTURE
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display uppercase leading-tight text-white">
              FACILITIES THAT BUILD CHAMPIONS
            </h2>
          </div>
        </div>

        {/* Tab Buttons Row */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-4 scrollbar-none">
          {facilities.map((fac, idx) => (
            <button
              key={fac.id}
              onClick={() => setActiveFeature(idx)}
              className={`px-5 py-3 rounded-xl font-semibold font-inter text-xs uppercase tracking-wider whitespace-nowrap transition-all flex items-center gap-2 border cursor-pointer ${activeFacility === idx
                ? 'bg-[#DC2626] text-white border-[#DC2626] shadow-lg shadow-red-900/30'
                : 'bg-slate-800/60 text-slate-300 border-slate-700/80 hover:bg-slate-800 hover:text-white'
                }`}
            >
              <NetFacilityIcon className="w-4 h-4" />
              <span>{fac.title.split(' ')[0]} {fac.title.split(' ')[1]}</span>
            </button>
          ))}
        </div>

        {/* Main Display Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/80 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl">

          {/* Left Text Detail */}
          <div className="lg:col-span-6 space-y-5 text-left">
            <div>
              <span className="text-amber-400 font-semibold font-inter text-xs uppercase tracking-wider block mb-1">
                {current.subtitle}
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold font-display text-white tracking-normal uppercase leading-snug">
                {current.title}
              </h3>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-inter font-normal">
              {current.desc}
            </p>

            {/* Key Specs Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {current.specs.map((spec, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs text-slate-200 font-inter font-normal bg-slate-800/80 p-2.5 rounded-lg border border-slate-700/60">
                  <CheckCircle2 className="w-4 h-4 text-[#DC2626] flex-shrink-0" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-2 text-amber-400 text-xs font-medium font-inter tracking-wider uppercase">
              <ShieldCheck className="w-4 h-4" />
              <span>Sanitized Daily • Safety Netting Certified • Floodlit Night Access</span>
            </div>
          </div>

          {/* Right Image Feature */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-slate-700/80 shadow-2xl group w-full">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
