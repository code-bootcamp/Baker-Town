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
import { useEffect, useState } from "react";
import StoreListPresenter from "./StoreList.presenter";
import { useRouter } from "next/router";

const StoreListContainer = () => {
  const router = useRouter();
  const [recent, setRecent] = useState([]);
  const [option, setOption] = useState(0);
  const categoryName = router.query.categoryName;

  useEffect(async () => {
    // 전체 클래스
    const first = query(
      collection(getFirestore(firebaseApp), "item"),
      where("createdAt", "!=", ""), // 필터
      orderBy("createdAt", "desc"), // 정렬
      limit(12) // 데이터 불러오는 개수 제한
    );
    const firstResult = await getDocs(first);

    setRecent(
      firstResult.docs.map((el) => {
        const data = el.data();
        data.id = el.id;
        return data;
      })
    );
    console.log(recent);
  }, []);

  const onClickSideButton = (el: string) => () => {
    router.push(`/store/category/${el}`);
  };

  const onClickDetail = (el: any) => () => {
    router.push(`/store/detail/${el.id}`);
  };

  const onClickItemList = () => {
    router.push(`/store/list`)
  }

  // const onClickOption = (event) => {
  //   setOption(event.target.id);
  // };

  return (
    <StoreListPresenter
      recent={recent}
      onClickSideButton={onClickSideButton}
      // onClickOption={onClickOption}
      onClickDetail={onClickDetail}
      categoryName={categoryName}
      itemList={onClickItemList}
    />
  );
};

export default StoreListContainer;
