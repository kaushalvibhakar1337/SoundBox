import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBxHSC64Y_xKANIJkc6YBbpVJlYMgqsgVI",
    authDomain: "soundbox-619.firebaseapp.com",
    projectId: "soundbox-619",
    storageBucket: "soundbox-619.appspot.com",
    messagingSenderId: "971462227342",
    appId: "1:971462227342:web:2ae5c99c0784f4ddf3a0df",
    measurementId: "G-K2Y6TCG9TS"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;