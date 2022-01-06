import * as S from "./SideNavigation.styles";
import { v4 as uuidv4 } from "uuid";
import MyPoint from "../../../commons/payment/MyPoint";

const SideNavigationPresenter = (props) => {
  const myClass = ["참여 예정", "참여 완료", "나의 후기", "찜 목록"];
  const myItem = ["주문 내역", "장바구니", "나의 후기"];
  return (
    <>
      <S.Sidebar>
        <S.Title>
          {props.userResult.name}
          <img className="Image" alt="mypage" src="/imgs/mypage.png" />
        </S.Title>
        <S.SmallLine></S.SmallLine>
        <S.MyPointTitle>MY POINT</S.MyPointTitle>
        {/* <S.MyPoint>2018P</S.MyPoint> */}
        <MyPoint />
        <S.SideTitle>CLASS</S.SideTitle>
        {myClass.map((el) => (
          <S.SiderbarMyClass key={uuidv4()}>
            <S.SideButton onClick={props.onClickSideButton(el)}>
              {el}
            </S.SideButton>
            <S.SmallLine></S.SmallLine>
          </S.SiderbarMyClass>
        ))}
        <S.SideTitle>ITEM</S.SideTitle>
        {myItem.map((el) => (
          <S.SiderbarMyItem key={uuidv4()}>
            <S.SideButton onClick={props.onClickSideButton(el)}>
              {el}
            </S.SideButton>
            <S.SmallLine></S.SmallLine>
          </S.SiderbarMyItem>
        ))}
      </S.Sidebar>
    </>
  );
};

export default SideNavigationPresenter;
