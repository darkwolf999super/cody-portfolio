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
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Modern Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 to-slate-800/20" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/3 rounded-full blur-3xl" />
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
            <Briefcase className="h-8 w-8 text-blue-400" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-50">
              Experience
            </h2>
          </div>
          <motion.div 
            className="w-16 h-0.5 bg-blue-500 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={inView ? { width: 64 } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            10+ years building scalable solutions across authentication, AI/ML, and data analytics platforms
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Timeline Line */}
          <motion.div
            className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-500 hidden lg:block"
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
                className="absolute left-5 top-8 w-3 h-3 bg-blue-400 rounded-full border-4 border-slate-950 hidden lg:block z-10"
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ delay: index * 0.15 + 0.8, duration: 0.3 }}
                whileHover={{ scale: 1.3 }}
              />
              
              <div className="lg:ml-12 glass-card p-8 group">
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
                    <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700/50">
                      <Calendar className="h-4 w-4 text-blue-400" />
                      <span className="text-slate-300 text-sm font-medium">{job.duration}</span>
                    </div>
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-6">
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
                      className="flex items-start gap-3 p-4 bg-slate-800/30 rounded-xl border border-slate-700/30"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.15 + 0.8 + achievementIndex * 0.1, duration: 0.5 }}
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
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