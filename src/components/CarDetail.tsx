import React from 'react';
import { ArrowLeft, Calendar, Gauge, Zap, Settings, Award, TrendingUp } from 'lucide-react';

interface CarDetailProps {
  carId: string;
  onBack: () => void;
}

const cars = {
  'ferrari-sf90-stradale': {
    name: "Ferrari SF90 Stradale",
    category: "Supercar Híbrido",
    price: "€430.000",
    year: "2023",
    images: [
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg",
      "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg",
      "https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg"
    ],
    specs: {
      engine: "V8 4.0L Biturbo + 3 Motores Elétricos",
      power: "1000 cv",
      torque: "800 Nm",
      acceleration: "2.5 segundos (0-100 km/h)",
      topSpeed: "340 km/h",
      transmission: "8-speed DCT",
      drivetrain: "AWD",
      weight: "1570 kg"
    },
    description: "O primeiro híbrido plug-in da Ferrari representa o auge da engenharia italiana. Combina um motor V8 biturbo com três motores elétricos, produzindo 1000 cv de potência pura.",
    history: "Lançado em 2019, o SF90 Stradale marca uma nova era para a Ferrari, sendo o primeiro modelo de produção híbrido plug-in da marca. O nome homenageia os 90 anos da Scuderia Ferrari na Fórmula 1.",
    features: [
      "Modo elétrico puro até 25 km",
      "Sistema de tração integral eManettino",
      "Aerodinâmica ativa",
      "Suspensão adaptativa",
      "Cockpit inspirado na F1",
      "Tecnologia Side Slip Control 6.0"
    ],
    pros: [
      "Performance extraordinária",
      "Tecnologia híbrida avançada",
      "Design icónico Ferrari",
      "Handling excepcional"
    ],
    cons: [
      "Preço muito elevado",
      "Consumo em modo desportivo",
      "Manutenção dispendiosa",
      "Disponibilidade limitada"
    ]
  },
  'ferrari-250-gto': {
    name: "Ferrari 250 GTO 1962",
    category: "Clássico",
    price: "€48.4 milhões",
    year: "1962",
    images: [
      "https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg",
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
      "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg"
    ],
    specs: {
      engine: "V12 3.0L",
      power: "300 cv",
      torque: "333 Nm",
      acceleration: "6.1 segundos (0-100 km/h)",
      topSpeed: "280 km/h",
      transmission: "5-speed manual",
      drivetrain: "RWD",
      weight: "880 kg"
    },
    description: "Considerado o Santo Graal dos carros clássicos, apenas 36 unidades foram produzidas. É o carro mais valioso do mundo.",
    history: "Produzido entre 1962-1964, o 250 GTO foi desenvolvido para competição. Apenas 36 exemplares foram construídos, tornando-o extremamente raro e valioso.",
    features: [
      "Carroçaria em alumínio",
      "Chassis tubular",
      "Motor V12 Colombo",
      "Aerodinâmica otimizada",
      "Interior minimalista de corrida",
      "Histórico de competição único"
    ],
    pros: [
      "Valor de investimento incomparável",
      "História e proveniência únicas",
      "Design atemporal",
      "Raridade extrema"
    ],
    cons: [
      "Preço astronómico",
      "Manutenção especializada",
      "Disponibilidade quase nula",
      "Seguro muito caro"
    ]
  },
  'bugatti-chiron': {
    name: "Bugatti Chiron Super Sport",
    category: "Hypercar",
    price: "€3.2 milhões",
    year: "2023",
    images: [
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg",
      "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg",
      "https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg"
    ],
    specs: {
      engine: "W16 8.0L Quad-Turbo",
      power: "1600 cv",
      torque: "1600 Nm",
      acceleration: "2.4 segundos (0-100 km/h)",
      topSpeed: "440 km/h",
      transmission: "7-speed DSG",
      drivetrain: "AWD",
      weight: "1995 kg"
    },
    description: "O hypercar mais poderoso do mundo, com 1600 cv e velocidade máxima de 440 km/h. Representa o auge da engenharia automóvel.",
    history: "Sucessor do lendário Veyron, o Chiron foi lançado em 2016. A versão Super Sport é ainda mais extrema, focada na velocidade máxima.",
    features: [
      "Motor W16 quad-turbo único",
      "Carroçaria em fibra de carbono",
      "Aerodinâmica ativa",
      "Interior em couro premium",
      "Sistema de refrigeração avançado",
      "Tecnologia de tração integral"
    ],
    pros: [
      "Potência e velocidade incomparáveis",
      "Luxo e conforto extremos",
      "Exclusividade absoluta",
      "Engenharia revolucionária"
    ],
    cons: [
      "Preço inacessível",
      "Consumo elevadíssimo",
      "Manutenção complexa",
      "Lista de espera longa"
    ]
  },
  'tesla-model-s-plaid': {
    name: "Tesla Model S Plaid",
    category: "Tecnológico",
    price: "€140.000",
    year: "2023",
    images: [
      "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg",
      "https://images.pexels.com/photos/7144175/pexels-photo-7144175.jpeg",
      "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg"
    ],
    specs: {
      engine: "3 Motores Elétricos",
      power: "1020 cv",
      torque: "1420 Nm",
      acceleration: "2.1 segundos (0-100 km/h)",
      topSpeed: "322 km/h",
      transmission: "Single-speed",
      drivetrain: "AWD",
      weight: "2190 kg"
    },
    description: "O sedan elétrico mais rápido do mundo, com aceleração de 0-100 km/h em apenas 2.1 segundos. Tecnologia de ponta da Tesla.",
    history: "Lançado em 2021, o Model S Plaid representa o auge da tecnologia elétrica da Tesla, com três motores e bateria de nova geração.",
    features: [
      "Autopilot avançado",
      "Supercharging rápido",
      "Interior minimalista",
      "Ecrã táctil de 17 polegadas",
      "Over-the-air updates",
      "Modo Ludicrous+"
    ],
    pros: [
      "Aceleração impressionante",
      "Zero emissões",
      "Tecnologia avançada",
      "Custos operacionais baixos"
    ],
    cons: [
      "Autonomia limitada em viagens longas",
      "Rede de carregamento ainda em expansão",
      "Interior muito minimalista",
      "Qualidade de construção inconsistente"
    ]
  }
};

export default function CarDetail({ carId, onBack }: CarDetailProps) {
  const car = cars[carId as keyof typeof cars];

  if (!car) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-light mb-4 text-stone-800">Veículo não encontrado</h2>
          <button 
            onClick={onBack}
            className="text-amber-600 hover:text-amber-700 transition-colors"
          >
            Voltar aos veículos
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50">
      <div className="container mx-auto px-6 py-8">
        <button 
          onClick={onBack}
          className="flex items-center text-amber-600 hover:text-amber-700 transition-colors mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Voltar aos Veículos
        </button>

        {/* Hero Section */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
            <div className="space-y-4">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={car.images[0]} 
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {car.images.slice(1).map((image, index) => (
                  <div key={index} className="aspect-video rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src={image} 
                      alt={`${car.name} ${index + 2}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {car.category}
                </div>
                <h1 className="text-4xl font-light mb-2 text-stone-800">{car.name}</h1>
                <div className="flex items-center text-stone-600 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  {car.year}
                </div>
                <p className="text-xl text-stone-600 font-light mb-6 leading-relaxed">{car.description}</p>
                <div className="flex items-center justify-between">
                  <p className="text-3xl font-light text-amber-600">{car.price}</p>
                  <div className="flex items-center">
                    <Award className="h-6 w-6 text-amber-600 mr-2" />
                    <span className="text-2xl font-light text-stone-800">Premium</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-light mb-4 text-amber-600">Especificações Técnicas</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-stone-500">Motor</p>
                    <p className="text-stone-800 font-medium">{car.specs.engine}</p>
                  </div>
                  <div>
                    <p className="text-stone-500">Potência</p>
                    <p className="text-stone-800 font-medium">{car.specs.power}</p>
                  </div>
                  <div>
                    <p className="text-stone-500">Binário</p>
                    <p className="text-stone-800 font-medium">{car.specs.torque}</p>
                  </div>
                  <div>
                    <p className="text-stone-500">0-100 km/h</p>
                    <p className="text-stone-800 font-medium">{car.specs.acceleration}</p>
                  </div>
                  <div>
                    <p className="text-stone-500">Vel. Máxima</p>
                    <p className="text-stone-800 font-medium">{car.specs.topSpeed}</p>
                  </div>
                  <div>
                    <p className="text-stone-500">Transmissão</p>
                    <p className="text-stone-800 font-medium">{car.specs.transmission}</p>
                  </div>
                  <div>
                    <p className="text-stone-500">Tração</p>
                    <p className="text-stone-800 font-medium">{car.specs.drivetrain}</p>
                  </div>
                  <div>
                    <p className="text-stone-500">Peso</p>
                    <p className="text-stone-800 font-medium">{car.specs.weight}</p>
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
            {/* História */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-light mb-6 text-amber-600">História & Desenvolvimento</h2>
              <p className="text-stone-700 leading-relaxed">{car.history}</p>
            </div>

            {/* Características */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-light mb-6 text-amber-600">Características Principais</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {car.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-stone-50 rounded-lg">
                    <Settings className="h-4 w-4 text-amber-600 flex-shrink-0" />
                    <span className="text-stone-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Prós e Contras */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-light mb-6 text-amber-600">Análise Detalhada</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-green-600 mb-4 flex items-center">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Pontos Fortes
                  </h3>
                  <ul className="space-y-2">
                    {car.pros.map((pro, index) => (
                      <li key={index} className="text-stone-700 flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-red-600 mb-4 flex items-center">
                    <Gauge className="h-4 w-4 mr-2" />
                    Considerações
                  </h3>
                  <ul className="space-y-2">
                    {car.cons.map((con, index) => (
                      <li key={index} className="text-stone-700 flex items-start">
                        <span className="text-red-500 mr-2 mt-1">•</span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Preço e Disponibilidade */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-light mb-4 text-amber-600">Informações de Compra</h3>
              <div className="text-center mb-6">
                <div className="text-3xl font-light mb-2 text-stone-800">{car.price}</div>
                <p className="text-stone-500 text-sm">Preço base (sem opcionais)</p>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-stone-500">Disponibilidade</span>
                  <span className="text-stone-800">Sob consulta</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-stone-500">Entrega</span>
                  <span className="text-stone-800">6-12 meses</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-stone-500">Garantia</span>
                  <span className="text-stone-800">3 anos</span>
                </div>
              </div>
            </div>

            {/* Contacto */}
            <div className="bg-gradient-to-br from-amber-50 to-stone-50 rounded-2xl p-6 border border-amber-200">
              <h3 className="text-xl font-light mb-4 text-amber-700">Aquisição Exclusiva</h3>
              <p className="text-stone-600 text-sm mb-4 leading-relaxed">
                Disponível apenas para membros L'argent através da nossa rede de concessionários especializados.
              </p>
              <button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-4 py-3 rounded-full text-sm font-medium transition-all duration-300 mb-3">
                Entrar no Clube
              </button>
              <p className="text-xs text-stone-500 text-center">
                Consultoria especializada • Financiamento premium
              </p>
            </div>

            {/* Performance */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-light mb-4 text-amber-600">Performance</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-stone-600 text-sm">Potência</span>
                  <span className="font-medium text-stone-800">{car.specs.power}</span>
                </div>
                <div className="w-full bg-stone-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-amber-500 to-amber-600 h-2 rounded-full" style={{width: '95%'}}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-stone-600 text-sm">Aceleração</span>
                  <span className="font-medium text-stone-800">{car.specs.acceleration}</span>
                </div>
                <div className="w-full bg-stone-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-amber-500 to-amber-600 h-2 rounded-full" style={{width: '90%'}}></div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-stone-600 text-sm">Vel. Máxima</span>
                  <span className="font-medium text-stone-800">{car.specs.topSpeed}</span>
                </div>
                <div className="w-full bg-stone-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-amber-500 to-amber-600 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}