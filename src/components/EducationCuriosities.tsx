import React, { useState } from 'react';
import { Language } from '../data/translations';
import { Award, Globe, Dumbbell, ExternalLink } from 'lucide-react';

interface EducationCuriositiesProps {
  lang: Language;
}

export const EducationCuriosities: React.FC<EducationCuriositiesProps> = ({ lang }) => {
  const isEs = lang === 'es';
  const [pitchLang, setPitchLang] = useState<'en' | 'it' | 'es'>(isEs ? 'es' : 'en');

  // 6 Degrees & Certifications from Stitch
  const degrees = [
    {
      id: 'aws',
      tag: 'AWS · 2024',
      badge: isEs ? '3er Puesto Cloud Quest' : '3rd Place Cloud Quest',
      badgeColor: 'emerald',
      title: isEs ? 'AWS Certified Cloud Practitioner & Cloud Quest' : 'AWS Certified Cloud Practitioner & Cloud Quest',
      institution: 'Amazon Web Services (AWS)',
      desc: isEs
        ? 'Dominio de arquitectura escalable en cloud, protocolos de seguridad IAM, cómputo EC2 y bases de datos relacionales RDS/PostgreSQL. 3er puesto en el AWS Cloud Quest Challenge por resolución práctica de escenarios cloud reales.'
        : 'Mastery of scalable cloud architecture, IAM security protocols, compute instances (EC2), and relational database configurations (RDS/PostgreSQL). Competed in the AWS Cloud Quest Challenge, achieving an impressive 3rd place finish for practical problem-solving in true cloud environments.',
      hasCredly: true,
    },
    {
      id: 'edix',
      tag: 'EDIX · 2023',
      location: isEs ? 'Madrid, España' : 'Madrid, Spain',
      title: isEs ? 'Big Data & Analítica a Gran Escala' : 'Big Data & Large Scale Analytics',
      institution: 'EDIX',
      desc: isEs
        ? 'Programa avanzado enfocado en computación distribuida, ingesta masiva de datos, arquitectura de pipelines ETL y almacenamiento analítico en data warehouses para optimizar consultas de alto rendimiento.'
        : 'Advanced program focused on distributed computing, high-volume data ingestion, ETL pipeline architecture, and enterprise data warehousing techniques. Optimized query performance on analytical databases.',
    },
    {
      id: 'bridge',
      tag: 'THE BRIDGE · 2023',
      location: isEs ? 'Madrid, España' : 'Madrid, Spain',
      title: isEs ? 'Data Science & Machine Learning Immersion' : 'Data Science & Machine Learning Immersion',
      institution: 'The Bridge / Digital Talent',
      desc: isEs
        ? 'Inmersión técnica intensiva cubriendo pipelines completos de Machine Learning en Python, consultas complejas en SQL, análisis exploratorio (EDA), ingeniería de características y despliegue interactivo en Streamlit.'
        : 'Rigorous immersion covering full-stack machine learning pipelines in Python, complex SQL querying, exploratory data analysis, feature engineering, and deployment via Streamlit.',
    },
    {
      id: 'econ',
      tag: 'ECON · 2022',
      location: 'Online',
      title: isEs ? 'Macroeconomía & Política Monetaria Global' : 'Macroeconomics & Global Monetary Policy',
      institution: 'Boyer Academy',
      desc: isEs
        ? 'Estudio profundo de variables macroeconómicas: motores del PIB, ciclos inflacionarios, dinámica del desempleo, políticas de bancos centrales y funcionamiento del crédito y sistemas monetarios en mercados internacionales.'
        : 'Deep dive into macroeconomic frameworks: GDP drivers, inflationary cycles, unemployment dynamics, central bank policies, and the mechanics of credit and fiat systems in international markets.',
    },
    {
      id: 'degree',
      tag: 'GRADO · 2013-2017',
      location: isEs ? 'España' : 'Spain',
      title: isEs ? 'Grado en Gestión Deportiva y Administración Atlética' : 'Sport Management & Athletic Administration',
      institution: 'Universidad Europea del Atlántico',
      desc: isEs
        ? 'Formación superior en dirección de organizaciones deportivas, estructuración de acuerdos de patrocinio, operaciones logísticas de eventos, rendimiento atlético y liderazgo de equipos.'
        : 'Study of sports organization management, sponsorship deal structuring, event operations, athletic performance logistics, and team leadership.',
    },
    {
      id: 'sap',
      tag: 'SAP · 2021',
      location: 'Online',
      title: isEs ? 'Planificación de Recursos Empresariales (SAP ERP)' : 'SAP Enterprise Resource Planning',
      institution: 'LONGO Group',
      desc: isEs
        ? 'Conocimiento práctico de arquitecturas empresariales SAP, gestión de datos maestros, módulos de ventas y distribución (SD) y coordinación interdepartamental en entornos corporativos.'
        : 'Hands-on understanding of enterprise-scale SAP architectures, master data management, sales & distribution modules, and cross-module coordination in corporate environments.',
    },
  ];

  // Interactive Trilingual Pitch Data from Stitch
  const pitchData = {
    en: {
      tag: 'English (Professional Working Proficiency)',
      title: '"Cross-Border Enterprise SaaS Pipeline Generation"',
      body: '"I bridge the gap between technical architecture and business value. With a decade of high-performance rugby and intensive training in AWS and Data Science, I execute consultative discovery calls, handle executive objections with data, and drive deals to closure."',
    },
    it: {
      tag: 'Italiano (Fluente / Madrelingua Professionale)',
      title: '"Generatore di Pipeline SaaS & Tecnologie Aziendali"',
      body: '"Unisco il rigore di 10 anni di rugby professionistico con lo sviluppo di software commerciale. Parlo correntemente italiano, conducendo trattative commerciali complesse e gestendo i processi di vendita end-to-end con disciplina incrollabile."',
    },
    es: {
      tag: 'Español (Nativo / B2B Enterprise Closer)',
      title: '"Líder de Crecimiento B2B y Arquitectura de Datos"',
      body: '"Aporto una mentalidad de alta agencia y propiedad absoluta. Desde la prospección hipersegmentada con scripts de Python hasta el cierre de contratos de alto valor, opero con la disciplina y adaptabilidad de un atleta de élite."',
    },
  };

  return (
    <section id="education" className="py-16 md:py-24 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="font-mono text-[11px] font-bold uppercase text-blue-600 dark:text-blue-400 tracking-wider">
            {isEs ? 'Formación Académica & Lab de Curiosidades' : 'Academic Background & Curiosity Lab'}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
            {isEs ? 'Estudios, Certificaciones y Curiosidad Intelectual' : 'Education, Certifications & Intellectual Curiosities'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {isEs
              ? 'Reciclaje técnico constante unido a una búsqueda incansable por entender sistemas, idiomas y alto rendimiento.'
              : 'Continuous technical upskilling paired with a relentless hunger to understand systems, languages, and high performance.'}
          </p>
        </div>

        {/* Degrees & Certifications (6 Bento Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {degrees.map((edu) => (
            <div
              key={edu.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between gap-3 hover:border-slate-300 dark:hover:border-slate-700 transition-all"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                    {edu.tag}
                  </span>
                  {edu.badge ? (
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      <Award className="w-3.5 h-3.5" />
                      {edu.badge}
                    </span>
                  ) : edu.location ? (
                    <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase">
                      {edu.location}
                    </span>
                  ) : null}
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                  {edu.title}
                </h3>
                <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  {edu.institution}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {edu.desc}
                </p>
              </div>

              {edu.hasCredly && (
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                  <a
                    href="https://www.credly.com/badges/9cf56a96-522a-40ee-aa59-aba1d829e52b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <span>{isEs ? 'Verificar en Credly (Insignia Oficial)' : 'Verify on Credly (Official Badge)'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Multilingual Pitch & Discipline Lab */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-6">
          <div>
            <span className="font-mono text-[11px] font-bold uppercase text-blue-600 dark:text-blue-400 tracking-wider">
              {isEs ? 'Curiosidad & Mentalidad de Crecimiento' : 'Curiosity & Growth Mindset'}
            </span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
              {isEs ? 'Curiosidades, Multilingüismo y Disciplina Diaria' : 'Curiosities, Multilingualism & Daily Discipline'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              {isEs
                ? 'Lo que impulsa mi energía más allá de los embudos de venta: adaptabilidad cultural, resistencia física y experimentación técnica.'
                : 'What fuels my energy outside of pipeline spreadsheets: cultural adaptability, endurance athletics, and code experimentation.'}
            </p>
          </div>

          {/* Interactive Trilingual Pitch Generator Box (Stitch style) */}
          <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="font-mono text-xs font-bold uppercase text-blue-600 dark:text-blue-400 tracking-wider">
                {isEs ? 'Generador de Pitch Trilingüe Interactivo' : 'Interactive Trilingual Pitch Generator'}
              </span>

              {/* Language Selector Buttons */}
              <div className="flex items-center gap-1 bg-white dark:bg-slate-900 p-1 rounded-lg border border-slate-200 dark:border-slate-800">
                {(['en', 'it', 'es'] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => setPitchLang(l)}
                    className={`px-3 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                      pitchLang === l
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {l === 'en' ? 'English' : l === 'it' ? 'Italiano' : 'Español'}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-lg bg-white dark:bg-slate-900/90 border border-slate-200/70 dark:border-slate-800 space-y-1.5">
              <span className="font-mono text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500">
                {pitchData[pitchLang].tag}
              </span>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                {pitchData[pitchLang].title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed pt-1">
                {pitchData[pitchLang].body}
              </p>
            </div>
          </div>

          {/* Supporting Multilingual Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 space-y-1.5">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  {isEs ? 'Ejecución Comercial Trilingüe' : 'Trilingual Sales Execution'}
                </h4>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {isEs
                  ? 'Fluidez completa en inglés, italiano y español. Capaz de negociar, presentar y construir confianza auténtica con directivos europeos en su propio idioma.'
                  : 'Fluent in English, Italian, and Spanish. Able to negotiate, pitch, and build authentic rapport with European decision-makers in their native tongue.'}
              </p>
              <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500 pt-1">
                {isEs
                  ? 'Contexto: Residencia y trabajo en Reino Unido, Italia (Roma), Argentina y España.'
                  : 'Context: Lived and worked across the UK, Italy (Rome), Argentina, and Spain.'}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 space-y-1.5">
              <div className="flex items-center gap-2">
                <Dumbbell className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  {isEs ? 'Acondicionamiento Físico & Longevidad' : 'Athletic Conditioning & Longevity'}
                </h4>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {isEs
                  ? 'Exatleta de élite y entrenador certificado. Aplico ciencias del deporte, protocolos de recuperación y disciplina física diaria para mantener el máximo foco comercial.'
                  : 'Former elite athlete and certified personal trainer. Apply sports science, recovery protocols, and intense physical discipline to stay sharp in high-demand sales cycles.'}
              </p>
              <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500 pt-1">
                {isEs
                  ? 'Contexto: Cada mañana comienza con entrenamiento estructurado y exposición al frío.'
                  : 'Context: Every morning starts with structured physical training and cold exposure.'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
