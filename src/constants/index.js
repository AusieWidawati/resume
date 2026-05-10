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
    mealnus,
    bitcoin,
    carms,
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
      name: "Navigator — Enterprise Generative AI Knowledge Engine",
      description:
        "Web-based platform for NUS students, staff and faculty to purchase pre-portioned mealboxes for fast, easy and healthy cooking. MealNUS admins have a dedicated inventory management web-based platform for easier tracking of orders",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "java",
          color: "green-text-gradient",
        },
        {
          name: "restapi",
          color: "pink-text-gradient",
        },
      ],
      image: mealnus,
      source_code_link: "https://github.com/Seibell/MealNUS-without-springboot",
      video: `${import.meta.env.BASE_URL}navigator-demo-compressed.mp4`,
    },
    {
      name: "Climate-AI — Real-Time Disaster Intelligence & Visualization",
      description:
        "An ETL pipeline that aims to uncover, analyze and predicts trends between Bitcoin prices and the volume and quality of tweets posted about this crypto-currency. Through the use of various machine learning models, dashboards were created to display the findings.",
      tags: [
        {
          name: "PostgreSQL",
          color: "blue-text-gradient",
        },
        {
          name: "airflow",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
      ],
      image: bitcoin,
      source_code_link: "https://github.com/ImAshuaige/IS3107_Project_Group22",
      video: `${import.meta.env.BASE_URL}climate-full-vid-compressed.mp4`,
    },
    {
      name: "Car Rental Management System",
      description:
        "A comprehensive car rental management system that allocates cars to individual customers and enterprise partners",
      tags: [
        {
          name: "java",
          color: "green-text-gradient",
        },
        {
          name: "restapi",
          color: "pink-text-gradient",
        },
      ],
      image: carms,
      source_code_link: "https://github.com/ImAshuaige/CarManagementSystem",
    },
  ];
  
  const investmentProjects = [
    {
      name: "Enterprise AI Investment Memo",
      description:
        "A structured investment thesis evaluating the AI infrastructure stack — from foundation model providers to tooling, orchestration, and deployment layers. Covers competitive moats, revenue models, and value capture dynamics.",
      tags: [
        { name: "ai-infrastructure", color: "blue-text-gradient" },
        { name: "venture", color: "green-text-gradient" },
        { name: "thesis", color: "pink-text-gradient" },
      ],
      image: web,
      source_code_link: "#",
    },
    {
      name: "Climate Resilience Fund Analysis",
      description:
        "Sector analysis of climate adaptation assets including nature-based solutions, resilient infrastructure, and parametric insurance. Includes DCF models and risk-adjusted return comparisons across asset classes.",
      tags: [
        { name: "climate-tech", color: "blue-text-gradient" },
        { name: "dcf-model", color: "green-text-gradient" },
        { name: "esg", color: "pink-text-gradient" },
      ],
      image: creator,
      source_code_link: "#",
    },
    {
      name: "Development Finance Model",
      description:
        "Financial model for a blended finance structure targeting SME lending in Southeast Asia. Covers waterfall mechanics, first-loss tranche sizing, and concessional capital deployment for a DFI-style vehicle.",
      tags: [
        { name: "development-finance", color: "blue-text-gradient" },
        { name: "excel-model", color: "green-text-gradient" },
        { name: "emerging-markets", color: "pink-text-gradient" },
      ],
      image: mobile,
      source_code_link: "#",
    },
  ];

  const communityItems = [
    {
      name: "Women in Product Singapore",
      description:
        "Volunteer and event co-organizer. Supporting the growth of women in product management across Singapore through community events, mentorship, and professional development initiatives.",
      tags: [
        { name: "product", color: "blue-text-gradient" },
        { name: "community", color: "green-text-gradient" },
        { name: "singapore", color: "pink-text-gradient" },
      ],
      image: creator,
      source_code_link: "#",
    },
    {
      name: "FinTech Genesis Hackathon",
      description:
        "Co-organizer of the FinTech Genesis Hackathon, a collaboration between StashAway and Women in Product Singapore. Brought together builders, designers, and domain experts to tackle fintech product challenges.",
      tags: [
        { name: "fintech", color: "blue-text-gradient" },
        { name: "hackathon", color: "green-text-gradient" },
        { name: "co-organizer", color: "pink-text-gradient" },
      ],
      image: web,
      source_code_link: "#",
    },
    {
      name: "Balik Kampoeng",
      description:
        "Mental Health Division Officer supporting Indonesian migrant workers in Singapore. Involved in outreach, welfare programming, and coordinating mental health support services for the migrant community.",
      tags: [
        { name: "mental-health", color: "blue-text-gradient" },
        { name: "ngo", color: "green-text-gradient" },
        { name: "social-impact", color: "pink-text-gradient" },
      ],
      image: mobile,
      source_code_link: "#",
    },
    {
      name: "INSEAD Alumni Forum",
      description:
        "Active participant in the INSEAD alumni network and consulting recruitment ecosystem across Singapore. Engaged in knowledge-sharing, peer mentorship, and connecting with the global INSEAD community.",
      tags: [
        { name: "insead", color: "blue-text-gradient" },
        { name: "alumni", color: "green-text-gradient" },
        { name: "strategy", color: "pink-text-gradient" },
      ],
      image: backend,
      source_code_link: "#",
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

  export { services, technologies, experiences, projects, investmentProjects, communityItems, researchProjects };