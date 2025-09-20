import React from 'react';
import { Button } from './ui/button';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { upcomingEvents } from '../data/mockData';

const UpcomingEvents = () => {
  return (
    <section id="workshops" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img 
              src="https://images.pexels.com/photos/33915850/pexels-photo-33915850.jpeg"
              alt="Garden Party Workshop"
              className="rounded-lg shadow-xl w-full h-80 lg:h-96 object-cover"
            />
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight">
              Find Our Mobile Stall<br />
              <span className="font-medium text-emerald-700">Locations & Workshops</span>
            </h2>
            
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="border-l-4 border-emerald-500 pl-4 py-2">
                  <div className="flex items-center space-x-2 mb-1">
                    <Calendar className="h-4 w-4 text-emerald-600" />
                    <span className="font-semibold text-emerald-700">{event.date}</span>
                    <span className="text-gray-600">- {event.event}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-1">
                    <MapPin className="h-3 w-3" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                    <Clock className="h-3 w-3" />
                    <span>{event.time}</span>
                  </div>
                  <p className="text-sm text-gray-500">{event.description}</p>
                </div>
              ))}
            </div>
            
            <p className="text-gray-600 italic">
              **Follow us on Instagram @gardenpartylondon for live location updates.**
            </p>
            
            <Button 
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              BOOK WORKSHOP TICKETS
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;