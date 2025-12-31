export type BlogStatus = "published" | "draft" | "trashed";

export type Blog = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  status: BlogStatus;
  author: {
    id: string;
    name: string;
    avatar: string;
  };
  tags: string[];
  createdAt: string;
  updatedAt?: string;
  readTime: number;
  likes: number;
  comments: number;
  bookmarked: boolean;
};

export const dummyBlogs: Blog[] = [
  {
    id: "blog-1",
    title: "Building a Scalable React Architecture",
    excerpt:
      "Learn how to structure React applications that scale cleanly as your product grows.",
    content:
      "Scaling a React application requires clear separation of concerns...",
    status: "published",
    author: {
      id: "user-1",
      name: "Kelvin Kariuki",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    tags: ["React", "Frontend", "Architecture"],
    createdAt: "2025-01-10",
    updatedAt: "2025-01-15",
    readTime: 6,
    likes: 128,
    comments: 14,
    bookmarked: true,
  },

  {
    id: "blog-2",
    title: "From Zero to Production: Node.js Backend Guide",
    excerpt:
      "A practical guide to building, structuring, and deploying Node.js backends.",
    content: "Node.js shines when building scalable network applications...",
    status: "draft",
    author: {
      id: "user-2",
      name: "Alex Morgan",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    tags: ["Node.js", "Backend", "APIs"],
    createdAt: "2025-02-01",
    readTime: 8,
    likes: 94,
    comments: 9,
    bookmarked: false,
  },

  {
    id: "blog-3",
    title: "Designing Clean Dashboards with Tailwind CSS",
    excerpt: "How to design modern dashboards with clarity and accessibility.",
    content: "Dashboards should be information-dense yet readable...",
    status: "published",
    author: {
      id: "user-3",
      name: "Sarah Kim",
      avatar: "https://i.pravatar.cc/150?img=25",
    },
    tags: ["UI/UX", "Tailwind", "Design"],
    createdAt: "2025-02-14",
    readTime: 5,
    likes: 210,
    comments: 22,
    bookmarked: true,
  },

  {
    id: "blog-4",
    title: "Why Most Side Projects Fail (And How to Avoid It)",
    excerpt: "An honest breakdown of why developers abandon projects.",
    content: "Most side projects fail not because of lack of skill...",
    status: "trashed",
    author: {
      id: "user-4",
      name: "Daniel Okello",
      avatar: "https://i.pravatar.cc/150?img=40",
    },
    tags: ["Productivity", "Mindset"],
    createdAt: "2025-03-01",
    readTime: 4,
    likes: 310,
    comments: 31,
    bookmarked: false,
  },

  {
    id: "blog-5",
    title: "Understanding Authentication the Right Way",
    excerpt: "JWTs, sessions, OAuth — explained clearly.",
    content: "Authentication is often misunderstood...",
    status: "published",
    author: {
      id: "user-5",
      name: "Maria Lopez",
      avatar: "https://i.pravatar.cc/150?img=48",
    },
    tags: ["Auth", "Security", "Web"],
    createdAt: "2025-03-12",
    readTime: 7,
    likes: 176,
    comments: 18,
    bookmarked: true,
  },
];
