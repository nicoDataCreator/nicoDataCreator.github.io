import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Language, translations } from '../data/translations';
import { Sparkles, Check, ChevronRight } from 'lucide-react';

interface ScrollProgressIndicatorProps {
  lang: Language;
  activeSection: string;
  onSectionClick?: (sectionId: string) => void;
}

interface SectionMilestone {
  id: string;
  label: string;
  shortLabel: string;
  pct: number;
}

export const ScrollProgressIndicator: React.FC<ScrollProgressIndicatorProps> = ({
  lang,
  activeSection,
  onSectionClick,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [milestones, setMilestones] = useState<SectionMilestone[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  const t = translations[lang];

  // Ordered sections in portfolio
  const sectionDefinitions = [
    { id: 'about', label: t.nav.about, shortLabel: lang === 'es' ? 'Sobre Mí' : 'About' },
    { id: 'actualidad', label: t.nav.actualidad, shortLabel: 'Huboo' },
    { id: 'career', label: t.nav.career, shortLabel: lang === 'es' ? 'Carrera' : 'Career' },
    { id: 'sports', label: t.nav.sports, shortLabel: 'Rugby' },
    { id: 'projects', label: t.nav.projects, shortLabel: lang === 'es' ? 'Proyectos' : 'Projects' },
    { id: 'education', label: t.nav.education, shortLabel: lang === 'es' ? 'Estudios' : 'Education' },
    { id: 'contact', label: t.nav.contact, shortLabel: lang === 'es' ? 'Contacto' : 'Contact' },
  ];

  // Calculate actual relative document positions
  const updateMilestones = useCallback(() => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) return;

    const calculated: SectionMilestone[] = sectionDefinitions.map((sec, index) => {
      if (index === 0) {
        return { ...sec, pct: 0 };
      }
      const el = document.getElementById(sec.id);
      if (!el) {
        const fallbackPct = Math.round((index / (sectionDefinitions.length - 1)) * 100);
        return { ...sec, pct: fallbackPct };
      }
      const rect = el.getBoundingClientRect();
      const elemTop = rect.top + window.scrollY;
      const rawPct = (elemTop / totalHeight) * 100;
      const clampedPct = Math.max(0, Math.min(100, Math.round(rawPct * 10) / 10));
      return { ...sec, pct: clampedPct };
    });

    setMilestones(calculated);
  }, [lang]);

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
    window.addEventListener('resize', updateMilestones);

    handleScroll();
    updateMilestones();

    const t1 = setTimeout(updateMilestones, 400);
    const t2 = setTimeout(updateMilestones, 1200);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateMilestones);
      clearTimeout(t1);
      clearTimeout(t2);
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [updateMilestones]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 64;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = Math.max(0, elementPosition - navOffset);

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    if (onSectionClick) {
      onSectionClick(sectionId);
    }
    setIsExpanded(false);
  };

  const activeIdx = sectionDefinitions.findIndex((s) => s.id === activeSection);
  const currentSection = sectionDefinitions[activeIdx !== -1 ? activeIdx : 0];

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 select-none group"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => {
        setIsExpanded(false);
        setHoveredSection(null);
      }}
      role="progressbar"
      aria-label={lang === 'es' ? 'Progreso de lectura del portafolio' : 'Portfolio reading progress'}
      aria-valuenow={Math.round(scrollProgress)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {/* 1. Track Bar (3px high, expanding slightly on hover to 5px for touch/pointer precision) */}
      <div className="relative h-[3px] sm:h-1 group-hover:h-1.5 w-full bg-slate-200/80 dark:bg-slate-800/80 backdrop-blur-xs transition-all duration-200">
        {/* Continuous Smooth Progress Line with vibrant gradient */}
        <div
          className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 dark:from-blue-500 dark:via-indigo-400 dark:to-cyan-300 relative rounded-r-full shadow-[0_0_12px_rgba(59,130,246,0.7)] transition-[width] duration-75 ease-out"
          style={{ width: `${scrollProgress}%` }}
        >
          {/* Subtle glowing beacon head at current scroll point */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white ring-2 ring-blue-500 shadow-[0_0_10px_rgba(255,255,255,1),0_0_16px_rgba(59,130,246,0.9)] translate-x-1/2" />
        </div>

        {/* Section Milestones: discrete checkpoint pips positioned along the bar */}
        <div className="absolute inset-0 pointer-events-none">
          {milestones.map((milestone, idx) => {
            const isCurrent = milestone.id === activeSection;
            const isPassed = scrollProgress >= milestone.pct - 0.5;
            const isHovered = hoveredSection === milestone.id;

            return (
              <button
                key={milestone.id}
                onClick={(e) => {
                  e.stopPropagation();
                  scrollToSection(milestone.id);
                }}
                onMouseEnter={() => setHoveredSection(milestone.id)}
                onMouseLeave={() => setHoveredSection(null)}
                aria-label={`${milestone.label} (${idx + 1}/${milestones.length})`}
                className="pointer-events-auto absolute top-1/2 -translate-y-1/2 -translate-x-1/2 cursor-pointer focus:outline-hidden py-1 px-0.5"
                style={{ left: `${milestone.pct}%` }}
              >
                {/* Node dot */}
                <div
                  className={`transition-all duration-200 rounded-full ${
                    isCurrent
                      ? 'w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-600 dark:bg-blue-400 ring-2 ring-white dark:ring-slate-900 shadow-md scale-125'
                      : isPassed
                      ? 'w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 dark:bg-blue-400 opacity-90 hover:scale-150'
                      : 'w-1.5 h-1.5 bg-slate-400/80 dark:bg-slate-600 hover:bg-slate-600 dark:hover:bg-slate-400 hover:scale-150'
                  }`}
                />

                {/* Tooltip on hovering specific dot */}
                {isHovered && (
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-slate-900/95 dark:bg-slate-800/95 text-white backdrop-blur-md rounded-md shadow-xl border border-slate-700/60 whitespace-nowrap text-xs font-medium z-50 flex items-center gap-1.5 animate-in fade-in zoom-in-95 duration-150 pointer-events-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse shrink-0" />
                    <span className="font-semibold text-slate-100">{milestone.label}</span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {idx + 1}/{milestones.length}
                    </span>
                    <span className="text-[10px] text-blue-300 font-mono">
                      {Math.round(milestone.pct)}%
                    </span>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Interactive Section Ribbon Drawer on Hover */}
      <div
        className={`transition-all duration-300 ease-out origin-top border-b border-slate-200/80 dark:border-slate-800/80 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-lg ${
          isExpanded
            ? 'opacity-100 max-h-20 translate-y-0 py-2'
            : 'opacity-0 max-h-0 -translate-y-2 pointer-events-none py-0 overflow-hidden'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Current Section status */}
          <div className="flex items-center gap-2 text-xs shrink-0">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-slate-500 dark:text-slate-400 font-mono text-[11px]">
              {lang === 'es' ? 'Sección' : 'Section'} {activeIdx + 1}/{sectionDefinitions.length}:
            </span>
            <span className="font-bold text-slate-900 dark:text-white">
              {currentSection.label}
            </span>
            <span className="font-mono text-blue-600 dark:text-blue-400 font-semibold bg-blue-50 dark:bg-blue-950/80 px-1.5 py-0.5 rounded text-[11px]">
              {Math.round(scrollProgress)}%
            </span>
          </div>

          {/* Quick interactive segment breadcrumb buttons */}
          <div className="hidden sm:flex items-center gap-1 overflow-x-auto no-scrollbar py-0.5">
            {sectionDefinitions.map((sec, i) => {
              const isCurrent = sec.id === activeSection;
              return (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className={`px-2 py-0.5 rounded text-[11px] font-medium transition-all whitespace-nowrap cursor-pointer ${
                    isCurrent
                      ? 'bg-blue-600 text-white font-semibold shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {sec.shortLabel}
                </button>
              );
            })}
          </div>

          {/* Prompt */}
          <div className="text-[11px] text-slate-400 dark:text-slate-500 font-mono hidden md:block shrink-0">
            {lang === 'es' ? 'Clic en cualquier punto para saltar' : 'Click any section to jump'}
          </div>
        </div>
      </div>
    </div>
  );
};
