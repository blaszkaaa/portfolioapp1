
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-24 relative">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop')", 
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Gotowy na metamorfozę Twojej przestrzeni?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Skontaktuj się z nami i umów się na bezpłatną konsultację. Razem stworzymy wnętrze Twoich marzeń.
          </p>
          <Link to="/kontakt">
            <Button className="bg-gold hover:bg-gold-dark text-white border-none rounded px-8 py-3 text-lg">
              Umów konsultację
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
