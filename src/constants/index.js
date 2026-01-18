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
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  AttendQR,
  supa,
  cakcsod,
  CG,
  Finditem,
  sbuild,
  rub,
  Help,
  Fillup,
  CampG,
  PF,

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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "supa",
    icon: supa,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "IT Intern",
    company_name: "Cakcsod Ltd",
    icon: cakcsod,
    iconBg: "#383E56",
    date: "Feb 2022 - Dec 2022",
    points: [
      "Assisted in developing new web pages and maintaining existing ones.",
      "Provided IT support and troubleshooting for colleagues and systems.",
      "Configured and maintained hardware and software components.",
      "Performed regular system backups and other IT duties.",
    ],
  },
  
  {
    title: "IT Intern (Remote)",
    company_name: "Reusable Bags Gh",
    icon: rub, 
    iconBg: "#E6DEDD",
    date: "Feb 2024 - June 2024",
    points: [
      "Managed and maintained the company's live website.",
      "Monitored and resolved technical support requests remotely.",
      "Designed product flyers, T-shirts, and a product brochure.",
      "Created and maintained the product backlog for internal use.",
    ],
  },
  
  
  {
    title: "Full Stack Developer",
    company_name: "SBlockchain Hub",
    icon: sbuild, 
    iconBg: "#383E56",
    date: "March 2025 - Present", 
    points: [
      "Designed and developed an e-voting system for the Computer Science Department at the University of Ghana.",
      "Leveraged blockchain technology (Hyperledger Fabric) to ensure transparency, security, and immutability of voting records.",
      "Built both frontend and backend components of the application to deliver a seamless voting experience.",
      "Collaborated with the blockchain team to integrate smart contracts and decentralized logic into the voting process.",
    ],
  },

  {
    title: "Frontend Developer",
    company_name: "SBuild",
    icon: sbuild, 
    iconBg: "#E6DEDD",
    date: "Present",
    points: [
      "Developing the frontend for the SBuild platform — a hub where developers can showcase their projects to the world.",
      "Creating responsive and user-friendly interfaces that highlight developer portfolios and skills.",
      "Building features that allow companies to search for and hire developers for various technical projects.",
      "Collaborating with the design and backend teams to ensure smooth integration and consistent user experience.",
      "Contributing to the overall product vision of making it easier for developers to gain visibility and opportunities."
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was difficult for Samuel to make a Web App that could impact on on the University of Ghana. But Samuel proved me wrong.",
    name: "Solomon Mensah",
    designation: "CEO",
    company: "SBuild",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Samuel does.",
    name: "Alex",
    designation: "CEO",
    company: "Tipsy Alley Gh",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Samuel optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Bismark",
    designation: "CEO",
    company: "Reusable Bags Ghana",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "AttendQR",
    description:
      "A Web App that enables lecturers to take class attendance using QR codes. Simple, fast, and reliable modern attendance tracking.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: AttendQR, 
    source_code_link: "https://github.com/samuelKobby",
    website_link: "https://attend-qr.netlify.app/",
  },

  {
    name: "Campus Guide",
    description:
      "Web application that allows users to search for campus locations such as academic buildings, health facilities, sports centers, and more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: CampG, 
    source_code_link: "https://github.com/samuelKobby",
    website_link: "https://camp-guide.netlify.app/",
  },

  {
    name: "Find Item",
    description:
      "A web platform that allows users to search for, find, and book their lost items—providing a convenient and efficient solution for students' needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: Finditem, 
    source_code_link: "https://github.com/samuelKobby",
    website_link: "https://finditem.netlify.app/",
  },

  {
    name: "Fill Up",
    description:
      "Fill Up is a roadside assistance web app that enables users to request both fuel delivery and on-demand mechanical support when stranded on the road. It connects customers with nearby fuel stations and mechanics to provide fast, reliable emergency assistance.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Fillup, 
    source_code_link: "https://github.com/samuelKobby",
    website_link: "https://fillup247.netlify.app/",
  },

  {
    name: "Pharma Finder",
    description:
      "A healthcare web app that helps users quickly locate nearby pharmacies and check the availability of essential medicines. It simplifies access to medication by reducing the time spent searching for open and stocked pharmacies.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: PF, 
    source_code_link: "https://github.com/samuelKobby",
    website_link: "https://pharmar-finder.netlify.app/",
  },
  
  {
    name: "Help",
    description:
      "Help is a first aid assistance web app that provides quick, step-by-step guidance for handling common medical emergencies. It is designed to be simple, fast, and accessible, helping users take the right action when immediate professional help is not available.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
      {
        name: "Tarvus",
        color: "pink-text-gradient",
      },
    ],
    image: Help, 
    source_code_link: "https://github.com/samuelKobby",
    website_link: "https://fahelp.netlify.app/",
  },

  
];

export { services, technologies, experiences, testimonials, projects };
