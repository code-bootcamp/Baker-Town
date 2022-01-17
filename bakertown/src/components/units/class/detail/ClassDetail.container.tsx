import { useEffect, useState, useRef, useMemo, ChangeEvent } from "react";
import ClassDetailPresenter from "./ClassDetail.presenter";
import { getFirestore, getDoc, doc, updateDoc } from "firebase/firestore";
import { firebaseApp, useAuth } from "../../../../../pages/_app";
import { useRouter } from "next/router";
import { getOnlyDate } from "../../../../commons/libraries/getDate";
import { getAuth } from "firebase/auth";
import { message } from "antd";

const ClassDetailContainer = () => {
  const router = useRouter();

  const [myClass, setMyClass] = useState({
    address: "내 주소!",
    query: "",
    category: "카테고리 예시",
    className: "제목 로딩중!!",
    contents: "내용 로딩중!!!",
    price: "",
    review: [],
    heart: 0,
    images: [],
    patissier: "",
    remarks: "",
    introduce: "",
    district: "",
    applyClass: {
      classArray: [],
    },
    patissierId: "",
  });
  const [myDate, setMyDate] = useState("");
  const [myIndex, setMyIndex] = useState(-1);
  const [myName, setMyName] = useState("");
  const [ratingAverage, setRatingAverage] = useState(0);
  const currentUser: any = useAuth();

  const classDetail = async () => {
    if (myClass?.address === "내 주소!") {
      // if (!classData) return;
      const product = doc(
        getFirestore(firebaseApp),
        "class",
        String(router.query.classId)
      );
      const result = await getDoc(product);
      const classData: any = result.data();
      console.log("클래스 정보", classData);
      setMyClass(classData);

      if (classData?.review?.length === 0) return;

      const arry = classData?.review?.map((el: any) => el.rating);
      // classData?.review?.[0]?.rating

      const reviewFunction =
        arry?.reduce((acc: any, cur: any) => acc + cur) / arry?.length;
      setRatingAverage(reviewFunction ? Number(reviewFunction) : Number("0"));
    }
  };

  useEffect(() => {
    classDetail();
  });

  const currentID = getAuth().currentUser?.uid;
  const onClickReservation = async () => {
    if (currentID) {
      if (myIndex === -1) {
        message.error("예약하실 날짜를 선택해주세요!!", 2);
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
      const userResult: any = await getDoc(userQuery);

      // 돈 없으면 내보내기
      if (userResult.data().mypoint < myClass?.price) {
        message.error("포인트가 부족합니다.", 2);
        return;
      }

      // 예약하기(구매)
      const buyInfo = {
        classRouter: router.query.classId,
        className: myClass?.className,
        price: myClass?.price,
      };

      // 현재 페이지의 예약정보
      const currentReservInfo: any = myClass?.applyClass;

      // 예약 마감 시 내보내기
      if (
        currentReservInfo?.classArray?.[myIndex].class.membersName.length ===
        Number(currentReservInfo?.classArray?.[myIndex].class.member)
      ) {
        alert("에약이 마감되었습니다.");
        return;
      }
      //현재 나의 포인트 - class가격
      const charge = userResult.data().mypoint - Number(buyInfo.price);

      // 현재 페이지 예약정보에 내 이름 넣기
      currentReservInfo?.classArray?.[myIndex].class.membersName.push(
        userResult.data().name
      );

      //나의 포인트 잔액
      await updateDoc(userQuery, { mypoint: charge });
      await updateDoc(bakeryClass, {
        applyClass: {
          ...currentReservInfo,
        },
      });

      // 내 참여예정 클래스
      const myBeforeParClass = userResult.data().afterPar;
      // currentReservInfo.classArray?.[0];

      console.log("히히,,,", myBeforeParClass);

      // 내 참여예정 클래스에 현재 클래스 아이디 및 예약정보 넣기
      const dddd = {
        classRouter: router.query.classId,
        className: myClass?.className,
        category: myClass?.category,
        classPrice: Number(myClass?.price),
        reservationIndex: myIndex,
        ...currentReservInfo.classArray?.[0],
      };
      console.log(dddd);
      myBeforeParClass.push(dddd);
      await updateDoc(userQuery, {
        afterPar: myBeforeParClass,
      });
      message.success("예약이 완료되었습니다.", 1.5);
      location.reload();
    } else {
      message.error("회원만 가능합니다.", 2);
    }
  };

  const onClickSelectDate = (el: any, index: number) => () => {
    // setMyDate(myClass?.applyClass?.classArray?.[index].class.date);
    message.success(
      `${el?.class?.date} 날짜의 ${el?.class?.start} 시간을 선택하셨습니다.`,
      2
    );
    setMyIndex(index);
  };

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
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
    const userResult: any = await getDoc(userQuery);
    // 현재 페이지의 리뷰정보
    const currentReview: any = myClass?.review;

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
    const userResult: any = await getDoc(userQuery);

    // 내 찜 목록
    const userHeart = userResult.data().heart;

    if (
      userHeart
        .map((el: { classRouter: string }) => el.classRouter)
        .includes(router.query.classId)
    ) {
      message.error("이미 찜목록에 담겨있습니다.", 1.5);
      return;
    }

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
    message.success("찜목록에 담았습니다.", 1.5);
    // location.reload();
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

  const ReviewRef: any = useRef();
  const ProgramRef: any = useRef();
  const MapRef: any = useRef();
  const testRef = useRef();

  // console.log("ProgramRef", ProgramRef);

  const [isSelectedProgram, setIsSelectedProgram] = useState(false);

  const callbackFunction = (entries: any) => {
    const [entry] = entries;
    setIsSelectedProgram(entry.isIntersecting);
  };

  const options = useMemo(() => {
    return {
      root: null,
      threshold: 0,
      rootMargin: "80%",
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

  const callbackFunctionMap = (entries: any) => {
    const [entry] = entries;
    setIsSelectedMap(entry.isIntersecting);
  };

  const mapoptions = useMemo(() => {
    return {
      root: null,
      threshold: 0.7,
      rootMargin: "0% 0% 0% 0%",
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

  const callbackFunctionReview = (entries: any) => {
    const [entry] = entries;
    SetisSelectedReview(entry.isIntersecting);
  };

  const reviewoptions = useMemo(() => {
    return {
      root: null,
      threshold: 0.3,
      // rootMargin: "-13%",
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

  const goChat = () => {
    router.push(
      `/myPage/chatRoom/${myClass?.patissierId}/${currentUser?.uid}/${router.query.classId}`
    );
  };

  const onClickShare = () => {
    navigator.clipboard.writeText(location.href);
    message.success("주소가 복사되었습니다.", 1.5);
  };

  return (
    <ClassDetailPresenter
      reservation={onClickReservation}
      selectDate={onClickSelectDate}
      nameInput={onChangeName}
      review={onClickReview}
      heart={onClickHeart}
      share={onClickShare}
      GoProgram={GoProgram}
      GoMap={GoMap}
      GoReview={GoReview}
      myClass={myClass}
      scrollPosition={scrollPosition}
      ReviewRef={ReviewRef}
      ProgramRef={ProgramRef}
      MapRef={MapRef}
      isSelectedProgram={isSelectedProgram}
      isSelectedMap={isSelectedMap}
      isSelectedReview={isSelectedReview}
      ratingAverage={ratingAverage}
      goChat={goChat}
    />
  );
};

export default ClassDetailContainer;
