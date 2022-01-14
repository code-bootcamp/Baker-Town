import { doc, getDoc, getFirestore, updateDoc } from "@firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { firebaseApp, useAuth } from "../../../../../pages/_app";
import DetailNavigationPresenter from "./DetailNavigation.presenter";

const DetailNavigationContainer = () => {
  const router = useRouter();
  const currentUser: any = useAuth();

  const [isVisible, setIsVisible] = useState(false);
  const [myIndex, setMyIndex] = useState(-1);
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
      // console.log("클래스 정보", classData);
      setMyClass(classData);
    }
  };

  useEffect(() => {
    classDetail();
  });

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
    // location.reload();
  };

  const onToggleModal = () => {
    setIsVisible((prev) => !prev);
  };
  const onClickReservation = async () => {
    if (currentUser) {
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
      const userResult: any = await getDoc(userQuery);

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
    } else {
      alert("회원만 가능합니다.");
    }
    setIsVisible((prev) => !prev);
  };
  const onClickSelectDate = (el: any, index: number) => () => {
    // setMyDate(myClass?.applyClass?.classArray?.[index].class.date);
    console.log(el);
    alert(
      `${el?.class?.date} 날짜의 ${el?.class?.start} 시간을 선택하셨습니다!`
    );
    setMyIndex(index);
  };

  return (
    <DetailNavigationPresenter
      heart={onClickHeart}
      onToggleModal={onToggleModal}
      isVisible={isVisible}
      myClass={myClass}
      selectDate={onClickSelectDate}
      reservation={onClickReservation}
    />
  );
};

export default DetailNavigationContainer;
