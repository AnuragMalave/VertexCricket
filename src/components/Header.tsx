import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onOpenEnroll: (program?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEnroll }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'HOME', href: '#home' },
    { id: 'about', label: 'ABOUT', href: '#meet-coach' },
    { id: 'programs', label: 'PROGRAMS', href: '#programs' },
    // { id: 'coaches', label: 'COACHES', href: '#coaches' },
    { id: 'facilities', label: 'FACILITIES', href: '#facilities' },
    { id: 'why-us', label: 'WHY US', href: '#why-us' },
    { id: 'contact', label: 'CONTACT', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100'
        : 'bg-white py-3 border-b border-slate-100'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setActiveTab(link.id)}
                className={`relative py-1 text-xs font-semibold font-inter uppercase tracking-wider transition-colors hover:text-[#DC2626] ${activeTab === link.id ? 'text-[#0B1B2D] font-bold' : 'text-slate-700'
                  }`}
              >
                {link.label}
                {/* Red Underline Bar for Active State */}
                {activeTab === link.id && (
                  <span className="absolute left-0 right-0 -bottom-1 h-[2.5px] bg-[#DC2626] rounded-full transition-all duration-300" />
                )}
              </a>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenEnroll()}
              className="relative group overflow-hidden bg-[#053E58] hover:bg-[#032A3C] text-white px-6 py-2.5 rounded-md font-semibold text-xs font-inter uppercase tracking-wider transition-all shadow-sm hover:shadow-[#053E58]/25 flex items-center gap-1.5 cursor-pointer"
            >
              <span className="relative z-10">ENROLL NOW</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-[#053E58] hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => {
                  setActiveTab(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`px-3 py-2 rounded-lg text-sm font-bold tracking-wider flex items-center justify-between transition-colors ${activeTab === link.id
                  ? 'bg-blue-50 text-[#053E58] font-extrabold'
                  : 'text-slate-700 hover:bg-slate-50'
                  }`}
              >
                <span>{link.label}</span>
                {activeTab === link.id && <span className="w-2 h-2 rounded-full bg-[#053E58]" />}
              </a>
            ))}

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnroll();
                }}
                className="w-full py-3 bg-[#053E58] text-white font-bold rounded-lg text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2"
              >
                ENROLL NOW <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
