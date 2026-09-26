import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProfessionalCareer } from './components/ProfessionalCareer';
import { SportsCareer } from './components/SportsCareer';
import { ProjectsLab } from './components/ProjectsLab';
import { EducationCuriosities } from './components/EducationCuriosities';
import { ContactSection } from './components/ContactSection';
import { FloatingContactDock } from './components/FloatingContactDock';
import { ImageLightbox } from './components/ImageLightbox';
import { Footer } from './components/Footer';

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
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('portfolio-theme', 'light');
    }
  }, [darkMode]);

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
      {/* 3-Zone Navigation Header */}
      <Navbar
        darkMode={darkMode}
        onToggleTheme={() => setDarkMode(!darkMode)}
        onOpenContactDock={() => setContactDockOpen(true)}
      />

      {/* Main Sections */}
      <main>
        {/* Hero & Executive Summary */}
        <Hero onOpenContactDock={() => setContactDockOpen(true)} />

        {/* Section 1: Professional Career / Vida Profesional */}
        <ProfessionalCareer />

        {/* Section 2: Pro Sports & Athletic Leadership / Vida Pro/Deportiva */}
        <SportsCareer onOpenLightbox={handleOpenLightbox} />

        {/* Section 3: Projects & Systems Lab / Proyectos con interactividad & metodología */}
        <ProjectsLab onOpenLightbox={handleOpenLightbox} />

        {/* Section 4: Education, Certifications & Curiosity Lab / Estudios & Curiosidades */}
        <EducationCuriosities />

        {/* Section 5: Dedicated Contact Section */}
        <ContactSection />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Floating Sticky Bottom Contact Dock with Profile Picture & Hamburger Menu */}
      <FloatingContactDock
        isOpen={contactDockOpen}
        onToggle={() => setContactDockOpen(!contactDockOpen)}
        onClose={() => setContactDockOpen(false)}
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
