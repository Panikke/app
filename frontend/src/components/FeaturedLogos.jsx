import React from 'react';

const FeaturedLogos = () => {
  const logos = [
    { name: "The Times Weekend", image: "https://via.placeholder.com/150x60/2c3e50/white?text=THE+TIMES" },
    { name: "London Evening Standard", image: "https://via.placeholder.com/150x60/2c3e50/white?text=EVENING+STANDARD" },
    { name: "Time Out London", image: "https://via.placeholder.com/150x60/2c3e50/white?text=TIME+OUT" },
    { name: "Harper's Bazaar", image: "https://via.placeholder.com/150x60/2c3e50/white?text=HARPERS+BAZAAR" },
    { name: "Vogue Living", image: "https://via.placeholder.com/150x60/2c3e50/white?text=VOGUE" },
    { name: "Tatler", image: "https://via.placeholder.com/150x60/2c3e50/white?text=TATLER" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
            As Featured <span className="font-medium text-emerald-700">In...</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div 
              key={index}
              className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <img 
                src={logo.image} 
                alt={logo.name}
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedLogos;