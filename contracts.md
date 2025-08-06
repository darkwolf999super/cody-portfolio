# Portfolio API Contracts

## Overview
This document defines the API contracts for Dwayne Webb's portfolio website, outlining the transition from mock data to a fully functional backend system.

## Current Mock Data Structure

### Frontend Mock Data (`/app/frontend/src/mock.js`)
- **Personal Info**: Name, title, contact details, resume URL
- **About**: Summary, experience highlights, expertise areas
- **Experience**: Array of job positions with achievements
- **Projects**: Array of project highlights with impact metrics  
- **Tech Stack**: Categorized technologies and methodologies
- **Looking For**: Career objectives and target opportunities

## Backend Implementation Plan

### 1. MongoDB Collections

#### `portfolio_config` Collection
```json
{
  "_id": ObjectId,
  "personal": {
    "name": "String",
    "title": "String", 
    "subtitle": "String",
    "tagline": "String",
    "phone": "String",
    "email": "String", 
    "location": "String",
    "resumeUrl": "String"
  },
  "about": {
    "summary": "String",
    "experience": "String",
    "expertise": "String", 
    "mindset": "String"
  },
  "lookingFor": {
    "title": "String",
    "description": "String"  
  },
  "updatedAt": "Date"
}
```

#### `experiences` Collection
```json
{
  "_id": ObjectId,
  "company": "String",
  "position": "String", 
  "duration": "String",
  "description": "String",
  "achievements": ["String"],
  "order": "Number",
  "createdAt": "Date"
}
```

#### `projects` Collection  
```json
{
  "_id": ObjectId,
  "title": "String",
  "description": "String",
  "impact": "String", 
  "tech": ["String"],
  "order": "Number",
  "featured": "Boolean",
  "createdAt": "Date"
}
```

#### `tech_stack` Collection
```json
{
  "_id": ObjectId,
  "category": "String", // frontend, performance, backend, tools, methodologies
  "technologies": ["String"],
  "icon": "String",
  "color": "String",
  "order": "Number"
}
```

### 2. API Endpoints

#### Portfolio Configuration
- `GET /api/portfolio` - Get complete portfolio data
- `PUT /api/portfolio/personal` - Update personal info
- `PUT /api/portfolio/about` - Update about section
- `PUT /api/portfolio/looking-for` - Update career objectives

#### Experience Management  
- `GET /api/experiences` - Get all work experiences (ordered)
- `POST /api/experiences` - Add new experience
- `PUT /api/experiences/:id` - Update experience
- `DELETE /api/experiences/:id` - Remove experience

#### Project Management
- `GET /api/projects` - Get all projects (ordered by featured/date)  
- `POST /api/projects` - Add new project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Remove project

#### Tech Stack Management
- `GET /api/tech-stack` - Get categorized tech stack
- `POST /api/tech-stack` - Add tech category
- `PUT /api/tech-stack/:id` - Update tech category  
- `DELETE /api/tech-stack/:id` - Remove tech category

### 3. Frontend Integration Strategy

#### Data Fetching
- Replace `portfolioData` import from mock.js with API calls
- Use React `useEffect` hooks to fetch data on component mount
- Implement loading states and error handling
- Add data caching for performance

#### Component Updates Required
1. **Portfolio.jsx**: Add data fetching logic
2. **All section components**: Handle loading/error states
3. **Remove mock.js dependency**: Delete import statements

#### API Integration Points
```javascript
// Replace this:
import { portfolioData } from '../mock';

// With this:
const [portfolioData, setPortfolioData] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
  fetchPortfolioData();
}, []);
```

### 4. Error Handling & Performance

#### Backend Validation
- Pydantic models for request/response validation
- Input sanitization and validation
- Proper error responses with status codes

#### Frontend Error States  
- Loading spinners/skeletons
- Error boundary components
- Retry mechanisms for failed requests
- Graceful degradation

### 5. Data Migration

#### Initial Data Seeding
- Create migration script to populate MongoDB with mock data
- Ensure data structure matches frontend expectations
- Maintain backward compatibility during transition

#### Deployment Strategy
1. Deploy backend with seeded data
2. Update frontend API calls
3. Remove mock.js file
4. Test all functionality

## Implementation Phases

### Phase 1: Backend Core
- MongoDB models and validation
- Basic CRUD endpoints  
- Data seeding from mock.js

### Phase 2: Frontend Integration
- Replace mock imports with API calls
- Add loading/error states
- Test all sections work correctly

### Phase 3: Enhancement
- Add caching layer
- Implement optimistic updates
- Performance monitoring

## Success Criteria
- [ ] All portfolio sections load from backend
- [ ] No references to mock.js remain
- [ ] Loading states work smoothly  
- [ ] Error handling graceful
- [ ] Performance maintained or improved
- [ ] Data easily updatable via API