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
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30" ref={ref}>
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
            Work Experience
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-emerald-400 mx-auto"
            initial={{ width: 0 }}
            animate={inView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <motion.div 
          className="relative space-y-8"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {/* Timeline Line */}
          <motion.div
            className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 to-teal-500 hidden lg:block"
            initial={{ height: 0 }}
            animate={inView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 2, delay: 0.5 }}
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
                className="absolute left-5 top-8 w-3 h-3 bg-emerald-400 rounded-full border-4 border-gray-950 hidden lg:block z-10"
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ delay: index * 0.2 + 1, duration: 0.3 }}
                whileHover={{ scale: 1.5 }}
              />
              
              <Card className="lg:ml-12 bg-gray-900/60 border-gray-800 hover:border-emerald-400/30 transition-all duration-300 group relative overflow-hidden">
                {/* Hover Gradient Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                
                <CardHeader className="pb-4 relative z-10">
                  <motion.div 
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
                    initial={{ x: -20, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                    transition={{ delay: index * 0.2 + 0.8, duration: 0.5 }}
                  >
                    <div className="flex items-center gap-3">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                        className="p-2 bg-emerald-400/10 rounded-lg"
                      >
                        <Briefcase className="h-5 w-5 text-emerald-400" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-mono font-bold text-gray-100 group-hover:text-emerald-400 transition-colors">
                          {job.position}
                        </h3>
                        <p className="text-emerald-400 font-semibold">
                          {job.company}
                        </p>
                      </div>
                    </div>
                    <motion.div 
                      className="flex items-center text-gray-400 text-sm bg-gray-800/50 px-3 py-1 rounded-full"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(16, 185, 129, 0.1)" }}
                      transition={{ duration: 0.2 }}
                    >
                      <Calendar className="h-4 w-4 mr-1" />
                      {job.duration}
                    </motion.div>
                  </motion.div>
                </CardHeader>
                
                <CardContent className="space-y-4 relative z-10">
                  <motion.p 
                    className="text-gray-300 leading-relaxed"
                    initial={{ y: 10, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
                    transition={{ delay: index * 0.2 + 1, duration: 0.5 }}
                  >
                    {job.description}
                  </motion.p>
                  
                  <motion.div 
                    className="space-y-3"
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 0.1,
                          delayChildren: index * 0.2 + 1.2
                        }
                      }
                    }}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                  >
                    {job.achievements.map((achievement, achievementIndex) => (
                      <motion.li 
                        key={achievementIndex} 
                        className="flex items-start group/item cursor-default"
                        variants={{
                          hidden: { x: -10, opacity: 0 },
                          visible: { 
                            x: 0, 
                            opacity: 1,
                            transition: { duration: 0.4 }
                          }
                        }}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform"
                          whileHover={{ scale: 1.5 }}
                        />
                        <p className="text-gray-400 leading-relaxed text-sm group-hover/item:text-gray-300 transition-colors">
                          {achievement}
                        </p>
                        <motion.div
                          className="ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity"
                          whileHover={{ x: 2 }}
                        >
                          <ChevronRight className="h-3 w-3 text-emerald-400" />
                        </motion.div>
                      </motion.li>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;