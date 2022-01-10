import {
  collection,
  query,
  getFirestore,
  where,
  orderBy,
  limit,
  getDocs,
} from "firebase/firestore";
import { firebaseApp } from "../../../../../pages/_app";
import { useEffect } from "react";
import StoreListPresenter from "./StoreList.presenter";

const StoreListContainer = () => {
  useEffect(async () => {
    // 전체 클래스
    const first = query(
      collection(getFirestore(firebaseApp), "item"),
      where("createdAt", "!=", ""), // 필터
      orderBy("createdAt", "desc"), // 정렬
      limit(12) // 데이터 불러오는 개수 제한
    );
    const firstResult = await getDocs(first);
    console.log(
      "찬밍",
      firstResult.docs.map((el) => el.ref.firestore.app)
    );
    setRecent(firstResult.docs.map((el) => el.data()));
  });

  return <StoreListPresenter />;
};

export default StoreListContainer;
