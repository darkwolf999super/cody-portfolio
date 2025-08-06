import React from 'react';
import { Rocket, Target, Users } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const LookingFor = ({ data }) => {
  const qualities = [
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Early-Stage Focus",
      description: "Ready to join a team where every decision shapes the product's future"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Product Ownership",
      description: "Looking to own core UI architecture and drive meaningful product outcomes"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaborative Growth",
      description: "Excited to work closely with founders and grow with the company's vision"
    }
  ];

  return (
    <section id="looking-for" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-mono font-bold text-gray-100 mb-4">
            {data.title}
          </h2>
          <div className="w-20 h-1 bg-emerald-400 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 border-gray-700 mb-12">
            <CardContent className="p-8">
              <p className="text-lg text-gray-300 leading-relaxed text-center">
                {data.description}
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            {qualities.map((quality, index) => (
              <Card key={index} className="bg-gray-900/60 border-gray-800 hover:border-emerald-400/50 transition-all duration-300 group hover:transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="text-emerald-400 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                    {quality.icon}
                  </div>
                  <h3 className="text-lg font-mono font-semibold text-gray-100 mb-3">
                    {quality.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {quality.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LookingFor;