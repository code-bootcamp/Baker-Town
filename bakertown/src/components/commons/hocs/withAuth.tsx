import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuth } from "../../../../pages/_app";

export const withAuth = (Component) => (props) => {
  const router = useRouter();
  // const { accessToken } = useContext(GlobalContext);
  const currentUser: any = useAuth();

  useEffect(() => {
    // console.log(currentUser?.uid);
    if (!currentUser?.uid) {
      alert("로그인 한 사람만 입장 가능합니다 로그인을 먼저해주세요");
      router.push("/signIn");
    }
  }, []);

  return <Component {...props} />;
};
