import React from 'react';
import { Language, translations } from '../data/translations';
import { Trophy, Shield, Zap, Target, Users, Flame, Maximize2 } from 'lucide-react';

interface SportsCareerProps {
  lang: Language;
  onOpenLightbox: (imageUrl: string, title?: string, caption?: string) => void;
}

export const SportsCareer: React.FC<SportsCareerProps> = ({ lang, onOpenLightbox }) => {
  const t = translations[lang].sports;

  const iconMap: Record<number, typeof Shield> = {
    0: Flame,
    1: Zap,
    2: Users,
    3: Target
  };

  return (
    <section id="sports" className="py-16 md:py-24 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-2">
            {t.badge}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.description}
          </p>
          <div className="flex flex-wrap items-center gap-3 mt-4 text-xs font-medium text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-1.5 font-semibold text-slate-700 dark:text-slate-200">
              <Trophy className="w-4 h-4 text-amber-500" />
              {t.period}
            </span>
            <span aria-hidden="true">·</span>
            <span>{t.countries}</span>
          </div>
        </div>

        {/* Pro Rugby Photography Showcase */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {t.galleryTitle}
            </h3>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              {t.galleryHint}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.galleryItems.map((item, idx) => (
              <div
                key={idx}
                onClick={() => onOpenLightbox(item.url, item.title, item.caption)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl transition-all"
              >
                <div className="relative aspect-video sm:aspect-16/10 overflow-hidden bg-slate-950 flex items-center justify-center">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Subtle Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>

                  {/* Expand button badge */}
                  <div className="absolute top-3 right-3 p-2 rounded-lg bg-black/60 text-white backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Overlay text */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <h4 className="text-base font-bold leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 line-clamp-2 leading-relaxed">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Transferable Principles */}
        <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              {t.principlesTag}
            </span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
              {t.principlesTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              {t.principlesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.principles.map((item, idx) => {
              const Icon = iconMap[idx] || Shield;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 space-y-2 hover:border-blue-500/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-1">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
