import React from 'react';
import { User, Code, Zap, Target, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';

const About = ({ data }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Technical Excellence",
      description: data.expertise
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Experience Range",
      description: data.experience
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Product Mindset",
      description: data.mindset
    }
  ];

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

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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
    <section id="about" className="relative overflow-hidden">
      {/* Modern Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-gradient-to-br from-cyan-400/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-gradient-to-tr from-indigo-500/8 to-transparent rounded-full blur-3xl" />
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
            <User className="h-8 w-8 text-cyan-400" />
            <h2 className="text-white font-bold">
              About Me
            </h2>
          </div>
          <motion.div 
            className="section-divider"
            initial={{ width: 0 }}
            animate={inView ? { width: '4rem' } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <p className="section-description">
            {data.summary}
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Key Info */}
          <motion.div
            className="space-y-12"
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Code className="h-5 w-5 text-cyan-400" />
                Experience & Focus
              </h3>
              <div className="space-y-6">
                <p className="text-slate-300 leading-relaxed">
                  {data.experience}
                </p>
                <p className="text-slate-300 leading-relaxed">
                  {data.mindset}
                </p>
              </div>
            </div>
            
            <div className="glass-card">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Zap className="h-5 w-5 text-indigo-400" />
                Technical Expertise
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {data.expertise}
              </p>
            </div>
          </motion.div>

          {/* Right Column - Metrics */}
          <motion.div
            className="space-y-6"
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="glass-card">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Target className="h-5 w-5 text-emerald-400" />
                Key Achievements
              </h3>
              <div className="space-y-4">
                {data.metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-gradient-to-r from-slate-800/40 to-slate-700/20 rounded-xl border border-slate-600/30 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-slate-300 leading-relaxed">{metric}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="grid lg:grid-cols-3 gap-8 mt-16"
          variants={itemVariants}
        >
          {/* Background Details */}
          <motion.div
            whileHover={{ 
              scale: 1.02,
              y: -5
            }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-2"
          >
            <Card className="bg-gray-900/60 border-gray-800 hover:border-gray-700 transition-all duration-300 h-full">
              <CardContent className="p-6">
                <motion.div 
                  className="flex items-center mb-4"
                  initial={{ x: -20, opacity: 0 }}
                  animate={inView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <User className="h-6 w-6 text-blue-400 mr-3" />
                  </motion.div>
                  <h3 className="text-xl font-mono font-bold text-gray-100">Background</h3>
                </motion.div>
                
                <motion.div 
                  className="space-y-4"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.2,
                        delayChildren: 1
                      }
                    }
                  }}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                >
                  <motion.div variants={itemVariants}>
                    <h4 className="text-blue-400 font-semibold mb-2">Journey</h4>
                    <p className="text-slate-300">{data.experience}</p>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <h4 className="text-blue-400 font-semibold mb-2">Core Skills</h4>
                    <p className="text-slate-300">{data.expertise}</p>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <h4 className="text-blue-400 font-semibold mb-2">Philosophy</h4>
                    <p className="text-slate-300 text-sm italic">{data.mindset}</p>
                  </motion.div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Key Metrics */}
          <motion.div
            whileHover={{ 
              scale: 1.05,
              y: -8
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="glass-card p-6 h-full">
                <motion.div 
                  className="flex items-center mb-4"
                  initial={{ x: 20, opacity: 0 }}
                  animate={inView ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <TrendingUp className="h-6 w-6 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-slate-50">Key Achievements</h3>
                </motion.div>
                <motion.div 
                  className="space-y-3"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 1.2
                      }
                    }
                  }}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                >
                  {data.metrics.map((metric, index) => (
                    <motion.div 
                      key={index}
                      variants={{
                        hidden: { x: 20, opacity: 0, scale: 0.9 },
                        visible: { 
                          x: 0, 
                          opacity: 1, 
                          scale: 1,
                          transition: { duration: 0.5 }
                        }
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "rgba(59, 130, 246, 0.1)",
                        borderColor: "rgba(59, 130, 246, 0.3)"
                      }}
                      className="p-3 bg-slate-800/50 rounded-lg border border-slate-700 cursor-default"
                    >
                      <p className="text-sm text-slate-300">{metric}</p>
                    </motion.div>
                  ))}
                </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;