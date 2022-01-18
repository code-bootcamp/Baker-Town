import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuth, firebaseApp, logout } from "../../../../../pages/_app";
import { doc, getDoc, getFirestore } from "@firebase/firestore";
import NavigationPresenter from "./Navigation.presenter";
import React from "react";
import { message } from "antd";

const NavigationContainer = () => {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
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

  async function handlesSignOut() {
    setLoading(true);
    try {
      await logout();
      message.success("로그아웃 완료", 1.5);
      router.push("/");
    } catch {
      message.error("로그아웃 실패", 2);
    }
    setLoading(false);
  }
  return (
    <NavigationPresenter
      onClickSideButton={onClickSideButton}
      userResult={myUser}
      goMyPage={onClickMyPage}
      handlesSignOut={handlesSignOut}
    />
  );
};

export default NavigationContainer;
