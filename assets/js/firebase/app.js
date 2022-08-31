  // Importação do app criado no firebase
  
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAg5Zv7RRtcUA-zHne3YZ56FlaMRYqBGQ0",
    authDomain: "projectstrangerthings.firebaseapp.com",
    projectId: "projectstrangerthings",
    storageBucket: "projectstrangerthings.appspot.com",
    messagingSenderId: "395989822775",
    appId: "1:395989822775:web:e3c8cdf3eeed1206e1feb2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  //Exportando o app
  export default app