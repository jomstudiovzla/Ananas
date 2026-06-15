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
    const id = "ANAN-TEST-999";
    await setDoc(doc(db, "orders", id), {
      id: id,
      date: new Date().toISOString(),
      items: [],
      subtotal: 0,
      deliveryFee: 0,
      discount: 0,
      total: 0,
      shippingMethod: "delivery",
      paymentMethod: "cash",
      status: "Procesando"
    });
    console.log("Success! Order written.");
  } catch (err) {
    console.error("Error writing order:", err.message);
  }
}

testOrder();
