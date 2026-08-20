import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

// Helmet Icon (Expert Coaching)
export const HelmetIcon: React.FC<IconProps> = ({ className = "w-7 h-7", size }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} style={size ? { width: size, height: size } : {}}>
    <path d="M12 4a8 8 0 0 0-8 8v4h16v-4a8 8 0 0 0-8-8z" />
    <path d="M4 16h16v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2z" />
    <path d="M4 12h16" />
    <path d="M8 12v4" />
    <path d="M12 12v4" />
    <path d="M16 12v4" />
    <circle cx="12" cy="8" r="1.5" />
  </svg>
);

// Net / Pitch Icon (Modern Facilities)
export const NetFacilityIcon: React.FC<IconProps> = ({ className = "w-7 h-7" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 10h18" />
    <path d="M3 16h18" />
    <path d="M8 4v16" />
    <path d="M13 4v16" />
    <path d="M18 4v16" />
  </svg>
);

// Player / Batting Action Icon (Player Development)
export const PlayerActionIcon: React.FC<IconProps> = ({ className = "w-7 h-7" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="4" r="2" />
    <path d="M12 6v6" />
    <path d="M7 9l5 2 5-2" />
    <path d="M10 12l-2 8" />
    <path d="M14 12l3 8" />
    <path d="M17 6l3 9" />
  </svg>
);

// Trophy / Values Icon (Discipline & Values)
export const TrophyIcon: React.FC<IconProps> = ({ className = "w-7 h-7" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 9H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2" />
    <path d="M18 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2" />
    <path d="M6 3h12v7a6 6 0 0 1-12 0V3z" />
    <path d="M12 16v4" />
    <path d="M8 20h8" />
  </svg>
);

// Individual Attention Icon (Target / User focus)
export const FocusUserIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="9" r="2.5" />
    <path d="M7.5 17c.8-2 2.5-3 4.5-3s3.7 1 4.5 3" />
  </svg>
);

// Fitness & Conditioning Icon (Dumbbell / Activity)
export const FitnessIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6.5 6.5h11" />
    <path d="M6.5 17.5h11" />
    <path d="M4 8v8" />
    <path d="M20 8v8" />
    <path d="M9 4v16" />
    <path d="M15 4v16" />
  </svg>
);

// Match Simulations Icon (Crossed Bats)
export const CrossedBatsIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 20l11-11" />
    <path d="M14 8l2-2a2 2 0 0 1 2.8 2.8l-2 2" />
    <path d="M20 20l-11-11" />
    <path d="M10 8l-2-2a2 2 0 0 0-2.8 2.8l2 2" />
  </svg>
);

// Video Analysis Icon (Camera / Screen with Play)
export const VideoAnalysisIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="4" width="18" height="12" rx="2" />
    <path d="M10 8l5 3-5 3V8z" />
    <path d="M8 20h8" />
    <path d="M12 16v4" />
  </svg>
);

// Tournaments & Exposure Icon (Medal / Certificate)
export const TournamentIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="9" r="6" />
    <path d="M12 3v3" />
    <path d="M8.5 14.5L7 21l5-3 5 3-1.5-6.5" />
    <path d="M12 7l1.2 2.4 2.7.4-1.9 1.9.5 2.7-2.5-1.3-2.5 1.3.5-2.7-1.9-1.9 2.7-.4L12 7z" />
  </svg>
);

// Trained Players Icon (Group of People)
export const TrainedPlayersIcon: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="10" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

// Coach Badge Icon
export const CoachBadgeIcon: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2a5 5 0 0 0-5 5v3a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5z" />
    <path d="M6 19a6 6 0 0 1 12 0" />
    <path d="M12 12v3" />
    <path d="M9 15h6" />
  </svg>
);

// Dedication / Heart Shield Icon
export const DedicationIcon: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M12 8l1.5 3 3.5.5-2.5 2.5.6 3.5-3.1-1.6-3.1 1.6.6-3.5-2.5-2.5 3.5-.5L12 8z" fill="currentColor" opacity="0.2" />
  </svg>
);
