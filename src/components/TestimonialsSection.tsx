import React, { useState } from 'react';
import { Star, ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { useScrollReveal } from '../utils/useScrollReveal';

export interface Testimonial {
  id: string | number;
  name: string;
  role: string;
  quote: string;
  avatarUrl?: string;
  rating?: number;
}

export const TestimonialsSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'next' | 'prev'>('next');
  const [animatingKey, setAnimatingKey] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const googleReviewsUrl =
    'https://www.google.com/search?q=Vertex+Cricket+Academy&kgmid=/g/11yjj832w0';

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Rakesh Sharma',
      role: 'Parent of U-14 Player',
      quote:
        'Vertex Cricket Academy has made it possible for my son to stay on top of his technique and make real progress quickly and easily under Coach Sanjay Darwatkar.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Aarav Patel',
      role: 'Batting Program Student',
      quote:
        "I've been training at Vertex for a year now and it's made managing my match fitness and stroke consistency so much easier.",
      rating: 5,
    },
    {
      id: 3,
      name: 'Priya & Vikram Nair',
      role: 'Parents of Fast Bowling Trainee',
      quote:
        'Vertex stands out as the most user-friendly, professional, and effective cricket academy solution I have ever experienced for my child.',
      rating: 5,
    },
    {
      id: 4,
      name: 'Aditya Deshmukh',
      role: 'High Performance Student',
      quote:
        'The video analysis lab and individual attention from the coaching staff boosted my tactical match awareness completely before district trials.',
      rating: 5,
    },
    {
      id: 5,
      name: 'Sunil Kulkarni',
      role: 'Parent of U-12 Student',
      quote:
        'Top class facilities with 8 international-standard turf wickets and automated net sessions. The best cricket training academy in Wagholi.',
      rating: 5,
    },
  ];

  const handlePrev = () => {
    setSlideDirection('prev');
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAnimatingKey((k) => k + 1);
  };

  const handleNext = () => {
    setSlideDirection('next');
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setAnimatingKey((k) => k + 1);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 40) {
      handleNext();
    } else if (diff < -40) {
      handlePrev();
    }
    setTouchStart(null);
  };

  // Get 3 visible cards starting from currentIndex
  const visibleCards = [
    testimonials[currentIndex % testimonials.length],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <section
      ref={ref}
      id="testimonials"
      className="py-16 lg:py-16 bg-white text-slate-800 relative overflow-hidden border-t border-slate-100"
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {/* Section Header (Centered) */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <span className="text-amber-500 font-semibold text-xs tracking-[0.2em] uppercase font-inter block mb-2">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight tracking-tight uppercase text-[#0B1B2D]">
            What Parents & Players <br />
            Say About Vertex
          </h2>

          {/* Google Rating Link Pill */}
          <div className="mt-3 flex items-center justify-center">
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200/80 rounded-full px-4 py-1 hover:border-amber-400 transition-all text-xs text-slate-600 font-inter"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span className="font-bold text-slate-800">5.0</span>
              <div className="flex items-center gap-0.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-slate-400 font-normal">| Google Reviews</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>

          <div className="w-16 h-1 bg-[#DC2626] mx-auto mt-4 rounded-full" />
        </div>

        {/* Animated Testimonials Grid Wrapper */}
        <div
          key={animatingKey}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-10 ${
            slideDirection === 'next' ? 'animate-slide-next' : 'animate-slide-prev'
          }`}
        >
          {visibleCards.map((item, idx) => {
            const isMiddle = idx === 1;

            return (
              <div
                key={`${item.id}-${idx}`}
                style={{ animationDelay: `${idx * 40}ms` }}
                className={`rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isMiddle
                    ? 'bg-[#F0F5F8] shadow-sm'
                    : 'bg-[#F8FAFC] hover:bg-[#F0F5F8]/60'
                }`}
              >
                {/* Quote Text (Top of Card) */}
                <p className="text-slate-700 text-sm sm:text-base font-inter leading-relaxed font-normal mb-8">
                  "{item.quote}"
                </p>

                {/* Card Footer: Name & Role, 5 Stars (Bottom of Card) */}
                <div className="flex items-center justify-between pt-2 gap-3">
                  {/* Left: User Details */}
                  <div className="min-w-0">
                    <h4 className="font-bold text-[#0B1B2D] text-base leading-snug font-inter truncate">
                      {item.name}
                    </h4>
                    <p className="text-xs text-[#053E58] font-semibold font-inter truncate">
                      {item.role}
                    </p>
                  </div>

                  {/* Right: 5 Stars */}
                  <div className="flex items-center gap-1 flex-shrink-0" aria-label="5 stars">
                    {[...Array(item.rating || 5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Navigation Buttons (Centered Bottom Controls) */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-slate-300 text-slate-700 hover:border-[#053E58] hover:text-[#053E58] hover:bg-slate-100 flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-[#053E58] hover:bg-[#032A3C] text-white flex items-center justify-center transition-all cursor-pointer shadow-md active:scale-95"
            aria-label="Next testimonial"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
