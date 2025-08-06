import React, { useState, useEffect } from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import TechStack from './sections/TechStack';
import LookingFor from './sections/LookingFor';
import Contact from './sections/Contact';
import Navigation from './Navigation';
import LoadingSkeleton from './LoadingSkeleton';
import { mockPortfolioData } from '../data/mockData';

const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for better UX
    const loadData = () => {
      setTimeout(() => {
        setPortfolioData(mockPortfolioData);
        setLoading(false);
      }, 500); // Small delay to show loading state
    };

    loadData();
  }, []);

  if (loading) {
    return <LoadingSkeleton />;
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