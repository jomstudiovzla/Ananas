"use client";
import { Apple, Beef, PackageOpen, SprayCan, Wine, Syringe } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const categories = [
  { id: 'frutas-vegetales', name: 'Frutas y Vegetales', icon: Apple, color: 'bg-[#8cc63f]' },
  { id: 'refrigerados-congelados', name: 'Refrigerados', icon: Beef, color: 'bg-[#231f20]' },
  { id: 'viveres', name: 'Víveres', icon: PackageOpen, color: 'bg-[#f26522]' },
  { id: 'cuidado-personal-salud', name: 'Salud', icon: Syringe, color: 'bg-[#0054a6]' },
  { id: 'limpieza', name: 'Limpieza', icon: SprayCan, color: 'bg-[#00a651]' },
  { id: 'licores', name: 'Licores', icon: Wine, color: 'bg-[#9e005d]' },
];

export default function Categories() {
  return (
    <section id="categories" className="max-w-7xl mx-auto py-20 px-4">
      <div className="flex items-center justify-center mb-12">
        <h2 className="text-3xl font-black text-gray-800 tracking-tight relative">
          EXPLORA POR CATEGORÍAS
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-ananas-green rounded-full"></div>
        </h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
        {categories.map((cat, i) => (
          <Link href={`/category/${cat.id}/`} key={cat.id} className="block group">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.03 }}
              className={`${cat.color} text-white p-6 rounded-[1.5rem] shadow-xl cursor-pointer flex flex-col items-center justify-center min-h-[160px] md:min-h-[180px] relative overflow-hidden h-full`}
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <cat.icon size={56} strokeWidth={1.5} className="mb-4 group-hover:scale-110 transition-transform duration-300 drop-shadow-md" />
              <span className="text-sm font-bold text-center tracking-wide leading-tight">{cat.name}</span>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
