import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from './ui/button';
import { testimonials } from '../data/mockData';

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-light text-center text-gray-900 mb-12">
          What Our <span className="font-medium text-emerald-700">Clients Say</span>
        </h2>
        
        {/* Testimonial Images Row */}
        <div className="flex justify-center space-x-4 mb-8 overflow-x-auto pb-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`flex-shrink-0 w-16 h-16 rounded-full overflow-hidden cursor-pointer transition-all duration-300 ${
                index === currentIndex ? 'ring-4 ring-emerald-500 scale-110' : 'opacity-60 hover:opacity-80'
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              {testimonial.image ? (
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-emerald-100 flex items-center justify-center">
                  <span className="text-emerald-600 font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          
          <blockquote className="text-xl md:text-2xl text-gray-800 mb-6 leading-relaxed font-light italic">
            "{currentTestimonial.review}"
          </blockquote>
          
          <div className="text-emerald-700 font-medium text-lg">
            {currentTestimonial.name}
          </div>
          <div className="text-gray-500 text-sm">
            {currentTestimonial.location} - {currentTestimonial.date}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center space-x-4 mt-8">
          <Button
            variant="outline"
            size="sm"
            onClick={prevTestimonial}
            className="w-10 h-10 rounded-full p-0 border-emerald-200 hover:bg-emerald-50"
          >
            <ChevronLeft className="h-4 w-4 text-emerald-600" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={nextTestimonial}
            className="w-10 h-10 rounded-full p-0 border-emerald-200 hover:bg-emerald-50"
          >
            <ChevronRight className="h-4 w-4 text-emerald-600" />
          </Button>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-emerald-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;