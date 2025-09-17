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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <motion.div 
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-mono font-bold text-gray-100 mb-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-emerald-400 mx-auto"
            initial={{ width: 0 }}
            animate={inView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        {/* Main Summary */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-12"
          variants={itemVariants}
        >
          <motion.p 
            className="text-lg text-gray-300 leading-relaxed"
            whileHover={{ 
              scale: 1.01,
              color: "rgba(209, 213, 219, 1)"
            }}
            transition={{ duration: 0.2 }}
          >
            {data.summary}
          </motion.p>
        </motion.div>

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
                    <User className="h-6 w-6 text-emerald-400 mr-3" />
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
                    <h4 className="text-emerald-400 font-semibold mb-2">Journey</h4>
                    <p className="text-gray-300">{data.experience}</p>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <h4 className="text-emerald-400 font-semibold mb-2">Core Skills</h4>
                    <p className="text-gray-300">{data.expertise}</p>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <h4 className="text-emerald-400 font-semibold mb-2">Philosophy</h4>
                    <p className="text-gray-300 font-mono text-sm italic">{data.mindset}</p>
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
            <Card className="bg-gray-900/60 border-gray-800 hover:border-emerald-400/30 transition-all duration-300 h-full">
              <CardContent className="p-6">
                <motion.div 
                  className="flex items-center mb-4"
                  initial={{ x: 20, opacity: 0 }}
                  animate={inView ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.3, rotate: 180 }}
                    transition={{ duration: 0.4 }}
                  >
                    <TrendingUp className="h-6 w-6 text-emerald-400 mr-3" />
                  </motion.div>
                  <h3 className="text-xl font-mono font-bold text-gray-100">Impact</h3>
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
                        backgroundColor: "rgba(16, 185, 129, 0.1)",
                        borderColor: "rgba(16, 185, 129, 0.3)"
                      }}
                      className="p-3 bg-gray-800/50 rounded-lg border border-gray-700 cursor-default"
                    >
                      <p className="text-sm text-gray-300 font-mono">{metric}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;