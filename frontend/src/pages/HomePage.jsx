import React from 'react';
import Hero from '../components/Hero';
import FeaturedSection from '../components/FeaturedSection';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import ServicesGrid from '../components/ServicesGrid';
import UpcomingEvents from '../components/UpcomingEvents';
import CollectionsGrid from '../components/CollectionsGrid';
import FeaturesSection from '../components/FeaturesSection';
import FeaturedLogos from '../components/FeaturedLogos';
import NewsletterModal from '../components/NewsletterModal';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedSection />
      <TestimonialsCarousel />
      <ServicesGrid />
      <UpcomingEvents />
      <CollectionsGrid />
      <FeaturesSection />
      <GiftSection />
      <FeaturedLogos />
      <NewsletterModal />
    </div>
  );
};

export default HomePage;