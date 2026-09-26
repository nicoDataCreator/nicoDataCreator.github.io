import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight, Globe } from 'lucide-react';
import { Language, translations } from '../data/translations';

interface NavbarProps {
  darkMode: boolean;
  onToggleTheme: () => void;
  lang: Language;
  onToggleLang: () => void;
  onOpenContactDock: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  onToggleTheme,
  lang,
  onToggleLang,
  onOpenContactDock,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.about, href: '#about' },
    { label: t.actualidad, href: '#actualidad' },
    { label: t.career, href: '#career' },
    { label: t.sports, href: '#sports' },
    { label: t.projects, href: '#projects' },
    { label: t.education, href: '#education' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 dark:border-slate-800/80'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Wordmark with Favicon */}
        <a
          href="#about"
          className="text-lg font-bold tracking-tight text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap flex items-center gap-2"
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

        {/* Desktop nav links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-slate-950 dark:hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400 hover:after:w-full after:transition-all after:duration-200 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls: 1-Click Language Switcher, Sun/Moon Theme, and CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
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
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-xs transition-colors whitespace-nowrap"
          >
            <span>{t.getInTouch}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-2 pb-6 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-xl space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {link.label}
            </a>
          ))}

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2">
            <button
              onClick={onToggleLang}
              className="flex-1 flex items-center justify-center gap-2 py-2 px-3 text-xs font-bold rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
            >
              <Globe className="w-3.5 h-3.5 text-blue-500" />
              <span>{lang === 'en' ? '🇪🇸 Cambiar a Español' : '🇬🇧 Switch to English'}</span>
            </button>

            <button
              onClick={onToggleTheme}
              className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContactDock();
            }}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors mt-2"
          >
            <span>{t.getInTouch}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
};
