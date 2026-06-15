import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, doc, writeBatch } from "firebase/firestore";

const firebaseConfig = {
  projectId: "ananas-market-ve-ddb93",
  appId: "1:760091165460:web:4a9c75b5140d31939bf801",
  storageBucket: "ananas-market-ve-ddb93.firebasestorage.app",
  apiKey: "AIzaSyB2yrUnwoAMA55ov-k0GeojC6mEEpUlYhI",
  authDomain: "ananas-market-ve-ddb93.firebaseapp.com",
  messagingSenderId: "760091165460",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

const publicDir = path.join(process.cwd(), 'public', 'images', 'products', 'scraped');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

function determineSubcategory(name: string, category: string): string {
  const n = name.toUpperCase();
  
  if (category === 'frutas-vegetales') {
    if (n.includes('CAMBUR') || n.includes('LECHOSA') || n.includes('LIMON') || n.includes('PIÑA') || n.includes('MANGO') || n.includes('COCO')) return 'Frutas';
    if (n.includes('PAPA') || n.includes('YUCA') || n.includes('BATATA')) return 'Tubérculos';
    if (n.includes('REPOLLO') || n.includes('LECHUGA') || n.includes('ESPINACA')) return 'Verdes y hojas';
    if (n.includes('TOMATE') || n.includes('CEBOLLA') || n.includes('ZANAHORIA') || n.includes('PIMENTON') || n.includes('PEPINO') || n.includes('CALABACIN') || n.includes('BROCOLI') || n.includes('ESPARRAGO')) return 'Verduras y hortalizas';
    return 'Verduras y hortalizas';
  }
  
  if (category === 'refrigerados-congelados') {
    if (n.includes('CARNE') || n.includes('PULPA') || n.includes('SOLOMO') || n.includes('CERDO') || n.includes('SALMON')) return 'Carnes';
    if (n.includes('POLLO')) return 'Pollo';
    if (n.includes('CONGELAD') || n.includes('HELADO') || n.includes('BROWNIE') || n.includes('YOGURT') || n.includes('YOGUR')) return 'Congelados listos';
    if (n.includes('HUEVO')) return 'Charcutería';
    return 'Congelados listos';
  }
  
  if (category === 'viveres') {
    if (n.includes('COLA') || n.includes('MALTA') || n.includes('AGUA') || n.includes('JUGO') || n.includes('LECHE')) return 'Bebidas';
    if (n.includes('ARROZ') || n.includes('PASTA')) return 'Arroz y pasta';
    if (n.includes('MARGARINA') || n.includes('MAYONESA') || n.includes('ACEITE')) return 'Aceites y salsas';
    if (n.includes('PAN') || n.includes('PUDIN')) return 'Enlatados'; // Opcional fallback
    return 'Granos';
  }
  
  if (category === 'cuidado-personal-salud') {
    if (n.includes('PAPEL') || n.includes('CREMA') || n.includes('JABON') || n.includes('CEPILLO') || n.includes('AFEITADORA') || n.includes('TINTE') || n.includes('AGUA OXIGENADA')) return 'Higiene personal';
    if (n.includes('TABLETA') || n.includes('GOTA') || n.includes('JARABE') || n.includes('COMPRIMIDO') || n.includes('TAPAZOL') || n.includes('LETISAN') || n.includes('MUCLAR') || n.includes('PANTOPRAZOL') || n.includes('NIFEDIPINA')) return 'Farmacia básica';
    return 'Cuidado corporal';
  }
  
  if (category === 'licores') {
    if (n.includes('CERVEZA')) return 'Cervezas';
    if (n.includes('VINO') || n.includes('SANGRIA') || n.includes('CAROREÑA')) return 'Vinos';
    if (n.includes('VODKA') || n.includes('SAMBUCA') || n.includes('RON')) return 'Otros destilados';
    return 'Cervezas';
  }
  
  if (category === 'limpieza') {
    if (n.includes('JABON') || n.includes('DETERGENTE')) return 'Ropa';
    return 'Limpieza';
  }

  return '';
}

async function downloadImage(url: string, filepath: string) {
  // Omitimos descargar si el archivo ya existe y es mayor a 0 bytes
  if (fs.existsSync(filepath) && fs.statSync(filepath).size > 0) return;
  
  if (url.includes('placeholder')) {
    // Si es un placeholder, lo copiamos de la carpeta de Ananas o lo dejamos
    return;
  }

  try {
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    
    return new Promise((resolve, reject) => {
      const writer = fs.createWriteStream(filepath);
      response.data.pipe(writer);
      let error: any = null;
      writer.on('error', err => {
        error = err;
        writer.close();
        reject(err);
      });
      writer.on('close', () => {
        if (!error) resolve(true);
      });
    });
  } catch (err: any) {
    console.error(`Error downloading ${url}: ${err.message}`);
  }
}

async function run() {
  const data = JSON.parse(fs.readFileSync('./scrapedProducts.json', 'utf8'));
  const updatedData = [];
  
  const batch = writeBatch(db);
  let batchCount = 0;

  for (const product of data) {
    // 1. Asignar Subcategoría
    const sub = determineSubcategory(product.name, product.category);
    product.subcategory = sub;

    // 2. Descargar Imagen y actualizar path
    if (product.image.startsWith('http')) {
      const extMatch = product.image.match(/\.(jpg|jpeg|png)$/i);
      const ext = extMatch ? extMatch[0] : '.jpg';
      const filename = `${product.id}${ext}`;
      const filepath = path.join(publicDir, filename);
      
      console.log(`Procesando: ${product.name}`);
      await downloadImage(product.image, filepath);
      
      // La guardamos relativa para el frontend de Next.js
      product.image = `/Ananas/images/products/scraped/${filename}`;
    }

    updatedData.push(product);

    // 3. Agregar al batch de Firebase
    const docRef = doc(db, 'products', product.id);
    batch.set(docRef, product);
    batchCount++;
  }

  // Guardar JSON local actualizado
  fs.writeFileSync('./scrapedProducts.json', JSON.stringify(updatedData, null, 2));

  // Subir a Firebase
  console.log(`Subiendo ${batchCount} productos actualizados a Firebase...`);
  await batch.commit();
  console.log('¡Base de datos actualizada con imágenes locales y subcategorías!');
}

run();
