import * as S from "./Basket.styles";
import { v4 as uuidv4 } from "uuid";
import SideNavigationContainer from "../../sideNav/SideNavigation.container";

const BasketPresenter = (props) => {
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
              {props.userResult?.itemHeart?.map((el) => (
                <S.ItemWrapper key={uuidv4()}>
                  <S.BasketCheckBoxContainer>
                    <S.BasketCheckBox></S.BasketCheckBox>
                  </S.BasketCheckBoxContainer>
                  <S.ItemImage />
                  <S.ItemInfo>
                    <S.ItemName>{el.itemName}</S.ItemName>
                    <S.ItemPrice>{el.price}원</S.ItemPrice>
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
