
import { Cake, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contato" className="bg-gray-900 text-white py-16 px-4">
      <div className="container mx-auto">
        {/* Main footer content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
                <Cake className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">DoceGestão</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              A plataforma completa para confeiteiros que querem profissionalizar e fazer crescer seu negócio.
            </p>
            
            {/* Social media */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Produto</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Funcionalidades</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Planos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Demonstração</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Integrações</a></li>
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Empresa</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Carreiras</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Imprensa</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Parceiros</a></li>
            </ul>
          </div>

          {/* Support links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Suporte</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">WhatsApp</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Treinamentos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Status do Sistema</a></li>
            </ul>
          </div>
        </div>

        {/* Security and payment badges */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                <span className="text-xs font-bold">SSL</span>
              </div>
              <span className="text-sm text-gray-400">Certificado SSL</span>
            </div>
            
            <div className="text-gray-400 text-sm">|</div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-xs font-bold text-white">VISA</span>
              </div>
              <div className="w-12 h-8 bg-red-600 rounded flex items-center justify-center">
                <span className="text-xs font-bold text-white">MASTER</span>
              </div>
              <div className="w-12 h-8 bg-gray-600 rounded flex items-center justify-center">
                <span className="text-xs font-bold text-white">PIX</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap justify-center md:justify-start space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                LGPD
              </a>
            </div>
            
            <p className="text-gray-400 text-sm text-center md:text-right">
              © 2024 DoceGestão. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
