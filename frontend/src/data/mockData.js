export const mockPortfolioData = {
  personal: {
    name: "Q",
    fullName: "Cody Christ (Q)",
    title: "Senior Software Engineer",
    subtitle: "AI-Powered Products | Real-time Systems | Compliance Expert",
    tagline:
      "I build real-time, AI-assisted products at scale. From resilient UIs with React 18 to LLM observability with guardrails, I blend startup speed with enterprise rigor. 12 years of experience across AI platforms, fintech, and customer support.",
    email: "qcody1011@gmail.com",
    phone: "+1 (206) 238 7108",
    location: "Pasco, WA 99301",
    resumeUrl: "https://drive.google.com/file/d/1A06OQOoaMIWGUlK8a2U_z5UH9HWKv_zh/view?usp=sharing",
    linkedin: "https://www.linkedin.com/in/cody-christ-6a2708383/",
    portfolio: "https://q-cody.vercel.app",
    github: "https://github.com/qcodyq"
  },

  about: {
    summary:
      "Hi, I'm Q! Senior Software Engineer (full-stack) with 12 years building and operating real-time, AI-assisted products at scale. I design resilient, high-performance UIs (React 18 concurrent features, RSC/SSR/ISR, streaming with backoff/resume, WebSockets/WebRTC) and reliable backends (Node/FastAPI, GraphQL/REST, queues). I operationalize LLM features (eval harnesses, guardrails, rollback) and enforce privacy & compliance (SOC 2, PCI, HIPAA-aligned). I invest in observability, SLOs, and cost control so features stay fast, safe, and sustainable.",
    experience:
      "12+ years • AI-powered platforms → Fintech → Customer support • Focus on real-time systems with compliance and observability",
    expertise:
      "React 18 • Next.js • Node.js/FastAPI • LLM integration • Compliance (SOC 2, PCI, HIPAA) • Observability • Team mentorship",
    mindset:
      "I thrive in startup environments, where I can work with smaller, cross-functional teams to make an immediate impact and continuously learn. I blend startup speed with enterprise rigor, bringing consulting versatility to every project.",
    metrics: [
      "Led AI coding assistant surfaces end-to-end with resilient fallbacks",
      "Built LLM observability with token-cost dashboards and p95 latency targets", 
      "Established guardrail policies with offline eval harness and automatic rollback",
      "Delivered HIPAA-aligned telehealth features with field-level encryption",
      "Mentored engineers on prompt versioning and privacy-first debugging"
    ]
  },

  experience: [
    {
      id: "1",
      company: "Replit",
      position: "Senior Software Engineer",
      duration: "09/2022 - Present",
      description:
        "AI-powered developer platform (non-FAANG, massive user base)",
      achievements: [
        "Led AI coding assistant surfaces end-to-end (routing, context retrieval, inline suggestions, streaming UX) with resilient fallbacks for timeouts, rate limits, and partial completions.",
        "Implemented prompt & artifact store with per-tenant isolation, retention windows, encryption at rest (KMS), and privacy-aware logs; aligned workflows to SOC 2 change control.",
        "Built LLM observability: prompt/response traces, token-cost dashboards, p95 latency targets, and model-tier routing to keep spend and performance within budget.",
        "Established guardrail policies (prompt-injection, PII, toxicity) and an offline eval harness with red-team sets and automatic rollback on quality or safety regressions.",
        "Co-maintained design-system primitives for AI interactions (explain/fix, intent disambiguation, confidence hints) with a11y checks baked into CI and locale-safe copy for prompts/UI.",
        "Partnered with SRE to define SLOs and incident runbooks for AI paths; added targeted alerts and pre-mortem checks that eliminated repeat incidents on key flows.",
        "Mentored engineers on prompt versioning, privacy-first debugging, and contract tests between routing, eval, and serving services."
      ],
      order: 1,
      createdAt: "2025-01-01T00:00:00.000Z"
    },
    {
      id: "2",
      company: "Thoughtbot",
      position: "Senior Software Engineer / Technical Lead",
      duration: "10/2018 - 08/2022",
      description:
        "Boutique consultancy for startups & regulated orgs",
      achievements: [
        "Drove multi-client delivery across healthcare, fintech, real estate, and AI tooling—owning architecture, scoping/RFCs, and steady release cadence from discovery to launch.",
        "Delivered HIPAA-aligned telehealth features: RBAC, field-level encryption, audit logs, secure document exchange; authored DPIAs, data-flow diagrams, and retention policies.",
        "Built retrieval-augmented assistants for policy/claims and document triage with eval gates, safe fallbacks, and cost-aware model selection.",
        "Created a token-driven design system and schema-based form engine to reduce UI defects and accelerate iteration across web and mobile.",
        "Set up CI/CD + IaC (GitHub Actions, Terraform/Pulumi) with preview apps, smoke/contract tests, and SLO dashboards clients could own post-engagement.",
        "Guided stakeholders through trade-offs (scope, risks, compliance), translating ambiguity into small, testable milestones without compromising quality.",
        "Introduced observability basics (OpenTelemetry traces, error budgets) so teams could measure reliability before growth inflection points."
      ],
      order: 2,
      createdAt: "2025-01-01T00:00:00.000Z"
    },
    {
      id: "3",
      company: "Stripe",
      position: "Software Engineer",
      duration: "12/2015 - 10/2018",
      description:
        "Enterprise-grade fintech platform",
      achievements: [
        "Contributed to Stripe CLI and Dashboard flows (local webhooks, signed test events, env scaffolding) and added DX telemetry to reduce onboarding friction.",
        "Improved webhook reliability with idempotency, retry/backoff, and dashboards; collaborated cross-team to remove failure hotspots and tighten operational contracts.",
        "Supported Payment Intents and internal GraphQL tooling with consistent error semantics and discoverable docs used by multiple product teams.",
        "Worked with Security/Compliance on PCI DSS / SOC 2 concerns-secrets hygiene, change control, audit trails-and shared secure-coding guidelines with UI/SDK teams.",
        "Co-authored a shared React/TypeScript component library for internal tools to standardize UX and expedite accessibility reviews.",
        "Participated in on-call rotations and post-mortems, adding preventative checks that reduced alert noise.",
        "Closed the loop with DevRel/Support to turn real-world developer pain into CLI/Dashboard fixes."
      ],
      order: 3,
      createdAt: "2025-01-01T00:00:00.000Z"
    },
    {
      id: "4",
      company: "Intercom",
      position: "Frontend Engineer",
      duration: "02/2013 - 10/2015",
      description:
        "Early product-stage customer-support platform",
      achievements: [
        "Built real-time inbox features (React + WebSockets/SSE): presence, typing, optimistic updates, and state management tuned for high-throughput teams.",
        "Partnered with Design to establish accessible, theme-able UI primitives that evolved into foundational design system patterns.",
        "Instrumented RUM and product analytics to prioritize responsiveness and clarity over surface area; fed insights into roadmap decisions.",
        "Explored early semantic-search and templated responses-precursors to modern AI support flows.",
        "Implemented a11y gates (keyboard support, focus order, contrast) and pragmatic testing (component, contract, smoke) to keep velocity without regressions.",
        "Coordinated closely with Support Ops and PMs to ship incremental, measurable improvements to agent workflows.",
        "Documented conventions for error handling, stream resilience, and code review to raise team consistency."
      ],
      order: 4,
      createdAt: "2025-01-01T00:00:00.000Z"
    }
  ],

  projects: [
    {
      id: "1",
      title: "AI Coding Assistant at Replit",
      description: "Built AI coding assistant with routing, context retrieval, and streaming UX. Implemented LLM observability, guardrails, and cost control dashboards.",
      impact: "✨ Resilient AI fallbacks • 🔒 SOC 2 compliance • 📊 Cost optimization",
      tech: ["React", "TypeScript", "LLM APIs", "Observability"],
      url: "https://replit.com",
      image: "/images/replit-preview.jpg",
      status: "Production",
      order: 1,
      featured: true,
      createdAt: "2025-01-01T00:00:00.000Z"
    },
    {
      id: "2", 
      title: "Healthcare & Fintech Solutions",
      description: "Led multi-client delivery for healthcare and fintech. Built HIPAA-compliant telehealth features and RAG assistants with privacy controls.",
      impact: "🏥 HIPAA compliance • 🤖 RAG assistants • 🎨 Design systems",
      tech: ["React", "Python", "HIPAA", "RAG", "Terraform"],
      url: "https://thoughtbot.com",
      image: "/images/thoughtbot-preview.jpg",
      status: "Multiple Clients",
      order: 2,
      featured: true,
      createdAt: "2025-01-01T00:00:00.000Z"
    },
    {
      id: "3",
      title: "Stripe Payment Infrastructure",
      description: "Enhanced Stripe CLI and Dashboard with webhook reliability, GraphQL tooling, and PCI compliance. Reduced developer onboarding friction.",
      impact: "⚡ Developer experience • 🔄 Webhook reliability • 🛡️ PCI compliance",
      tech: ["TypeScript", "GraphQL", "CLI tools", "PCI DSS"],
      url: "https://stripe.com",
      image: "/images/stripe-preview.jpg",
      status: "Enterprise Scale",
      order: 3,
      featured: true,
      createdAt: "2025-01-01T00:00:00.000Z"
    },
    {
      id: "4",
      title: "Intercom Real-time Platform",
      description: "Built real-time inbox with WebSockets, presence indicators, and design system foundations. Focused on accessibility and performance.",
      impact: "💬 Real-time messaging • ♿ Accessibility standards • 🎨 Design foundations",
      tech: ["React", "WebSockets", "Design Systems", "a11y"],
      url: "https://intercom.com",
      image: "/images/intercom-preview.jpg",
      status: "High Scale",
      order: 4,
      featured: true,
      createdAt: "2025-01-01T00:00:00.000Z"
    },
    {
      id: "5",
      title: "TreeGPT - AI Conversation Trees",
      description: "Multi-model AI chat with conversation branching visualization. Supports GPT-4, Claude, and Gemini with D3.js tree navigation.",
      impact: "🤖 Multi-model AI • 🌳 Visual branching • 🚀 Live demo available",
      tech: ["Next.js", "D3.js", "OpenAI", "Anthropic"],
      url: "https://treegpt-pi.vercel.app",
      image: "/images/treegpt-preview.jpg",
      status: "Live Demo",
      order: 5,
      featured: true,
      createdAt: "2025-01-01T00:00:00.000Z"
    }
  ],

  techStack: {
    frontend: [
      "React 18",
      "Next.js (SSR/ISR/Edge)",
      "TypeScript",
      "Vue.js",
      "WebSockets/SSE",
      "WebRTC",
      "Three.js",
      "D3",
      "Mapbox GL/Deck.gl",
      "React Native",
      "Streaming/Optimistic UI",
      "Virtualization (react-virtual)",
      "Canvas/WebGL"
    ],
    designSystems: [
      "Storybook",
      "Design tokens",
      "Tailwind",
      "Radix UI/Shadcn",
      "CSS-in-JS",
      "WCAG 2.1 AA",
      "Axe",
      "ARIA/Keyboard traps",
      "Accessibility in CI",
      "Intl/Localization",
      "RTL"
    ],
    backend: [
      "Node.js (Express/NestJS)",
      "Python (FastAPI/Django/Flask)",
      "Go",
      "Ruby",
      "Java Spring Boot",
      "C#/.NET",
      "GraphQL (Apollo/Federation)",
      "REST/OpenAPI/Swagger",
      "gRPC",
      "Prisma/TypeORM/Sequelize"
    ],
    aiProductization: [
      "RAG",
      "Embeddings",
      "Vector DBs (Pinecone/Qdrant/FAISS)",
      "LangChain/LlamaIndex",
      "Prompt routing/Versioning",
      "Offline eval harnesses",
      "Red-teaming",
      "Guardrails & Rollback",
      "Token-cost dashboards",
      "OpenAI/Anthropic/Bedrock/Vertex AI",
      "Reranking",
      "Hallucination tests"
    ],
    reliability: [
      "CI/CD (GitHub Actions/CircleCI/Jenkins)",
      "IaC (Terraform/Pulumi/CDK)",
      "Feature flags (LaunchDarkly/GrowthBook)",
      "SLO/SLI/SLA",
      "Prometheus/Grafana",
      "Datadog",
      "Sentry/LogRocket",
      "Docker/Kubernetes (EKS/ECS/GKE)",
      "Helm",
      "Argo CD",
      "Nginx",
      "Vercel/Cloudflare"
    ],
    dataStreaming: [
      "PostgreSQL/MySQL",
      "MongoDB",
      "Redis",
      "S3",
      "Kafka/RabbitMQ/Kinesis/SQS/SNS",
      "Elasticsearch/OpenSearch",
      "Snowflake/Databricks Delta/BigQuery",
      "ETL/ELT",
      "Airflow/DBT/Spark",
      "Event-driven services",
      "OpenTelemetry tracings"
    ]
  },

  education: {
    degree: "B.S. Computer Science",
    school: "University of Alaska Anchorage",
    description: "Comprehensive computer science foundation covering algorithms, data structures, software engineering principles, and systems design."
  },

  lookingFor: {
    title: "What I'm Looking For Next",
    description:
      "I'm looking for senior engineering roles where I can leverage my experience building AI-powered products at scale. I'm interested in positions that combine technical leadership with hands-on development, particularly in AI/ML platforms, real-time systems, or developer tools. I thrive in environments that value observability, compliance, and sustainable product development with cross-functional collaboration."
  },

  showcase: {
    title: "Current Focus",
    items: [
      "🎯 AI/ML platform engineering with LLM observability",
      "🔒 Compliance-first development (SOC 2, HIPAA, PCI)",
      "⚡ Real-time systems with resilient architectures",
      "🎨 Design systems with accessibility at the core",
      "📊 Observability and cost optimization strategies"
    ]
  }
};
