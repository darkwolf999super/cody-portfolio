from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List, Optional, Dict, Any
import uuid
from datetime import datetime
from bson import ObjectId


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Portfolio Models
class PersonalInfo(BaseModel):
    name: str
    title: str
    subtitle: str
    tagline: str
    phone: str
    email: str
    location: str
    resumeUrl: str
    linkedin: str
    portfolio: str
    github: str

class AboutInfo(BaseModel):
    summary: str
    experience: str
    expertise: str
    mindset: str

class LookingForInfo(BaseModel):
    title: str
    description: str

class PortfolioConfig(BaseModel):
    personal: PersonalInfo
    about: AboutInfo
    lookingFor: LookingForInfo
    updatedAt: datetime = Field(default_factory=datetime.utcnow)

class Experience(BaseModel):
    id: Optional[str] = None
    company: str
    position: str
    duration: str
    description: str
    achievements: List[str]
    order: int = 0
    createdAt: datetime = Field(default_factory=datetime.utcnow)

class Project(BaseModel):
    id: Optional[str] = None
    title: str
    description: str
    impact: str
    tech: List[str]
    order: int = 0
    featured: bool = False
    createdAt: datetime = Field(default_factory=datetime.utcnow)

class TechStack(BaseModel):
    id: Optional[str] = None
    category: str
    technologies: List[str]
    icon: str
    color: str
    order: int = 0

class PortfolioData(BaseModel):
    personal: PersonalInfo
    about: AboutInfo
    experience: List[Experience]
    projects: List[Project]
    techStack: Dict[str, List[str]]  # For frontend compatibility
    lookingFor: LookingForInfo

# Legacy models for backward compatibility
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

# Helper functions
def serialize_doc(doc):
    """Convert MongoDB document to JSON serializable format"""
    if doc and '_id' in doc:
        doc['id'] = str(doc['_id'])
        del doc['_id']
    return doc

async def init_portfolio_data():
    """Initialize portfolio with mock data if not exists"""
    portfolio_exists = await db.portfolio_config.find_one()
    if portfolio_exists:
        return
    
    # Initialize with mock data
    mock_personal = {
        "name": "Cody Christ",
        "title": "Senior Software Engineer",
        "subtitle": "Engineer | Builder",
        "tagline": "I've built things that matter — from secure logins to real-time dashboards and ML integrations. Full-stack engineer focused on scalable, data-driven solutions.",
        "phone": "+1 (206) 555-0123",
        "email": "codyrist0383@gmail.com",
        "location": "Seattle, WA, 98103",
        "resumeUrl": "https://codyrist.vercel.app",
        "linkedin": "https://www.linkedin.com/in/cody-christ-6a2708383/",
        "portfolio": "https://codyrist.vercel.app/",
        "github": "https://github.com/codywarrior"
    }
    
    mock_about = {
        "summary": "I've built things that matter — starting with secure logins at Auth0, moving to real-time dashboards and ML at H2O.ai, and diving into data-driven solutions at Databricks. Full-stack engineer focused on creating user-facing features and APIs with AI/ML integrations.",
        "experience": "10+ years • Authentication platforms → AI/ML platforms → Data analytics • Focus on full-stack development with AI/ML integration",
        "expertise": "React/Next.js • Node.js/Python/Go • Real-time systems • AI/ML integration • Data pipelines • Team leadership",
        "mindset": "I thrive in startup environments, where I can work with smaller, cross-functional teams to make an immediate impact and continuously learn."
    }
    
    mock_looking_for = {
        "title": "What I'm Looking For",
        "description": "I'm eager to contribute my skills and experience to innovative projects that leverage real-time data, AI, and cloud technologies to solve complex problems. Looking for opportunities in data analytics, AI/ML platforms, or full-stack development roles where I can make an immediate impact with cross-functional teams."
    }
    
    # Insert portfolio config
    await db.portfolio_config.insert_one({
        "personal": mock_personal,
        "about": mock_about,
        "lookingFor": mock_looking_for,
        "updatedAt": datetime.utcnow()
    })
    
    # Insert experiences
    mock_experiences = [
        {
            "company": "Databricks",
            "position": "Senior Software Engineer",
            "duration": "09/2021 - Present",
            "description": "Developed high-performance full-stack solutions for data analytics platforms",
            "achievements": [
                "Led the development of real-time interactive dashboards with React, Node.js, and Python, integrating AI models to improve user-facing insights by 40%, enabling scalable, data-driven decision-making.",
                "Engineered scalable backend APIs with Go, Node.js, and GraphQL, optimizing data pipelines and integrating machine learning models for enhanced user engagement and analysis.",
                "Partnered with data science teams to deploy ML models to production, improving real-time data processing and predictive analytics.",
                "Spearheaded the implementation of CI/CD pipelines using GitHub Actions, AWS CDK, Pulumi, and Docker, automating deployments and reducing deployment time by 35%.",
                "Mentored a team of 5 engineers, fostering collaboration and ensuring high standards of code quality across projects."
            ],
            "order": 1,
            "createdAt": datetime.utcnow()
        },
        {
            "company": "H2O.ai",
            "position": "Software Engineer",
            "duration": "01/2019 - 08/2021",
            "description": "Developed real-time AI-powered data visualizations and integrated ML models into web platforms",
            "achievements": [
                "Developed 30+ reusable visualization components with React and Plotly.js, enabling users to drag-and-drop dashboard elements and interact with data in real time.",
                "Designed and implemented real-time data streaming features with WebSocket and SSE, allowing live updates of AI/ML insights, improving interactivity of dashboards.",
                "Created a declarative UI DSL and schema validator for dynamically rendering user interfaces from JSON and Python configurations, facilitating customizable ML workflows for clients.",
                "Developed scalable backend APIs with Python/Flask and GraphQL, powering real-time data pipelines for AI model result delivery and interactive dashboard updates.",
                "Implemented CI/CD pipelines with Docker, GitHub Actions, and Terraform, automating deployment and improving reliability."
            ],
            "order": 2,
            "createdAt": datetime.utcnow()
        },
        {
            "company": "Auth0",
            "position": "Software Developer",
            "duration": "05/2015 - 01/2019",
            "description": "Built scalable authentication features and enhanced user experience with real-time data analysis",
            "achievements": [
                "Enhanced the core identity platform by implementing secure authentication flows (OAuth2.0, OpenID Connect, and MFA) for enterprise clients.",
                "Developed a real-time user analysis dashboard using React and Apache Echarts, enabling internal teams and clients to visualize user behavior and system performance live.",
                "Built scalable backend services using Node.js and Express.js, handling user provisioning, token validation, and custom login experiences across multiple apps.",
                "Integrated Redis-based caching strategies, reducing API latency by 35% and enhancing the responsiveness of high-demand endpoints.",
                "Contributed to Auth0 SDK development, improving developer documentation and accelerating third-party integrations."
            ],
            "order": 3,
            "createdAt": datetime.utcnow()
        }
    ]
    
    for exp in mock_experiences:
        await db.experiences.insert_one(exp)
    
    # Insert projects
    mock_projects = [
        {
            "title": "Databricks Analytics Platform",
            "description": "High-performance data analytics platform with real-time interactive dashboards and AI model integration. Built scalable backend APIs optimizing data pipelines for enhanced user engagement.",
            "impact": "40% improvement in user insights • 35% deployment time reduction • ML model production deployment",
            "tech": ["React", "Node.js", "Python", "Go", "GraphQL", "AI/ML", "AWS CDK", "Docker"],
            "order": 1,
            "featured": True,
            "createdAt": datetime.utcnow()
        },
        {
            "title": "H2O.ai ML Platform",
            "description": "Real-time AI-powered data visualization platform with 30+ reusable components. Features drag-and-drop dashboard elements, real-time data streaming, and declarative UI DSL for dynamic ML workflows.",
            "impact": "30+ reusable components • Real-time ML insights • Improved dashboard interactivity",
            "tech": ["React", "Plotly.js", "Python", "Flask", "GraphQL", "WebSocket", "SSE", "Docker"],
            "order": 2,
            "featured": True,
            "createdAt": datetime.utcnow()
        },
        {
            "title": "Auth0 Identity Platform",
            "description": "Secure authentication and identity management platform with OAuth2.0, OpenID Connect, and MFA implementation. Built real-time user analytics dashboard and scalable backend services.",
            "impact": "Enterprise authentication • 35% API latency reduction • Real-time user analytics",
            "tech": ["React", "Node.js", "Express.js", "Apache Echarts", "Redis", "OAuth2.0", "OpenID Connect"],
            "order": 3,
            "featured": True,
            "createdAt": datetime.utcnow()
        },
        {
            "title": "Real-time Dashboard Suite",
            "description": "Collection of real-time interactive dashboards built across multiple platforms, featuring live data streaming, AI/ML integration, and advanced data visualization components.",
            "impact": "Real-time insights • Interactive data exploration • Scalable visualization",
            "tech": ["React", "D3.js", "WebSockets", "Python", "GraphQL", "Redis", "Kafka"],
            "order": 4,
            "featured": True,
            "createdAt": datetime.utcnow()
        },
        {
            "title": "CI/CD Automation Pipeline",
            "description": "Comprehensive CI/CD automation system using GitHub Actions, Docker, and cloud deployment tools. Implemented across multiple platforms to reduce deployment time and improve reliability.",
            "impact": "35% deployment time reduction • Automated testing • Improved reliability",
            "tech": ["GitHub Actions", "Docker", "Terraform", "AWS", "Kubernetes", "Jest", "Playwright"],
            "order": 5,
            "featured": True,
            "createdAt": datetime.utcnow()
        }
    ]
    
    for project in mock_projects:
        await db.projects.insert_one(project)
    
    # Insert comprehensive tech stack categories
    tech_categories = [
        {
            "category": "frontend",
            "technologies": [
                "React", "Next.js", "TypeScript", "JavaScript", "Vue.js", "Nuxt.js",
                "HTML5", "CSS3", "Sass/SCSS", "Styled Components", "Emotion",
                "Tailwind CSS", "PostCSS", "Webpack", "Vite", "Rollup", "Parcel",
                "Redux", "Zustand", "React Query", "SWR", "Apollo Client",
                "Framer Motion", "GSAP", "Three.js", "React Spring"
            ],
            "icon": "⚡",
            "color": "bg-blue-900/30 border-blue-700/50",
            "order": 1
        },
        {
            "category": "performance",
            "technologies": [
                "Canvas API", "WebGL", "WebAssembly", "Service Workers", "Web Workers",
                "Performance Profiling", "Lighthouse", "Core Web Vitals", "Bundle Analysis",
                "Code Splitting", "Lazy Loading", "Image Optimization", "Caching Strategies",
                "D3.js", "Chart.js", "Recharts", "WebRTC", "WebSockets"
            ],
            "icon": "🎯", 
            "color": "bg-emerald-900/30 border-emerald-700/50",
            "order": 2
        },
        {
            "category": "backend",
            "technologies": [
                "Node.js", "Express.js", "Fastify", "Koa", "NestJS",
                "Python", "FastAPI", "Django", "Flask",
                "GraphQL", "Apollo Server", "RESTful APIs", "tRPC",
                "PostgreSQL", "MongoDB", "Redis", "Prisma", "TypeORM",
                "MySQL", "SQLite", "Supabase", "Firebase", "PlanetScale"
            ],
            "icon": "🗄️",
            "color": "bg-purple-900/30 border-purple-700/50", 
            "order": 3
        },
        {
            "category": "cloud",
            "technologies": [
                "AWS", "Vercel", "Netlify", "Railway", "Heroku", "DigitalOcean",
                "Google Cloud", "Azure", "Cloudflare", "CDN",
                "Docker", "Kubernetes", "Serverless", "Lambda Functions",
                "S3", "CloudFront", "RDS", "DynamoDB", "Terraform"
            ],
            "icon": "☁️",
            "color": "bg-cyan-900/30 border-cyan-700/50",
            "order": 4
        },
        {
            "category": "tools",
            "technologies": [
                "Git", "GitHub", "GitLab", "Bitbucket", "Linear", "Jira",
                "Figma", "Adobe XD", "Sketch", "Figma APIs", "Figma Plugins",
                "VSCode", "WebStorm", "Chrome DevTools", "Postman", "Insomnia",
                "Jest", "Cypress", "Playwright", "Testing Library", "Storybook",
                "ESLint", "Prettier", "Husky", "Lint-staged"
            ],
            "icon": "🛠️",
            "color": "bg-orange-900/30 border-orange-700/50",
            "order": 5
        },
        {
            "category": "methodologies",
            "technologies": [
                "Component-driven Development", "Design Systems", "Atomic Design",
                "Accessibility (a11y)", "Responsive Design", "Mobile-first Design",
                "Progressive Enhancement", "Agile/Scrum", "Kanban", "TDD/BDD",
                "Code Reviews", "Pair Programming", "CI/CD", "DevOps",
                "Performance Optimization", "SEO", "Micro-frontends"
            ],
            "icon": "📋",
            "color": "bg-gray-900/30 border-gray-700/50",
            "order": 6
        }
    ]
    
    for tech in tech_categories:
        await db.tech_stack.insert_one(tech)

# Portfolio API Routes
@api_router.get("/portfolio", response_model=PortfolioData)
async def get_portfolio():
    """Get complete portfolio data"""
    try:
        # Get portfolio config
        config = await db.portfolio_config.find_one()
        if not config:
            raise HTTPException(status_code=404, detail="Portfolio not found")
        
        # Get experiences (ordered)
        experiences_cursor = db.experiences.find().sort("order", 1)
        experiences_raw = await experiences_cursor.to_list(length=None)
        experiences = [serialize_doc(exp) for exp in experiences_raw]
        
        # Get projects (ordered, featured first)
        projects_cursor = db.projects.find().sort([("featured", -1), ("order", 1)])
        projects_raw = await projects_cursor.to_list(length=None)
        projects = [serialize_doc(proj) for proj in projects_raw]
        
        # Get tech stack (ordered)
        tech_cursor = db.tech_stack.find().sort("order", 1)
        tech_raw = await tech_cursor.to_list(length=None)
        
        # Format tech stack for frontend compatibility
        tech_stack = {}
        for tech in tech_raw:
            category = tech["category"]
            if category == "frontend":
                tech_stack["frontend"] = tech["technologies"]
            elif category == "performance":
                tech_stack["performance"] = tech["technologies"]  
            elif category == "backend":
                tech_stack["backend"] = tech["technologies"]
            elif category == "cloud":
                tech_stack["cloud"] = tech["technologies"]
            elif category == "tools":
                tech_stack["tools"] = tech["technologies"]
            elif category == "methodologies":
                tech_stack["methodologies"] = tech["technologies"]
        
        # Construct response
        portfolio_data = {
            "personal": config["personal"],
            "about": config["about"], 
            "experience": experiences,
            "projects": projects,
            "techStack": tech_stack,
            "lookingFor": config["lookingFor"]
        }
        
        return PortfolioData(**portfolio_data)
        
    except Exception as e:
        logging.error(f"Error fetching portfolio: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

# Legacy routes for backward compatibility
@api_router.get("/")
async def root():
    return {"message": "Portfolio API Ready"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("startup")
async def startup_db():
    await init_portfolio_data()
    logging.info("Portfolio data initialized")

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
