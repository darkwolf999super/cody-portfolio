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
      title: 'Frontend & Real-time UX', 
      icon: Code, 
      techs: data.frontend || []
    },
    { 
      title: 'Design Systems & Accessibility', 
      icon: FileText, 
      techs: data.designSystems || []
    },
    { 
      title: 'Backend & APIs', 
      icon: Database, 
      techs: data.backend || []
    },
    { 
      title: 'AI Productization', 
      icon: Zap, 
      techs: data.aiProductization || []
    },
    { 
      title: 'Reliability & DevOps', 
      icon: Settings, 
      techs: data.reliability || []
    },
    { 
      title: 'Data & Streaming', 
      icon: Database, 
      techs: data.dataStreaming || []
    }
  ];


  return (
    <section id="tech-stack" className="relative overflow-hidden">
      {/* Modern Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-br from-violet-400/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-tl from-cyan-400/8 to-transparent rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div 
          className="section-header"
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-title">
            <Code className="h-8 w-8 text-violet-400" />
            <h2 className="text-white font-bold">
              Tech Stack
            </h2>
          </div>
          <motion.div 
            className="section-divider"
            initial={{ width: 0 }}
            animate={inView ? { width: '4rem' } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <p className="section-description">
            Technologies and methodologies I use to build scalable, performant applications
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            const colors = ['text-cyan-400', 'text-indigo-400', 'text-violet-400', 'text-emerald-400', 'text-orange-400', 'text-rose-400'];
            const iconColor = colors[index % colors.length];
            return (
              <motion.div
                key={index}
                className="glass-card group"
                initial={{ y: 30, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 bg-gradient-to-br from-slate-800/60 to-slate-700/40 rounded-xl border border-slate-600/50 backdrop-blur-sm`}>
                      <IconComponent className={`h-5 w-5 ${iconColor}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {category.title}
                    </h3>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.techs.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-3 py-1.5 bg-gradient-to-r from-slate-800/60 to-slate-700/40 text-slate-300 rounded-lg text-xs border border-slate-600/50 hover:border-cyan-400/50 hover:text-cyan-300 transition-all duration-300 cursor-default backdrop-blur-sm font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: index * 0.1 + techIndex * 0.05 + 0.3, duration: 0.4 }}
                      whileHover={{ scale: 1.05, y: -1 }}
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