import {
  collection,
  getDocs,
  getFirestore,
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

const LandingContainer = () => {
  const router = useRouter();
  const [popular, setPoplular] = useState([]);
  const [recent, setRecent] = useState([]);
  const [keyWord, setKeyWord] = useState("");
  const currentUser = useAuth();

  useEffect(async () => {
    const popular = query(
      collection(getFirestore(firebaseApp), "class"),
      where("heart", ">", 0)
    );
    let result = await getDocs(popular);
    let docs = result.docs.map((el) => el.data());
    setPoplular(docs);

    const recent = query(
      collection(getFirestore(firebaseApp), "class"),
      where("createdAt", "!=", "")
    );
    result = await getDocs(recent);
    docs = result.docs.map((el) => el.data());
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
      />
    </>
  );
};

export default LandingContainer;
