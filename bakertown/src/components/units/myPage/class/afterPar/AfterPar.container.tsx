import { message } from "antd";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { firebaseApp, useAuth } from "../../../../../../pages/_app";
import { getOnlyDate } from "../../../../../commons/libraries/getDate";
import AfterParPresenter from "./AfterPar.presenter";

const AfterParContainer = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(3);
  const [myUser, setMyUser] = useState<{ afterPar: any[] }>({
    afterPar: [],
  });
  const [count, setCount] = useState(0);
  const reviewRef: MutableRefObject<null> | any = useRef(null);

  const currentUser: any = useAuth();
  const onToggleModal = () => {
    console.log("히히");
    setIsOpen((prev) => !prev);
  };

  const afterParContents = async () => {
    if (!currentUser) {
      setCount((prev) => prev + 1);
      return;
    }
    const userQuery = doc(
      getFirestore(firebaseApp),
      "users",
      currentUser?.email
    );
    const userResult: any = await getDoc(userQuery);
    setMyUser(userResult.data());
  };

  useEffect(() => {
    afterParContents();
  }, [count]);

  // if (process.browser) {
  //   afterParContents();
  // }

  const onClickReview = (index: number) => async () => {
    // setReviewContents();
    // console.log("히히힣");
    const reviewContents = reviewRef.current.value;
    // return;
    setIsOpen((prev) => !prev);
    // 현재 페이지 정보 불러오기
    const bakeryClass = doc(
      getFirestore(firebaseApp),
      "class",
      myUser?.afterPar?.[1]?.classRouter
      // String(router.query.classId) 클래스 아이디 값
    );
    const classResult: any = await getDoc(bakeryClass);

    // 내 정보 불러오기
    const userQuery = doc(
      getFirestore(firebaseApp),
      "users",
      currentUser?.email
    );
    const userResult: any = await getDoc(userQuery);
    // 현재 페이지의 리뷰정보
    const currentReview = classResult?.data().review;

    // 내가 달고 싶은 리뷰
    const myReview = {
      createdAt: getOnlyDate(new Date()),
      user: userResult.data().name,
      rating: rating,
      contents: reviewContents,
      class: myUser?.afterPar?.[1].class,
      className: myUser?.afterPar?.[1].className,
      category: myUser?.afterPar?.[1].category,
    };

    // 내 리뷰
    const userReview = userResult.data().review;

    // 현재 페이지의 리뷰정보에 내 리뷰 넣기
    currentReview?.push(myReview);
    await updateDoc(bakeryClass, {
      review: currentReview,
    });

    // 내 리뷰에 현재 클래스 아이디 및 리뷰정보 넣기
    const reviewInfo = {
      classRouter: myUser?.afterPar?.[1].classRouter,
      images: classResult.data().images,
      ...myReview,
    };
    userReview?.push(reviewInfo);
    console.log("ggggg", userReview);
    await updateDoc(userQuery, {
      review: userReview,
    });
    message.success("리뷰가 작성되었습니다.");
  };

  const onClickClassDetail = (el: any) => () => {
    router.push(`/class/detail/${el.classRouter}`);
  };

  return (
    <AfterParPresenter
      isOpen={isOpen}
      onToggleModal={onToggleModal}
      onClickReview={onClickReview}
      rating={rating}
      setRating={setRating}
      userResult={myUser}
      classDetail={onClickClassDetail}
      reviewRef={reviewRef}
    />
  );
};

export default AfterParContainer;
