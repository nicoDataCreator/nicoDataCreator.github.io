import React, { useState, useEffect, useRef } from 'react';
import { Language } from '../data/translations';

interface ScrollProgressIndicatorProps {
  lang: Language;
  activeSection: string;
  onSectionClick?: (sectionId: string) => void;
}

export const ScrollProgressIndicator: React.FC<ScrollProgressIndicatorProps> = ({
  lang,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = totalHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / totalHeight) * 100)) : 0;
        setScrollProgress(progress);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 select-none pointer-events-none"
      role="progressbar"
      aria-label={lang === 'es' ? 'Progreso de lectura del portafolio' : 'Portfolio reading progress'}
      aria-valuenow={Math.round(scrollProgress)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {/* Track Bar (2.5px high sleek progress bar) */}
      <div className="relative h-[2.5px] w-full bg-slate-200/60 dark:bg-slate-800/60 backdrop-blur-xs">
        {/* Continuous Smooth Progress Line with vibrant gradient */}
        <div
          className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 dark:from-blue-500 dark:via-indigo-400 dark:to-cyan-300 rounded-r-full shadow-[0_0_12px_rgba(59,130,246,0.7)] transition-[width] duration-75 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </div>
  );
};
