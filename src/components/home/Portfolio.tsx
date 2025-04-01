
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const portfolioItems = [
  {
    id: 1,
    title: 'Minimalistyczny apartament',
    category: 'Mieszkalne',
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Nowoczesne biuro',
    category: 'Komercyjne',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Elegancka restauracja',
    category: 'Komercyjne',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop'
  }
];

const Portfolio = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Nasze realizacje</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Odkryj nasze najnowsze projekty, które łączą estetykę z funkcjonalnością.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <Link key={item.id} to={`/portfolio/${item.id}`}>
              <div className="group relative overflow-hidden rounded-lg cursor-pointer">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                  <div className="transform translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-gold text-sm font-medium block mb-2">{item.category}</span>
                    <h3 className="text-white text-xl font-playfair font-semibold">{item.title}</h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/portfolio">
            <Button className="bg-gold hover:bg-gold-dark text-white border-none rounded px-6">
              Zobacz więcej projektów
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
