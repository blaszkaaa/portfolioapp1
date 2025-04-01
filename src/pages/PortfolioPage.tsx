
import React, { useState } from 'react';

const projects = [
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
  },
  {
    id: 4,
    title: 'Przytulny dom',
    category: 'Mieszkalne',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Skandynawska sypialnia',
    category: 'Mieszkalne',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1780&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Nowoczesna kuchnia',
    category: 'Mieszkalne',
    image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 7,
    title: 'Butik modowy',
    category: 'Komercyjne',
    image: 'https://images.unsplash.com/photo-1604014237256-11d475e2a2d8?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 8,
    title: 'Kawiarnia',
    category: 'Komercyjne',
    image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=2071&auto=format&fit=crop'
  },
  {
    id: 9,
    title: 'Luksusowa łazienka',
    category: 'Mieszkalne',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1965&auto=format&fit=crop'
  }
];

const PortfolioPage = () => {
  const [filter, setFilter] = useState('Wszystkie');
  
  const filteredProjects = filter === 'Wszystkie' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Nasze portfolio</h1>
            <p className="text-gray-600 text-lg">
              Odkryj nasze najnowsze projekty i realizacje, które łączą funkcjonalność z nowoczesnym designem.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Filter & Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['Wszystkie', 'Mieszkalne', 'Komercyjne'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  filter === category
                    ? 'bg-gold text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <a 
                key={project.id} 
                href={`/portfolio/${project.id}`} 
                className="group block"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                    <div className="transform translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-gold text-sm font-medium block mb-2">{project.category}</span>
                      <h3 className="text-white text-xl font-playfair font-semibold">{project.title}</h3>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
