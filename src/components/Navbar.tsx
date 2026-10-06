import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon, ArrowUpRight, Globe, Mail } from 'lucide-react';
import { Language, translations } from '../data/translations';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  onToggleTheme: () => void;
  lang: Language;
  onToggleLang: () => void;
  onOpenContactDock: () => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  onToggleTheme,
  lang,
  onToggleLang,
  onOpenContactDock,
  activeSection = 'about',
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const activeTabRef = useRef<HTMLAnchorElement | null>(null);
  const t = translations[lang].nav;
  const isEs = lang === 'es';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sections config with concise labels to prevent any visual overlap
  const navItems = [
    {
      id: 'about',
      num: '01',
      label: t.about,
      shortLabel: 'Overview',
      href: '#about',
    },
    {
      id: 'actualidad',
      num: '02',
      label: t.actualidad,
      shortLabel: 'Software',
      href: '#actualidad',
    },
    {
      id: 'career',
      num: '03',
      label: t.career,
      shortLabel: isEs ? 'Metodología' : 'Methodology',
      href: '#career',
    },
    {
      id: 'sports',
      num: '04',
      label: t.sports,
      shortLabel: 'Rugby',
      href: '#sports',
    },
    {
      id: 'projects',
      num: '05',
      label: t.projects,
      shortLabel: 'Data Apps',
      href: '#projects',
    },
    {
      id: 'education',
      num: '06',
      label: t.education,
      shortLabel: isEs ? 'Estudios' : 'Education',
      href: '#education',
    },
    {
      id: 'contact',
      num: '07',
      label: t.contact,
      shortLabel: isEs ? 'Contacto' : 'Contact',
      href: '#contact',
    },
  ];

  // Auto-scroll the mobile ribbon to center the active section tab
  useEffect(() => {
    if (activeTabRef.current && scrollContainerRef.current) {
      activeTabRef.current.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [activeSection]);

  // Smooth scroll handler with responsive offset compensation
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const isSubBarActive = window.innerWidth < 1280;
      const headerOffset = isSubBarActive ? 104 : 76;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = Math.max(0, elementPosition - headerOffset);

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      try {
        window.history.pushState(null, '', href);
      } catch {
        // Fallback silently if environment prevents history state modification
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 dark:border-slate-800/80'
          : 'bg-white/85 dark:bg-slate-950/85 backdrop-blur-sm border-b border-slate-200/50 dark:border-slate-800/50 xl:bg-white/90 xl:dark:bg-slate-950/90'
      }`}
    >
      {/* Primary Top Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 sm:h-18 flex items-center justify-between gap-6">
          {/* Left Column: Brand (shrink-0 so it NEVER collides or compresses) */}
          <div className="flex items-center shrink-0">
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, '#about')}
              className="group flex items-center gap-2.5 text-slate-900 dark:text-white transition-colors"
            >
              <img
                src="/favicon.ico"
                alt="NC Favicon"
                className="w-5 h-5 rounded-xs object-contain shrink-0 transition-transform group-hover:scale-110"
              />
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold tracking-tight whitespace-nowrap">
                  Nicolás Coronel
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 hidden sm:inline leading-tight">
                  {isEs ? 'Crecimiento B2B & Datos' : 'B2B Growth & Data'}
                </span>
              </div>
            </a>
          </div>

          {/* Center Column: Desktop Navigation (Only on >= 1280px with ample space, centered in the layout) */}
          <nav className="hidden xl:flex items-center justify-center gap-1.5 2xl:gap-2 text-xs font-semibold shrink-0">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3 py-1.5 rounded-lg transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400 font-bold bg-blue-50/90 dark:bg-blue-950/70 shadow-2xs'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/70'
                  }`}
                >
                  {item.shortLabel}
                </a>
              );
            })}
          </nav>

          {/* Right Column: Utilities (shrink-0 so buttons never collide) */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* 1-Click Fast Language Switcher */}
            <button
              onClick={onToggleLang}
              title={lang === 'en' ? 'Cambiar a Español (1 clic)' : 'Switch to English (1 click)'}
              aria-label={lang === 'en' ? 'Cambiar a Español' : 'Switch to English'}
              className="flex items-center gap-1 sm:gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-all cursor-pointer shadow-2xs active:scale-95"
            >
              <Globe className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
              <span className="font-mono">{lang === 'en' ? 'ES' : 'EN'}</span>
              <span className="text-[11px] hidden xs:inline">{lang === 'en' ? '🇪🇸' : '🇬🇧'}</span>
            </button>

            {/* Theme Switcher */}
            <button
              onClick={onToggleTheme}
              title={darkMode ? 'Modo Claro' : 'Modo Oscuro'}
              aria-label={darkMode ? 'Cambiar a modo Claro' : 'Cambiar a modo Oscuro'}
              className="p-1.5 sm:p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer border border-transparent hover:border-slate-200 dark:hover:border-slate-700 active:scale-95"
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-amber-400 animate-in fade-in zoom-in duration-200" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700 animate-in fade-in zoom-in duration-200" />
              )}
            </button>

            {/* Let's Connect CTA Button */}
            <button
              onClick={onOpenContactDock}
              className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-xs transition-all whitespace-nowrap cursor-pointer active:scale-95"
            >
              <Mail className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden sm:inline">{isEs ? 'Conectemos' : "Let's Connect"}</span>
              <span className="sm:hidden">{isEs ? 'Contacto' : 'Connect'}</span>
              <ArrowUpRight className="w-3 h-3 hidden md:inline shrink-0" />
            </button>

            {/* Profile Thumbnail with Active Ring */}
            <img
              src={PERSONAL_INFO.avatarUrl}
              alt="Nicolás Coronel"
              className="w-8 h-8 rounded-full object-cover ring-2 ring-blue-500/70 shrink-0 hidden xs:inline-block cursor-pointer"
              onClick={onOpenContactDock}
              title={isEs ? 'Contacto directo con Nicolás' : 'Direct contact with Nicolás'}
            />
          </div>
        </div>
      </div>

      {/* Directly Visible Sub-Ribbon (< 1280px): Centered, generous breathing room, zero overlapping */}
      <div className="xl:hidden relative border-t border-slate-200/70 dark:border-slate-800/70 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md">
        {/* Subtle Edge Gradients for Mobile Swipe Cue */}
        <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-white dark:from-slate-950 to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-white dark:from-slate-950 to-transparent pointer-events-none z-10" />

        <div
          ref={scrollContainerRef}
          className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-start md:justify-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar scroll-smooth"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.href}
                ref={isActive ? activeTabRef : null}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs whitespace-nowrap transition-all duration-150 shrink-0 ${
                  isActive
                    ? 'bg-blue-600 text-white font-bold shadow-xs scale-102'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white bg-slate-100 dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800/70 font-medium'
                }`}
              >
                <span className={`text-[10px] font-mono ${isActive ? 'text-blue-200' : 'text-slate-400 dark:text-slate-500'}`}>
                  {item.num}
                </span>
                <span>{item.shortLabel}</span>
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
};
