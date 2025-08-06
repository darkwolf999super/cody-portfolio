import React from 'react';
import { portfolioData } from '../mock';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import TechStack from './sections/TechStack';
import LookingFor from './sections/LookingFor';
import Contact from './sections/Contact';
import Navigation from './Navigation';

const Portfolio = () => {
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