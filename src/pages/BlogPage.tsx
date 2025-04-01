
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const blogPosts = [
  {
    id: 1,
    title: 'Trendy w projektowaniu wnętrz na 2023 rok',
    excerpt: 'Poznaj najnowsze trendy, które będą dominować w projektowaniu wnętrz w 2023 roku. Od kolorów po materiały i style.',
    date: '15 marca 2023',
    category: 'Trendy',
    author: 'Aleksandra Nowak',
    image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=2080&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Jak wybrać idealny kolor ścian do swojego wnętrza?',
    excerpt: 'Wybór odpowiedniego koloru ścian to jedno z najważniejszych decyzji przy aranżacji wnętrza. W tym artykule podpowiadamy, jak dobrać idealny odcień.',
    date: '2 lutego 2023',
    category: 'Porady',
    author: 'Piotr Kowalski',
    image: 'https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?q=80&w=2080&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Minimalizm we wnętrzach - mniej znaczy więcej',
    excerpt: 'Minimalistyczne wnętrza zyskują na popularności. Dowiedz się, jak stworzyć funkcjonalną i estetyczną przestrzeń w duchu minimalizmu.',
    date: '18 stycznia 2023',
    category: 'Style',
    author: 'Marta Wiśniewska',
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Rośliny w domu - jak stworzyć domową dżunglę?',
    excerpt: 'Rośliny doniczkowe to nie tylko piękna dekoracja, ale także sposób na poprawę jakości powietrza w domu. Podpowiadamy, jakie gatunki wybrać.',
    date: '5 grudnia 2022',
    category: 'Inspiracje',
    author: 'Tomasz Lewandowski',
    image: 'https://images.unsplash.com/photo-1545165375-8be705dd09d5?q=80&w=1827&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Mała kuchnia - jak ją funkcjonalnie urządzić?',
    excerpt: 'Mała kuchnia może być równie funkcjonalna jak duża. Przedstawiamy praktyczne rozwiązania, które pomogą maksymalnie wykorzystać dostępną przestrzeń.',
    date: '20 listopada 2022',
    category: 'Porady',
    author: 'Aleksandra Nowak',
    image: 'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Styl skandynawski - ponadczasowa elegancja',
    excerpt: 'Styl skandynawski to jeden z najpopularniejszych trendów w projektowaniu wnętrz. Poznaj jego charakterystyczne cechy i sposoby aranżacji.',
    date: '8 października 2022',
    category: 'Style',
    author: 'Piotr Kowalski',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop'
  }
];

const inspirations = [
  {
    id: 1,
    title: 'Złote akcenty we wnętrzach',
    image: 'https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?q=80&w=1932&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Naturalne materiały',
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Biuro w domu',
    image: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Kolorowe dodatki',
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1780&auto=format&fit=crop'
  }
];

const categories = ['Wszystkie', 'Trendy', 'Porady', 'Style', 'Inspiracje'];

const BlogPage = () => {
  const [category, setCategory] = useState('Wszystkie');
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredPosts = blogPosts
    .filter(post => category === 'Wszystkie' || post.category === category)
    .filter(post => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Blog</h1>
            <p className="text-gray-600 text-lg">
              Najnowsze trendy, porady i inspiracje ze świata projektowania wnętrz.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Main Content */}
            <div className="md:w-2/3">
              {/* Search & Filter */}
              <div className="mb-12">
                <div className="relative mb-6">
                  <Input 
                    placeholder="Szukaj artykułów..." 
                    className="w-full bg-gray-50 border-gray-200 pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                </div>
                <div className="flex flex-wrap gap-3">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setCategory(cat)}
                      className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
                        category === cat
                          ? 'bg-gold text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Blog Posts */}
              <div className="space-y-12">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post) => (
                    <article key={post.id} className="border-b border-gray-200 pb-12 last:border-0">
                      <Link to={`/blog/${post.id}`}>
                        <div className="mb-6 overflow-hidden rounded-lg">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </Link>
                      <div>
                        <div className="flex items-center gap-4 mb-3">
                          <span className="text-gold text-sm font-medium">{post.category}</span>
                          <span className="text-gray-500 text-sm">{post.date}</span>
                        </div>
                        <Link to={`/blog/${post.id}`}>
                          <h2 className="font-playfair text-2xl font-bold mb-3 hover:text-gold transition-colors">
                            {post.title}
                          </h2>
                        </Link>
                        <p className="text-gray-700 mb-4">{post.excerpt}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 text-sm">Autor: {post.author}</span>
                          <Link to={`/blog/${post.id}`} className="text-gold font-medium hover:underline">
                            Czytaj więcej
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))
                ) : (
                  <div className="text-center py-10">
                    <p className="text-gray-500">Brak artykułów spełniających kryteria wyszukiwania.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:w-1/3">
              {/* Recent Posts */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="font-playfair text-xl font-bold mb-6">Najnowsze artykuły</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <Link key={post.id} to={`/blog/${post.id}`} className="flex items-start gap-3 group">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div>
                        <h4 className="font-medium group-hover:text-gold transition-colors">{post.title}</h4>
                        <p className="text-gray-500 text-sm">{post.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="font-playfair text-xl font-bold mb-6">Kategorie</h3>
                <ul className="space-y-2">
                  {categories.slice(1).map((cat) => (
                    <li key={cat}>
                      <button 
                        onClick={() => setCategory(cat)}
                        className={`text-left w-full ${category === cat ? 'text-gold' : 'text-gray-700 hover:text-gold'} transition-colors`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inspirations */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-playfair text-xl font-bold mb-6">Inspiracje</h3>
                <div className="grid grid-cols-2 gap-4">
                  {inspirations.map((inspiration) => (
                    <div key={inspiration.id} className="group">
                      <div className="relative overflow-hidden rounded-lg mb-2">
                        <img 
                          src={inspiration.image} 
                          alt={inspiration.title} 
                          className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <p className="text-sm font-medium">{inspiration.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
