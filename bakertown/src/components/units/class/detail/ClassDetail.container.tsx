import { useEffect, useState } from "react";
import ClassDetailPresenter from "./ClassDetail.presenter";
import { getFirestore, getDoc, doc, updateDoc } from "firebase/firestore";
import { firebaseApp } from "../../../../../pages/_app";
import { useRouter } from "next/router";

const ClassDetailContainer = () => {
  const router = useRouter();

  const [myClass, setMyClass] = useState([]);
  const [myDate, setMyDate] = useState("");

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
    const bakeryClass = doc(
      getFirestore(firebaseApp),
      "class",
      String(router.query.classId)
    );
    console.log(myDate);
    const result = await getDoc(bakeryClass);
    const myIndex = result.data().applyClass;
    myIndex[0]?.[String(myDate)]?.first?.membersName?.push("나리");
    console.log(myIndex);

    const query = await updateDoc(bakeryClass, {
      applyClass: myIndex,
    });
  };

  const onClickSelectDate = (event) => {
    setMyDate(event.target.id);
    console.log(event.target.id);
  };

  return (
    <ClassDetailPresenter
      myClass={myClass}
      reservation={onClickReservation}
      selectDate={onClickSelectDate}
    />
  );
};

export default ClassDetailContainer;
