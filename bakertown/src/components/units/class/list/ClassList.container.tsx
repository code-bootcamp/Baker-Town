import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "@firebase/firestore";
import { useEffect, useState } from "react";
import { firebaseApp } from "../../../../../pages/_app";
import ClassListPresenter from "./ClassList.presenter";

const ClassListContainer = () => {
  const [recent, setRecent] = useState([]);

  useEffect(async () => {
    const recent = query(
      collection(getFirestore(firebaseApp), "class"),
      where("createdAt", "!=", "")
    );
    let result = await getDocs(recent);
    let docs = result.docs.map((el) => el.data());
    console.log(docs);
    setRecent(docs);
  });

  return (
    <>
      <ClassListPresenter recent={recent} />
    </>
  );
};

export default ClassListContainer;
