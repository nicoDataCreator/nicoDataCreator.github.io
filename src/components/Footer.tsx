import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Language } from '../data/translations';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const isEs = lang === 'es';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-200/80 dark:border-slate-800/80">
          {/* Col 1 (6 cols): Brand & Executive Bio */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-slate-900 dark:text-white">Nicolás Coronel</span>
              <span className="font-mono text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 border border-slate-200 dark:border-slate-800 px-1.5 py-0.5 rounded">
                BDM &amp; AE
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              {isEs
                ? 'Líder en crecimiento B2B, estratega comercial y arquitecto de datos. Aplicando resiliencia deportiva de élite y disciplina algorítmica a la generación predecible de ingresos.'
                : 'Executive Growth Leader, B2B Enterprise Strategist, and Data Architect. Applying elite sporting grit and algorithmic discipline to high-velocity revenue infrastructure.'}
            </p>
            <div className="flex items-center gap-2 pt-1">
              <span className="font-mono text-[11px] text-slate-400 dark:text-slate-500 uppercase">{isEs ? 'Estado:' : 'Status:'}</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-mono text-[11px] font-semibold border border-emerald-200 dark:border-emerald-800">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse"></span>
                {isEs ? 'Disponible para Roles BDM & AE' : 'Available for BDM & AE Roles'}
              </span>
            </div>
          </div>

          {/* Col 2 (3 cols): Executive Navigation */}
          <div className="md:col-span-3 space-y-2.5">
            <span className="font-mono text-[11px] font-bold uppercase text-slate-400 dark:text-slate-500 tracking-wider">
              {isEs ? 'Navegación Ejecutiva' : 'Executive Navigation'}
            </span>
            <div className="flex flex-col space-y-1.5 text-xs">
              <a href="#about" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {isEs ? 'Visión General (Portfolio)' : 'Executive Overview'}
              </a>
              <a href="#actualidad" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {isEs ? 'Herramientas Huboo' : 'Huboo Software & Tools'}
              </a>
              <a href="#career" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {isEs ? 'Metodología & Trayectoria' : 'Career Trajectory & Sales Ops'}
              </a>
              <a href="#sports" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {isEs ? 'Liderazgo en Rugby Pro' : 'Athletic Leadership Ethos'}
              </a>
              <a href="#projects" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {isEs ? 'Wayness App & Machine Learning' : 'Applied AI & Python Tools'}
              </a>
            </div>
          </div>

          {/* Col 3 (3 cols): Direct Channels */}
          <div className="md:col-span-3 space-y-2.5">
            <span className="font-mono text-[11px] font-bold uppercase text-slate-400 dark:text-slate-500 tracking-wider">
              {isEs ? 'Canales Directos' : 'Direct Channels'}
            </span>
            <div className="flex flex-col space-y-1.5 text-xs">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1"
              >
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors truncate"
              >
                {PERSONAL_INFO.email}
              </a>
              <a
                href="https://wa.me/34607055125"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                WhatsApp (+34 607 055 125)
              </a>
              <a
                href="#contact"
                className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {isEs ? 'Formulario de Contacto' : 'Direct Message Note'}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div>
            © {new Date().getFullYear()} Nicolás Coronel. Extreme Ownership &amp; High Agency. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] text-slate-400 dark:text-slate-500 hidden md:inline">
              Madrid (CET) · EN / IT / ES
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[11px] font-semibold">{isEs ? 'Subir' : 'Top'}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
