import "../styles/globals.css";
import "antd/dist/antd.css";
import type { AppProps } from "next/app";
import Layout from "../src/components/commons/layout/index";
import DashBoardLayout from "../src/components/commons/dashboardLayout/index";
import { initializeApp } from "firebase/app";
import { useRouter } from "next/router";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
const uploadLink = createUploadLink({
  uri: "https://backend04-team.codebootcamp.co.kr/team04",
});

const client = new ApolloClient({
  link: ApolloLink.from([uploadLink as any]),
  cache: new InMemoryCache(),
});

const firebaseConfig = {
  apiKey: "AIzaSyAyxVLveHqFlLxF0fSjDmsrTiuYOma1VI0",
  authDomain: "baker-town.firebaseapp.com",
  projectId: "baker-town",
  storageBucket: "baker-town.appspot.com",
  messagingSenderId: "32593744544",
  appId: "1:32593744544:web:6d8555c1988dd947baafc5",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);

export const provider = new GoogleAuthProvider();

//firebase google signIn setting
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};

//firebase 회원가입
export function signup(email: any, password: any) {
  try {
    return createUserWithEmailAndPassword(auth, email, password);
  } catch {
    alert("이미 가입된 이메일입니다!");
  }
}
//firebase로그인
export function signin(email: any, password: any) {
  try {
    return signInWithEmailAndPassword(auth, email, password);
  } catch {
    alert("이미 중복된 이메일입니다!");
  }
}
//custom hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);
  return currentUser;
}
//logout
export function logout() {
  return signOut(auth);
}

const HIDDEN_LAYOUT = [
  `/dashboard/main`,
  `/dashboard/productswrite`,
  `/dashboard/classwrite`,
  `/dashboard/classread`,
  `/dashboard/productsread`,
  `/dashboard/mypage`,
];

interface IGlobalContext {
  categoryName: string;
}

export const GlobalContext = createContext<IGlobalContext>("");

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [categoryName, setCategoryName] = useState("");
  // useEffect(() => {
  //   setCategoryName(router.query.categoryName);
  // }, []);
  const myValue = {
    categoryName,
    setCategoryName,
  };

  const isHiddenLayout = HIDDEN_LAYOUT.includes(router.asPath);

  return (
    <>
      <GlobalContext.Provider value={myValue}>
        <ApolloProvider client={client}>
          <Global styles={globalStyles} />
          {!isHiddenLayout ? (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          ) : (
            <DashBoardLayout>
              <Component {...pageProps} />
            </DashBoardLayout>
          )}
        </ApolloProvider>
      </GlobalContext.Provider>
    </>
  );
}

export default MyApp;

// 데쉬보드 페이지로 가면 layout 2가 보이고 다른 곳들은 layout 1로 가게
