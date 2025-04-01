
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactPage = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Kontakt</h1>
            <p className="text-gray-600 text-lg">
              Masz pytania lub chcesz umówić konsultację? Skontaktuj się z nami!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="font-playfair text-2xl font-bold mb-6">Napisz do nas</h2>
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
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Temat</label>
                  <Input 
                    id="subject" 
                    placeholder="Temat wiadomości" 
                    className="w-full bg-white border-gray-200"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Wiadomość</label>
                  <Textarea 
                    id="message" 
                    placeholder="Twoja wiadomość" 
                    className="w-full bg-white border-gray-200 min-h-[150px]"
                  />
                </div>
                <div>
                  <Button className="bg-gold hover:bg-gold-dark text-white border-none rounded px-8 py-3">
                    Wyślij wiadomość
                  </Button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-playfair text-2xl font-bold mb-6">Informacje kontaktowe</h2>
              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <MapPin size={24} className="text-gold mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Adres</h3>
                    <p className="text-gray-700">ul. Projektowa 123</p>
                    <p className="text-gray-700">00-001 Warszawa</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone size={24} className="text-gold mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Telefon</h3>
                    <p className="text-gray-700">+48 123 456 789</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail size={24} className="text-gold mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">E-mail</h3>
                    <p className="text-gray-700">kontakt@modernspace.pl</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock size={24} className="text-gold mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Godziny otwarcia</h3>
                    <p className="text-gray-700">Poniedziałek - Piątek: 9:00 - 18:00</p>
                    <p className="text-gray-700">Sobota: 10:00 - 14:00</p>
                    <p className="text-gray-700">Niedziela: Zamknięte</p>
                  </div>
                </div>
              </div>
              
              <h3 className="font-playfair text-xl font-bold mb-4">Śledź nas</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-100 p-3 rounded-full text-gray-700 hover:text-gold hover:bg-gray-200 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-100 p-3 rounded-full text-gray-700 hover:text-gold hover:bg-gray-200 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a 
                  href="https://pinterest.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-100 p-3 rounded-full text-gray-700 hover:text-gold hover:bg-gray-200 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pinterest"><line x1="12" x2="12" y1="8" y2="16"/><line x1="8" x2="16" y1="12" y2="12"/><circle cx="12" cy="12" r="10"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-playfair text-2xl font-bold mb-8 text-center">Nasza lokalizacja</h2>
          <div className="rounded-lg overflow-hidden h-[450px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.3888872615397!2d21.00727511579157!3d52.23209117976297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc8c92692e49%3A0xc2e97552d0a3926c!2sPa%C5%82ac%20Kultury%20i%20Nauki!5e0!3m2!1spl!2spl!4v1626342052681!5m2!1spl!2spl" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true}
              loading="lazy"
              title="Mapa lokalizacji"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
