import React from 'react';
import { Calendar, MapPin, Briefcase, Award, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';

const Experience = ({ data }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  return (
    <section id="experience" className="relative overflow-hidden">
      {/* Modern Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-indigo-400/6 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-cyan-400/6 to-transparent rounded-full blur-3xl" />
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
            <Briefcase className="h-8 w-8 text-indigo-400" />
            <h2 className="text-white font-bold">
              Experience
            </h2>
          </div>
          <motion.div 
            className="section-divider"
            initial={{ width: 0 }}
            animate={inView ? { width: '4rem' } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <p className="section-description">
            12+ years building AI-powered products at scale across developer platforms, fintech, and customer support
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Timeline Line */}
          <motion.div
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-indigo-400 to-cyan-400 hidden lg:block"
            initial={{ height: 0 }}
            animate={inView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          
          {data.map((job, index) => (
            <motion.div
              key={job.id}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <motion.div
                className="absolute left-6 top-10 w-4 h-4 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full border-4 border-slate-950 hidden lg:block z-10 shadow-lg shadow-cyan-400/50"
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ delay: index * 0.15 + 0.8, duration: 0.3 }}
                whileHover={{ scale: 1.3 }}
              />
              
              <div className="lg:ml-16 glass-card group">
                <motion.div 
                  className="mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ delay: index * 0.15 + 0.4, duration: 0.6 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-50 mb-2">
                        {job.position}
                      </h3>
                      <p className="text-blue-400 font-semibold text-lg">
                        {job.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 bg-gradient-to-r from-slate-800/60 to-slate-700/40 px-5 py-3 rounded-2xl border border-slate-600/50 backdrop-blur-sm">
                      <Calendar className="h-4 w-4 text-cyan-400" />
                      <span className="text-slate-300 text-sm font-semibold">{job.duration}</span>
                    </div>
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-6 text-base">
                    {job.description}
                  </p>
                </motion.div>
                <motion.div 
                  className="space-y-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ delay: index * 0.15 + 0.6, duration: 0.6 }}
                >
                  {job.achievements.map((achievement, achievementIndex) => (
                    <motion.div
                      key={achievementIndex} 
                      className="flex items-start gap-3 p-4 bg-gradient-to-r from-slate-800/40 to-slate-700/20 rounded-xl border border-slate-600/30 backdrop-blur-sm"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.15 + 0.8 + achievementIndex * 0.1, duration: 0.5 }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-slate-300 leading-relaxed text-sm">
                        {achievement}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;