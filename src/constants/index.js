import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  mf,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  khayal_designer,
  orkhan_frontendengineer,
  basf,
  threejs,
  kuvb,
  gericht,
  beatbox,
  java,
  mysql,
  spring,
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Java Developer",
    icon: backend,
  },
  {
    title: "Fullstack Developer",
    icon: creator,
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
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Spring",
    icon: spring,
  },
  {
    name: "Mysql",
    icon: mysql,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Working Student Web Developer",
    company_name: "MONACO FRIENDS GMBH",
    icon: mf,
    iconBg: "#383E56",
    date: "Nov 2021 - Apr 2022",
    points: [
      "Developing and maintaining web applications using HTML5, Tailwind CSS, Vue.js and other related technologies.",
      "Creation of backend services using Strapi CMS and integration them with frontend technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Intern Trial & Data Management",
    company_name: "BASF",
    icon: basf,
    iconBg: "#383E56",
    date: "Apr 2022 - Aug 2022",
    points: [
      "Creation and development of variable application maps using the Field Manager platform.",
      "Development of Excel-based files for automated control and verification of data from database.",
      "Documentation of development stage data for crops trials from Germany, Poland and Japan.",
    ],
  },
  {
    title: "Working Student IT-Statistics",
    company_name: "KUVB - KOMMUNALE UNFALLVERSICHERUNG BAYERN",
    icon: kuvb,
    iconBg: "#383E56",
    date: "Dec 2022 - Feb 2023",
    points: [
      "Support for statistics processing based on fixed key directories and definitions.",
      "Building databases and validating their stability and efficiency.",
      "Writing optimized SQL queries, creating program functions and stored procedures.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Zamil is an enthusiastic and passionate self-learner, constantly seeking new challenges and diligently acquiring up-to-date skills.",
    name: "Khayal Jumaliyev",
    designation: "Senior UX / UI Designer",
    company: "Jaxel",
    image: khayal_designer,
    linkedin: "https://www.linkedin.com/in/khayal-jumaliyev-05aa92a0/",
  },
  {
    testimonial:
      "I highly recommend Zamil for a software development position. He is a disciplined and motivated individual. His curiosity and strong critical thinking skills make him an asset to any team.",
    name: "Orkhan Jafarov",
    designation: "Frontend Engineer II",
    company: "Amazon",
    image: orkhan_frontendengineer,
    linkedin:
      "https://www.linkedin.com/in/orkhanjafarovr/?originalSubdomain=az",
  },
];

const projects = [
  {
    name: "Beatbox",
    description:
      "Web-based e-commerce that offers a wide range of music products, with a special focus on headphones. Customers can browse and buy from a variety of high-quality headphones.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: beatbox,
    source_code_link: "https://github.com/Zamil00/beatbox_sanity_stripe",
  },
  {
    name: "Gericht Restaurant",
    description:
      "A visually appealing UI project that provides an overview of a restaurant, showcasing its delectable meals, awards, and information about the establishment. ",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "ui",
        color: "pink-text-gradient",
      },
    ],
    image: gericht,
    source_code_link: "https://github.com/Zamil00/gericht-restaurant",
  },
  {
    name: "Car Booking System",
    description:
      "A comprehensive car booking platform that allows users to choose and book cars, drivers and other services.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "swing",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Zamil00/Car_Booking_System",
  },
];

export { services, technologies, experiences, testimonials, projects };
