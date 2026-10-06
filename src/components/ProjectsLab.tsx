import React, { useState } from 'react';
import { Language } from '../data/translations';
import { Terminal, Lightbulb, AlertCircle, Maximize2, Sparkles, Play } from 'lucide-react';

interface ProjectsLabProps {
  lang: Language;
  onOpenLightbox: (imageUrl: string, title?: string, caption?: string) => void;
}

export const ProjectsLab: React.FC<ProjectsLabProps> = ({ lang, onOpenLightbox }) => {
  const isEs = lang === 'es';

  // Interactive points calculator
  const [dutyIntensity, setDutyIntensity] = useState<number>(3); // 1-5 scale
  const [habitFrequency, setHabitFrequency] = useState<number>(4); // days/week
  const calculatedPoints = Math.round(dutyIntensity * 30 * (habitFrequency * 1.25));

  // Chatbot intent tester state
  const [testedQuery, setTestedQuery] = useState<number>(0);
  const sampleQueries = isEs
    ? [
        {
          label: 'Pregunta de Tarifas y Cuota',
          input: '¿Qué pricing tienen para integración paneuropea con 800 pedidos/mes?',
          intent: 'sales.pricing_inquiry',
          confidence: '98.6%',
          response:
            'Nuestros planes enterprise cubren almacenes en UK y UE con tarifas dinámicas de picking y almacenamiento. ¿Deseas agendar una demo ejecutiva con Nicolás?',
        },
        {
          label: 'Disponibilidad y Entrevista',
          input: 'Tenemos una vacante para BDM en Madrid. ¿Está Nicolás disponible?',
          intent: 'recruiting.schedule_interview',
          confidence: '99.4%',
          response:
            'Nicolás está disponible para roles BDM y AE en Madrid o remoto. Puedes contactarlo directamente a nico.coronel@protonmail.com o al +34 621 053 129.',
        },
      ]
    : [
        {
          label: 'Pricing & Tariffs Query',
          input: 'What are your enterprise rates for 800 orders/month across EU fulfillment?',
          intent: 'sales.pricing_inquiry',
          confidence: '98.6%',
          response:
            'Our enterprise plans model custom pick & pack, carrier tariffs, and multi-hub storage. Would you like to schedule an executive demo with Nicolás?',
        },
        {
          label: 'Availability & Interview',
          input: 'We have an open BDM / AE role in Madrid. Is Nicolás currently available?',
          intent: 'recruiting.schedule_interview',
          confidence: '99.4%',
          response:
            'Nicolás is actively open to BDM & AE positions in Madrid or remote. Reach him directly at nico.coronel@protonmail.com or +34 621 053 129.',
        },
      ];

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="font-mono text-[11px] font-bold uppercase text-blue-600 dark:text-blue-400 tracking-wider">
            {isEs ? 'Ingeniería & Sistemas Interactivos' : 'Engineering & Systems'}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
            {isEs ? 'Ciencia de Datos, Machine Learning y Sistemas Aplicados' : 'Data Science, Machine Learning & Interactive Systems'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {isEs
              ? 'Aplicaciones prácticas desarrolladas con Python, SQL, Streamlit y PostgreSQL. Demuestran cómo la fluidez técnica elimina la barrera entre la ingeniería de software y las ventas comerciales.'
              : 'Practical applications built with Python, SQL, Streamlit, and PostgreSQL. Demonstrating how technical literacy bridges the gap between software engineering and commercial sales.'}
          </p>
        </div>

        {/* Wayness Startup Presentation Card (Stitch style) */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  {isEs ? 'Startup Propia' : 'Self-Founded Startup'}
                </span>
                <span className="px-2 py-0.5 rounded text-[11px] font-mono uppercase bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                  Streamlit Pilot
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-1.5">
                Wayness Start-up: Balancing Duty &amp; Pleasure
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                {isEs
                  ? 'Motor de recompensas y gamificación de hábitos saludables con Machine Learning'
                  : 'Health-Habit Rewards Engine with Machine Learning'}
              </p>
            </div>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {isEs
              ? 'Plataforma desarrollada para motivar rutinas de bienestar a largo plazo, equilibrando obligaciones diarias (deber) con recompensas de ocio ganado (placer) mediante un algoritmo de puntuación dinámica.'
              : 'A proprietary startup platform designed to motivate long-term wellness routines by balancing daily duties with earned leisure rewards through algorithmic point scoring.'}
          </p>

          {/* Screenshots Grid (Stitch style) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* UI Screenshot 1 */}
            <div
              onClick={() =>
                onOpenLightbox(
                  '/assets/waynessWeb.jpg',
                  'Wayness Web UI',
                  isEs ? 'Interfaz de usuario y onboarding en Wayness' : 'Wayness user interface & value proposition'
                )
              }
              className="group cursor-pointer rounded-xl overflow-hidden bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-inner flex flex-col"
            >
              <div className="h-7 bg-slate-100 dark:bg-slate-800 px-3 flex items-center justify-between border-b border-slate-200 dark:border-slate-700">
                <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400">
                  Web UI: Wayness User Interface &amp; Onboarding
                </span>
                <Maximize2 className="w-3.5 h-3.5 text-slate-400" />
              </div>
              <div className="relative aspect-4/3 bg-slate-900 flex items-center justify-center overflow-hidden">
                <img
                  src="/assets/waynessWeb.jpg"
                  alt="Wayness UI"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300 select-none"
                />
              </div>
            </div>

            {/* UI Screenshot 2 */}
            <div
              onClick={() =>
                onOpenLightbox(
                  '/assets/puntosWayness.jpg',
                  'Wayness Algorithm Engine',
                  isEs ? 'Puntuación dinámica y distribución de hábitos en Wayness' : 'Duty vs Pleasure Dynamic Scoring'
                )
              }
              className="group cursor-pointer rounded-xl overflow-hidden bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-inner flex flex-col"
            >
              <div className="h-7 bg-slate-100 dark:bg-slate-800 px-3 flex items-center justify-between border-b border-slate-200 dark:border-slate-700">
                <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400">
                  Algorithm Engine: Duty vs Pleasure Dynamic Scoring
                </span>
                <Maximize2 className="w-3.5 h-3.5 text-slate-400" />
              </div>
              <div className="relative aspect-4/3 bg-slate-900 flex items-center justify-center overflow-hidden">
                <img
                  src="/assets/puntosWayness.jpg"
                  alt="Wayness Scoring"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300 select-none"
                />
              </div>
            </div>
          </div>

          {/* Problem / Solution / Architecture Bento (Stitch style) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* The Business Problem */}
            <div className="p-4 rounded-xl bg-red-50/70 dark:bg-red-950/30 border border-red-200/80 dark:border-red-900/60 flex flex-col gap-1.5">
              <span className="font-mono text-[11px] uppercase font-bold text-red-700 dark:text-red-400 flex items-center gap-1.5 tracking-wider">
                <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0" />
                {isEs ? 'El Problema de Negocio' : 'The Business Problem'}
              </span>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                {isEs
                  ? 'Las apps tradicionales de hábitos sufren un alto abandono debido a programas estáticos de recompensa desconectados de la fatiga cognitiva y la dificultad real de cada tarea.'
                  : 'Habit-tracking apps suffer from high drop-off because reward schedules are static and disconnected from individual cognitive fatigue and activities complexity.'}
              </p>
            </div>

            {/* The Technical Solution */}
            <div className="p-4 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-900/60 flex flex-col gap-1.5">
              <span className="font-mono text-[11px] uppercase font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5 tracking-wider">
                <Lightbulb className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                {isEs ? 'La Solución Técnica' : 'The Technical Solution'}
              </span>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                {isEs
                  ? 'Plataforma de gamificación con modelos de Machine Learning que calcula ratios dinámicos de dificultad-recompensa para sostener la adherencia a largo plazo.'
                  : 'Gamification platform paired with machine learning engine that calculates dynamic difficulty-reward ratios and predicts caloric burn to sustain customer engagement.'}
              </p>
            </div>

            {/* Engineering Architecture */}
            <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-900/60 flex flex-col gap-1.5">
              <span className="font-mono text-[11px] uppercase font-bold text-blue-700 dark:text-blue-400 flex items-center gap-1.5 tracking-wider">
                <Terminal className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                {isEs ? 'Arquitectura de Ingeniería' : 'Engineering Architecture'}
              </span>
              <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
                <li>• Scikit-learn regression &amp; classification models</li>
                <li>• Dynamic points distribution algorithm</li>
                <li>• Interactive Streamlit web application</li>
                <li>• PostgreSQL persistence layer for user progress</li>
              </ul>
            </div>
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
            {['Python', 'Streamlit', 'Scikit-Learn', 'Pandas', 'PostgreSQL', 'Docker'].map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-800"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Interactive Lab Playground (Point Simulator & Intent Tester) */}
          <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 space-y-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono">
                {isEs ? 'Simulador Interactivo de Algoritmos' : 'Interactive Algorithm Playground'}
              </h4>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Simulator 1: Dynamic Points Formula */}
              <div className="space-y-3">
                <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  {isEs ? 'Calculadora de Puntos Wayness (Dificultad vs Frecuencia)' : 'Wayness Scoring Simulator'}
                </div>
                <div className="space-y-2 text-xs">
                  <div>
                    <div className="flex justify-between text-slate-500 mb-1">
                      <span>{isEs ? 'Intensidad / Fricción del Hábito' : 'Habit Friction'}</span>
                      <span className="font-mono font-bold text-slate-900 dark:text-white">{dutyIntensity}/5</span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={5}
                      value={dutyIntensity}
                      onChange={(e) => setDutyIntensity(Number(e.target.value))}
                      className="w-full accent-blue-600"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-slate-500 mb-1">
                      <span>{isEs ? 'Frecuencia Semanal' : 'Weekly Frequency'}</span>
                      <span className="font-mono font-bold text-slate-900 dark:text-white">{habitFrequency} {isEs ? 'días' : 'days'}</span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={7}
                      value={habitFrequency}
                      onChange={(e) => setHabitFrequency(Number(e.target.value))}
                      className="w-full accent-blue-600"
                    />
                  </div>

                  <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                      {isEs ? 'Puntos de Ocio Generados:' : 'Generated Leisure Points:'}
                    </span>
                    <span className="text-base font-extrabold font-mono text-emerald-600 dark:text-emerald-400">
                      +{calculatedPoints} pts
                    </span>
                  </div>
                </div>
              </div>

              {/* Simulator 2: Commercial Intent Parser */}
              <div className="space-y-3">
                <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  {isEs ? 'Clasificador de Intenciones Comerciales (NLP)' : 'Commercial NLP Intent Parser'}
                </div>
                <div className="flex gap-2">
                  {sampleQueries.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => setTestedQuery(idx)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        testedQuery === idx
                          ? 'bg-blue-600 text-white shadow-2xs'
                          : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100'
                      }`}
                    >
                      {q.label}
                    </button>
                  ))}
                </div>

                <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
                  <div className="text-slate-500 font-mono text-[11px]">
                    &gt; &quot;{sampleQueries[testedQuery].input}&quot;
                  </div>
                  <div className="flex items-center gap-2 font-mono text-[10px]">
                    <span className="px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold">
                      {sampleQueries[testedQuery].intent}
                    </span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                      Conf: {sampleQueries[testedQuery].confidence}
                    </span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 italic pt-1 border-t border-slate-100 dark:border-slate-800">
                    &quot;{sampleQueries[testedQuery].response}&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
