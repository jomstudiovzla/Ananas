import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, doc, writeBatch } from "firebase/firestore";
import * as fs from 'fs';

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

async function seed() {
  const data = JSON.parse(fs.readFileSync('./scrapedProducts.json', 'utf8'));
  console.log(`Cargando ${data.length} productos a Firebase...`);
  
  const batch = writeBatch(db);
  
  for (const product of data) {
    const docRef = doc(db, 'products', product.id);
    batch.set(docRef, product);
  }
  
  try {
    await batch.commit();
    console.log('¡Productos inyectados con éxito en Firebase Firestore!');
    process.exit(0);
  } catch (error) {
    console.error('Error inyectando productos:', error);
    process.exit(1);
  }
}

seed();
