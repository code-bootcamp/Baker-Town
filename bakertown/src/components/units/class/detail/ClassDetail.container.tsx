import { useEffect, useState } from "react";
import ClassDetailPresenter from "./ClassDetail.presenter";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { firebaseApp } from "../../../../../pages/_app";
import { useRouter } from "next/router";

const ClassDetailContainer = () => {
  const router = useRouter();

  const [className, setClassName] = useState("");
  const [contents, setContents] = useState("");

  useEffect(async () => {
    const product = doc(
      getFirestore(firebaseApp),
      "class",
      String(router.query.classId)
    );
    const result = await getDoc(product);
    const aaa = result.data();
    setContents(aaa?.contents);
    console.log(aaa);
  });

  return <ClassDetailPresenter contents={contents} />;
};

export default ClassDetailContainer;
