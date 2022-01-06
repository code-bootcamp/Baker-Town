import { useEffect, useState } from "react";
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

  const [myClass, setMyClass] = useState([]);
  const [myDate, setMyDate] = useState("");
  const [myIndex, setMyIndex] = useState(0);
  const [myName, setMyName] = useState("");

  const currentUser = useAuth();

  useEffect(async () => {
    const product = doc(
      getFirestore(firebaseApp),
      "class",
      String(router.query.classId)
    );
    const result = await getDoc(product);
    const aaa = result.data();
    console.log(aaa);
    setMyClass(aaa);
  }, []);

  const onClickReservation = async () => {
    // 현재 페이지 정보 불러오기
    const bakeryClass = doc(
      getFirestore(firebaseApp),
      "class",
      String(router.query.classId)
    );

    // 현재 페이지의 예약정보
    const currentReservInfo = myClass?.applyClass;

    // 현재 페이지 예약정보에 내 이름 넣기
    currentReservInfo?.classArray?.[myIndex].class.membersName.push(myName);
    await updateDoc(bakeryClass, {
      applyClass: {
        ...currentReservInfo,
      },
    });

    //
    // 내 정보 불러오기
    const userQuery = doc(
      getFirestore(firebaseApp),
      "users",
      currentUser?.email
    );
    const userResult = await getDoc(userQuery);

    // 내 참여예정 클래스
    const myBeforeParClass = userResult.data().beforePar;

    // 내 참여예정 클래스에 현재 클래스 아이디 및 예약정보 넣기
    const dddd = {
      classRouter: router.query.classId,
      ...currentReservInfo.classArray?.[0],
    };
    myBeforeParClass.push(dddd);
    await updateDoc(userQuery, {
      beforePar: myBeforeParClass,
    });
  };

  const onClickSelectDate = (index) => () => {
    // setMyDate(myClass?.applyClass?.classArray?.[index].class.date);
    setMyIndex(index);
  };

  const onChangeName = (event) => {
    setMyName(event.target.value);
  };

  

  return (
    <ClassDetailPresenter
      myClass={myClass}
      reservation={onClickReservation}
      selectDate={onClickSelectDate}
      nameInput={onChangeName}
      review={onClickReview}
    />
  );
};

export default ClassDetailContainer;
