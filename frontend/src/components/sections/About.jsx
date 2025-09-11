import React from 'react';
import { User, Code, Zap, Target, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';

const About = ({ data }) => {
  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Technical Excellence",
      description: data.expertise
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Experience Range",
      description: data.experience
    },
    {
      icon: <Target className="h-6 w-6" />,
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

        {/* Main Summary */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <p className="text-lg text-gray-300 leading-relaxed">
            {data.summary}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Background Details */}
          <Card className="lg:col-span-2 bg-gray-900/60 border-gray-800 hover:border-gray-700 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <User className="h-6 w-6 text-emerald-400 mr-3" />
                <h3 className="text-xl font-mono font-bold text-gray-100">Background</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-emerald-400 font-semibold mb-2">Journey</h4>
                  <p className="text-gray-300">{data.experience}</p>
                </div>
                <div>
                  <h4 className="text-emerald-400 font-semibold mb-2">Core Skills</h4>
                  <p className="text-gray-300">{data.expertise}</p>
                </div>
                <div>
                  <h4 className="text-emerald-400 font-semibold mb-2">Philosophy</h4>
                  <p className="text-gray-300 font-mono text-sm italic">{data.mindset}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Metrics */}
          <Card className="bg-gray-900/60 border-gray-800 hover:border-emerald-400/30 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-6 w-6 text-emerald-400 mr-3" />
                <h3 className="text-xl font-mono font-bold text-gray-100">Impact</h3>
              </div>
              <div className="space-y-3">
                {data.metrics.map((metric, index) => (
                  <div key={index} className="p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                    <p className="text-sm text-gray-300 font-mono">{metric}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;