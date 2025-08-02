import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Básica",
      price: "19,90",
      description: "Ideal para começar",
      features: [
        "Pedidos Ilimitados",
        "Controle de Estoque",
        "Relatório Simples",
        "Suporte por E-mail",
        "1 Usuário"
      ],
      popular: false,
      gradient: "from-blue-400 to-blue-600"
    },
    {
      name: "Ideal",
      price: "39,90",
      description: "Mais vendido",
      features: [
        "Tudo da Básica",
        "Financeiro Completo",
        "Gestão de Despesas",
        "Gestão de Receitas",
        "Relatórios Avançados",
        "3 Usuários"
      ],
      popular: true,
      gradient: "from-pink-400 to-pink-600"
    },
    {
      name: "Pro",
      price: "99,90",
      description: "Solução completa",
      features: [
        "Tudo da Ideal",
        "Assistente IA WhatsApp",
        "Atendimento 24h",
        "API de Integração",
        "Suporte Prioritário",
        "Usuários Ilimitados"
      ],
      popular: false,
      gradient: "from-purple-400 to-purple-600"
    }
  ];

  return (
    <section id="planos" className="py-20 px-4 gradient-doce">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Escolha o plano ideal para você
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comece grátis por 7 dias e experimente todos os recursos. Cancele quando quiser.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl border-2 ${
                plan.popular 
                  ? 'border-pink-300 scale-105 lg:scale-110' 
                  : 'border-gray-200 hover:border-pink-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-center py-2 font-semibold flex items-center justify-center">
                  <Star className="w-4 h-4 mr-1" />
                  Mais Vendido
                </div>
              )}
              
              <CardHeader className={`text-center ${plan.popular ? 'pt-16' : 'pt-8'} pb-8`}>
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${plan.gradient} rounded-2xl flex items-center justify-center`}>
                  <span className="text-2xl font-bold text-white">
                    {plan.name.charAt(0)}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {plan.name}
                </h3>
                
                <p className="text-gray-600 mb-4">{plan.description}</p>
                
                <div className="text-center">
                  <span className="text-5xl font-bold text-gray-800">
                    R${plan.price}
                  </span>
                  <span className="text-gray-600 text-lg">/mês</span>
                </div>
              </CardHeader>
              
              <CardContent className="px-8 pb-8">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full py-3 rounded-full font-semibold text-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white shadow-lg hover:shadow-xl'
                      : 'border-2 border-gray-300 text-gray-700 bg-white hover:bg-gray-50 hover:border-pink-300'
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  Assinar Agora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Money back guarantee */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
            <span className="font-medium text-gray-700">Garantia de 30 dias ou seu dinheiro de volta</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
