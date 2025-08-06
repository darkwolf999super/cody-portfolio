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

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
