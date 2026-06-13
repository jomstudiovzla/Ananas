# Especificación Técnica y Funcional: Supermercado Online "Ananas"

## 1. Visión general del supermercado online Ananas
El proyecto consiste en el diseño y desarrollo de un **ecommerce de supermercado online llamado "Ananas"**. El objetivo es crear una plataforma rápida, segura, responsive y administrable que permita a los clientes explorar productos, agregarlos a un carrito y realizar compras. Las funcionalidades clave incluyen catálogo con filtros, gestión de carritos y checkout, sistema de promociones/cupones, panel de usuario para seguimiento de pedidos e historiales, y un diseño enfocado en la usabilidad inspirado en plataformas consolidadas.

## 2. Contenido de negocio y diseño visual

### Marca y Estilo Visual
- **Nombre de la marca:** Ananas Frutería / Ananas Market.
- **Paleta de colores principal:** Verde oscuro (color corporativo primario para acentos y botones), Blanco (fondos limpios para destacar los productos), y gris oscuro/negro para tipografías.
- **Slogans y llamadas a la acción:** "¡Te llevamos TU MERCADO!", "Haz tu pedido a través de nuestra web". (Inspirado visualmente en el esquema de referencia).

### Categorías de Productos
Basado en el esquema visual solicitado, la tienda se divide en las siguientes macrocategorías:
1. **FRUTAS Y VEGETALES**
2. **REFRIGERADOS Y CONGELADOS** (Carnes, pollos)
3. **VÍVERES** (Arroz, granos, despensa)
4. **CUIDADO PERSONAL Y SALUD**
5. **LIMPIEZA**
6. **LICORES** (Cervezas, vinos, sangrías)

### Tipos de Productos (Ejemplos extraídos para seed de base de datos)
- **Frutas y Vegetales:** Tomates Perita x kg ($3.49), Lechosa x kg ($1.75), Limones x kg ($4.19), Piña x unidad ($2.55).
- **Refrigerados:** Carne Molida SV ($9.95), Pulpa Negra SV ($12.45), Pechuga de Pollo sin Hueso ($8.45).
- **Víveres y Licores:** Arroz Kaly Premium 900g ($1.30), Cerveza Polar Pilsen Lata ($0.99), Sangría Caroreña 1.75L ($6.98).

### Promociones y Contacto
- **Promociones:** Sección "IMBATIBLES" con descuentos porcentuales visibles en las tarjetas (ej: -8%, -15%). Cupones aplicables al checkout.
- **Ubicación de cobertura:** Caracas (y zonas de entrega específicas por definir con el cliente).
- **Datos de contacto:** Teléfono de WhatsApp y correo de soporte (ej: *ventas@ananas.com* o *[Por definir con el cliente]*). Enlaces a Instagram `@ananasfruteria`.

## 3. Arquitectura técnica

### Stack y Lenguajes
- **Frontend:** Next.js (React) con TypeScript y Tailwind CSS. Ideal por su capacidad de Server-Side Rendering (SSR) y Static Site Generation (SSG), lo cual es crítico para el **SEO** de un supermercado (indexación de productos en Google) y para garantizar una carga ultrarrápida.
- **Backend:** Python con FastAPI. Elegido por su altísimo rendimiento, generación automática de documentación (Swagger), y validación estricta de datos mediante Pydantic.
- **Base de Datos:** PostgreSQL para garantizar transacciones financieras seguras, integridad referencial en los pedidos, y alto volumen de lectura/escritura concurrente.

### Estructura de Carpetas

**Frontend (`frontend/`)**
- `public/`: Assets estáticos (logos, favicons).
  - `public/images/`: Banners, categorías, fotos de productos.
- `src/pages/`:
  - `index.tsx`: Home (Hero con "Te llevamos TU MERCADO", categorías en cards cuadradas, carruseles de productos destacados).
  - `productos/`: Catálogo con filtros laterales (categoría, precio) y detalle individual del producto.
  - `carrito/`: Resumen, modificación de cantidades y subtotal.
  - `checkout/`: Formulario de envío y selección de pago.
  - `promociones/`: Listado de ofertas vigentes.
  - `cuenta/`: Perfil de usuario e historial.
- `src/components/`: Componentes reutilizables (`Navbar`, `Footer`, `ProductCard`, `CategoryMenu`, `CartIcon`).
- `src/layouts/`: Plantillas maestras de las páginas.
- `src/styles/`: Configuración global y directivas de Tailwind.
- `src/services/`: Clientes HTTP para comunicarse con el Backend.
- `src/utils/` y `src/constants/`: Helpers de formateo (moneda local/USD) y variables fijas.

**Backend (`backend/`)**
- `app/api/`: Enrutadores principales (`auth.py`, `users.py`, `products.py`, `categories.py`, `cart.py`, `orders.py`, `promotions.py`, `reviews.py`).
- `app/models/`: Modelos SQLAlchemy (`user.py`, `product.py`, `order.py`, etc.).
- `app/schemas/`: Esquemas de Pydantic para validación de DTOs.
- `app/services/`: Lógica de negocio (procesamiento de pagos simulados, rebaja de inventario, cálculo de cupones).
- `app/core/` y `app/db/`: Configuraciones, conexión a PostgreSQL y settings de variables de entorno.
- `app/security/`: Lógica de JWT, hashing y dependencias de roles.
- `migrations/`: Historial de Alembic para la base de datos.

## 4. Diseño de API

Los recursos y endpoints REST principales que el backend expondrá al frontend son:

**Autenticación y Usuarios:**
- `POST /api/auth/register` y `POST /api/auth/login` (Retorna JWT).
- `GET /api/users/me` (Datos del perfil y direcciones).

**Catálogo (Públicos):**
- `GET /api/categories` (Lista las categorías principales).
- `GET /api/products` (Lista con paginación y filtros de búsqueda).
- `GET /api/products/{id}` (Detalles, reseñas y fotos).

**Carrito y Pedidos (Protegidos):**
- `POST /api/orders/checkout` (Recibe los items del carrito, valida el stock real en BD, crea la orden y descuenta el inventario).
- `GET /api/orders/me` (Historial de compras del cliente).
- `GET /api/orders/{id}` (Estado y detalle de una compra específica).

**Promociones y Reseñas:**
- `POST /api/promotions/validate` (Valida si un cupón es aplicable al carrito).
- `POST /api/reviews/{product_id}` (Permite a un usuario autenticado calificar un producto que ya haya comprado).

## 5. Seguridad y buenas prácticas (Protocolos)

Para garantizar la fiabilidad del supermercado online, se implementarán de forma estricta las siguientes políticas:

- **Validación y Sanitización:** Todo input recibido en el Backend será tipado y validado mediante **Pydantic** (tipos, longitudes máximas y expresiones regulares). Textos abiertos como las reseñas pasarán por sanitización HTML para evitar XSS.
- **Inyección SQL:** Todo acceso a datos se realizará exclusivamente a través del ORM (SQLAlchemy) utilizando queries parametrizadas. Ninguna consulta SQL será concatenada manualmente.
- **Gestión de Secretos:** Credenciales de base de datos, claves secretas JWT y tokens de APIs de pago se manejarán únicamente vía `.env` (nunca hardcodeados en el código).
- **Autenticación y Permisos:** Uso de JWT Bearer Tokens. Los endpoints administrativos (crear productos, ver todos los pedidos) estarán protegidos por validaciones de rol (`is_admin=True`).
- **Hashing Robusto:** Las contraseñas de los usuarios serán almacenadas utilizando **bcrypt** (PassLib).
- **Protección de Tráfico:** 
  - **CORS:** Estará restringido exclusivamente a los dominios autorizados de producción y desarrollo local (no habrá `allow_origins=["*"]` en producción).
  - **Rate Limiting:** Se aplicarán límites de peticiones (throttling) en endpoints sensibles como el login y checkout para prevenir fuerza bruta y fraudes.
- **Archivos Subidos:** Validaciones estrictas de tamaño máximo (ej. 2MB) y extensiones MIME (solo JPEG/PNG/WebP) para las imágenes de productos subidas desde el panel de administrador.
- **Logs de Auditoría:** Cambios de estado en los pedidos y alteraciones manuales de stock dejarán registro (logs) indicando qué usuario administrativo ejecutó la acción.
