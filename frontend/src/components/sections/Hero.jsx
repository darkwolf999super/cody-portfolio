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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden py-0">
      {/* Modern Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 212, 255, 0.1) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }} />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-tr from-indigo-500/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto"
          style={{ y, opacity, scale }}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* Left Column - Text Content */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="space-y-6">
                <motion.div 
                  className="inline-flex items-center gap-2 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                  <span className="text-blue-300 text-sm font-medium">Available for hire</span>
                </motion.div>

                <motion.h1 
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <span className="text-slate-50">Hello, I'm </span>
                  <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                    {data.fullName || data.name}
                  </span>
                </motion.h1>

                <motion.div 
                  className="flex flex-col gap-2 text-xl lg:text-2xl"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="text-blue-400 font-semibold">{data.title}</span>
                  <span className="text-slate-400">{data.subtitle}</span>
                </motion.div>

                <motion.p 
                  className="text-lg text-slate-300 leading-relaxed max-w-2xl"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {data.tagline}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 pt-8"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <motion.button
                    className="group inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={scrollToAbout}
                  >
                    <span>View My Work</span>
                    <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                  </motion.button>
                  
                  {data.resumeUrl && (
                    <motion.button
                      className="inline-flex items-center gap-3 border-2 border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm"
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => window.open(data.resumeUrl, '_blank')}
                    >
                      <Download className="w-4 h-4" />
                      <span>Download Resume</span>
                    </motion.button>
                  )}
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Profile Image */}
            <motion.div 
              className="hidden lg:flex items-center justify-center relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="relative">
                {/* Background decorative elements */}
                <motion.div 
                  className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-3xl backdrop-blur-sm border border-blue-500/20 -z-10"
                  animate={{ rotate: [0, 2, -2, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                  className="absolute -top-6 -right-6 w-20 h-20 bg-blue-500/30 rounded-2xl backdrop-blur-sm border border-blue-400/30 -z-10"
                  animate={{ y: [-8, 8, -8], rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                  className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-600/20 rounded-full backdrop-blur-sm border border-blue-500/20 -z-10"
                  animate={{ scale: [1, 1.05, 1], x: [-2, 2, -2] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Profile Image Container */}
                <motion.div
                  className="relative w-80 h-80 rounded-2xl overflow-hidden"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Image frame with gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-blue-500/20 to-blue-600/30 rounded-2xl p-[2px]">
                    <div className="w-full h-full bg-slate-800/20 rounded-2xl overflow-hidden backdrop-blur-sm">
                      <img
                        src="/Cody.png"
                        alt="Q"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>
                  
                  {/* Subtle overlay for better integration */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent rounded-2xl" />
                  
                  {/* Floating accent elements */}
                  {floatingIcons.slice(0, 4).map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.div
                        key={index}
                        className="absolute w-8 h-8 bg-slate-800/70 rounded-lg border border-slate-600/50 backdrop-blur-sm flex items-center justify-center"
                        style={{
                          left: item.x,
                          top: item.y,
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 + item.delay, duration: 0.5 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <IconComponent className="w-4 h-4 text-blue-400" />
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </motion.div>
          </div>
          
          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <motion.button
              onClick={scrollToAbout}
              className="text-slate-400 hover:text-blue-400 transition-colors duration-300 p-2 rounded-full hover:bg-blue-400/10"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowDown size={20} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;