import React, { useState } from 'react';
import { Search, Menu, ShoppingBag, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Announcement Banner */}
      <div className="bg-emerald-800 text-white text-sm py-2 overflow-hidden">
        <div className="animate-scroll whitespace-nowrap flex space-x-8">
          <span className="mx-8">Mobile cargo bike stall across SE London</span>
          <span className="mx-8">Handmade kokedama using traditional methods</span>
          <span className="mx-8">Expert plant care advice included</span>
          <span className="mx-8">Mobile cargo bike stall across SE London</span>
          <span className="mx-8">Handmade kokedama using traditional methods</span>
          <span className="mx-8">Expert plant care advice included</span>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Search */}
            <div className="hidden md:flex items-center">
              <Search className="h-5 w-5 text-gray-400" />
            </div>

            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-emerald-600 rounded-full"></div>
              </div>
              <span className="text-xl font-semibold tracking-wide">GARDEN PARTY</span>
              <span className="text-sm text-gray-500">LONDON</span>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                SHOP
              </a>
              <a href="#collections" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                KOKEDAMA
              </a>
              <a href="#workshops" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                WORKSHOPS
              </a>
              <a href="#services" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                GARDEN SERVICES
              </a>
              <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                ABOUT
              </a>
            </nav>

            {/* Cart */}
            <div className="hidden md:flex items-center">
              <ShoppingBag className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-4 space-y-4">
              <a href="#services" className="block text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                SERVICES
              </a>
              <a href="#collections" className="block text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                PACKAGES
              </a>
              <a href="#workshops" className="block text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                WORKSHOPS
              </a>
              <a href="#corporate" className="block text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                CORPORATE
              </a>
              <a href="#about" className="block text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                ABOUT
              </a>
            </div>
          </div>
        )}
      </header>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(100%) }
          100% { transform: translateX(-100%) }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </>
  );
};

export default Header;