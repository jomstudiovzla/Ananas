"use client";
import React from 'react';
import { X, ShoppingCart, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '@/store/useStore';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CartSidebar({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const { cart, removeFromCart, updateQuantity } = useStore();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  
  useEffect(() => setMounted(true), []);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
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
              {mounted && cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-400">
                  <ShoppingCart size={48} className="mb-4 opacity-50" />
                  <p>Tu carrito está vacío</p>
                </div>
              ) : (
                mounted && cart.map((item) => (
                  <div key={item.id} className="flex gap-4 items-center bg-white p-3 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
                    <div className="w-16 h-16 bg-gray-100 rounded-xl overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-gray-800 line-clamp-1">{item.name}</h4>
                      <p className="text-xs text-gray-500 mb-2">${item.price.toFixed(2)} {item.unit}</p>
                      <div className="flex items-center gap-2">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-6 h-6 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-gray-200">-</button>
                        <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-6 h-6 rounded-full bg-ananas-light/20 text-ananas-green flex items-center justify-center hover:bg-ananas-light hover:text-white transition">+</button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="font-black text-ananas-green">${(item.price * item.quantity).toFixed(2)}</div>
                      <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500 transition">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="p-6 bg-white border-t border-gray-100 shadow-[0_-10px_20px_-15px_rgba(0,0,0,0.1)]">
              <div className="flex justify-between font-bold text-gray-800 mb-6 text-xl">
                <span>Total:</span>
                <span className="text-ananas-green text-2xl font-black">${mounted ? total.toFixed(2) : '0.00'}</span>
              </div>
              <button 
                disabled={!mounted || cart.length === 0}
                onClick={() => {
                  onClose();
                  const isLogged = useStore.getState().user;
                  if (!isLogged) {
                    router.push('/login?redirect=/checkout');
                  } else {
                    router.push('/checkout');
                  }
                }}
                className="w-full bg-ananas-green disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold text-lg hover:bg-ananas-dark hover:shadow-lg hover:shadow-ananas-green/30 transition-all transform hover:-translate-y-0.5"
              >
                Proceder al Pago
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
