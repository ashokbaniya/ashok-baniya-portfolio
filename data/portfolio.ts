// ---------------------------------------------------------------------------
// All editable portfolio content lives in this file.
// Components read from here — add a skill, project, or education entry
// below and it will automatically appear on the site with no UI changes.
// ---------------------------------------------------------------------------

export const personalInfo = {
  name: "Ashok Baniya",
  firstName: "Ashok",
  lastName: "Baniya",
  role: "Full-Stack Developer",
  description:
    "I build scalable web and mobile applications with modern technologies and clean code.",
  aboutParagraph:
    "I'm a software developer who enjoys turning practical problems into well-built web and mobile applications. I care about clean architecture, readable code, and products that hold up outside the demo — from planning the data model to shipping the last pixel.",
  email: "ashokbaniya421@gmail.com",
  phone: "+977 9716044722",
  phoneDisplay: "+977 9716044722",
  whatsapp: "+977 9716044722",
  github: "https://github.com/ashokbaniya",
  linkedin: "https://www.linkedin.com/in/ashok-baniyag/",
  location: "Kathmandu, Nepal",
  cvUrl: "/cv.pdf",
};

export const aboutHighlights = [
  { label: "Software Engineering", icon: "code" },
  { label: "Full-Stack Development", icon: "layers" },
  { label: "Web & Mobile Development", icon: "smartphone" },
  { label: "Open to Opportunities", icon: "compass" },
] as const;

export type SkillCategory = {
  title: string;
  icon: "monitor" | "server" | "smartphone" | "database" | "wrench";
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "monitor",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: "server",
    items: ["Python", "Node.js", "Express.js", "Django", "REST API", "GraphQL"],
  },
  {
    title: "Mobile",
    icon: "smartphone",
    items: ["Android (Kotlin)", "Java", "Android Studio", "XML", "Firebase"],
  },
  {
    title: "Databases",
    icon: "database",
    items: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Oracle"],
  },
  {
    title: "Tools & DevOps",
    icon: "wrench",
    items: ["Git & GitHub", "Docker", "AWS", "Postman", "Linux"],
  },
];

export type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  playStoreUrl?: string;
  type: "web" | "android" | "other";
};


export const projects: Project[] = [
  {
    title: "JavaScript Learning Website",
    description:
      "A comprehensive JavaScript learning platform featuring 24 chapters and 180+ topics, covering everything from fundamentals to advanced concepts with practical examples. Built to help developers learn JavaScript through structured tutorials and an easy-to-navigate interface.",
    image: "/projects/jsLearningsite.png",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    liveUrl: "https://javascriptlearning.com/",
    type: "web",
  },
  {
    title: "Travel App",
    description:
      "A full-stack MERN-based travel application that simplifies hotel bookings, attraction discovery, and travel planning. Features secure user authentication, Stripe payment integration, hotel booking management, and real-time weather forecasting.",
    image: "",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Stripe"],
    githubUrl: "https://github.com/ashokbaniya/TravelApp",
    type: "web",
  },
  {
    title: "Agriculture App",
    description:
      "An Android agriculture application designed to support farmers with crop information, crop sales listings, weather forecasts, and agricultural resources. Includes user registration, login, detailed crop information retrieval, and CRUD functionality.",
    image: "/projects/androidapp.png",
    technologies: ["Java", "Android", "XML"],
    githubUrl: "https://github.com/ashokbaniya/AgricultureApp",
    type: "android",
  },
];


export type EducationEntry = {
  degree: string;
  institution: string;
  location?: string;
  period: string;
  note?: string;
};

export const education: EducationEntry[] = [
  {
    degree: "MSc in Software Engineering",
    institution: "Kingston University",
    location: "London",
    period: "2022 – 2023",
    note: "Merit",
  },
  {
    degree: "BSc (Hons) Computing",
    institution: "London Metropolitan University",
    location: "Islington College, Kathmandu",
    period: "2017 – 2021",
    note: "First Class Honours",
  },
  {
    degree: "+2 Science",
    institution: "Kathmandu, Nepal",
    period: "2015 – 2017",
  },
];
