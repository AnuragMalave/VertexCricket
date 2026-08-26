import React, { useState, useRef, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, PlayCircle } from 'lucide-react';
import tourVideo from '../assets/MicrosoftTeams-video.mp4';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [activeChapter, setActiveChapter] = useState('Overview');
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(() => { });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  if (!isOpen) return null;

  const chapters = [
    { id: 'Overview', name: 'Academy Intro', startPct: 0 },
    { id: 'Nets', name: 'State-of-the-Art Nets', startPct: 0.25 },
    { id: 'Coaching', name: 'BCCI Certified Coaching', startPct: 0.50 },
    { id: 'Analytics', name: 'Biomechanical Analysis', startPct: 0.75 },
  ];

  const formatTime = (seconds: number): string => {
    if (isNaN(seconds) || seconds <= 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const cur = videoRef.current.currentTime;
      setCurrentTime(cur);

      const dur = videoRef.current.duration;
      if (dur > 0) {
        const pct = cur / dur;
        if (pct >= 0.75) setActiveChapter('Analytics');
        else if (pct >= 0.50) setActiveChapter('Coaching');
        else if (pct >= 0.25) setActiveChapter('Nets');
        else setActiveChapter('Overview');
      }
    }
  };

  const handleSeek = (newTime: number) => {
    setCurrentTime(newTime);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
    }
  };

  const handleSelectChapter = (ch: typeof chapters[0]) => {
    setActiveChapter(ch.id);
    if (videoRef.current && duration > 0) {
      const targetTime = duration * ch.startPct;
      videoRef.current.currentTime = targetTime;
      setCurrentTime(targetTime);
      if (!isPlaying) {
        setIsPlaying(true);
      }
    }
  };

  const handleToggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(() => { });
      } else {
        videoRef.current.requestFullscreen().catch(() => { });
      }
    }
  };

  const progressPct = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl sm:max-w-3xl bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col max-h-[90vh] animate-scaleUp"
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

        {/* Video Player */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden group">
          <video
            ref={videoRef}
            src={tourVideo}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-full h-full object-contain cursor-pointer"
          />

          {/* Video Overlay Elements */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

          {/* Center Play Button Overlay */}
          {!isPlaying && (
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute z-10 w-14 h-14 bg-[#DC2626]/90 hover:bg-[#DC2626] text-white rounded-full flex items-center justify-center shadow-xl transition-transform transform hover:scale-110 cursor-pointer"
            >
              <Play className="w-7 h-7 fill-white ml-1" />
            </button>
          )}

          {/* Active Chapter Label */}
          <div className="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-md text-white text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded border border-white/10 flex items-center gap-1.5 pointer-events-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse"></span>
            <span>Now Playing: {chapters.find(c => c.id === activeChapter)?.name || activeChapter}</span>
          </div>

          {/* Controls Bar */}
          <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black via-black/90 to-transparent flex flex-col gap-2 opacity-95">
            {/* Dynamic Progress Timeline Bar with Draggable Slider */}
            <div className="relative w-full h-3 flex items-center group/timeline">
              <div className="w-full h-1.5 group-hover/timeline:h-2 bg-white/20 rounded-full overflow-hidden transition-all">
                <div
                  className="h-full bg-[#DC2626] transition-all duration-75"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
              <input
                type="range"
                min={0}
                max={duration || 100}
                step={0.1}
                value={currentTime}
                onChange={(e) => handleSeek(parseFloat(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
            </div>

            <div className="flex items-center justify-between text-white text-xs">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-[#DC2626] transition-colors p-1 cursor-pointer"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                </button>

                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="hover:text-[#DC2626] transition-colors p-1 cursor-pointer"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>

                <span className="text-slate-300 font-mono text-[11px] select-none">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="hidden sm:inline-block px-1.5 py-0.5 bg-red-600/30 text-red-400 rounded text-[9px] font-bold border border-red-500/30">
                  HD 1080P
                </span>
                <button
                  onClick={handleToggleFullscreen}
                  className="hover:text-[#DC2626] transition-colors p-1 cursor-pointer"
                  aria-label="Fullscreen"
                >
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
                onClick={() => handleSelectChapter(ch)}
                className={`p-2 rounded-lg border text-left transition-all text-xs flex items-center justify-between cursor-pointer ${activeChapter === ch.id
                  ? 'border-[#DC2626] bg-[#DC2626]/20 text-white'
                  : 'border-slate-800 bg-slate-900/50 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
              >
                <div className="truncate">
                  <span className="font-semibold block truncate text-[11px]">{ch.name}</span>
                  <span className="text-[9px] text-slate-500 font-mono">
                    {duration > 0 ? formatTime(ch.startPct * duration) : '0:00'}
                  </span>
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
