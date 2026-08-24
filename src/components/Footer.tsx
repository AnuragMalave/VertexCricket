import React from 'react';
import { Logo } from './Logo';
import { Phone, Mail, MapPin, Clock, Heart } from 'lucide-react';

interface FooterProps {
  onOpenEnroll: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnroll }) => {
  return (
    <footer id="contact" className="bg-[#07111E] text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">

          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Logo light className="mb-2" />

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal max-w-sm">
              Dedicated to nurturing talent and building champions through world-class training and values.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2 text-slate-400">
              <a href="https://www.instagram.com/vertexcricketacademy" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-[#DC2626] hover:text-white flex items-center justify-center transition-colors" aria-label="Instagram">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
              <a href="https://www.youtube.com/@VertexCricketAcademy" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-[#DC2626] hover:text-white flex items-center justify-center transition-colors" aria-label="Youtube">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-display font-semibold text-lg text-white tracking-normal uppercase">
              QUICK LINKS
            </h3>
            <ul className="space-y-2 text-xs font-inter font-normal text-slate-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#meet-coach" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Programs</a></li>
              <li><a href="#coaches" className="hover:text-white transition-colors">Coaches</a></li>
              <li><a href="#facilities" className="hover:text-white transition-colors">Facilities</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-display font-semibold text-lg text-white tracking-normal uppercase">
              CONTACT US
            </h3>
            <ul className="space-y-2.5 text-xs font-inter font-normal text-slate-400">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#DC2626] flex-shrink-0" />
                <a href="tel:+917722023037" className="hover:text-white transition-colors">+91 77220 23037</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#DC2626] flex-shrink-0" />
                <a href="mailto:vertexcricketacademy@gmail.com" className="hover:text-white transition-colors">vertexcricketacademy@gmail.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#DC2626] flex-shrink-0 mt-0.5" />
                <span>TopPlay, Near Podar International School, Upper Kharadi Road, Wagholi Pune </span>
              </li>
              {/* <li className="flex items-center gap-2 pt-1 text-slate-300 font-normal">
                <Clock className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                <span>5:00 PM – 7:00 PM (Mon - Fri)</span>
              </li> */}
            </ul>
          </div>

          {/* Column 4: Batch Timings */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-display font-semibold text-lg text-white tracking-normal uppercase">
              BATCH TIMINGS
            </h3>
            <div className="space-y-1.5 text-xs font-inter font-normal text-slate-400">
              <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                <span className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                  <span>Mon – Fri:</span>
                </span>
                <span className="text-white font-medium">5:00 PM – 7:00 PM</span>
              </div>
            </div>

            {/* <button
              onClick={onOpenEnroll}
              className="w-full py-3 bg-[#0B1B2D] hover:bg-slate-800 text-white border border-slate-700 font-semibold font-inter text-xs uppercase tracking-wider rounded transition-colors text-center shadow cursor-pointer"
            >
              ENROLL NOW
            </button> */}
          </div>

        </div>

        {/* Bottom Rights Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-inter font-normal text-slate-500 gap-2">
          <p>© 2026 Vertex Cricket Academy. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            <span>Designed with Passion for Cricket</span>
            <Heart className="w-3 h-3 text-[#DC2626] fill-[#DC2626]" />
          </p>
        </div>

      </div>
    </footer>
  );
};
