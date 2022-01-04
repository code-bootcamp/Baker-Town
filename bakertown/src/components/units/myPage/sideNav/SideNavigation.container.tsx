import { useRouter } from "next/router";
import SideNavigationPresenter from "./sideNavigation.presenter";

const SideNavigationContainer = () => {
  const router = useRouter();

  const onClickSideButton = (el) => () => {
    if (el === "참여 완료") router.push(`/myPage/class/afterPar`);
    if (el === "참여 예정") router.push(`/myPage/class/beforePar`);
    if (el === "나의 후기") router.push(`/myPage/class/myReview`);
    if (el === "찜 목록") router.push(`/myPage/class/wishList`);
    if (el === "주문내역") router.push(`/myPage/item/orderHistory`);
    if (el === "장바구니") router.push(`/myPage/item/basket`);
    if (el === "리뷰") router.push(`/myPage/item/review`);
  };

  return <SideNavigationPresenter onClickSideButton={onClickSideButton} />;
};

export default SideNavigationContainer;
