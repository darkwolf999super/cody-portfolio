import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Button } from './ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrolled(latest > 0.05);
  });

  useEffect(() => {
    const observerOptions = {
      threshold: 0.6,
      rootMargin: '-20% 0px -20% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Tech Stack', href: '#tech-stack' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-950/95 backdrop-blur-sm border-b border-gray-800 shadow-lg' : 'bg-transparent'
      }`}
    >
      {/* Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-blue-500"
        style={{ scaleX: scrollYProgress, originX: 0 }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="font-bold text-lg text-blue-400 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="relative">
              CC
            </span>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-4 py-2 font-medium transition-colors duration-200 ${
                    isActive ? 'text-blue-400' : 'text-slate-300 hover:text-blue-400'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-blue-400/10 rounded-lg border border-blue-400/20"
                      layoutId="activeSection"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <motion.div
                    className="absolute inset-0 bg-blue-400/5 rounded-lg"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
              );
            })}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <motion.div
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-300 hover:text-blue-400 relative overflow-hidden"
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-blue-400/10 rounded-full"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden absolute top-16 left-0 right-0 bg-gray-950/98 backdrop-blur-sm border-b border-gray-800 overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <motion.button
                  key={item.label}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ 
                    x: isMenuOpen ? 0 : -20,
                    opacity: isMenuOpen ? 1 : 0
                  }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative block w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 ${
                    isActive ? 'text-blue-400 bg-blue-400/10' : 'text-slate-300 hover:text-blue-400 hover:bg-slate-800/50'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      className="absolute left-0 top-1/2 w-1 h-6 bg-blue-400 rounded-r-full -translate-y-1/2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;