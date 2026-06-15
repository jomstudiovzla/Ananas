import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

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

async function check() {
  const snapshot = await getDocs(collection(db, "products"));
  console.log(`Hay ${snapshot.size} productos en Firebase.`);
  if (snapshot.size > 0) {
    console.log("Muestra de producto:", snapshot.docs[0].data().name);
  }
}

check();
