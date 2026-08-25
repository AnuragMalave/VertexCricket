import React, { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, PlayCircle } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [activeChapter, setActiveChapter] = useState('Overview');

  if (!isOpen) return null;

  const chapters = [
    { id: 'Overview', name: 'Academy Intro', duration: '1:45' },
    { id: 'Nets', name: 'State-of-the-Art Nets', duration: '2:10' },
    { id: 'Coaching', name: 'BCCI Certified Coaching', duration: '3:05' },
    { id: 'Analytics', name: 'Biomechanical Analysis', duration: '1:20' },
  ];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-xl bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0B1B2D] px-4 py-2.5 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <PlayCircle className="w-4 h-4 text-[#DC2626]" />
            <span className="font-heading tracking-wide uppercase text-xs font-bold">VERTEX ACADEMY • TOUR</span>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-4.5 h-4.5" />
          </button>
        </div>

        {/* Simulated Video Player */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden group">
          <img 
            src="https://images.pexels.com/photos/35330492/pexels-photo-35330492.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=720&w=1280" 
            alt="Cricket Action Video"
            className="w-full h-full object-cover opacity-80"
          />

          {/* Video Overlay Elements */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

          {/* Center Play Button Overlay */}
          {!isPlaying && (
            <button 
              onClick={() => setIsPlaying(true)}
              className="absolute z-10 w-12 h-12 bg-[#DC2626]/90 hover:bg-[#DC2626] text-white rounded-full flex items-center justify-center shadow-xl transition-transform transform hover:scale-110"
            >
              <Play className="w-6 h-6 fill-white ml-0.5" />
            </button>
          )}

          {/* Active Chapter Label */}
          <div className="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-md text-white text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded border border-white/10 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse"></span>
            <span>Now Playing: {activeChapter}</span>
          </div>

          {/* Controls Bar */}
          <div className="absolute bottom-0 inset-x-0 p-2.5 bg-gradient-to-t from-black to-transparent flex flex-col gap-1.5 opacity-95">
            {/* Progress bar */}
            <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden cursor-pointer">
              <div className="h-full bg-[#DC2626] w-2/3 transition-all duration-300"></div>
            </div>

            <div className="flex items-center justify-between text-white text-xs">
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-[#DC2626] transition-colors"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                </button>

                <button 
                  onClick={() => setIsMuted(!isMuted)}
                  className="hover:text-[#DC2626] transition-colors"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>

                <span className="text-slate-300 font-mono text-[10px]">01:12 / 03:45</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="hidden sm:inline-block px-1.5 py-0.5 bg-red-600/30 text-red-400 rounded text-[9px] font-bold border border-red-500/30">
                  HD 1080P
                </span>
                <button className="hover:text-[#DC2626] transition-colors">
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Video Chapters bar */}
        <div className="bg-[#0B1B2D] p-3 border-t border-slate-800">
          <p className="text-[10px] text-slate-400 mb-1.5 font-bold uppercase tracking-wider">Select Chapter:</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
            {chapters.map((ch) => (
              <button
                key={ch.id}
                onClick={() => setActiveChapter(ch.id)}
                className={`p-2 rounded-lg border text-left transition-all text-xs flex items-center justify-between ${
                  activeChapter === ch.id
                    ? 'border-[#DC2626] bg-[#DC2626]/10 text-white'
                    : 'border-slate-800 bg-slate-900/50 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <div className="truncate">
                  <span className="font-semibold block truncate text-[11px]">{ch.name}</span>
                  <span className="text-[9px] text-slate-500">{ch.duration}</span>
                </div>
                {activeChapter === ch.id && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] flex-shrink-0"></span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
