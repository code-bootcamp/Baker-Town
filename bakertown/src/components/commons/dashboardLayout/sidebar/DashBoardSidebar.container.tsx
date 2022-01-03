import DashBoardSidebarPresenter from "./DashBoardSidebar.presenter";
import { useRouter } from "next/router";

const DashBoardSidebarContainer = () => {
  const router = useRouter();

  const onClickDashBoardMainPage = async () => {
    await router.push("/dashboard/main");
  };

  const onClickDashBoardClassWritePage = async () => {
    const result = await router.push("/dashboard/class/write");
    console.log(result);
  };

  const onClickDashBoardClassReadPage = async () => {
    await router.push("/dashboard/class/read");
  };

  const onClickDashBoardProductsWritePage = async () => {
    await router.push("/dashboard/item/write");
  };

  const onClickDashBoardProductReadPage = async () => {
    await router.push("/dashboard/item/read");
  };

  const onClickDashBoardMyPagePage = async () => {
    await router.push("/dashboard/mypage");
  };
  return (
    <DashBoardSidebarPresenter
      onClickDashBoardMainPage={onClickDashBoardMainPage}
      onClickDashBoardProductsWritePage={onClickDashBoardProductsWritePage}
      onClickDashBoardClassWritePage={onClickDashBoardClassWritePage}
      onClickDashBoardProductReadPage={onClickDashBoardProductReadPage}
      onClickDashBoardClassReadPage={onClickDashBoardClassReadPage}
      onClickDashBoardMyPagePage={onClickDashBoardMyPagePage}
    />
  );
};

export default DashBoardSidebarContainer;
