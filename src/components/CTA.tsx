
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-white rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Experimente agora o DoceGestão e leve sua confeitaria para o próximo nível!
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
            Junte-se a mais de 500 confeiteiros que já transformaram seus negócios
          </p>

          {/* Benefits list */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="flex items-center justify-center md:justify-start">
              <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0" />
              <span className="font-semibold">7 dias grátis</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0" />
              <span className="font-semibold">Sem cartão de crédito</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0" />
              <span className="font-semibold">Suporte especializado</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-pink-600 hover:bg-gray-100 font-bold px-12 py-4 rounded-full text-xl shadow-2xl hover:shadow-white/25 transition-all duration-300 group"
            >
              Testar Grátis Agora
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              className="bg-white text-pink-600 hover:bg-gray-100 font-bold px-12 py-4 rounded-full text-xl shadow-2xl hover:shadow-white/25 transition-all duration-300 group"
            >
              Falar com Consultor
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <p className="text-sm opacity-80 mt-8">
            * Não é necessário cartão de crédito. Cancele quando quiser.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
