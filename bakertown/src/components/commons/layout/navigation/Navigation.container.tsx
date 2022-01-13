import { useRouter } from "next/router";
import NavigationPresenter from "./Navigation.presenter";

const NavigationContainer = () => {
  const router = useRouter();

  const navArray = [
    { text: "클래스", src: "/imgs/star.png", link: `/class` },
    { text: "스토어", src: "/imgs/star.png", link: `/store` },
    { text: "카테고리", src: "/imgs/star.png", link: `/category` },
    {
      text: "마이페이지",
      src: "/imgs/star.png",
      link: `/myPage/class/beforePar`,
    },
  ];
  const onClickNav = (el: { link: string }) => () => {
    router.push(`${el.link}`);
  };

  return <NavigationPresenter navArray={navArray} onClickNav={onClickNav} />;
};

export default NavigationContainer;
