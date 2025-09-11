import React, { useState } from 'react';
import { Phone, Mail, MapPin, Download, Copy, Check, Github, Linkedin, Globe } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';

const Contact = ({ data }) => {
  const [copied, setCopied] = useState('');

  const handleCopy = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(''), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-mono font-bold text-gray-100 mb-4">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-emerald-400 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Ready to discuss how I can help your early-stage team build exceptional UI? 
            Let's talk about your product vision.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <Card key={index} className="bg-gray-900/60 border-gray-800 hover:border-emerald-400/50 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="text-emerald-400 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {method.icon}
                </div>
                <h3 className="text-sm font-mono font-semibold text-gray-400 mb-2 uppercase tracking-wider">
                  {method.label}
                </h3>
                <div className="flex items-center justify-center space-x-2">
                  {method.href ? (
                    <a
                      href={method.href}
                      className="text-gray-100 hover:text-emerald-400 transition-colors font-medium"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <span className="text-gray-100 font-medium">
                      {method.value}
                    </span>
                  )}
                  <button
                    onClick={() => handleCopy(method.copyValue, method.label)}
                    className="text-gray-500 hover:text-emerald-400 transition-colors ml-2"
                  >
                    {copied === method.label ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Links */}
        <div className="text-center mb-12">
          <div className="flex justify-center space-x-8 mb-8">
            {data.github && (
              <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group"
              >
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-emerald-600 transition-colors duration-300">
                  <Github className="h-6 w-6 text-gray-300 group-hover:text-white" />
                </div>
                <span className="text-sm text-gray-400 mt-2 group-hover:text-emerald-400 transition-colors">GitHub</span>
              </a>
            )}
            {data.linkedin && (
              <a
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group"
              >
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-emerald-600 transition-colors duration-300">
                  <Linkedin className="h-6 w-6 text-gray-300 group-hover:text-white" />
                </div>
                <span className="text-sm text-gray-400 mt-2 group-hover:text-emerald-400 transition-colors">LinkedIn</span>
              </a>
            )}
            {data.portfolio && (
              <a
                href={data.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group"
              >
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-emerald-600 transition-colors duration-300">
                  <Globe className="h-6 w-6 text-gray-300 group-hover:text-white" />
                </div>
                <span className="text-sm text-gray-400 mt-2 group-hover:text-emerald-400 transition-colors">Portfolio</span>
              </a>
            )}
          </div>
          
          <Button
            onClick={() => window.open(data.resumeUrl, '_blank')}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105 font-mono"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Full Resume
          </Button>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {data.name}. Built with React & passion for exceptional UI.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;