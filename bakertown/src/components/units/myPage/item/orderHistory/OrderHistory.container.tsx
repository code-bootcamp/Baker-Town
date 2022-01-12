import { doc, getDoc, getFirestore, updateDoc } from "@firebase/firestore";
import { useRouter } from "next/router";
import { SetStateAction, useEffect, useState } from "react";
import { firebaseApp, useAuth } from "../../../../../../pages/_app";
import { getOnlyDate } from "../../../../../commons/libraries/getDate";
import OrderHistoryPresenter from "./OrderHistory.presenter";

const OrderHistoryContainer = () => {
  const router = useRouter();
  const currentUser: any = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [reviewContents, setReviewContents] = useState("");
  const [rating, setRating] = useState(3);
  const [myUser, setMyUser] = useState<SetStateAction<any>>({
    name: "로딩중입니다",
    boughtItem: [],
  });

  const orderHistoryContents = async () => {
    if (myUser?.name === "로딩중입니다") {
      if (!currentUser) return;
      const userQuery = doc(
        getFirestore(firebaseApp),
        "users",
        currentUser?.email
      );
      const userResult: any = await getDoc(userQuery);
      setMyUser(userResult.data());
      console.log("aaa", userResult.data());
    }
  };

  useEffect(() => {
    orderHistoryContents();
  });

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const onClickReview = (index: number) => async () => {
    setIsOpen((prev) => !prev);
    if (!currentUser) {
      return;
    }
    // 해당하는 아이템 정보 불러오기
    const bakeryItem = doc(
      getFirestore(firebaseApp),
      "item",
      myUser?.boughtItem?.[index].itemRouter
    );
    const itemResult: any = await getDoc(bakeryItem);

    // 내 정보 불러오기
    const userQuery = doc(
      getFirestore(firebaseApp),
      "users",
      currentUser?.email
    );
    const userResult = await getDoc(userQuery);

    // 아이템의 리뷰정보
    const itemReview = itemResult?.data().itemReview;

    // 내가 달고 싶은 리뷰
    const myReview = {
      createdAt: getOnlyDate(new Date()),
      user: userResult.data()?.name,
      rating: rating,
      contents: reviewContents,
      itemRouter: myUser?.boughtItem?.[index].itemRouter,
      itemName: myUser?.boughtItem?.[index].itemName,
      category: myUser?.boughtItem?.[index].category,
    };

    // 내 리뷰
    const userReview = userResult.data()?.itemReview;
    console.log(myReview);
    // 해당 아이템의 리뷰정보에 내 리뷰 넣기
    itemReview?.push(myReview);
    await updateDoc(bakeryItem, {
      itemReview: userReview,
    });

    // 내 리뷰에 리뷰정보 넣기
    const reviewInfo = {
      // itemRouter: myUser?.boughtItem?.[index]?.itemRouter,
      ...myReview,
    };
    userReview?.push(reviewInfo);
    await updateDoc(userQuery, {
      itemReview: userReview,
    });
  };

  const onClickItemDetail = (el: any) => () => {
    router.push(`/store/detail/${el.itemRouter}`);
  };

  return (
    <OrderHistoryPresenter
      userResult={myUser}
      isOpen={isOpen}
      onToggleModal={onToggleModal}
      rating={rating}
      setRating={setRating}
      onClickReview={onClickReview}
      setReviewContents={setReviewContents}
      itemDetail={onClickItemDetail}
    />
  );
};

export default OrderHistoryContainer;
