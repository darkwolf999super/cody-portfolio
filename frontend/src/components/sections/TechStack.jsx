import React from 'react';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardHeader } from '../ui/card';

const TechStack = ({ data }) => {
  const categories = [
    { title: 'Frontend', icon: '⚡', techs: data.frontend, color: 'bg-blue-900/30 border-blue-700/50' },
    { title: 'Performance & Graphics', icon: '🎯', techs: data.performance, color: 'bg-emerald-900/30 border-emerald-700/50' },
    { title: 'Backend & Data', icon: '🗄️', techs: data.backend, color: 'bg-purple-900/30 border-purple-700/50' },
    { title: 'Tools & Platforms', icon: '🛠️', techs: data.tools, color: 'bg-orange-900/30 border-orange-700/50' },
    { title: 'Methodology', icon: '📋', techs: data.methodologies, color: 'bg-gray-900/30 border-gray-700/50' }
  ];

  return (
    <section id="tech-stack" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-mono font-bold text-gray-100 mb-4">
            Tech Stack
          </h2>
          <div className="w-20 h-1 bg-emerald-400 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Technologies and methodologies I use to build scalable, performant applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className={`${category.color} border transition-all duration-300 hover:scale-105`}>
              <CardHeader className="pb-3">
                <h3 className="text-lg font-mono font-semibold text-gray-100 flex items-center">
                  <span className="mr-2 text-lg">{category.icon}</span>
                  {category.title}
                </h3>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.techs.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="bg-gray-800/60 text-gray-300 hover:bg-gray-700/60 transition-colors text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;