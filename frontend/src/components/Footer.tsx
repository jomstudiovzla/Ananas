import { ShoppingBasket, Camera, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-20 pb-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <div className="text-2xl font-black text-ananas-green flex items-center gap-2 mb-6">
            <ShoppingBasket size={32} /> ANANAS
          </div>
          <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium">
            El supermercado de confianza que lleva la frescura y la calidad directo a la puerta de tu casa.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-500 hover:bg-ananas-green hover:text-white transition shadow-sm hover:shadow-md hover:-translate-y-1 transform"><Camera size={20} /></a>
            <a href="#" className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-500 hover:bg-ananas-green hover:text-white transition shadow-sm hover:shadow-md hover:-translate-y-1 transform"><MessageCircle size={20} /></a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-gray-800 tracking-wide uppercase text-sm">Enlaces Útiles</h4>
          <ul className="space-y-3">
            <li><Link href="/como-funciona" className="text-gray-500 hover:text-ananas-green transition font-medium">¿Cómo funciona Ananas?</Link></li>
            <li><Link href="/pagos" className="text-gray-500 hover:text-ananas-green transition font-medium">Métodos de Pago</Link></li>
            <li><a href="#" className="text-gray-500 hover:text-ananas-green transition font-medium">Preguntas Frecuentes</a></li>
            <li><a href="#" className="text-gray-500 hover:text-ananas-green transition font-medium">Contáctanos</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-gray-800 mb-6 uppercase tracking-wider text-sm">Tu Cuenta</h4>
          <ul className="space-y-3">
            <li><Link href="/account" className="text-gray-500 hover:text-ananas-green transition font-medium">Mi Cuenta</Link></li>
            <li><Link href="/account#pedidos" className="text-gray-500 hover:text-ananas-green transition font-medium">Mis Pedidos</Link></li>
            <li><Link href="/cart" className="text-gray-500 hover:text-ananas-green transition font-medium">Carrito de Compras</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-gray-800 tracking-wide uppercase text-sm">Suscríbete</h4>
          <p className="text-sm font-medium text-gray-500 mb-4">Recibe las mejores ofertas semanales directo en tu correo.</p>
          <div className="flex shadow-sm rounded-xl overflow-hidden border border-gray-200 focus-within:border-ananas-green focus-within:ring-2 focus-within:ring-ananas-green/20 transition-all">
            <input type="email" placeholder="Tu email" className="bg-gray-50 px-4 py-3 text-sm w-full focus:outline-none" />
            <button className="bg-ananas-green text-white px-5 py-3 text-sm font-bold hover:bg-ananas-dark transition">Unirme</button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-gray-100 text-center text-sm font-medium text-gray-400">
        &copy; {new Date().getFullYear()} Ananas Frutería. Todos los derechos reservados.
      </div>
    </footer>
  );
}
