import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// https://firebase.google.com/docs/web/setup#available-libraries

//configuracion Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDyiS2TCQqsUDCgwZj3MVcVr_VSiQs_am4",
  authDomain: "proyecto-final-reactjs---coder.firebaseapp.com",
  projectId: "proyecto-final-reactjs---coder",
  storageBucket: "proyecto-final-reactjs---coder.appspot.com",
  messagingSenderId: "665371106627",
  appId: "1:665371106627:web:0530575eea023c142ee3f6"
};

// Inicia la conexion con Firebase
const app = initializeApp(firebaseConfig); 

// Se utiliza para obtener una instancia de Firestore
export const db = getFirestore(app);