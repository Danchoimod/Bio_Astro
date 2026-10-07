export interface BioConfig {
  name: string;
  title: string;
  avatar: string;
  bio: string;
  location?: string;
  badges?: string[];
  socials: {
    name: string;
    icon: string;
    url: string;
  }[];
  links: {
    title: string;
    description?: string;
    url: string;
    icon?: string;
    featured?: boolean;
    category?: string;
  }[];
  skills?: string[];
}

export const bioData: BioConfig = {
  name: "Phú Phạm",
  title: "Fullstack Developer & UI/UX Enthusiast",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500&auto=format&fit=crop",
  bio: "Đam mê tạo ra các sản phẩm web hiện đại, trải nghiệm mượt mà và tối ưu hóa hiệu suất.",
  location: "Hồ Chí Minh, Việt Nam",
  badges: ["🚀 Open for work", "💻 Coding daily", "☕ Coffee lover"],
  socials: [
    {
      name: "GitHub",
      icon: "github",
      url: "https://github.com",
    },
    {
      name: "LinkedIn",
      icon: "linkedin",
      url: "https://linkedin.com",
    },
    {
      name: "Twitter / X",
      icon: "twitter",
      url: "https://twitter.com",
    },
    {
      name: "Email",
      icon: "email",
      url: "mailto:contact@example.com",
    },
  ],
  links: [
    {
      title: "Portfolio cá nhân",
      description: "Xem các dự án nổi bật, case studies và công nghệ sử dụng",
      url: "https://example.com/portfolio",
      icon: "globe",
      featured: true,
      category: "Dự án & Sản phẩm",
    },
    {
      title: "Blog chia sẻ lập trình",
      description: "Bài viết về Astro, Tailwind CSS, TypeScript & System Design",
      url: "https://example.com/blog",
      icon: "book-open",
      featured: false,
      category: "Dự án & Sản phẩm",
    },
    {
      title: "Khóa học / Ebook hướng dẫn",
      description: "Lộ trình tự học lập trình web từ con số 0",
      url: "https://example.com/course",
      icon: "academic-cap",
      featured: false,
      category: "Tài nguyên hữu ích",
    },
    {
      title: "Đặt lịch tư vấn / Trao đổi (1-on-1)",
      description: "Trao đổi về định hướng nghề nghiệp, review CV & code",
      url: "https://cal.com",
      icon: "calendar",
      featured: true,
      category: "Kết nối & Hợp tác",
    },
    {
      title: "Mời tôi một ly cà phê",
      description: "Ủng hộ các dự án mã nguồn mở của mình",
      url: "https://buymeacoffee.com",
      icon: "sparkles",
      featured: false,
      category: "Kết nối & Hợp tác",
    },
  ],
  skills: [
    "TypeScript",
    "React",
    "Next.js",
    "Astro",
    "Tailwind CSS",
    "Node.js",
    "PostgreSQL",
    "Docker",
  ],
};
