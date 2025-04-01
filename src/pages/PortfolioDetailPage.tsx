
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

// Mock data for a single project
const projectData = {
  id: 1,
  title: 'Minimalistyczny apartament',
  category: 'Mieszkalne',
  location: 'Warszawa, Polska',
  year: '2023',
  area: '120 m²',
  description: 'Ten przestronny apartament w sercu Warszawy został zaprojektowany dla młodej pary, która ceni sobie minimalizm i funkcjonalność. Głównym celem projektu było stworzenie jasnej, otwartej przestrzeni, która będzie zarówno elegancka, jak i praktyczna w codziennym użytkowaniu.',
  longDescription: 'Projekt obejmował kompleksową modernizację apartamentu, w tym usunięcie niektórych ścian działowych, aby stworzyć bardziej otwartą przestrzeń. Zastosowaliśmy neutralną paletę kolorów, z dominującą bielą i odcieniami szarości, aby optycznie powiększyć przestrzeń i stworzyć wrażenie lekkości. Drewniane elementy dodają wnętrzu ciepła i przytulności, podczas gdy staranne oświetlenie podkreśla architekturę i kluczowe elementy wystroju.\n\nKuchnia została zaprojektowana jako minimalista, ale w pełni funkcjonalna przestrzeń, z matowymi frontami szafek i blatem z kompozytu. W salonie zastosowaliśmy duże, panoramiczne okna, aby wpuścić do wnętrza jak najwięcej naturalnego światła. Sypialnia to oaza spokoju, z miękką, neutralną paletą kolorów i starannie dobranymi tekstyliami.',
  materials: ['Drewno dębowe', 'Marmur Carrara', 'Stal nierdzewna', 'Kompozyt kwarcowy', 'Szkło'],
  images: [
    'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1974&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=1932&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1648183185045-7a5592e66e9c?q=80&w=1974&auto=format&fit=crop'
  ],
  beforeImage: 'https://images.unsplash.com/photo-1484511568696-9521139d4867?q=80&w=1836&auto=format&fit=crop'
};

const PortfolioDetailPage = () => {
  const { id } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // In a real app, you would fetch the project data based on the ID
  // For this demo, we'll use the mock data

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <Link to="/portfolio" className="inline-flex items-center text-gray-600 hover:text-gold mb-8">
            <ArrowLeft size={16} className="mr-2" />
            Powrót do portfolio
          </Link>
          
          <div>
            <h1 className="font-playfair text-3xl md:text-5xl font-bold mb-4">{projectData.title}</h1>
            <div className="flex flex-wrap gap-x-8 gap-y-2 mb-8">
              <div>
                <span className="text-gray-500 text-sm">Kategoria:</span>
                <p className="text-gray-900">{projectData.category}</p>
              </div>
              <div>
                <span className="text-gray-500 text-sm">Lokalizacja:</span>
                <p className="text-gray-900">{projectData.location}</p>
              </div>
              <div>
                <span className="text-gray-500 text-sm">Rok:</span>
                <p className="text-gray-900">{projectData.year}</p>
              </div>
              <div>
                <span className="text-gray-500 text-sm">Powierzchnia:</span>
                <p className="text-gray-900">{projectData.area}</p>
              </div>
            </div>
            <p className="text-gray-700 text-lg max-w-3xl">{projectData.description}</p>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative">
            <img 
              src={projectData.images[0]} 
              alt={projectData.title} 
              className="w-full h-[70vh] object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="md:col-span-2">
              <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-6">O projekcie</h2>
              {projectData.longDescription.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="text-gray-700 mb-4">{paragraph}</p>
              ))}
            </div>
            <div>
              <h3 className="font-playfair text-xl font-bold mb-4">Użyte materiały</h3>
              <ul className="mb-8">
                {projectData.materials.map((material, idx) => (
                  <li key={idx} className="text-gray-700 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                    {material}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-8 text-center">Przed i po</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <img 
                  src={projectData.beforeImage} 
                  alt="Przed" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded">
                  Przed
                </div>
              </div>
            </div>
            <div>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <img 
                  src={projectData.images[1]} 
                  alt="Po" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-gold text-white px-4 py-2 rounded">
                  Po
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Images */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-8 text-center">Więcej zdjęć</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectData.images.slice(1).map((image, idx) => (
              <div key={idx} className="overflow-hidden rounded-lg">
                <img 
                  src={image} 
                  alt={`${projectData.title} - ${idx + 2}`} 
                  className="w-full h-auto hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioDetailPage;
