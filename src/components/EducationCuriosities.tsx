import React, { useState } from 'react';
import { Language, translations } from '../data/translations';
import { GraduationCap, Award, ExternalLink, Check, Globe, Flame, Cpu, Compass } from 'lucide-react';

interface EducationCuriositiesProps {
  lang: Language;
}

export const EducationCuriosities: React.FC<EducationCuriositiesProps> = ({ lang }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<'EN' | 'IT' | 'ES'>(lang === 'es' ? 'ES' : 'EN');
  const t = translations[lang].education;

  const languagePitches = {
    EN: {
      lang: "English (Professional Working Proficiency)",
      headline: "Cross-Border Enterprise SaaS Pipeline Generation",
      pitch: "I bridge the gap between technical architecture and business value. With a decade of high-performance rugby and intensive training in AWS and Data Science, I execute consultative discovery calls, handle executive objections with data, and drive deals to closure."
    },
    IT: {
      lang: "Italian (Full Professional Bilingual · Rome Residency)",
      headline: "Acquisizione Clienti e Sviluppo Commerciale",
      pitch: "Dopo anni trascorsi a Roma tra sport professionistico e sviluppo commerciale presso Elite Round Club, gestisco trattative complesse in italiano con totale naturalezza culturale, costruendo relazioni di fiducia con stakeholder e decision-maker aziendali."
    },
    ES: {
      lang: "Spanish (Native · Madrid Base)",
      headline: "Venta Consultiva de Software y Rigor Analítico",
      pitch: "Basado en Madrid y con experiencia cerrando operaciones tanto en software UX/UI (Betterplace) como en activos residenciales (Tecnocasa), aplico procesos ETL con Python y SQL para que la prospección comercial sea predecible, medible y rentable."
    }
  };

  const curiosityIcons: Record<string, typeof Globe> = {
    Globe,
    Flame,
    Cpu,
    Compass
  };

  return (
    <section id="education" className="py-16 md:py-24 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40">
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
        </div>

        {/* Education & Certifications Grid */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {t.degreesTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.degrees.map((edu) => (
              <div
                key={edu.id}
                className="flex flex-col justify-between rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400">
                      {edu.year}
                    </span>
                    <span className="text-[11px] text-slate-400 dark:text-slate-500">
                      {edu.location}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {edu.title}
                  </h4>

                  <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    {edu.institution}
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Highlights list */}
                  <div className="pt-2 space-y-1">
                    {edu.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-1.5 text-xs text-slate-600 dark:text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* If AWS Credly badge is present */}
                {edu.hasCredly && (
                  <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <a
                      href="https://www.credly.com/badges/9cf56a96-522a-40ee-aa59-aba1d829e52b"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <Award className="w-4 h-4 text-amber-500" />
                      <span>{t.verifyCredly}</span>
                      <ExternalLink className="w-3 h-3 ml-0.5" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* The Curiosity & Mindset Lab */}
        <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              {t.curiositiesTag}
            </span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
              {t.curiositiesTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              {t.curiositiesSubtitle}
            </p>
          </div>

          {/* Interactive Trilingual Pitch Switcher */}
          <div className="mb-10 p-5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div>
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                  {t.trilingualTag}
                </span>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  {t.trilingualTitle}
                </h4>
              </div>

              {/* Language Switch Buttons */}
              <div className="inline-flex p-1 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                {(['EN', 'IT', 'ES'] as const).map((code) => (
                  <button
                    key={code}
                    onClick={() => setSelectedLanguage(code)}
                    className={`px-3 py-1 text-xs font-bold rounded-md transition-all cursor-pointer ${
                      selectedLanguage === code
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                    }`}
                  >
                    {code === 'EN' ? '🇬🇧 English' : code === 'IT' ? '🇮🇹 Italiano' : '🇪🇸 Español'}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-2">
              <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                {languagePitches[selectedLanguage].lang}
              </div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                "{languagePitches[selectedLanguage].headline}"
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
                "{languagePitches[selectedLanguage].pitch}"
              </p>
            </div>
          </div>

          {/* Curiosity Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.curiosities.map((item, idx) => {
              const Icon = curiosityIcons[item.iconName] || Globe;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 space-y-2"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {item.title}
                      </h4>
                      <span className="text-[11px] text-blue-600 dark:text-blue-400">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                    {item.description}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pt-1 border-t border-slate-100 dark:border-slate-800/80">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">{t.contextLabel}</span>
                    {item.detail}
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
