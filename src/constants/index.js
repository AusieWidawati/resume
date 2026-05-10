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
      title: "Front-end Developer Intern",
      company_name: "UOB",
      icon: UOB,
      iconBg: "#383E56",
      date: "May 2023 - July 2023",
      points: [
        "Developed, reviewed code and fixed bugs for UOB’s Infinity Digital Bank Global Soft Token (web and mobile) application using Agile Ways of Working", 
        "Collaborated with a team of 7 front-end developers to implement 40 changes in UI/UX to ensure compliance with user stories using ReactJS framework, HTML and CSS.",
        "Participated in Agile ceremonies, Daily Stand Up meetings, sprint closures and product demos."
        
      ],
    },
    {
      title: "Research Intern",
      company_name: "Optimum Solutions",
      icon: optimum,
      iconBg: "#E6DEDD",
      date: "July 2019 - Aug 2019",
      points: [
        "Researched and discovered 700 prospective stakeholders across 7 banks and financial institutions." ,
        "Conceptualized and presented findings to 3 seniors at highest level of management to facilitate widening of consumer base.",
      ],
    },
    {
      title: "Research Intern",
      company_name: "Optimum Solutions",
      icon: optimum,
      iconBg: "#E6DEDD",
      date: "July 2019 - Aug 2019",
      points: [
        "Researched and discovered 700 prospective stakeholders across 7 banks and financial institutions." ,
        "Conceptualized and presented findings to 3 seniors at highest level of management to facilitate widening of consumer base.",
      ],      
    }
  ];
  
  const projects = [
    {
      name: "MealNUS",
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
    },
    {
      name: "Bitcoin Analysis",
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