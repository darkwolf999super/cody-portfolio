export const mockPortfolioData = {
  personal: {
    name: "Cody Christ",
    title: "Senior Software Engineer",
    subtitle: "Engineer | Builder",
    tagline:
      "I've built things that matter — from secure logins to real-time dashboards and ML integrations. Full-stack engineer focused on scalable, data-driven solutions.",
    email: "codyrist0383@gmail.com",
    location: "Seattle, WA, 98103",
    resumeUrl: "https://drive.google.com/file/d/1LN8G4KOnH0fBskDAqWW50V-7XvQCm9Fa/view?usp=sharing",
    linkedin: "https://www.linkedin.com/in/cody-christ-6a2708383/",
    portfolio: "https://codyrist.vercel.app/",
    github: "https://github.com/codyrist"
  },

  about: {
    summary:
      "I've built things that matter — starting with secure logins at Auth0, moving to real-time dashboards and ML at H2O.ai, and diving into data-driven solutions at Databricks. Along the way, I've learned the power of data, but I'm a full-stack engineer at heart, focused on creating user-facing features and APIs. I specialize in delivering scalable, data-driven solutions and AI/ML integrations with end-to-end expertise, from frontend interfaces to backend systems.",
    experience:
      "9+ years • Authentication platforms → AI/ML platforms → Data analytics • Focus on full-stack development with AI/ML integration",
    expertise:
      "React/Next.js • Node.js/Python/Go • Real-time systems • AI/ML integration • Data pipelines • Team leadership",
    mindset:
      "I thrive in startup environments, where I can work with smaller, cross-functional teams to make an immediate impact and continuously learn.",
    metrics: [
      "40% improvement in user-facing insights through AI model integration",
      "35% reduction in deployment time via CI/CD automation", 
      "35% API latency reduction through Redis caching optimization",
      "Led development of 30+ reusable visualization components",
      "Mentored teams of 5 engineers with high code quality standards"
    ]
  },

  experience: [
    {
      id: "1",
      company: "Databricks",
      position: "Senior Software Engineer",
      duration: "09/2021 - Present",
      description:
        "Developed high-performance full-stack solutions for data analytics platforms",
      achievements: [
        "Led the development of real-time interactive dashboards with React, Node.js, and Python, integrating AI models to improve user-facing insights by 40%, enabling scalable, data-driven decision-making.",
        "Engineered scalable backend APIs with Go, Node.js, and GraphQL, optimizing data pipelines and integrating machine learning models for enhanced user engagement and analysis.",
        "Partnered with data science teams to deploy ML models to production, improving real-time data processing and predictive analytics.",
        "Spearheaded the implementation of CI/CD pipelines using GitHub Actions, AWS CDK, Pulumi, and Docker, automating deployments and reducing deployment time by 35%.",
        "Mentored a team of 5 engineers, fostering collaboration and ensuring high standards of code quality across projects."
      ],
      order: 1,
      createdAt: "2025-01-01T00:00:00.000Z"
    },
    {
      id: "2",
      company: "H2O.ai",
      position: "Software Engineer",
      duration: "01/2019 - 08/2021",
      description:
        "Developed real-time AI-powered data visualizations and integrated ML models into web platforms",
      achievements: [
        "Developed 30+ reusable visualization components with React and Plotly.js, enabling users to drag-and-drop dashboard elements and interact with data in real time.",
        "Designed and implemented real-time data streaming features with WebSocket and SSE, allowing live updates of AI/ML insights, improving interactivity of dashboards.",
        "Created a declarative UI DSL and schema validator for dynamically rendering user interfaces from JSON and Python configurations, facilitating customizable ML workflows for clients.",
        "Developed scalable backend APIs with Python/Flask and GraphQL, powering real-time data pipelines for AI model result delivery and interactive dashboard updates.",
        "Implemented CI/CD pipelines with Docker, GitHub Actions, and Terraform, automating deployment and improving reliability."
      ],
      order: 2,
      createdAt: "2025-01-01T00:00:00.000Z"
    },
    {
      id: "3",
      company: "Auth0",
      position: "Software Developer",
      duration: "05/2015 - 01/2019",
      description:
        "Built scalable authentication features and enhanced user experience with real-time data analysis",
      achievements: [
        "Enhanced the core identity platform by implementing secure authentication flows (OAuth2.0, OpenID Connect, and MFA) for enterprise clients.",
        "Developed a real-time user analysis dashboard using React and Apache Echarts, enabling internal teams and clients to visualize user behavior and system performance live.",
        "Built scalable backend services using Node.js and Express.js, handling user provisioning, token validation, and custom login experiences across multiple apps.",
        "Integrated Redis-based caching strategies, reducing API latency by 35% and enhancing the responsiveness of high-demand endpoints.",
        "Contributed to Auth0 SDK development, improving developer documentation and accelerating third-party integrations."
      ],
      order: 3,
      createdAt: "2025-01-01T00:00:00.000Z"
    }
  ],

  projects: [
    {
      id: "1",
      title: "Databricks Analytics Platform",
      description: "Enterprise data analytics platform delivering real-time insights through AI-powered dashboards. Architected scalable backend APIs optimizing data pipelines for enhanced user engagement and built comprehensive ML model deployment infrastructure. Integrated advanced visualization components with streaming data processing capabilities, enabling business intelligence teams to make data-driven decisions with 40% faster insight generation. Implemented robust authentication systems and role-based access controls for enterprise-grade security.",
      impact: "40% improvement in user insights • 35% deployment time reduction • ML model production deployment",
      tech: ["React", "Node.js", "Python", "Go", "GraphQL", "AI/ML", "AWS CDK", "Docker"],
      url: "https://databricks.com/product/data-intelligence-platform",
      order: 1,
      featured: true,
      createdAt: "2025-01-01T00:00:00.000Z"
    },
    {
      id: "2", 
      title: "H2O.ai ML Platform",
      description: "Interactive ML visualization framework featuring 30+ drag-and-drop components for rapid dashboard creation. Built comprehensive real-time streaming infrastructure using declarative Python DSL, enabling data scientists to create dynamic ML workflows without frontend expertise. Developed custom visualization widgets with Plotly.js integration, supporting real-time model monitoring, A/B testing interfaces, and collaborative analytics environments. Implemented WebSocket-based live data streaming with server-sent events for seamless user experience and sub-second latency updates.",
      impact: "30+ reusable components • Real-time ML insights • Improved dashboard interactivity",
      tech: ["React", "Plotly.js", "Python", "Flask", "GraphQL", "WebSocket", "SSE", "Docker"],
      url: "https://wave.h2o.ai/",
      order: 2,
      featured: true,
      createdAt: "2025-01-01T00:00:00.000Z"
    },
    {
      id: "3",
      title: "Auth0 Identity Platform",
      description: "Enterprise identity management system implementing OAuth2.0, OpenID Connect, and multi-factor authentication protocols. Developed comprehensive real-time user analytics dashboard with advanced security monitoring and threat detection capabilities. Built high-performance authentication APIs handling millions of requests with Redis-based session management and distributed caching. Integrated Apache ECharts for interactive security metrics visualization, user behavior analytics, and compliance reporting. Implemented adaptive authentication flows with risk-based access controls and anomaly detection algorithms.",
      impact: "Enterprise authentication • 35% API latency reduction • Real-time user analytics",
      tech: ["React", "Node.js", "Express.js", "Apache Echarts", "Redis", "OAuth2.0", "OpenID Connect"],
      url: "https://auth0.com/platform",
      order: 3,
      featured: true,
      createdAt: "2025-01-01T00:00:00.000Z"
    },
    {
      id: "4",
      title: "TreeGPT - Branching Conversations",
      description: "Revolutionary AI chat platform supporting conversation branching with multiple language models (GPT-4, Claude, Gemini). Built comprehensive conversation management system with D3.js visualization for exploring conversation trees and decision paths. Implemented secure authentication flows, real-time chat interface with WebSocket connections, and advanced sharing/export/import functionality for collaborative AI workflows. Features include conversation forking at any message, model switching mid-conversation, and visual tree navigation for complex multi-path discussions.",
      impact: "Multi-model AI integration • Visual conversation branching • Collaborative AI workflows",
      tech: ["React", "Next.js", "D3.js", "WebSockets", "OpenAI API", "Anthropic API", "Vercel"],
      url: "https://treegpt-pi.vercel.app",
      order: 4,
      featured: true,
      createdAt: "2025-01-01T00:00:00.000Z"
    },
    {
      id: "5",
      title: "SMB AI Finance - Smart Reconciliation",
      description: "Intelligent financial management platform for small/medium businesses combining AI-powered invoice processing with automated bank transaction reconciliation. Integrates with email inboxes to automatically parse incoming invoices and attachments using OCR and natural language processing. Advanced matching algorithms compare invoice data with bank transactions, identifying discrepancies and suggesting reconciliation actions. Features include automated categorization, expense tracking, financial reporting, and audit trail generation for seamless accounting workflows.",
      impact: "Automated invoice processing • 90% reconciliation accuracy • 60% time savings",
      tech: ["React", "Next.js", "Python", "OpenAI API", "OCR", "Plaid API", "Vercel"],
      url: "https://smb-ai-finance.vercel.app",
      order: 5,
      featured: true,
      createdAt: "2025-01-01T00:00:00.000Z"
    },
    {
      id: "6",
      title: "More Projects",
      description: "Explore additional projects and experiments including blockchain applications, mobile development, DevOps automation, and open-source contributions. From prototype to production, each project demonstrates different aspects of full-stack development and emerging technologies.",
      impact: "Continuous learning • Technology exploration • Open-source contributions",
      tech: ["Various Technologies"],
      url: "#",
      order: 6,
      featured: true,
      createdAt: "2025-01-01T00:00:00.000Z"
    }
  ],

  techStack: {
    frontend: [
      "React",
      "Next.js",
      "Vue",
      "Angular",
      "TypeScript",
      "JavaScript",
      "Redux",
      "Zustand",
      "TailwindCSS",
      "MUI",
      "D3.js",
      "Plotly.js",
      "WebSockets",
      "Storybook"
    ],
    backend: [
      "Node.js",
      "Express.js",
      "Python",
      "Go",
      "FastAPI",
      "Flask",
      "GraphQL",
      "REST",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Kafka",
      "Microservices",
      "Real-time pipelines",
      "ML model integration"
    ],
    performance: [
      "Redis Caching",
      "API Optimization",
      "Real-time Systems",
      "WebSocket Connections",
      "Performance Monitoring",
      "Load Balancing",
      "Database Optimization",
      "CDN Integration",
      "Lazy Loading",
      "Code Splitting",
      "Memory Management",
      "Latency Reduction"
    ],
    tools: [
      "Git",
      "GitHub",
      "Docker",
      "Kubernetes",
      "AWS",
      "GCP",
      "Terraform",
      "GitHub Actions",
      "Jest",
      "Cypress",
      "Playwright",
      "VSCode",
      "Figma",
      "Postman"
    ],
    methodologies: [
      "Agile/Scrum",
      "TDD/BDD",
      "Code Reviews",
      "CI/CD",
      "DevOps",
      "Team Leadership",
      "Mentoring",
      "Data-driven Development",
      "AI/ML Integration",
      "Performance Optimization"
    ]
  },

  lookingFor: {
    title: "What I'm Looking For",
    description:
      "I'm eager to contribute my skills and experience to innovative projects that leverage real-time data, AI, and cloud technologies to solve complex problems. Looking for opportunities in data analytics, AI/ML platforms, or full-stack development roles where I can make an immediate impact with cross-functional teams."
  }
};
