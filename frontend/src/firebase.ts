import { FirebaseApp, FirebaseOptions, initializeApp } from "firebase/app";
import { Analytics, getAnalytics } from "firebase/analytics";
import { Auth, getAuth } from "firebase/auth";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyB0i6WRGpj6Xw8Fe4E4nPITBu68QapuO5o",
  authDomain: "dirtie-auth.firebaseapp.com",
  projectId: "dirtie-auth",
  storageBucket: "dirtie-auth.appspot.com",
  messagingSenderId: "605571322372",
  appId: "1:605571322372:web:3a419960e98c4b5ba4db51",
  measurementId: "G-NBR5K089QH"
};

const app: FirebaseApp = initializeApp(firebaseConfig);
export default app;
export const analytics: Analytics = getAnalytics(app);
export const auth: Auth = getAuth(app);
