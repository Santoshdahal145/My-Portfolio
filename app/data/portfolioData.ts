export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  features: string[];
  link?: string;
  github?: string;
  image: string;
  category: "Web" | "Mobile" | "Full Stack";
  featured: boolean;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: "Advanced" | "Proficient" | "Specialized";
    badgeColor?: string;
    iconName?: string;
  }[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  highlights: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  focus: string[];
  location: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  regNumber: string;
  status: string;
  description: string;
}

export interface InterestItem {
  icon: string;
  title: string;
  category: string;
  description: string;
}

export interface LanguageItem {
  language: string;
  level: string;
  percentage: number;
}

export const PERSONAL_INFO = {
  name: "Santosh Dahal",
  role: "Full Stack Developer",
  experienceYears: "2+",
  location: "Lokanthali, Kathmandu, Nepal",
  bio: "Full Stack Developer with around 2 years of experience building scalable web and cross-platform mobile applications. Specialized in JavaScript, TypeScript, Next.js, React, Node.js, and React Native/Expo.",
  phone: "+977 9805324548",
  phoneRaw: "+9779805324548",
  email: "dahalsantosh225@gmail.com",
  whatsappUrl:
    "https://wa.me/917483428753?text=Hi%20Santosh%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!",
  whatsappRaw: "https://wa.me/917483428753",
  github: "https://github.com/Santoshdahal145",
  linkedin: "https://www.linkedin.com/in/santoshdahal145/",
  status: "Available for roles & collaborations",
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Frontend & Mobile",
    description:
      "Building responsive, accessible web applications and cross-platform mobile clients",
    skills: [
      { name: "React", level: "Advanced" },
      { name: "Next.js", level: "Advanced" },
      { name: "React Native", level: "Advanced" },
      { name: "Expo", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "HTML5 / CSS3", level: "Advanced" },
    ],
  },
  {
    category: "Backend & APIs",
    description:
      "Designing robust server-side architectures, microservices, and REST APIs",
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "Express.js", level: "Advanced" },
      { name: "NestJS", level: "Proficient" },
      { name: "RESTful APIs", level: "Advanced" },
      { name: "API Authentication & JWT", level: "Proficient" },
    ],
  },
  {
    category: "Databases & Tools",
    description:
      "Data modeling, schema design, version control, and team deployment workflows",
    skills: [
      { name: "MongoDB", level: "Advanced" },
      { name: "SQL (PostgreSQL / MySQL)", level: "Proficient" },
      { name: "Git / GitHub", level: "Advanced" },
      { name: "Postman / Thunder Client", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Linux / Shell", level: "Proficient" },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "mystery-himalaya",
    title: "MysteryHimalaya.com",
    subtitle: "Nepal Tour & Trekking Platform",
    description:
      "A comprehensive travel and trekking platform in Nepal featuring tour packages, detailed trekking itineraries, booking inquiry flows, and SEO-optimized destination guides.",
    tech: ["Next.js", "React", "Node.js", "Tailwind CSS"],
    features: [
      "Dynamic trekking package showcase with multi-day route itineraries",
      "Interactive booking inquiry flow with real-time validation",
      "SEO-optimized destination landing pages with rich schema markup",
      "High-performance media handling for Nepal's Himalayan landscapes",
    ],
    link: "https://mysteryhimalaya.com",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop",
    category: "Web",
    featured: true,
  },
  {
    id: "rentisity",
    title: "Rentisity",
    subtitle: "Full-Stack Property Rental Platform",
    description:
      "Full-stack property rental platform featuring SEO-friendly SSR web pages and a cross-platform mobile client, complete with property listings, advanced search filters, and modular UI components.",
    tech: ["Next.js", "React Native (Expo)", "Express.js", "MongoDB"],
    features: [
      "Cross-platform mobile client for iOS and Android built on Expo",
      "Server-side rendered property listings optimized for search indexing",
      "Multi-criteria filtering: pricing, geolocation, amenities, and availability",
      "Modular, reusable component architecture across web and mobile",
    ],
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
    category: "Full Stack",
    featured: true,
  },
  {
    id: "housebuild",
    title: "Housebuild (HouseBuild.com)",
    subtitle: "Construction & Compliance Platform",
    description:
      "Construction and building-compliance platform with role-based access controls (Admins, Agents, Users) and high-performance server-rendered frontend workflows.",
    tech: ["Next.js", "Express.js", "REST APIs"],
    features: [
      "Granular Role-Based Access Control (RBAC) for Admins, Agents, and Clients",
      "High-performance server-rendered forms and document submission pipelines",
      "Building regulation inspection checklists and milestone audits",
      "Secure REST API backend with structured error logging and audit trails",
    ],
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
    category: "Web",
    featured: true,
  },
  {
    id: "huntgate",
    title: "HuntGate",
    subtitle: "Equestrian & Hunting Club Management App",
    description:
      "Community and club management mobile application for hunting and equestrian enthusiasts with event feeds, club connectivity, and administrative workflows.",
    tech: ["Expo", "React Native (iOS & Android)"],
    features: [
      "Native mobile experience with fluid gestures and offline cache handling",
      "Real-time event feeds, tournament schedules, and RSVP tracking",
      "Club connectivity portal with member directory and private messaging",
      "Administrative workflows for sanctioning club meets and field activities",
    ],
    image:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200&auto=format&fit=crop",
    category: "Mobile",
    featured: true,
  },
  {
    id: "hellotechworld",
    title: "HelloTechWorld (HelloTechWorld.com)",
    subtitle: "Tech News & Editorial Publishing Suite",
    description:
      "Dynamic tech news and blogging platform featuring a full-featured admin management panel, dynamic CRUD workflows, and server-side rendering for optimal SEO.",
    tech: ["Next.js", "Express.js", "Node.js"],
    features: [
      "Full-featured custom CMS admin panel with rich text authoring",
      "Dynamic CRUD workflows for editorial drafts, scheduling, and categorization",
      "Server-side rendering (SSR) enabling high Core Web Vitals scores and SEO ranking",
      "Fast cached responses with responsive reader layout and dark mode",
    ],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    category: "Web",
    featured: true,
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Full Stack Developer",
    company: "Intosoft Pvt. Ltd",
    period: "Jan 2024 – Present",
    location: "Kathmandu, Nepal",
    type: "Full-time",
    highlights: [
      "Developing high-traffic web and mobile applications leveraging Next.js, React, Node.js, and Expo.",
      "Architecting scalable RESTful APIs with Express.js and MongoDB, ensuring robust data validation and clean schemas.",
      "Spearheading standardization of unified error logging, input validation pipelines, and peer code review standards.",
      "Collaborating in cross-functional agile sprints to deliver performant user experiences across web and mobile platforms.",
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Bachelor of Engineering (BE)",
    institution: "Dr. Ambedkar Institute of Technology",
    period: "Aug 2019 – Oct 2023",
    location: "Bangalore, India",
    focus: [
      "Data Structures & Algorithms (DSA)",
      "Database Management Systems (DBMS)",
      "Operating Systems & Computer Networks",
      "Web Technologies & Software Engineering",
    ],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "Professional Engineer (PE)",
    issuer: "Nepal Engineering Council (NEC)",
    regNumber: "83661",
    status: "Active & Verified",
    description:
      "Officially registered and recognized by the Nepal Engineering Council as a certified professional engineer under Registration No. 83661.",
  },
];

export const INTERESTS: InterestItem[] = [
  {
    icon: "Crown",
    title: "Playing Chess",
    category: "Mind & Strategy",
    description:
      "Fascinated by rapid positional tactics, positional calculation, and endgame strategy.",
  },
  {
    icon: "Compass",
    title: "Traveling & Exploring",
    category: "Adventure & Outdoors",
    description:
      "Passionate about discovering remote Himalayan mountain trails, diverse cultures, and nature.",
  },
  {
    icon: "Cpu",
    title: "Tech Discussions",
    category: "Innovation & Future",
    description:
      "Actively exploring emerging AI tools, full-stack architectures, and modern open-source tooling.",
  },
  {
    icon: "UtensilsCrossed",
    title: "Cooking & Recipes",
    category: "Culinary & Creativity",
    description:
      "Enjoying the art of blending authentic Himalayan spices and crafting artisanal dishes.",
  },
];

export const LANGUAGES: LanguageItem[] = [
  {
    language: "English",
    level: "Professional Working / Fluent",
    percentage: 95,
  },
  { language: "Nepali", level: "Native / Mother Tongue", percentage: 100 },
  { language: "Hindi", level: "Full Professional Fluency", percentage: 90 },
];
