import * as S from "./DashBoardSidebar.styles";
import { IDashBoardSidebarProps } from "./DashBoardSidebar.types";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";

const DashBoardSidebarPresenter = (props: IDashBoardSidebarProps) => {
  return (
    <>
      <S.Wrapper>
        <S.LogoWrapper>
          <S.LogoImage
            src="/imgs/logo.png"
            onClick={props.onClickLandingPage}
          ></S.LogoImage>
        </S.LogoWrapper>
        <S.ListWrapper>
          <S.ListItems onClick={props.onClickDashBoardMainPage}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="메인 보드" />
          </S.ListItems>
          <S.ListItems onClick={props.onClickDashBoardClassWritePage}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="클래스 등록" />
          </S.ListItems>
          <S.ListItems onClick={props.onClickDashBoardClassReadPage}>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="클래스 관리" />
          </S.ListItems>
          <S.ListItems onClick={props.onClickDashBoardProductsWritePage}>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="상품 등록" />
          </S.ListItems>
          <S.ListItems onClick={props.onClickDashBoardProductReadPage}>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="상품 관리" />
          </S.ListItems>
          <S.ListItems onClick={props.onClickDashBoardMyPagePage}>
            <ListItemIcon>
              <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="마이페이지" />
          </S.ListItems>
        </S.ListWrapper>
      </S.Wrapper>
    </>
  );
};

export default DashBoardSidebarPresenter;
