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
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Modern Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-800/30" />
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
            <User className="h-8 w-8 text-blue-400" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-50">
              About Me
            </h2>
          </div>
          <motion.div 
            className="w-16 h-0.5 bg-blue-500 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={inView ? { width: 64 } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <p className="text-xl text-slate-300 leading-relaxed max-w-4xl mx-auto">
            {data.summary}
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          {/* Left Column - Key Info */}
          <motion.div
            className="space-y-8"
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-slate-50 mb-4 flex items-center gap-2">
                <Code className="h-5 w-5 text-blue-400" />
                Experience & Focus
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                {data.experience}
              </p>
              <p className="text-slate-300 leading-relaxed">
                {data.mindset}
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-slate-50 mb-4 flex items-center gap-2">
                <Zap className="h-5 w-5 text-blue-400" />
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
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-slate-50 mb-6 flex items-center gap-2">
                <Target className="h-5 w-5 text-blue-400" />
                Key Achievements
              </h3>
              <div className="space-y-4">
                {data.metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-slate-800/30 rounded-xl border border-slate-700/30"
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-slate-300 text-sm leading-relaxed">{metric}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="grid lg:grid-cols-3 gap-8"
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