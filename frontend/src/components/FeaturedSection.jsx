import React from 'react';
import { Button } from './ui/button';

const FeaturedSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-emerald-50 to-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img 
              src="https://images.unsplash.com/photo-1543168256-8133cc8e3ee4"
              alt="Featured Garden Party Setup"
              className="rounded-lg shadow-xl w-full h-80 lg:h-96 object-cover"
            />
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight">
              Featured in The London<br />
              <span className="font-medium text-emerald-700">Evening Standard</span>
            </h2>
            
            <p className="text-gray-600 leading-relaxed text-lg">
              Garden Party London founder, Charlotte Williams, was recently featured 
              in The London Evening Standard's lifestyle section, showcasing the art 
              of creating sophisticated outdoor celebrations in the heart of London.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              In a special feature highlighting London's premier event planners, Charlotte 
              demonstrated the meticulous planning and attention to detail that goes into 
              creating unforgettable garden parties, from intimate gatherings to grand celebrations.
            </p>
            
            <Button 
              variant="outline" 
              className="border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white transition-all duration-300"
            >
              Read the full article
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;