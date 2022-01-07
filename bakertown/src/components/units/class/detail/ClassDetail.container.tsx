import { useEffect, useState, useRef } from "react";
import ClassDetailPresenter from "./ClassDetail.presenter";
import {
  getFirestore,
  getDoc,
  doc,
  updateDoc,
  collection,
} from "firebase/firestore";
import { firebaseApp, useAuth } from "../../../../../pages/_app";
import { useRouter } from "next/router";
import { getDate, getOnlyDate } from "../../../../commons/libraries/getDate";

const ClassDetailContainer = () => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  const [myClass, setMyClass] = useState({
    address: "내 주소!",
    category: "카테고리 예시",
    className: "제목 로딩중!!",
    contents: "내용 로딩중!!!",
    price: "",
  });
  const [myDate, setMyDate] = useState("");
  const [myIndex, setMyIndex] = useState(0);
  const [myName, setMyName] = useState("");

  const currentUser = useAuth();
  // if (process.browser) {
  //   const product = doc(
  //     getFirestore(firebaseApp),
  //     "class",
  //     String(router.query.classId)
  //   );
  //   const result = await getDoc(product);
  //   const aaa = result.data();
  //   setMyClass(aaa);
  // }
  useEffect(async () => {
    if (myClass?.address === "내 주소!") {
      // if (!classData) return;
      const product = doc(
        getFirestore(firebaseApp),
        "class",
        String(router.query.classId)
      );
      const result = await getDoc(product);
      const classData = result.data();
      console.log(classData);
      setMyClass(classData);
    }
  });

  const onClickReservation = async () => {
    // 현재 페이지 정보 불러오기
    const bakeryClass = doc(
      getFirestore(firebaseApp),
      "class",
      String(router.query.classId)
    );
    //
    // 내 정보 불러오기
    const userQuery = doc(
      getFirestore(firebaseApp),
      "users",
      currentUser?.email
    );
    const userResult = await getDoc(userQuery);

    //예약하기(구매)
    const buyInfo = {
      classRouter: router.query.classId,
      className: myClass?.className,
      price: myClass?.price,
    };
    console.log(buyInfo);

    // 현재 페이지의 예약정보
    const currentReservInfo = myClass?.applyClass;
    //현재 나의 포인트 - class가격
    const charge = userResult.data().mypoint - buyInfo.price;
    // 현재 페이지 예약정보에 내 이름 넣기
    currentReservInfo?.classArray?.[myIndex].class.membersName.push(
      userResult.data().name
    );
    //나의 포인트 잔액
    await updateDoc(userQuery, { mypoint: charge });
    console.log(charge);
    alert("예약완료");
    await updateDoc(bakeryClass, {
      applyClass: {
        ...currentReservInfo,
      },
    });

    // 내 참여예정 클래스
    const myBeforeParClass = userResult.data().beforePar;
    // currentReservInfo.classArray?.[0];

    // 내 참여예정 클래스에 현재 클래스 아이디 및 예약정보 넣기
    const dddd = {
      classRouter: router.query.classId,
      className: myClass?.className,
      category: myClass?.category,
      classPrice: Number(myClass?.price),
      ...currentReservInfo.classArray?.[0],
    };
    myBeforeParClass.push(dddd);
    await updateDoc(userQuery, {
      beforePar: myBeforeParClass,
    });
  };

  const onClickSelectDate = (el, index) => () => {
    // setMyDate(myClass?.applyClass?.classArray?.[index].class.date);
    console.log(el);
    alert(
      `${el?.class?.date} 날짜의 ${el?.class?.start} 시간을 선택하셨습니다!`
    );
    setMyIndex(index);
  };

  const onChangeName = (event) => {
    setMyName(event.target.value);
  };

  const onClickReview = async () => {
    // 현재 페이지 정보 불러오기
    const bakeryClass = doc(
      getFirestore(firebaseApp),
      "class",
      String(router.query.classId)
    );

    // 내 정보 불러오기
    const userQuery = doc(
      getFirestore(firebaseApp),
      "users",
      currentUser?.email
    );
    const userResult = await getDoc(userQuery);
    console.log("내정보", userResult);
    // 현재 페이지의 리뷰정보
    const currentReview = myClass?.review?.reviewArray;

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
    await updateDoc(bakeryClass, {
      review: currentReview,
    });

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

  const onClickHeart = async () => {
    // 현재 페이지 정보 불러오기
    const bakeryClass = doc(
      getFirestore(firebaseApp),
      "class",
      String(router.query.classId)
    );

    // 내 정보 불러오기
    const userQuery = doc(
      getFirestore(firebaseApp),
      "users",
      currentUser?.email
    );
    const userResult = await getDoc(userQuery);

    // 내 찜 목록
    const userHeart = userResult.data().heart;

    // 내 찜 목록에 현재 클래스 아이디 넣기
    const heartInfo = {
      classRouter: router.query.classId,
      className: myClass?.className,
      category: myClass?.category,
    };
    userHeart?.push(heartInfo);
    await updateDoc(userQuery, {
      heart: userHeart,
    });

    // 현재 페이지 찜 정보
    const classHeart = myClass?.heart + 1;
    // 현재 페이지의 찜 정보에 내 정보 넣기
    await updateDoc(bakeryClass, {
      heart: classHeart,
    });
  };

  // scroll tap

  const ReviewRef = useRef();
  const ProgramRef = useRef();
  const MapRef = useRef();
  console.log("째재", ReviewRef.current);

  const GoReview = () =>
    ReviewRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  const GoProgram = () =>
    ProgramRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  const GoMap = () =>
    MapRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  return (
    <ClassDetailPresenter
      myClass={myClass}
      reservation={onClickReservation}
      selectDate={onClickSelectDate}
      nameInput={onChangeName}
      review={onClickReview}
      heart={onClickHeart}
      GoProgram={GoProgram}
      GoMap={GoMap}
      GoReview={GoReview}
      ReviewRef={ReviewRef}
      ProgramRef={ProgramRef}
      MapRef={MapRef}
      isActive={isActive}
    />
  );
};

export default ClassDetailContainer;
