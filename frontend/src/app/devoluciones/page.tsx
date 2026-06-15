export default function DevolucionesPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <h1 className="text-3xl md:text-4xl font-black text-gray-800 mb-6">Políticas de Devolución</h1>
          <p className="text-gray-500 mb-8 font-medium">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
          
          <div className="space-y-6 text-gray-600">
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">1. Garantía de Frescura</h2>
              <p>En Ananas Frutería nos enorgullece ofrecer productos de la más alta calidad y frescura. Si al recibir tu pedido notas que algún producto no cumple con nuestros estándares (ej. daños en el transporte, mal estado), te invitamos a contactarnos inmediatamente.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">2. Plazo de Reclamo</h2>
              <p>Para productos perecederos (frutas, verduras, hortalizas, carnes, lácteos), los reclamos deben realizarse el <strong>mismo día de la entrega</strong> enviando una foto del producto a nuestro número de WhatsApp de soporte.</p>
              <p className="mt-2">Para productos no perecederos (víveres, cuidado personal), dispones de un plazo de hasta 48 horas tras la recepción del pedido.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">3. Procedimiento de Cambio o Reembolso</h2>
              <p>Una vez evaluado el caso y confirmado el inconveniente, te ofreceremos dos opciones:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li><strong>Cambio del producto:</strong> Te enviaremos un reemplazo en perfectas condiciones en el menor tiempo posible o en tu próximo pedido, sin costo adicional por delivery.</li>
                <li><strong>Reembolso/Nota de crédito:</strong> Generaremos un saldo a favor en tu cuenta o reintegraremos el monto pagado por dicho producto mediante el mismo método de pago utilizado.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">4. Excepciones</h2>
              <p>No se aceptarán devoluciones por productos que hayan sido consumidos parcialmente, manipulados incorrectamente o almacenados fuera de las condiciones óptimas por parte del cliente después de la entrega.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
