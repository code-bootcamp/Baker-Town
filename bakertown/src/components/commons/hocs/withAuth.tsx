import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { auth, GlobalContext } from "../../../../pages/_app";

export const withAuth = (Component) => (props) => {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    alert("로그인 한 사람만 입장 가능합니다 로그인을 먼저해주세요");
    router.push("/signIn");
    return unsub;
  }, []);
  //   return currentUser;
  // }

  //   useEffect(() => {
  //     if (!localStorage.getItem("refreshToken")) {
  //       alert("로그인 한 사람만 입장 가능합니다 로그인을 먼저해주세요");
  //       router.push("/signIn");
  //     }
  //   }, []);

  return <Component {...props} />;
};
