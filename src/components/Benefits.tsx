
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart, Package, PieChart, MessageCircle } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: ShoppingCart,
      title: "Gestão de Pedidos Simplificada",
      description: "Controle todos os seus pedidos em um só lugar, com status em tempo real e notificações automáticas para seus clientes.",
      gradient: "from-pink-400 to-pink-600"
    },
    {
      icon: Package,
      title: "Controle de Estoque Inteligente",
      description: "Monitore ingredientes, receba alertas de estoque baixo e nunca mais perca uma venda por falta de produto.",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      icon: PieChart,
      title: "Relatórios Financeiros Avançados",
      description: "Acompanhe suas vendas, despesas e lucros com relatórios detalhados e gráficos intuitivos.",
      gradient: "from-purple-400 to-purple-600"
    },
    {
      icon: MessageCircle,
      title: "Atendimento Automatizado com IA",
      description: "Assistente inteligente no WhatsApp para atender seus clientes 24h, tirar dúvidas e receber pedidos.",
      gradient: "from-green-400 to-green-600"
    }
  ];

  return (
    <section id="funcionalidades" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Tudo que sua confeitaria precisa
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recursos pensados especialmente para confeiteiros que querem profissionalizar e fazer crescer seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 hover:-translate-y-2"
            >
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 bg-gradient-to-r from-doce-pink to-doce-blue rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">500+</div>
              <p className="text-gray-700 font-medium">Confeitarias atendidas</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">50k+</div>
              <p className="text-gray-700 font-medium">Pedidos processados</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">98%</div>
              <p className="text-gray-700 font-medium">Satisfação dos clientes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
