import { useEffect, useState, useRef, useMemo } from "react";
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
import { IClassDetailPresenterProps } from "./ClassDetail.types";

const ClassDetailContainer = (props: IClassDetailPresenterProps) => {
  const router = useRouter();

  const [myClass, setMyClass] = useState({
    address: "내 주소!",
    query: "",
    category: "카테고리 예시",
    className: "제목 로딩중!!",
    contents: "내용 로딩중!!!",
    price: "",
  });
  const [myDate, setMyDate] = useState("");
  const [myIndex, setMyIndex] = useState(-1);
  const [myName, setMyName] = useState("");
  const [ratingAverage, setRatingAverage] = useState(0);
  const currentUser: any = useAuth();
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
      console.log("클래스 정보", classData);
      setMyClass(classData);

      if (classData?.review.length === 0) return;

      const arry = classData?.review?.map((el) => el.rating);
      // classData?.review?.[0]?.rating
      console.log("arry", arry);

      const reviewFunction =
        arry?.reduce((acc, cur) => acc + cur) / arry?.length;
      setRatingAverage(reviewFunction ? Number("") : Number("0"));
    }
  });

  const onClickReservation = async () => {
    if (myIndex === -1) {
      alert("예약하실 날짜를 선택해주세요!!");
      return;
    }
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

    // 돈 없으면 내보내기
    if (userResult.data().mypoint < myClass?.price) {
      alert("포인트가 부족합니다.");
      return;
    }

    // 예약하기(구매)
    const buyInfo = {
      classRouter: router.query.classId,
      className: myClass?.className,
      price: myClass?.price,
    };
    console.log(buyInfo);

    // 현재 페이지의 예약정보
    const currentReservInfo = myClass?.applyClass;

    // 예약 마감 시 내보내기
    if (
      currentReservInfo?.classArray?.[myIndex].class.membersName.length ===
      Number(currentReservInfo?.classArray?.[myIndex].class.member)
    ) {
      alert("에약이 마감되었습니다.");
      return;
    }
    //현재 나의 포인트 - class가격
    const charge = userResult.data().mypoint - buyInfo.price;

    // 현재 페이지 예약정보에 내 이름 넣기
    currentReservInfo?.classArray?.[myIndex].class.membersName.push(
      userResult.data().name
    );
    //나의 포인트 잔액
    await updateDoc(userQuery, { mypoint: charge });
    console.log(charge);
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
      reservationIndex: myIndex,
      ...currentReservInfo.classArray?.[0],
    };
    myBeforeParClass.push(dddd);
    await updateDoc(userQuery, {
      beforePar: myBeforeParClass,
    });
    alert("예약이 완료되었습니다.");
    location.reload();
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
    alert("클래스를 찜 목록에 담았습니다!");
    location.reload();
  };

  // 반응형 헤더

  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    // console.log(scrollPosition);
  });

  // scroll tap

  // const ReviewRef = useRef();
  // const ProgramRef = useRef();
  // const MapRef = useRef();

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

  // 스크롤 지나면 글자 굵기 변경
  //program ref

  const ReviewRef = useRef();
  const ProgramRef = useRef();
  const MapRef = useRef();
  const testRef = useRef();

  // console.log("ProgramRef", ProgramRef);

  const [isSelectedProgram, setIsSelectedProgram] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsSelectedProgram(entry.isIntersecting);
  };

  const options = useMemo(() => {
    return {
      root: null,
      threshold: 0,
      rootMargin: "1000px 0px 0px 0px",
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    const currentTargetProgram = ProgramRef.current;
    if (currentTargetProgram) observer.observe(currentTargetProgram);

    return () => {
      if (currentTargetProgram) observer.unobserve(currentTargetProgram);
    };
  }, [ProgramRef, options]);

  // map ref

  const [isSelectedMap, setIsSelectedMap] = useState(false);

  const callbackFunctionMap = (entries) => {
    const [entry] = entries;
    setIsSelectedMap(entry.isIntersecting);
  };

  const mapoptions = useMemo(() => {
    return {
      root: null,
      threshold: 0,
      rootMargin: "0px 0px -1000px 0px",
    };
  }, []);

  useEffect(() => {
    const observerMap = new IntersectionObserver(
      callbackFunctionMap,
      mapoptions
    );
    const currentTargetMap = MapRef.current;
    if (currentTargetMap) observerMap.observe(currentTargetMap);

    return () => {
      if (currentTargetMap) observerMap.unobserve(currentTargetMap);
    };
  }, [MapRef, mapoptions]);

  // review ref

  const [isSelectedReview, SetisSelectedReview] = useState(false);

  const callbackFunctionReview = (entries) => {
    const [entry] = entries;
    SetisSelectedReview(entry.isIntersecting);
  };

  const reviewoptions = useMemo(() => {
    return {
      root: null,
      threshold: 0,
      rootMargin: "0px 0px -1000px 0px",
    };
  }, []);

  useEffect(() => {
    const observerReview = new IntersectionObserver(
      callbackFunctionReview,
      reviewoptions
    );
    const currentTargetReview = ReviewRef.current;
    if (currentTargetReview) observerReview.observe(currentTargetReview);

    return () => {
      if (currentTargetReview) observerReview.unobserve(currentTargetReview);
    };
  }, [ReviewRef, reviewoptions]);

  return (
    <ClassDetailPresenter
      myClass={myClass}
      reservation={onClickReservation}
      selectDate={onClickSelectDate}
      nameInput={onChangeName}
      review={onClickReview}
      heart={onClickHeart}
      GoProgram={GoProgram}
      scrollPosition={scrollPosition}
      GoMap={GoMap}
      GoReview={GoReview}
      ReviewRef={ReviewRef}
      ProgramRef={ProgramRef}
      MapRef={MapRef}
      ReviewRef={ReviewRef}
      isSelectedProgram={isSelectedProgram}
      isSelectedMap={isSelectedMap}
      isSelectedReview={isSelectedReview}
      ratingAverage={ratingAverage}
    />
  );
};

export default ClassDetailContainer;
