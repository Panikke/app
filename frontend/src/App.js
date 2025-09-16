import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedSection from "./components/FeaturedSection";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import ServicesGrid from "./components/ServicesGrid";
import UpcomingEvents from "./components/UpcomingEvents";
import CollectionsGrid from "./components/CollectionsGrid";
import FeaturesSection from "./components/FeaturesSection";
import CorporateSection from "./components/CorporateSection";
import GiftSection from "./components/GiftSection";
import FeaturedLogos from "./components/FeaturedLogos";
import Footer from "./components/Footer";
import NewsletterModal from "./components/NewsletterModal";
import { Toaster } from "./components/ui/toaster";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedSection />
      <TestimonialsCarousel />
      <ServicesGrid />
      <UpcomingEvents />
      <CollectionsGrid />
      <FeaturesSection />
      <CorporateSection />
      <GiftSection />
      <FeaturedLogos />
      <Footer />
      <NewsletterModal />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;