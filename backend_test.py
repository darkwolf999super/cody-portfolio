#!/usr/bin/env python3
"""
Portfolio Backend API Test Suite
Tests all portfolio endpoints and data structure validation
"""

import requests
import json
import sys
from datetime import datetime
from typing import Dict, Any, List

# Get backend URL from environment
BACKEND_URL = "https://6c639d46-7f71-4b85-95e4-c33566701c50.preview.emergentagent.com"
API_BASE = f"{BACKEND_URL}/api"

class PortfolioAPITester:
    def __init__(self):
        self.results = []
        self.passed = 0
        self.failed = 0
        
    def log_result(self, test_name: str, passed: bool, message: str, details: Any = None):
        """Log test result"""
        status = "✅ PASS" if passed else "❌ FAIL"
        result = {
            "test": test_name,
            "status": status,
            "message": message,
            "details": details,
            "timestamp": datetime.now().isoformat()
        }
        self.results.append(result)
        
        if passed:
            self.passed += 1
        else:
            self.failed += 1
            
        print(f"{status}: {test_name} - {message}")
        if details and not passed:
            print(f"   Details: {details}")
    
    def test_portfolio_endpoint(self):
        """Test GET /api/portfolio endpoint"""
        try:
            response = requests.get(f"{API_BASE}/portfolio", timeout=10)
            
            if response.status_code != 200:
                self.log_result(
                    "Portfolio Endpoint Status", 
                    False, 
                    f"Expected 200, got {response.status_code}",
                    response.text
                )
                return None
                
            self.log_result("Portfolio Endpoint Status", True, "Returns 200 OK")
            
            # Test JSON response
            try:
                data = response.json()
                self.log_result("Portfolio JSON Response", True, "Valid JSON returned")
                return data
            except json.JSONDecodeError as e:
                self.log_result("Portfolio JSON Response", False, "Invalid JSON", str(e))
                return None
                
        except requests.exceptions.RequestException as e:
            self.log_result("Portfolio Endpoint Connection", False, "Connection failed", str(e))
            return None
    
    def test_data_structure(self, data: Dict[str, Any]):
        """Test portfolio data structure validation"""
        if not data:
            return
            
        # Test required top-level fields
        required_fields = ["personal", "about", "experience", "projects", "techStack", "lookingFor"]
        
        for field in required_fields:
            if field in data:
                self.log_result(f"Data Structure - {field}", True, f"Field '{field}' present")
            else:
                self.log_result(f"Data Structure - {field}", False, f"Missing required field '{field}'")
        
        # Test personal info structure
        if "personal" in data:
            personal_fields = ["name", "title", "subtitle", "tagline", "phone", "email", "location", "resumeUrl"]
            personal = data["personal"]
            
            for field in personal_fields:
                if field in personal and personal[field]:
                    self.log_result(f"Personal Info - {field}", True, f"Field '{field}' present and not empty")
                else:
                    self.log_result(f"Personal Info - {field}", False, f"Missing or empty field '{field}'")
        
        # Test about structure
        if "about" in data:
            about_fields = ["summary", "experience", "expertise", "mindset"]
            about = data["about"]
            
            for field in about_fields:
                if field in about and about[field]:
                    self.log_result(f"About Info - {field}", True, f"Field '{field}' present and not empty")
                else:
                    self.log_result(f"About Info - {field}", False, f"Missing or empty field '{field}'")
        
        # Test experience array
        if "experience" in data:
            experiences = data["experience"]
            if isinstance(experiences, list):
                self.log_result("Experience Structure", True, f"Experience is array with {len(experiences)} items")
                
                if experiences:
                    exp_fields = ["company", "position", "duration", "achievements"]
                    first_exp = experiences[0]
                    
                    for field in exp_fields:
                        if field in first_exp:
                            self.log_result(f"Experience Fields - {field}", True, f"Field '{field}' present in experience")
                        else:
                            self.log_result(f"Experience Fields - {field}", False, f"Missing field '{field}' in experience")
            else:
                self.log_result("Experience Structure", False, "Experience should be an array")
        
        # Test projects array
        if "projects" in data:
            projects = data["projects"]
            if isinstance(projects, list):
                self.log_result("Projects Structure", True, f"Projects is array with {len(projects)} items")
                
                if projects:
                    proj_fields = ["title", "description", "impact", "tech"]
                    first_proj = projects[0]
                    
                    for field in proj_fields:
                        if field in first_proj:
                            self.log_result(f"Project Fields - {field}", True, f"Field '{field}' present in project")
                        else:
                            self.log_result(f"Project Fields - {field}", False, f"Missing field '{field}' in project")
            else:
                self.log_result("Projects Structure", False, "Projects should be an array")
        
        # Test tech stack structure
        if "techStack" in data:
            tech_stack = data["techStack"]
            if isinstance(tech_stack, dict):
                expected_categories = ["frontend", "performance", "backend", "tools", "methodologies"]
                self.log_result("Tech Stack Structure", True, f"Tech stack is object with {len(tech_stack)} categories")
                
                for category in expected_categories:
                    if category in tech_stack and isinstance(tech_stack[category], list):
                        self.log_result(f"Tech Stack - {category}", True, f"Category '{category}' present with {len(tech_stack[category])} technologies")
                    else:
                        self.log_result(f"Tech Stack - {category}", False, f"Missing or invalid category '{category}'")
            else:
                self.log_result("Tech Stack Structure", False, "Tech stack should be an object")
        
        # Test lookingFor structure
        if "lookingFor" in data:
            looking_for = data["lookingFor"]
            looking_fields = ["title", "description"]
            
            for field in looking_fields:
                if field in looking_for and looking_for[field]:
                    self.log_result(f"Looking For - {field}", True, f"Field '{field}' present and not empty")
                else:
                    self.log_result(f"Looking For - {field}", False, f"Missing or empty field '{field}'")
    
    def test_legacy_endpoints(self):
        """Test legacy status endpoints"""
        
        # Test GET /api/
        try:
            response = requests.get(f"{API_BASE}/", timeout=10)
            if response.status_code == 200:
                data = response.json()
                if "message" in data:
                    self.log_result("Legacy Root Endpoint", True, "GET /api/ returns message")
                else:
                    self.log_result("Legacy Root Endpoint", False, "GET /api/ missing message field")
            else:
                self.log_result("Legacy Root Endpoint", False, f"GET /api/ returned {response.status_code}")
        except Exception as e:
            self.log_result("Legacy Root Endpoint", False, f"GET /api/ failed: {str(e)}")
        
        # Test GET /api/status
        try:
            response = requests.get(f"{API_BASE}/status", timeout=10)
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    self.log_result("Legacy Status GET", True, f"GET /api/status returns array with {len(data)} items")
                else:
                    self.log_result("Legacy Status GET", False, "GET /api/status should return array")
            else:
                self.log_result("Legacy Status GET", False, f"GET /api/status returned {response.status_code}")
        except Exception as e:
            self.log_result("Legacy Status GET", False, f"GET /api/status failed: {str(e)}")
        
        # Test POST /api/status
        try:
            test_data = {"client_name": "Portfolio Test Client"}
            response = requests.post(f"{API_BASE}/status", json=test_data, timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if "id" in data and "client_name" in data and "timestamp" in data:
                    self.log_result("Legacy Status POST", True, "POST /api/status creates status check")
                else:
                    self.log_result("Legacy Status POST", False, "POST /api/status missing required fields")
            else:
                self.log_result("Legacy Status POST", False, f"POST /api/status returned {response.status_code}")
        except Exception as e:
            self.log_result("Legacy Status POST", False, f"POST /api/status failed: {str(e)}")
    
    def test_error_handling(self):
        """Test error handling scenarios"""
        
        # Test invalid endpoint
        try:
            response = requests.get(f"{API_BASE}/nonexistent", timeout=10)
            if response.status_code == 404:
                self.log_result("Error Handling - 404", True, "Invalid endpoint returns 404")
            else:
                self.log_result("Error Handling - 404", False, f"Invalid endpoint returned {response.status_code}")
        except Exception as e:
            self.log_result("Error Handling - 404", False, f"Error testing 404: {str(e)}")
        
        # Test invalid POST data
        try:
            response = requests.post(f"{API_BASE}/status", json={}, timeout=10)
            if response.status_code in [400, 422]:  # FastAPI returns 422 for validation errors
                self.log_result("Error Handling - Invalid POST", True, "Invalid POST data returns error")
            else:
                self.log_result("Error Handling - Invalid POST", False, f"Invalid POST returned {response.status_code}")
        except Exception as e:
            self.log_result("Error Handling - Invalid POST", False, f"Error testing invalid POST: {str(e)}")
    
    def test_database_connection(self, portfolio_data: Dict[str, Any]):
        """Test that data is actually coming from database"""
        if not portfolio_data:
            self.log_result("Database Connection", False, "No portfolio data to verify database connection")
            return
        
        # Check if we have realistic data (not just empty defaults)
        personal = portfolio_data.get("personal", {})
        name = personal.get("name", "")
        
        if name and name != "Test User" and len(name) > 2:
            self.log_result("Database Connection", True, f"Database contains realistic data (name: {name})")
        else:
            self.log_result("Database Connection", False, "Database appears to contain default/empty data")
        
        # Check if we have multiple experiences and projects
        experiences = portfolio_data.get("experience", [])
        projects = portfolio_data.get("projects", [])
        
        if len(experiences) > 0 and len(projects) > 0:
            self.log_result("Database Data Richness", True, f"Database contains {len(experiences)} experiences and {len(projects)} projects")
        else:
            self.log_result("Database Data Richness", False, "Database lacks sufficient experience or project data")
    
    def run_all_tests(self):
        """Run all tests"""
        print("🚀 Starting Portfolio Backend API Tests")
        print(f"Testing against: {API_BASE}")
        print("=" * 60)
        
        # Test main portfolio endpoint
        portfolio_data = self.test_portfolio_endpoint()
        
        # Test data structure if we got data
        if portfolio_data:
            self.test_data_structure(portfolio_data)
            self.test_database_connection(portfolio_data)
        
        # Test legacy endpoints
        self.test_legacy_endpoints()
        
        # Test error handling
        self.test_error_handling()
        
        # Print summary
        print("\n" + "=" * 60)
        print("📊 TEST SUMMARY")
        print("=" * 60)
        print(f"✅ Passed: {self.passed}")
        print(f"❌ Failed: {self.failed}")
        print(f"📈 Success Rate: {(self.passed / (self.passed + self.failed) * 100):.1f}%")
        
        if self.failed > 0:
            print("\n🔍 FAILED TESTS:")
            for result in self.results:
                if "❌ FAIL" in result["status"]:
                    print(f"   • {result['test']}: {result['message']}")
        
        return self.failed == 0

if __name__ == "__main__":
    tester = PortfolioAPITester()
    success = tester.run_all_tests()
    sys.exit(0 if success else 1)