// Mock data for Dwayne Webb's portfolio
export const portfolioData = {
  personal: {
    name: "Dwayne Webb",
    title: "Senior Frontend Engineer",
    subtitle: "Product Builder",
    tagline: "I ship fast, scale smart, and build beautiful UI that performs.",
    phone: "+1 (206) 238 7108",
    email: "dwebb001993@gmail.com",
    location: "Spokane Valley, WA",
    resumeUrl: "#" // Mock URL
  },
  
  about: {
    summary: "Frontend engineering specialist with 10 years of experience delivering high-performance user interfaces across enterprise platforms, early-stage product teams, and startup-facing consulting projects. Skilled in architecting scalable UI systems, optimizing runtime performance, and shipping design-aligned features with precision and speed.",
    experience: "10 years experience across early-stage teams, high-growth startups, and enterprise tools",
    expertise: "Deep experience with Next.js, performance tuning, Canvas, a11y, design-to-engineering",
    mindset: "Product mindset: I design systems that balance clarity, speed, and iteration"
  },

  experience: [
    {
      id: 1,
      company: "Work & Co (Accenture)",
      position: "Senior Frontend Engineer",
      duration: "04/2022 - Present",
      description: "Oversaw frontend architecture and delivery for multiple early-stage startup clients in wellness, retail, and fintech—translating design prototypes into performant, production-ready web apps using Next.js.",
      achievements: [
        "Scoped and implemented reusable UI systems, collaborated closely with startup founders and design leads",
        "Helped launch investor-facing products on aggressive timelines",
        "Used AI-powered editors like Cursor and windsurf.ai to accelerate implementation and reduce iteration cycles"
      ]
    },
    {
      id: 2,
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
      ]
    },
    {
      id: 3,
      company: "Atlassian",
      position: "Web Developer",
      duration: "06/2015 - 07/2018",
      description: "Jira Cloud Ecosystem - built advanced reporting plugins for Jira Cloud before native reporting tools existed:",
      achievements: [
        "Built production-grade UI plugins for Jira Cloud using the Atlassian Connect framework, integrating with Jira APIs, JQL queries, Bitbucket, and Confluence",
        "Developed interactive dashboards with React and D3.js to visualize agile metrics including sprint velocity, time-in-status, and backlog trends",
        "Designed CSV export, filtering, and grouping capabilities to surface real-time metrics inside Confluence and Jira dashboards",
        "Partnered with agile teams and internal PMs to prioritize reporting UX, optimize memory performance, and continuously refine plugin responsiveness"
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: "Dev Mode Inspector Performance",
      description: "Reduced design-to-code handoff time by 60% through optimized inspector panel architecture",
      impact: "Adopted by 50K+ engineers across design teams",
      tech: ["React", "Canvas API", "Performance Profiling"]
    },
    {
      id: 2,
      title: "Startup MVP Delivery",
      description: "Shipped Next.js fintech app from prototype to production launch in 2 weeks",
      impact: "Enabled $2M seed funding with working product demo",
      tech: ["Next.js", "TypeScript", "Stripe API"]
    },
    {
      id: 3,
      title: "Canvas Render Optimization",
      description: "Improved FigJam performance by 40% through render cycle profiling and optimization",
      impact: "Enhanced user experience for files with 1000+ objects",
      tech: ["Canvas API", "React", "Performance Analytics"]
    },
    {
      id: 4,
      title: "Real-time Dashboard System",
      description: "Built live Jira metrics dashboard with sub-second data updates",
      impact: "Adopted by 200+ enterprise agile teams",
      tech: ["React", "D3.js", "GraphQL", "WebSockets"]
    },
    {
      id: 5,
      title: "Cross-Platform UI Components",
      description: "Unified design system across desktop and web platforms at Figma",
      impact: "Reduced component development time by 35%",
      tech: ["React", "TypeScript", "Design Tokens", "Storybook"]
    }
  ],

  techStack: {
    frontend: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"],
    performance: ["Canvas API", "D3.js", "Performance Profiling", "WebGL"],
    backend: ["Node.js", "GraphQL", "PostgreSQL", "RESTful APIs"],
    tools: ["Figma APIs", "Git", "Docker", "CI/CD", "Jest"],
    methodologies: ["Component-driven Development", "Design Systems", "A11y", "Rapid Iteration"]
  },

  lookingFor: {
    title: "What I'm Looking For",
    description: "After years at high-growth companies that scaled to enterprise, and recently helping startups ship critical products, I'm ready to settle into a deep vertical with an early-stage team where I can own core product UI and drive meaningful product momentum from the ground up."
  }
};