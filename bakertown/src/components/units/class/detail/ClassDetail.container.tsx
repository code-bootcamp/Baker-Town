import { useEffect, useState } from "react";
import ClassDetailPresenter from "./ClassDetail.presenter";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { firebaseApp } from "../../../../../pages/_app";
import { useRouter } from "next/router";

const ClassDetailContainer = () => {
  const router = useRouter();

  const [myClass, setMyClass] = useState({
    address: "",
    category: "",
    className: "",
    contents: "",
    patissier: "",
    price: "",
  });

  useEffect(async () => {
    const product = doc(
      getFirestore(firebaseApp),
      "class",
      String(router.query.classId)
    );
    const result = await getDoc(product);
    const aaa = result.data();
<!-- <<<<<<< 21/12/27-3 -->
    console.log(aaa);
    setMyClass({
      address: aaa?.address,
      category: aaa?.category,
      className: aaa?.className,
      contents: aaa?.contents,
      patissier: aaa?.patissier,
      price: aaa?.price,
    });
  }, []);
<!-- >>>>>>> develop -->

  return <ClassDetailPresenter myClass={myClass} />;
};

export default ClassDetailContainer;
