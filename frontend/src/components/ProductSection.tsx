"use client";
import { Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface Product {
  name: string;
  price: number;
  image: string;
}

export default function ProductSection({ title, products }: { title: string, products: Product[] }) {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4">
      <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
        <h2 className="text-2xl font-black text-gray-800 tracking-tight flex items-center gap-4">
          {title}
          <span className="text-ananas-green text-sm font-bold cursor-pointer hover:underline hover:text-ananas-dark transition">Ver Todo &rarr;</span>
        </h2>
        <div className="flex gap-3 hidden md:flex">
          <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-ananas-green hover:border-ananas-green hover:text-white transition shadow-sm"><ChevronLeft size={20} /></button>
          <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-ananas-green hover:border-ananas-green hover:text-white transition shadow-sm"><ChevronRight size={20} /></button>
        </div>
      </div>

      <div className="flex overflow-x-auto gap-6 pb-8 hide-scrollbar snap-x">
        {products.map((p, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="min-w-[220px] md:min-w-[260px] bg-white rounded-[1.5rem] p-5 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 relative group snap-start flex flex-col"
          >
            <button className="absolute top-5 right-5 w-10 h-10 bg-white border border-gray-100 rounded-full shadow-lg flex items-center justify-center text-ananas-green hover:bg-ananas-green hover:text-white transition-all z-10 hover:scale-110">
              <Plus size={20} strokeWidth={2.5} />
            </button>
            
            <div className="h-48 flex items-center justify-center mb-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-4 overflow-hidden relative">
              <div className="absolute inset-0 mix-blend-overlay bg-black/5 rounded-2xl"></div>
              <motion.img 
                whileHover={{ scale: 1.15 }}
                transition={{ type: 'spring', stiffness: 200 }}
                src={p.image} 
                alt={p.name} 
                className="max-h-full object-contain mix-blend-multiply drop-shadow-md z-10" 
              />
            </div>
            
            <div className="mt-auto">
              <h3 className="text-sm font-bold text-gray-500 mb-2 uppercase leading-snug line-clamp-2 min-h-[40px] group-hover:text-ananas-dark transition">{p.name}</h3>
              <div className="flex items-center justify-between">
                <p className="text-2xl font-black text-gray-800">${p.price.toFixed(2)}</p>
                <span className="text-xs font-bold text-ananas-dark bg-ananas-green/10 px-3 py-1.5 rounded-lg border border-ananas-green/20">1 Kg</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
