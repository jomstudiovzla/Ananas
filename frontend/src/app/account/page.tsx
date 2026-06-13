"use client";
import { useStore } from '@/store/useStore';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LogOut, Package, Star, Crown, ChevronRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function AccountPage() {
  const { user, logout } = useStore();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!useStore.getState().user) {
      router.push('/login');
    }
  }, [router]);

  if (!mounted || !user) return null;

  const clubProgress = (user.clubPoints / 500) * 100;

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 grid grid-cols-1 lg:grid-cols-4 gap-8">
      
      <div className="lg:col-span-1 space-y-6">
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm text-center">
          <div className="w-20 h-20 bg-ananas-green/10 text-ananas-green rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-black">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-sm text-gray-500 mb-6">{user.email}</p>
          <button 
            onClick={() => {
              logout();
              router.push('/');
            }}
            className="w-full flex items-center justify-center gap-2 text-red-500 font-bold hover:bg-red-50 py-3 rounded-xl transition"
          >
            <LogOut size={18} /> Cerrar Sesión
          </button>
        </div>

        <div className="bg-white rounded-3xl p-4 border border-gray-100 shadow-sm space-y-2">
          <Link href="/account" className="flex items-center justify-between p-3 rounded-xl bg-gray-50 text-ananas-green font-bold">
            <div className="flex items-center gap-3"><Star size={20} /> Ananas Club</div>
            <ChevronRight size={18} />
          </Link>
          <Link href="#pedidos" className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 text-gray-600 font-bold transition">
            <div className="flex items-center gap-3"><Package size={20} /> Mis Pedidos</div>
            <ChevronRight size={18} />
          </Link>
          <Link href="#seguridad" className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 text-gray-600 font-bold transition">
            <div className="flex items-center gap-3"><ShieldCheck size={20} /> Seguridad</div>
            <ChevronRight size={18} />
          </Link>
        </div>
      </div>

      <div className="lg:col-span-3 space-y-8">
        
        {/* Ananas Club Widget */}
        <div className="bg-gradient-to-br from-ananas-green to-ananas-dark rounded-3xl p-8 text-white shadow-xl shadow-ananas-green/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Crown size={120} />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-2">
              <Star className="text-yellow-300" fill="currentColor" size={28} />
              <h2 className="text-3xl font-black tracking-tight">Ananas Club</h2>
            </div>
            <p className="text-ananas-light/80 font-medium mb-8">Nivel actual: <span className="text-white font-bold">{user.clubLevel}</span></p>

            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-md border border-white/20">
              <div className="flex justify-between items-end mb-4">
                <div>
                  <p className="text-sm font-bold opacity-80 mb-1">Tus Puntos</p>
                  <p className="text-4xl font-black tracking-tighter">{user.clubPoints} <span className="text-lg font-medium opacity-70">pts</span></p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold opacity-80 mb-1">Próximo Nivel</p>
                  <p className="text-lg font-bold text-yellow-300">Plata (500 pts)</p>
                </div>
              </div>

              <div className="w-full bg-black/20 rounded-full h-3 mb-3">
                <div className="bg-yellow-300 h-3 rounded-full" style={{ width: `${Math.min(clubProgress, 100)}%` }}></div>
              </div>
              <p className="text-sm font-medium opacity-90 text-right">Te faltan {500 - user.clubPoints} pts para alcanzar Plata</p>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-black/10 p-4 rounded-xl">
                <h4 className="font-bold mb-1">Envío Gratis</h4>
                <p className="text-xs opacity-80">En compras mayores a $50</p>
              </div>
              <div className="bg-black/10 p-4 rounded-xl">
                <h4 className="font-bold mb-1">Ofertas Exclusivas</h4>
                <p className="text-xs opacity-80">Acceso anticipado a descuentos</p>
              </div>
              <div className="bg-black/10 p-4 rounded-xl opacity-50 relative group cursor-not-allowed">
                <h4 className="font-bold mb-1">Sorpresa de Cumpleaños</h4>
                <p className="text-xs opacity-80">Solo nivel Plata o superior</p>
              </div>
            </div>
          </div>
        </div>

        {/* Historial de Pedidos */}
        <div id="pedidos" className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
          <h3 className="text-2xl font-black text-gray-800 mb-6">Pedidos Recientes</h3>
          
          <div className="space-y-4">
            {[1, 2].map(order => (
              <div key={order} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 border border-gray-100 rounded-2xl hover:border-ananas-green transition group">
                <div>
                  <p className="text-sm font-bold text-gray-400 mb-1">Pedido #AN-00{order}83</p>
                  <p className="font-bold text-gray-800 mb-1">12 de Octubre, 2026</p>
                  <p className="text-sm text-gray-500">4 artículos • Entregado</p>
                </div>
                <div className="mt-4 sm:mt-0 flex items-center gap-4">
                  <span className="font-black text-xl text-gray-800">$24.50</span>
                  <button className="text-ananas-green font-bold bg-ananas-green/10 px-4 py-2 rounded-lg group-hover:bg-ananas-green group-hover:text-white transition">Ver detalle</button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
