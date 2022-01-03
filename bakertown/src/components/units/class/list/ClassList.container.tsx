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
  const [option, setOption] = useState(0);
  const categoryName = router.query.categoryName;
  const keyWord = router.query.classSearch;

  useEffect(async () => {
    console.log("유즈 이펙트!!!");

    //
    // 전체 클래스
    const first = query(
      collection(getFirestore(firebaseApp), "class"),
      where("createdAt", "!=", ""), // 필터
      orderBy("createdAt", "desc"), // 정렬
      limit(12) // 데이터 불러오는 개수 제한
    );
    const firstResult = await getDocs(first);
    console.log(firstResult.docs.map((el) => el.id));
    setFirst(firstResult.docs.map((el) => el.data()));
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

    //
    //
    //
    // 카테고리가 있을 때
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
      //
      // 카테고리가 설정된 인기순
      if (option === "2") {
        console.log("11");
        const popular = query(
          collection(getFirestore(firebaseApp), "class"),
          where("category", "==", categoryName), // 필터
          where("heart", "!=", ""),
          // orderBy("heart", "desc"), // 정렬
          limit(12) // 데이터 불러오는 개수 제한
        );
        console.log("22");
        const result = await getDocs(popular);
        console.log("33");
        console.log("인기순 결과", result);
        setRecent(
          result.docs.map((el) => {
            const data = el.data();
            data.id = el.id;
            return data;
          })
        );
        return;
      }
      //
      // 카테고리가 설정된 최신순
      else if (option === "3") {
        const recent = query(
          collection(getFirestore(firebaseApp), "class"),
          where("category", "==", categoryName), // 필터
          orderBy("createdAt", "desc"), // 정렬
          limit(12) // 데이터 불러오는 개수 제한
        );
        const result = await getDocs(recent);
        setRecent(
          result.docs.map((el) => {
            const data = el.data();
            data.id = el.id;
            return data;
          })
        );
      }
    }
    // 카테고리가 없을 때
    else {
      //
      // 인기순
      if (option === "2") {
        const popular = query(
          collection(getFirestore(firebaseApp), "class"),
          orderBy("heart", "desc"), // 정렬
          limit(12) // 데이터 불러오는 개수 제한
        );
        const result = await getDocs(popular);
        console.log("인기순 결과", result);
        setRecent(
          result.docs.map((el) => {
            const data = el.data();
            data.id = el.id;
            return data;
          })
        );
      }
      //
      // 최신순
      else if (option === "3") {
        const recent = query(
          collection(getFirestore(firebaseApp), "class"),
          orderBy("createdAt", "desc"), // 정렬
          limit(12) // 데이터 불러오는 개수 제한
        );
        const result = await getDocs(recent);
        setRecent(
          result.docs.map((el) => {
            const data = el.data();
            data.id = el.id;
            return data;
          })
        );
      }
    }

    // 검색어
    if (keyWord) {
      const recent = query(
        collection(getFirestore(firebaseApp), "class"),
        where("className", "==", keyWord)
      );
      let result = await getDocs(recent);
      let docs = result.docs.map((el) => {
        const data = el.data();
        data.id = el.id;
        return data;
      });
      setRecent(docs);
      console.log(docs);
    }
  }, [categoryName, option]);

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

  const onClickPage = (index) => () => {
    alert("aa");
  };

  const onClickOption = (event) => {
    setOption(event.target.id);

    console.log(option);
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
        clickPage={onClickPage}
        classDetail={onClickClassDetail}
        clickOption={onClickOption}
      />
    </>
  );
};

export default ClassListContainer;
