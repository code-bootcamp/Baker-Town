import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
  limit,
} from "@firebase/firestore";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { firebaseApp, GlobalContext } from "../../../../../pages/_app";
import ClassListPresenter from "./ClassList.presenter";

const ClassListContainer = () => {
  const router = useRouter();
  const [recent, setRecent] = useState([]);
  const categoryName = router.query.categoryName;
  const keyWord = router.query.classSearch;

  useEffect(async () => {
    // setCategoryName(String(router.query.categoryName));
    // console.log(categoryName);
    if (categoryName) {
      const recent = query(
        collection(getFirestore(firebaseApp), "class"),
        where("category", "==", categoryName)
      );
      let result = await getDocs(recent);
      let docs = result.docs.map((el) => el.data());
      setRecent(docs);
    } else {
      const recent = query(
        collection(getFirestore(firebaseApp), "class"),
        where("createdAt", "!=", "")
        // limit(3)
      );
      let result = await getDocs(recent);
      let docs = result.docs.map((el) => el.data());
      setRecent(docs);
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
    // console.log(docs);
  }, []);

  const onClickSideButton = (el: string) => () => {
    router.push(`/class/category/${el}`);
  };

  const onClickClassList = () => {
    router.push(`/class`);
  };

  return (
    <>
      <ClassListPresenter
        recent={recent}
        categoryName={categoryName}
        sideButton={onClickSideButton}
        classList={onClickClassList}
      />
    </>
  );
};

export default ClassListContainer;
