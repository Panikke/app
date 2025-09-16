import React from 'react';
import { Button } from './ui/button';
import { Gift, Heart, Star } from 'lucide-react';

const GiftSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div>
            <img 
              src="https://images.unsplash.com/photo-1659123087151-f8a9bde5c9c3"
              alt="Gift Experience"
              className="rounded-lg shadow-xl w-full h-80 lg:h-96 object-cover"
            />
          </div>
          
          {/* Content */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-emerald-600 mb-4">
              <Gift className="h-6 w-6" />
              <span className="font-medium">GIFT EXPERIENCES</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight">
              Send an <span className="font-medium text-emerald-700">unforgettable experience</span>
            </h2>
            
            <p className="text-gray-600 leading-relaxed text-lg">
              Our garden party experiences make the perfect gift for birthdays, 
              anniversaries, and special celebrations. Give your loved ones a 
              professionally planned outdoor event they'll treasure forever.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-emerald-50 rounded-lg">
                <Heart className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-800">Personalized</div>
                <div className="text-xs text-gray-600">Custom themes</div>
              </div>
              <div className="text-center p-4 bg-emerald-50 rounded-lg">
                <Star className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-800">Memorable</div>
                <div className="text-xs text-gray-600">Lasting experiences</div>
              </div>
              <div className="text-center p-4 bg-emerald-50 rounded-lg">
                <Gift className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-800">Hassle-free</div>
                <div className="text-xs text-gray-600">Full planning included</div>
              </div>
            </div>
            
            <Button 
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              Browse Gift Experiences
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftSection;