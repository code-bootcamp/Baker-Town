import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
  where,
} from "@firebase/firestore";
import { sliderClasses } from "@mui/material";
import { useRouter } from "next/router";
import {
  useEffect,
  useState,
  useRef,
  MutableRefObject,
  ChangeEvent,
} from "react";
import { firebaseApp, useAuth } from "../../../../pages/_app";
import LandingPresenter from "./Landing.presenter";

declare const window: typeof globalThis & {
  event: any;
};

const LandingContainer = () => {
  const router = useRouter();
  const [popular, setPoplular] = useState([]);
  const [recent, setRecent] = useState([]);
  const [keyWord, setKeyWord] = useState("");
  const currentUser = useAuth();

  useEffect(async () => {
    const popular = query(
      collection(getFirestore(firebaseApp), "class"),
      orderBy("heart", "desc")
    );
    let result = await getDocs(popular);
    let docs = result.docs.map((el) => {
      const data = el.data();
      data.id = el.id;
      return data;
    });
    setPoplular(docs);

    const recent = query(
      collection(getFirestore(firebaseApp), "class"),
      where("createdAt", "!=", "")
    );
    result = await getDocs(recent);
    docs = result.docs.map((el) => {
      const data = el.data();
      data.id = el.id;
      return data;
    });
    setRecent(docs);
  }, []);

  const clickLeft = () => {
    console.log("clickLeft");
  };

  const clickRight = () => {
    console.log("clickRight");
  };

  const onClickLanding = () => {
    router.push(`/`);
  };

  const onClickList = () => {
    router.push(`/class`);
  };

  const onClickStore = () => {
    router.push(`/store`);
  };

  const onClickHeartClass = () => {
    router.push(`/myPage/class/wishList`);
  };

  const onClickSignIn = () => {
    router.push(`/signIn`);
  };

  const onChangeKeyWord = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyWord(event.target.value);
  };

  const onClickSearch = () => {
    router.push(`/class/search/${keyWord}`);
  };

  const onClickPopular = () => {
    router.push(`/class`);
  };

  const onClickRecent = () => {
    router.push(`/class`);
  };

  const onClickCategory = (event) => {
    router.push(`/class/category/${event.target.value}`);
  };

  const onKeyUpEnterKey = () => {
    if (window.event.keyCode === 13) {
      onClickSearch();
    }
  };

  const onClickClassDetail = (el) => () => {
    router.push(`/class/detail/${el.id}`);
  };

  const onClickBakingList = () => {
    router.push(`/class/category/베이킹`);
  };

  return (
    <>
      <LandingPresenter
        popular={popular}
        recent={recent}
        clickLeft={clickLeft}
        clickRight={clickRight}
        currentUser={currentUser}
        landing={onClickLanding}
        classList={onClickList}
        storeList={onClickStore}
        heartClass={onClickHeartClass}
        signIn={onClickSignIn}
        keyWord={onChangeKeyWord}
        search={onClickSearch}
        goPopular={onClickPopular}
        geRecent={onClickRecent}
        category={onClickCategory}
        enterKey={onKeyUpEnterKey}
        classDetail={onClickClassDetail}
        bakingList={onClickBakingList}
      />
    </>
  );
};

export default LandingContainer;
