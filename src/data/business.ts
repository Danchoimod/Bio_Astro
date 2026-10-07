export interface BusinessBioConfig {
  name: string;
  headline: string;
  badge: string;
  summary: string;
  about: string;
  location: string;
  github: string;
  philosophy: {
    title: string;
    description: string;
  };
  featuredProject: {
    title: string;
    tag: string;
    description: string;
    stats: {
      value: string;
      label: string;
    }[];
  };
  skills: string[];
  experience: {
    role: string;
    company: string;
    period?: string;
    description: string;
  }[];
}

export const businessData: BusinessBioConfig = {
  name: "Phu Pham",
  headline: "Backend Developer",
  badge: "Backend Developer · Product Builder",
  summary: "Backend Developer focused on building real-world products, system architecture, and scalable backend services. I enjoy transforming business problems into production-ready software.",
  about: "Software Development student at FPT Polytechnic with a strong interest in Backend Development, System Design, and Product Development. Instead of building tutorial projects, I prefer creating software that solves real business problems and can operate in production for years.",
  location: "Can Tho, Vietnam",
  github: "github.com/Danchoimod",
  philosophy: {
    title: "Problem → UX → Business → System Design → Code",
    description: "Technology is a tool. The real goal is solving business problems through maintainable and reliable software systems.",
  },
  featuredProject: {
    title: "YadoViet",
    tag: "Production SaaS",
    description: "Rental Management Platform designed for landlords and boarding-house operators. The system helps manage rooms, tenants, invoices, contracts, expenses, and residence declarations.",
    stats: [
      { value: "140+", label: "Active Tenants" },
      { value: "1", label: "Production Property" },
      { value: "100%", label: "Monthly Usage" },
      { value: "3+", label: "Years Development" },
    ],
  },
  skills: [
    "Node.js",
    "TypeScript",
    "NestJS",
    "ExpressJS",
    "FastAPI",
    "REST API",
    "PostgreSQL",
    "MySQL",
    "Prisma ORM",
    "DDD",
    "Modular Monolith",
    "System Design",
    "Docker",
    "Linux",
  ],
  experience: [
    {
      role: "Backend Developer Intern",
      company: "The Improbability Company",
      description: "Worked with FastAPI, Google Cloud Platform, backend architecture improvements, API development and cross-team collaboration.",
    },
    {
      role: "Fullstack Developer",
      company: "YadoViet",
      description: "Designed architecture, database schema, backend APIs, frontend UX and production deployment.",
    },
  ],
};
