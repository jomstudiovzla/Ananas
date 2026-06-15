# Ananas - Proyecto de Supermercado

Este repositorio contiene el código fuente del frontend del supermercado Ananas, construido con Next.js, React y TailwindCSS.

## Instrucciones para iniciar el servidor local (Localhost)

Se han creado dos scripts en esta carpeta principal para que puedas iniciar el proyecto con un solo clic sin necesidad de usar la terminal manualmente:

- **Si usas macOS:** Haz doble clic en el archivo `start_server.command`. (Si te pide permisos, ya están configurados para ejecutarse correctamente).
- **Si usas Windows:** Haz doble clic en el archivo `start_server.bat`.

Ambos archivos se encargarán de navegar a la carpeta `frontend` y ejecutar el comando necesario (`npm run dev`) para iniciar el servidor.

Una vez que la ventana de la terminal se abra y comience el proceso, podrás ver la página abriendo tu navegador web en:
**http://localhost:3000**

## Actualizaciones Recientes
- Se ha corregido la visibilidad del menú de divisas (USD, EUR, VES) en la barra de navegación superior.
- Se ha integrado la tasa de cambio en tiempo real obtenida del Banco Central de Venezuela.
- Se ha agregado un enlace a la sección de "Comentarios" en el pie de página.
- El sistema de precios en el catálogo, carrito y proceso de pago ahora responde dinámicamente al cambio de moneda en tiempo real.
