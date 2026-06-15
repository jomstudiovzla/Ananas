export default function TerminosPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <h1 className="text-3xl md:text-4xl font-black text-gray-800 mb-6">Términos y Condiciones</h1>
          <p className="text-gray-500 mb-8 font-medium">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
          
          <div className="space-y-6 text-gray-600">
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">1. Información General</h2>
              <p>Bienvenido a Ananas Frutería (Inversiones Ananas, C.A., RIF J-12345678-9). Al utilizar nuestro sitio web y realizar compras, aceptas estar sujeto a los siguientes términos y condiciones.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">2. Precios y Pagos</h2>
              <p>Todos nuestros precios están expresados en su equivalente en divisas como referencia. El cobro final en Bolívares se calculará utilizando la tasa oficial del Banco Central de Venezuela (BCV) vigente al momento de la compra o facturación.</p>
              <p className="mt-2">Aceptamos Zelle, Pago Móvil, Efectivo contra entrega y PayPal.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">3. Disponibilidad de Productos</h2>
              <p>El inventario mostrado en la web es de carácter informativo. En caso de que un producto no se encuentre disponible al momento de preparar su orden, nos comunicaremos para ofrecerle un sustituto de igual o mejor calidad, o en su defecto, realizar el reembolso correspondiente.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">4. Entregas (Delivery y Pickup)</h2>
              <p>Los tiempos de entrega pueden variar según el volumen de pedidos, las condiciones climáticas y la zona de entrega. El servicio de Delivery tiene costo adicional según su ubicación. El cliente debe garantizar que habrá alguien para recibir el pedido en el horario acordado.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
