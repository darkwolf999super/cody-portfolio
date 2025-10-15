import React, { useState } from 'react';
import { Mail, MapPin, Download, Copy, Check, Github, Globe, Send, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = ({ data }) => {
  const [copied, setCopied] = useState('');
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const handleCopy = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(''), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

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

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: data.email,
      href: `mailto:${data.email}`,
      copyValue: data.email
    },
    {
      icon: MapPin,
      label: 'Location',
      value: data.location,
      href: null,
      copyValue: data.location
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/qcodyq',
      href: data.github,
      copyValue: data.github
    }
  ];

  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Modern Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-br from-rose-400/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-tl from-cyan-400/8 to-transparent rounded-full blur-3xl" />
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
            <MessageCircle className="h-8 w-8 text-rose-400" />
            <h2 className="text-white font-bold">
              Let's Connect
            </h2>
          </div>
          <motion.div 
            className="section-divider"
            initial={{ width: 0 }}
            animate={inView ? { width: '4rem' } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <p className="section-description">
            Ready to collaborate on your next project? Let's connect and discuss how I can help build exceptional products.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <motion.div
                key={index}
                className="glass-card text-center group"
                initial={{ y: 30, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-800/60 to-slate-700/40 rounded-xl mb-6 border border-slate-600/50 backdrop-blur-sm">
                    <IconComponent className="h-7 w-7 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-6">
                    {method.label}
                  </h3>
                </div>
                
                <div className="flex items-center justify-center gap-3">
                  {method.href ? (
                    <a
                      href={method.href}
                      className="text-slate-300 hover:text-cyan-400 transition-colors font-medium text-lg"
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {method.value}
                    </a>
                  ) : (
                    <span className="text-slate-300 font-medium text-lg">
                      {method.value}
                    </span>
                  )}
                  
                  <button
                    onClick={() => handleCopy(method.copyValue, method.label)}
                    className="text-slate-500 hover:text-cyan-400 transition-colors p-2 rounded-xl hover:bg-cyan-500/10 border border-slate-600/50 backdrop-blur-sm"
                  >
                    <AnimatePresence mode="wait">
                      {copied === method.label ? (
                        <motion.div
                          key="check"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Check className="h-4 w-4 text-blue-400" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="copy"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Copy className="h-4 w-4" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
                
                {/* Success Message */}
                <AnimatePresence>
                  {copied === method.label && (
                    <motion.div
                      className="absolute top-2 right-2 bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded-full"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      Copied!
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <motion.div 
          className="text-center mb-16 mt-16"
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.button
              onClick={() => window.open(`mailto:${data.email}`, '_blank')}
              className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send className="h-5 w-5" />
              Send Message
            </motion.button>
            
            <motion.button
              onClick={() => window.open(data.resumeUrl, '_blank')}
              className="flex items-center gap-3 border border-slate-600 text-slate-300 hover:border-blue-500 hover:text-blue-400 px-8 py-4 rounded-xl font-medium transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="h-5 w-5" />
              Download Resume
            </motion.button>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer 
          className="mt-20 pt-8 border-t border-slate-700/50 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {data.name}. Built with React & passion for exceptional products.
          </p>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;