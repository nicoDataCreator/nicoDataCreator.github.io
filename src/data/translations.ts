export type Language = 'en' | 'es';

export interface ActualidadApp {
  id: string;
  name: string;
  filename: string;
  tag: string;
  badge: string;
  description: string;
  problemSolved: string;
  impact: string[];
  features: string[];
}

export interface ActualidadSectionData {
  badge: string;
  title: string;
  subtitle: string;
  company: string;
  role: string;
  description: string;
  whyBuiltTitle: string;
  whyBuiltText: string;
  privacyBadge: string;
  privacyNotice: string;
  privacyToggleOn: string;
  privacyToggleOff: string;
  clickToExpand: string;
  apps: ActualidadApp[];
}

export interface Translations {
  nav: {
    about: string;
    actualidad: string;
    career: string;
    sports: string;
    projects: string;
    education: string;
    contact: string;
    getInTouch: string;
  };
  hero: {
    statusAvailable: string;
    location: string;
    languages: string;
    headline: string;
    subheadline: string;
    badgeAws: string;
    badgeData: string;
    badgeRugby: string;
    ctaContact: string;
    ctaCareer: string;
    ctaRugby: string;
    profileRole: string;
    stat1Label: string;
    stat1Context: string;
    stat2Label: string;
    stat2Context: string;
    stat3Label: string;
    stat3Context: string;
    stat4Label: string;
    stat4Context: string;
  };
  actualidad: ActualidadSectionData;
  career: {
    badge: string;
    title: string;
    description: string;
    playbookTag: string;
    playbookTitle: string;
    playbookSubtitle: string;
    playbookStages: {
      title: string;
      role: string;
      description: string;
      deliverables: string[];
    }[];
    deliverablesLabel: string;
    stageLabel: string;
    historyTitle: string;
    skillsLabel: string;
    skillsMatrixTitle: string;
    jobs: {
      id: string;
      role: string;
      company: string;
      location: string;
      period: string;
      type: string;
      summary: string;
      achievements: string[];
      skills: string[];
    }[];
    skillsCategories: {
      category: string;
      items: string[];
    }[];
  };
  sports: {
    badge: string;
    title: string;
    description: string;
    period: string;
    countries: string;
    galleryTitle: string;
    galleryHint: string;
    galleryItems: {
      url: string;
      title: string;
      caption: string;
    }[];
    principlesTag: string;
    principlesTitle: string;
    principlesSubtitle: string;
    principles: {
      title: string;
      description: string;
    }[];
  };
  projects: {
    badge: string;
    title: string;
    description: string;
    interactiveProof: string;
    problemTitle: string;
    solutionTitle: string;
    architectureTitle: string;
    stackLabel: string;
    screenshotsTitle: string;
    clickToZoom: string;
    playgroundTitle: string;
    playgroundBadge: string;
    items: {
      id: string;
      tabLabel: string;
      title: string;
      subtitle: string;
      category: string;
      description: string;
      problem: string;
      solution: string;
      architecture: string[];
      stack: string[];
      images: {
        url: string;
        caption: string;
      }[];
    }[];
    waynessCalc: {
      instruction: string;
      frictionLabel: string;
      frequencyLabel: string;
      daysUnit: string;
      resultTitle: string;
      resultSubtitle: string;
    };
    chatbotSim: {
      instruction: string;
      presets: string[];
      loggedBanner: string;
    };
    edaSim: {
      instruction: string;
      stat1Title: string;
      stat2Title: string;
      note: string;
    };
    mapSim: {
      instruction: string;
      coords: string;
      stats: string;
    };
    battleshipSim: {
      instruction: string;
      hitMessage: string;
      missMessage: string;
    };
  };
  education: {
    badge: string;
    title: string;
    description: string;
    degreesTitle: string;
    verifyCredly: string;
    curiositiesTag: string;
    curiositiesTitle: string;
    curiositiesSubtitle: string;
    trilingualTag: string;
    trilingualTitle: string;
    contextLabel: string;
    degrees: {
      id: string;
      title: string;
      institution: string;
      location: string;
      year: string;
      description: string;
      hasCredly?: boolean;
      highlights: string[];
    }[];
    curiosities: {
      iconName: string;
      title: string;
      category: string;
      description: string;
      detail: string;
    }[];
  };
  contact: {
    badge: string;
    title: string;
    description: string;
    emailLabel: string;
    phoneLabel: string;
    phoneType: string;
    linkedinLabel: string;
    locationNote: string;
    responseNote: string;
    availNote: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectOptions: string[];
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    submittingButton: string;
    directNotice: string;
    successTitle: string;
    successMessage: string;
    sendAnother: string;
    errorTitle: string;
    errorMessage: string;
    retryButton: string;
    mailtoAlternative: string;
  };
  dock: {
    availableText: string;
    directTitle: string;
    copiedNotice: string;
    callWa: string;
    linkedin: string;
    jumpTitle: string;
    location: string;
    contactButton: string;
    menuLabel: string;
    closeLabel: string;
  };
  footer: {
    tagline: string;
    top: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      about: "Portfolio",
      actualidad: "Current Focus (Huboo)",
      career: "Professional Career",
      sports: "Pro Rugby & Leadership",
      projects: "Projects & Systems",
      education: "Education & Curiosities",
      contact: "Contact",
      getInTouch: "Get in Touch"
    },
    hero: {
      statusAvailable: "Available for BDM & AE Roles",
      location: "Madrid, Spain & Remote",
      languages: "English · Italian · Spanish",
      headline: "B2B Sales & Business Development Manager | Ex-Professional Athlete",
      subheadline: "Specializing in pipeline development, and end-to-end deal execution. Fast-tracked at Huboo Technologies through consistent quota overperformance and data-driven sales strategies. Brings 10 years of elite sports discipline, resilience, and a hands-on mindset to revenue generation. Multilingual (EN/ES/IT), Madrid-based, and built to open high-value doors in fast-paced tech environments.",
      badgeAws: "AWS Cloud Quest (3rd Place)",
      badgeData: "Data Science & ETL Pipelines",
      badgeRugby: "10-Yr Pro Rugby Athletic Background",
      ctaContact: "Contact Nicolas",
      ctaCareer: "Explore Career History",
      ctaRugby: "Rugby & Leadership →",
      profileRole: "BDM & Account Executive · Former Pro Athlete",
      stat1Label: "Pro Athletic Discipline",
      stat1Context: "European Elite Rugby & Sevens",
      stat2Label: "Fluent Languages",
      stat2Context: "EN · IT · ES Cross-border sales",
      stat3Label: "AWS Cloud Quest",
      stat3Context: "Database & Cloud Architecture",
      stat4Label: "Data-Driven Deal Velocity",
      stat4Context: "Python & SQL ETL fluency"
    },
    actualidad: {
      badge: "Huboo Technologies",
      title: "Huboo Technologies · Internal Sales Software",
      subtitle: "B2B Fulfillment & Supply Chain Logistics Sales",
      company: "Huboo",
      role: "Business Development Manager (BDM)",
      description: "Internal tools developed to streamline outbound prospecting and accelerate commercial proposal turnaround.",
      whyBuiltTitle: "",
      whyBuiltText: "",
      privacyBadge: "",
      privacyNotice: "",
      privacyToggleOn: "",
      privacyToggleOff: "",
      clickToExpand: "Click image to inspect screenshot in lightbox",
      apps: [
        {
          id: "lista-outbound",
          name: "Lista Outbound",
          filename: "lista outbound.jpg",
          tag: "Outbound Lead Gen & ICP Scoring",
          badge: "Lead Intelligence App",
          description: "Internal prospecting dashboard developed to identify, qualify, and organize high-potential e-commerce merchants ready for Huboo's multi-hub European fulfillment network.",
          problemSolved: "Manual prospecting on LinkedIn and web stores was slow, fragmented, and failed to filter stores by estimated monthly order volume (GMV/orders).",
          features: [
            "Algorithmic ICP segmentation based on e-commerce catalog size & shipping velocity",
            "Multi-threaded contact directory with verified decision-maker touchpoints",
            "Automated cadence scheduling and live outbound status tracking",
            "Direct export and hygiene synchronization with core sales tools"
          ],
          impact: [
            "3x increase in qualified weekly outbound touches",
            "Zero manual CRM data re-entry friction",
            "Higher meeting conversion from hyper-personalized value hooks"
          ]
        },
        {
          id: "lista-propuestas",
          name: "Lista Propuestas",
          filename: "lista propuestas.jpg",
          tag: "Deal Structuring & Tariff Engine",
          badge: "Commercial Proposal App",
          description: "Dedicated proposal generator and quote tracking platform that models custom storage, pick & pack fees, carrier rates, and contractual margins in seconds.",
          problemSolved: "Fulfillment pricing has complex variables (SKU dimensions, weight, carton rules, international courier tariffs) that typically take 24-48 hours to assemble into a formal commercial quote.",
          features: [
            "Dynamic logistics rate calculator across UK & EU fulfillment centers",
            "Automated margin preservation and tiered volume discount logic",
            "Centralized deal pipeline tracking active quotes, negotiations, and closing stages",
            "Instant PDF / commercial sheet output ready for merchant presentation"
          ],
          impact: [
            "Proposal turnaround reduced from 48h to under 15 minutes",
            "100% margin accuracy with built-in guardrails",
            "Higher closing win-rate through transparent, instant pricing responses"
          ]
        }
      ]
    },
    career: {
      badge: "Professional Trajectory",
      title: "Consultative Software Sales & Data Operations",
      description: "From high-ticket negotiations in Madrid to enterprise UX/UI software sales at Betterplace, my background merges relentless outbound discipline with data science capabilities.",
      playbookTag: "Interactive Methodology",
      playbookTitle: "My End-to-End BDM & Account Executive Framework",
      playbookSubtitle: "Click through the stages to see how I combine analytical rigor with consultative persuasion.",
      stageLabel: "Stage",
      deliverablesLabel: "Key Deliverables:",
      playbookStages: [
        {
          title: "01. Hyper-Targeted Outbound",
          role: "ICP Definition & Discovery",
          description: "Combining intent signals, tech-stack scraping, and multi-threaded outreach across LinkedIn and email. Every message is personalized to the prospect's exact business bottlenecks.",
          deliverables: ["Customized value hooks", "Multi-touch cadence (email, phone, social)", "Discovery agendas focused on ROI"]
        },
        {
          title: "02. Data Enrichment & ETL",
          role: "Sales Ops & Data Hygiene",
          description: "Leveraging Python and SQL scripts to clean, normalize, and enrich prospect datasets prior to CRM insertion, eliminating human data-entry errors and empowering accurate lead scoring.",
          deliverables: ["Automated CRM deduplication", "Enriched firmographic data", "Clean pipeline reporting"]
        },
        {
          title: "03. Consultative UX/UI Demos",
          role: "Value Demonstration",
          description: "Structuring demos around customer outcomes rather than feature tours. Demonstrating measurable UX enhancements that directly increase retention and reduce customer friction.",
          deliverables: ["Tailored interactive prototypes", "Benchmark comparisons", "Executive buy-in alignment"]
        },
        {
          title: "04. Deal Closing & Alignment",
          role: "Mutual Action Planning",
          description: "Guiding prospects through legal, security, and procurement stages with clear mutual action plans. Uncovering unstated concerns to accelerate contract signatures.",
          deliverables: ["Mutual action plans (MAP)", "Multi-stakeholder consensus", "Smooth handover to Customer Success"]
        }
      ],
      historyTitle: "Employment & Advisory History",
      skillsLabel: "Skills:",
      skillsMatrixTitle: "Core Competencies & Toolset",
      jobs: [
        {
          id: "betterplace",
          role: "SDR & Account Executive",
          company: "Betterplace",
          location: "Oviedo & Remote, Spain",
          period: "2024",
          type: "Tech & Software Sales",
          summary: "Led high-touch client acquisition and discovery for proprietary UX/UI tech solutions while spearheading internal data workflows for sales ops.",
          achievements: [
            "Generated qualified pipeline through targeted multi-channel outbound campaigns targeting enterprise decision-makers.",
            "Delivered high-impact product demonstrations demonstrating measurable UX/UI conversion enhancements, shortening sales cycles.",
            "Engineered automated ETL routines and CRM data cleansing in Python/SQL, reducing data entry errors and optimizing lead scoring.",
            "Collaborated closely with product and engineering teams to translate customer pain points into high-value feature roadmap inputs."
          ],
          skills: ["Outbound Prospecting", "SaaS Demos", "Pipeline Management", "ETL Processes", "Python & SQL", "HubSpot / CRM"]
        },
        {
          id: "tecnocasa",
          role: "Real Estate Consultant & Deal Closer",
          company: "Tecnocasa",
          location: "Madrid, Spain",
          period: "2023 - 2024",
          type: "High-Ticket Sales & Advisory",
          summary: "Managed high-stakes residential property negotiations, portfolio valuation, and transaction structuring in one of Madrid's most competitive markets.",
          achievements: [
            "Guided clients through complex acquisition and divestment negotiations, closing high-ticket deals with stringent regulatory compliance.",
            "Designed systematic ETL procedures to parse property market listings, transaction histories, and pricing indices for data-driven valuations.",
            "Maintained a 95%+ client satisfaction rating by providing transparent, advisory-led guidance from initial visit through notary signing."
          ],
          skills: ["High-Stakes Negotiation", "Valuation Analysis", "Market Research", "Contract Closing", "Client Relationship Management"]
        },
        {
          id: "rivadavia",
          role: "Administrative & Insurance Advisor",
          company: "Rivadavia Seguros",
          location: "Argentina",
          period: "2022 - 2023",
          type: "Financial & Risk Services",
          summary: "Delivered risk management, policy structuring, and claims administration across Life, Health, Civil Liability, and Automotive portfolios.",
          achievements: [
            "Managed client portfolio documentation with 100% auditing compliance across stringent regulatory frameworks.",
            "Analyzed risk profiles to tailor insurance packages matching client budget constraints and asset liabilities.",
            "Streamlined claims processing workflows, cutting turnaround time for policyholders during critical distress events."
          ],
          skills: ["Risk Assessment", "Policy Advisory", "Regulatory Compliance", "Claims Resolution", "Customer Retention"]
        },
        {
          id: "elite-round",
          role: "Personal Trainer & Floor Manager",
          company: "Elite Round Club",
          location: "Rome, Italy",
          period: "2018 - 2020",
          type: "High-Performance Coaching",
          summary: "Led physical conditioning, client onboarding, and gym floor operations in central Rome, delivering custom performance programs in fluent Italian.",
          achievements: [
            "Supervised new member onboarding, achieving a 30%+ increase in multi-month training subscription conversions.",
            "Applied sports science methodologies from professional rugby to help high-performing professionals achieve conditioning goals.",
            "Managed facility team logistics, staff scheduling, and member retention initiatives."
          ],
          skills: ["Team Leadership", "Client Onboarding", "Italian Fluency", "Physical Conditioning", "Member Retention"]
        }
      ],
      skillsCategories: [
        {
          category: "Sales & Strategy",
          items: ["Outbound Prospecting", "Discovery & MEDDIC", "Consultative Pitching", "Objection Handling", "High-Stakes Negotiation", "CRM Pipeline Hygiene"]
        },
        {
          category: "Data & Cloud",
          items: ["Python (Pandas, Scikit-Learn)", "SQL (PostgreSQL)", "AWS Cloud (EC2, RDS, IAM)", "ETL Pipeline Engineering", "Power BI & Plotly", "Docker & APIs"]
        },
        {
          category: "Interpersonal & Leadership",
          items: ["High-Pressure Decision Making", "Cross-Functional Alignment", "Trilingual Fluency (EN, IT, ES)", "Athletic Resilience", "Agile Project Management"]
        }
      ]
    },
    sports: {
      badge: "Athletic Leadership & Pro Sports",
      title: "10 Years of Professional Rugby Across Europe",
      description: "A decade competing at the highest tiers of European rugby and international Sevens. Professional rugby forged my mental resilience, tactical clarity under extreme duress, and ability to unite multidisciplinary teams around a shared, uncompromising goal.",
      period: "2013 - 2023 · 10 Years",
      countries: "Italy · England · Spain · Poland",
      galleryTitle: "Visual Highlights & High-Pressure Fixtures",
      galleryHint: "Click photo to view full resolution",
      galleryItems: [
        {
          url: "/assets/Nico vs NZ.png",
          title: "International Sevens Clash vs. New Zealand All Blacks",
          caption: "Competing against the world's most dominant rugby franchise (New Zealand All Blacks Sevens). Testing preparation and speed on the global stage under extreme pressure."
        },
        {
          url: "/assets/SEVEN-volando-transformed.png",
          title: "Airborne High-Ball Contest in Sevens Circuit",
          caption: "Full aerial commitment during a crucial tournament possession. Exemplifies relentless physical effort, vertical athleticism, and unwavering focus on winning the ball."
        }
      ],
      principlesTag: "Transferable Athletic Operating System",
      principlesTitle: "How Elite Rugby Competition Drives Outsized Sales Execution",
      principlesSubtitle: "Professional athletics taught me the exact cognitive habits that allow top 1% sales performers to thrive over long deal cycles.",
      principles: [
        {
          title: "Grit & Rejection Immunity",
          description: "In rugby as in software sales, setbacks happen continuously. What defines winners is the speed of reset, discipline of process, and commitment to the next play."
        },
        {
          title: "Split-Second Decision Making",
          description: "Reading a defense in 0.5 seconds mirrors reading a skeptical prospect in a live discovery call: observe body language, anticipate moves, and adapt instantly."
        },
        {
          title: "Team Alignment Over Individual Ego",
          description: "Rugby cannot be won by an individual. The highest performers elevate their teammates, communicate with zero ambiguity, and celebrate shared team wins."
        },
        {
          title: "Obsessive Preparation",
          description: "Matches are won Monday to Friday in film sessions and repetition drills. Deal closings are won long before the final call through methodical account research."
        }
      ]
    },
    projects: {
      badge: "Engineering & Systems",
      title: "Data Science, Machine Learning & Interactive Systems",
      description: "Practical applications built with Python, SQL, Streamlit, and PostgreSQL. Demonstrating how technical literacy bridges the gap between software engineering and commercial sales.",
      interactiveProof: "Interactive Proof",
      problemTitle: "The Business Problem",
      solutionTitle: "The Technical Solution",
      architectureTitle: "Engineering Architecture & Methodology:",
      stackLabel: "Stack:",
      screenshotsTitle: "Project Screenshots",
      clickToZoom: "Click to zoom",
      playgroundTitle: "Live Concept Playground",
      playgroundBadge: "Interactive",
      items: [
        {
          id: "wayness",
          tabLabel: "Wayness Start-up",
          title: "Wayness Start-up: Balancing Duty & Pleasure",
          subtitle: "Health Habit Rewards Engine with Machine Learning",
          category: "Data Science & Start-up",
          description: "A proprietary startup platform designed to motivate long-term wellness routines by balancing daily duties with earned leisure rewards through algorithmic point scoring.",
          problem: "Habit formation apps suffer from high drop-off because reward schedules are static and disconnected from individual cognitive fatigue and schedule complexity.",
          solution: "Built a predictive points calculator and interactive Streamlit landing engine that calculates behavioral difficulty, assigns dynamic reward points, and tracks sustained user engagement.",
          architecture: [
            "Scikit-Learn ML classification & regression models to estimate task friction",
            "Dynamic points distribution algorithm with fatigue decay",
            "Interactive Streamlit web application with responsive UI components",
            "PostgreSQL persistence layer for user progress tracking"
          ],
          stack: ["Python", "Streamlit", "Scikit-Learn", "Pandas", "NumPy", "PostgreSQL"],
          images: [
            {
              url: "/assets/puntosWayness.jpg",
              caption: "Wayness Machine Learning points engine: dynamic calculation of reward allocation based on duty weight."
            },
            {
              url: "/assets/waynessWeb.jpg",
              caption: "Wayness web interface and landing page: user-facing dashboard for habit tracking and reward redemption."
            }
          ]
        },
        {
          id: "chatbot",
          tabLabel: "Chatbot NLP",
          title: "Virtual Assistant Chatbot with Intent Memory",
          subtitle: "Conversational NLP with PostgreSQL Persistence",
          category: "NLP & Conversational AI",
          description: "An intelligent conversational assistant built to handle customer inquiries, intent classification, and conversation logging for enterprise support workflows.",
          problem: "Customer service teams waste hundreds of hours fielding redundant FAQs that can be resolved instantly via context-aware conversational bots.",
          solution: "Engineered an NLP intent pipeline with tokenization and stemming (NLTK) connected to a PostgreSQL database on Render to persist dialogue history and generate analytical query distribution charts.",
          architecture: [
            "Natural Language Toolkit (NLTK) intent matching & pattern tokenization",
            "PostgreSQL relational schema storing session transcripts and response confidence",
            "Streamlit UI with real-time feedback loops and fallback escalation logic",
            "Live analytics dashboard charting query frequency and sentiment distribution"
          ],
          stack: ["Streamlit", "PostgreSQL", "NLTK", "Python", "Plotly", "Render"],
          images: [
            {
              url: "/assets/chaty.jpg",
              caption: "Chatbot conversation interface: real-time natural language query resolution with conversational memory."
            },
            {
              url: "/assets/graf.jpg",
              caption: "Conversation analytics dashboard: PostgreSQL-backed visualization of query intent clusters and frequency."
            }
          ]
        },
        {
          id: "data-viz",
          tabLabel: "Financial EDA",
          title: "Interactive Financial & Crypto EDA Dashboard",
          subtitle: "Real-Time Market Analytics & Historical Exploratory Data Analysis",
          category: "Financial Analytics & BI",
          description: "A comprehensive data analysis dashboard deployed on Render, tracking cryptocurrency volatility (BTC EDA), order flow distribution, and user query metrics from a live PostgreSQL instance.",
          problem: "Raw financial data is overwhelming and difficult for non-technical stakeholders to parse into tactical trading or hedging decisions.",
          solution: "Constructed an interactive visualization suite using Plotly and Streamlit that computes moving averages, volatility bands, correlation matrices, and geographical message origin flows.",
          architecture: [
            "Automated ETL data ingestion pipeline parsing market candles and transaction logs",
            "Plotly interactive chart engine with zoom, pan, and custom date range slicing",
            "Render cloud deployment with automated container health monitoring"
          ],
          stack: ["Python", "Plotly", "Streamlit", "PostgreSQL", "Pandas", "Render"],
          images: [
            {
              url: "/assets/EDA.jpg",
              caption: "Exploratory Data Analysis dashboard tracking Bitcoin price movements, trends, and volatility regimes."
            }
          ]
        },
        {
          id: "map-viz",
          tabLabel: "Geospatial Folium",
          title: "Geospatial Volunteer & Campsite Map",
          subtitle: "Interactive Location Intelligence with Streamlit & Folium",
          category: "Geospatial Data Engineering",
          description: "An interactive mapping tool enabling international volunteers and travelers to explore vetted campsites and volunteer programs with custom geocoded markers and dynamic filtering.",
          problem: "NGO and campsite coordinates were scattered across disparate spreadsheets with no spatial proximity or route planning features.",
          solution: "Merged geolocated datasets into an interactive Folium map hosted on Streamlit, where each cluster pin delivers rich metadata, contact info, and external navigation links.",
          architecture: [
            "Folium Leaflet-based geospatial rendering engine",
            "Spatial clustering algorithm for dense urban and wilderness pins",
            "Metadata popups linking to volunteer program applications and logistical guidelines"
          ],
          stack: ["Python", "Folium", "Streamlit", "PostgreSQL", "OpenStreetMap API"],
          images: [
            {
              url: "/assets/map.jpg",
              caption: "Geospatial intelligence map displaying geocoded volunteer programs and campsite locations across regions."
            }
          ]
        },
        {
          id: "battleship",
          tabLabel: "Battleship Algorithmic",
          title: "Battleship Algorithmic Console Game",
          subtitle: "Algorithmic Logic, Control Flow & Future OOP Architecture",
          category: "Software Fundamentals",
          description: "A terminal-based Battleship simulator developed to master clean algorithmic control flow, 2D matrix manipulation, collision detection, and randomized AI fleet placement.",
          problem: "Building intuitive terminal game loops that handle edge-case inputs, grid bounds, and state validation without breaking execution.",
          solution: "Crafted clean modular functions with comprehensive error trapping, formatted coordinate rendering, and a planned transition to an object-oriented GUI architecture.",
          architecture: [
            "2D matrix coordinate system tracking player and computer torpedo boards",
            "Randomized ship placement algorithm with zero-overlap collision validation",
            "Recursive coordinate validation and turn-based state machine"
          ],
          stack: ["Python 3", "Data Structures", "Matrix Computation", "CLI Architecture"],
          images: [
            {
              url: "/assets/hundirLaFlota.png",
              caption: "Console terminal rendering of Battleship board with coordinates, hits, misses, and fleet status."
            }
          ]
        }
      ],
      waynessCalc: {
        instruction: "Test the dynamic reward points allocation model:",
        frictionLabel: "Task Cognitive / Physical Friction (1-5):",
        frequencyLabel: "Commitment Frequency (Days/Week):",
        daysUnit: "days",
        resultTitle: "Calculated Reward Points",
        resultSubtitle: "Duty vs Pleasure Equilibrium"
      },
      chatbotSim: {
        instruction: "Query intent classification & PostgreSQL memory simulation:",
        presets: ["Pricing & tiers", "Book demo with Nico", "Technical architecture"],
        loggedBanner: "[✓] Written to postgres_sessions table"
      },
      edaSim: {
        instruction: "Simulated metrics from PostgreSQL database on Render:",
        stat1Title: "BTC 30D Volatility",
        stat2Title: "ETL Ingestion Latency",
        note: "Continuous pipeline on Render syncs 15-minute candle aggregates."
      },
      mapSim: {
        instruction: "Geocoded volunteer campsites coordinate index:",
        coords: "Coordinates: 40.4168° N, 3.7038° W (Madrid Base)",
        stats: "Total markers mapped: 84 verified European volunteer hubs"
      },
      battleshipSim: {
        instruction: "Click a coordinate to fire a simulated torpedo into the matrix:",
        hitMessage: "DIRECT HIT on Carrier section at",
        missMessage: "Splash — Miss at"
      }
    },
    education: {
      badge: "Academic Background & Curiosity Lab",
      title: "Education, Certifications & Intellectual Curiosities",
      description: "Continuous technical upskilling paired with a relentless hunger to understand systems, languages, and high performance.",
      degreesTitle: "Degrees, Cloud Certifications & Intensive Programs",
      verifyCredly: "Verify on Credly Official Registry",
      curiositiesTag: "Curiosity & Growth Mindset",
      curiositiesTitle: "Curiosities, Multilingualism & Daily Discipline",
      curiositiesSubtitle: "What fuels my energy outside of pipeline spreadsheets: cultural adaptability, endurance athletics, and code experimentation.",
      trilingualTag: "Interactive Trilingual Proficiency",
      trilingualTitle: "Test My Pitch Across 3 Languages",
      contextLabel: "Context: ",
      degrees: [
        {
          id: "aws-cloud",
          title: "AWS Certified Cloud Practitioner & Cloud Quest",
          institution: "Amazon Web Services (AWS)",
          location: "Remote",
          year: "2025",
          description: "Hands-on mastery of core AWS architecture, IAM security protocols, compute instances (EC2), and relational database configuration (RDS/DynamoDB). Competed in the AWS Cloud Quest Challenge, achieving an impressive 3rd place finish for practical problem-solving in live cloud environments.",
          hasCredly: true,
          highlights: [
            "3rd Place finish in AWS Cloud Quest competitive troubleshooting",
            "Hands-on database architecture & VPC subnet routing",
            "Official Credly verified digital credential"
          ]
        },
        {
          id: "big-data",
          title: "Big Data & Large Scale Analytics",
          institution: "Virensis",
          location: "Madrid, Spain",
          year: "2024",
          description: "Advanced program focused on distributed computing, high-volume data ingestion, ETL pipeline architecture, and enterprise data warehousing techniques.",
          highlights: [
            "Architected data ingestion pipelines for multi-gigabyte datasets",
            "Optimized query performance on relational & columnar stores",
            "Applied modern data engineering frameworks to business intelligence"
          ]
        },
        {
          id: "data-science",
          title: "Data Science & Machine Learning Immersion",
          institution: "The Bridge / Digital Talent",
          location: "Madrid, Spain",
          year: "2024",
          description: "Rigorous full-stack data science bootcamp covering end-to-end predictive modeling in Python, complex SQL querying, exploratory data analysis, feature engineering, Scikit-Learn, and deployment via Streamlit.",
          highlights: [
            "Built production-ready ML predictive models from raw real-world data",
            "Mastered SQL window functions, joins, and indexing strategies",
            "Engineered automated ETL scripts and exploratory data dashboards"
          ]
        },
        {
          id: "macroeconomics",
          title: "Macroeconomics & Global Monetary Policy",
          institution: "Saylor Academy",
          location: "Online",
          year: "2023",
          description: "Deep dive into macroeconomic frameworks: GDP drivers, inflationary cycles, unemployment dynamics, central bank interest rate mechanisms, and fiscal policy impacts on international markets.",
          highlights: [
            "Analyzed the macroeconomic ripple effects on B2B tech capital spending",
            "Understanding currency fluctuations and global market liquidity"
          ]
        },
        {
          id: "sport-management",
          title: "Sport Management & Athletic Administration",
          institution: "Universidad Europea del Atlántico",
          location: "Spain",
          year: "2016 - 2017",
          description: "Study of sports organization management, sponsorship deal structuring, event operations, athletic performance logistics, and team dynamics.",
          highlights: [
            "Sports marketing and brand partnership fundamentals",
            "High-performance sports organization management"
          ]
        },
        {
          id: "sap",
          title: "SAP Enterprise Resource Planning",
          institution: "LOGALI Group",
          location: "Online",
          year: "2024",
          description: "Hands-on understanding of enterprise-scale SAP architectures, master data management, sales & distribution modules, and enterprise workflows.",
          highlights: [
            "ERP workflow mapping and master data governance",
            "Cross-module coordination in corporate environments"
          ]
        }
      ],
      curiosities: [
        {
          iconName: "Globe",
          title: "Trilingual Sales Execution",
          category: "Languages & Culture",
          description: "Fluent in English, Italian, and Spanish. Able to negotiate, pitch, and build authentic rapport with European decision-makers in their native tongue.",
          detail: "Lived and worked across the UK, Italy (Rome), Argentina, and Spain, developing native cultural agility and zero communication friction."
        },
        {
          iconName: "Flame",
          title: "Athletic Conditioning & Longevity",
          category: "High Performance",
          description: "Former elite rugby competitor and certified personal trainer. I apply sports science, recovery protocols, and intense physical discipline to stay sharp in high-demand sales cycles.",
          detail: "Every morning starts with structured physical training and cold exposure, building the mental clarity necessary to execute 50+ prospect touches with maximum focus."
        },
        {
          iconName: "Cpu",
          title: "Continuous Tech Experimentation",
          category: "Tech Curiosity",
          description: "From scripting custom Python scrapers to testing modern web frameworks, I'm never satisfied with being a surface-level sales rep. I understand how software actually works under the hood.",
          detail: "Building Streamlit tools, experimenting with PostgreSQL queries, and exploring generative AI tools to automate repetitive sales tasks."
        },
        {
          iconName: "Compass",
          title: "Global Adaptability & Tenacity",
          category: "Global Mindset",
          description: "Transitioned between 4 different countries and diverse locker rooms / corporate environments. Quick to adapt to new cultures, organizational structures, and unexpected challenges.",
          detail: "Moving to Rome, England, and Madrid taught me to find common ground immediately with people from any background or seniority level."
        }
      ]
    },
    contact: {
      badge: "Get in Touch",
      title: "Let's Discuss Pipeline, Sales Execution & Tech Opportunities",
      description: "I am actively interviewing for BDM and Account Executive roles in Madrid or fully remote. Reach out via email, phone, or LinkedIn.",
      emailLabel: "Primary Email",
      phoneLabel: "Mobile / WhatsApp",
      phoneType: "Call / WA",
      linkedinLabel: "LinkedIn Profile",
      locationNote: "Location: Madrid, Spain (Central European Time · CET)",
      responseNote: "Response Time: Typically within 24 hours",
      availNote: "Availability: Immediate start for the right team",
      formTitle: "Send an Intro Note",
      formSubtitle: "Have an open BDM/AE requisition, a partnership proposal, or want to talk cloud & data? Leave a note below.",
      nameLabel: "Your Name",
      namePlaceholder: "e.g. Elena Rossi",
      emailPlaceholder: "elena@company.com",
      subjectLabel: "Subject / Topic",
      subjectOptions: ["BDM / AE Opportunity", "Software Sales Advisory", "Data & Cloud Discussion", "General Conversation"],
      messageLabel: "Message",
      messagePlaceholder: "Hi Nicolas, I saw your portfolio and would like to talk about an open Account Executive position on our team...",
      submitButton: "Send Intro Message",
      submittingButton: "Sending Message...",
      directNotice: "Direct delivery to nico.coronel@protonmail.com",
      successTitle: "Message Sent Successfully!",
      successMessage: "Thank you for reaching out. Your message has been sent directly to nico.coronel@protonmail.com. Nicolas will respond to your email shortly.",
      sendAnother: "Send another note",
      errorTitle: "Submission Inconvenience",
      errorMessage: "Could not connect to the automatic dispatch service. You can send your note directly using your email client.",
      retryButton: "Retry Submission",
      mailtoAlternative: "Send directly via Email App"
    },
    dock: {
      availableText: "Available for BDM / AE Roles",
      directTitle: "Direct Contact",
      copiedNotice: "Copied!",
      callWa: "Call / WA",
      linkedin: "LinkedIn Profile",
      jumpTitle: "Portfolio Jump Links",
      location: "Madrid, Spain · Open to Relocation / Remote",
      contactButton: "Contact",
      menuLabel: "Menu",
      closeLabel: "Close"
    },
    footer: {
      tagline: "BDM & Account Executive · Software, Data & High-Performance Athletic Mindset",
      top: "Top"
    }
  },
  es: {
    nav: {
      about: "Portfolio",
      actualidad: "Actualidad (Huboo)",
      career: "Vida Profesional",
      sports: "Rugby Pro & Liderazgo",
      projects: "Proyectos & Sistemas",
      education: "Estudios & Curiosidades",
      contact: "Contacto",
      getInTouch: "Contactar"
    },
    hero: {
      statusAvailable: "Disponible para Roles BDM y AE",
      location: "Madrid, España y Remoto",
      languages: "Inglés · Italiano · Español",
      headline: "B2B Sales & Business Development Manager | Ex Atleta Profesional",
      subheadline: "Especializado en desarrollo de pipeline y ejecución integral de acuerdos end-to-end. Crecimiento acelerado en Huboo Technologies gracias a la superación constante de cuota y estrategias de ventas basadas en datos. Aporta 10 años de disciplina en deporte de élite, resiliencia y una mentalidad práctica a la generación de ingresos. Multilingüe (EN/ES/IT), afincado en Madrid y preparado para abrir puertas de alto valor en entornos tecnológicos de alto ritmo.",
      badgeAws: "AWS Cloud Quest (3er Puesto)",
      badgeData: "Ciencia de Datos y Pipelines ETL",
      badgeRugby: "10 Años de Deporte Profesional",
      ctaContact: "Contactar a Nicolás",
      ctaCareer: "Ver Trayectoria Profesional",
      ctaRugby: "Rugby y Liderazgo →",
      profileRole: "BDM & Account Executive · Ex Atleta Profesional",
      stat1Label: "Años de Deporte Profesional",
      stat1Context: "Rugby de Élite Europeo y Seven",
      stat2Label: "Idiomas Fluidos",
      stat2Context: "ES · EN · IT Ventas internacionales",
      stat3Label: "AWS Cloud Quest",
      stat3Context: "Bases de datos y arquitectura Cloud",
      stat4Label: "Ventas Basadas en Datos",
      stat4Context: "Dominio de Python y SQL ETL"
    },
    actualidad: {
      badge: "Huboo Technologies",
      title: "Huboo Technologies · Software Comercial Propio",
      subtitle: "Ventas de Fulfillment y Logística para E-commerce",
      company: "Huboo",
      role: "Business Development Manager (BDM)",
      description: "Herramientas desarrolladas para optimizar la prospección outbound y acelerar la entrega de propuestas comerciales.",
      whyBuiltTitle: "",
      whyBuiltText: "",
      privacyBadge: "",
      privacyNotice: "",
      privacyToggleOn: "",
      privacyToggleOff: "",
      clickToExpand: "Haz clic en la imagen para ampliar en pantalla completa",
      apps: [
        {
          id: "lista-outbound",
          name: "Lista Outbound",
          filename: "lista outbound.jpg",
          tag: "Prospección Outbound e Inteligencia de Leads",
          badge: "App de Prospección",
          description: "Panel de prospección interna diseñado para identificar, cualificar y organizar marcas de e-commerce con alto potencial para la red de fulfillment europeo de Huboo.",
          problemSolved: "La prospección manual en LinkedIn y webs requería demasiado tiempo y carecía de filtrado rápido por volumen mensual estimado de pedidos.",
          features: [
            "Segmentación algorítmica de ICP por catálogo de productos y volumen de envíos",
            "Directorio de contactos clave con decisores verificados de e-commerce",
            "Programación de cadencias y seguimiento del estado de cada contacto en tiempo real",
            "Sincronización ágil sin fricción de datos manuales hacia el CRM"
          ],
          impact: [
            "Multiplicación x3 de contactos outbound cualificados semanales",
            "Eliminación total del error humano en registro de leads",
            "Mayor tasa de reuniones conseguidas gracias a ganchos de valor a medida"
          ]
        },
        {
          id: "lista-propuestas",
          name: "Lista Propuestas",
          filename: "lista propuestas.jpg",
          tag: "Generador de Tarifas y Cierre de Acuerdos",
          badge: "App de Propuestas",
          description: "Suite interna para calcular tarifas de almacenaje, picking, paquetería y márgenes comerciales, permitiendo presentar ofertas a medida en minutos.",
          problemSolved: "Las tarifas de logística involucran múltiples variables (peso, dimensiones, destinos de envío, mensajerías) que solían demorar entre 24 y 48 horas en redactarse.",
          features: [
            "Calculadora dinámica de costes logísticos en centros de Reino Unido y Europa",
            "Control automático de margen comercial y descuentos por volumen de envíos",
            "Pipeline centralizado para monitorizar propuestas enviadas, dudas y cierres",
            "Generación inmediata de ofertas claras y profesionales para el cliente"
          ],
          impact: [
            "Tiempo de entrega de propuesta reducido de 48h a menos de 15 minutos",
            "100% de precisión en márgenes sin errores de cálculo",
            "Mayor tasa de cierre gracias a la inmediatez en la respuesta comercial"
          ]
        }
      ]
    },
    career: {
      badge: "Trayectoria Profesional",
      title: "Venta Consultiva de Software y Operaciones de Datos",
      description: "Desde negociaciones inmobiliarias de alto valor en Madrid hasta venta de software SaaS y UX/UI en Betterplace, mi perfil combina prospección incansable con rigor analítico y científico.",
      playbookTag: "Metodología Interactiva",
      playbookTitle: "Mi Metodología Integral como BDM y Account Executive",
      playbookSubtitle: "Haz clic en cada fase para ver cómo combino el análisis técnico con la persuasión consultiva.",
      stageLabel: "Fase",
      deliverablesLabel: "Entregables Clave:",
      playbookStages: [
        {
          title: "01. Prospección de Alto Impacto",
          role: "Definición de ICP y Descubrimiento",
          description: "Combinación de señales de intención de compra, análisis de stack tecnológico y contacto multicanal (LinkedIn, teléfono y email). Cada mensaje aborda el cuello de botella específico del prospecto.",
          deliverables: ["Ganchos de valor a medida", "Cadencia multitoque (email, teléfono, red social)", "Agendas de descubrimiento orientadas a ROI"]
        },
        {
          title: "02. Enriquecimiento de Datos y ETL",
          role: "Operaciones de Ventas e Higiene de Datos",
          description: "Desarrollo de scripts en Python y SQL para limpiar, normalizar y enriquecer listas de leads antes de integrarlas al CRM, eliminando errores manuales y afinando el scoring de oportunidades.",
          deliverables: ["Deduplicación automática en CRM", "Datos firmográficos enriquecidos", "Métricas de pipeline claras y limpias"]
        },
        {
          title: "03. Demos Consultivas UX/UI",
          role: "Demostración de Valor",
          description: "Presentaciones enfocadas en el impacto del negocio y la reducción de fricción del usuario final, no en simples paseos de funcionalidades. Mostrando mejoras de conversión cuantificables.",
          deliverables: ["Prototipos interactivos a medida", "Comparativas de benchmark", "Alineación y consenso de directivos"]
        },
        {
          title: "04. Cierre y Planes de Acción Mutua",
          role: "Plan de Acción Mutuo (MAP)",
          description: "Acompañamiento del prospecto en las fases legal, técnica y de compras con cronogramas claros. Detección de objeciones implícitas para acelerar la firma del contrato.",
          deliverables: ["Planes de acción conjunta (MAP)", "Consenso entre múltiples decisores", "Transición ordenada a Customer Success"]
        }
      ],
      historyTitle: "Historial de Empleo y Asesoramiento",
      skillsLabel: "Competencias:",
      skillsMatrixTitle: "Competencias Clave y Herramientas",
      jobs: [
        {
          id: "betterplace",
          role: "SDR & Account Executive",
          company: "Betterplace",
          location: "Oviedo y Remoto, España",
          period: "2024",
          type: "Venta de Software & Tech",
          summary: "Liderazgo en adquisición de clientes y descubrimiento para soluciones UX/UI avanzadas, impulsando además flujos de datos y ETL para el equipo de ventas.",
          achievements: [
            "Generación constante de pipeline calificado mediante campañas outbound dirigidas a decisores corporativos.",
            "Realización de demostraciones de producto de alto impacto demostrando mejoras directas en conversión UX/UI.",
            "Automatización de procesos ETL y saneamiento de CRM en Python/SQL, reduciendo errores manuales y optimizando lead scoring.",
            "Colaboración estrecha con equipos de producto para trasladar las necesidades del cliente al roadmap de desarrollo."
          ],
          skills: ["Prospección Outbound", "Demos SaaS", "Gestión de Pipeline", "Procesos ETL", "Python y SQL", "HubSpot / CRM"]
        },
        {
          id: "tecnocasa",
          role: "Consultor Inmobiliario y Negociador",
          company: "Tecnocasa",
          location: "Madrid, España",
          period: "2023 - 2024",
          type: "Ventas de Alto Ticket",
          summary: "Gestión de negociaciones residenciales complejas, valoración de activos y cierre de transacciones en uno de los distritos más competitivos de Madrid.",
          achievements: [
            "Acompañamiento a clientes en compraventa de inmuebles de alto valor, cerrando operaciones bajo estrictos marcos normativos.",
            "Diseño de metodologías ETL para procesar datos de mercado, históricos de precios e índices de demanda para tasaciones precisas.",
            "Más del 95% de satisfacción de clientes gracias a un trato consultivo y transparente desde la primera visita hasta la firma notarial."
          ],
          skills: ["Negociación de Alto Nivel", "Análisis de Valoraciones", "Investigación de Mercado", "Cierre Contractual", "Fidelización de Clientes"]
        },
        {
          id: "rivadavia",
          role: "Asistente Administrativo y Asesor de Seguros",
          company: "Rivadavia Seguros",
          location: "Argentina",
          period: "2022 - 2023",
          type: "Servicios Financieros y Riesgos",
          summary: "Asesoramiento, gestión y administración de pólizas en ramos de Vida, Salud, Responsabilidad Civil y Automotores.",
          achievements: [
            "Gestión integral de carteras de clientes con auditoría impecable y cumplimiento riguroso de normativas aseguradoras.",
            "Análisis de perfiles de riesgo para estructurar pólizas a medida de las necesidades patrimoniales del asegurado.",
            "Agilización de procesos en siniestros, reduciendo los tiempos de respuesta y liquidación para los asegurados."
          ],
          skills: ["Evaluación de Riesgo", "Asesoramiento de Pólizas", "Cumplimiento Normativo", "Resolución de Siniestros", "Retención de Clientes"]
        },
        {
          id: "elite-round",
          role: "Entrenador Personal y Encargado de Sala",
          company: "Elite Round Club",
          location: "Roma, Italia",
          period: "2018 - 2020",
          type: "Alto Rendimiento Deportivo",
          summary: "Supervisión de sala de entrenamiento, fidelización de nuevos socios y diseño de planes de alto rendimiento en Roma en italiano fluido.",
          achievements: [
            "Acompañamiento a nuevos socios con un aumento superior al 30% en conversiones a membresías de largo plazo.",
            "Aplicación de metodologías del rugby profesional para profesionales con alta exigencia laboral.",
            "Gestión operativa de instalaciones, turnos de equipo e iniciativas de fidelización."
          ],
          skills: ["Liderazgo de Equipos", "Onboarding de Clientes", "Italiano Fluido", "Preparación Física", "Fidelización"]
        }
      ],
      skillsCategories: [
        {
          category: "Ventas y Estrategia",
          items: ["Prospección Outbound", "Descubrimiento y MEDDIC", "Presentación Consultiva", "Manejo de Objeciones", "Negociación Avanzada", "Higiene de Pipeline en CRM"]
        },
        {
          category: "Datos y Cloud",
          items: ["Python (Pandas, Scikit-Learn)", "SQL (PostgreSQL)", "AWS Cloud (EC2, RDS, IAM)", "Ingeniería de Pipelines ETL", "Power BI y Plotly", "Docker y APIs"]
        },
        {
          category: "Liderazgo y Aptitudes",
          items: ["Toma de Decisiones bajo Presión", "Alineación Interdepartamental", "Trilingüe (ES, EN, IT)", "Resiliencia Deportiva", "Gestión Ágil de Proyectos"]
        }
      ]
    },
    sports: {
      badge: "Liderazgo Deportivo y Rugby Pro",
      title: "10 Años de Rugby Profesional en Europa",
      description: "Una década compitiendo en el más alto nivel del rugby europeo y en el circuito internacional de Seven. El deporte forjó mi resiliencia mental, claridad táctica bajo extrema presión y capacidad de cohesionar equipos diversos hacia una meta colectiva.",
      period: "2013 - 2023 · 10 Años",
      countries: "Italia · Inglaterra · España · Polonia",
      galleryTitle: "Momentos Clave y Partidos de Alta Exigencia",
      galleryHint: "Haz clic en la foto para verla en pantalla completa",
      galleryItems: [
        {
          url: "/assets/Nico vs NZ.png",
          title: "Duelo Internacional de Seven vs. New Zealand All Blacks",
          caption: "Compitiendo contra el equipo más dominante del rugby mundial (All Blacks Sevens). Máxima exigencia física, táctica y mental en el escenario global."
        },
        {
          url: "/assets/SEVEN-volando-transformed.png",
          title: "Duelo Aéreo en el Circuito de Sevens",
          caption: "Compromiso aéreo total en una posesión decisiva del torneo. Reflejo de esfuerzo físico absoluto, potencia de salto y foco inquebrantable en asegurar el balón."
        }
      ],
      principlesTag: "Mentalidad Deportiva Aplicada a Ventas",
      principlesTitle: "Cómo la Competición de Élite Impulsa Resultados Comerciales Extraordinarios",
      principlesSubtitle: "El deporte profesional me inculcó los hábitos mentales que permiten a los mejores comerciales destacar en ciclos de venta prolongados.",
      principles: [
        {
          title: "Resiliencia e Inmunidad al Rechazo",
          description: "En el rugby y en la venta de software, los reveses ocurren a diario. Lo que define a los ganadores es la velocidad de recuperación y la constancia en el proceso."
        },
        {
          title: "Toma de Decisiones en Fracciones de Segundo",
          description: "Leer una defensa en 0.5 segundos es idéntico a leer a un prospecto escéptico en una reunión: observar el lenguaje no verbal, anticipar objeciones y adaptarse al instante."
        },
        {
          title: "El Equipo por Encima del Ego",
          description: "El rugby no se gana en solitario. Los mejores profesionales potencian a sus compañeros, se comunican con absoluta claridad y celebran el éxito conjunto."
        },
        {
          title: "Preparación Obsesiva",
          description: "Los partidos se ganan de lunes a viernes en el análisis de vídeo y en los entrenamientos. Los contratos se cierran gracias a la investigación minuciosa de cada cuenta."
        }
      ]
    },
    projects: {
      badge: "Ingeniería y Sistemas",
      title: "Ciencia de Datos, Machine Learning y Sistemas Interactivos",
      description: "Aplicaciones prácticas desarrolladas con Python, SQL, Streamlit y PostgreSQL. Mostrando cómo la solvencia técnica elimina la brecha entre la ingeniería de software y el negocio comercial.",
      interactiveProof: "Demostración Interactiva",
      problemTitle: "El Problema de Negocio",
      solutionTitle: "La Solución Técnica",
      architectureTitle: "Arquitectura e Ingeniería:",
      stackLabel: "Stack:",
      screenshotsTitle: "Capturas de Pantalla",
      clickToZoom: "Clic para ampliar",
      playgroundTitle: "Entorno Interactivo en Vivo",
      playgroundBadge: "Interactivo",
      items: [
        {
          id: "wayness",
          tabLabel: "Start-up Wayness",
          title: "Start-up Wayness: Equilibrio entre Deber y Placer",
          subtitle: "Motor de Recompensas de Hábitos Saludables con Machine Learning",
          category: "Ciencia de Datos y Start-up",
          description: "Plataforma de inicio diseñada para motivar hábitos sostenibles equilibrando tareas diarias con recompensas de ocio mediante un sistema de puntuación algorítmico.",
          problem: "Las apps de hábitos fracasan por planes de recompensa estáticos y desconectados de la fatiga real del usuario y su carga semanal.",
          solution: "Desarrollo de un calculador predictivo en Streamlit que evalúa la dificultad subjetiva, asigna puntos dinámicos y registra la adherencia a largo plazo.",
          architecture: [
            "Modelos de clasificación y regresión en Scikit-Learn para estimar la fricción",
            "Algoritmo de puntuación dinámico con atenuación por fatiga",
            "Aplicación web interactiva en Streamlit con componentes receptivos",
            "Persistencia en base de datos PostgreSQL para analítica de progreso"
          ],
          stack: ["Python", "Streamlit", "Scikit-Learn", "Pandas", "NumPy", "PostgreSQL"],
          images: [
            {
              url: "/assets/puntosWayness.jpg",
              caption: "Motor de puntos con Machine Learning en Wayness: cálculo dinámico según dificultad de la tarea."
            },
            {
              url: "/assets/waynessWeb.jpg",
              caption: "Interfaz y landing page de Wayness: panel para registro de hábitos y canje de puntos."
            }
          ]
        },
        {
          id: "chatbot",
          tabLabel: "Chatbot NLP",
          title: "Asistente Virtual con Detección de Intenciones",
          subtitle: "NLP Conversacional con Persistencia en PostgreSQL",
          category: "NLP e IA Conversacional",
          description: "Asistente inteligente diseñado para clasificar consultas de clientes, responder preguntas frecuentes y almacenar transcripciones en base de datos para soporte.",
          problem: "Los equipos de soporte y ventas pierden horas atendiendo dudas repetitivas que un bot contextual puede resolver al instante.",
          solution: "Pipeline de NLP con tokenización y stemming (NLTK) conectado a PostgreSQL en Render para guardar historial y generar cuadros de analítica de consultas.",
          architecture: [
            "Clasificación de intenciones y tokenización con Natural Language Toolkit (NLTK)",
            "Esquema relacional en PostgreSQL para almacenar transcripciones y nivel de confianza",
            "Interfaz interactiva en Streamlit con lógica de derivación a agentes humanos",
            "Panel de analítica visual que grafica volumen de preguntas y motivos recurrentes"
          ],
          stack: ["Streamlit", "PostgreSQL", "NLTK", "Python", "Plotly", "Render"],
          images: [
            {
              url: "/assets/chaty.jpg",
              caption: "Interfaz conversacional del chatbot: resolución en tiempo real de consultas con memoria."
            },
            {
              url: "/assets/graf.jpg",
              caption: "Panel de analítica de conversaciones: visualización de volumen e intenciones en PostgreSQL."
            }
          ]
        },
        {
          id: "data-viz",
          tabLabel: "EDA Financiero",
          title: "Dashboard de Análisis Financiero y Cripto (EDA)",
          subtitle: "Analítica en Tiempo Real y Análisis Exploratorio de Datos",
          category: "Analítica Financiera y BI",
          description: "Panel interactivo desplegado en Render para monitorizar volatilidad de criptoactivos (BTC EDA), volúmenes de órdenes y métricas conectadas a PostgreSQL.",
          problem: "Los datos financieros crudos son difíciles de interpretar rápidamente para tomar decisiones estratégicas de compra o cobertura.",
          solution: "Creación de un cuadro de mandos con Plotly y Streamlit que calcula medias móviles, bandas de volatilidad y distribución geográfica de flujos.",
          architecture: [
            "Procesos ETL automatizados para ingesta de velas y transacciones",
            "Gráficos interactivos en Plotly con zoom, pan y filtrado temporal",
            "Despliegue cloud en Render con monitorización continua de contenedores"
          ],
          stack: ["Python", "Plotly", "Streamlit", "PostgreSQL", "Pandas", "Render"],
          images: [
            {
              url: "/assets/EDA.jpg",
              caption: "Dashboard de Análisis Exploratorio de Datos sobre Bitcoin: tendencias, medias y volatilidad."
            }
          ]
        },
        {
          id: "map-viz",
          tabLabel: "Mapas Folium",
          title: "Mapa Geoespacial de Voluntariados y Campamentos",
          subtitle: "Inteligencia de Localización Interactiva con Streamlit y Folium",
          category: "Ingeniería de Datos Geoespaciales",
          description: "Herramienta cartográfica para que voluntarios y viajeros exploren ubicaciones de campamentos y programas verificados mediante filtros interactivos.",
          problem: "La información de ONGs y campamentos estaba dispersa en hojas de cálculo sin proximidad espacial ni rutas visuales.",
          solution: "Consolidación de bases geolocalizadas en un mapa interactivo con Folium en Streamlit, donde cada marcador ofrece metadatos y enlaces directos.",
          architecture: [
            "Motor cartográfico Folium basado en Leaflet",
            "Algoritmo de clustering para agrupar marcadores en zonas de alta densidad",
            "Popups con detalles logísticos y enlaces de solicitud a programas"
          ],
          stack: ["Python", "Folium", "Streamlit", "PostgreSQL", "OpenStreetMap API"],
          images: [
            {
              url: "/assets/map.jpg",
              caption: "Mapa geoespacial interactivo con puntos geocodificados de programas de voluntariado y acampada."
            }
          ]
        },
        {
          id: "battleship",
          tabLabel: "Hundir la Flota",
          title: "Juego Algorítmico de Batalla Naval en Consola",
          subtitle: "Lógica Algorítmica, Control de Flujo y Estructuras de Datos",
          category: "Fundamentos de Software",
          description: "Simulador de Hundir la Flota desarrollado para dominar control de flujo limpio, matrices 2D, detección de colisiones y posicionamiento aleatorio de naves.",
          problem: "Construir bucles de juego interactivos en consola que validen coordenadas complejas y estados sin provocar fallos de ejecución.",
          solution: "Funciones modulares con gestión rigurosa de errores, renderizado ordenado del tablero y arquitectura preparada para migrar a interfaz gráfica OOP.",
          architecture: [
            "Sistema matricial 2D para registrar disparos e impactos de jugador y máquina",
            "Algoritmo de colocación de flota sin superposición de barcos",
            "Máquina de estados por turnos con validación de entradas de coordenadas"
          ],
          stack: ["Python 3", "Estructuras de Datos", "Computación Matricial", "Arquitectura CLI"],
          images: [
            {
              url: "/assets/hundirLaFlota.png",
              caption: "Tablero de Batalla Naval en consola con coordenadas, impactos, aguas y estado de la flota."
            }
          ]
        }
      ],
      waynessCalc: {
        instruction: "Prueba el modelo de asignación dinámica de puntos:",
        frictionLabel: "Fricción Mental / Física de la Tarea (1-5):",
        frequencyLabel: "Frecuencia de Compromiso (Días/Semana):",
        daysUnit: "días",
        resultTitle: "Puntos Calculados de Recompensa",
        resultSubtitle: "Equilibrio entre Deber y Placer"
      },
      chatbotSim: {
        instruction: "Simulación de clasificación de intenciones y memoria en PostgreSQL:",
        presets: ["Precios y planes", "Agendar demo con Nico", "Arquitectura técnica"],
        loggedBanner: "[✓] Registro guardado en tabla postgres_sessions"
      },
      edaSim: {
        instruction: "Métricas simuladas desde la base de datos PostgreSQL en Render:",
        stat1Title: "Volatilidad BTC 30D",
        stat2Title: "Latencia de Ingesta ETL",
        note: "Pipeline continuo en Render sincronizando agregados cada 15 minutos."
      },
      mapSim: {
        instruction: "Índice de coordenadas de campamentos geocodificados:",
        coords: "Coordenadas: 40.4168° N, 3.7038° O (Base en Madrid)",
        stats: "Total de marcadores procesados: 84 puntos verificados en Europa"
      },
      battleshipSim: {
        instruction: "Selecciona una coordenada para disparar un torpedo a la matriz:",
        hitMessage: "¡IMPACTO DIRECTO en sección del Portaaviones en",
        missMessage: "Agua — Disparo fallido en"
      }
    },
    education: {
      badge: "Formación Académica y Curiosidades",
      title: "Estudios, Certificaciones Cloud e Inquietudes Intelectuales",
      description: "Aprendizaje técnico continuo sumado a una curiosidad insaciable por entender sistemas, idiomas y alto rendimiento humano.",
      degreesTitle: "Titulaciones, Certificaciones Cloud y Programas de Inmersión",
      verifyCredly: "Verificar en Registro Oficial Credly",
      curiositiesTag: "Mentalidad de Crecimiento",
      curiositiesTitle: "Curiosidades, Multilingüismo y Disciplina Diaria",
      curiositiesSubtitle: "Lo que alimenta mi energía más allá de los pipelines de ventas: adaptación intercultural, resistencia deportiva y experimentación con código.",
      trilingualTag: "Capacidad Trilingüe Interactiva",
      trilingualTitle: "Escucha mi Propuesta de Valor en 3 Idiomas",
      contextLabel: "Contexto: ",
      degrees: [
        {
          id: "aws-cloud",
          title: "AWS Certified Cloud Practitioner y Cloud Quest",
          institution: "Amazon Web Services (AWS)",
          location: "Remoto",
          year: "2025",
          description: "Dominio práctico de servicios centrales de AWS, seguridad IAM, instancias EC2 y configuración de bases de datos relacionales (RDS/DynamoDB). Participación en el reto AWS Cloud Quest obteniendo un destacado 3er puesto por resolución de problemas en entornos reales de nube.",
          hasCredly: true,
          highlights: [
            "3er Puesto en la competición AWS Cloud Quest de resolución de incidencias",
            "Configuración práctica de bases de datos y subredes VPC",
            "Insignia digital oficial verificada en Credly"
          ]
        },
        {
          id: "big-data",
          title: "Big Data y Analítica a Gran Escala",
          institution: "Virensis",
          location: "Madrid, España",
          year: "2024",
          description: "Programa avanzado centrado en computación distribuida, ingesta de grandes volúmenes de datos, arquitectura de pipelines ETL y almacenamiento empresarial.",
          highlights: [
            "Diseño de flujos de ingesta para conjuntos de datos multi-gigabyte",
            "Optimización de consultas en motores relacionales y columnares",
            "Aplicación de marcos modernos de ingeniería de datos al negocio"
          ]
        },
        {
          id: "data-science",
          title: "Inmersión en Ciencia de Datos y Machine Learning",
          institution: "The Bridge / Digital Talent",
          location: "Madrid, España",
          year: "2024",
          description: "Bootcamp intensivo de data science: modelado predictivo de principio a fin en Python, consultas complejas en SQL, análisis exploratorio, ingeniería de variables, Scikit-Learn y despliegue en Streamlit.",
          highlights: [
            "Modelos predictivos en producción a partir de datos reales",
            "Dominio de funciones ventana en SQL, uniones complejas e índices",
            "Desarrollo de scripts ETL automatizados y dashboards analíticos"
          ]
        },
        {
          id: "macroeconomics",
          title: "Macroeconomía y Política Monetaria Global",
          institution: "Saylor Academy",
          location: "Online",
          year: "2023",
          description: "Comprensión de los motores macroeconómicos: PIB, ciclos inflacionarios, dinámicas de empleo, tipos de interés de bancos centrales y su impacto en mercados tecnológicos.",
          highlights: [
            "Análisis del impacto macroeconómico en presupuestos B2B tecnológicos",
            "Comprensión de fluctuaciones de divisas y liquidez internacional"
          ]
        },
        {
          id: "sport-management",
          title: "Gestión Deportiva y Administración Atlética",
          institution: "Universidad Europea del Atlántico",
          location: "España",
          year: "2016 - 2017",
          description: "Estudio de gestión de entidades deportivas, patrocinio, operativa de eventos de alta competición y dinámicas de grupo.",
          highlights: [
            "Marketing deportivo y acuerdos de patrocinio",
            "Gestión organizativa en entornos deportivos de élite"
          ]
        },
        {
          id: "sap",
          title: "Sistemas ERP SAP",
          institution: "LOGALI Group",
          location: "Online",
          year: "2024",
          description: "Conocimiento práctico de arquitecturas ERP empresariales, gobierno de datos maestros, módulos de ventas y distribución, y flujos corporativos.",
          highlights: [
            "Mapeo de procesos ERP y datos maestros",
            "Coordinación interdepartamental en entornos multinacionales"
          ]
        }
      ],
      curiosities: [
        {
          iconName: "Globe",
          title: "Venta Trilingüe sin Barreras",
          category: "Idiomas y Cultura",
          description: "Fluidez nativa o profesional en Español, Inglés e Italiano. Capacidad de negociar, presentar y construir confianza con decisores de toda Europa en su propia lengua.",
          detail: "Experiencia viviendo y trabajando en Reino Unido, Italia (Roma), Argentina y España, con una adaptabilidad cultural innata."
        },
        {
          iconName: "Flame",
          title: "Acondicionamiento Físico y Longevidad",
          category: "Alto Rendimiento",
          description: "Exjugador profesional de rugby y entrenador titulado. Aplico ciencia deportiva, descanso activo y disciplina rigurosa para mantener el máximo nivel de energía en ventas.",
          detail: "Cada mañana comienza con entrenamiento de fuerza y exposición al frío, manteniendo la mente despejada para ejecutar decenas de contactos comerciales con foco."
        },
        {
          iconName: "Cpu",
          title: "Curiosidad Tecnológica Práctica",
          category: "Tecnología y Código",
          description: "Desde crear scrapers en Python hasta probar frameworks web modernos, no me conformo con ser un comercial teórico: entiendo cómo funciona el software por dentro.",
          detail: "Desarrollo herramientas en Streamlit, optimizo consultas en PostgreSQL y aprovecho modelos de IA para eliminar tareas mecánicas en ventas."
        },
        {
          iconName: "Compass",
          title: "Adaptabilidad y Tenacidad Global",
          category: "Mentalidad Internacional",
          description: "Adaptado a 4 países distintos, conviviendo con vestuarios y equipos corporativos multidisciplinares. Facilidad para integrarme rápido a cualquier cultura.",
          detail: "Vivir en Roma, Inglaterra y Madrid me enseñó a encontrar puntos de conexión inmediatos con personas de cualquier nivel jerárquico."
        }
      ]
    },
    contact: {
      badge: "Contacto",
      title: "Hablemos de Pipeline, Ejecución Comercial y Nuevos Desafíos",
      description: "Disponible activamente para incorporarme como BDM o Account Executive en Madrid o en modalidad 100% remota.",
      emailLabel: "Correo Principal",
      phoneLabel: "Móvil / WhatsApp",
      phoneType: "Llamar / WA",
      linkedinLabel: "Perfil de LinkedIn",
      locationNote: "Ubicación: Madrid, España (Zona horaria CET)",
      responseNote: "Tiempo de respuesta: Habitualmente en menos de 24 horas",
      availNote: "Disponibilidad: Incorporación inmediata para el proyecto adecuado",
      formTitle: "Envíame un Mensaje",
      formSubtitle: "¿Tienes una vacante de BDM/AE, una propuesta comercial o quieres hablar de Cloud y datos? Déjame una nota aquí.",
      nameLabel: "Tu Nombre",
      namePlaceholder: "ej. Elena Rossi",
      emailPlaceholder: "elena@empresa.com",
      subjectLabel: "Asunto / Motivo",
      subjectOptions: ["Oportunidad BDM / AE", "Asesoría Comercial de Software", "Charla sobre Cloud y Datos", "Conversación General"],
      messageLabel: "Mensaje",
      messagePlaceholder: "Hola Nicolás, he visto tu portfolio y me gustaría comentar una posición abierta de Account Executive en nuestro equipo...",
      submitButton: "Enviar Mensaje",
      submittingButton: "Enviando mensaje...",
      directNotice: "Envío directo a nico.coronel@protonmail.com",
      successTitle: "¡Mensaje Enviado con Éxito!",
      successMessage: "Gracias por contactar. Tu mensaje ha sido transmitido directamente a nico.coronel@protonmail.com. Nicolás te responderá a tu correo en breve.",
      sendAnother: "Enviar otro mensaje",
      errorTitle: "Incidencia en el envío automático",
      errorMessage: "No se pudo conectar con el servidor de entrega automática. Puedes enviar tu mensaje directamente desde tu aplicación de correo habitual.",
      retryButton: "Reintentar Envío",
      mailtoAlternative: "Enviar directamente vía tu cliente de correo"
    },
    dock: {
      availableText: "Disponible para Roles BDM / AE",
      directTitle: "Contacto Directo",
      copiedNotice: "¡Copiado!",
      callWa: "Llamar / WA",
      linkedin: "Perfil de LinkedIn",
      jumpTitle: "Accesos Rápidos",
      location: "Madrid, España · Abierto a Remoto / Reubicación",
      contactButton: "Contacto",
      menuLabel: "Menú",
      closeLabel: "Cerrar"
    },
    footer: {
      tagline: "BDM & Account Executive · Software, Datos y Disciplina Deportiva de Élite",
      top: "Subir"
    }
  }
};
