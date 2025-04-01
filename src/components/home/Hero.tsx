
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop')", 
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl animate-fade-up">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Tworzymy przestrzenie, które inspirują
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl">
            Nasze studio projektowania wnętrz łączy funkcjonalność z estetyką, tworząc przestrzenie, które odzwierciedlają Twoją osobowość i styl życia.
          </p>
          <Link to="/portfolio">
            <Button className="bg-gold hover:bg-gold-dark text-white border-none rounded px-6 py-3 text-lg">
              Zobacz nasze realizacje
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
