import React, { useState } from 'react';
import { Language, translations } from '../data/translations';
import { Maximize2, CheckCircle2, Building2, AlertTriangle, ArrowUpRight } from 'lucide-react';

interface ActualidadSectionProps {
  lang: Language;
  onOpenLightbox: (imageUrl: string, title?: string, caption?: string) => void;
}

const getCandidateUrls = (filename: string): string[] => {
  const clean = filename.trim();
  const commaVer = clean.replace('.jpg', ',jpg');
  return [
    `/${clean}`,
    `/assets/${clean}`,
    `/${encodeURIComponent(clean)}`,
    `/assets/${encodeURIComponent(clean)}`,
    `/${commaVer}`,
    `/assets/${commaVer}`,
  ];
};

export const ActualidadSection: React.FC<ActualidadSectionProps> = ({
  lang,
  onOpenLightbox,
}) => {
  const t = translations[lang].actualidad;
  const [candidateIndices, setCandidateIndices] = useState<Record<string, number>>({});
  const [loadedUrls, setLoadedUrls] = useState<Record<string, string>>({});
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (appId: string, filename: string) => {
    const candidates = getCandidateUrls(filename);
    const currentIndex = candidateIndices[appId] || 0;
    if (currentIndex < candidates.length - 1) {
      setCandidateIndices((prev) => ({ ...prev, [appId]: currentIndex + 1 }));
    } else {
      setImageErrors((prev) => ({ ...prev, [appId]: true }));
    }
  };

  const handleImageLoad = (appId: string, url: string) => {
    setLoadedUrls((prev) => ({ ...prev, [appId]: url }));
    setImageErrors((prev) => ({ ...prev, [appId]: false }));
  };

  return (
    <section id="actualidad" className="py-16 md:py-24 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Huboo Identity & Status */}
        <div className="max-w-3xl mb-12">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="font-mono text-[11px] font-bold uppercase text-blue-600 dark:text-blue-400 tracking-wider">
              {lang === 'es' ? 'Ingeniería Comercial Interna' : 'Internal Sales Engineering'}
            </span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-mono text-[10px] font-bold uppercase tracking-wide border border-emerald-200 dark:border-emerald-800">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block mr-1"></span>
              {lang === 'es' ? 'Herramientas Activas en Producción' : 'Active Production Tools'}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Huboo Technologies · {lang === 'es' ? 'Software Comercial Propio' : 'Internal Sales Software'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* The 2 Apps Stack */}
        <div className="space-y-12">
          {t.apps.map((app, index) => {
            const isOutbound = app.id === 'lista-outbound';
            const candidates = getCandidateUrls(app.filename);
            const currentCandidateIndex = candidateIndices[app.id] || 0;
            const currentCandidateUrl = candidates[currentCandidateIndex] || candidates[0];
            const activeImageUrl = loadedUrls[app.id] || currentCandidateUrl;
            const isError = imageErrors[app.id] === true;

            const scriptFilename = isOutbound
              ? 'lista_outbound.py — Lead Intelligence App'
              : 'lista_propuestas.py — Commercial Engine';

            const impactMetrics = isOutbound
              ? [
                  { num: '3x Increase', label: lang === 'es' ? 'Contactos Cualificados/Semana' : 'Weekly Qualified Touches', color: 'emerald' },
                  { num: 'Zero Friction', label: lang === 'es' ? 'Reingreso Manual de Datos' : 'Manual Data Re-Entry', color: 'blue' },
                  { num: '+42% CVR', label: lang === 'es' ? 'Ganchos de Valor a Medida' : 'Targeted Buyer Hooks', color: 'cyan' },
                ]
              : [
                  { num: '<15 Mins', label: lang === 'es' ? 'Tiempo de Entrega (vs 48h)' : 'Turnaround (Down from 48h)', color: 'emerald' },
                  { num: '100% Margin', label: lang === 'es' ? 'Precisión de Tarifas' : 'Margin Guardrails', color: 'blue' },
                  { num: '+28% Closed', label: lang === 'es' ? 'Respuestas Rápidas' : 'Instant Pricing Win-Rate', color: 'cyan' },
                ];

            return (
              <div
                key={app.id}
                className={`p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } gap-8 items-center`}
              >
                {/* Visual Window Mockup Frame */}
                <div className="w-full lg:w-1/2 flex flex-col rounded-xl overflow-hidden bg-slate-950 border border-slate-200/80 dark:border-slate-800 shadow-md">
                  {/* Window Bar */}
                  <div className="h-8 bg-slate-100 dark:bg-slate-800/90 px-3 flex items-center justify-between border-b border-slate-200 dark:border-slate-700/80">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                    </div>
                    <span className="font-mono text-[11px] text-slate-600 dark:text-slate-400 font-medium truncate px-2">
                      {scriptFilename}
                    </span>
                    <span className="w-4"></span>
                  </div>

                  {/* Screenshot Image Container with Zoom support */}
                  <div
                    onClick={() => onOpenLightbox(activeImageUrl, app.name, app.description)}
                    className="group relative cursor-pointer overflow-hidden bg-slate-900 flex items-center justify-center min-h-[240px] sm:min-h-[290px]"
                  >
                    {!isError ? (
                      <img
                        src={currentCandidateUrl}
                        alt={app.name}
                        onLoad={() => handleImageLoad(app.id, currentCandidateUrl)}
                        onError={() => handleImageError(app.id, app.filename)}
                        className="w-full h-auto max-h-[360px] object-contain transition-transform duration-300 group-hover:scale-102 select-none"
                      />
                    ) : (
                      <div className="p-6 text-slate-400 text-xs font-mono text-center">
                        <div>[{app.name} Preview Mockup]</div>
                        <div className="text-[10px] text-slate-500 mt-1">{app.filename}</div>
                      </div>
                    )}

                    {/* Hover Prompt */}
                    <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/30 transition-colors flex items-center justify-center">
                      <div className="px-3 py-1.5 rounded-lg bg-slate-950/85 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg border border-white/10">
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>{lang === 'es' ? 'Haz clic para ampliar' : 'Click to zoom'}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content & Breakdown */}
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                  <div>
                    <span className="font-mono text-[11px] font-bold uppercase text-blue-600 dark:text-blue-400 tracking-wider">
                      {app.tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
                      {app.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                      {app.description}
                    </p>
                  </div>

                  {/* Bottleneck Resolved Box */}
                  <div className="p-3.5 rounded-xl bg-red-50/80 dark:bg-red-950/30 border border-red-200/80 dark:border-red-900/60 flex flex-col gap-1">
                    <span className="font-mono text-[10px] uppercase font-bold text-red-700 dark:text-red-400 flex items-center gap-1 tracking-wider">
                      <AlertTriangle className="w-3.5 h-3.5 text-red-600 dark:text-red-400 shrink-0" />
                      {lang === 'es' ? 'Cuello de Botella Operativo Resuelto' : 'Operational Bottleneck Resolved'}
                    </span>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      {app.problemSolved}
                    </p>
                  </div>

                  {/* Capabilities List */}
                  <div className="space-y-1.5">
                    <span className="font-mono text-[10px] font-bold uppercase text-slate-400 dark:text-slate-500 tracking-wider">
                      {lang === 'es' ? 'Capacidades Desarrolladas:' : 'Custom-Built Capabilities:'}
                    </span>
                    <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
                      {app.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 3 Measurable Impact Badges */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
                    {impactMetrics.map((met, mIdx) => (
                      <div
                        key={mIdx}
                        className={`p-2.5 rounded-lg border flex flex-col ${
                          met.color === 'emerald'
                            ? 'bg-emerald-50/70 dark:bg-emerald-950/40 border-emerald-200/80 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300'
                            : met.color === 'blue'
                            ? 'bg-blue-50/70 dark:bg-blue-950/40 border-blue-200/80 dark:border-blue-800 text-blue-800 dark:text-blue-300'
                            : 'bg-cyan-50/70 dark:bg-cyan-950/40 border-cyan-200/80 dark:border-cyan-800 text-cyan-800 dark:text-cyan-300'
                        }`}
                      >
                        <span className="font-extrabold text-xs sm:text-sm font-mono tracking-tight">{met.num}</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider mt-0.5 leading-tight opacity-90">
                          {met.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
