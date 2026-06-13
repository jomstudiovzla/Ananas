"use client";
import React, { useState } from 'react';
import { Menu, ShoppingBasket, Search, User, ShoppingCart, ChevronDown, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import CartSidebar from './CartSidebar';

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <div className="bg-ananas-green text-white text-xs py-2 px-4 md:px-8 flex justify-between items-center">
        <div className="flex gap-4">
          <span className="cursor-pointer hover:text-gray-200 transition">Instagram</span>
          <span className="cursor-pointer hover:text-gray-200 transition">Facebook</span>
        </div>
        <div className="hidden md:block">Tasa del Día USD $ 582.69 / € EUR 669.76</div>
        <div className="flex items-center gap-1 cursor-pointer">
          USD - dólar estadounidense <ChevronDown size={14} />
        </div>
      </div>

      <header className="sticky top-0 bg-white/90 backdrop-blur-md z-40 border-b border-gray-100 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4 md:gap-6">
            <Menu className="text-gray-600 cursor-pointer hover:text-ananas-green transition" />
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="bg-ananas-green p-2 rounded-xl text-white group-hover:bg-ananas-dark transition shadow-md shadow-ananas-green/30">
                <ShoppingBasket size={24} />
              </div>
              <span className="text-2xl font-black text-ananas-green tracking-tight">ANANAS</span>
            </div>
            <div className="hidden lg:flex flex-col text-sm border-l pl-4 border-gray-200">
              <span className="text-gray-400 text-xs">Estás comprando en</span>
              <span className="text-ananas-green font-bold flex items-center gap-1 cursor-pointer hover:text-ananas-dark transition">
                Caracas <ChevronDown size={14} />
              </span>
            </div>
          </div>

          <div className="flex-1 max-w-2xl mx-8 relative hidden md:block group">
            <input 
              type="text" 
              placeholder="¿Qué podemos ayudarte a encontrar hoy?" 
              className="w-full bg-gray-50 border border-gray-200 rounded-full py-3 px-6 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ananas-light focus:border-transparent transition shadow-inner"
            />
            <Search className="absolute right-5 top-3 text-gray-400 group-hover:text-ananas-green transition" size={20} />
          </div>

          <div className="flex items-center gap-6">
            <User className="text-gray-600 cursor-pointer hover:text-ananas-green transition" size={24} />
            <div className="relative cursor-pointer group" onClick={() => setIsCartOpen(true)}>
              <ShoppingCart className="text-gray-600 group-hover:text-ananas-green transition" size={24} />
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-white"
              >
                3
              </motion.span>
            </div>
            <button className="bg-ananas-green text-white px-5 py-2.5 rounded-full font-bold hover:bg-ananas-dark transition hidden lg:flex items-center gap-2 shadow-lg shadow-ananas-green/20">
              <Download size={18} /> App
            </button>
          </div>
        </div>
      </header>
      
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
