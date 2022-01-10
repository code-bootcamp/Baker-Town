import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { firebaseApp, useAuth } from "../../../../pages/_app";

export const withAuth = (Component) => (props) => {
  const router = useRouter();
  // const { accessToken } = useContext(GlobalContext);
  const currentUser: any = useAuth();

  useEffect(() => {
    if (currentUser?.uid.length < 2) {
      alert("로그인 한 사람만 입장 가능합니다 로그인을 먼저해주세요");
      router.push("/signIn");
    }
    console.log(currentUser?.uid);
  }, []);

  // useEffect(() => {
  //   console.log(currentUser?.uid);
  //   if (!currentUser?.uid) {
  //     alert("로그인 한 사람만 입장 가능합니다 로그인을 먼저해주세요");
  //     router.push("/signIn");
  //   }
  // }, []);

  return <Component {...props} />;
};
