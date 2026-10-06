import React from 'react';
import { Language } from '../data/translations';
import { Shield, Timer, Users, Brain, Maximize2 } from 'lucide-react';

interface SportsCareerProps {
  lang: Language;
  onOpenLightbox: (imageUrl: string, title?: string, caption?: string) => void;
}

export const SportsCareer: React.FC<SportsCareerProps> = ({ lang, onOpenLightbox }) => {
  const isEs = lang === 'es';

  const photos = [
    {
      url: '/assets/Nico vs NZ.png',
      title: isEs ? 'Enfrentamiento Internacional de Seven vs All Blacks' : 'International Sevens Clash vs. New Zealand All Blacks',
      desc: isEs
        ? 'Competencia internacional de máxima presión exigiendo adaptación táctica instantánea, velocidad extrema bajo fatiga y entrega física total.'
        : 'High-pressure international competition demanding immediate tactical adaptation, extreme speed under duress, and physical commitment.',
    },
    {
      url: '/assets/SEVEN-volando-transformed.png',
      title: isEs ? 'Duelo Aéreo por Balón Dividido en Circuito de Seven' : 'Airborne High-Ball Contest in Sevens Circuit',
      desc: isEs
        ? 'Compromiso físico total en la disputa de balones aéreos 50/50. Agresividad controlada unida a una toma de decisiones calculada en fracciones de segundo.'
        : 'Full aerial commitment facing critical 50/50 aerial possession duels. Relentless physical grit paired with calculated split-second decision-making.',
    },
  ];

  const operatingPrinciples = [
    {
      icon: Shield,
      title: isEs ? 'Resiliencia e Inmunidad al Rechazo' : 'Grit & Rejection Immunity',
      desc: isEs
        ? 'Tanto en el rugby de élite como en ventas B2B, los reveses ocurren continuamente. La diferencia radica en la velocidad de reinicio mental, la disciplina del proceso y el foco inmediato en la siguiente jugada.'
        : 'In rugby as in enterprise sales, setbacks happen continuously. What defines winners is the speed of reset, discipline of process, and commitment to the next play.',
      color: 'emerald',
    },
    {
      icon: Timer,
      title: isEs ? 'Toma de Decisiones en Fracciones de Segundo' : 'Split-Second Decision Making',
      desc: isEs
        ? 'Leer una defensa en 0.3 segundos es idéntico a leer a un prospect escéptico en una llamada de discovery: observar el lenguaje corporal, anticipar objeciones y adaptar el mensaje al instante.'
        : 'Reading a defense in 0.3 seconds mirrors reading a skeptical prospect in a live discovery call—observe body language, anticipate moves, and adapt instantly.',
      color: 'blue',
    },
    {
      icon: Users,
      title: isEs ? 'Alineación de Equipo sobre el Ego Individual' : 'Team Alignment Over Individual Ego',
      desc: isEs
        ? 'Un partido de rugby no lo gana un individuo en solitario. Los mejores profesionales potencian a sus compañeros, se comunican con cero ambigüedad y celebran las victorias compartidas.'
        : 'Rugby cannot be won by an individual. The highest performers elevate their teammates, communicate with zero ambiguity, and celebrate shared team wins.',
      color: 'cyan',
    },
    {
      icon: Brain,
      title: isEs ? 'Preparación Obsesiva' : 'Obsessive Preparation',
      desc: isEs
        ? 'Los partidos se ganan de lunes a viernes en el análisis táctico de video y la repetición metódica. Los acuerdos comerciales se ganan mucho antes de la reunión final gracias a una investigación exhaustiva de la cuenta.'
        : 'Matches are won Monday to Friday in film sessions and repetition drills. Deal closings are won long before the final call through meticulous account research.',
      color: 'blue',
    },
  ];

  return (
    <section id="sports" className="py-16 md:py-24 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="font-mono text-[11px] font-bold uppercase text-blue-600 dark:text-blue-400 tracking-wider">
              {isEs ? 'Liderazgo Deportivo & Rugby Profesional' : 'Athletic Leadership & Pro Sports'}
            </span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-[10px] font-semibold border border-slate-200 dark:border-slate-700">
              {isEs ? '2011 - 2021 · 10 Años · Italia, Inglaterra, España, Polonia' : '2011 - 2021 · 10 Years · Italy, England, Spain, Poland'}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {isEs ? '10 Años de Rugby Profesional en Europa' : '10 Years of Professional Rugby Across Europe'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {isEs
              ? 'Una década compitiendo al máximo nivel del rugby europeo y circuito internacional de Seven forjó mi resiliencia mental, claridad táctica bajo extrema fatiga y la capacidad de unir equipos multidisciplinares hacia un objetivo sin excusas.'
              : 'A decade competing at the highest level of European rugby and international Sevens. Professional rugby forged my mental resilience, tactical clarity under extreme duress, and ability to unite multidisciplinary teams around a shared, uncompromising goal.'}
          </p>
        </div>

        {/* Action Imagery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {photos.map((item, idx) => (
            <div
              key={idx}
              onClick={() => onOpenLightbox(item.url, item.title, item.desc)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col"
            >
              <div className="relative aspect-video sm:aspect-16/10 overflow-hidden bg-slate-950 flex items-center justify-center">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-300 select-none"
                />
                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center">
                  <div className="px-3 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>{isEs ? 'Haz clic para ampliar' : 'Click to zoom'}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-5 flex flex-col gap-1">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Athletic Operating Principles applied to B2B Sales */}
        <div className="space-y-4 pt-2">
          <div>
            <span className="font-mono text-[11px] font-bold uppercase text-emerald-600 dark:text-emerald-400 tracking-wider">
              {isEs ? 'Sistema Operativo Deportivo Transferible' : 'Transferable Athletic Operating System'}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-0.5">
              {isEs ? 'Cómo la Competición de Élite Impulsa la Ejecución en Ventas B2B' : 'How Elite Rugby Competition Drives Outsized Sales Execution'}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {isEs
                ? 'El deporte profesional me enseñó los hábitos cognitivos que permiten al 1% de los comerciales sobresalir en ciclos de venta prolongados.'
                : 'Professional athletics taught me the exact cognitive habits that allow top 1% sales performers to thrive over long deal cycles.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
            {operatingPrinciples.map((op, idx) => {
              const Icon = op.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col gap-3 hover:border-blue-500/40 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {op.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-1.5">
                      {op.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
