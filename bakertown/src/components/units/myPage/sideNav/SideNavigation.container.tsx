import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuth, firebaseApp } from "../../../../../pages/_app";
import { doc, getDoc, getFirestore } from "@firebase/firestore";
import SideNavigationPresenter from "./SideNavigation.presenter";

const SideNavigationContainer = () => {
  const router = useRouter();

  const currentUser: any = useAuth();
  const [myUser, setMyUser] = useState({
    name: "로딩중입니다",
  });

  const sideNavigationContents = async () => {
    if (myUser?.name === "로딩중입니다") {
      if (!currentUser) return;
      const userQuery = doc(
        getFirestore(firebaseApp),
        "users",
        currentUser?.email
      );
      const userResult: any = await getDoc(userQuery);
      setMyUser(userResult.data());
      console.log(userResult.data());
    }
  };

  useEffect(() => {
    sideNavigationContents();
  });

  const onClickSideButton = (el: string) => () => {
    if (el === "참여 완료") router.push(`/myPage/class/afterPar`);
    if (el === "참여 예정") router.push(`/myPage/class/beforePar`);
    if (el === "나의 후기") router.push(`/myPage/class/myReview`);
    if (el === "찜 목록") router.push(`/myPage/class/wishList`);
    if (el === "주문 내역") router.push(`/myPage/item/orderHistory`);
    if (el === "장바구니") router.push(`/myPage/item/basket`);
    if (el === "아이템 후기") router.push(`/myPage/item/review`);
  };

  const onClickMyPage = () => {
    router.push(`/myPage`);
  };

  return (
    <SideNavigationPresenter
      onClickSideButton={onClickSideButton}
      userResult={myUser}
      goMyPage={onClickMyPage}
    />
  );
};

export default SideNavigationContainer;
