import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MeetCoachSection } from './components/MeetCoachSection';
// import { AboutSection } from './components/AboutSection';
import { ProgramsSection } from './components/ProgramsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ImpactSection } from './components/ImpactSection';
// import { CoachesSection } from './components/CoachesSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { BottomCTA } from './components/BottomCTA';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

import { EnrollModal } from './components/EnrollModal';
import { VideoModal } from './components/VideoModal';
import { ProgramDetailModal } from './components/ProgramDetailModal';

export function App() {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [enrollDefaultProgram, setEnrollDefaultProgram] = useState('Beginner Program');
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [selectedProgramKey, setSelectedProgramKey] = useState<string | null>(null);

  const handleOpenEnroll = (programTitle?: string) => {
    if (programTitle) {
      setEnrollDefaultProgram(programTitle);
    }
    setIsEnrollOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* Top Navbar */}
      <Header onOpenEnroll={handleOpenEnroll} />

      {/* Main Page Sections */}
      <main className="flex-1">
        <Hero
          onOpenEnroll={() => handleOpenEnroll('Beginner Program')}
          onOpenVideo={() => setIsVideoOpen(true)}
        />

        <MeetCoachSection />

        {/* <AboutSection /> */}

        <ProgramsSection
          onSelectProgramKey={(key) => setSelectedProgramKey(key)}
          onOpenEnroll={(progTitle) => handleOpenEnroll(progTitle)}
        />

        <WhyChooseUs />

        <ImpactSection />

        {/* <CoachesSection /> */}

        <FacilitiesSection />

        <BottomCTA onOpenEnroll={() => handleOpenEnroll('Beginner Program')} />
      </main>

      {/* Footer */}
      <Footer onOpenEnroll={() => handleOpenEnroll('Beginner Program')} />

      {/* Floating Free Trial Session Sticky Action Badge */}
      {/* <div className="fixed bottom-20 right-5 sm:bottom-24 sm:right-6 z-30 hidden sm:flex items-center gap-2 bg-[#0B1B2D] text-white p-2 pr-4 rounded-full shadow-2xl border border-slate-700/80 hover:scale-105 transition-transform duration-300">
        <button
          onClick={() => handleOpenEnroll('Free 1-Day Trial Session')}
          className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider cursor-pointer"
        >
          <div className="w-9 h-9 rounded-full bg-[#DC2626] text-white flex items-center justify-center shadow-md animate-pulse">
            <Calendar className="w-4 h-4" />
          </div>
          <div className="text-left">
            <span className="block text-white font-bold leading-none text-[11px]">BOOK A FREE TRIAL</span>
            <span className="text-[9px] text-amber-400 font-bold uppercase">1-Day Pitch Pass</span>
          </div>
        </button>
      </div> */}

      {/* Floating WhatsApp Contact Button */}
      <WhatsAppButton />

      {/* Interactive Modals */}
      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        defaultProgram={enrollDefaultProgram}
      />

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />

      <ProgramDetailModal
        programKey={selectedProgramKey}
        onClose={() => setSelectedProgramKey(null)}
        onEnroll={(title) => handleOpenEnroll(title)}
      />
    </div>
  );
}

export default App;
