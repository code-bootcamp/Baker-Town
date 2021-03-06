import { doc, getDoc, getFirestore } from "@firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { firebaseApp, useAuth } from "../../../../../../pages/_app";
import WishListPresenter from "./WishList.presenter";

const WishListContainer = () => {
  const router = useRouter();
  const currentUser: any = useAuth();
  const [myUser, setMyUser] = useState({
    name: "로딩중입니다",
    heart: [],
  });

  const wishListContens = async () => {
    if (myUser?.name === "로딩중입니다") {
      if (!currentUser) return;
      const userQuery = doc(
        getFirestore(firebaseApp),
        "users",
        currentUser?.email
      );
      const userResult: any = await getDoc(userQuery);
      setMyUser(userResult.data());
    }
  };

  useEffect(() => {
    wishListContens();
  });

  const onClickClassDetail = (el: any) => () => {
    router.push(`/class/detail/${el.classRouter}`);
  };

  return (
    <WishListPresenter userResult={myUser} classDetail={onClickClassDetail} />
  );
};

export default WishListContainer;
