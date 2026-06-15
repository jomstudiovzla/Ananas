import fs from 'fs';
import path from 'path';
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, deleteDoc, writeBatch } from "firebase/firestore";

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

const invalidIds = ['p-plazas-151392', 'p-plazas-145009'];

async function run() {
  const snap = await getDocs(collection(db, "products"));
  let deletedCount = 0;
  const validProducts: any[] = [];
  
  for (const docSnap of snap.docs) {
    const id = docSnap.id;
    // Delete if it's an old product (doesn't start with p-plazas-) or it's one of the invalid IDs
    if (!id.startsWith('p-plazas-') || invalidIds.includes(id)) {
      await deleteDoc(doc(db, "products", id));
      console.log(`Borrando producto de Firebase: ${id}`);
      deletedCount++;
    } else {
      validProducts.push({ id, ...docSnap.data() });
    }
  }

  console.log(`Se eliminaron ${deletedCount} productos inválidos de Firebase.`);
  console.log(`Quedan ${validProducts.length} productos válidos.`);

  // Actualizar mockDb.ts en localhost
  const mockDbPath = path.join(__dirname, '../src/data/mockDb.ts');
  let mockDbContent = fs.readFileSync(mockDbPath, 'utf8');
  
  // Extraemos la parte superior (categories y types) y reemplazamos solo el array de products
  const productsIndex = mockDbContent.indexOf('export const products: Product[] = [');
  if (productsIndex !== -1) {
    const topPart = mockDbContent.substring(0, productsIndex);
    const newProductsContent = `export const products: Product[] = ${JSON.stringify(validProducts, null, 2)};\n`;
    fs.writeFileSync(mockDbPath, topPart + newProductsContent);
    console.log(`mockDb.ts sincronizado con los ${validProducts.length} productos de Plazas.`);
  } else {
    console.error('No se pudo encontrar "export const products" en mockDb.ts');
  }

  // Actualizar también scrapedProducts.json por si acaso
  fs.writeFileSync(path.join(__dirname, '../scrapedProducts.json'), JSON.stringify(validProducts, null, 2));
}

run().catch(console.error);
