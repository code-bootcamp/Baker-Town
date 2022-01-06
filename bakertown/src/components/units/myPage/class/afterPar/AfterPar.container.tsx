import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { firebaseApp, useAuth } from "../../../../../../pages/_app";
import { getOnlyDate } from "../../../../../commons/libraries/getDate";
import AfterParPresenter from "./AfterPar.presenter";

const AfterParContainer = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [reviewContents, setReviewContents] = useState("");
  const [rating, setRating] = useState(3);
  const [myUser, setMyUser] = useState("");
  const currentUser = useAuth();
  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(async () => {
    if (!currentUser) return;
    const userQuery = doc(
      getFirestore(firebaseApp),
      "users",
      currentUser?.email
    );
    const userResult = await getDoc(userQuery);
    setMyUser(userResult.data());
  });

  const onClickReview = (index) => async () => {
    setIsOpen((prev) => !prev);
    // 현재 페이지 정보 불러오기
    const bakeryClass = doc(
      getFirestore(firebaseApp),
      "class",
      myUser?.afterPar?.[index].classRouter
      // String(router.query.classId) 클래스 아이디 값
    );
    const classResult = await getDoc(bakeryClass);

    // 내 정보 불러오기
    const userQuery = doc(
      getFirestore(firebaseApp),
      "users",
      currentUser?.email
    );
    const userResult = await getDoc(userQuery);
    console.log("내정보", userResult);
    // 현재 페이지의 리뷰정보
    const currentReview = classResult?.review?.reviewArray;

    // 내가 달고 싶은 리뷰
    const myReview = {
      review: {
        createdAt: getOnlyDate(new Date()),
        user: userResult.data().name,
        rating: rating,
        contents: reviewContents,
      },
    };

    // 내 리뷰
    const userReview = userResult.data().review;

    // 현재 페이지의 리뷰정보에 내 리뷰 넣기
    currentReview?.push(myReview);

    // 내 리뷰에 현재 클래스 아이디 및 리뷰정보 넣기
    const reviewInfo = {
      classRouter: myUser?.afterPar?.[index].classRouter,
      ...myReview,
    };
    console.log(userReview);
    userReview?.push(reviewInfo);
    await updateDoc(userQuery, {
      review: userReview,
    });
  };

  return (
    <AfterParPresenter
      isOpen={isOpen}
      onToggleModal={onToggleModal}
      onClickReview={onClickReview}
      setReviewContents={setReviewContents}
      rating={rating}
      setRating={setRating}
      userResult={myUser}
    />
  );
};

export default AfterParContainer;
