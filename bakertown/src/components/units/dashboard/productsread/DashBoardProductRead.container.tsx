import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "@firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { firebaseApp } from "../../../../../pages/_app";
import DashBoardProductsReadPresenter from "./DashBoardProductRead.presenter";

const DashBoardProductReadContainer = () => {
  const router = useRouter();
  const [recent, setRecent] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  useEffect(async () => {
    setCategoryName(String(router.query.categoryName));
    console.log(categoryName);
    const recent = query(
      collection(getFirestore(firebaseApp), "applyitems"),
      // where("category", "==", categoryName)
    );
    let result = await getDocs(recent);
    let docs = result.docs.map((el) => el.data());
    console.log(docs);
    setRecent(docs);
  }, []);

  return (
    <>
      <DashBoardProductsReadPresenter recent={recent} />
    </>
  );
};
export default DashBoardProductReadContainer;
