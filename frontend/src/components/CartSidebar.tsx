"use client";
import React from 'react';
import { X, ShoppingCart, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CartSidebar({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full md:w-[400px] bg-white shadow-2xl z-50 flex flex-col"
          >
            <div className="p-5 bg-ananas-green text-white flex justify-between items-center shadow-md">
              <h2 className="font-bold text-xl flex items-center gap-2">
                <ShoppingCart /> Tu Carrito
              </h2>
              <button onClick={onClose} className="hover:rotate-90 transition-transform duration-300">
                <X size={24} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gray-50/50">
              {/* Mock Items */}
              {[1, 2].map((item) => (
                <div key={item} className="flex gap-4 items-center bg-white p-3 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
                  <div className="w-16 h-16 bg-gray-100 rounded-xl overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=150" alt="Tomate" className="w-full h-full object-cover mix-blend-multiply" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-gray-800">Tomates Perita x kg</h4>
                    <p className="text-xs text-gray-500 mb-2">$3.49 x 1</p>
                    <div className="flex items-center gap-2">
                      <button className="w-6 h-6 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-gray-200">-</button>
                      <span className="text-sm font-bold">1</span>
                      <button className="w-6 h-6 rounded-full bg-ananas-light/20 text-ananas-green flex items-center justify-center hover:bg-ananas-light hover:text-white transition">+</button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="font-black text-ananas-green">$3.49</div>
                    <button className="text-gray-400 hover:text-red-500 transition">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-white border-t border-gray-100 shadow-[0_-10px_20px_-15px_rgba(0,0,0,0.1)]">
              <div className="flex justify-between font-bold text-gray-800 mb-6 text-xl">
                <span>Total:</span>
                <span className="text-ananas-green text-2xl font-black">$ 6.98</span>
              </div>
              <button className="w-full bg-ananas-green text-white py-4 rounded-xl font-bold text-lg hover:bg-ananas-dark hover:shadow-lg hover:shadow-ananas-green/30 transition-all transform hover:-translate-y-0.5">
                Proceder al Pago
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
