import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import StorePresenter from "./Store.presenter";
import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
  where,
} from "@firebase/firestore";
import { firebaseApp, useAuth } from "../../../../pages/_app";

const StoreContainer = () => {
  const router = useRouter();
  const [popular, setPoplular] = useState([]);
  const [recent, setRecent] = useState([]);
  const currentUser = useAuth();

  useEffect(async () => {
    const popular = query(
      collection(getFirestore(firebaseApp), "item"),
      orderBy("heart", "desc")
    );
    let result = await getDocs(popular);
    let docs = result.docs.map((el) => el.data());
    console.log(docs);
    setPoplular(docs);

    const recent = query(
      collection(getFirestore(firebaseApp), "item"),
      orderBy("createdAt", "desc")
    );
    result = await getDocs(recent);
    docs = result.docs.map((el) => el.data());
    setRecent(docs);
  }, []);

  const recentList = () => {
    router.push(`/store/list`);
  };

  return (
    <StorePresenter recent={recent} popular={popular} recentList={recentList} />
  );
};

export default StoreContainer;
