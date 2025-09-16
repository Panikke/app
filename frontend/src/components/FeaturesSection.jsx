import React from 'react';
import { CheckCircle, Clock, Umbrella, Leaf, Award } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: "Free consultation for events over £500",
    description: "Comprehensive planning session included"
  },
  {
    icon: Umbrella, 
    title: "Weather contingency planning included",
    description: "Rain or shine guarantee for all events"
  },
  {
    icon: CheckCircle,
    title: "Professional setup and breakdown", 
    description: "Complete service from start to finish"
  },
  {
    icon: Leaf,
    title: "Sustainable and eco-friendly practices",
    description: "Environmentally conscious event planning"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-emerald-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-emerald-700 rounded-full flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-emerald-100" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2 text-emerald-100">
                  {feature.title}
                </h3>
                <p className="text-sm text-emerald-200 opacity-90">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;