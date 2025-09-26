import React from 'react';
import { Rocket, Target, Users, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const LookingFor = ({ data }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const qualities = [
    {
      icon: Rocket,
      title: "Innovation Focus",
      description: "Ready to join teams building cutting-edge products with real-time data and AI"
    },
    {
      icon: Target,
      title: "Technical Impact",
      description: "Looking to own core architecture and drive meaningful technical outcomes"
    },
    {
      icon: Users,
      title: "Collaborative Growth",
      description: "Excited to work with cross-functional teams and mentoring opportunities"
    }
  ];

  return (
    <section id="looking-for" className="py-24 relative overflow-hidden">
      {/* Modern Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 to-slate-800/20" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/3 rounded-full blur-3xl" />
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
            <Search className="h-8 w-8 text-blue-400" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-50">
              {data.title}
            </h2>
          </div>
          <motion.div 
            className="w-16 h-0.5 bg-blue-500 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={inView ? { width: 64 } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Main Description */}
          <motion.div 
            className="glass-card p-8 mb-16 text-center"
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-slate-300 leading-relaxed">
              {data.description}
            </p>
          </motion.div>

          {/* Qualities Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {qualities.map((quality, index) => {
              const IconComponent = quality.icon;
              return (
                <motion.div
                  key={index}
                  className="glass-card p-8 text-center group"
                  initial={{ y: 30, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/10 rounded-xl mb-6">
                    <IconComponent className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-50 mb-4">
                    {quality.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {quality.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LookingFor;