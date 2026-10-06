import React from 'react';
import { Language } from '../data/translations';
import { Target, Search, Presentation, Award, ArrowRight } from 'lucide-react';

interface ProfessionalCareerProps {
  lang: Language;
}

export const ProfessionalCareer: React.FC<ProfessionalCareerProps> = ({ lang }) => {
  const isEs = lang === 'es';

  // 4-Step Framework from Stitch
  const frameworkSteps = [
    {
      step: '01',
      title: isEs ? 'Prospección Hipersegmentada' : 'Hyper-Targeted Outbound',
      desc: isEs
        ? 'Combinación de señales de intención de compra, scraping de stack tecnológico y contacto multicanal (LinkedIn y email) personalizado a los cuellos de botella específicos del cliente.'
        : "Combining intent signals, tech-stack scraping, and multi-threaded outreach across LinkedIn and email. Every message is personalized to the prospect's exact business bottlenecks.",
      deliverables: isEs
        ? 'Ganchos de valor a medida, cadencias multicanal y agendas de descubrimiento enfocadas en ROI.'
        : 'Customized value hooks, multi-touch cadences, and discovery agendas focused on ROI.',
      color: 'blue',
      icon: Target,
    },
    {
      step: '02',
      title: isEs ? 'Cualificación y Discovery Riguroso' : 'Discovery & Qualification',
      desc: isEs
        ? 'Metodologías MEDDIC y BANT para diagnosticar limitaciones técnicas, fugas operativas, tiempos de decisión y viabilidad comercial del acuerdo.'
        : 'Rigorous MEDDIC and BANT scoping. Pinpointing true technical limitations, operational leakages, decision-maker timelines, and commercial viability.',
      deliverables: isEs
        ? 'Mapas de dolor de causa raíz, alineación de capacidades técnicas y matrices de decisores.'
        : 'Root-cause pain maps, technical capability alignment, and stakeholder matrices.',
      color: 'cyan',
      icon: Search,
    },
    {
      step: '03',
      title: isEs ? 'Demostración Consultiva y Casos de Negocio' : 'Consultative Demo & Alignment',
      desc: isEs
        ? 'Recorridos de producto diseñados para evidenciar mejoras medibles en unit economics. Simulación en vivo de ahorros logísticos y plazos de entrega multirregión.'
        : 'Tailored product walkthroughs demonstrating measurable unit-economic improvements. Live modeling of projected cost savings and multi-region fulfillment speeds.',
      deliverables: isEs
        ? 'Modelado de escenarios en directo, cálculo de casos de negocio y diferenciación competitiva.'
        : 'Live scenario modeling, business case calculations, and competitive differentiation.',
      color: 'blue',
      icon: Presentation,
    },
    {
      step: '04',
      title: isEs ? 'Cierre y Ejecución de Contratos' : 'Closing & Contract Execution',
      desc: isEs
        ? 'Acompañamiento a través de cadenas de aprobación complejas, revisiones legales, acuerdos SLA y transición a onboarding con disciplina y urgencia deportiva.'
        : 'Navigating multi-stakeholder approval chains, legal reviews, SLA configurations, and onboarding transitions with athlete-like urgency and precision.',
      deliverables: isEs
        ? 'Alineación contractual ejecutiva, acuerdos de mitigación de riesgo y traspaso fluido a operaciones.'
        : 'Executive contract alignment, risk mitigation agreements, and seamless implementation handoffs.',
      color: 'emerald',
      icon: Award,
    },
  ];

  // Work History from Stitch
  const jobs = [
    {
      id: 'huboo',
      role: 'SDR & Account Executive / BDM',
      badge: isEs ? 'Ventas B2B de Software & Logística' : 'Fast-to-Software Sales',
      company: 'Huboo Technologies',
      location: isEs ? 'Madrid y Remoto, España' : 'Madrid & Remote, Spain',
      period: '2023 - Present',
      summary: isEs
        ? 'Liderazgo en captación de marcas e-commerce para la red paneuropea de fulfillment de Huboo. Promoción acelerada de SDR a BDM en tan solo 4 meses gracias a la superación de cuota y desarrollo de herramientas internas de automatización comercial en Python.'
        : 'Led high-touch client acquisition and discovery for proprietary UK/EU tech solutions while spearheading internal data workflows for sales ops. Fast-tracked from SDR to BDM in four months.',
      deliverables: isEs
        ? [
            'Generación de pipeline cualificado mediante prospección multicanal dirigida a directores generales y decisores de e-commerce.',
            'Demostraciones consultivas de producto orientadas a métricas financieras, reduciendo drásticamente el ciclo de cierre.',
            'Desarrollo de scripts ETL y limpieza de datos en Python/SQL para el CRM de ventas, reduciendo tiempos de propuesta de 48h a 15min.',
            'Colaboración estrecha con ingeniería y producto para traducir fricciones de clientes en mejoras de tarifas.',
          ]
        : [
            'Generated qualified pipeline through targeted multi-channel outbound campaigns targeting enterprise decision-makers.',
            'Delivered high-impact product demonstrations demonstrating measurable D2C conversion enhancements, shortening sales cycles.',
            'Engineered automated ETL routines and CRM data cleaning in Python/SQL, reducing data entry errors and optimizing lead scoring.',
            'Collaborated closely with product and engineering teams to translate customer pain points into high-value feature roadmap inputs.',
          ],
      skills: [
        'Outbound Prospecting',
        'SaaS Demos',
        'Pipeline Management',
        'ETL Processes',
        'Python & SQL',
        'HubSpot CRM',
      ],
    },
    {
      id: 'torrecasa',
      role: isEs ? 'Consultor Inmobiliario y Creador de Acuerdos' : 'Real Estate Consultant & Deal Closer',
      badge: isEs ? 'Ventas de Alto Valor (High-Ticket)' : 'High-Ticket Sales & Advisory',
      company: 'Torrecasa',
      location: isEs ? 'Madrid, España' : 'Madrid, Spain',
      period: '2022 - 2023',
      summary: isEs
        ? 'Gestión de negociaciones de alta exigencia para activos residenciales, valoración de carteras y estructuración de transacciones en uno de los distritos más competitivos de Madrid.'
        : "Managed high-stakes residential property negotiations, portfolio valuation, and transaction structuring in one of Madrid's most competitive markets.",
      deliverables: isEs
        ? [
            'Asesoramiento integral a compradores e inversores en negociaciones complejas, formalizando acuerdos de alto valor ante notaría.',
            'Diseño de rutinas de análisis y parsing de datos de mercado inmobiliario para tasaciones y proyecciones de rentabilidad.',
            'Mantenimiento de un índice de satisfacción superior al 95% mediante comunicación transparente y resolución ágil de objeciones.',
          ]
        : [
            'Guided clients through complex acquisition and divestment negotiations, closing high-ticket deals with stringent regulatory compliance.',
            'Designed systematic ETL procedures to parse property market listings, transaction histories, and pricing indices for data-driven valuations.',
            'Maintained a 95%+ client satisfaction rating by providing transparent, advisory-led guidance from initial visit through notary signing.',
          ],
      skills: [
        'High-Stakes Negotiation',
        'Valuation Analysis',
        'Market Research',
        'Contract Closing',
        'Client Relationship Mgmt',
      ],
    },
    {
      id: 'rivadavia',
      role: isEs ? 'Asesor Administrativo y de Seguros' : 'Administrative & Insurance Advisor',
      badge: isEs ? 'Servicios Financieros y Riesgo' : 'Financial & Risk Services',
      company: 'Rivadavia Seguros',
      location: 'Argentina',
      period: '2021 - 2022',
      summary: isEs
        ? 'Gestión de pólizas, mitigación de riesgos y tramitación de siniestros en carteras corporativas y particulares de Vida, Salud, Responsabilidad Civil y Automotor.'
        : 'Delivered risk management, policy structuring, and claims administration across Life, Health, Civil Liability, and Automotive portfolios.',
      deliverables: isEs
        ? [
            'Administración y auditoría de expedientes de clientes con 100% de cumplimiento en marcos normativos exigentes.',
            'Evaluación analítica de perfiles de riesgo comercial para emisión ágil de coberturas a medida.',
            'Optimización de los flujos de resolución de siniestros, acortando tiempos de respuesta para los asegurados.',
          ]
        : [
            'Managed client portfolio documentation with 100% auditing compliance across stringent regulatory frameworks.',
            'Supported lead review, claims processing, and underwriting policies for commercial accounts.',
            'Streamlined claims processing workflows, cutting turnaround time for policyholders during critical distress events.',
          ],
      skills: [
        'Risk Assessment',
        'Policy Advisory',
        'Regulatory Compliance',
        'Claims Resolution',
        'Customer Retention',
      ],
    },
    {
      id: 'elite-round',
      role: isEs ? 'Entrenador Personal y Floor Manager' : 'Personal Trainer & Floor Manager',
      badge: isEs ? 'Acondicionamiento de Alto Rendimiento' : 'High-Performance Conditioning',
      company: 'Elite Round Club',
      location: isEs ? 'Roma, Italia' : 'Rome, Italy',
      period: '2018 - 2020',
      summary: isEs
        ? 'Liderazgo en acondicionamiento físico, onboarding de miembros y gestión del centro deportivo en Roma central, comunicando fluidamente en italiano profesional.'
        : 'Led physical conditioning, client onboarding, and gym floor operations in central Rome, delivering custom performance programs in fluent Italian.',
      deliverables: isEs
        ? [
            'Supervisión y bienvenida de nuevos miembros, logrando un incremento superior al 35% en conversiones a planes de fidelización mensual.',
            'Aplicación de metodologías de ciencias del deporte del rugby profesional para profesionales con alta demanda laboral.',
            'Gestión de dinámicas de equipo, horarios de monitores y programas de retención.',
          ]
        : [
            'Supervised new-member onboarding, achieving a 35%+ increase in month-month training subscription conversions.',
            'Applied sports science methodologies from professional rugby to help high-performing professionals achieve conditioning goals.',
            'Managed facility team logistics, staff scheduling, and member retention initiatives.',
          ],
      skills: [
        'Team Leadership',
        'Client Onboarding',
        'Italian Fluency',
        'Physical Conditioning',
        'Member Retention',
      ],
    },
  ];

  // 3-Column Skills Matrix from Stitch
  const skillMatrices = [
    {
      title: isEs ? 'Ventas & Estrategia' : 'Sales & Strategy',
      color: 'blue',
      items: [
        'Outbound Prospecting',
        'Discovery & MEDDIC',
        'Consultative Pitching',
        'Objection Handling',
        'High-Stakes Negotiation',
        'CRM & Pipeline Hygiene',
      ],
    },
    {
      title: isEs ? 'Datos & Cloud' : 'Data & Cloud',
      color: 'cyan',
      items: [
        'Python (Pandas, Scikit-Learn)',
        'SQL (PostgreSQL)',
        'AWS Cloud (EC2, S3, RDS)',
        'ETL Pipeline Engineering',
        'Power BI & Folium',
        'Docker & APIs',
      ],
    },
    {
      title: isEs ? 'Interpersonal & Liderazgo' : 'Interpersonal & Leadership',
      color: 'emerald',
      items: [
        'High-Pressure Decision Making',
        'Cross-Functional Alignment',
        'Trilingual Fluency (EN, IT, ES)',
        'Athlete Resilience',
        'Agile Project Management',
        'Growth Mindset',
      ],
    },
  ];

  return (
    <section id="career" className="py-16 md:py-24 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* SECTION 3 (Stitch): Methodology & Sales Operations Framework */}
        <div id="methodology" className="space-y-8">
          <div className="max-w-3xl">
            <span className="font-mono text-[11px] font-bold uppercase text-blue-600 dark:text-blue-400 tracking-wider">
              {isEs ? 'Metodología & Operaciones de Venta' : 'Methodology & Sales Operations'}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
              {isEs ? 'Venta Consultiva de Software y Operaciones con Datos' : 'Consultative Software Sales & Data Operations'}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {isEs
                ? 'Desde negociaciones de alto valor en Madrid hasta ventas B2B de software logístico en Huboo, mi enfoque combina la disciplina outbound con capacidades de ingeniería de datos.'
                : 'From high-ticket negotiations in Madrid to enterprise software sales at Huboo, my background merges outbound discipline with data science capabilities.'}
            </p>
          </div>

          {/* 4-Step Framework Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {frameworkSteps.map((step) => (
              <div
                key={step.step}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between gap-4 hover:border-blue-500/40 transition-colors"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-mono font-bold text-xs flex items-center justify-center shadow-xs">
                    {step.step}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mt-3">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-2">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    {isEs ? 'Entregables Clave:' : 'Key Deliverables:'}
                  </span>
                  <p className="text-xs text-slate-700 dark:text-slate-300 mt-1 leading-snug font-medium">
                    {step.deliverables}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 4 (Stitch): Employment & Advisory History */}
        <div id="trajectory-section" className="space-y-8 pt-4">
          <div className="max-w-3xl">
            <span className="font-mono text-[11px] font-bold uppercase text-blue-600 dark:text-blue-400 tracking-wider">
              {isEs ? 'Trayectoria Profesional' : 'Professional Track Record'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
              {isEs ? 'Historial Laboral y Roles Ejecutivos' : 'Employment & Advisory History'}
            </h2>
          </div>

          {/* Career Cards Stack */}
          <div className="space-y-5">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all space-y-4"
              >
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {job.role}
                      </h3>
                      <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                        {job.badge}
                      </span>
                    </div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {job.company} · {job.location}
                    </span>
                  </div>

                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold w-fit">
                    {job.period}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {job.summary}
                </p>

                {/* Deliverables Bullet List */}
                <div className="space-y-1.5 pt-1">
                  <span className="font-mono text-[10px] font-bold uppercase text-slate-400 dark:text-slate-500 tracking-wider">
                    {isEs ? 'Logros & Entregables Clave:' : 'Key Deliverables:'}
                  </span>
                  <div className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
                    {job.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <ArrowRight className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {job.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Core Competencies Grid (3 Bento Columns) */}
          <div className="pt-8">
            <span className="font-mono text-[11px] font-bold uppercase text-slate-400 dark:text-slate-500 tracking-wider">
              {isEs ? 'Matriz de Competencias Ejecutivas' : 'Executive Skill Matrices'}
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
              {skillMatrices.map((matrix, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3"
                >
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    {matrix.title}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {matrix.items.map((item, iIdx) => (
                      <span
                        key={iIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
