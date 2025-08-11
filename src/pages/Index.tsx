
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import BlogWritingSection from '../components/BlogWritingSection';
import SocialMediaSection from '../components/SocialMediaSection';
import AnalyticsSection from '../components/AnalyticsSection';
import PromptEngineeringSection from '../components/PromptEngineeringSection';
import NewsletterSection from '../components/NewsletterSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-navy-primary">
      <Navigation />
      <HeroSection />
      <BlogWritingSection />
      <SocialMediaSection />
      <AnalyticsSection />
      <PromptEngineeringSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
