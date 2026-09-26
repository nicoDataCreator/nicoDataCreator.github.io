import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Language, translations } from '../data/translations';
import { Mail, ArrowDown, ShieldCheck, MapPin, Award, Activity, Globe } from 'lucide-react';

interface HeroProps {
  lang: Language;
  onOpenContactDock: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenContactDock }) => {
  const t = translations[lang].hero;

  return (
    <section id="about" className="pt-28 pb-16 md:pt-36 md:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Editorial Typography & Value Proposition */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          {/* Status and Location Badges */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              {t.statusAvailable}
            </span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {t.location}
            </span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <span className="inline-flex items-center gap-1">
              <Globe className="w-3.5 h-3.5" />
              {t.languages}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] text-balance">
            {t.headline}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
            {t.subheadline}
          </p>

          {/* Core competency badges */}
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-600 dark:text-slate-400 pt-1">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>{t.badgeAws}</span>
            </div>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <div className="flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>{t.badgeData}</span>
            </div>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <div className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>{t.badgeRugby}</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onOpenContactDock}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>{t.ctaContact}</span>
            </button>

            <a
              href="#career"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-800 rounded-lg transition-colors whitespace-nowrap"
            >
              <span>{t.ctaCareer}</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#sports"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap"
            >
              <span>{t.ctaRugby}</span>
            </a>
          </div>
        </div>

        {/* Right Column: High-Performance Profile Photo Card */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-sm">
            {/* Ambient glow */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-blue-600/20 to-emerald-500/20 blur-xl opacity-70"></div>

            <div className="relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-4 shadow-xl">
              {/* Profile Photo as interactive link directly to #actualidad */}
              <a
                href="#actualidad"
                title={lang === 'es' ? 'Ver sección de Actualidad en Huboo' : 'View Current Focus at Huboo'}
                aria-label={lang === 'es' ? 'Ver sección de Actualidad en Huboo' : 'View Current Focus at Huboo'}
                className="group relative block overflow-hidden rounded-xl aspect-square bg-slate-100 dark:bg-slate-800 cursor-pointer shadow-inner"
              >
                <img
                  src={PERSONAL_INFO.avatarUrl}
                  alt="Nicolas Coronel - BDM & Account Executive"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Subtle hover overlay prompt */}
                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/25 transition-colors flex items-end justify-center p-3">
                  <div className="px-3 py-1.5 rounded-lg bg-slate-950/85 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5 opacity-90 group-hover:opacity-100 shadow-lg border border-white/10 group-hover:scale-105 transition-all">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>{lang === 'es' ? 'Ver Actualidad (Huboo) ↓' : 'View Current Focus (Huboo) ↓'}</span>
                  </div>
                </div>
              </a>

              {/* Title and role directly under profile photo: BDM & Account Executive · Ex Atleta Profesional */}
              <div className="pt-3 pb-1 text-center">
                <div className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                  Nicolas Coronel
                </div>
                <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-1">
                  BDM &amp; Account Executive · Ex Atleta Profesional
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4-Stat Context Bar */}
      <div className="mt-14 pt-8 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="space-y-1">
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tabular-nums">
            10+
          </div>
          <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
            {t.stat1Label}
          </div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
            {t.stat1Context}
          </div>
        </div>

        <div className="space-y-1">
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tabular-nums">
            3
          </div>
          <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
            {t.stat2Label}
          </div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
            {t.stat2Context}
          </div>
        </div>

        <div className="space-y-1">
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tabular-nums">
            3rd
          </div>
          <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
            {t.stat3Label}
          </div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
            {t.stat3Context}
          </div>
        </div>

        <div className="space-y-1">
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tabular-nums">
            100%
          </div>
          <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
            {t.stat4Label}
          </div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
            {t.stat4Context}
          </div>
        </div>
      </div>
    </section>
  );
};
