import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Language, translations } from '../data/translations';
import { Mail, ArrowDown, ShieldCheck, MapPin, Award, Activity, Globe, Zap, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  lang: Language;
  onOpenContactDock: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenContactDock }) => {
  const t = translations[lang].hero;

  return (
    <section id="about" className="pt-28 pb-16 lg:pt-36 lg:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column: Copy & Value Proposition */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          {/* Location / Availability Banner */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
              Portfolio
            </span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800 text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              {t.statusAvailable}
            </span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <span className="inline-flex items-center gap-1 text-[11px]">
              <MapPin className="w-3.5 h-3.5" />
              {t.location}
            </span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <span className="inline-flex items-center gap-1 text-[11px]">
              <Globe className="w-3.5 h-3.5" />
              {t.languages}
            </span>
          </div>

          {/* Headline with accent highlight */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] text-balance">
            {lang === 'es' ? (
              <>
                High Agency &amp; Extreme Ownership |{' '}
                <span className="text-blue-600 dark:text-blue-400">De Ex Atleta Profesional</span>{' '}
                a Líder de Crecimiento B2B
              </>
            ) : (
              <>
                High Agency &amp; Extreme Ownership |{' '}
                <span className="text-blue-600 dark:text-blue-400">Ex-Professional Athlete</span>{' '}
                turned B2B Growth Leader
              </>
            )}
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
            {t.subheadline}
          </p>

          {/* Credentials Badges */}
          <div className="flex flex-wrap gap-2 text-xs text-slate-700 dark:text-slate-300 pt-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 font-medium">
              <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
              {t.badgeAws}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 font-medium">
              <Activity className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
              {t.badgeData}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 font-medium">
              <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              {t.badgeRugby}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
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

        {/* Right Column: Executive Portrait Card */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-sm">
            {/* Ambient glow */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-blue-600/20 to-emerald-500/20 blur-xl opacity-70"></div>

            <div className="relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-4 shadow-xl flex flex-col gap-3">
              {/* Profile Photo as interactive link directly to #actualidad */}
              <a
                href="#actualidad"
                title={lang === 'es' ? 'Ver herramientas en Huboo Technologies' : 'View Huboo Technologies Tools'}
                aria-label={lang === 'es' ? 'Ver herramientas en Huboo Technologies' : 'View Huboo Technologies Tools'}
                className="group relative block overflow-hidden rounded-xl aspect-square bg-slate-100 dark:bg-slate-800 cursor-pointer shadow-inner"
              >
                <img
                  src={PERSONAL_INFO.avatarUrl}
                  alt="Nicolás Coronel - BDM & Account Executive"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />

                {/* Scrim with Role and Kicker */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-4 flex flex-col">
                  <span className="font-bold text-white text-base tracking-tight">Nicolás Coronel</span>
                  <span className="text-[11px] font-mono uppercase text-blue-300 font-semibold tracking-wider">
                    {lang === 'es' ? 'BDM & Account Executive · Ex Atleta Profesional' : 'BDM & Account Executive · Former Pro Athlete'}
                  </span>
                </div>

                {/* Subtle hover overlay prompt */}
                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-colors flex items-start justify-end p-3">
                  <div className="px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-white text-[11px] font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>{lang === 'es' ? 'Huboo Tools' : 'Huboo Tools'}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>
              </a>

              {/* Micro-stats under portrait */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <div className="bg-slate-50 dark:bg-slate-950/70 border border-slate-200/70 dark:border-slate-800/70 p-2.5 rounded-lg flex flex-col">
                  <span className="text-[10px] font-bold font-mono uppercase text-slate-400 dark:text-slate-500 tracking-wider">
                    {lang === 'es' ? 'Ritmo de Ascenso' : 'Promotion Pace'}
                  </span>
                  <span className="text-xs font-extrabold text-blue-600 dark:text-blue-400 mt-0.5">
                    {lang === 'es' ? 'SDR → BDM en 4 Meses' : 'SDR → BDM in 4 Mo.'}
                  </span>
                </div>
                <div className="bg-slate-50 dark:bg-slate-950/70 border border-slate-200/70 dark:border-slate-800/70 p-2.5 rounded-lg flex flex-col">
                  <span className="text-[10px] font-bold font-mono uppercase text-slate-400 dark:text-slate-500 tracking-wider">
                    {lang === 'es' ? 'Mentalidad' : 'Execution Style'}
                  </span>
                  <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 mt-0.5">
                    {lang === 'es' ? 'Cero Excusas · Resiliencia' : 'Zero-Excuses Grit'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics Ribbon (4 Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14 pt-8 border-t border-slate-200 dark:border-slate-800">
        {/* Stat 1 */}
        <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col gap-1 hover:border-blue-500/40 transition-colors">
          <span className="text-[11px] font-bold font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
            {lang === 'es' ? 'Trayectoria Competitiva' : 'Competitive Tenure'}
          </span>
          <div className="text-3xl font-extrabold text-slate-900 dark:text-white font-mono tabular-nums tracking-tight">
            10+ Yrs
          </div>
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
            {t.stat1Label}
          </span>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-0.5">
            {t.stat1Context}
          </p>
        </div>

        {/* Stat 2 */}
        <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col gap-1 hover:border-blue-500/40 transition-colors">
          <span className="text-[11px] font-bold font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
            {lang === 'es' ? 'Alcance Global' : 'Global Reach'}
          </span>
          <div className="text-3xl font-extrabold text-slate-900 dark:text-white font-mono tabular-nums tracking-tight">
            3
          </div>
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
            {t.stat2Label}
          </span>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-0.5">
            {t.stat2Context}
          </p>
        </div>

        {/* Stat 3 */}
        <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col gap-1 hover:border-blue-500/40 transition-colors">
          <span className="text-[11px] font-bold font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
            {lang === 'es' ? 'Distinción Técnica' : 'Technical Distinction'}
          </span>
          <div className="text-3xl font-extrabold text-slate-900 dark:text-white font-mono tabular-nums tracking-tight">
            3rd
          </div>
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
            {t.stat3Label}
          </span>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-0.5">
            {t.stat3Context}
          </p>
        </div>

        {/* Stat 4 */}
        <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col gap-1 hover:border-blue-500/40 transition-colors">
          <span className="text-[11px] font-bold font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
            {lang === 'es' ? 'Método Comercial' : 'Commercial Method'}
          </span>
          <div className="text-3xl font-extrabold text-slate-900 dark:text-white font-mono tabular-nums tracking-tight">
            100%
          </div>
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
            {t.stat4Label}
          </span>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-0.5">
            {t.stat4Context}
          </p>
        </div>
      </div>
    </section>
  );
};
