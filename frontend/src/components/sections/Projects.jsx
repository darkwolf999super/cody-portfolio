import React, { useState } from 'react';
import { ExternalLink, TrendingUp, Github, Eye, ImageIcon, X, Play, Info, Star, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

const Projects = ({ data }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        ease: "easeOut"
      }
    }
  };
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Modern Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 to-slate-800/30" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-600/3 rounded-full blur-3xl" />
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
            <Star className="h-8 w-8 text-blue-400" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-50">
              Featured Projects
            </h2>
          </div>
          <motion.div 
            className="w-16 h-0.5 bg-blue-500 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={inView ? { width: 64 } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Key projects showcasing technical expertise and measurable impact
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {data.filter(project => project.featured).map((project, index) => (
            <motion.div 
              key={project.id}
              className="relative bg-slate-900/50 border border-slate-800/50 rounded-2xl p-8 backdrop-blur-sm overflow-hidden group cursor-pointer transition-all duration-300 hover:bg-slate-900/70 hover:border-blue-500/30"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.3 } }}
              onClick={() => project.url && window.open(project.url, '_blank')}
            >  
              {/* Project Header */}
              <motion.div 
                className="mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-slate-50 mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  {project.description}
                </p>
                {project.impact && (
                  <div className="flex items-start gap-2 p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
                    <TrendingUp className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <p className="text-blue-300 text-sm">{project.impact}</p>
                  </div>
                )}
              </motion.div>
              
              {/* Tech Stack */}
              <motion.div 
                className="mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ delay: index * 0.1 + 0.6, duration: 0.6 }}
              >
                <div className="flex flex-wrap gap-2">
                  {project.tech?.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1.5 bg-slate-800/50 text-slate-300 rounded-lg text-sm border border-slate-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>


              {/* Click Indicator */}
              {project.url && (
                <motion.div 
                  className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.6, duration: 0.4 }}
                >
                  <ExternalLink className="h-5 w-5 text-blue-400" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;