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
  const [firstId, setFirstId] = useState([]);
  const [second, setSecond] = useState([]);
  const categoryName = router.query.categoryName;
  const keyWord = router.query.classSearch;

  useEffect(async () => {
    // setCategoryName(String(router.query.categoryName));
    // console.log(categoryName);
    if (categoryName) {
      console.log(categoryName);
      const category = query(
        collection(getFirestore(firebaseApp), "class"),
        where("category", "==", categoryName), // 필터
        // orderBy(categoryName, "desc"), // 정렬
        limit(12) // 데이터 불러오는 개수 제한
      );
      const result = await getDocs(category);
      setRecent(
        result.docs.map((el) => {
          const data = el.data();
          data.id = el.id;
          return data;
        })
      );
      console.log(result.docs.map((el) => el.data()));
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

      const first = query(
        collection(getFirestore(firebaseApp), "class"),
        where("createdAt", "!=", ""), // 필터
        orderBy("createdAt", "desc"), // 정렬
        limit(12) // 데이터 불러오는 개수 제한
      );
      const firstResult = await getDocs(first);
      console.log(firstResult.docs.map((el) => el.id));
      setFirst(firstResult.docs.map((el) => el.data()));
      setFirstId(firstResult.docs.map((el) => el.id));
      const lastVisible = firstResult.docs[firstResult.docs.length - 1]; // 70번째 줄에서 본 것을 설정. 마지막으로 본 것.
      const second = query(
        collection(getFirestore(firebaseApp), "class"),
        orderBy("createdAt", "desc"),
        startAfter(lastVisible), // lastvisible한거의 그 다음부터 보게 함.
        limit(12)
      );
      const secondResult = await getDocs(second);
      setSecond(secondResult.docs.map((el) => el.data()));
      setRecent(
        firstResult.docs.map((el) => {
          const data = el.data();
          data.id = el.id;
          return data;
        })
      );
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
  }, [categoryName]);

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

  const onClickClassDetail = (el) => () => {
    console.log(el.id);
    router.push(`/class/detail/${el.id}`);
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
        classDetail={onClickClassDetail}
      />
    </>
  );
};

export default ClassListContainer;
