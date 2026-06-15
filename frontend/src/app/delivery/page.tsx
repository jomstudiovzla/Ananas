"use client";
import React from 'react';
import { MapPin, Clock, Truck, Store } from 'lucide-react';
import Link from 'next/link';

export default function DeliveryPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-black text-gray-800 mb-4">Delivery y Zonas de Cobertura</h1>
          <p className="text-lg text-gray-500 font-medium">Llevamos la frescura de Ananas a la puerta de tu casa.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <div className="w-14 h-14 bg-green-50 text-ananas-green rounded-2xl flex items-center justify-center mb-6">
              <Truck size={28} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Delivery a Domicilio</h2>
            <p className="text-gray-500 font-medium mb-6">Recibe tus frutas y verduras favoritas sin salir de casa. Contamos con logística propia y especializada.</p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="text-ananas-green shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="font-bold text-gray-800 text-sm">Horarios de Entrega</p>
                  <p className="text-sm text-gray-500">Lunes a Sábado: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-ananas-green shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="font-bold text-gray-800 text-sm">Zonas Cobertura Principal</p>
                  <p className="text-sm text-gray-500">El Cafetal, Chuao, Las Mercedes, Altamira, Los Palos Grandes, Santa Fe, Valle Arriba, Prados del Este.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <div className="w-14 h-14 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mb-6">
              <Store size={28} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Pickup en Tienda</h2>
            <p className="text-gray-500 font-medium mb-6">Haz tu pedido online y retíralo listo y empacado en nuestra sede principal sin costo adicional.</p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="text-orange-500 shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="font-bold text-gray-800 text-sm">Horario de Retiro</p>
                  <p className="text-sm text-gray-500">Lunes a Domingo: 8:00 AM - 8:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-orange-500 shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="font-bold text-gray-800 text-sm">Nuestra Sede</p>
                  <p className="text-sm text-gray-500">C.C. San Luis, Nivel PB, Local 12, Urbanización San Luis, El Cafetal, Caracas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-ananas-green text-white p-8 rounded-3xl shadow-lg shadow-ananas-green/20 text-center">
          <h2 className="text-2xl font-bold mb-4">¿No ves tu zona en la lista?</h2>
          <p className="mb-6 font-medium text-green-50">Comunícate con nuestro equipo por WhatsApp para consultar la factibilidad de entrega en tu zona.</p>
          <a 
            href="https://api.whatsapp.com/message/LEWKZHRFSOK6F1?autoload=1&app_absent=0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex bg-white text-ananas-green px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition"
          >
            Consultar por WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
}
