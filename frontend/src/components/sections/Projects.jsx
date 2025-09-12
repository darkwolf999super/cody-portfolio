import React from 'react';
import { ExternalLink, TrendingUp, Github, Eye, ImageIcon } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

const Projects = ({ data }) => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-mono font-bold text-gray-100 mb-4">
            Key Projects & Impact
          </h2>
          <div className="w-20 h-1 bg-emerald-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {data.filter(project => project.featured).map((project) => (
            <Card 
              key={project.id} 
              className="bg-gray-900/60 border-gray-800 hover:border-emerald-400/50 transition-all duration-300 group cursor-pointer"
              onClick={() => window.open(project.productUrl, '_blank')}
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gray-800/50 border-b border-gray-700 relative overflow-hidden">
                {project.screenshot ? (
                  <img 
                    src={project.screenshot} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div className="w-full h-full flex items-center justify-center text-gray-500" style={project.screenshot ? {display: 'none'} : {}}>
                  <ImageIcon className="h-12 w-12" />
                </div>
              </div>

              <CardHeader className="pb-3">
                <h3 className="text-xl font-mono font-bold text-gray-100 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="bg-gray-800/30 p-3 rounded-lg border border-gray-700">
                  <div className="flex items-center space-x-2 text-emerald-400 mb-1">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-xs font-semibold uppercase tracking-wide">Impact</span>
                  </div>
                  <p className="text-sm font-mono text-gray-300">
                    {project.impact}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="bg-emerald-900/30 text-emerald-300 border border-emerald-700/50 text-xs">
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

export default Projects;