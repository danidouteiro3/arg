import React from 'react';
import { ArrowLeft, Star, Wifi, Car, Utensils, Dumbbell, MapPin, Calendar, Users, Phone, ExternalLink, Award, Globe } from 'lucide-react';

interface HotelDetailProps {
  hotelId: string;
  onBack: () => void;
}

const hotels = {
  'aman-tokyo': {
    name: "Aman Tokyo",
    location: "Tóquio, Japão",
    category: "Urban Sanctuary",
    price: "€800/noite",
    rating: 9.8,
    officialWebsite: "https://www.aman.com/resorts/aman-tokyo",
    images: [
      "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg",
      "https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg",
      "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg"
    ],
    description: "Serenidade urbana no coração da metrópole japonesa",
    fullDescription: "O Aman Tokyo representa o auge da hospitalidade japonesa contemporânea, situado no coração de Tóquio com vistas deslumbrantes do Palácio Imperial. Este santuário urbano combina a serenidade tradicional japonesa com o luxo moderno mais refinado.",
    history: "Inaugurado em 2014, o Aman Tokyo foi o primeiro hotel urbano da prestigiada marca Aman no Japão. Localizado no distrito financeiro de Otemachi, o hotel ocupa os seis andares superiores do edifício Otemachi Tower, oferecendo uma perspetiva única sobre a cidade imperial.",
    whyChoose: [
      "Localização privilegiada no centro de Tóquio",
      "Design minimalista japonês autêntico",
      "Vistas panorâmicas do Palácio Imperial",
      "Spa Aman com tratamentos tradicionais japoneses",
      "Serviço personalizado de classe mundial",
      "Proximidade aos principais distritos de negócios"
    ],
    amenities: [
      { icon: <Wifi className="h-5 w-5" />, name: "Wi-Fi de alta velocidade" },
      { icon: <Car className="h-5 w-5" />, name: "Serviço de limusine" },
      { icon: <Utensils className="h-5 w-5" />, name: "Restaurante Michelin" },
      { icon: <Dumbbell className="h-5 w-5" />, name: "Spa & Centro de Fitness" },
      { icon: <Users className="h-5 w-5" />, name: "Concierge 24h" },
      { icon: <Phone className="h-5 w-5" />, name: "Serviço de quarto 24h" }
    ],
    rooms: [
      {
        type: "Deluxe Room",
        size: "71m²",
        features: "Vista da cidade • Banheira japonesa",
        price: "€800/noite"
      },
      {
        type: "Premier Room", 
        size: "71m²",
        features: "Vista do Palácio Imperial • Sala de estar",
        price: "€1.000/noite"
      },
      {
        type: "Aman Suite",
        size: "126m²", 
        features: "Vista panorâmica • Sala de jantar privada",
        price: "€2.200/noite"
      }
    ],
    highlights: [
      "Único hotel Aman no centro de Tóquio",
      "Design por Kerry Hill Architects",
      "Materiais tradicionais: washi, madeira e pedra vulcânica",
      "Piscina interior com vista da cidade",
      "Biblioteca com coleção de arte japonesa"
    ]
  },
  'four-seasons-safari': {
    name: "Four Seasons Safari Lodge",
    location: "Serengeti, Tanzânia",
    category: "Safari Lodge",
    price: "€1.200/noite",
    rating: 9.9,
    officialWebsite: "https://www.fourseasons.com/serengeti",
    images: [
      "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg",
      "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg",
      "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg"
    ],
    description: "Safari de luxo na savana africana",
    fullDescription: "Situado no coração do Serengeti, este lodge oferece uma experiência de safari incomparável, combinando aventura selvagem com luxo refinado. Cada suite oferece vistas panorâmicas da savana infinita.",
    history: "Inaugurado em 2012, o Four Seasons Safari Lodge Serengeti foi pioneiro no conceito de safari de ultra-luxo na Tanzânia. Construído em harmonia com o ambiente natural, o lodge tornou-se rapidamente um dos destinos de safari mais exclusivos do mundo.",
    whyChoose: [
      "Localização privilegiada no Serengeti Central",
      "Vistas diretas da Grande Migração",
      "Suites com piscinas privadas",
      "Guias especializados em vida selvagem",
      "Experiências de safari personalizadas",
      "Spa com tratamentos inspirados na África"
    ],
    amenities: [
      { icon: <Car className="h-5 w-5" />, name: "Safaris em veículos 4x4" },
      { icon: <Utensils className="h-5 w-5" />, name: "Restaurante gourmet" },
      { icon: <Dumbbell className="h-5 w-5" />, name: "Spa & Wellness" },
      { icon: <Users className="h-5 w-5" />, name: "Guias especializados" },
      { icon: <Phone className="h-5 w-5" />, name: "Serviço personalizado" },
      { icon: <Globe className="h-5 w-5" />, name: "Experiências culturais" }
    ],
    rooms: [
      {
        type: "Savannah Suite",
        size: "100m²",
        features: "Vista da savana • Terraço privado",
        price: "€1.200/noite"
      },
      {
        type: "Presidential Suite",
        size: "200m²",
        features: "Piscina privada • Butler dedicado",
        price: "€3.500/noite"
      }
    ],
    highlights: [
      "Frente à rota da Grande Migração",
      "Arquitetura inspirada na cultura Maasai",
      "Piscina infinita com vista da savana",
      "Experiências de safari noturno",
      "Centro de conservação da vida selvagem"
    ]
  },
  'hotel-du-cap': {
    name: "Hotel du Cap-Eden-Roc",
    location: "Antibes, França",
    category: "Palace Hotel",
    price: "€1.500/noite",
    rating: 9.7,
    officialWebsite: "https://www.hotel-du-cap-eden-roc.com",
    images: [
      "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
      "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg",
      "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg"
    ],
    description: "Elegância francesa na Riviera",
    fullDescription: "Ícone da Riviera Francesa desde 1870, o Hotel du Cap-Eden-Roc é sinónimo de elegância atemporal e luxo discreto. Situado numa península privada em Antibes, oferece vistas deslumbrantes do Mediterrâneo.",
    history: "Fundado em 1870, o Hotel du Cap-Eden-Roc tem uma história rica ligada à aristocracia europeia e às estrelas de Hollywood. Durante décadas, foi o refúgio preferido de escritores como F. Scott Fitzgerald e celebridades como Marlene Dietrich.",
    whyChoose: [
      "História e tradição centenária",
      "Localização única na península de Cap d'Antibes",
      "Jardins botânicos de 22 hectares",
      "Piscina esculpida na rocha vulcânica",
      "Restaurante com estrela Michelin",
      "Proximidade ao Festival de Cannes"
    ],
    amenities: [
      { icon: <Utensils className="h-5 w-5" />, name: "Restaurante Eden-Roc" },
      { icon: <Dumbbell className="h-5 w-5" />, name: "Spa Sisley" },
      { icon: <Car className="h-5 w-5" />, name: "Serviço de yacht" },
      { icon: <Users className="h-5 w-5" />, name: "Concierge Les Clefs d'Or" },
      { icon: <Phone className="h-5 w-5" />, name: "Serviço de praia privada" },
      { icon: <Globe className="h-5 w-5" />, name: "Heliporto privado" }
    ],
    rooms: [
      {
        type: "Superior Room",
        size: "35m²",
        features: "Vista do jardim • Terraço privado",
        price: "€1.500/noite"
      },
      {
        type: "Suite Eden-Roc",
        size: "80m²",
        features: "Vista do mar • Sala de estar",
        price: "€4.000/noite"
      }
    ],
    highlights: [
      "Piscina infinity esculpida na rocha",
      "22 hectares de jardins mediterrânicos",
      "Praia privada com serviço completo",
      "Coleção de arte contemporânea",
      "Tradição de hospitalidade francesa"
    ]
  }
};

export default function HotelDetail({ hotelId, onBack }: HotelDetailProps) {
  const hotel = hotels[hotelId as keyof typeof hotels];

  if (!hotel) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-light mb-4 text-stone-800">Hotel não encontrado</h2>
          <button 
            onClick={onBack}
            className="text-stone-600 hover:text-stone-800 transition-colors"
          >
            Voltar aos alojamentos
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="container mx-auto px-6 py-8">
        <button 
          onClick={onBack}
          className="flex items-center text-stone-600 hover:text-stone-800 transition-colors mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Voltar aos Alojamentos
        </button>

        {/* Hero Section */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
            <div className="space-y-4">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={hotel.images[0]} 
                  alt={hotel.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {hotel.images.slice(1).map((image, index) => (
                  <div key={index} className="aspect-video rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src={image} 
                      alt={`${hotel.name} ${index + 2}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="inline-block bg-stone-200 text-stone-800 px-3 py-1 rounded-full text-sm font-light mb-4">
                  {hotel.category}
                </div>
                <h1 className="text-4xl font-light mb-2 text-stone-800">{hotel.name}</h1>
                <div className="flex items-center text-stone-600 mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  {hotel.location}
                </div>
                <p className="text-xl text-stone-600 font-light mb-6 leading-relaxed">{hotel.fullDescription}</p>
                <div className="flex items-center justify-between mb-6">
                  <p className="text-3xl font-light text-stone-800">{hotel.price}</p>
                  <div className="flex items-center">
                    <Star className="h-6 w-6 text-stone-600 mr-2 fill-current" />
                    <span className="text-2xl font-light text-stone-800">{hotel.rating}/10</span>
                  </div>
                </div>
                
                {/* Official Website Link */}
                <a 
                  href={hotel.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center border border-stone-800 hover:bg-stone-800 hover:text-white px-6 py-3 text-sm font-light transition-all duration-300"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Visitar Website Oficial
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* História */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-light mb-6 text-stone-800">História & Tradição</h2>
              <p className="text-stone-700 leading-relaxed">{hotel.history}</p>
            </div>

            {/* Porque Escolher */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-light mb-6 text-stone-800">Porque Escolher</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {hotel.whyChoose.map((reason, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-stone-50 rounded-lg">
                    <Award className="h-4 w-4 text-stone-600 flex-shrink-0" />
                    <span className="text-stone-700 font-light">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Comodidades */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-light mb-6 text-stone-800">Comodidades Exclusivas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {hotel.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-stone-50 rounded-lg">
                    <div className="text-stone-600">{amenity.icon}</div>
                    <span className="text-stone-700 font-light">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Destaques */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-light mb-6 text-stone-800">Destaques Únicos</h2>
              <ul className="space-y-3">
                {hotel.highlights.map((highlight, index) => (
                  <li key={index} className="text-stone-700 font-light flex items-start">
                    <span className="text-stone-400 mr-3 mt-1">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Tipos de Quarto */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-light mb-4 text-stone-800">Tipos de Alojamento</h3>
              <div className="space-y-4">
                {hotel.rooms.map((room, index) => (
                  <div key={index} className="border border-stone-200 rounded-lg p-4">
                    <h4 className="font-light text-stone-800 mb-2">{room.type}</h4>
                    <p className="text-stone-600 text-sm mb-2">{room.size} • {room.features}</p>
                    <p className="text-stone-800 font-light">{room.price}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Informações de Reserva */}
            <div className="bg-stone-100 rounded-2xl p-6">
              <h3 className="text-xl font-light mb-4 text-stone-800">Reserva Exclusiva</h3>
              <p className="text-stone-600 text-sm mb-4 leading-relaxed font-light">
                Disponível apenas para membros L'argent através da nossa rede de parceiros especializados.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-stone-500">Disponibilidade</span>
                  <span className="text-stone-800 font-light">Sob consulta</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-stone-500">Check-in</span>
                  <span className="text-stone-800 font-light">15:00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-stone-500">Check-out</span>
                  <span className="text-stone-800 font-light">12:00</span>
                </div>
              </div>
              <button className="w-full border border-stone-800 hover:bg-stone-800 hover:text-white px-4 py-3 text-sm font-light transition-all duration-300 mb-3">
                Entrar no Clube
              </button>
              <p className="text-xs text-stone-500 text-center font-light">
                Consultoria especializada • Tarifas preferenciais
              </p>
            </div>

            {/* Rating Detalhado */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-light mb-4 text-stone-800">Avaliação L'argent</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-stone-600 font-light">Serviço</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-stone-600 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-600 font-light">Localização</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-stone-600 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-600 font-light">Gastronomia</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-stone-600 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-600 font-light">Exclusividade</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-stone-600 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}