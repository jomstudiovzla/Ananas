"use client";
import { useEffect, useState } from 'react';
import { useStore } from '@/store/useStore';
import { zones } from '@/data/mockDb';
import { MapPin, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ZoneSelector() {
  const { zone, setZone } = useStore();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (zone === null) {
      setIsOpen(true);
    }
  }, [zone]);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full"
          >
            <div className="w-16 h-16 bg-ananas-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="text-ananas-green" size={32} />
            </div>
            <h2 className="text-2xl font-black text-center text-gray-800 mb-2 tracking-tight">Bienvenido a Ananas</h2>
            <p className="text-gray-500 text-center mb-8 font-medium">Por favor, selecciona tu zona o sucursal más cercana para calcular la disponibilidad y envíos.</p>
            
            <div className="space-y-3">
              {zones.map((z) => (
                <button
                  key={z}
                  onClick={() => {
                    setZone(z);
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-ananas-green hover:bg-ananas-green/5 transition group"
                >
                  <span className="font-bold text-gray-700 group-hover:text-ananas-dark">{z}</span>
                  <Check className="text-ananas-green opacity-0 group-hover:opacity-100 transition" size={20} />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
