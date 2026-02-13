// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGRNIs7idNf3lDDRaOd0Xm122gRGGhRf4",
  authDomain: "the-best-invitation.firebaseapp.com",
  projectId: "the-best-invitation",
  storageBucket: "the-best-invitation.firebasestorage.app",
  messagingSenderId: "574611357611",
  appId: "1:574611357611:web:a59b31017c6a9b11885cee",
  measurementId: "G-6PLCLQKTSS"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// 🔹 Inicializar Firebase
firebase.initializeApp(firebaseConfig);
window.db = firebase.database();

// 🔹 FUNCIÓN GLOBAL
window.registrarEvento = function(tipo) {
  window.db.ref("eventosInvitation").push({
    tipo: tipo,
    fecha: new Date().toISOString()
  });
};

