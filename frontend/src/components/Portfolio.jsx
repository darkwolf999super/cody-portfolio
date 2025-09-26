import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import TechStack from './sections/TechStack';
import LookingFor from './sections/LookingFor';
import Contact from './sections/Contact';
import Navigation from './Navigation';
import LoadingScreen from './LoadingScreen';
import { mockPortfolioData } from '../data/mockData';

const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simulate realistic loading time for better UX
    const loadData = () => {
      setTimeout(() => {
        setPortfolioData(mockPortfolioData);
        setLoading(false);
        // Small delay before showing content for smooth transition
        setTimeout(() => setShowContent(true), 100);
      }, 2500); // Longer delay for better loading experience
    };

    loadData();
  }, []);

  const handleLoadingComplete = () => {
    setLoading(false);
    setTimeout(() => setShowContent(true), 100);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <LoadingScreen 
            key="loading"
            onLoadingComplete={handleLoadingComplete}
          />
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {!loading && showContent && portfolioData && (
          <motion.div 
            key="portfolio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="min-h-screen bg-gray-950 text-gray-100 relative overflow-hidden"
          >
            {/* Global Background Effects */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
              {/* Animated Mesh Gradient */}
              <motion.div
                className="absolute -top-1/2 -left-1/2 w-full h-full opacity-30"
                animate={{
                  background: [
                    "radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.06) 0%, transparent 50%)",
                    "radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.06) 0%, transparent 50%), radial-gradient(circle at 60% 60%, rgba(6, 182, 212, 0.08) 0%, transparent 50%)",
                    "radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.06) 0%, transparent 50%)"
                  ]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Floating Orbs */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-2 h-2 rounded-full ${
                    i % 2 === 0 ? 'bg-blue-400/20' : 'bg-blue-500/20'
                  }`}
                  style={{
                    left: `${10 + i * 20}%`,
                    top: `${20 + i * 15}%`
                  }}
                  animate={{
                    y: [-20, 20, -20],
                    x: [-10, 10, -10],
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    duration: 4 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.8
                  }}
                />
              ))}
            </div>
            
            <Navigation />
            
            <motion.main
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <Hero data={portfolioData.personal} />
              <About data={portfolioData.about} />
              <Experience data={portfolioData.experience} />
              <Projects data={portfolioData.projects} />
              <TechStack data={portfolioData.techStack} />
              <LookingFor data={portfolioData.lookingFor} />
              <Contact data={portfolioData.personal} />
            </motion.main>
            
            {/* Scroll Progress Indicator */}
            <motion.div
              className="fixed bottom-8 right-8 w-12 h-12 border-2 border-blue-400/30 rounded-full flex items-center justify-center bg-slate-900/80 backdrop-blur-sm z-40"
              whileHover={{ scale: 1.1, borderColor: "rgba(59, 130, 246, 0.6)" }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="w-2 h-2 bg-blue-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Portfolio;