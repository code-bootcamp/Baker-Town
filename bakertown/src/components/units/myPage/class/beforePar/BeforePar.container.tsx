import { doc, getDoc, getFirestore, updateDoc } from "@firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { firebaseApp, useAuth } from "../../../../../../pages/_app";
import BeforeParPresenter from "./BeforePar.presenter";

const BeforeParContainer = () => {
  const router = useRouter();
  const currentUser = useAuth();
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
    }
  });

  const onClickClassDetail = (el) => () => {
    console.log(el.classRouter);
    router.push(`/class/detail/${el.classRouter}`);
  };

  const onClickCancel = (el, index) => async () => {
    // 내 정보 불러오기
    const userQuery = doc(
      getFirestore(firebaseApp),
      "users",
      currentUser?.email
    );
    const userResult: any = await getDoc(userQuery);
    //나의 포인트 +calss가격
    const charge = userResult.data().mypoint + el.classPrice;
    await updateDoc(userQuery, { mypoint: charge });
    console.log(charge);
    // 내 참여예정 클래스
    const myBeforeParClass = userResult.data().beforePar;
    // 선택한 클래스 없애기
    myBeforeParClass.splice(index, 1);

    // 없앤 beforePar 배열을 올리기
    await updateDoc(userQuery, {
      beforePar: myBeforeParClass,
    });
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
