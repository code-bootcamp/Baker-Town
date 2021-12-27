import "../styles/globals.css";
import type { AppProps } from "next/app";

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAyxVLveHqFlLxF0fSjDmsrTiuYOma1VI0",
  authDomain: "baker-town.firebaseapp.com",
  projectId: "baker-town",
  storageBucket: "baker-town.appspot.com",
  messagingSenderId: "32593744544",
  appId: "1:32593744544:web:6d8555c1988dd947baafc5",
};

export const firebaseApp = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
