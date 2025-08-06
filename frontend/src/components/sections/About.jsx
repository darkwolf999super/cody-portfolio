import React from 'react';
import { Code2, Zap, Users } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const About = ({ data }) => {
  const highlights = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Technical Excellence",
      description: data.expertise
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Experience Range",
      description: data.experience
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Product Mindset",
      description: data.mindset
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-mono font-bold text-gray-100 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-emerald-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Description */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              {data.summary}
            </p>
            <p className="text-base text-gray-400 leading-relaxed">
              Through my experience spans well-known companies, I joined during fast-moving, 
              high-ambiguity phases—now seeking a startup environment to own core product UI 
              and drive product momentum.
            </p>
          </div>

          {/* Highlights Cards */}
          <div className="space-y-4">
            {highlights.map((highlight, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-emerald-400 mt-1">
                      {highlight.icon}
                    </div>
                    <div>
                      <h3 className="font-mono font-semibold text-gray-100 mb-2">
                        {highlight.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;