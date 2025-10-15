import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  
  const steps = [
    { label: 'Code', icon: '</>', color: 'from-green-400 to-emerald-500' },
    { label: 'Design', icon: '✦', color: 'from-blue-400 to-cyan-500' },
    { label: 'Build', icon: '⚡', color: 'from-purple-400 to-violet-500' },
    { label: 'Deploy', icon: '🚀', color: 'from-orange-400 to-red-500' },
    { label: 'Ready', icon: '✓', color: 'from-emerald-400 to-green-500' }
  ];

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= steps.length - 1) {
          clearInterval(stepInterval);
          setIsComplete(true);
          setTimeout(() => onLoadingComplete(), 1200);
          return prev;
        }
        return prev + 1;
      });
    }, 800);

    return () => clearInterval(stepInterval);
  }, [onLoadingComplete]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
    exit: {
      opacity: 0,
      scale: 0.9,
      filter: 'blur(20px)',
      transition: { duration: 1, ease: 'easeInOut' }
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-slate-950 flex items-center justify-center z-50 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={isComplete ? 'exit' : 'visible'}
    >
      {/* Subtle Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-600/3 rounded-full blur-3xl" />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Brand */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="text-3xl font-bold text-slate-50 mb-3">
            Q
          </div>
          <div className="text-blue-400 text-sm font-medium tracking-wide">
            Senior Software Engineer
          </div>
        </motion.div>

        {/* Step Process Visualization */}
        <div className="flex items-center justify-center space-x-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center space-y-3 relative"
              initial={{ opacity: 0.4, scale: 0.9 }}
              animate={{
                opacity: index <= currentStep ? 1 : 0.4,
                scale: index <= currentStep ? 1 : 0.9
              }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              {/* Step Circle */}
              <motion.div
                className="w-14 h-14 rounded-full flex items-center justify-center text-white font-semibold text-lg relative border-2 backdrop-blur-sm"
                animate={{
                  backgroundColor: index <= currentStep ? '#3b82f6' : 'rgba(51, 65, 85, 0.3)',
                  borderColor: index <= currentStep ? '#3b82f6' : 'rgba(71, 85, 105, 0.5)'
                }}
                transition={{ duration: 0.5 }}
              >
                <span className="relative z-10">{step.icon}</span>
                {index <= currentStep && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-blue-400/20"
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.5, 0, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  />
                )}
              </motion.div>
              
              {/* Step Label */}
              <motion.div
                className="text-sm font-medium"
                animate={{
                  color: index <= currentStep ? '#e2e8f0' : '#64748b'
                }}
                transition={{ duration: 0.3 }}
              >
                {step.label}
              </motion.div>
              
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <motion.div
                  className="absolute top-7 left-14 w-8 h-0.5 bg-slate-600"
                  animate={{
                    backgroundColor: index < currentStep ? '#3b82f6' : '#475569'
                  }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Dynamic Status Text */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            className="text-slate-400 text-sm h-6 font-medium"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            {currentStep < steps.length - 1 ? (
              <span>Setting up {steps[currentStep]?.label.toLowerCase()}...</span>
            ) : (
              <motion.span
                className="text-blue-400"
                animate={{
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 1.2, repeat: Infinity }}
              >
                Ready to explore ✨
              </motion.span>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
