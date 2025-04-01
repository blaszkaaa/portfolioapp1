
import React from 'react';
import { Compass, Layout, PencilRuler, ClipboardCheck, Palette, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const services = [
  {
    icon: <PencilRuler size={48} className="text-gold mb-6" />,
    title: 'Projektowanie wnętrz',
    description: 'Kompleksowe projekty wnętrz mieszkalnych i komercyjnych zgodne z Twoimi potrzebami i preferencjami. Obejmują one układ funkcjonalny, dobór materiałów, kolorów, oświetlenia i mebli.',
    items: [
      'Analiza potrzeb i stylu życia klienta',
      'Koncepcja i wizualizacje projektowe',
      'Projekt wykonawczy i specyfikacja materiałów',
      'Doradztwo w zakresie doboru mebli i dodatków'
    ]
  },
  {
    icon: <Layout size={48} className="text-gold mb-6" />,
    title: 'Wizualizacje 3D',
    description: 'Fotorealistyczne wizualizacje projektowanych przestrzeni, pozwalające zobaczyć efekt końcowy przed rozpoczęciem prac. To nieoceniona pomoc w podejmowaniu decyzji dotyczących projektu.',
    items: [
      'Realistyczne renderingi wszystkich pomieszczeń',
      'Wizualizacje w różnych wariantach kolorystycznych',
      'Prezentacja różnych opcji mebli i wyposażenia',
      'Animacje 3D dla lepszego zrozumienia przestrzeni'
    ]
  },
  {
    icon: <Compass size={48} className="text-gold mb-6" />,
    title: 'Konsultacje',
    description: 'Profesjonalne doradztwo w zakresie doboru kolorów, materiałów, oświetlenia i innych elementów wystroju. Idealne rozwiązanie dla osób, które potrzebują jedynie wskazówek do samodzielnej realizacji.',
    items: [
      'Jednorazowe lub cykliczne sesje doradcze',
      'Analiza istniejącej przestrzeni i propozycje zmian',
      'Doradztwo w zakresie doboru materiałów i kolorów',
      'Wskazówki dotyczące rozmieszczenia mebli i dodatków'
    ]
  },
  {
    icon: <ClipboardCheck size={48} className="text-gold mb-6" />,
    title: 'Nadzór nad realizacją',
    description: 'Kompleksowy nadzór nad realizacją projektu, koordynacja prac budowlanych i wykończeniowych. Gwarancja, że projekt zostanie zrealizowany zgodnie z założeniami.',
    items: [
      'Nadzór nad pracami budowlanymi i wykończeniowymi',
      'Koordynacja dostawców i wykonawców',
      'Kontrola jakości wykonywanych prac',
      'Wsparcie podczas całego procesu realizacji'
    ]
  },
  {
    icon: <Palette size={48} className="text-gold mb-6" />,
    title: 'Projekty kolorystyczne',
    description: 'Specjalistyczne projekty kolorystyczne dla wnętrz, uwzględniające psychologię kolorów, trendy i indywidualne preferencje. Dobór odpowiednich odcieni może całkowicie odmienić charakter wnętrza.',
    items: [
      'Analiza preferencji i potrzeb psychologicznych',
      'Propozycje palety kolorystycznej',
      'Wizualizacje różnych wariantów kolorystycznych',
      'Dobór materiałów i tkanin w odpowiednich kolorach'
    ]
  },
  {
    icon: <MessageSquare size={48} className="text-gold mb-6" />,
    title: 'Home staging',
    description: 'Profesjonalne przygotowanie nieruchomości do sprzedaży lub wynajmu. Usługa pozwalająca na szybszą sprzedaż i uzyskanie lepszej ceny za nieruchomość dzięki odpowiedniej aranżacji.',
    items: [
      'Ocena i analiza obecnego stanu nieruchomości',
      'Propozycje zmian aranżacyjnych',
      'Realizacja zmian z wykorzystaniem istniejących elementów',
      'Profesjonalna sesja fotograficzna po zmianach'
    ]
  }
];

const ServicesPage = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Nasze usługi</h1>
            <p className="text-gray-600 text-lg">
              Oferujemy kompleksowe rozwiązania w zakresie projektowania wnętrz, od koncepcji po realizację.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <div className="flex justify-center md:justify-start">
                  {service.icon}
                </div>
                <h2 className="font-playfair text-2xl font-bold mb-4 text-center md:text-left">{service.title}</h2>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-playfair text-3xl font-bold mb-8 text-center">Umów konsultację</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Imię i nazwisko</label>
                  <Input 
                    id="name" 
                    placeholder="Twoje imię i nazwisko" 
                    className="w-full bg-white border-gray-200"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">E-mail</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Twój adres e-mail" 
                    className="w-full bg-white border-gray-200"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Telefon</label>
                  <Input 
                    id="phone" 
                    placeholder="Twój numer telefonu" 
                    className="w-full bg-white border-gray-200"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-gray-700 mb-2">Interesująca Cię usługa</label>
                  <select 
                    id="service" 
                    className="w-full p-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold/50"
                  >
                    <option value="">Wybierz usługę</option>
                    {services.map((service, index) => (
                      <option key={index} value={service.title}>{service.title}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Twoja wiadomość</label>
                <Textarea 
                  id="message" 
                  placeholder="Opisz krótko swoje potrzeby" 
                  className="w-full bg-white border-gray-200 min-h-[150px]"
                />
              </div>
              <div className="text-center">
                <Button className="bg-gold hover:bg-gold-dark text-white border-none rounded px-8 py-3">
                  Wyślij zapytanie
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
