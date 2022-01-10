import { doc, getDoc, getFirestore } from "@firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { firebaseApp, useAuth } from "../../../../../../pages/_app";
import { getOnlyDate } from "../../../../../commons/libraries/getDate";
import OrderHistoryPresenter from "./OrderHistory.presenter";

const OrderHistoryContainer = () => {
  const router = useRouter();
  const currentUser = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [reviewContents, setReviewContents] = useState("");
  const [rating, setRating] = useState(3);
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
      console.log("aaa", userResult.data());
    }
  });

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const onClickReview = (index) => async () => {
    setIsOpen((prev) => !prev);

    // 해당하는 아이템 정보 불러오기
    const bakeryItem = doc(
      getFirestore(firebaseApp),
      "item",
      myUser?.boughtItem?.[index].itemRouter
    );
    const itemResult = await getDoc(bakeryItem);

    // 내 정보 불러오기
    const userQuery = doc(
      getFirestore(firebaseApp),
      "item",
      currentUser?.email
    );
    const userResult = await getDoc(userQuery);

    // 아이템의 리뷰정보
    const itemReview = itemResult?.data().itemReview;

    // 내가 달고 싶은 리뷰
    const myReview = {
      createdAt: getOnlyDate(new Date()),
      user: userResult.data().name,
      rating: rating,
      contents: reviewContents,
      item: myUser?.boughtItem?.[index].item,
      itemName: myUser?.boughtItem?.[index].itemName,
      category: myUser?.boughtItem?.[index].category,
    };

    // 내 리뷰
    const userReview = userResult.data().itemReview;

    // 해당 아이템의 리뷰정보에 내 리뷰 넣기
  };

  return (
    <OrderHistoryPresenter
      userResult={myUser}
      isOpen={isOpen}
      onToggleModal={onToggleModal}
      rating={rating}
      setRating={setRating}
      onClickReview={onClickReview}
    />
  );
};

export default OrderHistoryContainer;
