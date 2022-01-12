import { useRouter } from "next/router";
import { useState, useEffect, SetStateAction } from "react";
import StorePresenter from "./Store.presenter";
import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
} from "@firebase/firestore";
import { firebaseApp, useAuth } from "../../../../pages/_app";

const StoreContainer = () => {
  const router = useRouter();
  const [popular, setPoplular] = useState<SetStateAction<any>>([]);
  const [recent, setRecent] = useState<SetStateAction<any>>([]);
  const currentUser = useAuth();

  const storeLanding = async () => {
    const popular = query(
      collection(getFirestore(firebaseApp), "item"),
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
      collection(getFirestore(firebaseApp), "item"),
      orderBy("createdAt", "desc")
    );
    result = await getDocs(recent);
    docs = result.docs.map((el) => {
      const data = el.data();
      data.id = el.id;
      return data;
    });
    setRecent(docs);
  };

  useEffect(() => {
    storeLanding();
  }, []);

  const recentList = () => {
    router.push(`/store/list`);
  };

  const SampleNextArrow = (el: any) => {
    const { className, style, onClick } = el;
    return (
      <div
        className="slick-next-arrow"
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = (el: any) => {
    const { currentSlide, style, onClick } = el;
    if (currentSlide === 0) {
      return null;
    } else {
      return (
        <div
          className="slick-before-arrow"
          style={{ ...style, display: "block" }}
          onClick={onClick}
        />
      );
    }
  };

  const settings = {
    dots: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const onClickStoreDetail = (el: any) => () => {
    router.push(`/store/detail/${el.id}`);
  };

  return (
    <StorePresenter
      settings={settings}
      recent={recent}
      popular={popular}
      recentList={recentList}
      storeDetail={onClickStoreDetail}
    />
  );
};

export default StoreContainer;
