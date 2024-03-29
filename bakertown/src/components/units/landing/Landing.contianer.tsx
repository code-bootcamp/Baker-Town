import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
  where,
} from "@firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState, ChangeEvent, SetStateAction } from "react";
import { firebaseApp, useAuth } from "../../../../pages/_app";
import LandingPresenter from "./Landing.presenter";

declare const window: typeof globalThis & {
  event: any;
};

const LandingContainer = () => {
  const router = useRouter();
  const [popular, setPoplular] = useState<SetStateAction<any>>([]);
  const [recent, setRecent] = useState<SetStateAction<any>>([]);
  const [promotion, setPromotion] = useState<any>([]);
  const [promotion2, setPromotion2] = useState<any>([]);
  const [keyWord, setKeyWord] = useState("");
  const currentUser: any = useAuth();

  const popularClass = async () => {
    const popular = query(
      collection(getFirestore(firebaseApp), "class"),
      orderBy("heart", "desc")
    );
    const result = await getDocs(popular);
    const docs = result.docs.map((el) => {
      const data = el.data();
      data.id = el.id;
      return data;
    });
    setPoplular(docs);
  };

  const recentClass = async () => {
    const recent = query(
      collection(getFirestore(firebaseApp), "class"),
      orderBy("createdAt", "desc")
    );
    const result = await getDocs(recent);
    const docs = result.docs.map((el) => {
      const data = el.data();
      data.id = el.id;
      return data;
    });
    setRecent(docs);
  };

  const promotionClass = async () => {
    const promotion = query(
      collection(getFirestore(firebaseApp), "class"),
      where("promotion", "!=", "")
    );
    const result = await getDocs(promotion);
    const docs = result.docs.map((el) => {
      const data = el.data();
      data.id = el.id;
      return data;
    });
    setPromotion(docs);
  };

  const promotionItem = async () => {
    const promotion = query(
      collection(getFirestore(firebaseApp), "item"),
      where("promotion", "!=", "")
    );
    const result = await getDocs(promotion);
    const docs = result.docs.map((el) => {
      const data = el.data();
      data.id = el.id;
      return data;
    });
    setPromotion2(docs);
  };

  useEffect(() => {
    popularClass();
    recentClass();
    promotionClass();
    promotionItem();
  }, []);

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

  const onClickCategory = (event: any) => {
    router.push(`/class/category/${event.target.value}`);
  };

  const onKeyUpEnterKey = () => {
    if (window.event.keyCode === 13) {
      onClickSearch();
    }
  };

  const onClickClassDetail = (el: any) => () => {
    router.push(`/class/detail/${el.id}`);
  };

  const onClickItemDetail = (el: any) => () => {
    router.push(`/store/detail/${el.id}`);
  };

  const onClickBakingList = () => {
    router.push(`/class/category/베이킹`);
  };

  const SampleNextArrow = (props: any) => {
    const { style, onClick } = props;
    return (
      <div
        className="slick-next-arrow"
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = (props: any) => {
    const { currentSlide, style, onClick } = props;
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
  const settings2 = {
    dots: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: false,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  const settings3 = {
    dots: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <LandingPresenter
        popular={popular}
        recent={recent}
        promotion={promotion}
        promotion2={promotion2}
        currentUser={currentUser}
        settings={settings}
        settings2={settings2}
        settings3={settings3}
        landing={onClickLanding}
        classList={onClickList}
        storeList={onClickStore}
        heartClass={onClickHeartClass}
        signIn={onClickSignIn}
        keyWord={onChangeKeyWord}
        search={onClickSearch}
        goPopular={onClickPopular}
        goRecent={onClickRecent}
        category={onClickCategory}
        enterKey={onKeyUpEnterKey}
        classDetail={onClickClassDetail}
        itemDetail={onClickItemDetail}
        bakingList={onClickBakingList}
      />
    </>
  );
};

export default LandingContainer;
