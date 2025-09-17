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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
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
            Key Projects & Impact
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-emerald-400 mx-auto"
            initial={{ width: 0 }}
            animate={inView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
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
          {data.filter(project => project.featured).map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ 
                y: -12,
                scale: 1.02,
                rotateY: 5,
                rotateX: 5
              }}
              transition={{ 
                duration: 0.3,
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
              className="group cursor-pointer perspective-1000"
              style={{ transformStyle: "preserve-3d" }}
            >
              <Card className="bg-gray-900/60 border-gray-800 hover:border-emerald-400/50 transition-all duration-300 relative overflow-hidden h-full">
                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
                
                {/* Project Image */}
                <div className="h-48 bg-gray-800/50 border-b border-gray-700 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent z-10"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {project.screenshot ? (
                    <motion.img 
                      src={project.screenshot} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  
                  <div className="w-full h-full flex items-center justify-center text-gray-500" style={project.screenshot ? {display: 'none'} : {}}>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                      <ImageIcon className="h-12 w-12" />
                    </motion.div>
                  </div>
                  
                  {/* Action Buttons Overlay */}
                  <motion.div
                    className="absolute top-4 right-4 flex gap-2 z-20"
                    initial={{ opacity: 0, y: -10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="p-2 bg-gray-900/90 backdrop-blur-sm rounded-lg text-emerald-400 hover:bg-emerald-400/20 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Info className="h-4 w-4" />
                    </motion.button>
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.productUrl, '_blank');
                      }}
                      className="p-2 bg-gray-900/90 backdrop-blur-sm rounded-lg text-emerald-400 hover:bg-emerald-400/20 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </motion.button>
                  </motion.div>
                  
                  {/* Project Number */}
                  <motion.div
                    className="absolute bottom-4 left-4 z-20"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-emerald-400/90 text-gray-900 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </motion.div>
                </div>

                <CardHeader className="pb-3 relative z-10">
                  <motion.div className="flex items-center justify-between">
                    <h3 className="text-lg font-mono font-bold text-gray-100 group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <motion.div
                      whileHover={{ rotate: 180, scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Star className="h-4 w-4 text-emerald-400" />
                    </motion.div>
                  </motion.div>
                </CardHeader>
                
                <CardContent className="space-y-4 relative z-10">
                  <p className="text-gray-400 leading-relaxed text-sm line-clamp-3">
                    {project.description}
                  </p>
                  
                  <motion.div 
                    className="bg-gray-800/30 p-3 rounded-lg border border-gray-700 group-hover:border-emerald-700/30 transition-colors"
                    whileHover={{ backgroundColor: "rgba(16, 185, 129, 0.05)" }}
                  >
                    <div className="flex items-center space-x-2 text-emerald-400 mb-1">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <TrendingUp className="h-4 w-4" />
                      </motion.div>
                      <span className="text-xs font-semibold uppercase tracking-wide">Impact</span>
                    </div>
                    <p className="text-xs font-mono text-gray-300">
                      {project.impact}
                    </p>
                  </motion.div>

                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 4).map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: techIndex * 0.1, duration: 0.3 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge className="bg-emerald-900/30 text-emerald-300 border border-emerald-700/50 text-xs hover:bg-emerald-800/40 transition-colors">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                    {project.tech.length > 4 && (
                      <Badge className="bg-gray-800/50 text-gray-400 text-xs">
                        +{project.tech.length - 4}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-gray-900 border border-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                onClick={(e) => e.stopPropagation()}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Modal Header */}
                <div className="relative p-6 border-b border-gray-800">
                  <motion.button
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                    onClick={() => setSelectedProject(null)}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.button>
                  
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <h2 className="text-2xl font-mono font-bold text-gray-100 mb-2">
                      {selectedProject.title}
                    </h2>
                    <div className="flex items-center gap-4">
                      <Button
                        onClick={() => window.open(selectedProject.productUrl, '_blank')}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 text-sm"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Project
                      </Button>
                    </div>
                  </motion.div>
                </div>
                
                {/* Modal Content */}
                <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
                  <motion.div
                    className="space-y-6"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {/* Project Image */}
                    {selectedProject.screenshot && (
                      <div className="rounded-lg overflow-hidden">
                        <img
                          src={selectedProject.screenshot}
                          alt={selectedProject.title}
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    )}
                    
                    {/* Description */}
                    <div>
                      <h3 className="text-lg font-semibold text-emerald-400 mb-3">Overview</h3>
                      <p className="text-gray-300 leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>
                    
                    {/* Impact */}
                    <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700">
                      <div className="flex items-center space-x-2 text-emerald-400 mb-2">
                        <Zap className="h-5 w-5" />
                        <span className="font-semibold">Key Impact</span>
                      </div>
                      <p className="text-gray-300 font-mono">
                        {selectedProject.impact}
                      </p>
                    </div>
                    
                    {/* Technologies */}
                    <div>
                      <h3 className="text-lg font-semibold text-emerald-400 mb-3">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((tech, index) => (
                          <motion.div
                            key={index}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.1 }}
                          >
                            <Badge className="bg-emerald-900/30 text-emerald-300 border border-emerald-700/50 hover:bg-emerald-800/40 transition-colors">
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>
    </section>
  );
};

export default Projects;