
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Proprietária da Doce Encanto",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b05b?w=150&h=150&fit=crop&crop=face",
      content: "O DoceGestão revolucionou minha confeitaria! Consegui organizar todos os pedidos e o assistente de IA no WhatsApp me ajuda muito no atendimento. Minha receita aumentou 40% em 3 meses!",
      rating: 5
    },
    {
      name: "João Santos",
      role: "Chef Confeiteiro - Delícias da Vovó",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "Antes eu perdia pedidos por desorganização. Agora com o controle de estoque e relatórios financeiros, sei exatamente como está meu negócio. Recomendo para todos os confeiteiros!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Confeiteiros reais compartilhando como o DoceGestão transformou seus negócios
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden"
            >
              <CardContent className="p-8">
                <Quote className="w-12 h-12 text-pink-300 mb-6 group-hover:text-pink-400 transition-colors" />
                
                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star 
                      key={starIndex} 
                      className="w-5 h-5 text-yellow-400 fill-current" 
                    />
                  ))}
                </div>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover mr-4 border-3 border-pink-200"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">Confeiteiros de todo Brasil confiam no DoceGestão</p>
          <div className="flex justify-center items-center space-x-8 opacity-70">
            <div className="text-2xl font-bold text-gray-400">SSL</div>
            <div className="text-2xl font-bold text-gray-400">LGPD</div>
            <div className="text-2xl font-bold text-gray-400">ISO 27001</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
