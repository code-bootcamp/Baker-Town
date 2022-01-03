import { useRouter } from "next/router";
import { useState } from "react";
import HeaderPresenter from "./Header.presenter";

const HeaderContainer = () => {
  const router = useRouter();
  const [keyWord, setKeyWord] = useState("");

  const onClickLogo = () => {
    router.push(`/`);
  };
  const onClickClass = () => {
    router.push(`/class`);
  };
  const onClickSearch = () => {
    router.push(`/class/search/${keyWord}`);
  };
  const onChangeKeyWord = (event) => {
    setKeyWord(event.target.value);
  };
  const onClickSignIn = () => {
    router.push(`/signIn`);
  };

  return (
    <HeaderPresenter
      logo={onClickLogo}
      class={onClickClass}
      search={onClickSearch}
      keyWord={onChangeKeyWord}
      signIn={onClickSignIn}
    />
  );
};

export default HeaderContainer;
