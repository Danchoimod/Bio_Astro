export interface BusinessBioConfig {
  name: string;
  headline: string;
  avatar: string;
  summary: string;
  location: string;
  availability: string;
  tags: string[];
  socials: {
    name: string;
    icon: string;
    url: string;
  }[];
  links: {
    title: string;
    description: string;
    url: string;
    icon: string;
    featured?: boolean;
    category: string;
  }[];
  skills: string[];
  experience: {
    role: string;
    company: string;
    period: string;
    description: string;
  }[];
}

export const businessData: BusinessBioConfig = {
  name: "Mod2090",
  headline: "Software Engineer & Security Researcher",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500&auto=format&fit=crop",
  summary: "Senior Software Engineer specializing in scalable fullstack web systems, cloud infrastructure, and practical cybersecurity research.",
  location: "Ho Chi Minh City, Vietnam",
  availability: "Available for Consulting & Projects",
  tags: ["Fullstack Engineer", "Cybersecurity", "Cloud Architecture"],
  socials: [
    {
      name: "GitHub",
      icon: "github",
      url: "https://github.com/Danchoimod",
    },
    {
      name: "Discord",
      icon: "discord",
      url: "https://discord.com/users/608683762854658078",
    },
    {
      name: "Email",
      icon: "volume-x", // email icon fallback
      url: "mailto:contact@danchoimod.dev",
    },
  ],
  links: [
    {
      title: "Explore / Projects Showcase",
      description: "Comprehensive portfolio of enterprise systems, developer tools & open-source libraries",
      url: "https://example.com/blog",
      icon: "play",
      featured: true,
      category: "Featured Work",
    },
    {
      title: "LF Launcher",
      description: "High-performance desktop & cloud launcher utility built for fast workflows",
      url: "https://example.com/cloudcode",
      icon: "disc",
      featured: true,
      category: "Featured Work",
    },
    {
      title: "GitHub Repositories",
      description: "Explore source code, security research tools, and open-source contributions",
      url: "https://github.com/Danchoimod",
      icon: "github",
      featured: false,
      category: "Open Source & Code",
    },
    {
      title: "Discord Community",
      description: "Connect directly for technical discussions, collaboration and support",
      url: "https://discord.com/users/608683762854658078",
      icon: "discord",
      featured: false,
      category: "Community & Contact",
    },
  ],
  skills: [
    "TypeScript / Node.js",
    "Go / Python",
    "React / Next.js / Astro",
    "Tailwind CSS",
    "PostgreSQL / Redis",
    "Docker / Kubernetes",
    "Reverse Engineering",
    "Cloud Architecture",
  ],
  experience: [
    {
      role: "Lead Systems Architect",
      company: "Tech Solutions Inc.",
      period: "2023 — Present",
      description: "Architecting enterprise cloud services, microservices infrastructure, and security automation pipelines.",
    },
    {
      role: "Senior Fullstack Developer",
      company: "Digital Studio",
      period: "2021 — 2023",
      description: "Built scalable web applications, designed real-time distributed platforms, and mentored frontend/backend teams.",
    },
  ],
};
