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
      value: 'github.com/codyrist',
      href: data.github,
      copyValue: data.github
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Modern Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-800/40" />
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
            <MessageCircle className="h-8 w-8 text-blue-400" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-50">
              Let's Connect
            </h2>
          </div>
          <motion.div 
            className="w-16 h-0.5 bg-blue-500 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={inView ? { width: 64 } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Ready to discuss how I can help build exceptional products? Let's talk about your vision.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <motion.div
                key={index}
                className="glass-card p-8 text-center group"
                initial={{ y: 30, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/10 rounded-xl mb-4">
                    <IconComponent className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-50 mb-2">
                    {method.label}
                  </h3>
                </div>
                
                <div className="flex items-center justify-center gap-2">
                  {method.href ? (
                    <a
                      href={method.href}
                      className="text-slate-300 hover:text-blue-400 transition-colors font-medium"
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {method.value}
                    </a>
                  ) : (
                    <span className="text-slate-300 font-medium">
                      {method.value}
                    </span>
                  )}
                  
                  <button
                    onClick={() => handleCopy(method.copyValue, method.label)}
                    className="text-slate-500 hover:text-blue-400 transition-colors p-1.5 rounded-lg hover:bg-blue-500/10"
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
          className="text-center mb-16"
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