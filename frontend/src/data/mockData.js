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
    calendlyUrl: "https://calendly.com/dwayne1992x/30min",
    github: "https://github.com/dwayneex",
    portfolio: "#" // "*"
  },

  about: {
    summary:
      "Senior Software Engineer with 10+ years building production systems across logistics, fintech, and developer tooling. Expert in React/Node.js ecosystems with proven track record of shipping high-impact features that directly improve business metrics. Recent passion for GenAI development acceleration using Cursor, Windsurf, and Claude Code.",
    experience:
      "10+ years • Product consultancies → High-growth startups → Enterprise platforms • Recent GenAI-powered development focus",
    expertise:
      "React/Next.js • Node.js/Python • Real-time systems • Performance optimization • Team leadership • AI-assisted development with Cursor/Windsurf/Claude",
    mindset:
      "Ship fast with AI assistance, measure impact, iterate. Quality code is business value, GenAI accelerates delivery.",
    metrics: [
      "40% MTTR reduction through DevEx improvements",
      "18% cost savings via optimization algorithms", 
      "8s → 200ms latency improvements",
      "~10K LOC shipped in 48h with Windsurf AI assistance and full test coverage",
      "5x development speed increase using Cursor and Claude Code for rapid prototyping"
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
      title: "Shipwell",
      description:
        "Enterprise TMS platform for freight logistics and supply chain optimization. Built real-time tracking, optimization algorithms, and reliability improvements serving Fortune 500 customers.",
      impact: "8s → 200ms latency • 18% cost reduction • 40% MTTR reduction",
      tech: ["React", "Python", "Node.js", "Redis", "WebSockets", "Kafka"],
      productUrl: "https://www.shipwell.com/",
      screenshot: "/images/projects/shipwell.png",
      order: 1,
      featured: true,
      createdAt: "2025-01-01T00:00:00.000Z"
    },
    {
      id: "2",
      title: "Mendelgen",
      description:
        "AI-powered genetic analysis and research platform providing advanced genomic insights and personalized medicine solutions for healthcare providers.",
      impact: "Accelerating genetic research • Personalized medicine • Healthcare innovation",
      tech: ["React", "Python", "AI/ML", "Bioinformatics", "Next.js"],
      productUrl: "https://mendelgen.com/",
      screenshot: "/images/projects/mendelgen.png",
      order: 2,
      featured: true,
      createdAt: "2025-01-01T00:00:00.000Z"
    },
    {
      id: "3",
      title: "Order Protection",
      description:
        "E-commerce order protection and warranty platform providing comprehensive coverage for online purchases, protecting both merchants and customers.",
      impact: "Merchant protection • Customer satisfaction • Risk mitigation",
      tech: ["React", "Node.js", "Payment APIs", "Insurance APIs", "TypeScript"],
      productUrl: "https://orderprotection.com/",
      screenshot: "/images/projects/orderprotection.png",
      order: 3,
      featured: true,
      createdAt: "2025-01-01T00:00:00.000Z"
    },
    {
      id: "4",
      title: "Property Management",
      description:
        "AI-powered property management system with automated tenant screening, maintenance scheduling, and financial reporting for real estate professionals.",
      impact: "Automated workflows • Tenant satisfaction • Operational efficiency",
      tech: ["React", "AI/ML", "Python", "Database Management", "APIs"],
      productUrl: "https://portal.foxyai.com/",
      screenshot: "/images/projects/foxyai.png",
      order: 4,
      featured: true,
      createdAt: "2025-01-01T00:00:00.000Z"
    },
    {
      id: "5",
      title: "Pickleball Platform",
      description:
        "Comprehensive pickleball community platform with court booking, player matching, tournament management, and skill tracking for enthusiasts.",
      impact: "Community building • Court utilization • Player engagement",
      tech: ["React", "Node.js", "Geolocation", "Real-time Chat", "Payment"],
      productUrl: "https://pickleball.com/",
      screenshot: "/images/projects/pickleball.png",
      order: 5,
      featured: true,
      createdAt: "2025-01-01T00:00:00.000Z"
    },
    {
      id: "6",
      title: "Hospitality Platform",
      description:
        "Advanced online ordering and experience builder for restaurants and hospitality businesses, featuring customizable ordering flows and customer engagement tools.",
      impact: "Order conversion • Customer experience • Revenue optimization",
      tech: ["React", "Order Management", "Payment Processing", "Analytics"],
      productUrl: "https://www.paytronix.com/",
      screenshot: "/images/projects/devex-platform.png",
      order: 6,
      featured: true,
      createdAt: "2025-01-01T00:00:00.000Z"
    },
    {
      id: "7",
      title: "Insurance Platform",
      description:
        "Modern insurance quoting platform with Survey.js integration, Canopy Connect APIs, and Microsoft Dynamics integration for streamlined policy management.",
      impact: "Quote accuracy • Process automation • Agent productivity",
      tech: ["React", "Survey.js", "Canopy Connect", "Microsoft Dynamics"],
      productUrl: "https://www.brightway.com/",
      screenshot: "/images/projects/brightway.png",
      order: 7,
      featured: true,
      createdAt: "2025-01-01T00:00:00.000Z"
    },
    {
      id: "8",
      title: "Healthcare CDI Audit",
      description:
        "Clinical Documentation Improvement platform using AI to analyze medical records and provide retrospective insights for healthcare quality and compliance.",
      impact: "Documentation quality • Compliance accuracy • Clinical insights",
      tech: ["React", "AI/ML", "Healthcare APIs", "Data Analysis", "Python"],
      productUrl: "https://www.iodinesoftware.com/",
      screenshot: "/images/projects/optimization-engine.png",
      order: 8,
      featured: true,
      createdAt: "2025-01-01T00:00:00.000Z"
    },
    {
      id: "9",
      title: "JIRA Analytics",
      description:
        "Advanced project dashboard and analytics suite for JIRA with comprehensive reporting, velocity tracking, and team performance insights.",
      impact: "Team productivity • Project visibility • Data-driven decisions",
      tech: ["React", "D3.js", "Atlassian APIs", "Analytics", "Dashboard"],
      productUrl: "https://www.tempo.io/products/project-dashboards-for-jira",
      screenshot: "/images/projects/jira-analytics.png",
      order: 9,
      featured: true,
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
    performance: [
      "Cursor AI",
      "Windsurf",
      "Claude Code",
      "GitHub Copilot",
      "V0 by Vercel",
      "AI-assisted debugging",
      "Rapid prototyping",
      "Code generation",
      "Performance profiling",
      "Bundle optimization"
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
      "Cursor IDE",
      "Windsurf IDE", 
      "Claude Code",
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
      "AI-Accelerated Development",
      "Component-driven Development",
      "Design Systems",
      "Accessibility (WCAG)",
      "Agile/Scrum",
      "TDD/BDD",
      "Code Reviews",
      "AI-Assisted Pair Programming",
      "Performance Optimization",
      "CI/CD",
      "DevEx/Reliability",
      "Rapid Prototyping with GenAI"
    ]
  },

  lookingFor: {
    title: "What I'm Looking For",
    description:
      "Small, high-ownership teams where I can own core product UI and broader architecture—especially in logistics/TMS, vertical SaaS, or AI-powered workflows. Senior/Staff SWE or Tech Lead scope with real impact."
  }
};
