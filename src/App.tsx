import React, { useState, useEffect } from 'react';
import {
  Crown,
  ChevronRight,
  Calendar,
  Users,
  Star,
  ArrowRight,
  Menu,
  X,
  Code,
  Palette,
  Zap,
  Shield,
  Smartphone,
  Globe,
  Languages,
  Mail
} from 'lucide-react';
import { translations, type Language } from './translations';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMembershipModal, setShowMembershipModal] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState<'about' | 'consultoria' | 'privacy' | 'terms' | 'contact' | null>(null);
  const [language, setLanguage] = useState<Language>('pt');

  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pt' ? 'en' : 'pt');
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabClick = (tab: 'about' | 'consultoria' | 'privacy' | 'terms' | 'contact') => {
    setActiveTab(tab);
  };

  const handleBackToHome = () => {
    setActiveTab(null);
  };

  const handleJoinClub = () => {
    setShowMembershipModal(true);
  };

  const closeMembershipModal = () => {
    setShowMembershipModal(false);
  };


  if (activeTab === 'about') {
    return (
      <div className="min-h-screen bg-stone-50">
        <div className="container mx-auto px-6 py-16">
          <div className="flex justify-between items-center mb-12">
            <button
              onClick={handleBackToHome}
              className="flex items-center text-stone-600 hover:text-stone-900 transition-colors"
            >
              <ChevronRight className="h-5 w-5 mr-2 rotate-180" />
              {t.about.backToHome}
            </button>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors px-3 py-2 border border-stone-300 rounded-lg"
            >
              <Languages className="h-4 w-4" />
              <span className="text-sm font-light">{language === 'pt' ? 'EN' : 'PT'}</span>
            </button>
          </div>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extralight mb-16 text-stone-900 text-center" style={{fontFamily: 'Playfair Display, serif'}}>
              {t.about.title}
            </h1>

            <div className="space-y-8 text-stone-700 leading-relaxed">
              <p className="text-lg font-light">
                {t.about.paragraph1}
              </p>

              <p className="text-lg font-light">
                {t.about.paragraph2}
              </p>

              <p className="text-lg font-light">
                {t.about.paragraph3}
              </p>
            </div>

            <div className="flex justify-center mt-16">
              <img src="/L (2)-modified.png" alt="L'ARGENT Logo" className="w-20 h-20 object-contain" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (activeTab === 'consultoria') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100">
        <div className="container mx-auto px-6 py-8">
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={handleBackToHome}
              className="flex items-center text-stone-700 hover:text-stone-900 transition-colors"
            >
              <ChevronRight className="h-5 w-5 mr-2 rotate-180" />
              {t.consultoria.backToHome}
            </button>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-stone-700 hover:text-stone-900 transition-colors px-3 py-2 border border-stone-300 rounded-lg"
            >
              <Languages className="h-4 w-4" />
              <span className="text-sm font-light">{language === 'pt' ? 'EN' : 'PT'}</span>
            </button>
          </div>

          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extralight mb-6 text-stone-800" style={{fontFamily: 'Playfair Display, serif'}}>
              {t.consultoria.title} <span className="text-stone-900">{t.consultoria.titleHighlight}</span>
            </h1>
            <p className="text-lg text-stone-600 font-light max-w-4xl mx-auto leading-relaxed">
              {t.consultoria.description}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-stone-100 to-stone-50 rounded-3xl p-12 text-center border border-stone-200">
              <button
                onClick={() => {
                  setActiveTab(null);
                  setTimeout(() => {
                    const membershipSection = document.getElementById('membership');
                    if (membershipSection) {
                      membershipSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }}
                className="bg-gradient-to-r from-[#1a237e] to-[#0d1642] hover:from-[#0d1642] hover:to-black text-white px-12 py-4 rounded-full text-lg font-medium transition-all duration-300"
              >
                {t.consultoria.membershipButton}
              </button>
              <p className="text-sm text-stone-500 mt-4">
                {t.consultoria.membershipAccess}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (activeTab === 'privacy') {
    return (
      <div className="min-h-screen bg-stone-50">
        <div className="container mx-auto px-6 py-16">
          <div className="flex justify-between items-center mb-12">
            <button
              onClick={handleBackToHome}
              className="flex items-center text-stone-600 hover:text-stone-900 transition-colors"
            >
              <ChevronRight className="h-5 w-5 mr-2 rotate-180" />
              {t.privacy.backToHome}
            </button>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors px-3 py-2 border border-stone-300 rounded-lg"
            >
              <Languages className="h-4 w-4" />
              <span className="text-sm font-light">{language === 'pt' ? 'EN' : 'PT'}</span>
            </button>
          </div>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extralight mb-6 text-stone-900 text-center" style={{fontFamily: 'Playfair Display, serif'}}>
              {t.privacy.title}
            </h1>
            <p className="text-sm text-stone-500 text-center mb-12">{t.privacy.lastUpdate}</p>

            <div className="space-y-8 text-stone-700 leading-relaxed">
              <p className="text-lg font-light">
                {t.privacy.intro}
              </p>

              <div>
                <h2 className="text-2xl font-light mb-4 text-stone-900">{t.privacy.section1.title}</h2>
                <p className="font-light">{t.privacy.section1.content}</p>
              </div>

              <div>
                <h2 className="text-2xl font-light mb-4 text-stone-900">{t.privacy.section2.title}</h2>
                <p className="font-light">{t.privacy.section2.content}</p>
              </div>

              <div>
                <h2 className="text-2xl font-light mb-4 text-stone-900">{t.privacy.section3.title}</h2>
                <p className="font-light">{t.privacy.section3.content}</p>
              </div>

              <div>
                <h2 className="text-2xl font-light mb-4 text-stone-900">{t.privacy.section4.title}</h2>
                <p className="font-light">{t.privacy.section4.content}</p>
              </div>

              <div>
                <h2 className="text-2xl font-light mb-4 text-stone-900">{t.privacy.section5.title}</h2>
                <p className="font-light">{t.privacy.section5.content}</p>
              </div>

              <div>
                <h2 className="text-2xl font-light mb-4 text-stone-900">{t.privacy.section6.title}</h2>
                <p className="font-light">{t.privacy.section6.content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (activeTab === 'terms') {
    return (
      <div className="min-h-screen bg-stone-50">
        <div className="container mx-auto px-6 py-16">
          <div className="flex justify-between items-center mb-12">
            <button
              onClick={handleBackToHome}
              className="flex items-center text-stone-600 hover:text-stone-900 transition-colors"
            >
              <ChevronRight className="h-5 w-5 mr-2 rotate-180" />
              {t.terms.backToHome}
            </button>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors px-3 py-2 border border-stone-300 rounded-lg"
            >
              <Languages className="h-4 w-4" />
              <span className="text-sm font-light">{language === 'pt' ? 'EN' : 'PT'}</span>
            </button>
          </div>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extralight mb-6 text-stone-900 text-center" style={{fontFamily: 'Playfair Display, serif'}}>
              {t.terms.title}
            </h1>
            <p className="text-sm text-stone-500 text-center mb-12">{t.terms.lastUpdate}</p>

            <div className="space-y-8 text-stone-700 leading-relaxed">
              <p className="text-lg font-light">
                {t.terms.intro}
              </p>

              <div>
                <h2 className="text-2xl font-light mb-4 text-stone-900">{t.terms.section1.title}</h2>
                <p className="font-light">{t.terms.section1.content}</p>
              </div>

              <div>
                <h2 className="text-2xl font-light mb-4 text-stone-900">{t.terms.section2.title}</h2>
                <p className="font-light">{t.terms.section2.content}</p>
              </div>

              <div>
                <h2 className="text-2xl font-light mb-4 text-stone-900">{t.terms.section3.title}</h2>
                <p className="font-light">{t.terms.section3.content}</p>
              </div>

              <div>
                <h2 className="text-2xl font-light mb-4 text-stone-900">{t.terms.section4.title}</h2>
                <p className="font-light">{t.terms.section4.content}</p>
              </div>

              <div>
                <h2 className="text-2xl font-light mb-4 text-stone-900">{t.terms.section5.title}</h2>
                <p className="font-light">{t.terms.section5.content}</p>
              </div>

              <div>
                <h2 className="text-2xl font-light mb-4 text-stone-900">{t.terms.section6.title}</h2>
                <p className="font-light">{t.terms.section6.content}</p>
              </div>

              <div>
                <h2 className="text-2xl font-light mb-4 text-stone-900">{t.terms.section7.title}</h2>
                <p className="font-light">{t.terms.section7.content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (activeTab === 'contact') {
    return (
      <div className="min-h-screen bg-stone-50">
        <div className="container mx-auto px-6 py-16">
          <div className="flex justify-between items-center mb-12">
            <button
              onClick={handleBackToHome}
              className="flex items-center text-stone-600 hover:text-stone-900 transition-colors"
            >
              <ChevronRight className="h-5 w-5 mr-2 rotate-180" />
              {t.contact.backToHome}
            </button>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors px-3 py-2 border border-stone-300 rounded-lg"
            >
              <Languages className="h-4 w-4" />
              <span className="text-sm font-light">{language === 'pt' ? 'EN' : 'PT'}</span>
            </button>
          </div>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extralight mb-16 text-stone-900 text-center" style={{fontFamily: 'Playfair Display, serif'}}>
              {t.contact.title}
            </h1>

            <div className="bg-white border border-stone-200 p-12 text-center">
              <div className="flex justify-center mb-8">
                <img src="/L (2)-modified.png" alt="L'ARGENT Logo" className="w-24 h-24 object-contain" />
              </div>

              <p className="text-stone-600 font-light mb-8 leading-relaxed">
                {t.contact.description}
              </p>

              <div className="mb-8">
                <p className="text-sm text-stone-500 mb-2 uppercase tracking-wider">{t.contact.emailLabel}</p>
                <a
                  href="mailto:largentagency@gmail.com"
                  className="text-2xl font-light text-[#1a237e] hover:text-[#0d1642] transition-colors"
                >
                  largentagency@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-500 ${
        scrollY > 50 ? 'bg-stone-50/95 backdrop-blur-md border-b border-stone-200' : 'bg-transparent'
      }`}>
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="text-2xl font-light tracking-wider text-stone-900">L'ARGENT</div>
          </div>

          <div className="hidden md:flex items-center justify-center space-x-8 flex-1">
            <button onClick={() => handleTabClick('about')} className="text-sm font-light hover:text-stone-600 transition-colors duration-300">{t.nav.about}</button>
            <button onClick={() => handleTabClick('consultoria')} className="text-sm font-light hover:text-stone-600 transition-colors duration-300">{t.nav.consultoria}</button>
            <a href="#membership" className="text-sm font-light hover:text-stone-600 transition-colors duration-300">{t.nav.membership}</a>
            <button onClick={() => handleTabClick('contact')} className="text-sm font-light hover:text-stone-600 transition-colors duration-300">{t.nav.contact}</button>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors px-3 py-2 border border-stone-300 rounded-lg"
            >
              <Languages className="h-4 w-4" />
              <span className="text-sm font-light">{language === 'pt' ? 'EN' : 'PT'}</span>
            </button>
            <button
              onClick={handleJoinClub}
              className="border border-stone-900 hover:bg-stone-900 hover:text-stone-50 px-6 py-2 text-sm font-light transition-all duration-300"
            >
              {t.nav.membership}
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden bg-stone-50/95 backdrop-blur-md border-t border-stone-200">
            <div className="container mx-auto px-6 py-4 space-y-4">
              <button onClick={() => handleTabClick('about')} className="block text-sm font-light hover:text-stone-600">{t.nav.about}</button>
              <button onClick={() => handleTabClick('consultoria')} className="block text-sm font-light hover:text-stone-600">{t.nav.consultoria}</button>
              <a href="#membership" className="block text-sm font-light hover:text-stone-600">{t.nav.membership}</a>
              <button onClick={() => handleTabClick('contact')} className="block text-sm font-light hover:text-stone-600">{t.nav.contact}</button>
              <button
                onClick={handleJoinClub}
                className="block text-sm font-light hover:text-stone-600"
              >
                {t.nav.membership}
              </button>
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors"
              >
                <Languages className="h-4 w-4" />
                <span className="text-sm font-light">{language === 'pt' ? 'EN' : 'PT'}</span>
              </button>
            </div>
          </div>
        )}
      </header>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center w-full px-6">
          <div className="animate-fade-in flex flex-col items-center">
            <img src="/L (2)-modified.png" alt="L'ARGENT Logo" className="w-24 h-24 md:w-32 md:h-32 object-contain mb-8" />
            <h1 className="text-xl md:text-2xl lg:text-3xl font-extralight tracking-[0.25em] text-stone-900" style={{fontFamily: 'Playfair Display, serif'}}>
              {t.hero.title}
            </h1>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-stone-900" style={{fontFamily: 'Playfair Display, serif'}}>
              {t.services.title}
            </h2>
            <p className="text-xl text-stone-600 font-light max-w-3xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative bg-white border border-stone-200 p-8 hover:shadow-lg transition-all duration-500">
              <Code className="h-12 w-12 text-[#1a237e] mb-4" />
              <h3 className="text-2xl font-light mb-2 text-stone-900">{t.services.webDev.title}</h3>
              <p className="text-stone-600 text-sm mb-4">{t.services.webDev.description}</p>
            </div>

            <div className="group relative bg-white border border-stone-200 p-8 hover:shadow-lg transition-all duration-500">
              <Palette className="h-12 w-12 text-[#1a237e] mb-4" />
              <h3 className="text-2xl font-light mb-2 text-stone-900">{t.services.design.title}</h3>
              <p className="text-stone-600 text-sm mb-4">{t.services.design.description}</p>
            </div>

            <div className="group relative bg-white border border-stone-200 p-8 hover:shadow-lg transition-all duration-500">
              <Shield className="h-12 w-12 text-[#1a237e] mb-4" />
              <h3 className="text-2xl font-light mb-2 text-stone-900">{t.services.maintenance.title}</h3>
              <p className="text-stone-600 text-sm mb-4">{t.services.maintenance.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="membership" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="text-3xl font-light tracking-wider text-stone-900 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>L'ARGENT</div>
              <h2 className="text-4xl md:text-5xl font-light mb-6 text-stone-900" style={{fontFamily: 'Playfair Display, serif'}}>
                {t.membership.title}
              </h2>
              <p className="text-xl text-stone-600 font-light leading-relaxed">
                {t.membership.description}
              </p>
            </div>

            <div className="bg-white border border-stone-200 p-8 md:p-12 mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    icon: <Globe className="h-8 w-8" />,
                    title: t.membership.features.website.title,
                    description: t.membership.features.website.description
                  },
                  {
                    icon: <Shield className="h-8 w-8" />,
                    title: t.membership.features.maintenance.title,
                    description: t.membership.features.maintenance.description
                  },
                  {
                    icon: <Zap className="h-8 w-8" />,
                    title: t.membership.features.improvements.title,
                    description: t.membership.features.improvements.description
                  }
                ].map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="text-stone-900 mb-4 flex justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-light mb-3 text-stone-900">{feature.title}</h3>
                    <p className="text-stone-600 font-light">{feature.description}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <button
                  onClick={handleJoinClub}
                  className="border border-stone-900 hover:bg-stone-900 hover:text-stone-50 px-12 py-4 text-lg font-light transition-all duration-300"
                >
                  {t.membership.button}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="text-xl font-light tracking-wider text-stone-900">L'ARGENT</div>
            </div>
            
            <div className="flex space-x-8 text-sm text-stone-600">
              <button onClick={() => handleTabClick('privacy')} className="hover:text-stone-900 transition-colors">{t.footer.privacy}</button>
              <button onClick={() => handleTabClick('terms')} className="hover:text-stone-900 transition-colors">{t.footer.terms}</button>
              <button onClick={() => handleTabClick('contact')} className="hover:text-stone-900 transition-colors">{t.footer.contact}</button>
            </div>
          </div>

          <div className="border-t border-stone-200 mt-8 pt-8 text-center">
            <p className="text-stone-600 text-sm font-light">
              {t.footer.copyright}
            </p>
          </div>
        </div>
      </footer>

      {showMembershipModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative">
            <button
              onClick={closeMembershipModal}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-600 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="text-center">
              <div className="text-2xl font-light tracking-wider text-stone-900 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>L'ARGENT</div>
              <h2 className="text-3xl font-light mb-6 text-stone-900" style={{fontFamily: 'Playfair Display, serif'}}>{t.membership.modal.title}</h2>

              <div className="mb-8">
                <p className="text-stone-600 font-light leading-relaxed">
                  {t.membership.modal.description}
                </p>
              </div>

              <div className="space-y-3 mb-8 text-left">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-stone-900 rounded-full mr-3"></div>
                  <span className="text-stone-700 font-light">{t.membership.modal.feature1}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-stone-900 rounded-full mr-3"></div>
                  <span className="text-stone-700 font-light">{t.membership.modal.feature2}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-stone-900 rounded-full mr-3"></div>
                  <span className="text-stone-700 font-light">{t.membership.modal.feature3}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  closeMembershipModal();
                  handleTabClick('contact');
                }}
                className="w-full border border-stone-900 hover:bg-stone-900 hover:text-white px-8 py-4 text-lg font-light transition-all duration-300 mb-4"
              >
                {t.membership.modal.contactButton}
              </button>

              <p className="text-xs text-stone-500">
                {t.membership.modal.cancel}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;