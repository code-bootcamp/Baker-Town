import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useAuth } from "../../../../../pages/_app";
import HeaderPresenter from "./Header.presenter";

declare const window: typeof globalThis & {
  event: any;
};

const HeaderContainer = () => {
  const router = useRouter();
  const [keyWord, setKeyWord] = useState("");

  const onClickLogo = () => {
    router.push(`/`);
  };
  const onClickClass = () => {
    router.push(`/class`);
  };
  const onClickStore = () => {
    router.push(`/store`);
  };
  const onClickSearch = () => {
    location.reload();
    router.push(`/class/search/${keyWord}`);
  };
  const onChangeKeyWord = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyWord(event.target.value);
  };
  const onClickSignIn = () => {
    router.push(`/signIn`);
  };
  const onClickHeartClass = () => {
    router.push(`/myPage/class/wishList`);
  };
  const onKeyUpEnterKey = () => {
    if (window.event.keyCode === 13) {
      onClickSearch();
    }
  };

  return (
    <HeaderPresenter
      logo={onClickLogo}
      class={onClickClass}
      search={onClickSearch}
      keyWord={onChangeKeyWord}
      signIn={onClickSignIn}
      heartClass={onClickHeartClass}
      store={onClickStore}
      enterKey={onKeyUpEnterKey}
    />
  );
};

export default HeaderContainer;
