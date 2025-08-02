
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Como funciona o assistente de IA no WhatsApp?",
      answer: "Nosso assistente inteligente se conecta ao seu WhatsApp Business e pode atender seus clientes 24h, responder perguntas sobre produtos, receber pedidos, consultar disponibilidade e até mesmo fazer o follow-up de pagamentos. Ele aprende com suas respostas e fica cada vez mais preciso."
    },
    {
      question: "Posso testar grátis antes de assinar?",
      answer: "Sim! Oferecemos 15 dias de teste grátis com acesso a todas as funcionalidades. Você não precisa inserir cartão de crédito e pode cancelar a qualquer momento. É tempo suficiente para você conhecer todos os recursos e ver como o DoceGestão pode transformar sua confeitaria."
    },
    {
      question: "É possível migrar de plano depois?",
      answer: "Claro! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As mudanças são aplicadas no próximo ciclo de cobrança e você sempre tem acesso aos recursos do plano atual até o final do período pago."
    },
    {
      question: "Preciso instalar algum programa no meu computador?",
      answer: "Não! O DoceGestão funciona 100% online através do navegador. Você pode acessar de qualquer computador, tablet ou celular com internet. Também temos apps nativos para iOS e Android para maior praticidade no dia a dia."
    }
  ];

  return (
    <section className="py-20 px-4 gradient-doce">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600">
            Tire suas dúvidas sobre o DoceGestão
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 rounded-xl px-6 bg-white/50"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-800 hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Ainda tem dúvidas?</p>
          <button className="text-pink-600 font-semibold hover:text-pink-700 transition-colors">
            Fale com nosso suporte →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
