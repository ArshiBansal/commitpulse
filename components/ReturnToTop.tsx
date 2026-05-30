'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

export default function ReturnToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const clientHeight = window.innerHeight;

      // Existing visibility logic
      setIsVisible(scrollHeight - (scrollTop + clientHeight) < 300);

      // Scroll progress calculation
      const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;

      setScrollProgress(Math.min(Math.max(progress, 0), 100));
    };

    toggleVisibility();
    window.addEventListener('scroll', toggleVisibility, { passive: true });

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // SVG ring values
  const radius = 24;
  const circumference = 2 * Math.PI * radius;

  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <div className="relative flex items-center justify-center">
            {/* Progress Ring */}
            <svg className="absolute -rotate-90" width="64" height="64" aria-hidden="true">
              {/* Track */}
              <circle
                cx="32"
                cy="32"
                r={radius}
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="text-emerald-500/15 dark:text-emerald-400/15"
              />

              {/* Progress */}
              <circle
                cx="32"
                cy="32"
                r={radius}
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                className="text-emerald-500 dark:text-emerald-400 transition-all duration-100"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
              />
            </svg>

            {/* Existing Button */}
            <button
              onClick={scrollToTop}
              className="relative p-3 rounded-full border border-emerald-500/20 bg-white text-emerald-600 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 dark:border-emerald-400/20 dark:bg-black dark:text-emerald-400 dark:hover:bg-emerald-400 dark:hover:text-black dark:hover:border-emerald-400 hover:scale-110 active:scale-95 shadow-[0_4px_20px_rgba(16,185,129,0.15)] dark:shadow-[0_4px_30px_rgba(16,185,129,0.3)] transition-all duration-300 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ffaa] focus-visible:ring-offset-2"
              aria-label="Return to top"
            >
              <ChevronUp size={24} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}