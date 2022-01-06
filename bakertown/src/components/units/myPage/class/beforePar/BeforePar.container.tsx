import { doc, getDoc, getFirestore } from "@firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { firebaseApp, useAuth } from "../../../../../../pages/_app";
import BeforeParPresenter from "./BeforePar.presenter";

const BeforeParContainer = () => {
  const router = useRouter();
  const currentUser = useAuth();
  const [myUser, setMyUser] = useState({
    name: "로딩중입니다",
  });
  useEffect(async () => {
    if (myUser?.name === "로딩중입니다") {
      if (!currentUser) return;
      const userQuery = doc(
        getFirestore(firebaseApp),
        "users",
        currentUser?.email
      );
      const userResult = await getDoc(userQuery);
      setMyUser(userResult.data());
    }
  });

  const onClickClassDetail = (el) => () => {
    router.push(`/class/detail/${el.classRouter}}`);
  };

  return (
    <BeforeParPresenter userResult={myUser} classDetail={onClickClassDetail} />
  );
};

export default BeforeParContainer;
