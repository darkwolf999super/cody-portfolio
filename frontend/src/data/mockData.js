export const mockPortfolioData = {
  personal: {
    name: "Dwayne Webb",
    title: "Senior Software Engineer",
    subtitle: "Full-Stack Product Builder",
    tagline:
      "I turn ambiguous ideas into dependable, scalable software—ship fast without cutting quality.",
    phone: "+1 (352) 218-1218",
    email: "dwayne1992x@gmail.com",
    location: "Spokane Valley, WA",
    resumeUrl: "https://drive.google.com/file/d/15Sr_a1NgZnh8KCgxqhzBW2PRpVh5jYMs/view?usp=drive_link",
    github: "*",
    linkedin: "*",
    portfolio: "*"
  },

  about: {
    summary:
      "Senior Software Engineer with 10+ years building production systems across logistics, fintech, and developer tooling. Expert in React/Node.js ecosystems with proven track record of shipping high-impact features that directly improve business metrics.",
    experience:
      "10+ years • Product consultancies → High-growth startups → Enterprise platforms",
    expertise:
      "React/Next.js • Node.js/Python • Real-time systems • Performance optimization • Team leadership",
    mindset:
      "Ship fast, measure impact, iterate. Quality code is business value.",
    metrics: [
      "40% MTTR reduction through DevEx improvements",
      "18% cost savings via optimization algorithms",
      "8s → 200ms latency improvements",
      "~10K LOC shipped in 48h with full test coverage"
    ]
  },

  experience: [
    {
      id: "1",
      company: "Shipwell",
      position: "Senior Software Engineer",
      duration: "10/2020 - Present",
      description:
        "Series B logistics/TMS—led real-time visibility, optimization, and reliability/DevEx improvements.",
      achievements: [
        "Shipped real-time shipment & order tracking (Python/Redis + WebSockets), cutting dashboard latency from 8s → ~200ms.",
        "Built fulfillment optimization service (Node.js/Kafka) reducing carrier costs by ~18% via dynamic routing.",
        "Improved reliability & DevEx: ~40% MTTR reduction with alerting and RCA playbooks; established CI/CD and QA data seeders.",
        "Delivered exceptions dashboard + auto-summary service (~10K LOC in ~48h) with tight unit/Playwright coverage, unblocking a key customer launch.",
        "Owned features spanning visibility, load-optimization, dock scheduling, and settlement workflows."
      ],
      order: 1,
      createdAt: "2025-01-01T00:00:00.000Z"
    },
    {
      id: "2",
      company: "Work & Co (Accenture Song)",
      position: "Member of Technical Staff",
      duration: "11/2016 - 09/2020",
      description:
        "Design-led consultancy; translated high-fidelity prototypes into production Next.js apps.",
      achievements: [
        "Standardized delivery with reusable UI libraries; accelerated MVP/v1 launches.",
        "Built products for wellness, retail, fintech, and sports-teletherapy; quoting/pricing tools, content/MLS UIs, and live-data dashboards.",
        "Operated as a force-multiplier between design and engineering to ship fast without sacrificing quality."
      ],
      order: 2,
      createdAt: "2025-01-01T00:00:00.000Z"
    },
    {
      id: "3",
      company: "Atlassian",
      position: "Web Developer",
      duration: "01/2015 - 11/2016",
      description:
        "Jira Cloud Ecosystem—reporting plugins prior to native reporting.",
      achievements: [
        "Built Jira Cloud reporting plugins (Atlassian Connect; Jira REST/JQL, Bitbucket, Confluence).",
        "Delivered React + D3 dashboards for velocity, time-in-status, and backlog trends with filters/export.",
        "Adopted Agile/Scrum rituals; shipped features aligned to real engineering reporting needs."
      ],
      order: 3,
      createdAt: "2025-01-01T00:00:00.000Z"
    }
  ],

  projects: [
    {
      id: "1",
      title: "Real-Time Shipment Tracking",
      description:
        "Enterprise-grade real-time tracking system processing 10K+ shipments daily. Built pub/sub architecture with Redis and WebSockets for sub-200ms updates.",
      impact: "8s → 200ms latency • 95% uptime • Processing 10K+ shipments/day",
      tech: ["Python", "Redis", "WebSockets", "React", "PostgreSQL"],
      demoUrl: "https://shipwell.com/visibility",
      githubUrl: "https://github.com/dwayne-webb/realtime-tracking-demo",
      screenshot: "/images/projects/realtime-tracking.png",
      order: 1,
      featured: true,
      createdAt: "2025-01-01T00:00:00.000Z"
    },
    {
      id: "2",
      title: "Fulfillment Optimization Engine",
      description:
        "ML-powered routing optimization processing 5K+ orders daily. Event-driven architecture with Kafka ensuring 99.9% delivery reliability.",
      impact: "18% cost reduction • $2M+ annual savings • 99.9% delivery success",
      tech: ["Node.js", "Kafka", "PostgreSQL", "Python", "scikit-learn"],
      demoUrl: "https://shipwell.com/optimization",
      githubUrl: "https://github.com/dwayne-webb/fulfillment-optimizer",
      screenshot: "/images/projects/optimization-engine.png",
      order: 2,
      featured: true,
      createdAt: "2025-01-01T00:00:00.000Z"
    },
    {
      id: "3",
      title: "AI-Powered Exceptions Dashboard",
      description:
        "Intelligent exception handling system with auto-summarization. Built in 48h using AI-assisted development while maintaining 95% test coverage.",
      impact:
        "Unblocked $500K customer launch • 10K LOC in 48h • 95% test coverage",
      tech: ["React", "TypeScript", "Playwright", "OpenAI API", "Node.js"],
      demoUrl: "https://shipwell.com/exceptions",
      githubUrl: "https://github.com/dwayne-webb/ai-exceptions-dashboard",
      screenshot: "/images/projects/exceptions-dashboard.png",
      order: 3,
      featured: true,
      createdAt: "2025-01-01T00:00:00.000Z"
    },
    {
      id: "4",
      title: "DevEx & Reliability Platform",
      description:
        "Comprehensive developer experience platform with automated alerting, deployment pipelines, and testing infrastructure serving 15+ engineers.",
      impact: "40% MTTR reduction • 2x deployment frequency • 99.5% uptime",
      tech: ["AWS", "Docker", "Terraform", "Playwright", "Grafana"],
      githubUrl: "https://github.com/dwayne-webb/devex-platform",
      screenshot: "/images/projects/devex-platform.png",
      order: 4,
      featured: true,
      createdAt: "2025-01-01T00:00:00.000Z"
    },
    {
      id: "5",
      title: "Enterprise Component System",
      description:
        "Scalable design system powering 8+ production applications. Built with Next.js, TypeScript, and comprehensive Storybook documentation.",
      impact: "50% faster feature delivery • 8+ apps using system • 200+ components",
      tech: ["Next.js", "TypeScript", "Storybook", "TailwindCSS", "Radix UI"],
      demoUrl: "https://components.workandco.com",
      githubUrl: "https://github.com/dwayne-webb/enterprise-components",
      screenshot: "/images/projects/component-system.png",
      order: 5,
      featured: true,
      createdAt: "2025-01-01T00:00:00.000Z"
    },
    {
      id: "6",
      title: "Jira Analytics Suite",
      description:
        "Advanced reporting plugins for Jira Cloud with interactive D3.js visualizations. Deployed to 500+ Atlassian Marketplace customers.",
      impact: "500+ customers • 4.5/5 marketplace rating • $50K+ MRR",
      tech: ["React", "D3.js", "Atlassian Connect", "Node.js", "MongoDB"],
      demoUrl: "https://marketplace.atlassian.com/apps/jira-advanced-reports",
      githubUrl: "https://github.com/dwayne-webb/jira-analytics-suite",
      screenshot: "/images/projects/jira-analytics.png",
      order: 6,
      featured: false,
      createdAt: "2025-01-01T00:00:00.000Z"
    }
  ],

  techStack: {
    frontend: [
      "React",
      "Next.js",
      "Vue",
      "TypeScript",
      "TailwindCSS",
      "ShadCN",
      "Redux",
      "Zustand",
      "React Query",
      "D3.js",
      "Canvas",
      "Three.js",
      "WCAG",
      "Storybook"
    ],
    backend: [
      "Node.js",
      "Express",
      "NestJS",
      "Python",
      "FastAPI",
      "Django",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "REST",
      "GraphQL",
      "gRPC",
      "Kafka",
      "Event-driven patterns"
    ],
    cloud: [
      "AWS",
      "GCP",
      "Azure",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Pulumi/CDK",
      "Grafana",
      "CI/CD"
    ],
    tools: [
      "Git",
      "GitHub",
      "Bitbucket",
      "Jira",
      "Figma",
      "VSCode",
      "Chrome DevTools",
      "Postman",
      "Jest",
      "Cypress",
      "Playwright",
      "Cucumber",
      "ESLint",
      "Prettier"
    ],
    methodologies: [
      "Component-driven Development",
      "Design Systems",
      "Accessibility (WCAG)",
      "Agile/Scrum",
      "TDD/BDD",
      "Code Reviews",
      "Pair Programming",
      "Performance Optimization",
      "CI/CD",
      "DevEx/Reliability"
    ]
  },

  lookingFor: {
    title: "What I'm Looking For",
    description:
      "Small, high-ownership teams where I can own core product UI and broader architecture—especially in logistics/TMS, vertical SaaS, or AI-powered workflows. Senior/Staff SWE or Tech Lead scope with real impact."
  }
};
