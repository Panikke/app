import React from 'react';
import { Button } from './ui/button';
import { Building2, Users, Calendar, Award } from 'lucide-react';

const CorporateSection = () => {
  return (
    <section id="corporate" className="py-16 bg-gradient-to-br from-gray-900 to-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-light leading-tight">
              Bespoke corporate events that<br />
              <span className="font-medium text-emerald-300">inspire and engage</span>
            </h2>
            
            <p className="text-lg text-gray-200 leading-relaxed">
              Transform your corporate gatherings into memorable experiences with our 
              professional garden party services. Perfect for team building, client 
              entertainment, product launches, and company celebrations.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Building2 className="h-6 w-6 text-emerald-300 flex-shrink-0" />
                <span className="text-gray-200">Professional Setup</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-6 w-6 text-emerald-300 flex-shrink-0" />
                <span className="text-gray-200">Team Building Activities</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-6 w-6 text-emerald-300 flex-shrink-0" />
                <span className="text-gray-200">Flexible Scheduling</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="h-6 w-6 text-emerald-300 flex-shrink-0" />
                <span className="text-gray-200">Premium Service</span>
              </div>
            </div>
            
            <Button 
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-500 text-white border-0"
            >
              Explore Corporate Services
            </Button>
          </div>
          
          {/* Image */}
          <div>
            <img 
              src="https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg"
              alt="Corporate Garden Event"
              className="rounded-lg shadow-2xl w-full h-80 lg:h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateSection;