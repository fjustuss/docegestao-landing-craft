
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Cake, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';

// Dados reais do seu Supabase
const supabase = createClient(
  'https://supabase.aimpactus.xyz/',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJhbm9uIiwKICAgICJpc3MiOiAic3VwYWJhc2UtZGVtbyIsCiAgICAiaWF0IjogMTY0MTc2OTIwMCwKICAgICJleHAiOiAxNzk5NTM1NjAwCn0.dc_X5iR_VP_qT0zsiyj_I_OZ2T9FtRU2BBNWN8Bu4GE'
);

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro('');
    setLoading(true);
    
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password: senha,
    });
    
    setLoading(false);
    
    if (error) {
      setErro('E-mail ou senha inválidos.');
    } else {
      // Redirecionar para o dashboard do sistema
      window.location.href = '/dashboard';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Botão voltar */}
        <Link 
          to="/" 
          className="inline-flex items-center text-gray-600 hover:text-pink-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar para o site
        </Link>

        <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            {/* Logo */}
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
                <Cake className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-800">DoceGestão</span>
            </div>
            
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Bem-vindo de volta!
            </h1>
            <p className="text-gray-600">
              Acesse sua conta para gerenciar sua confeitaria
            </p>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="h-12"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="senha">Senha</Label>
                <Input
                  id="senha"
                  type="password"
                  placeholder="••••••••"
                  value={senha}
                  onChange={e => setSenha(e.target.value)}
                  required
                  className="h-12"
                />
              </div>

              {erro && (
                <Alert variant="destructive">
                  <AlertDescription>{erro}</AlertDescription>
                </Alert>
              )}

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-12 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                {loading ? 'Entrando...' : 'Entrar'}
              </Button>
            </form>

            <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4 text-sm">
              <Link 
                to="/esqueci-senha" 
                className="text-pink-600 hover:text-pink-700 hover:underline transition-colors"
              >
                Esqueceu a senha?
              </Link>
              <span className="hidden sm:block text-gray-400">•</span>
              <Link 
                to="/cadastro" 
                className="text-purple-600 hover:text-purple-700 hover:underline transition-colors"
              >
                Criar nova conta
              </Link>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Ainda não tem uma conta?{' '}
            <Link 
              to="/" 
              className="text-pink-600 hover:text-pink-700 font-medium hover:underline"
            >
              Teste grátis por 7 dias
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
