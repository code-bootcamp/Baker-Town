import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useState } from "react";
import { firebaseApp, useAuth } from "../../../../../../pages/_app";
import { getOnlyDate } from "../../../../../commons/libraries/getDate";
import AfterParPresenter from "./AfterPar.presenter";

const AfterParContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const currentUser = useAuth();

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const onClickReview = async () => {
    // 현재 페이지 정보 불러오기
    const bakeryClass = doc(
      getFirestore(firebaseApp),
      "class"
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
        rating: 5,
        contents: "정말 재밌었어요!!!",
      },
    };

    // 현재 페이지의 리뷰정보에 내 리뷰 넣기
    currentReview?.push(myReview);

    // 내 리뷰
    const userReview = userResult.data().review;

    // 내 리뷰에 현재 클래스 아이디 및 리뷰정보 넣기
    const reviewInfo = {
      classRouter: router.query.classId,
      ...myReview,
    };
    console.log(userReview);
    userReview?.push(reviewInfo);
    await updateDoc(userQuery, {
      review: userReview,
    });
  };

  return <AfterParPresenter 
  isOpen={isOpen}
  onToggleModal={onToggleModal}
  onClickReview={onClickReview}
  />;
};

export default AfterParContainer;
