import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  projectId: "ananas-market-ve-ddb93",
  appId: "1:760091165460:web:4a9c75b5140d31939bf801",
  storageBucket: "ananas-market-ve-ddb93.firebasestorage.app",
  apiKey: "AIzaSyB2yrUnwoAMA55ov-k0GeojC6mEEpUlYhI",
  authDomain: "ananas-market-ve-ddb93.firebaseapp.com",
  messagingSenderId: "760091165460",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function testOrder() {
  try {
    const orderId = `ANAN-TEST-${Date.now()}`;
    const order = {
      id: orderId,
      date: new Date().toISOString(),
      customerInfo: { name: "Test User", phone: "12345", address: "Test", paymentMethod: "Efectivo", shippingMethod: "Delivery" },
      items: [],
      subtotal: 0,
      deliveryFee: 0,
      total: 0,
      status: "Pendiente"
    };

    console.log("Intentando escribir en orders...");
    await setDoc(doc(db, "orders", orderId), order);
    console.log("¡Orden escrita con éxito en Firebase!");
    process.exit(0);
  } catch (error) {
    console.error("Error escribiendo:", error);
    process.exit(1);
  }
}

testOrder();
