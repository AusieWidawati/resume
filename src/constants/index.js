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
    grab,
    shopee,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
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
    title: "AI Product Manager (Senior Associate)",
    company_name: "KPMG Digital Village",
    icon: kpmg,
    iconBg: "#383E56",
    date: "Nov 2024 - Present",
    // Collapsed card view
    highlights: [
      {
        label: "AI Product & Architecture",
        text: "Own four enterprise AI platforms from RAG to agentic AI, configuring the agent orchestrator and 30+ tool integrations, and choosing models, retrieval and tool-calling designs by quality, latency and cost.",
      },
      {
        label: "AI Data Foundation",
        text: "Build the data layer behind each product, from document ingestion, chunking and metadata tagging to Databricks SQL validation of 100+ tables.",
      },
      {
        label: "Product Roadmap & Delivery",
        text: "Own the roadmap, sprint planning and delivery, turning client needs into user stories, acceptance criteria and LLM system prompts for 15+ engineers and 4 vendors.",
      },
      {
        label: "AI Monitoring & Stakeholders",
        text: "Track LLM quality, Responsible AI compliance and adoption through LLM observability and user feedback across 2,500+ users, while aligning senior leaders across 3 countries.",
      },
    ],
    // Expanded "full details" view
    summary:
      "Lead AI product manager across four enterprise AI platforms for APAC's largest multilateral development bank, from early RAG to agentic AI.\nTop 10% Senior Associate, rated \"Exceeding Expectations\".",
    groups: [
      {
        title: "Agentic AI Credit Risk Solution",
        items: [
          {
            label: "Product Delivery",
            text: "Led requirements, prompts and delivery of a 6-module agentic solution with 30+ tool integrations, managing 15+ engineers and 4 vendors across 3 countries.",
            tools: ["Postman"],
          },
          {
            label: "Agentic AI Configuration",
            text: "Worked with developers to configure the orchestrator layer and the task agents and tools beneath it, building an agentic deal analysis workflow that cut credit screening from weeks to under 1 hour.",
            tools: ["LangChain", "LangGraph"],
          },
          {
            label: "Sprints, UAT & Responsible AI",
            text: "Owned sprint planning and led UAT with 30+ credit officers, and ensured the product met Responsible AI standards.",
            tools: ["Jira", "Azure DevOps"],
          },
        ],
      },
      {
        title: "Enterprise AI Knowledge Navigator (RAG)",
        items: [
          {
            label: "Data Pipeline & Search",
            text: "Built SharePoint ingestion into AWS OpenSearch with metadata tagging, and tested keyword, semantic and hybrid search to cut retrieval time by 80%.",
            tools: ["Databricks", "SQL", "Microsoft Foundry"],
          },
          {
            label: "Product Releases",
            text: "Led 2 releases to 2,500+ users and 52,000+ queries, iterating on Datadog LLM observability and user feedback.",
            tools: ["Datadog"],
          },
        ],
      },
      {
        title: "Geospatial AI Disaster Risk Platform",
        items: [
          {
            label: "Spatial AI Modelling",
            text: "Built a spatial AI agent for geospatial data modelling and visualisation that picks the right API from one prompt across 220+ datasets, cutting climate and disaster risk modelling from months to under 1 hour. Won a KPMG Global ESG Award.",
            tools: ["QGIS"],
          },
          {
            label: "Summit Showcase",
            text: "Showcased at a global summit of 5,000+ participants, securing 60+ partnership leads and 3 government MoUs.",
          },
        ],
      },
      {
        title: "Across Platforms",
        items: [
          {
            label: "Prototyping & Architecture",
            text: "Vibe-coded 10+ prototypes in Claude Code and Codex (4 became consulting engagements), choosing models by quality, latency and cost and designing human-in-the-loop review with LLM observability.",
            tools: ["Claude Code", "Codex", "Copilot Studio", "Google AI Studio", "Figma"],
          },
          {
            label: "Stakeholder Engagement",
            text: "Hosted Design Thinking workshops for senior stakeholders.",
          },
        ],
      },
    ],
  },
  {
    title: "IT Business Analyst (Technology Consultant)",
    company_name: "Anacle Systems (acquired by MRI Software)",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "Jul 2024 - Nov 2024",
    // Collapsed card view
    highlights: [
      {
        label: "Requirements Gathering & Technical Specification",
        text: "Led stakeholder engagement for Singapore's largest real estate statutory board, redesigning core business processes into clear technical requirements.",
      },
      {
        label: "Testing & Migration",
        text: "Ran UAT and SIT for a new module with 120+ users and managed data migration, contributing to an SGD 400,000 revenue increase.",
      },
      {
        label: "Delivery & Commercials",
        text: "Collaborated with front-end and back-end engineers in GitLab across the full software development lifecycle.",
      },
    ],
    // Expanded "full details" view
    summary:
      "Building a new real estate inventory management module on an existing web and mobile platform, for Singapore's largest real estate statutory board.",
    groups: [
      {
        items: [
          {
            label: "Requirements & Specs",
            text: "Led stakeholder engagement and business requirements gathering, redesigning core business processes and translating them into technical specifications for enterprise inventory management systems.",
            tools: ["Microsoft 365"],
          },
          {
            label: "UAT & SIT",
            text: "Ran UAT and system integration testing across web and mobile with 120+ users, closing critical workflow gaps that shaped new features and contributed to an SGD 400,000 revenue increase. Trained users for smooth adoption.",
          },
          {
            label: "Data Migration",
            text: "Managed data preparation and migration with technical teams, validating post-migration data to achieve high accuracy and protect business continuity.",
          },
          {
            label: "Commercial Support",
            text: "Estimated tech infrastructure and man-hour costs as pricing inputs for high-value software module quotations.",
          },
          {
            label: "SDLC",
            text: "Managed work in GitLab across the full software development lifecycle.",
            tools: ["GitLab"],
          },
        ],
      },
    ],
  },
  {
    title: "SME Strategy and Planning Intern",
    company_name: "Grab (GrabAds)",
    icon: grab,
    iconBg: "#00B14F",
    date: "Jan 2023 - May 2023",
    // Collapsed card view
    highlights: [
      {
        label: "Data Analysis",
        text: "Analysed 10,000+ food search queries using SQL and Google Sheets to inform a revised keyword pricing model for GrabFood ads.",
      },
      {
        label: "Strategy & Monetisation",
        text: "Developed a keyword bidding strategy projecting +US$41,000 per month in ad revenue uplift.",
      },
      {
        label: "Customer Insights",
        text: "Presented customer behaviour insights from 3 Southeast Asian markets to marketing leaders, shaping Ramadan campaign strategy.",
      },
    ],
    // Expanded "full details" view
    summary:
      "Strategy and planning intern at GrabAds, turning search and customer data into pricing and marketing recommendations.",
    groups: [
      {
        items: [
          {
            label: "Data Analysis",
            text: "Identified a pricing efficiency opportunity for GrabFood ads by analysing demand tier patterns across 10,000+ food search queries using SQL and Google Sheets, informing a revised pricing classification model.",
            tools: ["SQL", "Google Workspace"],
          },
          {
            label: "Strategy & Monetisation",
            text: "Developed a data-driven keyword bidding strategy projecting +US$41,000 per month in ad revenue uplift, directly supporting GrabAds monetisation targets.",
          },
          {
            label: "Customer Insights",
            text: "Presented customer behaviour insights across Indonesia, Malaysia and Thailand to marketing leaders, shaping Ramadan campaign strategy. The same analysis fed a Ramadan press release published on Kompas, a Tier 1 media outlet in Indonesia.",
          },
        ],
      },
    ],
  },
  {
    title: "Business Product Management Intern",
    company_name: "Shopee (Shopee Video)",
    icon: shopee,
    iconBg: "#EE4D2D",
    date: "Aug 2022 - Nov 2022",
    // Collapsed card view
    highlights: [
      {
        label: "Product & Competitive Insights",
        text: "Wrote PRDs in Confluence and benchmarked competitor features to inform the roadmap.",
      },
      {
        label: "Experimentation",
        text: "A/B tested push notification copywriting during a special campaign, lifting engagement 35% and adding 64,000+ active users.",
      },
      {
        label: "Workflow Optimisation",
        text: "Moved copywriting from Excel to an internal platform, cutting task time and errors by 30%.",
      },
    ],
    // Expanded "full details" view
    summary:
      "Business product management intern on Shopee Video, working across marketing, product and operations on push notification strategy.",
    groups: [
      {
        items: [
          {
            label: "Product Documentation",
            text: "Authored product and business requirement documents in Confluence, aligning marketing, product and operations teams on requirements.",
            tools: ["Confluence"],
          },
          {
            label: "Competitive Analysis",
            text: "Compared Shopee Video's product features against competitors by analysing release notes and daily active user trends bi-weekly, delivering insights to the CMO on which features to build next and influencing high-level decision-making.",
            tools: ["Google Workspace"],
          },
          {
            label: "Experimentation",
            text: "A/B tested different push notification copywriting strategies and analysed their performance, delivering a 35% increase in user engagement and 64,000+ new active users during a key campaign, Indonesian Independence Day.",
          },
          {
            label: "Workflow Optimisation",
            text: "Moved push notification copywriting from manual Excel sheets to a new internal platform, improving operational efficiency and reducing task time and error rates by 30%.",
            tools: ["Microsoft 365"],
          },
        ],
      },
    ],
  },
  {
    title: "Research Scholar",
    company_name: "Stanford University x NTU",
    icon: stanford,
    iconBg: "#383E56",
    date: "Jan 2020 - Nov 2022",
    // Collapsed card view
    highlights: [
      {
        label: "Statistical Modelling",
        text: "Developed statistical models in R to estimate natural disaster risk with 81% accuracy.",
      },
      {
        label: "Spatial Analysis & Visualisation",
        text: "Simulated floods and storm surge in Delft3D and mapped earthquake risk against population and vulnerability data in QGIS and ArcGIS.",
      },
      {
        label: "Research Output",
        text: "Co-authored a UN-contributed paper and won the NTU CY1400 Outstanding Research Award (A grade).",
      },
    ],
    // Expanded "full details" view
    summary:
      "Research scholar at Stanford University and NTU, specialising in climate and disaster risk modelling, with a focus on earthquake and flood risk.",
    groups: [
      {
        items: [
          {
            label: "Statistical Modelling",
            text: "Initiated and developed statistical models in R to estimate natural disaster risk with 81% accuracy, using regression and kriging, and benchmarked spatial interpolation methods on 2019 Ridgecrest earthquake data.",
            tools: ["R"],
          },
          {
            label: "Spatial Data Analysis",
            text: "Simulated flood and storm surge hazards in Delft3D (Deltares). Built a counterfactual framework estimating probabilistic lives saved by the 2019 Cyclone Fani evacuation.",
            tools: ["Delft3D"],
          },
          {
            label: "Data Visualisation",
            text: "Combined earthquake hazard with population and vulnerability data in QGIS and ArcGIS, mapping and validating model outputs to support exposure analysis for resilience planning.",
            tools: ["QGIS", "ArcGIS"],
          },
          {
            label: "Research Output",
            text: "Co-authored a research paper contributed to the UN and awarded the NTU CY1400 Outstanding Research Award (A grade) for independent research excellence.",
          },
        ],
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

  export { services, technologies, experiences, projects, investmentProjects };