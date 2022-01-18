import * as S from "./Basket.styles";
import { v4 as uuidv4 } from "uuid";
import SideNavigationContainer from "../../sideNav/SideNavigation.container";
import { IBasketPresenterProps } from "./Basket.types";

const BasketPresenter = (props: IBasketPresenterProps) => {
  return (
    <>
      <S.Wrapper>
        <SideNavigationContainer />
        <S.BasketList>
          <S.BasketTitle>
            <S.BasketTitleText>ITEM | 장바구니</S.BasketTitleText>
          </S.BasketTitle>
          <S.BasketContents>
            {props.userResult?.itemHeart?.map((el: any) => (
              <S.ItemWrapper key={uuidv4()}>
                <S.ItemImage
                  onClick={props.itemDetail(el)}
                  src={`https://storage.googleapis.com/${el.images?.[0]}`}
                />
                <S.ItemInfo>
                  <S.ItemName onClick={props.itemDetail(el)}>
                    {el.itemName}
                  </S.ItemName>
                  <S.ItemPrice>{el.price}원</S.ItemPrice>
                </S.ItemInfo>
                {/* <S.BasketCheckBox type="checkbox" /> */}
              </S.ItemWrapper>
            ))}
          </S.BasketContents>
        </S.BasketList>
      </S.Wrapper>
    </>
  );
};

export default BasketPresenter;
