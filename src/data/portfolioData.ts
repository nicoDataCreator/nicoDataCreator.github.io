import { JobExperience, RugbyMilestone, ProjectItem, EducationItem, CuriosityItem } from '../types';

export const PERSONAL_INFO = {
  name: "Nicolas Coronel",
  title: "B2B Sales & Business Development Manager | Ex-Professional Athlete",
  location: "Madrid, Spain",
  summary: "Specializing in pipeline development, and end-to-end deal execution. Fast-tracked at Huboo Technologies through consistent quota overperformance and data-driven sales strategies. Brings 10 years of elite sports discipline, resilience, and a hands-on mindset to revenue generation. Multilingual (EN/ES/IT), Madrid-based, and built to open high-value doors in fast-paced tech environments.",
  email: "nico.coronel@protonmail.com",
  phone: "+34 621 053 129",
  linkedin: "https://linkedin.com/in/nicolasjuancoronel",
  avatarUrl: "/assets/profile.jpg",
  languages: [
    { name: "English", level: "Fluent / Professional Working Proficiency" },
    { name: "Italian", level: "Fluent / Full Professional Bilingual (Rome residency)" },
    { name: "Spanish", level: "Native / Mother Tongue" },
  ],
  stats: [
    { value: "10+", label: "Years Pro Athletic Discipline", context: "European Elite Rugby" },
    { value: "3", label: "Fluent Languages", context: "EN · IT · ES Cross-border sales" },
    { value: "3rd", label: "Place AWS Cloud Quest", context: "Database & Cloud Architecture" },
    { value: "100%", label: "Data-Driven Deal Velocity", context: "Python & SQL ETL fluency" },
  ]
};

export const WORK_EXPERIENCE: JobExperience[] = [
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
    skills: ["Outbound Prospecting", "SaaS Demos", "Pipeline Management", "ETL Processes", "Python & SQL", "HubSpot / CRM"],
    methodology: {
      headline: "My Modern Sales & Data Playbook",
      points: [
        "Rigorous ICP segmentation using data enrichment prior to first touchpoint.",
        "Consultative discovery centered on business impact, ROI, and technical viability.",
        "Data-driven objection handling and closing with actionable UX benchmarks.",
        "Automated CRM logging to eliminate sales friction and maintain forecasting hygiene."
      ]
    }
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
    skills: ["High-Stakes Negotiation", "Valuation Analysis", "Market Research", "Contract Closing", "Client Relationship Management"],
    methodology: {
      headline: "Negotiation Under Friction",
      points: [
        "Uncover true buyer motivations beyond surface-level monetary positions.",
        "Establish win-win framing through accurate local market data.",
        "Proactive contingency planning to prevent last-minute deal fallout."
      ]
    }
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
];

export const RUGBY_EXPERIENCE: RugbyMilestone = {
  title: "Professional Rugby Player & Athletic Leadership",
  period: "2013 - 2023 · 10 Years",
  teams: "Competed across elite European clubs",
  countries: "Italy · England · Spain · Poland",
  description: "A decade competing at the highest tiers of European rugby and international Sevens. Professional rugby forged my mental resilience, tactical clarity under extreme duress, and ability to unite multidisciplinary teams around a shared, uncompromising goal.",
  takeaways: [
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
};

export const RUGBY_GALLERY = [
  {
    url: "/assets/Nico vs NZ.png",
    title: "International Sevens Clash vs. New Zealand All Blacks",
    caption: "Competing against the world's most dominant rugby franchise (New Zealand All Blacks Sevens). Testing preparation and speed on the global stage under extreme pressure.",
    aspect: "16:9"
  },
  {
    url: "/assets/SEVEN-volando-transformed.png",
    title: "Airborne High-Ball Contest in Sevens Circuit",
    caption: "Full aerial commitment during a crucial tournament possession. Exemplifies relentless physical effort, vertical athleticism, and unwavering focus on winning the ball.",
    aspect: "4:3"
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "wayness",
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
        caption: "Wayness Machine Learning points engine: dynamic calculation of reward allocation based on duty weight.",
        aspect: "16:9"
      },
      {
        url: "/assets/waynessWeb.jpg",
        caption: "Wayness web interface and landing page: user-facing dashboard for habit tracking and reward redemption.",
        aspect: "16:9"
      }
    ],
    interactiveType: "calculator"
  },
  {
    id: "chatbot",
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
        caption: "Chatbot conversation interface: real-time natural language query resolution with conversational memory.",
        aspect: "16:9"
      },
      {
        url: "/assets/graf.jpg",
        caption: "Conversation analytics dashboard: PostgreSQL-backed visualization of query intent clusters and frequency.",
        aspect: "16:9"
      }
    ],
    interactiveType: "simulation"
  },
  {
    id: "data-viz",
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
        caption: "Exploratory Data Analysis dashboard tracking Bitcoin price movements, trends, and volatility regimes.",
        aspect: "16:9"
      }
    ],
    interactiveType: "data"
  },
  {
    id: "map-viz",
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
        caption: "Geospatial intelligence map displaying geocoded volunteer programs and campsite locations across regions.",
        aspect: "16:9"
      }
    ],
    interactiveType: "map"
  },
  {
    id: "battleship",
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
        caption: "Console terminal rendering of Battleship board with coordinates, hits, misses, and fleet status.",
        aspect: "16:9"
      }
    ],
    interactiveType: "code"
  }
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    id: "aws-cloud",
    title: "AWS Certified Cloud Practitioner & Cloud Quest",
    institution: "Amazon Web Services (AWS)",
    location: "Remote",
    year: "2025",
    description: "Hands-on mastery of core AWS architecture, IAM security protocols, compute instances (EC2), and relational database configuration (RDS/DynamoDB). Competed in the AWS Cloud Quest Challenge, achieving an impressive 3rd place finish for practical problem-solving in live cloud environments.",
    credlyBadgeId: "9cf56a96-522a-40ee-aa59-aba1d829e52b",
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
];

export const CURIOSITIES: CuriosityItem[] = [
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
];

export const TECHNICAL_SKILLS = [
  { category: "Sales & Strategy", items: ["Outbound Prospecting", "Discovery & MEDDIC", "Consultative Pitching", "Objection Handling", "High-Stakes Negotiation", "CRM Pipeline Hygiene"] },
  { category: "Data & Cloud", items: ["Python (Pandas, Scikit-Learn)", "SQL (PostgreSQL)", "AWS Cloud (EC2, RDS, IAM)", "ETL Pipeline Engineering", "Power BI & Plotly", "Docker & APIs"] },
  { category: "Interpersonal & Leadership", items: ["High-Pressure Decision Making", "Cross-Functional Alignment", "Trilingual Fluency (EN, IT, ES)", "Athletic Resilience", "Agile Project Management"] }
];
