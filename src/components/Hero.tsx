
import { Button } from '@/components/ui/button';
import { ArrowRight, Smartphone, Laptop, MessageCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 px-4 gradient-doce min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              A plataforma completa para sua 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                {" "}confeitaria crescer!
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Controle pedidos, organize finanças e tenha um assistente de IA no WhatsApp — tudo em um só lugar.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold px-8 py-4 rounded-full text-lg shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 group"
              >
                Teste Grátis Agora
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold px-8 py-4 rounded-full text-lg shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 group"
              >
                Ver Demonstração
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Features badges */}
            <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">
              <div className="flex items-center bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm font-medium">Teste grátis 7 dias</span>
              </div>
              <div className="flex items-center bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm font-medium">Sem cartão de crédito</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative z-10 float-animation">
              {/* Laptop mockup */}
              <div className="bg-white rounded-2xl shadow-2xl p-4 mb-8 mx-auto max-w-lg">
                <div className="bg-gradient-to-br from-doce-pink to-doce-blue rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-white/50 rounded w-3/4"></div>
                    <div className="h-4 bg-white/50 rounded w-1/2"></div>
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      <div className="h-16 bg-white/30 rounded"></div>
                      <div className="h-16 bg-white/30 rounded"></div>
                      <div className="h-16 bg-white/30 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile mockup */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-3 w-32">
                <div className="bg-gradient-to-br from-doce-blue to-doce-purple rounded-xl p-3">
                  <Smartphone className="w-6 h-6 text-white mb-2" />
                  <div className="space-y-1">
                    <div className="h-2 bg-white/50 rounded w-full"></div>
                    <div className="h-2 bg-white/50 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp floating icon */}
            <div className="absolute top-8 -left-8 bg-green-500 rounded-full p-3 shadow-lg animate-bounce-gentle">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>

            {/* Background elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-doce-pink rounded-full opacity-50 blur-xl"></div>
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-doce-blue rounded-full opacity-50 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
