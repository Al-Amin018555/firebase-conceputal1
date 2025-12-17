// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAeQXFeXVhH21_qiFlITUwuTpm6jp2mz0I",
    authDomain: "fir-conceptual1-51d72.firebaseapp.com",
    projectId: "fir-conceptual1-51d72",
    storageBucket: "fir-conceptual1-51d72.firebasestorage.app",
    messagingSenderId: "770883426876",
    appId: "1:770883426876:web:80fc74cc9efe640219c139"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);