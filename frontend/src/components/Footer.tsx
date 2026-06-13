import { ShoppingBasket, MapPin, Mail, Phone, Camera, MessageCircle } from 'lucide-react';

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
          <ul className="text-sm font-medium text-gray-500 space-y-4">
            <li><a href="#" className="hover:text-ananas-green transition flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span> Mi Cuenta</a></li>
            <li><a href="#" className="hover:text-ananas-green transition flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span> Mis Pedidos</a></li>
            <li><a href="#" className="hover:text-ananas-green transition flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span> Políticas de Envío</a></li>
            <li><a href="#" className="hover:text-ananas-green transition flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span> Términos y Condiciones</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-gray-800 tracking-wide uppercase text-sm">Contáctanos</h4>
          <ul className="text-sm font-medium text-gray-500 space-y-4">
            <li className="flex items-center gap-3"><Phone size={18} className="text-ananas-green bg-ananas-green/10 p-1.5 rounded-full" /> <span className="hover:text-ananas-green cursor-pointer transition">0424-ANANAS</span></li>
            <li className="flex items-center gap-3"><Mail size={18} className="text-ananas-green bg-ananas-green/10 p-1.5 rounded-full" /> <span className="hover:text-ananas-green cursor-pointer transition">ventas@ananas.com</span></li>
            <li className="flex items-center gap-3"><MapPin size={18} className="text-ananas-green bg-ananas-green/10 p-1.5 rounded-full" /> Caracas, Venezuela</li>
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
