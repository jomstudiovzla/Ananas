import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const publicDir = path.join(__dirname, '../public');

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <style>
      .bg { fill: #facc15; }
      .leaf { fill: #16a34a; }
      @media (prefers-color-scheme: dark) {
        .bg { fill: #eab308; }
        .leaf { fill: #22c55e; }
      }
    </style>
  </defs>
  <!-- Background circle representing pineapple body -->
  <circle cx="50" cy="60" r="30" class="bg" />
  <!-- Cross-hatch pattern for texture -->
  <path d="M 30 40 L 70 80 M 70 40 L 30 80 M 40 35 L 60 85 M 60 35 L 40 85" stroke="rgba(0,0,0,0.1)" stroke-width="2" fill="none" />
  <!-- Leaves -->
  <path d="M 50 30 C 40 10 20 20 20 20 C 30 25 40 25 45 35 Z" class="leaf" />
  <path d="M 50 30 C 60 10 80 20 80 20 C 70 25 60 25 55 35 Z" class="leaf" />
  <path d="M 50 35 C 50 15 50 5 50 5 C 50 15 55 25 50 35 Z" class="leaf" />
</svg>`;

const manifestContent = `{
  "name": "Ananas Frutería",
  "short_name": "Ananas",
  "description": "Tu supermercado online en Caracas",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#16a34a",
  "icons": [
    {
      "src": "/apple-touch-icon.png",
      "sizes": "180x180",
      "type": "image/png"
    },
    {
      "src": "/favicon.svg",
      "sizes": "any",
      "type": "image/svg+xml",
      "purpose": "maskable"
    }
  ]
}`;

async function run() {
  console.log("Creando favicon.svg...");
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgContent);

  console.log("Creando manifest.webmanifest...");
  fs.writeFileSync(path.join(publicDir, 'manifest.webmanifest'), manifestContent);

  console.log("Generando apple-touch-icon.png (180x180)...");
  const pngBuffer = await sharp(Buffer.from(svgContent))
    .resize(180, 180)
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), pngBuffer);

  console.log("Generando favicon.ico...");
  // pngToIco expects a path or an array of paths or buffers.
  // We'll create a temporary 32x32 PNG for the ICO
  const icoBaseBuffer = await sharp(Buffer.from(svgContent))
    .resize(32, 32)
    .png()
    .toBuffer();
  
  const tempPngPath = path.join(publicDir, 'temp-ico.png');
  fs.writeFileSync(tempPngPath, icoBaseBuffer);
  
  const icoBuffer = await pngToIco(tempPngPath);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  
  fs.unlinkSync(tempPngPath);
  
  console.log("¡Iconos generados exitosamente según el estándar 2026!");
}

run().catch(console.error);
