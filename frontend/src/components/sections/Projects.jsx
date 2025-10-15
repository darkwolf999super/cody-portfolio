import React, { useState } from 'react';
import { ExternalLink, TrendingUp, Github, Eye, ImageIcon, X, Play, Info, Star, Zap, CheckCircle } from 'lucide-react';
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
    <section id="projects" className="relative overflow-hidden">
      {/* Modern Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/5 w-80 h-80 bg-gradient-to-bl from-emerald-400/6 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/5 w-96 h-96 bg-gradient-to-tr from-violet-400/6 to-transparent rounded-full blur-3xl" />
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
            <Star className="h-8 w-8 text-emerald-400" />
            <h2 className="text-white font-bold">
              Featured Projects
            </h2>
          </div>
          <motion.div 
            className="section-divider"
            initial={{ width: 0 }}
            animate={inView ? { width: '4rem' } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <p className="section-description">
            Key projects from AI platforms to fintech infrastructure, showcasing real-world impact
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {data.filter(project => project.featured).map((project, index) => (
            <motion.div 
              key={project.id}
              className="glass-card group cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.3 } }}
              onClick={() => project.url && window.open(project.url, '_blank')}
            >  
              {/* Project Header */}
              <motion.div 
                className="mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
              >
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4 text-sm">
                  {project.description}
                </p>
                {project.impact && (
                  <div className="flex items-start gap-2 p-3 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 rounded-xl border border-cyan-400/20 mb-4">
                    <TrendingUp className="h-4 w-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <p className="text-cyan-300 text-sm font-medium">{project.impact}</p>
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
                      className="px-3 py-1.5 bg-gradient-to-r from-slate-800/60 to-slate-700/40 text-slate-300 rounded-lg text-xs border border-slate-600/50 backdrop-blur-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>


              {/* Action Button */}
              {project.url && project.url !== '#' && (
                <motion.div 
                  className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ y: 10, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
                  transition={{ delay: index * 0.1 + 0.8, duration: 0.4 }}
                >
                  <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600/20 to-indigo-600/20 hover:from-cyan-500/30 hover:to-indigo-500/30 text-cyan-300 hover:text-white px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 border border-cyan-400/30 backdrop-blur-sm shadow-lg hover:shadow-cyan-400/25">
                    <span>Visit Website</span>
                    <ExternalLink className="h-4 w-4" />
                  </button>
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