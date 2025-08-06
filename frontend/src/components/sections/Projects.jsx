import React from 'react';
import { ExternalLink, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((project) => (
            <Card key={project.id} className="bg-gray-900/60 border-gray-800 hover:border-emerald-400/50 transition-all duration-300 group hover:transform hover:scale-105">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-mono font-bold text-gray-100 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink className="h-4 w-4 text-gray-500 group-hover:text-emerald-400 transition-colors" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex items-center space-x-2 text-emerald-400">
                  <TrendingUp className="h-4 w-4" />
                  <p className="text-sm font-semibold">
                    {project.impact}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 text-xs">
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