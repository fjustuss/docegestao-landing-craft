
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Cake } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-doce-pink-dark shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
            <Cake className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-gray-800">DoceGestão</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('funcionalidades')}
            className="text-gray-700 hover:text-pink-500 font-medium transition-colors"
          >
            Funcionalidades
          </button>
          <button 
            onClick={() => scrollToSection('planos')}
            className="text-gray-700 hover:text-pink-500 font-medium transition-colors"
          >
            Planos
          </button>
          <button 
            onClick={() => scrollToSection('contato')}
            className="text-gray-700 hover:text-pink-500 font-medium transition-colors"
          >
            Contato
          </button>
        </nav>

        {/* CTA Button Desktop */}
        <div className="hidden md:block">
          <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
            Acessar Minha Conta
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
          <nav className="px-4 py-6 space-y-4">
            <button 
              onClick={() => scrollToSection('funcionalidades')}
              className="block w-full text-left text-gray-700 hover:text-pink-500 font-medium py-2"
            >
              Funcionalidades
            </button>
            <button 
              onClick={() => scrollToSection('planos')}
              className="block w-full text-left text-gray-700 hover:text-pink-500 font-medium py-2"
            >
              Planos
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="block w-full text-left text-gray-700 hover:text-pink-500 font-medium py-2"
            >
              Contato
            </button>
            <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-2 rounded-full mt-4">
              Acessar Minha Conta
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
