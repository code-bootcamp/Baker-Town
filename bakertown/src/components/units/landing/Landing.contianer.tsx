import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "@firebase/firestore";
import { sliderClasses } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import { firebaseApp } from "../../../../pages/_app";
import LandingPresenter from "./Landing.presenter";

const LandingContainer = () => {
  const [popular, setPoplular] = useState([]);
  const [recent, setRecent] = useState([]);

  useEffect(async () => {
    const popular = query(
      collection(getFirestore(firebaseApp), "class"),
      where("heart", ">", 0)
    );
    let result = await getDocs(popular);
    let docs = result.docs.map((el) => el.data());
    console.log(docs);
    setPoplular(docs);

    const recent = query(
      collection(getFirestore(firebaseApp), "class"),
      where("createdAt", "!=", "")
    );
    result = await getDocs(recent);
    docs = result.docs.map((el) => el.data());
    console.log(docs);
    setRecent(docs);
  }, []);

  const myRef = useRef();

  function prevClick() {
    const slide = myRef.current;
    console.log("slide", slide);
    slide.scrollLeft -= slide.offsetWidth;

    if (slide.scrollLeft <= 0) {
      slide.scrollLeft = slide.offsetWidth;
    }
  }

  function nextClick() {
    const slide = myRef.current;
    console.log("slide", slide);
    slide.scrollLeft += slide.offsetWidth;
    if (slide.scrollLeft >= 0) {
      slide.scrollLeft = slide.offsetWidth;
    }
  }

  return (
    <>
      <LandingPresenter
        popular={popular}
        recent={recent}
        prevClick={prevClick}
        nextClick={nextClick}
        myRef={myRef}
      />
    </>
  );
};

export default LandingContainer;
