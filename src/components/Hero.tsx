import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, ArrowDown, ShieldCheck, MapPin, Award, Activity, Globe } from 'lucide-react';

interface HeroProps {
  onOpenContactDock: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContactDock }) => {
  return (
    <section id="about" className="pt-28 pb-16 md:pt-36 md:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Editorial Typography & Value Proposition */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          {/* Unboxed Metadata & Status */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Available for BDR & AE Roles
            </span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              Madrid, Spain & Remote
            </span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1">
              <Globe className="w-3.5 h-3.5" />
              English · Italian · Spanish
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] text-balance">
            Where athletic grit, data engineering & consultative tech sales converge.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
            After a decade competing in European professional rugby and driving high-velocity client acquisition in Rome and Madrid, I help technology companies build qualified enterprise pipeline and close deals with disciplined sales execution, Python/SQL data fluency, and trilingual communication.
          </p>

          {/* Core competency badges rendered cleanly */}
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-600 dark:text-slate-400 pt-1">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>AWS Cloud Quest (3rd Place)</span>
            </div>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <div className="flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>Data Science & ETL Pipelines</span>
            </div>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <div className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>10-Yr Pro Rugby Athletic Background</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onOpenContactDock}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Nicolas</span>
            </button>

            <a
              href="#career"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-800 rounded-lg transition-colors whitespace-nowrap"
            >
              <span>Explore Career History</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#sports"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap"
            >
              <span>Rugby & Athletic Leadership →</span>
            </a>
          </div>
        </div>

        {/* Right Column: Visual Anchor & High-Performance Photo Card */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-sm">
            {/* Subtle backdrop glow */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-blue-600/20 to-emerald-500/20 blur-xl opacity-70"></div>

            <div className="relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-4 shadow-xl">
              <div className="relative overflow-hidden rounded-xl aspect-square bg-slate-100 dark:bg-slate-800 mb-4">
                <img
                  src={PERSONAL_INFO.avatarUrl}
                  alt="Nicolas Coronel - Professional Profile"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-slate-950/85 backdrop-blur-md rounded-lg p-2.5 text-white border border-white/10 shadow-lg">
                  <div className="text-xs font-semibold">Nicolas Coronel</div>
                  <div className="text-[11px] text-slate-300 leading-tight">
                    BDR & Account Executive · Ex Pro Rugby Athlete
                  </div>
                </div>
              </div>

              {/* Fast Stats Row */}
              <div className="grid grid-cols-2 gap-2 text-center pt-1 border-t border-slate-100 dark:border-slate-800">
                <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                  <div className="text-xl font-bold text-blue-600 dark:text-blue-400 font-mono tabular-nums">10+ Yrs</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">Pro Sports Grit</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                  <div className="text-xl font-bold text-emerald-600 dark:text-emerald-400 font-mono tabular-nums">3</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">Fluent Languages</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4-Stat Context Bar */}
      <div className="mt-14 pt-8 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6">
        {PERSONAL_INFO.stats.map((stat, idx) => (
          <div key={idx} className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tabular-nums">
              {stat.value}
            </div>
            <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
              {stat.label}
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
              {stat.context}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
