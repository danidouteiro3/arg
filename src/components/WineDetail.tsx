import React from 'react';
import { ArrowLeft, Wine, Calendar, MapPin, Award, TrendingUp, Star } from 'lucide-react';
import Utensils from './Utensils';

interface WineDetailProps {
  wineId: string;
  onBack: () => void;
}

const wines = {
  'romanee-conti-1990': {
    name: "Romanée-Conti 1990",
    region: "Burgundy, France",
    description: "The Holy Grail of French wines",
    price: "$25,000 per bottle",
    vintage: "1990",
    rating: 100,
    images: [
      "https://images.pexels.com/photos/1123260/pexels-photo-1123260.jpeg",
      "https://images.pexels.com/photos/434311/pexels-photo-434311.jpeg",
      "https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg"
    ],
    details: {
      grape: "Pinot Noir",
      alcohol: "13.5%",
      production: "3,500 bottles",
      aging: "18 months in French oak",
      bestServed: "16-18°C",
      decanting: "2-3 hours recommended"
    },
    tastingNotes: {
      appearance: "Deep ruby with garnet reflections, indicating perfect maturity",
      nose: "Complex bouquet with notes of black cherry, violet, oriental spices, truffle and wet earth",
      palate: "Silky entry, refined tannins, vibrant acidity. Flavors of ripe red fruits, wild mushrooms and unique minerality",
      finish: "Extraordinarily long finish, with layers that reveal themselves for minutes"
    },
    review: {
      score: 100,
      critic: "Robert Parker",
      text: "This Romanée-Conti 1990 represents the pinnacle of world winemaking. It's a transcendental experience that completely justifies its legendary reputation. The aromatic complexity is incomparable, and each sip reveals new nuances. A wine that defines what oenological perfection means.",
      investment: "Average appreciation of 15% per year over the last 10 years",
      rarity: "Extremely rare - only 3,500 bottles produced"
    },
    history: "Domaine de la Romanée-Conti is considered the world's most prestigious vineyard. The 1990 vintage was particularly exceptional due to ideal climatic conditions. This vineyard of only 1.8 hectares produces some of the most expensive and coveted wines on the planet.",
    foodPairing: [
      "Duck confit with cherries",
      "Lamb with Provence herbs", 
      "Aged French cheeses",
      "70% dark chocolate",
      "Truffled mushrooms"
    ],
    collectorsNotes: [
      "Store in climate-controlled cellar (12-14°C)",
      "Ideal humidity: 70-75%",
      "Horizontal position mandatory",
      "Avoid vibrations and direct light",
      "Aging potential: 20+ years"
    ]
  }
};

export default function WineDetail({ wineId, onBack }: WineDetailProps) {
  const wine = wines[wineId as keyof typeof wines];

  if (!wine) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-light mb-4">Wine not found</h2>
          <button 
            onClick={onBack}
            className="text-amber-400 hover:text-amber-300 transition-colors"
          >
            Back to recommendations
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-8">
        <button 
          onClick={onBack}
          className="flex items-center text-amber-400 hover:text-amber-300 transition-colors mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Recommendations
        </button>

        {/* Hero Section */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img 
                  src={wine.images[0]} 
                  alt={wine.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {wine.images.slice(1).map((image, index) => (
                  <div key={index} className="aspect-square rounded-xl overflow-hidden">
                    <img 
                      src={image} 
                      alt={`${wine.name} ${index + 2}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-light mb-2">{wine.name}</h1>
                <div className="flex items-center text-gray-300 mb-2">
                  <MapPin className="h-4 w-4 mr-2" />
                  {wine.region}
                </div>
                <div className="flex items-center mb-4">
                  <Calendar className="h-4 w-4 mr-2 text-amber-400" />
                  <span className="text-amber-400">Vintage {wine.vintage}</span>
                </div>
                <p className="text-xl text-gray-300 font-light mb-6">{wine.description}</p>
                <div className="flex items-center justify-between">
                  <p className="text-3xl font-light text-amber-400">{wine.price}</p>
                  <div className="flex items-center">
                    <Award className="h-6 w-6 text-amber-400 mr-2" />
                    <span className="text-2xl font-light">{wine.rating}/100</span>
                  </div>
                </div>
              </div>

              <div className="bg-stone-900/30 rounded-2xl p-6">
                <h3 className="text-xl font-light mb-4 text-amber-400">Technical Details</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-400">Grape</p>
                    <p className="text-white">{wine.details.grape}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Alcohol</p>
                    <p className="text-white">{wine.details.alcohol}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Production</p>
                    <p className="text-white">{wine.details.production}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Aging</p>
                    <p className="text-white">{wine.details.aging}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Serve at</p>
                    <p className="text-white">{wine.details.bestServed}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Decanting</p>
                    <p className="text-white">{wine.details.decanting}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tasting Notes */}
            <div className="bg-stone-900/30 rounded-2xl p-8">
              <h2 className="text-2xl font-light mb-6 text-amber-400">Tasting Notes</h2>
              <div className="space-y-6">
                {Object.entries(wine.tastingNotes).map(([aspect, note]) => (
                  <div key={aspect}>
                    <h3 className="text-lg font-light mb-2 capitalize text-white">
                      {aspect === 'appearance' ? 'Appearance' : 
                       aspect === 'nose' ? 'Nose' :
                       aspect === 'palate' ? 'Palate' : 'Finish'}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{note}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* History */}
            <div className="bg-stone-900/30 rounded-2xl p-8">
              <h2 className="text-2xl font-light mb-6 text-amber-400">History & Terroir</h2>
              <p className="text-gray-300 leading-relaxed">{wine.history}</p>
            </div>

            {/* Food Pairing */}
            <div className="bg-stone-900/30 rounded-2xl p-8">
              <h2 className="text-2xl font-light mb-6 text-amber-400">Food Pairing</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {wine.foodPairing.map((food, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-stone-800/30 rounded-lg">
                    <Utensils className="h-4 w-4 text-amber-400" />
                    <span className="text-gray-300">{food}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Critic Review */}
            <div className="bg-stone-900/30 rounded-2xl p-6">
              <h3 className="text-xl font-light mb-4 text-amber-400">Critical Review</h3>
              <div className="text-center mb-4">
                <div className="text-3xl font-light mb-2">{wine.review.score}/100</div>
                <p className="text-gray-400 text-sm">by {wine.review.critic}</p>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                "{wine.review.text}"
              </p>
            </div>

            {/* Investment Info */}
            <div className="bg-stone-900/30 rounded-2xl p-6">
              <h3 className="text-xl font-light mb-4 text-amber-400">Investment Potential</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <TrendingUp className="h-4 w-4 text-green-400 mr-2" />
                  <span className="text-gray-300 text-sm">{wine.review.investment}</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-amber-400 mr-2" />
                  <span className="text-gray-300 text-sm">{wine.review.rarity}</span>
                </div>
              </div>
            </div>

            {/* Collector's Notes */}
            <div className="bg-stone-900/30 rounded-2xl p-6">
              <h3 className="text-xl font-light mb-4 text-amber-400">Collector's Notes</h3>
              <ul className="space-y-2">
                {wine.collectorsNotes.map((note, index) => (
                  <li key={index} className="text-gray-300 text-sm flex items-start">
                    <span className="text-amber-400 mr-2">•</span>
                    {note}
                  </li>
                ))}
              </ul>
            </div>

            {/* Purchase CTA */}
            <div className="bg-gradient-to-br from-amber-500/10 to-stone-900/50 rounded-2xl p-6 border border-amber-500/20">
              <h3 className="text-xl font-light mb-4 text-amber-400">Exclusive Acquisition</h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                Available only to L'argent members through our network of specialized sommeliers.
              </p>
              <button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 px-4 py-3 rounded-full text-sm font-medium transition-all duration-300 mb-3">
                Check Availability
              </button>
              <p className="text-xs text-gray-400 text-center">
                Guaranteed authenticity • Professional storage
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}