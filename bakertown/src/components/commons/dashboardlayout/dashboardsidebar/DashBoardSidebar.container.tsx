import DashBoardSidebarPresenter from "./DashBoardSidebar.presenter";
import { useRouter } from "next/router";

const DashBoardSidebarContainer = () => {
  const router = useRouter();

  const onClickDashBoardMainPage = async () => {
    await router.push("/dashboard/main");
  };

  const onClickDashBoardProductsWritePage = async () => {
    await router.push("/dashboard/productswrite");
  };

  const onClickDashBoardClassWritePage = async () => {
    const result = await router.push("/dashboard/classwrite");
    console.log(result);
  };

  const onClickDashBoardProductReadPage = async () => {
    await router.push("/dashboard/productsread");
  };
  return (
    <DashBoardSidebarPresenter
      onClickDashBoardMainPage={onClickDashBoardMainPage}
      onClickDashBoardProductsWritePage={onClickDashBoardProductsWritePage}
      onClickDashBoardClassWritePage={onClickDashBoardClassWritePage}
      onClickDashBoardProductReadPage={onClickDashBoardProductReadPage}
    />
  );
};

export default DashBoardSidebarContainer;
