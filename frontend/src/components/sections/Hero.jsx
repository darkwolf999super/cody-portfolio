import React, { useState, useEffect } from 'react';
import { ArrowDown, Download, Github, Globe, Sparkles, Code, Zap } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Button } from '../ui/button';

const Hero = ({ data }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const x = useSpring(0, springConfig);
  const ySpring = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const xPct = (clientX / innerWidth - 0.5) * 2;
      const yPct = (clientY / innerHeight - 0.5) * 2;
      x.set(xPct * 20);
      ySpring.set(yPct * 20);
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, ySpring]);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const floatingIcons = [
    { icon: Code, delay: 0, x: '10%', y: '20%' },
    { icon: Sparkles, delay: 0.5, x: '80%', y: '30%' },
    { icon: Zap, delay: 1, x: '15%', y: '70%' },
    { icon: Github, delay: 1.5, x: '85%', y: '60%' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />
        
        {/* Floating Icons */}
        {floatingIcons.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={index}
              className="absolute text-emerald-400/20"
              style={{
                left: item.x,
                top: item.y,
                x,
                y: ySpring,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: item.delay + 2, duration: 1 }}
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                  y: [-10, 10, -10],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                <IconComponent size={40} />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
      <motion.div 
        className="max-w-4xl mx-auto text-center relative z-10"
        style={{ y, opacity, scale }}
      >
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Name and Title */}
          <div className="space-y-4">
            <motion.h1 
              className="text-4xl sm:text-6xl lg:text-7xl font-mono font-bold tracking-tight"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.span 
                className="text-gray-100 inline-block"
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0 0 20px rgba(16, 185, 129, 0.5)"
                }}
                transition={{ duration: 0.3 }}
              >
                {data.name.split('').map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="inline-block"
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.span>
            </motion.h1>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xl sm:text-2xl lg:text-3xl"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <motion.span 
                className="text-emerald-400 font-mono font-semibold relative"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {data.title}
                <motion.div
                  className="absolute -inset-1 bg-emerald-400/20 rounded-lg -z-10"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.span>
              <motion.span 
                className="hidden sm:block text-gray-500"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                /
              </motion.span>
              <motion.span 
                className="text-gray-300 font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                {data.subtitle}
              </motion.span>
            </motion.div>
          </div>

          {/* Tagline */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <motion.p 
              className="text-lg sm:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
              whileHover={{ 
                scale: 1.02,
                color: "rgba(156, 163, 175, 1)"
              }}
              transition={{ duration: 0.3 }}
            >
              {data.tagline}
            </motion.p>
          </motion.div>

          {/* Social Links - Commented out temporarily */}
          {/* 
          <div className="flex justify-center space-x-6 pt-4">
            {data.github && (
              <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 transform hover:scale-110"
              >
                <Github className="h-6 w-6" />
              </a>
            )}
            {data.portfolio && (
              <a
                href={data.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 transform hover:scale-110"
              >
                <Globe className="h-6 w-6" />
              </a>
            )}
          </div>
          */}

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                onClick={scrollToAbout}
                className="relative bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg font-mono overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <span className="relative z-10 flex items-center">
                  View My Work
                  <motion.div
                    animate={{ y: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="ml-2"
                  >
                    <ArrowDown className="h-5 w-5" />
                  </motion.div>
                </span>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                variant="outline"
                className="relative border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-3 text-lg font-mono overflow-hidden group"
                onClick={() => window.open(data.resumeUrl, '_blank')}
              >
                <motion.div
                  className="absolute inset-0 bg-gray-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <span className="relative z-10 flex items-center">
                  <motion.div
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                    className="mr-2"
                  >
                    <Download className="h-5 w-5" />
                  </motion.div>
                  Download Resume
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <motion.button
              onClick={scrollToAbout}
              className="text-gray-500 hover:text-emerald-400 transition-colors duration-300 p-2 rounded-full hover:bg-emerald-400/10"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowDown size={24} />
              <motion.div
                className="absolute inset-0 border border-emerald-400/30 rounded-full"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;