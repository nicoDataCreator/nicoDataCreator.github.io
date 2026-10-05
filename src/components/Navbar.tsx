import React, { useState, useEffect } from 'react';
import { Sun, Moon, ArrowUpRight, Globe } from 'lucide-react';
import { Language, translations } from '../data/translations';

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
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.about, href: '#about', id: 'about' },
    { label: t.actualidad, href: '#actualidad', id: 'actualidad' },
    { label: t.career, href: '#career', id: 'career' },
    { label: t.sports, href: '#sports', id: 'sports' },
    { label: t.projects, href: '#projects', id: 'projects' },
    { label: t.education, href: '#education', id: 'education' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 dark:border-slate-800/80'
          : 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-xs border-b border-slate-200/50 dark:border-slate-800/50 md:bg-transparent md:border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Wordmark with Favicon */}
        <a
          href="#about"
          className="text-lg font-bold tracking-tight text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap flex items-center gap-2 shrink-0"
        >
          <img
            src="/favicon.ico"
            alt="NC Favicon"
            className="w-5 h-5 rounded-xs object-contain shrink-0"
          />
          <span>Nicolas Coronel</span>
          <span className="hidden sm:inline-block text-[11px] font-medium font-mono text-slate-400 dark:text-slate-500 border border-slate-200 dark:border-slate-800 px-1.5 py-0.5 rounded">
            BDM / AE
          </span>
        </a>

        {/* Desktop / Tablet Nav Links directly visible */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-5 text-xs lg:text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-2.5 py-1 rounded-md transition-all whitespace-nowrap ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400 font-bold bg-blue-50/80 dark:bg-blue-950/50 shadow-2xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/70'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls: 1-Click Language Switcher, Sun/Moon Theme, and CTA */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* 1-Click Language Switcher */}
          <button
            onClick={onToggleLang}
            title={lang === 'en' ? 'Cambiar a Español (1 clic)' : 'Switch to English (1 click)'}
            aria-label={lang === 'en' ? 'Cambiar a Español' : 'Switch to English'}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-all cursor-pointer shadow-xs active:scale-95"
          >
            <Globe className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span className="uppercase font-mono">{lang === 'en' ? 'ES' : 'EN'}</span>
            <span className="text-[11px]">{lang === 'en' ? '🇪🇸' : '🇬🇧'}</span>
          </button>

          {/* Sun / Moon Theme Toggle */}
          <button
            onClick={onToggleTheme}
            title={darkMode ? 'Cambiar a modo Claro / Switch to Light mode' : 'Cambiar a modo Oscuro / Switch to Dark mode'}
            aria-label={darkMode ? 'Switch to Light mode' : 'Switch to Dark mode'}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer border border-transparent hover:border-slate-200 dark:hover:border-slate-700 active:scale-95"
          >
            {darkMode ? (
              <Sun className="w-4 h-4 text-amber-400 animate-in fade-in zoom-in duration-200" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700 animate-in fade-in zoom-in duration-200" />
            )}
          </button>

          {/* Contact button */}
          <button
            onClick={onOpenContactDock}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-xs transition-colors whitespace-nowrap cursor-pointer"
          >
            <span>{t.getInTouch}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Mobile Directly Visible Sections Bar (No dropdown, no menu icon needed) */}
      <div className="md:hidden border-t border-slate-200/70 dark:border-slate-800/70 px-4 py-2 flex items-center gap-1.5 overflow-x-auto no-scrollbar bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-2xs">
        {navLinks.map((link) => {
          const isActive = activeSection === link.id;
          return (
            <a
              key={link.href}
              href={link.href}
              className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all shrink-0 ${
                isActive
                  ? 'bg-blue-600 text-white font-semibold shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60'
              }`}
            >
              {link.label}
            </a>
          );
        })}
      </div>
    </header>
  );
};
