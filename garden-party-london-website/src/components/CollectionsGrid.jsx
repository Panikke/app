import React from 'react';
import { collections } from '../data/mockData';

const CollectionsGrid = () => {
  return (
    <section id="collections" className="py-16 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Shop By <span className="font-medium text-emerald-700">Collection</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {collections.map((collection) => (
            <div 
              key={collection.id} 
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={collection.image} 
                  alt={collection.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{collection.name}</h3>
                  <p className="text-sm opacity-90">{collection.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a 
            href="#services"
            className="inline-block text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
          >
            View All Collections
          </a>
        </div>
      </div>
    </section>
  );
};

export default CollectionsGrid;