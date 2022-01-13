import {
  collection,
  query,
  getFirestore,
  where,
  orderBy,
  limit,
  getDocs,
  startAfter,
} from "firebase/firestore";
import { firebaseApp } from "../../../../../pages/_app";
import { SetStateAction, useEffect, useState } from "react";
import StoreListPresenter from "./StoreList.presenter";
import { useBottomScrollListener } from "react-bottom-scroll-listener";
import { useRouter } from "next/router";

const StoreListContainer = () => {
  const router = useRouter();
  const [recent, setRecent] = useState([]);
  // const [option, setOption] = useState<SetStateAction<number>>(0);
  const categoryName = router.query.categoryName;

  // useEffect(async () => {
  //   // 전체 클래스
  //   const first = query(
  //     collection(getFirestore(firebaseApp), "item"),
  //     where("createdAt", "!=", ""), // 필터
  //     orderBy("createdAt", "desc"), // 정렬
  //     limit(12) // 데이터 불러오는 개수 제한
  //   );
  //   const firstResult = await getDocs(first);

  //   setRecent(
  //     firstResult.docs.map((el) => {
  //       const data = el.data();
  //       data.id = el.id;
  //       return data;
  //     })
  //   );
  //   console.log(recent);
  // }, []);

  const [lastVisible, setLastVisible] = useState<SetStateAction<any>>();
  let myQuery = undefined;

  // 전체 아이템
  const getNextItem = () => {
    if (lastVisible === -1) {
      return;
    } else if (lastVisible) {
      myQuery = query(
        collection(getFirestore(firebaseApp), "item"),
        orderBy("createdAt", "desc"),
        limit(4),
        startAfter(lastVisible)
      );
    } else {
      myQuery = query(
        collection(getFirestore(firebaseApp), "item"),
        orderBy("createdAt", "desc"),
        limit(12)
      );
    }

    getDocs(myQuery).then((snapshot) => {
      setRecent((itemList) => {
        const arr: any = [...itemList];
        snapshot.forEach((doc) => {
          // arr.push(doc.data())
          // arr.push(doc.id);
          const data = doc.data();
          data.id = doc.id;
          arr.push(data);
        });
        console.log(recent);
        if (snapshot.docs.length === 0) {
          setLastVisible(-1);
          console.log("lastVisible -1!!!!", lastVisible);
        } else {
          setLastVisible(snapshot.docs[snapshot.docs.length - 1]);
          console.log("lastVisible에 뭔ㄱ ㅏ들어갔다", lastVisible);
          console.log("히히", lastVisible);
        }

        console.log("snapshot.docs!!!!", snapshot.docs.length);
        return arr;
      });
    });
  };

  if (!categoryName) useBottomScrollListener(getNextItem);

  // 카테고리
  const getNextItemCategory = () => {
    console.log("시작");

    if (!categoryName) return;

    // 아이템 카테고리 변경 시 lastVisible값을 변경해줘야함

    if (lastVisible === -1) {
      return;
    } else if (lastVisible) {
      myQuery = query(
        collection(getFirestore(firebaseApp), "item"),
        where("category", "==", categoryName),
        orderBy("createdAt", "desc"),
        limit(4),
        startAfter(lastVisible)
      );
    } else {
      myQuery = query(
        collection(getFirestore(firebaseApp), "item"),
        where("category", "==", categoryName),
        orderBy("createdAt", "desc"),
        limit(12)
      );
    }

    getDocs(myQuery).then((snapshot) => {
      setRecent((itemList) => {
        const arr: any = [...itemList];
        snapshot.forEach((doc) => {
          const data = doc.data();
          data.id = doc.id;
          arr.push(data);
        });
        console.log(recent);
        if (snapshot.docs.length === 0) {
          setLastVisible(-1);
        } else {
          setLastVisible(snapshot.docs[snapshot.docs.length - 1]);
        }
        return arr;
      });
    });
  };

  useEffect(() => {
    if (!categoryName) {
      getNextItem();
    } else {
      getNextItemCategory();
    }
  }, [categoryName]);

  if (categoryName) useBottomScrollListener(getNextItemCategory);

  const onClickSideButton = (el: string) => () => {
    setLastVisible(undefined);
    setRecent([]);
    router.push(`/store/category/${el}`);
  };

  const onClickDetail = (el: any) => () => {
    router.push(`/store/detail/${el.id}`);
  };

  const onClickItemList = () => {
    router.push(`/store/list`);
  };

  // const onClickOption = (event) => {
  //   setOption(event.target.id);
  // };

  return (
    <StoreListPresenter
      recent={recent}
      categoryName={categoryName}
      onClickSideButton={onClickSideButton}
      // onClickOption={onClickOption}
      onClickDetail={onClickDetail}
      itemList={onClickItemList}
    />
  );
};

export default StoreListContainer;
