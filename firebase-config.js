// Firebase 前端設定（設計上可公開，安全性由 firestore.rules 控制）
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDAqscnYVzl5Sf16tFFb6zhbiVGwzZLbis",
  authDomain: "cb-working-base.firebaseapp.com",
  projectId: "cb-working-base",
  storageBucket: "cb-working-base.firebasestorage.app",
  messagingSenderId: "227936575696",
  appId: "1:227936575696:web:47f5dd1a71fc9b16ea7ed5",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
