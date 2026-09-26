import React, { useState } from 'react';
import { Language, translations } from '../data/translations';
import { CheckCircle2, ChevronRight, BarChart3, Database, Target, Users } from 'lucide-react';

interface ProfessionalCareerProps {
  lang: Language;
}

export const ProfessionalCareer: React.FC<ProfessionalCareerProps> = ({ lang }) => {
  const [activePlaybookTab, setActivePlaybookTab] = useState(0);
  const t = translations[lang].career;

  const stageIcons = [Target, Database, BarChart3, Users];

  return (
    <section id="career" className="py-16 md:py-24 border-t border-slate-200 dark:border-slate-800">
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

        {/* Interactive Playbook Engine */}
        <div className="mb-14 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
              <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                {t.playbookTag}
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                {t.playbookTitle}
              </h3>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm">
              {t.playbookSubtitle}
            </p>
          </div>

          {/* Tab Selector */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-6">
            {t.playbookStages.map((step, idx) => {
              const Icon = stageIcons[idx] || Target;
              const isActive = activePlaybookTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActivePlaybookTab(idx)}
                  className={`flex items-center gap-2.5 p-3 rounded-xl text-left transition-all cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-white dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700/60'
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-blue-600 dark:text-blue-400'}`} />
                  <div className="overflow-hidden">
                    <div className="text-xs font-semibold truncate">{step.title}</div>
                    <div className={`text-[10px] truncate ${isActive ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'}`}>
                      {step.role}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Tab Content */}
          <div className="mt-6 p-5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-8 space-y-2">
                <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 font-mono">
                  {t.stageLabel} {activePlaybookTab + 1} of 4
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  {t.playbookStages[activePlaybookTab].title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {t.playbookStages[activePlaybookTab].description}
                </p>
              </div>

              <div className="md:col-span-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 space-y-2">
                <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                  {t.deliverablesLabel}
                </div>
                <ul className="space-y-1.5">
                  {t.playbookStages[activePlaybookTab].deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Work Experience Timeline Cards */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
            {t.historyTitle}
          </h3>

          <div className="grid grid-cols-1 gap-6">
            {t.jobs.map((job) => (
              <div
                key={job.id}
                className="group relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all"
              >
                {/* Header row with role, company, period */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {job.role}
                    </h4>
                    <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2 mt-0.5">
                      <span>{job.company}</span>
                      <span aria-hidden="true" className="text-slate-400">·</span>
                      <span className="text-xs font-normal text-slate-500 dark:text-slate-400">{job.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                    <span className="font-mono">{job.period}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-blue-600 dark:text-blue-400">{job.type}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {job.summary}
                </p>

                {/* Achievements List */}
                <div className="mt-4 space-y-2">
                  <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    {t.deliverablesLabel}
                  </div>
                  <ul className="space-y-1.5">
                    {job.achievements.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills tags */}
                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-medium text-slate-400 dark:text-slate-500 mr-1">{t.skillsLabel}</span>
                  {job.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical & Commercial Skills Matrix */}
        <div className="mt-14 pt-8 border-t border-slate-200 dark:border-slate-800">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">
            {t.skillsMatrixTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.skillsCategories.map((group, gIdx) => (
              <div
                key={gIdx}
                className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800"
              >
                <div className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3">
                  {group.category}
                </div>
                <ul className="space-y-2">
                  {group.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                      <ChevronRight className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
