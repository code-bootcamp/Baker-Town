import "../styles/globals.css";
import "antd/dist/antd.css";
import type { AppProps } from "next/app";
import Layout from "../src/components/commons/layout/index";
import DashBoardLayout from "../src/components/commons/dashboardlayout/index";
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
const HIDDEN_LAYOUT = [
  `/dashboard/main`,
  `/dashboard/productswrite`,
  `/dashboard/classwrite`,
];

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isHiddenLayout = HIDDEN_LAYOUT.includes(router.asPath);
  return (
    <>
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
    </>
  );
}

export default MyApp;

// 데쉬보드 페이지로 가면 layout 2가 보이고 다른 곳들은 layout 1로 가게
