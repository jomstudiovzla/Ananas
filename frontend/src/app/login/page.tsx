"use client";
import { useState, useEffect } from 'react';
import { useStore } from '@/store/useStore';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const login = useStore(state => state.login);
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [cedula, setCedula] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [redirectPath, setRedirectPath] = useState('/account');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const red = params.get('redirect');
      if (red) {
        setRedirectPath(red);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (email) {
      if (email.trim().toLowerCase() === 'admin@jomstudio.com' && password.trim() === 'VZLA') {
        login({
          id: 'admin',
          name: 'Administrador',
          email: 'admin@jomstudio.com',
          clubPoints: 0,
          clubLevel: 'Oro'
        });
        sessionStorage.setItem('isAdminLoggedIn', 'true');
        router.push(redirectPath === '/account' ? '/account' : redirectPath);
      } else {
        // Simulamos auth y nivel en el club Ananas normal
        login({
          id: Math.random().toString(),
          name: name || email.split('@')[0],
          email: email,
          cedula: cedula || undefined,
          phone: phone || undefined,
          clubPoints: 350,
          clubLevel: 'Bronce'
        });
        router.push(redirectPath);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto py-20 px-4">
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
        <h1 className="text-3xl font-black text-gray-800 mb-2 text-center">
          {isRegistering ? 'Únete a Ananas' : 'Inicia Sesión'}
        </h1>
        <p className="text-center text-gray-500 mb-8 font-medium">
          {isRegistering ? 'Disfruta de envíos rápidos y ofertas exclusivas del Club.' : 'Qué bueno verte de nuevo.'}
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {isRegistering && (
            <>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Nombre completo</label>
                <input 
                  required 
                  type="text" 
                  value={name} 
                  onChange={e => setName(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ananas-green transition"
                  placeholder="Juan Pérez"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Cédula o RIF</label>
                  <input 
                    required 
                    type="text" 
                    value={cedula} 
                    onChange={e => setCedula(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ananas-green transition"
                    placeholder="V-12345678"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Teléfono</label>
                  <input 
                    required 
                    type="tel" 
                    value={phone} 
                    onChange={e => setPhone(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ananas-green transition"
                    placeholder="0414-1234567"
                  />
                </div>
              </div>
            </>
          )}
          
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Correo electrónico</label>
            <input 
              required 
              type="email" 
              value={email} 
              onChange={e => setEmail(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ananas-green transition"
              placeholder="tu@correo.com"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Contraseña</label>
            <input 
              required 
              type="password" 
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ananas-green transition"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm font-bold bg-red-50 p-3 rounded-lg text-center">
              {error}
            </div>
          )}

          <button type="submit" className="w-full bg-ananas-green text-white font-bold text-lg py-4 rounded-xl hover:bg-ananas-dark transition shadow-lg shadow-ananas-green/20">
            {isRegistering ? 'Crear Cuenta' : 'Entrar'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <button 
            onClick={() => setIsRegistering(!isRegistering)}
            className="text-gray-500 hover:text-ananas-green font-bold transition"
          >
            {isRegistering ? '¿Ya tienes cuenta? Inicia sesión' : '¿No tienes cuenta? Regístrate aquí'}
          </button>
        </div>
      </div>
    </div>
  );
}
