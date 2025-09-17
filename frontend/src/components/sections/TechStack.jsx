import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardHeader } from '../ui/card';

const TechStack = ({ data = {} }) => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const categories = [
    { 
      title: 'Frontend', 
      icon: '⚡', 
      techs: data.frontend || [], 
      color: 'bg-blue-900/30 border-blue-700/50',
      hoverColor: 'hover:border-blue-400/70',
      glowColor: 'from-blue-500/20 to-blue-600/20'
    },
    { 
      title: 'Performance & Graphics', 
      icon: '🎯', 
      techs: data.performance || [], 
      color: 'bg-emerald-900/30 border-emerald-700/50',
      hoverColor: 'hover:border-emerald-400/70',
      glowColor: 'from-emerald-500/20 to-emerald-600/20'
    },
    { 
      title: 'Backend & Data', 
      icon: '🗄️', 
      techs: data.backend || [], 
      color: 'bg-purple-900/30 border-purple-700/50',
      hoverColor: 'hover:border-purple-400/70',
      glowColor: 'from-purple-500/20 to-purple-600/20'
    },
    { 
      title: 'Tools & Platforms', 
      icon: '🛠️', 
      techs: data.tools || [], 
      color: 'bg-orange-900/30 border-orange-700/50',
      hoverColor: 'hover:border-orange-400/70',
      glowColor: 'from-orange-500/20 to-orange-600/20'
    },
    { 
      title: 'Methodology', 
      icon: '📋', 
      techs: data.methodologies || [], 
      color: 'bg-gray-900/30 border-gray-700/50',
      hoverColor: 'hover:border-gray-400/70',
      glowColor: 'from-gray-500/20 to-gray-600/20'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="tech-stack" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30" ref={ref}>
      <motion.div 
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-mono font-bold text-gray-100 mb-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            Tech Stack
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-emerald-400 mx-auto"
            initial={{ width: 0 }}
            animate={inView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p 
            className="text-gray-400 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Technologies and methodologies I use to build scalable, performant applications
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.05,
                rotateY: 5,
                rotateX: 5
              }}
              transition={{ 
                duration: 0.3,
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
              className="group cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              <Card className={`${category.color} ${category.hoverColor} border transition-all duration-300 relative overflow-hidden h-full group-hover:shadow-2xl`}>
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${category.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  initial={false}
                />
                
                {/* Animated Border Glow */}
                <motion.div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(45deg, transparent, ${category.glowColor.split(' ')[1].replace('/20', '/30')}, transparent)`,
                    backgroundSize: '200% 200%'
                  }}
                  animate={hoveredCategory === index ? {
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
                  } : {}}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                <CardHeader className="pb-3 relative z-10">
                  <motion.h3 
                    className="text-lg font-mono font-semibold text-gray-100 flex items-center group-hover:text-white transition-colors"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.span 
                      className="mr-3 text-xl"
                      animate={hoveredCategory === index ? {
                        scale: [1, 1.3, 1],
                        rotate: [0, 10, -10, 0]
                      } : {}}
                      transition={{ duration: 0.6 }}
                    >
                      {category.icon}
                    </motion.span>
                    {category.title}
                  </motion.h3>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: index * 0.1 + 0.5
                        }
                      }
                    }}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                  >
                    {category.techs.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        variants={{
                          hidden: { scale: 0, opacity: 0, rotate: -45 },
                          visible: { 
                            scale: 1, 
                            opacity: 1, 
                            rotate: 0,
                            transition: { 
                              type: "spring",
                              stiffness: 500,
                              damping: 30
                            }
                          }
                        }}
                        whileHover={{ 
                          scale: 1.15,
                          rotate: 5,
                          backgroundColor: "rgba(16, 185, 129, 0.2)",
                          borderColor: "rgba(16, 185, 129, 0.5)",
                          color: "rgba(209, 213, 219, 1)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Badge 
                          className="bg-gray-800/60 text-gray-300 hover:bg-gray-700/60 transition-all text-xs cursor-pointer border border-gray-600/50"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  {/* Tech Count Indicator */}
                  <motion.div
                    className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0 }}
                    animate={hoveredCategory === index ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-emerald-400/20 text-emerald-300 text-xs px-2 py-1 rounded-full font-mono">
                      {category.techs.length} tools
                    </div>
                  </motion.div>
                </CardContent>
                
                {/* Floating Particles Effect */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-emerald-400/30 rounded-full"
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${30 + i * 20}%`
                      }}
                      animate={hoveredCategory === index ? {
                        y: [-20, -40, -20],
                        opacity: [0, 1, 0]
                      } : {}}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3
                      }}
                    />
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TechStack;