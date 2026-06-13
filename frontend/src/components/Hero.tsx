"use client";
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-yellow-50">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-ananas-dark/95 to-ananas-green/60 mix-blend-multiply"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-24 md:py-36 relative z-10 flex flex-col justify-center min-h-[500px]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl text-white"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-white/20 backdrop-blur-md text-sm font-bold tracking-widest mb-6 border border-white/30 shadow-sm">
            🍍 TU SUPERMERCADO ONLINE
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tighter" style={{ textShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>
            ¡Te llevamos <br/><span className="text-yellow-400">TU MERCADO!</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-lg font-medium leading-relaxed" style={{ textShadow: '0 2px 5px rgba(0,0,0,0.3)' }}>
            Frescura y calidad garantizada directo a la puerta de tu casa. Pide hoy y recibe en minutos, sin complicaciones.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-ananas-dark px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-black/20 hover:bg-gray-50 hover:scale-105 transition-all">
              Comprar Ahora
            </button>
            <button className="bg-black/30 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-black/40 transition-all">
              Ver Ofertas
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
