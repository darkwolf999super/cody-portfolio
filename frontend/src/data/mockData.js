export const mockPortfolioData = {
  personal: {
    name: "Cody Christ",
    title: "Senior Software Engineer",
    subtitle: "Engineer | Builder",
    tagline:
      "I've built things that matter — from secure logins to real-time dashboards and ML integrations. Full-stack engineer focused on scalable, data-driven solutions.",
    email: "codyrist0383@gmail.com",
    location: "Seattle, WA, 98103",
    resumeUrl: "https://codyrist.vercel.app",
    linkedin: "https://www.linkedin.com/in/cody-christ-6a2708384/",
    portfolio: "https://codyrist.vercel.app"
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
      description:
        "High-performance data analytics platform with real-time interactive dashboards and AI model integration. Built scalable backend APIs optimizing data pipelines for enhanced user engagement.",
      impact: "40% improvement in user insights • 35% deployment time reduction • ML model production deployment",
      tech: ["React", "Node.js", "Python", "Go", "GraphQL", "AI/ML", "AWS CDK", "Docker"],
      productUrl: "https://databricks.com/",
      screenshot: "https://databricks.com/wp-content/uploads/2023/05/databricks-ai-bi-dashboards.png",
      order: 1,
      featured: true,
      createdAt: "2025-01-01T00:00:00.000Z"
    },
    {
      id: "2", 
      title: "H2O.ai ML Platform",
      description:
        "Real-time AI-powered data visualization platform with 30+ reusable components. Features drag-and-drop dashboard elements, real-time data streaming, and declarative UI DSL for dynamic ML workflows.",
      impact: "30+ reusable components • Real-time ML insights • Improved dashboard interactivity",
      tech: ["React", "Plotly.js", "Python", "Flask", "GraphQL", "WebSocket", "SSE", "Docker"],
      productUrl: "https://h2o.ai/",
      screenshot: "https://h2o.ai/content/dam/h2oai/en/marketing/images/logo/H2O-wave-screenshot.png",
      order: 2,
      featured: true,
      createdAt: "2025-01-01T00:00:00.000Z"
    },
    {
      id: "3",
      title: "Auth0 Identity Platform",
      description:
        "Secure authentication and identity management platform with OAuth2.0, OpenID Connect, and MFA implementation. Built real-time user analytics dashboard and scalable backend services.",
      impact: "Enterprise authentication • 35% API latency reduction • Real-time user analytics",
      tech: ["React", "Node.js", "Express.js", "Apache Echarts", "Redis", "OAuth2.0", "OpenID Connect"],
      productUrl: "https://auth0.com/",
      screenshot: "https://cdn.auth0.com/website/auth0-dashboard-screenshot.png",
      order: 3,
      featured: true,
      createdAt: "2025-01-01T00:00:00.000Z"
    },
    {
      id: "4",
      title: "Real-time Dashboard Suite",
      description:
        "Collection of real-time interactive dashboards built across multiple platforms, featuring live data streaming, AI/ML integration, and advanced data visualization components.",
      impact: "Real-time insights • Interactive data exploration • Scalable visualization",
      tech: ["React", "D3.js", "WebSockets", "Python", "GraphQL", "Redis", "Kafka"],
      screenshot: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
      order: 4,
      featured: true,
      createdAt: "2025-01-01T00:00:00.000Z"
    },
    {
      id: "5",
      title: "CI/CD Automation Pipeline",
      description:
        "Comprehensive CI/CD automation system using GitHub Actions, Docker, and cloud deployment tools. Implemented across multiple platforms to reduce deployment time and improve reliability.",
      impact: "35% deployment time reduction • Automated testing • Improved reliability",
      tech: ["GitHub Actions", "Docker", "Terraform", "AWS", "Kubernetes", "Jest", "Playwright"],
      screenshot: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=600&fit=crop&crop=center",
      order: 5,
      featured: true,
      createdAt: "2025-01-01T00:00:00.000Z"
    }
  ],

  techStack: {
    languages: [
      "JavaScript",
      "TypeScript", 
      "Python",
      "SQL",
      "Go",
      "Java",
      "C/C++",
      "HTML/CSS",
      "Bash"
    ],
    frontend: [
      "React",
      "Next.js",
      "Vue",
      "Angular",
      "Redux",
      "Zustand",
      "Jotai", 
      "ContextAPI",
      "MUI",
      "TailwindCSS",
      "Storybook",
      "D3.js",
      "Three.js",
      "Plotly.js",
      "Electron",
      "WebSockets",
      "i18n",
      "Accessibility",
      "Microfrontends"
    ],
    backend: [
      "Node.js",
      "Express.js",
      "Nest.js",
      "Go",
      "FastAPI",
      "Flask",
      "GraphQL",
      "REST",
      "Microservices",
      "Redis",
      "Kafka",
      "PostgreSQL",
      "MongoDB",
      "Real-time data pipelines",
      "ML model integration"
    ],
    testing: [
      "Jest",
      "Cypress", 
      "Playwright",
      "Podman",
      "Detox",
      "Unit Testing",
      "Integration Testing",
      "End-to-end Testing"
    ],
    cloud: [
      "AWS",
      "GCP",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Pulumi",
      "CI/CD",
      "GitHub Actions",
      "Jenkins",
      "Datadog",
      "Sentry",
      "Retool",
      "Mixpanel",
      "Grafana"
    ],
    tools: [
      "Git",
      "GitHub",
      "Jira",
      "Figma",
      "VSCode",
      "Chrome DevTools",
      "Postman",
      "ESLint",
      "Prettier",
      "Apache Echarts"
    ],
    methodologies: [
      "Agile/Scrum",
      "TDD/BDD",
      "Code Reviews",
      "CI/CD",
      "DevOps",
      "Team Leadership",
      "Mentoring",
      "Real-time Systems",
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
