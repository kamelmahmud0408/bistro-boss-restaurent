// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfoqUj5Pxe6NcEbaLo-vFYhm9O_H1HaBk",
  authDomain: "bistro-boss-restaurent-a8cdb.firebaseapp.com",
  projectId: "bistro-boss-restaurent-a8cdb",
  storageBucket: "bistro-boss-restaurent-a8cdb.appspot.com",
  messagingSenderId: "635994622148",
  appId: "1:635994622148:web:40e784d675c39af6596191"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;