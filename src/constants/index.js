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
    anacle,
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
    iconBg: "#FFFFFF",
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
            text: "Worked with data engineers to build pipelines for unstructured and structured data, ingesting SharePoint documents into an AWS OpenSearch vector database with metadata tagging. Tested keyword, semantic and hybrid search to cut retrieval time by 80%.",
            tools: ["AWS OpenSearch", "PostgreSQL", "Databricks", "SQL", "Microsoft Foundry"],
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
    icon: anacle,
    iconBg: "#FFFFFF",
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
    iconBg: "#FFFFFF",
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
            tools: ["Python", "QGIS", "ArcGIS"],
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
  
  /**
   * Project cards + detail pages. Business first: challenge, solution, value,
   * then my role, then product and architecture, then product decisions.
   */
  const projects = [
    {
      id: "credit-risk-ai",
      name: "Credit Risk Assessment AI",
      category: "Agentic AI · Banking",
      featured: true,
      description:
        "Agentic AI that automates credit risk assessment for investment officers. Financial spreading, credit ratings and projections moved from Excel into AI, with a full audit trail.",
      image: kpmg,
      video: `${import.meta.env.BASE_URL}credit-risk-demo.mp4`,
      tools: ["LangGraph", "LangChain", "Python", "SQL", "PostgreSQL", "Databricks", "AWS OpenSearch", "Postman", "Jira", "Confluence"],
      details: {
        audience: "Investment officers, multilateral development bank (APAC)",
        status: ["Live in production since mid 2026", "In progress"],
        demoLink: null,
        tagline: "Involving risk officers in deal analysis from day one.",
        headline: [
          { value: "<1 hr", label: "Deal screening, down from weeks" },
          { value: "6", label: "Modules across 5 transaction types" },
          { value: "30+", label: "API endpoints integrated with a financial analytics provider" },
        ],
        challenge: [
          {
            title: "Risk came in too late",
            text: "Banking and risk officers worked in silos. Risk officers only joined after a banking officer had finished analysing an entity, even when its risk was too high to pursue. Deals were shaped before anyone checked them against the bank's risk appetite.",
          },
          {
            title: "Manual work crowded out judgement",
            text: "Officers pulled financial data from third-party providers, then did financial spreading, credit rating calculations, loan structuring and pricing in Excel themselves. None of it was automated.",
          },
        ],
        solution: {
          summary:
            "A multi-agent AI orchestrator that brings the banking officer and the risk officer into one governed workflow. An officer names a borrower, country, industry and transaction type, and the platform fills a full credit screening from internal data, documents and a financial analytics provider. Officers stay in control and make every final decision.",
          modulesLabel: "The 6 modules",
          modules: [
            {
              title: "Context Retrieval",
              text: "Gathers the data and context for the deal.",
              items: [
                { title: "Borrower Profile & Peers", text: "Borrower details and peer tiering from past deals." },
                { title: "Country & Industry Insights", text: "Country risk, outlook and sector growth." },
              ],
            },
            {
              title: "Decision Support",
              text: "Runs the calculations officers used to do in Excel.",
              items: [
                { title: "Credit Ratings", text: "Rating engine output, country ceiling and probability of default." },
                { title: "Financial Highlights", text: "Financial spreading, ratios and USD conversion." },
                { title: "Loan Structuring", text: "Covenants, tenor, pricing and exposure limits." },
              ],
            },
            {
              title: "Safeguard",
              text: "Keeps every output auditable.",
              items: [
                { title: "Risks & Mitigants", text: "Key risks, mitigants and waivers from policy documents." },
              ],
            },
          ],
        },
        value: [
          {
            title: "Faster time to decision",
            text: "Deal screening went from weeks to under an hour, so risk input arrives while the deal can still change.",
          },
          {
            title: "Excel work automated",
            text: "Financial spreading, credit rating calculations and financial projections now run in the platform instead of spreadsheets.",
          },
          {
            title: "Auditable by design",
            text: "Every auto-filled field has an Explain view showing its document, page, query and timestamp, which is what regulators and credit committees need.",
          },
          {
            title: "One source of truth",
            text: "Banking and risk officers work from the same trusted data instead of separate spreadsheets and subscriptions.",
          },
        ],
        roleTitle: "Lead AI Product Manager & Data Workstream Lead",
        // My Role mirrors this group in the KPMG Work Experience entry, with a link to it
        experienceGroup: { company: "KPMG Digital Village", group: "Agentic AI Credit Risk Solution" },
        architecture: {
          flow: ["Officer starts a deal", "Query guard", "Supervisor agent", "Internal data, documents & financial APIs", "Module outputs with Explain"],
          features: [
            {
              title: "Financial analytics integration",
              description:
                "30+ API endpoints for entity profiles, ratings, probability of default, peers and sector outlooks.",
            },
            {
              title: "Automated financial spreading",
              description: "Financial statements turned into standard accounts and ratios for the rating engine.",
            },
            {
              title: "RAG over institutional documents",
              description:
                "Semantic search across policies, methodologies and deal files, with metadata filters so answers cite the right documents.",
            },
            {
              title: "Query guard",
              description:
                "Out-of-scope questions are blocked before any tool or data API is called.",
            },
            {
              title: "Explainability by design",
              description:
                "Auto-filled fields keep their source document, page, query and timestamp for audit.",
            },
          ],
        },
      },
    },
    {
      id: "navigator",
      name: "GenAI RAG Knowledge Platform",
      category: "Generative AI · RAG",
      featured: true,
      description:
        "A GenAI platform that gives bank employees one trusted place to find answers and draft documents. Every answer is grounded in and cited to internal data.",
      image: web,
      video: `${import.meta.env.BASE_URL}navigator-demo.mp4`,
      tools: ["Microsoft Foundry", "LangChain", "AWS OpenSearch", "PostgreSQL", "Databricks", "SQL", "Datadog", "Azure DevOps"],
      details: {
        audience: "All employees, multilateral development bank (APAC)",
        status: "In production",
        demoLink: null,
        tagline: "One trusted place to find, use and act on enterprise knowledge.",
        headline: [
          { value: "5x", label: "Productivity gain reported by employees" },
          { value: "2,500+", label: "Users across 52,000+ queries" },
          { value: "80%", label: "Faster retrieval time" },
        ],
        challenge: [
          {
            title: "Employees searched outside",
            text: "SharePoint search was so poor that staff turned to Google, even for the organisation's own reports.",
          },
          {
            title: "No knowledge governance",
            text: "Without a standard taxonomy or metadata, knowledge was hard to find and harder to trust.",
          },
          {
            title: "Data silos",
            text: "Information sat across departments and repositories, slowing collaboration and evidence-based decisions.",
          },
        ],
        solution: {
          summary:
            "A secure, multi-agent AI layer over legacy systems. Employees ask questions in plain language and get answers grounded in approved internal documents, with sources. They can then summarise, compare or draft documents in the same conversation. It is set to replace the intranet.",
          modules: [
            {
              title: "Knowledge Discovery",
              text: "Natural-language search across internal documents, with cited answers.",
            },
            {
              title: "Task Execution",
              text: "Summarise, compare and polish documents directly from chat.",
            },
            {
              title: "Document Generation",
              text: "Terms of Reference drafted from compliant templates, with automatic tagging.",
            },
          ],
        },
        value: [
          {
            title: "Productivity",
            text: "Employees reported 5x productivity gains on research and reporting tasks.",
          },
          {
            title: "Adoption",
            text: "Available to 5,000 employees, with 2,500+ users and 52,000+ queries across 2 releases.",
          },
          {
            title: "Faster documents",
            text: "Drafting a Terms of Reference fell from 4 to 6 hours to under 5 minutes, saving 2,000+ hours a year.",
          },
          {
            title: "Trusted answers",
            text: "Every answer is grounded in and cited to internal documents, reducing the risk of misinformation.",
          },
        ],
        roleTitle: "Backend Product Manager & Business Analyst",
        experienceGroup: { company: "KPMG Digital Village", group: "Enterprise AI Knowledge Navigator (RAG)" },
        role: [
          {
            label: "Ingestion Pipeline",
            text: "Owned backend requirements for ingesting SharePoint, website content, board papers and manuals into an AWS OpenSearch vector database, working with data engineers.",
          },
          {
            label: "Metadata Framework",
            text: "Designed metadata tagging by document type, project, country, circulation date and source, with extraction logic tailored to each document structure.",
          },
          {
            label: "Retrieval Quality",
            text: "Defined chunking and metadata filtering, and tested keyword, semantic and hybrid search, cutting retrieval time by 80%.",
          },
          {
            label: "Releases",
            text: "Led 2 releases to 2,500+ users, prioritising fixes from Datadog LLM observability and user feedback.",
          },
        ],
        architecture: {
          flow: ["SharePoint, web & libraries", "Chunking & metadata extraction", "Vector index", "Metadata filter + hybrid search", "Cited answer or task"],
          features: [
            {
              title: "Metadata-aware retrieval",
              description:
                "Filters by document type, country, project and date before ranking, so answers come from the right documents.",
            },
            {
              title: "Hybrid search",
              description: "Keyword and semantic search combined, catching exact names and codes as well as concepts.",
            },
            {
              title: "Document tasks",
              description: "Summarise, compare, polish and draft Terms of Reference without leaving the chat.",
            },
            {
              title: "Shareable conversations",
              description: "Conversations can be shared so teams build on each other's research.",
            },
            {
              title: "Enterprise security",
              description:
                "Single sign-on with role-based access, private networking, and encryption in transit and at rest.",
            },
          ],
        },
      },
    },
    {
      id: "climate-ai",
      name: "Geospatial AI Disaster Risk Platform",
      category: "Geospatial AI · Climate",
      featured: true,
      description:
        "A geospatial AI platform that lets non-experts query climate and disaster risk by voice or text. It won a KPMG Global ESG Award and led to 3 government MoUs.",
      image: creator,
      video: `${import.meta.env.BASE_URL}climate-full-vid-compressed.mp4`,
      tools: ["LangChain", "GraphQL", "Python", "QGIS", "ArcGIS", "SQL"],
      details: {
        audience: "Climate and policy decision makers, multilateral development bank (APAC)",
        status: "Completed",
        demoLink: null,
        tagline: "Climate and disaster intelligence anyone can use, not just GIS specialists.",
        headline: [
          { value: "<1 hr", label: "Risk modelling, down from months" },
          { value: "220+", label: "Datasets from a single prompt" },
          { value: "3", label: "Government MoUs from the summit showcase" },
        ],
        challenge: [
          {
            title: "Expert-only tools",
            text: "Digital twins and GIS risk models needed specialists, so insight stayed with a few people.",
          },
          {
            title: "Slow, fragmented modelling",
            text: "Each climate or disaster scenario took months of manual work across scattered hazard datasets.",
          },
          {
            title: "Investment decisions at stake",
            text: "The client wanted climate and disaster intelligence to guide resilience planning and investment across APAC.",
          },
        ],
        solution: {
          summary:
            "An AI layer over geospatial models that users query by voice or text. It combines generative AI, spatial AI and 3D modelling, so a policy maker can ask about flood risk in a region and see the map, the scenario and the evidence behind it.",
          modules: [
            {
              title: "Economic Loss Scenarios",
              text: "AI-assisted what-if analysis of losses from floods, storms and other hazards.",
            },
            {
              title: "Digital Twin Simulation",
              text: "Interactive geospatial layers and 3D views of hazard, exposure and vulnerability.",
            },
            {
              title: "Knowledge Mining",
              text: "Answers enriched with global research and publications, with sources.",
            },
          ],
        },
        value: [
          {
            title: "Speed",
            text: "Climate and disaster risk modelling went from months to under an hour.",
          },
          {
            title: "Access",
            text: "220+ datasets reachable from a single prompt, with no GIS skills needed.",
          },
          {
            title: "Better investment design",
            text: "Evidence-based scenarios support country strategy, project design and resilience investment.",
          },
          {
            title: "Recognition & partnerships",
            text: "Won a KPMG Global ESG Award, and the summit showcase secured 60+ partnership leads and 3 government MoUs.",
          },
        ],
        roleTitle: "Product Data Manager & Lead Business Analyst",
        experienceGroup: { company: "KPMG Digital Village", group: "Geospatial AI Disaster Risk Platform" },
        role: [
          {
            label: "Spatial Data Analysis",
            text: "Analysed and visualised hazard, exposure and vulnerability layers in QGIS, ArcGIS and Python to define what the platform shows.",
          },
          {
            label: "Spatial Agent Configuration",
            text: "Configured the spatial AI agent with GraphQL so one prompt picks the right dataset API across 220+ datasets.",
          },
          {
            label: "Data Requirements",
            text: "Defined ingestion, tagging and quality rules for climate hazard datasets and research documents.",
          },
          {
            label: "Summit Showcase",
            text: "Showcased the platform at a global summit of 5,000+ participants, securing 60+ partnership leads and 3 government MoUs.",
          },
        ],
        architecture: {
          flow: ["Voice or text question", "Spatial AI agent", "GraphQL dataset APIs", "Map, 3D view & scenario", "Cited insight"],
          features: [
            {
              title: "Voice and chat interaction",
              description:
                "Plain-language questions, such as flood risk in a region, drive instant map views and summaries.",
            },
            {
              title: "Generative scenario modelling",
              description: "What-if prompts explore knock-on effects on infrastructure and operations.",
            },
            {
              title: "Digital twin visualisation",
              description: "Hazard, exposure and vulnerability layers combined into risk overlays and simulations.",
            },
            {
              title: "Multi-source integration",
              description:
                "One ingestion layer normalises data from providers with different formats, cadences and projections.",
            },
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