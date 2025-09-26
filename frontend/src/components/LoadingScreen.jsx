import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState('loading');

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setStage('complete');
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: {
      opacity: 0,
      scale: 1.1,
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: { 
      width: `${progress}%`,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { delay: 0.2, duration: 0.6 }
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-gray-950 flex items-center justify-center z-50"
      variants={containerVariants}
      initial="hidden"
      animate={stage === 'complete' ? 'exit' : 'visible'}
    >
      <div className="text-center space-y-8 max-w-md w-full px-8">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "backOut" }}
          className="relative"
        >
          <div className="w-16 h-16 mx-auto relative">
            <motion.div
              className="absolute inset-0 border-4 border-emerald-500 rounded-full"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-2 bg-emerald-500/20 rounded-full flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <span className="text-emerald-400 font-mono font-bold text-xl">CC</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.div variants={textVariants}>
          <h1 className="text-2xl font-mono font-bold text-gray-100 mb-2">
            Cody Christ
          </h1>
          <p className="text-emerald-400 font-mono text-sm tracking-wider">
            Senior Software Engineer
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="space-y-3">
          <div className="w-full bg-gray-800 rounded-full h-1 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full relative"
              variants={progressVariants}
              animate="visible"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: [-100, 200] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
          
          <motion.div
            className="flex justify-between text-xs font-mono text-gray-500"
            variants={textVariants}
          >
            <span>Loading Portfolio...</span>
            <span>{Math.round(progress)}%</span>
          </motion.div>
        </div>

        {/* Loading Messages */}
        <motion.div
          className="text-gray-400 text-sm font-mono h-6"
          key={Math.floor(progress / 25)}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          {progress < 25 && "Initializing experience..."}
          {progress >= 25 && progress < 50 && "Loading projects..."}
          {progress >= 50 && progress < 75 && "Preparing animations..."}
          {progress >= 75 && progress < 100 && "Almost ready..."}
          {progress >= 100 && "Welcome!"}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
