import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useAuth } from "../../../../../pages/_app";
import HeaderPresenter from "./Header.presenter";

const BOLD_CLASS = [`/class`, `/class/그 뒤에 모두 되는 걸로 해야함`];
const BOLD_STORE = [`/store`, `/store/그 뒤에 모두 되는 걸로 해야함`];

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

  const isBoldClass = BOLD_CLASS.includes(router.asPath);
  const isBoldStore = BOLD_STORE.includes(router.asPath);

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
      isBoldClass={isBoldClass}
      isBoldStore={isBoldStore}
    />
  );
};

export default HeaderContainer;
