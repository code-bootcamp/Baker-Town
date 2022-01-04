import * as S from "./Basket.styles";
import { v4 as uuidv4 } from "uuid";
import SideNavigationContainer from "../../sideNav/SideNavigation.container";

const BasketPresenter = () => {
  const myClass = ["참여 예정", "참여 완료", "나의 후기", "찜 목록"];
  const myItem = ["주문 내역", "장바구니", "리뷰"];

  return (
    <>
      <S.Wrapper>
        <SideNavigationContainer />
        <S.BasketList>
          <S.BasketTitle>
            <S.BasketTitleText>ITEM | 장바구니</S.BasketTitleText>
          </S.BasketTitle>
          <S.Basket>
            <S.BasketContents>
              {new Array(4).fill(1).map((el) => (
                <S.ItemWrapper key={uuidv4()}>
                  <S.BasketCheckBoxContainer>
                    <S.BasketCheckBox></S.BasketCheckBox>
                  </S.BasketCheckBoxContainer>
                  <S.ItemImage />
                  <S.ItemInfo>
                    <S.ItemName>조리도구 세트</S.ItemName>
                    <S.ItemPrice>원</S.ItemPrice>
                  </S.ItemInfo>
                </S.ItemWrapper>
              ))}
            </S.BasketContents>
          </S.Basket>
        </S.BasketList>
      </S.Wrapper>
    </>
  );
};

export default BasketPresenter;
