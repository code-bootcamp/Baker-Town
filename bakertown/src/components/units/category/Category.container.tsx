import { useRouter } from "next/router";
import CategoryPresenter from "./Category.presenter";

const CategoryContainer = () => {
  const router = useRouter();

  const classArray = [
    { text: "베이킹", link: "/class/category/베이킹" },
    { text: "마카롱", link: "/class/category/마카롱" },
    { text: "케이크", link: "/class/category/케이크" },
    { text: "쿠키", link: "/class/category/쿠키" },
    { text: "커피", link: "/class/category/커피" },
    { text: "쇼콜라", link: "/class/category/쇼콜라" },
  ];

  const storeArray = [
    { text: "냄비•프라이팬•솥", link: "/store/category/냄비•프라이팬•솥" },
    { text: "주방잡화", link: "/store/category/주방잡화" },
    { text: "커피•티용품", link: "/store/category/커피•티용품" },
    { text: "베이킹용품", link: "/store/category/베이킹용품" },
    { text: "이벤트", link: "/store/category/이벤트" },
  ];

  const classButton = (el: { link: string }) => () => {
    router.push(`${el.link}`);
  };
  const storeButton = (el: { link: string }) => () => {
    router.push(`${el.link}`);
  };

  return (
    <CategoryPresenter
      classArray={classArray}
      storeArray={storeArray}
      classButton={classButton}
      storeButton={storeButton}
    />
  );
};

export default CategoryContainer;
