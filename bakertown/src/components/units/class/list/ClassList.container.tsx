import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
  limit,
  startAt,
  orderBy,
  startAfter,
} from "@firebase/firestore";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { firebaseApp, GlobalContext } from "../../../../../pages/_app";
import ClassListPresenter from "./ClassList.presenter";

const ClassListContainer = () => {
  const router = useRouter();
  const [recent, setRecent] = useState([]);
  const [first, setFirst] = useState([]);
  const [second, setSecond] = useState([]);
  const categoryName = router.query.categoryName;
  const keyWord = router.query.classSearch;

  useEffect(async () => {
    // setCategoryName(String(router.query.categoryName));
    // console.log(categoryName);
    if (categoryName) {
    } else {
      // const recent = query(
      //   collection(getFirestore(firebaseApp), "class"),
      //   // where("heart", "!=", ""),
      //   orderBy("heart", "desc"),
      //   limit(2)
      //   // startAt("2022")
      // );
      // let result = await getDocs(recent);
      // console.log(
      //   "처음",
      //   result.docs.map((el) => el.data())
      // );
      // setFirst(result.docs.map((el) => el.data()));
      // const lastVisible = result.docs[result.docs.length - 1];
      // console.log("last", lastVisible.data());
      // const next = query(
      //   collection(getFirestore(firebaseApp), "class"),
      //   orderBy("heart", "desc"),
      //   startAfter(lastVisible),
      //   limit(2)
      // );
      // result = await getDocs(next);
      // console.log(
      //   "다음",
      //   result.docs.map((el) => el.data())
      // );

      const recent = query(
        collection(getFirestore(firebaseApp), "class"),
        where("createdAt", "!=", ""), //필터
        orderBy("createdAt", "desc"), //정렬
        limit(12) //숫자 제한
      );
      let result = await getDocs(recent);
      setFirst(result.docs.map((el) => el.data()));
      const lastVisible = result.docs[result.docs.length - 1]; //70번째 줄에서 본 것을 설정. 마지막으로 본 것.
      const next = query(
        collection(getFirestore(firebaseApp), "class"),
        orderBy("createdAt", "desc"),
        startAfter(lastVisible), //lastvisible한거의 그 다음부터 보게 함.
        limit(12)
      );
      result = await getDocs(next);
      setSecond(result.docs.map((el) => el.data()));
      setRecent(first);
    }

    if (keyWord) {
      const recent = query(
        collection(getFirestore(firebaseApp), "class"),
        where("className", "==", keyWord)
      );
      let result = await getDocs(recent);
      let docs = result.docs.map((el) => el.data());
      setRecent(docs);
      console.log(docs);
    }
  }, []);

  const onClickSideButton = (el: string) => () => {
    router.push(`/class/category/${el}`);
  };

  const onClickClassList = () => {
    router.push(`/class`);
  };

  const onClick1 = () => {
    setRecent(first);
  };
  const onClick2 = () => {
    setRecent(second);
  };

  return (
    <>
      <ClassListPresenter
        recent={recent}
        categoryName={categoryName}
        sideButton={onClickSideButton}
        classList={onClickClassList}
        click1={onClick1}
        click2={onClick2}
      />
    </>
  );
};

export default ClassListContainer;
