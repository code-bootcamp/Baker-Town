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
        <S.ListWrapper>
          <S.ListItems button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText
              primary="대시보드"
              onClick={props.onClickDashBoardMainPage}
            />
          </S.ListItems>
          <S.ListItems button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="클래스 등록" />
          </S.ListItems>
          <S.ListItems button>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText
              primary="상품 등록"
              onClick={props.onClickDashBoardProductsWritePage}
            />
          </S.ListItems>
          <S.ListItems button>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="클래스 관리" />
          </S.ListItems>
          <S.ListItems button>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="상품 관리" />
          </S.ListItems>
          <S.ListItems button>
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
