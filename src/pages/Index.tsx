
import React from 'react';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Portfolio from '@/components/home/Portfolio';
import Testimonials from '@/components/home/Testimonials';
import CallToAction from '@/components/home/CallToAction';

const Index = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Index;
