// Mock portfolio data - previously served by backend API
export const mockPortfolioData = {
  personal: {
    name: "Dwayne Webb",
    title: "Senior Frontend Engineer",
    subtitle: "Product Builder",
    tagline: "I ship fast, scale smart, and build beautiful UI that performs.",
    phone: "+1 (206) 238 7108",
    email: "dwebb001993@gmail.com",
    location: "Spokane Valley, WA",
    resumeUrl: "https://drive.google.com/file/d/1_nyRnG9mOrOqC0uFUFxGNlX2LWEnFitz/view?usp=sharing"
  },
  about: {
    summary: "Frontend engineering specialist with 10 years of experience delivering high-performance user interfaces across enterprise platforms, early-stage product teams, and startup-facing consulting projects. Skilled in architecting scalable UI systems, optimizing runtime performance, and shipping design-aligned features with precision and speed.",
    experience: "10 years experience across early-stage teams, high-growth startups, and enterprise tools",
    expertise: "Deep experience with Next.js, performance tuning, Canvas, a11y, design-to-engineering",
    mindset: "Product mindset: I design systems that balance clarity, speed, and iteration"
  },
  experience: [
    {
      id: "1",
      company: "Work & Co (Accenture)",
      position: "Senior Frontend Engineer",
      duration: "04/2022 - Present",
      description: "Oversaw frontend architecture and delivery for multiple early-stage startup clients in wellness, retail, and fintech—translating design prototypes into performant, production-ready web apps using Next.js.",
      achievements: [
        "Scoped and implemented reusable UI systems, collaborated closely with startup founders and design leads",
        "Helped launch investor-facing products on aggressive timelines",
        "Used AI-powered editors like Cursor and windsurf.ai to accelerate implementation and reduce iteration cycles"
      ],
      order: 1,
      createdAt: "2024-01-01T00:00:00.000Z"
    },
    {
      id: "2",
      company: "Figma",
      position: "Frontend Engineer",
      duration: "08/2018 - 03/2022",
      description: "Joined during hyper-growth stage and contributed to frontend features:",
      achievements: [
        "Delivered the Dev Mode inspector panel, enabling engineers to inspect design tokens and streamline design-to-engineering handoffs",
        "Contributed to FigJam widget and plugin platform, developing extensible, high-performance React widgets adopted across FigJam sessions",
        "Optimized canvas performance by profiling render cycles, reducing interaction latency in large, complex files",
        "Helped unify component behavior across platforms by aligning design tokens and shared UI libraries between desktop and web",
        "Shipped 2-week cycles, collaborating directly with PMs, designers, and research to iterate based on real user feedback"
      ],
      order: 2,
      createdAt: "2024-01-01T00:00:00.000Z"
    },
    {
      id: "3",
      company: "Atlassian",
      position: "Web Developer",
      duration: "06/2015 - 07/2018",
      description: "Jira Cloud Ecosystem - built advanced reporting plugins for Jira Cloud before native reporting tools existed:",
      achievements: [
        "Built production-grade UI plugins for Jira Cloud using the Atlassian Connect framework, integrating with Jira APIs, JQL queries, Bitbucket, and Confluence",
        "Developed interactive dashboards with React and D3.js to visualize agile metrics including sprint velocity, time-in-status, and backlog trends",
        "Designed CSV export, filtering, and grouping capabilities to surface real-time metrics inside Confluence and Jira dashboards",
        "Partnered with agile teams and internal PMs to prioritize reporting UX, optimize memory performance, and continuously refine plugin responsiveness"
      ],
      order: 3,
      createdAt: "2024-01-01T00:00:00.000Z"
    }
  ],
  projects: [
    {
      id: "1",
      title: "Dev Mode Inspector Performance",
      description: "Reduced design-to-code handoff time by 60% through optimized inspector panel architecture",
      impact: "Adopted by 50K+ engineers across design teams",
      tech: ["React", "Canvas API", "Performance Profiling"],
      order: 1,
      featured: true,
      createdAt: "2024-01-01T00:00:00.000Z"
    },
    {
      id: "2",
      title: "Startup MVP Delivery",
      description: "Shipped Next.js fintech app from prototype to production launch in 2 weeks",
      impact: "Enabled $2M seed funding with working product demo",
      tech: ["Next.js", "TypeScript", "Stripe API"],
      order: 2,
      featured: true,
      createdAt: "2024-01-01T00:00:00.000Z"
    },
    {
      id: "3",
      title: "Canvas Render Optimization",
      description: "Improved FigJam performance by 40% through render cycle profiling and optimization",
      impact: "Enhanced user experience for files with 1000+ objects",
      tech: ["Canvas API", "React", "Performance Analytics"],
      order: 3,
      featured: true,
      createdAt: "2024-01-01T00:00:00.000Z"
    },
    {
      id: "4",
      title: "Real-time Dashboard System",
      description: "Built live Jira metrics dashboard with sub-second data updates",
      impact: "Adopted by 200+ enterprise agile teams",
      tech: ["React", "D3.js", "GraphQL", "WebSockets"],
      order: 4,
      featured: false,
      createdAt: "2024-01-01T00:00:00.000Z"
    },
    {
      id: "5",
      title: "Cross-Platform UI Components",
      description: "Unified design system across desktop and web platforms at Figma",
      impact: "Reduced component development time by 35%",
      tech: ["React", "TypeScript", "Design Tokens", "Storybook"],
      order: 5,
      featured: false,
      createdAt: "2024-01-01T00:00:00.000Z"
    },
    {
      id: "6",
      title: "Real Estate Investment Platform",
      description: "Built comprehensive property management dashboard for real estate investment firm",
      impact: "Streamlined operations for 500+ properties across 3 states",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Mapbox API", "Stripe"],
      order: 6,
      featured: true,
      createdAt: "2024-01-01T00:00:00.000Z"
    },
    {
      id: "7",
      title: "AI-Powered Healthcare Analytics",
      description: "Developed predictive analytics dashboard for healthcare provider network",
      impact: "Improved patient outcomes by 25% through early intervention alerts",
      tech: ["React", "Python", "TensorFlow", "D3.js", "AWS Lambda"],
      order: 7,
      featured: true,
      createdAt: "2024-01-01T00:00:00.000Z"
    },
    {
      id: "8",
      title: "Insurance Claims Processing System",
      description: "Modernized legacy claims processing with real-time document analysis",
      impact: "Reduced processing time by 60% and improved accuracy by 40%",
      tech: ["Vue.js", "Node.js", "OpenAI API", "AWS S3", "Redis"],
      order: 8,
      featured: false,
      createdAt: "2024-01-01T00:00:00.000Z"
    },
    {
      id: "9",
      title: "Mortgage Application Portal",
      description: "Built end-to-end mortgage application system with automated underwriting",
      impact: "Processed $50M+ in mortgage applications with 99.9% uptime",
      tech: ["React", "TypeScript", "GraphQL", "PostgreSQL", "AWS"],
      order: 9,
      featured: false,
      createdAt: "2024-01-01T00:00:00.000Z"
    },
    {
      id: "10",
      title: "Retail Inventory Management",
      description: "Created real-time inventory tracking system for national retail chain",
      impact: "Optimized stock levels across 200+ locations, reducing waste by 30%",
      tech: ["Next.js", "WebSockets", "Redis", "PostgreSQL", "Docker"],
      order: 10,
      featured: false,
      createdAt: "2024-01-01T00:00:00.000Z"
    },
    {
      id: "11",
      title: "Fintech Compliance Dashboard",
      description: "Developed regulatory compliance monitoring system for fintech startup",
      impact: "Ensured 100% compliance across 15+ regulatory requirements",
      tech: ["React", "TypeScript", "Python", "MongoDB", "AWS"],
      order: 11,
      featured: false,
      createdAt: "2024-01-01T00:00:00.000Z"
    },
    {
      id: "12",
      title: "Supply Chain Optimization Platform",
      description: "Built logistics optimization system for manufacturing company",
      impact: "Reduced shipping costs by 35% and improved delivery times by 50%",
      tech: ["Vue.js", "Node.js", "GraphQL", "PostgreSQL", "Google Maps API"],
      order: 12,
      featured: false,
      createdAt: "2024-01-01T00:00:00.000Z"
    }
  ],
  techStack: {
    frontend: [
      "React", "Next.js", "TypeScript", "JavaScript", "Vue.js", "Nuxt.js",
      "HTML5", "CSS3", "Sass/SCSS", "Styled Components", "Emotion",
      "Tailwind CSS", "PostCSS", "Webpack", "Vite", "Rollup", "Parcel",
      "Redux", "Zustand", "React Query", "SWR", "Apollo Client",
      "Framer Motion", "GSAP", "Three.js", "React Spring"
    ],
    performance: [
      "Canvas API", "WebGL", "WebAssembly", "Service Workers", "Web Workers",
      "Performance Profiling", "Lighthouse", "Core Web Vitals", "Bundle Analysis",
      "Code Splitting", "Lazy Loading", "Image Optimization", "Caching Strategies",
      "D3.js", "Chart.js", "Recharts", "WebRTC", "WebSockets"
    ],
    backend: [
      "Node.js", "Express.js", "Fastify", "Koa", "NestJS",
      "Python", "FastAPI", "Django", "Flask",
      "GraphQL", "Apollo Server", "RESTful APIs", "tRPC",
      "PostgreSQL", "MongoDB", "Redis", "Prisma", "TypeORM",
      "MySQL", "SQLite", "Supabase", "Firebase", "PlanetScale"
    ],
    cloud: [
      "AWS", "Vercel", "Netlify", "Railway", "Heroku", "DigitalOcean",
      "Google Cloud", "Azure", "Cloudflare", "CDN",
      "Docker", "Kubernetes", "Serverless", "Lambda Functions",
      "S3", "CloudFront", "RDS", "DynamoDB", "Terraform"
    ],
    tools: [
      "Git", "GitHub", "GitLab", "Bitbucket", "Linear", "Jira",
      "Figma", "Adobe XD", "Sketch", "Figma APIs", "Figma Plugins",
      "VSCode", "WebStorm", "Chrome DevTools", "Postman", "Insomnia",
      "Jest", "Cypress", "Playwright", "Testing Library", "Storybook",
      "ESLint", "Prettier", "Husky", "Lint-staged"
    ],
    methodologies: [
      "Component-driven Development", "Design Systems", "Atomic Design",
      "Accessibility (a11y)", "Responsive Design", "Mobile-first Design",
      "Progressive Enhancement", "Agile/Scrum", "Kanban", "TDD/BDD",
      "Code Reviews", "Pair Programming", "CI/CD", "DevOps",
      "Performance Optimization", "SEO", "Micro-frontends"
    ]
  },
  lookingFor: {
    title: "What I'm Looking For",
    description: "After years at high-growth companies that scaled to enterprise, and recently helping startups ship critical products, I'm ready to settle into a deep vertical with an early-stage team where I can own core product UI and drive meaningful product momentum from the ground up."
  }
}; 