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
import {
  MouseEvent,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { firebaseApp, GlobalContext } from "../../../../../pages/_app";
import { useBottomScrollListener } from "react-bottom-scroll-listener";
import ClassListPresenter from "./ClassList.presenter";

const ClassListContainer = () => {
  const router = useRouter();
  const [recent, setRecent] = useState<SetStateAction<any>>([]);
  const [first, setFirst] = useState([]);
  const [second, setSecond] = useState([]);
  const [option, setOption] = useState(0);
  const categoryName = router.query.categoryName;
  const keyWord = router.query.classSearch;

  //   // 인기순
  //   if (option === "2") {
  //     const popular = query(
  //       collection(getFirestore(firebaseApp), "class"),
  //       orderBy("heart", "desc"), // 정렬
  //       limit(12) // 데이터 불러오는 개수 제한
  //     );
  //     const result = await getDocs(popular);
  //     console.log("인기순 결과", result);
  //     setRecent(
  //       result.docs.map((el) => {
  //         const data = el.data();
  //         data.id = el.id;
  //         return data;
  //       })
  //     );
  //   }
  //   //
  //   // 최신순
  //   else if (option === "3") {
  //     const recent = query(
  //       collection(getFirestore(firebaseApp), "class"),
  //       orderBy("createdAt", "desc"), // 정렬
  //       limit(12) // 데이터 불러오는 개수 제한
  //     );
  //     const result = await getDocs(recent);
  //     setRecent(
  //       result.docs.map((el) => {
  //         const data = el.data();
  //         data.id = el.id;
  //         return data;
  //       })
  //     );
  //   }
  // }
  // // 검색어
  // if (keyWord) {
  //   const recent = query(
  //     collection(getFirestore(firebaseApp), "class"),
  //     where("className", "==", keyWord)
  //   );
  //   let result = await getDocs(recent);
  //   let docs = result.docs.map((el) => {
  //     const data = el.data();
  //     data.id = el.id;
  //     return data;
  //   });
  //   setRecent(docs);
  //   console.log(docs);
  // }

  const [lastVisible, setLastVisible] = useState<SetStateAction<any>>();
  let myQuery = undefined;

  // 전체 클래스
  const getNextClass = () => {
    if (lastVisible === -1) {
      return;
    } else if (lastVisible) {
      myQuery = query(
        collection(getFirestore(firebaseApp), "class"),
        where("createdAt", "!=", ""),
        orderBy("createdAt", "desc"),
        limit(4),
        startAfter(lastVisible)
      );
    } else {
      myQuery = query(
        collection(getFirestore(firebaseApp), "class"),
        where("createdAt", "!=", ""),
        orderBy("createdAt", "desc"),
        limit(12)
      );
    }

    getDocs(myQuery).then((snapshot) => {
      setRecent((classList: any) => {
        const arr: any = [...classList];
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

  if (!categoryName) useBottomScrollListener(getNextClass);

  // 카테고리
  const getNextClassCategory = () => {
    console.log("시작");

    if (!router.query.categoryName) return;

    // 아이템 카테고리 변경 시 lastVisible값을 변경해줘야함

    if (lastVisible === -1) {
      return;
    } else if (lastVisible) {
      myQuery = query(
        collection(getFirestore(firebaseApp), "class"),
        where("category", "==", categoryName),
        orderBy("createdAt", "desc"),
        limit(4),
        startAfter(lastVisible)
      );
    } else {
      myQuery = query(
        collection(getFirestore(firebaseApp), "class"),
        where("category", "==", categoryName),
        orderBy("createdAt", "desc"),
        limit(12)
      );
    }

    getDocs(myQuery).then((snapshot) => {
      setRecent((itemList: any) => {
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

  const getNextClassSearch = async () => {
    console.log("서치 시작!");

    if (!router.query.classSearch) return;

    if (lastVisible === -1) {
      return;
    } else if (lastVisible) {
      myQuery = query(
        collection(getFirestore(firebaseApp), "class"),
        where("classNameArray", "array-contains", keyWord),
        orderBy("createdAt", "desc"),
        limit(4),
        startAfter(lastVisible)
      );
    } else {
      myQuery = query(
        collection(getFirestore(firebaseApp), "class"),
        where("classNameArray", "array-contains", keyWord),
        orderBy("createdAt", "desc"),
        limit(12)
      );
    }

    getDocs(myQuery).then((snapshot) => {
      setRecent((itemList: any) => {
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
    if (keyWord) {
      getNextClassSearch();
    } else if (router.query.categoryName) {
      getNextClassCategory();
    } else {
      getNextClass();
    }
  }, [categoryName, keyWord]);

  if (categoryName) useBottomScrollListener(getNextClassCategory);
  if (keyWord) useBottomScrollListener(getNextClassSearch);

  const onClickSideButton = (el: string) => () => {
    setLastVisible(undefined);
    setRecent([]);
    console.log("lllllaaaaaa", lastVisible);
    router.push(`/class/category/${el}`);
  };

  const onClickClassList = () => {
    router.push(`/class`);
  };

  const onClickClassDetail = (el: any) => () => {
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
        classDetail={onClickClassDetail}
        setLastVisible={setLastVisible}
      />
    </>
  );
};

export default ClassListContainer;
