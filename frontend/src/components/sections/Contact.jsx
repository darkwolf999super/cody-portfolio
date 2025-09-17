import React, { useState } from 'react';
import { Phone, Mail, MapPin, Download, Copy, Check, Github, Globe, Calendar, Send, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';

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
      icon: <Phone className="h-6 w-6" />,
      label: 'Phone',
      value: data.phone,
      href: `tel:${data.phone}`,
      copyValue: data.phone
    },
    {
      icon: <Mail className="h-6 w-6" />,
      label: 'Email',
      value: data.email,
      href: `mailto:${data.email}`,
      copyValue: data.email
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: 'Location',
      value: data.location,
      href: null,
      copyValue: data.location
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30 relative overflow-hidden" ref={ref}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, -10, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-teal-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -15, 0],
            y: [0, 15, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
      
      <motion.div 
        className="max-w-4xl mx-auto relative z-10"
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
            Let's Connect
            <motion.span
              className="inline-block ml-2"
              animate={{ rotate: [0, 14, -8, 14, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              👋
            </motion.span>
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-emerald-400 mx-auto"
            initial={{ width: 0 }}
            animate={inView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          <motion.p 
            className="text-gray-400 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Ready to discuss how I can help your early-stage team build exceptional UI? 
            Let's talk about your product vision.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-6 mb-12"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
              }
            }
          }}
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { y: 30, opacity: 0, scale: 0.9 },
                visible: { 
                  y: 0, 
                  opacity: 1, 
                  scale: 1,
                  transition: {
                    duration: 0.5,
                    ease: "easeOut"
                  }
                }
              }}
              whileHover={{ 
                y: -8,
                scale: 1.05,
                rotateY: 5
              }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-gray-900/60 border-gray-800 hover:border-emerald-400/50 transition-all duration-300 group relative overflow-hidden h-full">
                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
                
                <CardContent className="p-6 text-center relative z-10">
                  <motion.div 
                    className="text-emerald-400 mb-4 flex justify-center"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      color: "rgba(16, 185, 129, 1)"
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {method.icon}
                  </motion.div>
                  
                  <motion.h3 
                    className="text-sm font-mono font-semibold text-gray-400 mb-2 uppercase tracking-wider group-hover:text-emerald-400 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {method.label}
                  </motion.h3>
                  
                  <div className="flex items-center justify-center space-x-2">
                    {method.href ? (
                      <motion.a
                        href={method.href}
                        className="text-gray-100 hover:text-emerald-400 transition-colors font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {method.value}
                      </motion.a>
                    ) : (
                      <motion.span 
                        className="text-gray-100 font-medium"
                        whileHover={{ scale: 1.05 }}
                      >
                        {method.value}
                      </motion.span>
                    )}
                    
                    <motion.button
                      onClick={() => handleCopy(method.copyValue, method.label)}
                      className="text-gray-500 hover:text-emerald-400 transition-colors ml-2 p-1 rounded-full hover:bg-emerald-400/10"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <AnimatePresence mode="wait">
                        {copied === method.label ? (
                          <motion.div
                            key="check"
                            initial={{ scale: 0, rotate: -90 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0, rotate: 90 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Check className="h-4 w-4 text-emerald-400" />
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
                    </motion.button>
                  </div>
                  
                  {/* Success Message */}
                  <AnimatePresence>
                    {copied === method.label && (
                      <motion.div
                        className="absolute top-2 right-2 bg-emerald-400/20 text-emerald-300 text-xs px-2 py-1 rounded-full"
                        initial={{ opacity: 0, scale: 0, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        Copied!
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className="text-center mb-12"
          variants={itemVariants}
        >
          <motion.div 
            className="flex justify-center space-x-8 mb-8"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {data.github && (
              <motion.a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group"
                variants={{
                  hidden: { scale: 0, opacity: 0 },
                  visible: { scale: 1, opacity: 1 }
                }}
                whileHover={{ 
                  scale: 1.1,
                  y: -5
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-emerald-600 transition-colors duration-300 relative overflow-hidden"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Github className="h-6 w-6 text-gray-300 group-hover:text-white relative z-10" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    initial={false}
                  />
                </motion.div>
                <span className="text-sm text-gray-400 mt-2 group-hover:text-emerald-400 transition-colors">GitHub</span>
              </motion.a>
            )}
            {data.portfolio && (
              <motion.a
                href={data.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group"
                variants={{
                  hidden: { scale: 0, opacity: 0 },
                  visible: { scale: 1, opacity: 1 }
                }}
                whileHover={{ 
                  scale: 1.1,
                  y: -5
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-emerald-600 transition-colors duration-300 relative overflow-hidden"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Globe className="h-6 w-6 text-gray-300 group-hover:text-white relative z-10" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    initial={false}
                  />
                </motion.div>
                <span className="text-sm text-gray-400 mt-2 group-hover:text-emerald-400 transition-colors">Portfolio</span>
              </motion.a>
            )}
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { 
                y: 0, 
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.div
              variants={{
                hidden: { x: -20, opacity: 0 },
                visible: { x: 0, opacity: 1 }
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Button
                onClick={() => window.open(data.calendlyUrl, '_blank')}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg font-mono relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <span className="relative z-10 flex items-center">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
                    className="mr-2"
                  >
                    <Calendar className="h-5 w-5" />
                  </motion.div>
                  Schedule a Call
                </span>
                <motion.div
                  className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"
                  initial={false}
                />
              </Button>
            </motion.div>
            
            <motion.div
              variants={{
                hidden: { x: 20, opacity: 0 },
                visible: { x: 0, opacity: 1 }
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Button
                onClick={() => window.open(data.resumeUrl, '_blank')}
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-3 text-lg font-mono relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gray-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <span className="relative z-10 flex items-center">
                  <motion.div
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                    className="mr-2"
                  >
                    <Download className="h-5 w-5" />
                  </motion.div>
                  Download Resume
                </span>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.footer 
          className="mt-20 pt-8 border-t border-gray-800 text-center"
          variants={itemVariants}
        >
          <motion.p 
            className="text-gray-500 text-sm flex items-center justify-center gap-2"
            whileHover={{ 
              color: "rgba(156, 163, 175, 1)",
              scale: 1.02
            }}
            transition={{ duration: 0.2 }}
          >
            © {new Date().getFullYear()} {data.name}. Built with 
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
            >
              ❤️
            </motion.span>
            React & passion for exceptional UI.
            <motion.span
              className="inline-block ml-1"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
            >
              ✨
            </motion.span>
          </motion.p>
        </motion.footer>
      </motion.div>
    </section>
  );
};

export default Contact;