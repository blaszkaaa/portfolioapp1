
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Anna Kowalska',
    role: 'Właścicielka mieszkania',
    content: 'Współpraca z ModernSpace to czysta przyjemność. Projektanci dokładnie wsłuchali się w moje potrzeby i stworzyli przestrzeń, która idealnie odzwierciedla mój styl życia. Polecam z całego serca!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop'
  },
  {
    name: 'Jan Nowak',
    role: 'Dyrektor firmy',
    content: 'Zdecydowałem się na współpracę z ModernSpace przy projekcie naszego biura i nie mogłem podjąć lepszej decyzji. Przestrzeń jest funkcjonalna, a pracownicy chwalą nowe, inspirujące otoczenie.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop'
  },
  {
    name: 'Marta Wiśniewska',
    role: 'Właścicielka restauracji',
    content: 'Dzięki projektowi ModernSpace nasza restauracja zyskała niepowtarzalny klimat, który przyciąga gości. Profesjonalizm i kreatywność zespołu przeszły moje najśmielsze oczekiwania.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop'
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Co mówią nasi klienci</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Poznaj opinie osób, które zaufały naszemu studiu projektowemu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-8 rounded-lg shadow-sm transition-transform hover:translate-y-[-5px] duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-gold fill-gold" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
