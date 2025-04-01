
import React from 'react';
import { Compass, Layout, PencilRuler, ClipboardCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <PencilRuler size={40} className="text-gold mb-4" />,
    title: 'Projektowanie wnętrz',
    description: 'Kompleksowe projekty wnętrz mieszkalnych i komercyjnych zgodne z Twoimi potrzebami i preferencjami.'
  },
  {
    icon: <Layout size={40} className="text-gold mb-4" />,
    title: 'Wizualizacje 3D',
    description: 'Fotorealistyczne wizualizacje projektowanych przestrzeni, pozwalające zobaczyć efekt końcowy przed rozpoczęciem prac.'
  },
  {
    icon: <Compass size={40} className="text-gold mb-4" />,
    title: 'Konsultacje',
    description: 'Profesjonalne doradztwo w zakresie doboru kolorów, materiałów, oświetlenia i innych elementów wystroju.'
  },
  {
    icon: <ClipboardCheck size={40} className="text-gold mb-4" />,
    title: 'Nadzór nad realizacją',
    description: 'Kompleksowy nadzór nad realizacją projektu, koordynacja prac budowlanych i wykończeniowych.'
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Nasze usługi</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferujemy kompleksowe rozwiązania w zakresie projektowania wnętrz, od koncepcji po realizację.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-8 rounded-lg text-center transition-transform hover:translate-y-[-5px] duration-300"
            >
              {service.icon}
              <h3 className="font-playfair text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/uslugi">
            <Button className="bg-transparent text-gray-800 border border-gray-300 hover:bg-gray-100 rounded px-6">
              Wszystkie usługi
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
