import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <div className="text-sm font-bold text-slate-900 dark:text-white">
            Nicolas Coronel
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            BDR & Account Executive · Software, Data & High-Performance Athletic Mindset
          </div>
        </div>

        <div className="flex items-center gap-6 text-xs text-slate-500 dark:text-slate-400">
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Email
          </a>
          <a
            href={`tel:${PERSONAL_INFO.phone}`}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Phone
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex items-center gap-1.5 p-2 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span className="text-[11px] font-semibold">Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
