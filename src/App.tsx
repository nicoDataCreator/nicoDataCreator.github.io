import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ActualidadSection } from './components/ActualidadSection';
import { ProfessionalCareer } from './components/ProfessionalCareer';
import { SportsCareer } from './components/SportsCareer';
import { ProjectsLab } from './components/ProjectsLab';
import { EducationCuriosities } from './components/EducationCuriosities';
import { ContactSection } from './components/ContactSection';
import { FloatingContactDock } from './components/FloatingContactDock';
import { ImageLightbox } from './components/ImageLightbox';
import { Footer } from './components/Footer';
import { Language } from './data/translations';

export const App: React.FC = () => {
  // Theme state persisted in localStorage
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Language state persisted in localStorage (defaults to Spanish or English)
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('portfolio-lang');
      if (savedLang === 'es' || savedLang === 'en') return savedLang;
      // If user browser is Spanish, start with Spanish or default to English
      if (navigator.language.startsWith('es')) return 'es';
    }
    return 'en';
  });

  // Lightbox state
  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    imageUrl: string;
    title?: string;
    caption?: string;
  }>({
    isOpen: false,
    imageUrl: '',
    title: '',
    caption: ''
  });

  // Floating contact dock state
  const [contactDockOpen, setContactDockOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      document.body.classList.add('dark');
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      root.classList.remove('dark');
      document.body.classList.remove('dark');
      localStorage.setItem('portfolio-theme', 'light');
    }
  }, [darkMode]);

  const handleToggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  const handleToggleLang = () => {
    setLang((prev) => {
      const nextLang = prev === 'en' ? 'es' : 'en';
      localStorage.setItem('portfolio-lang', nextLang);
      return nextLang;
    });
  };

  const handleOpenLightbox = (imageUrl: string, title?: string, caption?: string) => {
    setLightbox({
      isOpen: true,
      imageUrl,
      title,
      caption
    });
  };

  const handleCloseLightbox = () => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      {/* 3-Zone Navigation Header with 1-Click Language & Sun/Moon Theme Switcher */}
      <Navbar
        darkMode={darkMode}
        onToggleTheme={handleToggleTheme}
        lang={lang}
        onToggleLang={handleToggleLang}
        onOpenContactDock={() => setContactDockOpen(true)}
      />

      {/* Main Sections */}
      <main>
        {/* Hero & Executive Summary */}
        <Hero
          lang={lang}
          onOpenContactDock={() => setContactDockOpen(true)}
        />

        {/* Current Focus: Huboo BDM & Custom-Built Outbound & Proposal Apps */}
        <ActualidadSection
          lang={lang}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Section 1: Professional Career / Vida Profesional */}
        <ProfessionalCareer
          lang={lang}
        />

        {/* Section 2: Pro Sports & Athletic Leadership / Vida Pro/Deportiva */}
        <SportsCareer
          lang={lang}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Section 3: Projects & Systems Lab / Proyectos con interactividad & metodología */}
        <ProjectsLab
          lang={lang}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Section 4: Education, Certifications & Curiosity Lab / Estudios & Curiosidades */}
        <EducationCuriosities
          lang={lang}
        />

        {/* Section 5: Dedicated Contact Section */}
        <ContactSection
          lang={lang}
        />
      </main>

      {/* Editorial Footer */}
      <Footer
        lang={lang}
      />

      {/* Floating Sticky Bottom Contact Dock with Profile Picture, 1-Click Language Switch, & Hamburger Menu */}
      <FloatingContactDock
        isOpen={contactDockOpen}
        onToggle={() => setContactDockOpen(!contactDockOpen)}
        onClose={() => setContactDockOpen(false)}
        lang={lang}
        onToggleLang={handleToggleLang}
      />

      {/* Fullscreen Lightbox for Images & Project Visuals */}
      <ImageLightbox
        isOpen={lightbox.isOpen}
        imageUrl={lightbox.imageUrl}
        title={lightbox.title}
        caption={lightbox.caption}
        onClose={handleCloseLightbox}
      />
    </div>
  );
};

export default App;
