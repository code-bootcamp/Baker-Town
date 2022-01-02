import { useEffect, useState } from "react";
import ClassDetailPresenter from "./ClassDetail.presenter";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { firebaseApp } from "../../../../../pages/_app";
import { useRouter } from "next/router";

const ClassDetailContainer = () => {
  const router = useRouter();

  const [myClass, setMyClass] = useState([]);

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
  return <ClassDetailPresenter myClass={myClass} />;
};

export default ClassDetailContainer;
