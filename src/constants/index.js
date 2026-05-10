import {
    mobile,
    backend,
    web,
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
      id: "education",
      title: "Education",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
      description:"I delved into the design and construction of websites while creating web applications for projects",
    },
    {
      title: "ReactJS Developer",
      icon: mobile,
      description:"I worked with ReactJS during my internship to enhance a web and mobile application",
    },
    {
      title: "Backend Developer",
      icon: backend,
      description:"I explored the communication between database, servers and apps while creating full-stack web applications",
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
  
  export { services, technologies, experiences, projects };