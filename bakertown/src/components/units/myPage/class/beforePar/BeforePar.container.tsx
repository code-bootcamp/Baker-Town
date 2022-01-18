import { doc, getDoc, getFirestore, updateDoc } from "@firebase/firestore";
import { message } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { firebaseApp, useAuth } from "../../../../../../pages/_app";
import BeforeParPresenter from "./BeforePar.presenter";

const BeforeParContainer = () => {
  const router = useRouter();
  const currentUser: any = useAuth();
  const [myUser, setMyUser] = useState({
    name: "로딩중입니다",
    beforePar: [],
  });

  const beforeParContents = async () => {
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
    beforeParContents();
  });

  const onClickClassDetail = (el: any) => () => {
    router.push(`/class/detail/${el.classRouter}`);
  };

  const onClickCancel = (el: any, index: number) => async () => {
    // 내 정보 불러오기
    const userQuery = doc(
      getFirestore(firebaseApp),
      "users",
      currentUser?.email
    );
    const userResult: any = await getDoc(userQuery);
    // // 나의 포인트 + class가격
    const charge = Number(userResult.data().mypoint) + Number(el.classPrice);
    await updateDoc(userQuery, { mypoint: charge });

    // 클래스 불러오기
    const bakeryClass = doc(getFirestore(firebaseApp), "class", el.classRouter);
    const classResult: any = await getDoc(bakeryClass);

    // 예약 정보에서 내 이름 찾기
    const bbb = classResult.data().applyClass;
    // ?.[el.reservationInde]?.class?.membersName;
    bbb.classArray?.[el.reservationIndex]?.class.membersName?.splice(
      bbb.classArray?.[el.reservationIndex]?.class.membersName.indexOf(
        userResult.data().name
      ),
      1
    );
    await updateDoc(bakeryClass, {
      // applyClass?.classArray?.[el.reservationInde].class?.membersName = bbb
      applyClass: bbb,
    });

    // // 내 참여예정 클래스
    const myBeforeParClass = userResult.data().beforePar;
    // // 선택한 클래스 없애기
    myBeforeParClass.splice(index, 1);

    // // 없앤 beforePar 배열을 올리기
    await updateDoc(userQuery, {
      beforePar: myBeforeParClass,
    });
    message.success("예약이 취소되었습니다.");
    location.reload();
  };

  return (
    <BeforeParPresenter
      userResult={myUser}
      classDetail={onClickClassDetail}
      cancel={onClickCancel}
    />
  );
};

export default BeforeParContainer;
