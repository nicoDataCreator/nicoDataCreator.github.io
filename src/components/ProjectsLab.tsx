import React, { useState } from 'react';
import { Language, translations } from '../data/translations';
import { Layers, Sparkles, Check, Maximize2, Compass } from 'lucide-react';

interface ProjectsLabProps {
  lang: Language;
  onOpenLightbox: (imageUrl: string, title?: string, caption?: string) => void;
}

export const ProjectsLab: React.FC<ProjectsLabProps> = ({ lang, onOpenLightbox }) => {
  const t = translations[lang].projects;
  const [selectedProjectId, setSelectedProjectId] = useState<string>(t.items[0].id);

  // 1. Wayness calculator state
  const [habitFriction, setHabitFriction] = useState<number>(3); // 1-5 scale
  const [habitFrequency, setHabitFrequency] = useState<number>(4); // days/week
  const calculatedPoints = Math.round((habitFriction * 25) * (habitFrequency * 1.2));

  // 2. Chatbot intent tester state
  const [detectedIntent, setDetectedIntent] = useState<{ intent: string; confidence: string; reply: string }>(() => {
    return lang === 'es'
      ? {
          intent: "sales.pricing_inquiry",
          confidence: "98.4%",
          reply: "Nuestros planes enterprise incluyen pipelines ETL personalizados, integración CRM y descuentos por volumen. ¿Deseas agendar una demo ejecutiva con Nicolás?"
        }
      : {
          intent: "sales.pricing_inquiry",
          confidence: "98.4%",
          reply: "Our enterprise tiers include dedicated ETL pipelines, custom CRM integrations, and volume discounts. Would you like to schedule an executive demo?"
        };
  });

  const handleTestChatbot = (presetIdx: number) => {
    if (lang === 'es') {
      if (presetIdx === 0) {
        setDetectedIntent({
          intent: "sales.pricing_inquiry",
          confidence: "98.4%",
          reply: "Nuestros planes enterprise incluyen pipelines ETL personalizados, integración CRM y descuentos por volumen. ¿Deseas agendar una demo ejecutiva con Nicolás?"
        });
      } else if (presetIdx === 1) {
        setDetectedIntent({
          intent: "sales.schedule_meeting",
          confidence: "99.1%",
          reply: "Te conecto directamente con Nicolás Coronel. Trabaja en zona horaria CET (Madrid) con disponibilidad inmediata para entrevistas BDR/AE."
        });
      } else {
        setDetectedIntent({
          intent: "tech.architecture_query",
          confidence: "96.7%",
          reply: "El stack se apoya en Python, Streamlit, base de datos relacional PostgreSQL e infraestructura certificada en AWS Cloud Quest."
        });
      }
    } else {
      if (presetIdx === 0) {
        setDetectedIntent({
          intent: "sales.pricing_inquiry",
          confidence: "98.4%",
          reply: "Our enterprise tiers include dedicated ETL pipelines, custom CRM integrations, and volume discounts. Would you like to schedule an executive demo?"
        });
      } else if (presetIdx === 1) {
        setDetectedIntent({
          intent: "sales.schedule_meeting",
          confidence: "99.1%",
          reply: "I can connect you directly with Nicolas Coronel. He operates in Madrid (CET) with open availability for BDR/AE intro calls."
        });
      } else {
        setDetectedIntent({
          intent: "tech.architecture_query",
          confidence: "96.7%",
          reply: "Stack runs on Python, Streamlit, PostgreSQL database schemas, and AWS Cloud Quest certified infrastructure."
        });
      }
    }
  };

  // 3. Battleship simulator state
  const [battleshipResult, setBattleshipResult] = useState<string | null>(null);

  const handleFireTorpedo = (coord: string) => {
    const hitCoords = ['B3', 'B4', 'D6', 'E6', 'F6'];
    if (hitCoords.includes(coord)) {
      setBattleshipResult(`${t.battleshipSim.hitMessage} [${coord}]! [✓]`);
    } else {
      setBattleshipResult(`${t.battleshipSim.missMessage} [${coord}]. [~]`);
    }
  };

  const currentProject = t.items.find((p) => p.id === selectedProjectId) || t.items[0];

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-slate-200 dark:border-slate-800">
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

        {/* Project Selector Segmented Control */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {t.items.map((proj) => {
            const isSelected = proj.id === selectedProjectId;
            return (
              <button
                key={proj.id}
                onClick={() => setSelectedProjectId(proj.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
                }`}
              >
                {proj.tabLabel}
              </button>
            );
          })}
        </div>

        {/* Main Project Card */}
        <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Details, Problem & Solution */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-medium text-blue-600 dark:text-blue-400 mb-1">
                  <span>{currentProject.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{t.interactiveProof}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {currentProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                  {currentProject.subtitle}
                </p>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {currentProject.description}
              </p>

              {/* Problem / Solution Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800">
                  <div className="text-xs font-bold text-slate-900 dark:text-white mb-1">
                    {t.problemTitle}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {currentProject.problem}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800">
                  <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                    {t.solutionTitle}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {currentProject.solution}
                  </p>
                </div>
              </div>

              {/* Architecture & Engineering Highlights */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>{t.architectureTitle}</span>
                </div>
                <ul className="space-y-1.5">
                  {currentProject.architecture.map((item, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      <Check className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2">
                <span className="text-xs font-medium text-slate-400 dark:text-slate-500 mr-1">{t.stackLabel}</span>
                {currentProject.stack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Visual Previews & Interactive Lab */}
            <div className="lg:col-span-5 space-y-6">
              {/* Project Image Gallery Preview */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">{t.screenshotsTitle}</span>
                  <span>{t.clickToZoom}</span>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {currentProject.images.map((img, iIdx) => (
                    <div
                      key={iIdx}
                      onClick={() => onOpenLightbox(img.url, currentProject.title, img.caption)}
                      className="group relative cursor-pointer overflow-hidden rounded-xl bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-blue-500 transition-all"
                    >
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={img.url}
                          alt={img.caption}
                          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                        />
                        <div className="absolute top-2 right-2 p-1.5 rounded-md bg-black/60 text-white backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity">
                          <Maximize2 className="w-3.5 h-3.5" />
                        </div>
                      </div>
                      <div className="p-2.5 bg-slate-900 text-[11px] text-slate-300 border-t border-slate-800 truncate">
                        {img.caption}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Working Lab Box */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span className="text-xs font-bold text-slate-900 dark:text-white">
                      {t.playgroundTitle}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">{t.playgroundBadge}</span>
                </div>

                {/* Simulation 1: Wayness points calculator */}
                {currentProject.id === 'wayness' && (
                  <div className="space-y-3">
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {t.waynessCalc.instruction}
                    </p>
                    <div>
                      <div className="flex justify-between text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                        <span>{t.waynessCalc.frictionLabel}</span>
                        <span className="font-mono font-bold text-blue-600">{habitFriction}/5</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="5"
                        value={habitFriction}
                        onChange={(e) => setHabitFriction(Number(e.target.value))}
                        className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-600"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                        <span>{t.waynessCalc.frequencyLabel}</span>
                        <span className="font-mono font-bold text-blue-600">{habitFrequency} {t.waynessCalc.daysUnit}</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="7"
                        value={habitFrequency}
                        onChange={(e) => setHabitFrequency(Number(e.target.value))}
                        className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-600"
                      />
                    </div>

                    <div className="mt-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900 flex items-center justify-between">
                      <div>
                        <div className="text-[10px] text-blue-600 dark:text-blue-400 font-semibold uppercase">
                          {t.waynessCalc.resultTitle}
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-300">
                          {t.waynessCalc.resultSubtitle}
                        </div>
                      </div>
                      <div className="text-xl font-mono font-extrabold text-blue-600 dark:text-blue-400">
                        {calculatedPoints} pts
                      </div>
                    </div>
                  </div>
                )}

                {/* Simulation 2: Chatbot Intent Classifier */}
                {currentProject.id === 'chatbot' && (
                  <div className="space-y-3">
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {t.chatbotSim.instruction}
                    </p>
                    <div className="flex gap-1 flex-wrap">
                      {t.chatbotSim.presets.map((presetText, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleTestChatbot(idx)}
                          className="px-2 py-1 text-[10px] rounded-md bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                        >
                          {presetText}
                        </button>
                      ))}
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-950 font-mono text-[11px] text-slate-300 space-y-1 border border-slate-800">
                      <div className="text-emerald-400">
                        {'>'} intent: <span className="text-white">{detectedIntent.intent}</span> ({detectedIntent.confidence})
                      </div>
                      <div className="text-slate-400">
                        {'>'} bot_response: <span className="text-slate-200">"{detectedIntent.reply}"</span>
                      </div>
                      <div className="text-xs text-blue-400 pt-1">
                        {t.chatbotSim.loggedBanner}
                      </div>
                    </div>
                  </div>
                )}

                {/* Simulation 3: Financial & Crypto EDA */}
                {currentProject.id === 'data-viz' && (
                  <div className="space-y-2">
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {t.edaSim.instruction}
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-center">
                      <div className="p-2 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                        <div className="text-[10px] text-slate-400 uppercase">{t.edaSim.stat1Title}</div>
                        <div className="text-sm font-mono font-bold text-amber-500">4.18%</div>
                      </div>
                      <div className="p-2 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                        <div className="text-[10px] text-slate-400 uppercase">{t.edaSim.stat2Title}</div>
                        <div className="text-sm font-mono font-bold text-emerald-500">142ms</div>
                      </div>
                    </div>
                    <div className="text-[11px] text-slate-500 text-center pt-1">
                      {t.edaSim.note}
                    </div>
                  </div>
                )}

                {/* Simulation 4: Map Visualization */}
                {currentProject.id === 'map-viz' && (
                  <div className="space-y-2">
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {t.mapSim.instruction}
                    </p>
                    <div className="p-2.5 rounded-lg bg-slate-950 font-mono text-[11px] text-slate-300 space-y-1">
                      <div className="text-blue-400 flex items-center gap-1">
                        <Compass className="w-3.5 h-3.5" />
                        <span>{t.mapSim.coords}</span>
                      </div>
                      <div className="text-emerald-400">
                        {t.mapSim.stats}
                      </div>
                    </div>
                  </div>
                )}

                {/* Simulation 5: Battleship Console */}
                {currentProject.id === 'battleship' && (
                  <div className="space-y-2">
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {t.battleshipSim.instruction}
                    </p>
                    <div className="grid grid-cols-5 gap-1.5 py-1">
                      {['A1', 'B3', 'B4', 'C2', 'D6'].map((coord) => (
                        <button
                          key={coord}
                          onClick={() => handleFireTorpedo(coord)}
                          className="py-1 px-2 text-xs font-mono font-semibold rounded bg-slate-200 dark:bg-slate-800 hover:bg-blue-600 hover:text-white transition-colors cursor-pointer"
                        >
                          {coord}
                        </button>
                      ))}
                    </div>
                    {battleshipResult && (
                      <div className="p-2 rounded bg-slate-950 text-xs font-mono text-emerald-400 border border-slate-800">
                        {'>'} {battleshipResult}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
