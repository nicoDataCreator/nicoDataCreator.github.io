import React, { useState } from 'react';
import { Language, translations } from '../data/translations';
import { Maximize2, Shield, CheckCircle2, Building2, TrendingUp, Layers, FileSpreadsheet } from 'lucide-react';

interface ActualidadSectionProps {
  lang: Language;
  onOpenLightbox: (imageUrl: string, title?: string, caption?: string) => void;
}

const getCandidateUrls = (filename: string): string[] => {
  const clean = filename.trim();
  const commaVer = clean.replace('.jpg', ',jpg');
  const dotVer = clean.replace(',jpg', '.jpg');
  return [
    `/assets/${clean}`,
    `/assets/${commaVer}`,
    `/assets/${dotVer}`,
    `/assets/${encodeURIComponent(clean)}`,
    `/assets/${encodeURIComponent(commaVer)}`,
    `/assets/${encodeURIComponent(dotVer)}`,
    `/${clean}`,
    `/${commaVer}`,
    `/${dotVer}`,
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
    <section id="actualidad" className="py-16 md:py-24 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Huboo Identity & Status */}
        <div className="max-w-4xl mb-12">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
              <Building2 className="w-3.5 h-3.5" />
              <span>{t.company} · {t.role}</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>{lang === 'es' ? 'Rol Actual' : 'Active Role'}</span>
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* The 2 Apps Grid */}
        <div className="space-y-12">
          {t.apps.map((app, index) => {
            const isOutbound = app.id === 'lista-outbound';
            const candidates = getCandidateUrls(app.filename);
            const currentCandidateIndex = candidateIndices[app.id] || 0;
            const currentCandidateUrl = candidates[currentCandidateIndex] || candidates[0];
            const activeImageUrl = loadedUrls[app.id] || currentCandidateUrl;
            const isError = imageErrors[app.id] === true;

            return (
              <div
                key={app.id}
                className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8">
                  {/* Left Column: Visual Mockup / Real Screenshot with Privacy Blur */}
                  <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
                    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pb-2 border-b border-slate-100 dark:border-slate-800">
                      <div className="flex items-center gap-2">
                        <FileSpreadsheet className="w-4 h-4 text-blue-500" />
                        <span className="font-mono font-semibold text-slate-800 dark:text-slate-200">
                          {app.filename}
                        </span>
                      </div>
                      <span className="text-[11px] flex items-center gap-1 text-slate-400">
                        <Shield className="w-3 h-3 text-emerald-500" />
                        <span>{t.privacyBadge}</span>
                      </span>
                    </div>

                    {/* Screenshot Container with Click to Lightbox & Blur */}
                    <div
                      onClick={() => onOpenLightbox(activeImageUrl, app.name, app.description)}
                      className="group relative cursor-pointer overflow-hidden rounded-xl bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-inner flex items-center justify-center min-h-[260px] sm:min-h-[300px]"
                    >
                      {/* Image tag with real file load attempt */}
                      {!isError ? (
                        <img
                          src={currentCandidateUrl}
                          alt={app.name}
                          onLoad={() => handleImageLoad(app.id, currentCandidateUrl)}
                          onError={() => handleImageError(app.id, app.filename)}
                          className="w-full h-auto max-h-[340px] object-cover transition-all duration-300 group-hover:scale-102 blur-[5px] select-none"
                        />
                      ) : (
                        /* High-Fidelity Blurred UI Simulation Fallback (shown until user uploads the file or if browser fails) */
                        <div
                          className="w-full h-full p-4 sm:p-5 bg-slate-900 text-slate-200 font-mono text-[11px] select-none transition-all duration-300 blur-[5px] opacity-85"
                        >
                          {/* Simulated Huboo Tool Bar */}
                          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs">
                            <div className="flex items-center gap-2">
                              <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                              <span className="font-bold text-white tracking-wide">
                                Huboo BDM Suite · {app.name}
                              </span>
                            </div>
                            <span className="text-emerald-400 text-[10px] bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                              LIVE PIPELINE
                            </span>
                          </div>

                          {/* Simulated Table Data */}
                          {isOutbound ? (
                            <div className="space-y-2">
                              <div className="grid grid-cols-4 gap-2 text-[10px] text-slate-400 pb-1 border-b border-slate-800 font-semibold">
                                <div>MERCHANT BRAND</div>
                                <div>EST. ORDERS/MO</div>
                                <div>TECH STACK</div>
                                <div>STATUS</div>
                              </div>
                              <div className="grid grid-cols-4 gap-2 py-1 border-b border-slate-800/60 text-slate-300">
                                <div>Nordic Apparel Co.</div>
                                <div className="text-emerald-400 font-semibold">8,450 / mo</div>
                                <div>Shopify Plus</div>
                                <div className="text-blue-400">Decision Maker Reached</div>
                              </div>
                              <div className="grid grid-cols-4 gap-2 py-1 border-b border-slate-800/60 text-slate-300">
                                <div>VitaCare Health SL</div>
                                <div className="text-emerald-400 font-semibold">14,200 / mo</div>
                                <div>WooCommerce</div>
                                <div className="text-amber-400">Discovery Completed</div>
                              </div>
                              <div className="grid grid-cols-4 gap-2 py-1 border-b border-slate-800/60 text-slate-300">
                                <div>Solana Tech Gadgets</div>
                                <div className="text-emerald-400 font-semibold">5,100 / mo</div>
                                <div>Magento 2</div>
                                <div className="text-purple-400">Demo Scheduled</div>
                              </div>
                              <div className="grid grid-cols-4 gap-2 py-1 text-slate-300">
                                <div>Iberian Gourmet Goods</div>
                                <div className="text-emerald-400 font-semibold">18,900 / mo</div>
                                <div>Custom API</div>
                                <div className="text-emerald-400">Quote In Review</div>
                              </div>
                            </div>
                          ) : (
                            <div className="space-y-2">
                              <div className="grid grid-cols-4 gap-2 text-[10px] text-slate-400 pb-1 border-b border-slate-800 font-semibold">
                                <div>PROPOSAL # / CLIENT</div>
                                <div>FULFILLMENT PLAN</div>
                                <div>MARGIN %</div>
                                <div>ACTION STATUS</div>
                              </div>
                              <div className="grid grid-cols-4 gap-2 py-1 border-b border-slate-800/60 text-slate-300">
                                <div>PR-2024-089 · Brand A</div>
                                <div>Multi-Hub EU (ES/DE)</div>
                                <div className="text-emerald-400 font-bold">28.4%</div>
                                <div className="text-emerald-400">Sent · Awaiting Signature</div>
                              </div>
                              <div className="grid grid-cols-4 gap-2 py-1 border-b border-slate-800/60 text-slate-300">
                                <div>PR-2024-094 · Brand B</div>
                                <div>UK Mainland Standard</div>
                                <div className="text-emerald-400 font-bold">31.2%</div>
                                <div className="text-blue-400">Tariff Reviewing</div>
                              </div>
                              <div className="grid grid-cols-4 gap-2 py-1 border-b border-slate-800/60 text-slate-300">
                                <div>PR-2024-102 · Brand C</div>
                                <div>Cross-Border Parcels</div>
                                <div className="text-emerald-400 font-bold">26.8%</div>
                                <div className="text-amber-400">Negotiating Volume Tier</div>
                              </div>
                              <div className="grid grid-cols-4 gap-2 py-1 text-slate-300">
                                <div>PR-2024-115 · Brand D</div>
                                <div>Pallet Ingestion + Pick</div>
                                <div className="text-emerald-400 font-bold">29.5%</div>
                                <div className="text-purple-400">Contract Ready</div>
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Watermark / Privacy Badge Overlay */}
                      <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center p-4">
                        <div className="px-3 py-1.5 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 text-white text-[11px] font-semibold flex items-center gap-2 shadow-lg">
                          <Shield className="w-3.5 h-3.5 text-emerald-400" />
                          <span>{t.privacyNotice}</span>
                        </div>
                      </div>

                      {/* Hover Expand Trigger */}
                      <div className="absolute top-3 right-3 p-2 rounded-lg bg-black/70 text-white backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                      <span>{t.clickToExpand}</span>
                      <span className="font-mono text-blue-600 dark:text-blue-400">
                        {isError ? (lang === 'es' ? 'Vista previa simulada (archivo pendiente de subir)' : 'Simulated preview (pending upload)') : (lang === 'es' ? 'Captura real detectada' : 'Real screenshot detected')}
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Problem, Capabilities & Measurable Impact */}
                  <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                    <div>
                      {/* Tags */}
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300">
                          {app.badge}
                        </span>
                        <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                          {app.tag}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {app.name}
                      </h3>

                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {app.description}
                      </p>
                    </div>

                    {/* Problem Solved */}
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800">
                      <div className="text-xs font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                        <span>{lang === 'es' ? 'Fricción Operativa Resuelta' : 'Operational Bottleneck Resolved'}</span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {app.problemSolved}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-2">
                      <div className="text-xs font-bold text-slate-900 dark:text-white">
                        {lang === 'es' ? 'Funcionalidades Diseñadas para Huboo:' : 'Custom Built Capabilities:'}
                      </div>
                      <ul className="space-y-1.5">
                        {app.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Measurable Impact */}
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                      <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-2 flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>{lang === 'es' ? 'Impacto Comercial Cuantificable:' : 'Measurable Commercial Impact:'}</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {app.impact.map((imp, impIdx) => (
                          <div
                            key={impIdx}
                            className="p-2.5 rounded-lg bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-900/40 text-xs font-medium text-emerald-900 dark:text-emerald-200 leading-snug"
                          >
                            {imp}
                          </div>
                        ))}
                      </div>
                    </div>
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
