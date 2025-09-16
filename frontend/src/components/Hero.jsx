import React from 'react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <div 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1447434108058-49f9248d09a5')`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-green-800/20"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-wide">
          Garden Party Events &<br />
          <span className="font-medium">Elegant Celebrations</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Transform any outdoor space into an unforgettable celebration with our 
          bespoke garden party planning and sophisticated event coordination services across London.
        </p>
        
        <Button 
          size="lg" 
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg font-medium transition-all duration-300 transform hover:scale-105"
        >
          EXPLORE OUR SERVICES
        </Button>
        
        {/* Trustpilot Widget Placeholder */}
        <div className="mt-12 flex items-center justify-center space-x-4 text-white/80">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-yellow-400" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm">See our <strong>95</strong> reviews on Trustpilot</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;