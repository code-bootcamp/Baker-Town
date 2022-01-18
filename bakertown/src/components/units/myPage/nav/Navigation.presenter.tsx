import * as S from "./Navigation.styles";
import { v4 as uuidv4 } from "uuid";

import { INavigationPresenterProps } from "./Navigation.types";
import UserPoint from "../../../commons/payment/MyPoint";

const NavigationPresenter = (props: INavigationPresenterProps) => {
  const myClass = ["참여 예정", "참여 완료", "나의 후기", "찜 목록"];
  const myItem = ["주문 내역", "장바구니", "아이템 후기"];
  return (
    <>
      <S.Sidebar>
        <S.TitleWrapper>
          <S.Title>
            {props.userResult?.name}
            <S.SettingImage
              className="Image"
              alt="mypage"
              src="/imgs/mypage.png"
              onClick={props.goMyPage}
            />
            <S.Logout onClick={props.handlesSignOut}>로그아웃</S.Logout>
          </S.Title>
          <S.SmallLine2></S.SmallLine2>
          <S.MyPointTitle>MY POINT</S.MyPointTitle>
          {/* <S.MyPoint>2018P</S.MyPoint> */}
          <UserPoint />
        </S.TitleWrapper>
        <S.SideTitle>CLASS</S.SideTitle>
        {myClass.map((el) => (
          <S.SidebarMyClass key={uuidv4()}>
            <S.SideButton onClick={props.onClickSideButton(el)}>
              {el}
            </S.SideButton>
            <S.SmallLine></S.SmallLine>
          </S.SidebarMyClass>
        ))}
        <S.SideTitle>ITEM</S.SideTitle>
        {myItem.map((el) => (
          <S.SidebarMyItem key={uuidv4()}>
            <S.SideButton onClick={props.onClickSideButton(el)}>
              {el}
            </S.SideButton>
            <S.SmallLine></S.SmallLine>
          </S.SidebarMyItem>
        ))}
      </S.Sidebar>
    </>
  );
};

export default NavigationPresenter;
