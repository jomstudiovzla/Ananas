import React from 'react';

export default function ComoFuncionaPage() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-black text-gray-800 mb-8 text-center">¿Cómo funciona Ananas?</h1>
      <div className="space-y-8 text-gray-600 text-lg">
        <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
          <h2 className="text-2xl font-bold text-ananas-green mb-4">1. Explora nuestro catálogo</h2>
          <p>Navega por nuestras categorías de Frutas, Vegetales, Carnes y Víveres. Selecciona los productos más frescos directamente desde tu hogar o la oficina.</p>
        </section>
        <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
          <h2 className="text-2xl font-bold text-ananas-green mb-4">2. Selecciona tu zona de entrega</h2>
          <p>Ananas te permite recoger tu pedido en cualquiera de nuestras sucursales o recibirlo por Delivery Express en toda Caracas. Elige tu zona en el menú superior.</p>
        </section>
        <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
          <h2 className="text-2xl font-bold text-ananas-green mb-4">3. Suma puntos en Ananas Club</h2>
          <p>Al registrarte, automáticamente formas parte del Ananas Club. Por cada dólar en compras sumas 1 punto. Desbloquea niveles como Plata y Oro para obtener envíos gratuitos y descuentos exclusivos.</p>
        </section>
      </div>
    </div>
  );
}
