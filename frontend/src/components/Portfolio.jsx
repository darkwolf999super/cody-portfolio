import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import TechStack from './sections/TechStack';
import LookingFor from './sections/LookingFor';
import Contact from './sections/Contact';
import Navigation from './Navigation';
import LoadingSkeleton from './LoadingSkeleton';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API}/portfolio`);
        setPortfolioData(response.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching portfolio data:', err);
        setError('Failed to load portfolio data. Please refresh the page.');
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolioData();
  }, []);

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-950 text-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-mono font-bold text-red-400 mb-4">
            Oops! Something went wrong
          </h2>
          <p className="text-gray-400 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Navigation />
      <main>
        <Hero data={portfolioData.personal} />
        <About data={portfolioData.about} />
        <Experience data={portfolioData.experience} />
        <Projects data={portfolioData.projects} />
        <TechStack data={portfolioData.techStack} />
        <LookingFor data={portfolioData.lookingFor} />
        <Contact data={portfolioData.personal} />
      </main>
    </div>
  );
};

export default Portfolio;