import React from 'react';
import { CreditCard, Wallet, Banknote } from 'lucide-react';

export default function PagosPage() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-black text-gray-800 mb-8 text-center">Métodos de Pago</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center">
          <CreditCard size={48} className="mx-auto text-ananas-green mb-4" />
          <h2 className="text-xl font-bold mb-2">Tarjetas Internacionales</h2>
          <p className="text-gray-500 text-sm">Visa, Mastercard y AMEX. Procesado de forma segura.</p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center">
          <Wallet size={48} className="mx-auto text-ananas-green mb-4" />
          <h2 className="text-xl font-bold mb-2">Zelle y Pago Móvil</h2>
          <p className="text-gray-500 text-sm">Confirma tu pago enviando la referencia al finalizar la compra.</p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center">
          <Banknote size={48} className="mx-auto text-ananas-green mb-4" />
          <h2 className="text-xl font-bold mb-2">Efectivo (Pickup)</h2>
          <p className="text-gray-500 text-sm">Paga en efectivo al retirar tu pedido por cualquiera de nuestras sucursales.</p>
        </div>

      </div>
    </div>
  );
}
