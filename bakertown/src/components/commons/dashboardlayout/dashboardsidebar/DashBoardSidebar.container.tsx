import DashBoardSidebarPresenter from "./DashBoardSidebar.presenter";
import { useRouter } from "next/router";

const DashBoardSidebarContainer = () => {
  const router = useRouter();

  const onClickDashBoardMainPage = () => {
    router.push("/dashboard/main");
  };

  const onClickDashBoardProductsWritePage = () => {
    router.push("/dashboard/productswrite");
  };

  return (
    <DashBoardSidebarPresenter
      onClickDashBoardMainPage={onClickDashBoardMainPage}
      onClickDashBoardProductsWritePage={onClickDashBoardProductsWritePage}
    />
  );
};

export default DashBoardSidebarContainer;
