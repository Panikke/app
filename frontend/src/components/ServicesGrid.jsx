import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { services } from '../data/mockData';

const ServicesGrid = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Shop <span className="font-medium text-emerald-700">Best Sellers</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular kokedama plants and garden services, each carefully crafted to bring nature into your home.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {services.map((service) => (
            <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-0">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {service.originalPrice && (
                  <Badge className="absolute top-2 right-2 bg-red-500 hover:bg-red-500">
                    {Math.round(((parseFloat(service.originalPrice.slice(1)) - parseFloat(service.price.slice(1))) / parseFloat(service.originalPrice.slice(1))) * 100)}% OFF
                  </Badge>
                )}
              </div>
              
              <CardContent className="p-4">
                <h3 className="font-medium text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {service.description}
                </p>
                
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-lg font-semibold text-gray-900">{service.price}</span>
                  {service.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">{service.originalPrice}</span>
                  )}
                </div>
                
                <ul className="space-y-1">
                  {service.features.slice(0, 2).map((feature, index) => (
                    <li key={index} className="text-xs text-gray-500 flex items-center">
                      <div className="w-1 h-1 bg-emerald-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="p-4 pt-0 space-y-2">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white transition-colors">
                  Add to Cart
                </Button>
                <Button variant="outline" size="sm" className="w-full text-emerald-600 border-emerald-200 hover:bg-emerald-50">
                  Quick View
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white px-8"
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;