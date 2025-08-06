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
        "name": "Dwayne Webb",
        "title": "Senior Frontend Engineer",
        "subtitle": "Product Builder",
        "tagline": "I ship fast, scale smart, and build beautiful UI that performs.",
        "phone": "+1 (206) 238 7108",
        "email": "dwebb001993@gmail.com",
        "location": "Spokane Valley, WA",
        "resumeUrl": "#"
    }
    
    mock_about = {
        "summary": "Frontend engineering specialist with 10 years of experience delivering high-performance user interfaces across enterprise platforms, early-stage product teams, and startup-facing consulting projects. Skilled in architecting scalable UI systems, optimizing runtime performance, and shipping design-aligned features with precision and speed.",
        "experience": "10 years experience across early-stage teams, high-growth startups, and enterprise tools",
        "expertise": "Deep experience with Next.js, performance tuning, Canvas, a11y, design-to-engineering",
        "mindset": "Product mindset: I design systems that balance clarity, speed, and iteration"
    }
    
    mock_looking_for = {
        "title": "What I'm Looking For",
        "description": "After years at high-growth companies that scaled to enterprise, and recently helping startups ship critical products, I'm ready to settle into a deep vertical with an early-stage team where I can own core product UI and drive meaningful product momentum from the ground up."
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
            "company": "Work & Co (Accenture)",
            "position": "Senior Frontend Engineer", 
            "duration": "04/2022 - Present",
            "description": "Oversaw frontend architecture and delivery for multiple early-stage startup clients in wellness, retail, and fintech—translating design prototypes into performant, production-ready web apps using Next.js.",
            "achievements": [
                "Scoped and implemented reusable UI systems, collaborated closely with startup founders and design leads",
                "Helped launch investor-facing products on aggressive timelines",
                "Used AI-powered editors like Cursor and windsurf.ai to accelerate implementation and reduce iteration cycles"
            ],
            "order": 1,
            "createdAt": datetime.utcnow()
        },
        {
            "company": "Figma",
            "position": "Frontend Engineer",
            "duration": "08/2018 - 03/2022", 
            "description": "Joined during hyper-growth stage and contributed to frontend features:",
            "achievements": [
                "Delivered the Dev Mode inspector panel, enabling engineers to inspect design tokens and streamline design-to-engineering handoffs",
                "Contributed to FigJam widget and plugin platform, developing extensible, high-performance React widgets adopted across FigJam sessions",
                "Optimized canvas performance by profiling render cycles, reducing interaction latency in large, complex files",
                "Helped unify component behavior across platforms by aligning design tokens and shared UI libraries between desktop and web",
                "Shipped 2-week cycles, collaborating directly with PMs, designers, and research to iterate based on real user feedback"
            ],
            "order": 2,
            "createdAt": datetime.utcnow()
        },
        {
            "company": "Atlassian",
            "position": "Web Developer",
            "duration": "06/2015 - 07/2018",
            "description": "Jira Cloud Ecosystem - built advanced reporting plugins for Jira Cloud before native reporting tools existed:",
            "achievements": [
                "Built production-grade UI plugins for Jira Cloud using the Atlassian Connect framework, integrating with Jira APIs, JQL queries, Bitbucket, and Confluence",
                "Developed interactive dashboards with React and D3.js to visualize agile metrics including sprint velocity, time-in-status, and backlog trends",
                "Designed CSV export, filtering, and grouping capabilities to surface real-time metrics inside Confluence and Jira dashboards",
                "Partnered with agile teams and internal PMs to prioritize reporting UX, optimize memory performance, and continuously refine plugin responsiveness"
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
            "title": "Dev Mode Inspector Performance",
            "description": "Reduced design-to-code handoff time by 60% through optimized inspector panel architecture",
            "impact": "Adopted by 50K+ engineers across design teams",
            "tech": ["React", "Canvas API", "Performance Profiling"],
            "order": 1,
            "featured": True,
            "createdAt": datetime.utcnow()
        },
        {
            "title": "Startup MVP Delivery", 
            "description": "Shipped Next.js fintech app from prototype to production launch in 2 weeks",
            "impact": "Enabled $2M seed funding with working product demo",
            "tech": ["Next.js", "TypeScript", "Stripe API"],
            "order": 2,
            "featured": True,
            "createdAt": datetime.utcnow()
        },
        {
            "title": "Canvas Render Optimization",
            "description": "Improved FigJam performance by 40% through render cycle profiling and optimization",
            "impact": "Enhanced user experience for files with 1000+ objects",
            "tech": ["Canvas API", "React", "Performance Analytics"],
            "order": 3,
            "featured": True,
            "createdAt": datetime.utcnow()
        },
        {
            "title": "Real-time Dashboard System",
            "description": "Built live Jira metrics dashboard with sub-second data updates", 
            "impact": "Adopted by 200+ enterprise agile teams",
            "tech": ["React", "D3.js", "GraphQL", "WebSockets"],
            "order": 4,
            "featured": False,
            "createdAt": datetime.utcnow()
        },
        {
            "title": "Cross-Platform UI Components",
            "description": "Unified design system across desktop and web platforms at Figma",
            "impact": "Reduced component development time by 35%",
            "tech": ["React", "TypeScript", "Design Tokens", "Storybook"],
            "order": 5,
            "featured": False,
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
