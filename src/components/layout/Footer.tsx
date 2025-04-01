import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Image, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-4">Modern<span className="text-gold">Space</span></h3>
            <p className="text-gray-600 mb-4">
              Studio projektowania wnętrz specjalizujące się w tworzeniu nowoczesnych i funkcjonalnych przestrzeni mieszkalnych oraz komercyjnych.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gold transition-colors">
                <Image size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Szybkie linki</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-gold transition-colors">Strona główna</Link>
              </li>
              <li>
                <Link to="/o-nas" className="text-gray-600 hover:text-gold transition-colors">O nas</Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-600 hover:text-gold transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link to="/uslugi" className="text-gray-600 hover:text-gold transition-colors">Usługi</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-gold transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-gray-600 hover:text-gold transition-colors">Kontakt</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Kontakt</h4>
            <p className="text-gray-600 mb-2">ul. Projektowa 123</p>
            <p className="text-gray-600 mb-2">00-001 Warszawa</p>
            <p className="text-gray-600 mb-2">+48 123 456 789</p>
            <p className="text-gray-600 mb-2">kontakt@modernspace.pl</p>
          </div>

          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-600 mb-4">Zapisz się, aby otrzymywać najnowsze artykuły i inspiracje.</p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Twój email" 
                className="bg-white border-gray-200"
              />
              <Button size="icon" className="bg-gold hover:bg-gold-dark">
                <Send size={18} />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} ModernSpace. Wszelkie prawa zastrzeżone.
            </p>
            <div className="flex space-x-6">
              <Link to="/polityka-prywatnosci" className="text-gray-500 text-sm hover:text-gold transition-colors">
                Polityka prywatności
              </Link>
              <Link to="/regulamin" className="text-gray-500 text-sm hover:text-gold transition-colors">
                Regulamin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
