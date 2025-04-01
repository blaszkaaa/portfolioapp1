
import React from 'react';

const teamMembers = [
  {
    name: 'Aleksandra Nowak',
    role: 'Główny Projektant',
    bio: 'Z ponad 10-letnim doświadczeniem w branży, Aleksandra łączy innowacyjne pomysły z praktycznymi rozwiązaniami, tworząc przestrzenie, które są zarówno piękne, jak i funkcjonalne.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1998&auto=format&fit=crop'
  },
  {
    name: 'Piotr Kowalski',
    role: 'Architekt Wnętrz',
    bio: 'Piotr specjalizuje się w projektowaniu przestrzeni komercyjnych. Jego projekty charakteryzują się minimalizmem i dbałością o każdy detal.',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1974&auto=format&fit=crop'
  },
  {
    name: 'Marta Wiśniewska',
    role: 'Projektant Wnętrz',
    bio: 'Marta ma oko do koloru i tekstury. Jej projekty są pełne ciepła i charakteru, tworząc przytulne i stylowe przestrzenie mieszkalne.',
    image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop'
  },
  {
    name: 'Tomasz Lewandowski',
    role: 'Projektant 3D',
    bio: 'Tomasz tworzy fotorealistyczne wizualizacje, które pozwalają klientom zobaczyć swoje przyszłe wnętrza przed rozpoczęciem prac remontowych.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop'
  }
];

const AboutPage = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">O nas</h1>
            <p className="text-gray-600 text-lg">
              Poznaj nasze studio i zespół, który tworzy inspirujące przestrzenie.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl font-bold mb-6">Nasza historia</h2>
              <p className="text-gray-700 mb-4">
                ModernSpace rozpoczęło działalność w 2010 roku jako małe studio projektowe założone przez grupę pasjonatów architektury i designu. Przez lata rozwijaliśmy się, tworząc zespół utalentowanych projektantów z różnych dziedzin.
              </p>
              <p className="text-gray-700 mb-4">
                Nasze podejście do projektowania wnętrz zawsze opierało się na przekonaniu, że przestrzeń powinna odzwierciedlać osobowość i styl życia jej użytkowników. Dlatego każdy projekt traktujemy indywidualnie, wsłuchując się w potrzeby i marzenia naszych klientów.
              </p>
              <p className="text-gray-700">
                Dzisiaj ModernSpace jest uznanym studiem projektowym, realizującym projekty w całej Polsce. Naszą misją jest tworzenie przestrzeni, które inspirują, zachwycają funkcjonalnością i są dopasowane do indywidualnych potrzeb każdego klienta.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1769&auto=format&fit=crop" 
                alt="Nasze studio" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold rounded-lg hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-playfair text-3xl font-bold mb-6">Nasza misja</h2>
            <p className="text-gray-700 text-lg mb-8">
              "Naszym celem jest tworzenie wnętrz dopasowanych do Twojego stylu życia"
            </p>
            <p className="text-gray-600">
              Wierzymy, że dobrze zaprojektowana przestrzeń ma moc zmieniania życia. Dlatego w naszych projektach łączymy estetykę z funkcjonalnością, tworząc wnętrza, które nie tylko pięknie wyglądają, ale również wspierają codzienne aktywności ich użytkowników.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl font-bold mb-6">Nasz zespół</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Poznaj ludzi, którzy stoją za każdym naszym projektem - zespół doświadczonych i kreatywnych projektantów.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gold mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
