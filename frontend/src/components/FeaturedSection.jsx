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
              Featured on South London<br />
              <span className="font-medium text-emerald-700">Community Radio</span>
            </h2>
            
            <p className="text-gray-600 leading-relaxed text-lg">
              Garden Party London founder was recently featured on South London 
              Community Radio, showcasing the art of traditional Japanese kokedama 
              and the benefits of sustainable cargo bike delivery services.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              In a special feature about innovative local businesses, we demonstrated 
              the mindful practice of moss ball planting and how our eco-friendly 
              mobile service is bringing nature directly to South East London homes.
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