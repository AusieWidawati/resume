import {
    mobile,
    backend,
    web,
    creator,
    html,
    css,
    reactjs,
    redux,
    mongodb,
    git,
    optimum,
    UOB,
    mysql,
    rlanguage,
    tableau,
    stanford,
    kpmg,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "investment",
      title: "Investment",
    },
    {
      id: "community",
      title: "Community",
    },
    {
      id: "research",
      title: "Research",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "AI Product Builder",
      icon: web,
      description: "I build enterprise AI platforms that work in the real world. From RAG pipelines to LLM prompt engineering to UAT, I own the full product lifecycle and bridge the gap between business needs and technical delivery.",
    },
    {
      title: "Investment Thinker",
      icon: mobile,
      description: "Trained in finance and strategy at INSEAD, I evaluate opportunities with a commercial lens. From pricing models to deal screening, I understand how products create, capture, and compound value.",
    },
    {
      title: "Venture Community Builder",
      icon: backend,
      description: "I founded Friends Who Share, an AI and tech startup community in Singapore connecting founders, builders, and investors. I believe the best ideas emerge when the right people are in the same room.",
    },
    {
      title: "Geospatial Researcher",
      icon: backend,
      description: "I've modelled risk across 50+ hazard scenarios spanning floods, tsunamis, wind, and seismic events. My research background in spatial analytics and climate risk informs how I think about data, uncertaintys.",
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "R",
      icon: rlanguage,
    },
    {
      name: "Tableau",
      icon: tableau,
    },
  ];
  
const experiences = [
  {
    title: "Senior Associate Consultant",
    company_name: "KPMG Digital Village",
    icon: kpmg,
    iconBg: "#383E56",
    date: "Nov 2024 - Present",
    points: [
      // AI Product Management
      {
        short: "AI Product Lead on CLARA — full lifecycle ownership across 6 credit risk modules for APAC's largest MDB.",
        full: "Served as AI Product Lead on CLARA (Credit & Loan Analysis & Risk Assessment), an end-to-end AI credit risk screening platform built for APAC's largest multilateral development bank (MDB), owning the full product lifecycle across 6 modules: Borrower Profile & Peers, Country & Industry Insights, Credit Ratings, Financial Highlights, Loan Structuring, and Risks & Mitigants.",
        featured: true,
      },
      {
        short: "Owned requirements, acceptance criteria, and JIRA backlog across KPMG, the client, Moody's Analytics, and Evalueserve.",
        full: "Owned functional requirements, acceptance criteria, and definition of done for all 6 CLARA modules, managing a multi-vendor engineering backlog across KPMG developers, the client's data engineering team, Moody's Analytics, and Evalueserve via JIRA with Given/When/Then acceptance criteria standards.",
        featured: false,
      },
      {
        short: "Authored and refined LLM system prompts governing CLARA's reasoning, retrieval, and output across 4 deal structure types.",
        full: "Authored and iteratively refined LLM system prompts governing CLARA's reasoning, retrieval behavior, and output formatting, including transaction-type branching logic across Corporate Finance, Project Finance, Banks, and NBFI deal structures.",
        featured: false,
      },
      {
        short: "Led UAT and functional QA across DEV and UAT environments, coordinating defect resolution across 10+ engineers and analysts.",
        full: "Led UAT and functional QA across DEV and UAT environments, coordinating test execution and defect resolution across a multi-vendor team spanning 10+ engineers and analysts.",
        featured: false,
      },
      {
        short: "Built Responsible AI guardrail and 38-case test suite — zero hallucination failures in production.",
        full: "Designed and implemented a Responsible AI framework including a pre-retrieval LLM intent classification guardrail and a 38-case test suite across content safety, scope adherence, and hallucination resistance, ensuring CLARA met the client's auditability requirements for AI-assisted credit decisions.",
        featured: true,
      },
      // Data Engineering & Integrations
      {
        short: "Scoped backend data engineering tickets for peer deduplication, FX normalization, GICS classification, and AMR extraction pipelines.",
        full: "Scoped and authored data engineering JIRA tickets for CLARA's backend infrastructure including peer deduplication tables, LCY-to-USD currency normalization using IMF exchange rate data, GICS sub-industry classification fixes, and AMR document covenant extraction pipelines.",
        featured: false,
      },
      {
        short: "Managed live integrations with Moody's Analytics API and Evalueserve webhook for financial spreading and credit data.",
        full: "Managed live integrations with Moody's Analytics API for entity profiles, credit ratings, scorecard outputs, and sector outlooks, and Evalueserve webhook for financial ratio spreading including gross margin, total debt/EBITDA, and multi-year averages.",
        featured: false,
      },
      {
        short: "Designed pCRF field mapping schemas across Corporate Finance, Bank/NBFI, and Project Finance transaction types.",
        full: "Designed pCRF field mapping schemas across Corporate Finance, Bank/NBFI, and Project Finance transaction types, mapping preliminary Credit Risk Framework form fields to backend response payload paths for automated document generation.",
        featured: false,
      },
      // Climate & Disaster Risk Platform
      {
        short: "Led AI climate risk platform — global summit showcase to 5,000+, securing 60+ leads and 3 government MoUs.",
        full: "Led the geospatial data workstream for an AI-powered climate and disaster risk intelligence platform for APAC's largest multilateral development bank (MDB), delivering a successful showcase at a global summit attended by 5,000+ participants. Secured 60+ partnership leads and 3 signed MoUs with national governments.",
        featured: true,
      },
      {
        short: "Built AI disaster simulation tool enabling non-technical users to run GIS-comparable resilience planning scenarios.",
        full: "Developed an AI-enabled disaster simulation tool integrating LLMs with geospatial mapping capabilities, enabling non-technical users to run resilience planning scenarios comparable to GIS/QGIS workflows.",
        featured: false,
      },
      {
        short: "Built Digital Knowledge Navigator AI chatbot for the client, improving knowledge retrieval across enterprise document formats.",
        full: "Built a Digital Knowledge Navigator (DKN) AI chatbot for the client ingesting SharePoint and enterprise documents, improving institutional knowledge retrieval accuracy through metadata tagging architecture and chunking logic across varied document formats.",
        featured: false,
      },
      // Stakeholder & Delivery Management
      {
        short: "Engaged 40+ senior stakeholders — outcomes embedded in client's 2025-2028 digital resilience strategy.",
        full: "Engaged 40+ senior stakeholders across MDB departments, government ministries, and consultancies through solution demos and strategic visioning workshops, securing executive buy-in and embedding platform outcomes into the client's 2025-2028 digital resilience strategy.",
        featured: true,
      },
      {
        short: "Facilitated Director-level visioning workshops with the client, translating strategy into a multi-year use case roadmap.",
        full: "Facilitated platform visioning workshops with Director-level leadership at the client organisation, translating high-level strategic objectives into a structured use case roadmap adopted into the client's multi-year digital strategy.",
        featured: false,
      },
      {
        short: "Established JIRA conventions, bug reporting standards, and vendor communication templates across a multi-vendor delivery structure.",
        full: "Established bug reporting standards, JIRA ticket conventions, and vendor communication templates across a multi-vendor delivery structure, reducing ambiguity in bug reproduction and acceptance criteria handoffs.",
        featured: false,
      },
    ],
  },
  {
    title: "Business Analyst",
    company_name: "Anacle Systems",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "Jul 2024 - Nov 2024",
    points: [
      {
        short: "Led requirements gathering for Singapore's largest real estate statutory board, redesigning core business processes.",
        full: "Led stakeholder engagement and requirements gathering for Singapore's largest real estate statutory board client, redesigning business processes and translating them into technical specifications for enterprise inventory and key management systems.",
      },
      {
        short: "Conducted UAT and SIT across 120+ users, contributing to an SGD 400,000 revenue increase.",
        full: "Conducted UAT and SIT across 120+ users, identifying and resolving critical workflow gaps that resulted in enhanced software features and contributed to an SGD 400,000 revenue increase.",
      },
      {
        short: "Supported commercial proposals with tech infrastructure cost estimates for high-value software quotations.",
        full: "Supported commercial proposal development by estimating tech infrastructure and man-hour costs, contributing to pricing inputs for high-value software module quotations.",
      },
      {
        short: "Redesigned UI naming conventions based on UAT feedback, improving usability clarity across enterprise modules.",
        full: "Redesigned UI naming conventions based on UAT feedback, improving usability clarity across multiple enterprise system modules.",
      },
    ],
  },
  {
    title: "SMB Strategy and Planning Intern",
    company_name: "Grab (GrabAds)",
    icon: backend,
    iconBg: "#383E56",
    date: "Jan 2023 - May 2023",
    points: [
      {
        short: "Analysed 10,000+ food search queries in SQL to inform a revised keyword pricing model for GrabFood ads.",
        full: "Identified an opportunity to improve keyword pricing efficiency for GrabFood ads by analysing demand tier patterns across 10,000+ food search queries using SQL, informing a revised pricing classification model.",
      },
      {
        short: "Developed keyword bidding strategy projecting +US$41,000/month in ad revenue uplift for GrabAds.",
        full: "Developed a data-driven keyword bidding strategy that projected +US$41,000 per month in ad revenue uplift, directly supporting GrabAds monetization targets.",
      },
      {
        short: "Synthesised customer behaviour insights across 3 SEA markets for CRM, analytics, and marketing strategy.",
        full: "Synthesised customer behaviour insights across Indonesia, Malaysia, and Thailand markets, contributing to strategic plans adopted by CRM, analytics, and marketing teams.",
      },
      {
        short: "Produced merchant content including a press release published on Kompas, Indonesia's Tier 1 media outlet.",
        full: "Produced merchant-facing content including a monthly newsletter and a Grab Ramadan press release published on Kompas, a Tier 1 media outlet in Indonesia.",
      },
    ],
  },
  {
    title: "Associate Consultant",
    company_name: "Thrive Social Consulting (Conjunct Consulting)",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - Dec 2022",
    points: [
      {
        short: "Identified IT volunteerism awareness gap through 60+ stakeholder interviews, informing a targeted marketing strategy.",
        full: "Identified a gap in IT volunteerism awareness among university students through 60+ stakeholder interviews and surveys, providing the evidence base for a targeted marketing strategy.",
      },
      {
        short: "Developed marketing campaign proposal for 5,000 students, pitched directly to the CEO.",
        full: "Developed and delivered a marketing campaign proposal for a target audience of 5,000 university students, culminating in a pitch presentation directly to the CEO.",
      },
    ],
  },
  {
    title: "Research Scholar",
    company_name: "Stanford University x NTU",
    icon: stanford,
    iconBg: "#383E56",
    date: "Jan 2020 - Nov 2022",
    points: [
      {
        short: "Co-authored UN-contributed research publication on disaster risk modeling, achieving 81% prediction accuracy.",
        full: "Initiated and co-authored a UN-contributed research publication developing statistical models to estimate natural disaster risk with 81% accuracy, utilising regression and kriging techniques for spatial data analysis in R and QGIS.",
      },
      {
        short: "Contributed to multi-hazard disaster risk assessment across 220 scenarios for Pacific resilience planning.",
        full: "Contributed to a multi-hazard disaster risk assessment spanning 220 hazard scenarios including flooding, tsunami, wind, and seismic risk, supporting vulnerability and exposure analysis for resilience planning.",
      },
      {
        short: "Awarded NTU CY1400 Outstanding Research Award (A grade) for independent research excellence.",
        full: "Awarded the NTU CY1400 Outstanding Research Award with a grade of A for independent research excellence.",
      },
    ],
  },
];
  
  const projects = [
    {
      id: "navigator",
      name: "Navigator — Enterprise Generative AI Knowledge Engine",
      featured: true,
      description:
        "A secure, enterprise-grade AI knowledge platform built on Retrieval-Augmented Generation (RAG) and agentic reasoning to deliver accurate, contextual answers from internal data sources.",
      tags: [
        { name: "Next.js", color: "blue-text-gradient" },
        { name: "TypeScript", color: "green-text-gradient" },
        { name: "LangChain", color: "pink-text-gradient" },
      ],
      image: web,
      video: `${import.meta.env.BASE_URL}navigator-demo-compressed.mp4`,
      details: {
        duration: "Jan 2024 – Sep 2024",
        status: "Completed",
        demoLink:
          "https://holjnbrlgb237wxe.public.blob.vercel-storage.com/videos/navigator-demo.mov",
        tagline: "Secure knowledge discovery for enterprises",
        context:
          "Built within a Big Four AI innovation programme for financial and consulting clients, with emphasis on compliance, data privacy, and cloud-hosted deployment.",
        overview:
          "Navigator is a confidential generative AI engine for enterprises, designed to give teams instant access to organizational intelligence through natural language. It combines RAG, vector search, and agentic task execution so responses stay grounded in verified internal data.",
        keyFeatures: [
          {
            title: "Intelligent RAG pipelines",
            description:
              "Multi-layer retrieval using vector stores, metadata filters, and contextual embeddings for accurate, domain-specific answers within governance boundaries.",
          },
          {
            title: "Agentic task execution",
            description:
              "Action-oriented agents that summarize reports, draft terms of reference, and run contextual follow-ups directly from chat.",
          },
          {
            title: "Enterprise data connectors",
            description:
              "Ingestion pipelines for collaboration platforms, PDFs, and databases — with updates and version-aware document tracking.",
          },
          {
            title: "Governed hybrid search",
            description:
              "Private-first retrieval with optional expansion through approved external APIs, aligned to enterprise data policies.",
          },
          {
            title: "Enterprise SSO",
            description:
              "Cloud directory authentication with role-based access and multi-tenant support.",
          },
        ],
        techStack: [
          "Next.js",
          "TypeScript",
          "LangChain",
          "Azure AI Services",
          "PostgreSQL",
          "Redis",
          "OpenAI API",
        ],
        challenges: [
          {
            title: "Data governance & privacy",
            description:
              "Strict privacy across document stores and collaboration sources while meeting enterprise security bar.",
            solution:
              "Private networking, encryption in transit and at rest, least-privilege access, and auditable retrieval paths.",
          },
          {
            title: "Vector retrieval at scale",
            description:
              "Balancing precision and latency with large embedding corpora and frequent queries.",
            solution:
              "Hybrid retrieval, semantic chunking, and caching for hot queries; tuned relevance for domain corpora.",
          },
          {
            title: "Multi-tenant scalability",
            description:
              "Isolating data and configuration per client without sacrificing performance.",
            solution:
              "Tenant-aware partitioning, isolated indexes, and elastic compute for peak loads.",
          },
          {
            title: "Keeping knowledge current",
            description:
              "Documents change often; stale retrieval hurts trust.",
            solution:
              "Event-driven re-indexing, incremental updates, and validation hooks on high-churn content.",
          },
        ],
        outcome: {
          description:
            "Navigator improved how teams find and act on internal knowledge — cutting time spent hunting documents and drafting first-pass summaries across several engagements.",
          metrics: [
            { value: "~40%", label: "Faster turnaround on research & reporting tasks (client teams)" },
            { value: "0", label: "Security incidents post go-live (pilots)" },
          ],
          achievements: [
            "Featured in an internal AI showcase (Singapore)",
            "Piloted with finance and consulting stakeholders",
          ],
        },
      },
    },
    {
      id: "climate-ai",
      name: "Climate-AI — Real-Time Disaster Intelligence & Visualization",
      featured: true,
      description:
        "A real-time AI platform merging digital twin concepts, geospatial analytics, and generative reasoning to support disaster awareness and sustainability planning.",
      tags: [
        { name: "Next.js", color: "blue-text-gradient" },
        { name: "TypeScript", color: "green-text-gradient" },
        { name: "Python", color: "pink-text-gradient" },
      ],
      image: creator,
      video: `${import.meta.env.BASE_URL}climate-full-vid-compressed.mp4`,
      details: {
        duration: "Mar 2024 – Aug 2024",
        status: "Completed",
        demoLink:
          "https://holjnbrlgb237wxe.public.blob.vercel-storage.com/videos/climate-full-vid.mov",
        tagline: "AI for real-time climate and risk intelligence",
        context:
          "Developed as part of an innovation initiative on AI for sustainability and operational resilience.",
        overview:
          "Climate-AI provides a generative, map-driven interface for real-time disaster intelligence. It overlays geospatial feeds with predictive and narrative insight powered by LLMs — so analysts can explore scenarios visually and in conversation.",
        keyFeatures: [
          {
            title: "Digital twin–style visualization",
            description:
              "Layers sensor feeds, map services, and public APIs into cohesive risk overlays and simulations.",
          },
          {
            title: "Voice & chat interaction",
            description:
              "Natural-language questions (e.g. flood risk in a region) drive instant map views and summaries.",
          },
          {
            title: "Generative scenario modelling",
            description:
              "What-if prompts (e.g. rainfall shocks) to explore knock-on effects on infrastructure and operations.",
          },
          {
            title: "Responsive map dashboards",
            description:
              "Live analytics with smooth map interactions for operations and briefing rooms.",
          },
          {
            title: "Enterprise authentication",
            description:
              "Directory SSO with role-aware permissions for multi-user deployments.",
          },
        ],
        techStack: [
          "Next.js",
          "TypeScript",
          "Python",
          "ArcGIS API",
          "LangChain",
          "OpenAI API",
        ],
        challenges: [
          {
            title: "Multi-source geospatial integration",
            description:
              "Different cadences, formats, and projections across data providers.",
            solution:
              "Unified ingestion layer, ETL normalisation, and resilient caching with graceful degradation.",
          },
          {
            title: "Map performance",
            description:
              "Heavy layers and smooth UX rarely coexist out of the box.",
            solution:
              "Progressive loading, level-of-detail tuning, and GPU-friendly rendering paths for large tiles.",
          },
          {
            title: "Trust in AI-generated scenarios",
            description:
              "Stakeholders need transparency when models narrate risk.",
            solution:
              "Ensemble checks against historical baselines, confidence cues, and human-in-the-loop review hooks.",
          },
          {
            title: "Real-time sync across surfaces",
            description:
              "Web dashboards and downstream tools must stay aligned during incidents.",
            solution:
              "WebSocket channels, conflict handling, and offline-first patterns with catch-up sync.",
          },
        ],
        outcome: {
          description:
            "Helped analysts and response teams visualise risk faster and communicate scenarios with less manual map prep.",
          metrics: [
            { value: "~30%", label: "Faster risk visualisation workflows" },
            { value: "~25%", label: "Lift in scenario consistency vs. ad-hoc baselines" },
          ],
          achievements: [
            "Demonstrated across multiple regional readiness forums",
            "Integrated feeds from major weather and geospatial providers",
          ],
        },
      },
    },
    {
      id: "credit-risk-ai",
      name: "Credit Risk AI — Multi-Module Screening & Document Intelligence",
      featured: true,
      description:
        "An enterprise AI platform that streamlines credit screening by unifying borrower context, market signals, financial spreads, and document-grounded answers — with audit-friendly sourcing and responsible-AI guardrails.",
      tags: [
        { name: "RAG", color: "blue-text-gradient" },
        { name: "Python", color: "green-text-gradient" },
        { name: "PostgreSQL", color: "pink-text-gradient" },
      ],
      image: kpmg,
      video: null,
      details: {
        duration: "2024 – Present",
        status: "In progress",
        demoLink: null,
        tagline: "From fragmented sources to one governed workflow",
        context:
          "Delivered in a multi-vendor environment for a global development-finance institution (client and business units anonymised). Focus: regulated credit workflows, not consumer lending.",
        overview:
          "Credit teams traditionally juggle many systems — internal loan data, ratings and market data partners, country and sector research, and deal documents. This platform concentrates that work into a modular, conversational experience: structured outputs per analysis stage, explainable field population, and retrieval grounded in approved corpora. Transaction types (e.g. corporate vs. project finance vs. financial institutions) drive different logic and prompts so outputs match how practitioners actually review deals.",
        keyFeatures: [
          {
            title: "Modular analysis workspace",
            description:
              "Six coordinated areas — from borrower and peer context to country and industry views, ratings, financial highlights, facility structure, and risk themes — each with clear acceptance criteria.",
          },
          {
            title: "RAG over institutional documents",
            description:
              "Semantic search across policy papers, methodologies, and deal files with metadata-aware filtering so answers cite the right slice of the corpus.",
          },
          {
            title: "Pre-retrieval guardrails",
            description:
              "Intent classification before tool calls to block out-of-scope requests and reduce misuse of external data APIs.",
          },
          {
            title: "Partner data integrations",
            description:
              "Live connectors to ratings and financial-spreading services; spreadsheet-style outputs for covenant and ratio narratives.",
          },
          {
            title: "Responsible AI test harness",
            description:
              "Structured cases for safety, scope adherence, and grounding — run in dev and UAT before release candidates.",
          },
          {
            title: "Explainability by design",
            description:
              "Key auto-filled fields retain source metadata (document, retrieval path, timestamp) for audit and reviewer trust.",
          },
        ],
        techStack: [
          "Python",
          "PostgreSQL",
          "OpenSearch",
          "LLM orchestration",
          "HTML/CSS/JS",
          "Chart.js",
          "REST APIs",
        ],
        challenges: [
          {
            title: "Scope vs. retrieval quality",
            description:
              "The model occasionally reframed off-scope questions using retrieved passages as false anchors.",
            solution:
              "Tightened system prompts and routing so scope enforcement stays independent of which documents matched.",
          },
          {
            title: "Data quality at scale",
            description:
              "Peer groups, industry codes, and FX-normalised financials broke in edge cases.",
            solution:
              "Backlog of data-engineering stories with reproducible examples; single sources of truth for FX and taxonomy.",
          },
          {
            title: "Multi-stakeholder delivery",
            description:
              "Internal engineering, client data teams, and external data vendors in one release train.",
            solution:
              "Shared JIRA conventions, Given/When/Then acceptance criteria, and standard bug templates.",
          },
        ],
        outcome: {
          description:
            "Replaced much of the manual tab-hopping in early deal screening with a single governed flow — while preserving the paper trail regulators and credit committees expect.",
          metrics: [
            { value: "6", label: "Major analysis modules in one product surface" },
            { value: "38+", label: "Responsible-AI evaluation cases in the test suite" },
          ],
          achievements: [
            "Functional ownership from requirements through UAT across modules",
            "Production-minded RAG and prompt design for institutional credit use",
          ],
        },
      },
    },
    {
      id: "exec-assistant",
      name: "Executive AI Assistant — C-Suite & Board Operating Companion",
      featured: true,
      description:
        "A discreet AI operating companion for C-suite and board members that organises calendars, business trips, and stakeholder context — and generates meeting agendas, talking points, and briefing notes from company-ingested data.",
      tags: [
        { name: "Next.js", color: "blue-text-gradient" },
        { name: "LangChain", color: "green-text-gradient" },
        { name: "RAG", color: "pink-text-gradient" },
      ],
      image: kpmg,
      video: null,
      details: {
        duration: "2025 – Present",
        status: "In progress",
        demoLink: null,
        tagline: "A quiet operating system for leaders who run on judgement, not admin",
        context:
          "Designed for senior executives and non-executive directors who juggle multiple boards, portfolios, and travel commitments — without the bandwidth of a chief of staff team.",
        overview:
          "The assistant unifies an executive's calendar, business trips, and meeting prep into a single conversational surface. It ingests the company's internal documents, CRM notes, and people data to generate context-rich agendas, talking points, and post-meeting summaries. When a director asks 'who am I meeting tomorrow and what do I need to know?', the assistant assembles a briefing from board packs, prior interactions, and external public profile signals — with sources cited.",
        keyFeatures: [
          {
            title: "Calendar & travel intelligence",
            description:
              "Unified view across personal and assistant-managed calendars; flags travel conflicts, time-zone load, and back-to-back meeting risk before the week starts.",
          },
          {
            title: "Auto-generated agendas & talking points",
            description:
              "Pulls from prior board minutes, recent updates, and company KPIs to draft meeting agendas and tailored talking points per attendee.",
          },
          {
            title: "Profile search over ingested data",
            description:
              "Conversational search across internal CRM, deal flow notes, and board materials — surfaces who the executive has met before, last topics discussed, and current relationship status.",
          },
          {
            title: "Meeting notes & follow-ups",
            description:
              "Captures key decisions, action items, and named owners from meetings; routes follow-up reminders into the calendar and a personal action register.",
          },
          {
            title: "Briefing memos on demand",
            description:
              "One-tap briefings before each meeting — combining internal context, public company filings, and recent news, with explicit source attribution.",
          },
          {
            title: "Privacy-first deployment",
            description:
              "Single-tenant deployment with role-based access, audit logs, and the option to keep ingestion inside the executive's own cloud tenancy.",
          },
        ],
        techStack: [
          "Next.js",
          "TypeScript",
          "LangChain",
          "OpenAI API",
          "PostgreSQL",
          "Pinecone",
          "Microsoft Graph API",
        ],
        challenges: [
          {
            title: "Trust at the executive tier",
            description:
              "Senior leaders won't tolerate hallucinated names, dates, or commitments in briefings.",
            solution:
              "Strict source-grounded responses, mandatory citations on every claim, and a confidence-gated fallback when retrieval is thin.",
          },
          {
            title: "Calendar reasoning beyond scheduling",
            description:
              "Off-the-shelf calendar APIs surface events, not meaning — the assistant needs to understand purpose, history, and stakes.",
            solution:
              "Layered enrichment that links each event to its CRM record, board agenda, or deal file before producing any narrative output.",
          },
          {
            title: "Sensitive data handling",
            description:
              "Board materials, M&A discussions, and personal travel are among the most sensitive corporate data.",
            solution:
              "Single-tenant architecture with encryption at rest and in transit, fine-grained access scopes, and a clear data retention policy per workspace.",
          },
        ],
        outcome: {
          description:
            "Reduced the cognitive overhead of running multiple board and executive commitments — turning fragmented prep work into a single conversational workflow.",
          metrics: [
            { value: "10+", label: "Hours saved per executive each week on prep and follow-up" },
            { value: "1", label: "Unified surface across calendar, CRM, and board materials" },
          ],
          achievements: [
            "Designed for non-executive directors and C-suite operators",
            "Privacy-first deployment model suitable for regulated industries",
          ],
        },
      },
    },
  ];
  
  const investmentProjects = [
    {
      name: "BB Deals & Valuing Innovation — Tesla Battery Recycling",
      description:
        "Applied capital budgeting, DCF, EVA, comparable multiples, and LBO modelling in the BB Deals & Valuing Innovation Bootcamp — culminating in a buy-side pitch deck for how Tesla should acquire a US$6M EV battery-recycling target. Use the links to open the Excel DCF / LBO workbook and the pitch deck when shared.",
      tags: [
        { name: "dcf", color: "blue-text-gradient" },
        { name: "lbo", color: "green-text-gradient" },
        { name: "m-a", color: "pink-text-gradient" },
      ],
      image: web,
      source_code_link: "#",
      deck_link: "#",
    },
  ];

  const researchProjects = [
    {
      name: "Tonga Multi-Hazard Disaster Risk Assessment",
      description:
        "Contributed to hazard modeling, vulnerability analysis, and exposure quantification across 220 scenarios spanning floods, tsunamis, wind, and seismic events. Supported resilience planning and infrastructure decision-making for a Pacific island nation facing compounding climate and seismic risks.",
      tags: [
        { name: "geospatial", color: "blue-text-gradient" },
        { name: "climate-risk", color: "green-text-gradient" },
        { name: "ntu-stanford", color: "pink-text-gradient" },
      ],
      image: creator,
      source_code_link: "#",
    },
    {
      name: "Multi-Hazard Risk Modeling Framework",
      description:
        "Developed and applied a multi-hazard spatial modeling framework as part of the NTU–Stanford collaboration. Integrated geospatial datasets, statistical vulnerability functions, and probabilistic loss estimation methods across 50+ hazard scenarios.",
      tags: [
        { name: "spatial-analytics", color: "blue-text-gradient" },
        { name: "probabilistic-modeling", color: "green-text-gradient" },
        { name: "disaster-risk", color: "pink-text-gradient" },
      ],
      image: backend,
      source_code_link: "#",
    },
  ];

  export { services, technologies, experiences, projects, investmentProjects, researchProjects };