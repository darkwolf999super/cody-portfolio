import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Zap, Settings, FileText } from 'lucide-react';

const TechStack = ({ data = {} }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const categories = [
    { 
      title: 'Frontend', 
      icon: Code, 
      techs: data.frontend || []
    },
    { 
      title: 'Backend & Data', 
      icon: Database, 
      techs: data.backend || []
    },
    { 
      title: 'Performance', 
      icon: Zap, 
      techs: data.performance || []
    },
    { 
      title: 'Tools & Platforms', 
      icon: Settings, 
      techs: data.tools || []
    },
    { 
      title: 'Methodology', 
      icon: FileText, 
      techs: data.methodologies || []
    }
  ];


  return (
    <section id="tech-stack" className="py-24 relative overflow-hidden">
      {/* Modern Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 to-slate-800/30" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/3 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <Code className="h-8 w-8 text-blue-400" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-50">
              Tech Stack
            </h2>
          </div>
          <motion.div 
            className="w-16 h-0.5 bg-blue-500 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={inView ? { width: 64 } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Technologies and methodologies I use to build scalable, performant applications
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={index}
                className="glass-card p-8 group"
                initial={{ y: 30, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <IconComponent className="h-6 w-6 text-blue-400" />
                    <h3 className="text-xl font-semibold text-slate-50">
                      {category.title}
                    </h3>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.techs.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-3 py-1.5 bg-slate-800/50 text-slate-300 rounded-lg text-sm border border-slate-700/50 hover:border-blue-500/50 hover:text-blue-300 transition-colors cursor-default"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: index * 0.1 + techIndex * 0.05 + 0.3, duration: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;