import { useRouter } from "next/router";
import { useAuth } from "../../../../../pages/_app";
import NavigationPresenter from "./Navigation.presenter";

const NavigationContainer = () => {
  const router = useRouter();
  const currentUser = useAuth();
  const navArray = [
    { text: "홈", src: "/imgs/mobile/house.png", link: `/` },
    { text: "카테고리", src: "/imgs/mobile/square.png", link: `/category` },
    {
      text: "채팅",
      src: "/imgs/mobile/messages.png",
      link: `/myPage/chatListMobile`,
    },
    {
      text: "내정보",
      src: "/imgs/mobile/info.png",
      link: `/myPage/nav`,
    },
  ];

  const onClickNav = (el: { link: string }) => () => {
    if (el.text === "내정보") {
      if (!currentUser) router.push(`/signIn`);
      return;
    }
    router.push(`${el.link}`);
  };

  return <NavigationPresenter navArray={navArray} onClickNav={onClickNav} />;
};

export default NavigationContainer;
