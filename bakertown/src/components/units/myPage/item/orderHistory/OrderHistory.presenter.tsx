import * as S from "./OrderHistory.styles";
import { v4 as uuidv4 } from "uuid";
import SideNavigationContainer from "../../sideNav/SideNavigation.container";

const OrderHistoryPresenter = () => {
  const myClass = ["참여 예정", "참여 완료", "나의 후기", "찜 목록"];
  const myItem = ["주문 내역", "장바구니", "리뷰"];
  return (
    <>
      <S.Wrapper>
        <SideNavigationContainer />
        <S.OrderList>
          <S.ListTitle>
            <S.ListTitleText>ITEM | 주문 내역</S.ListTitleText>
          </S.ListTitle>
          <S.ListContents>
            {new Array(4).fill(1).map((el) => (
              <S.Order>
                <S.OrderDate>2021년 12월 8일 주문</S.OrderDate>
                <S.OrderWrapper>
                  <S.ItemImage />
                  <S.ItemInfoWrapper>
                    <S.ItemName>만능 오븐</S.ItemName>
                    <S.ItemInfo>
                      <S.ItemPrice>369,000원</S.ItemPrice>
                      <S.ItemAmount>1개</S.ItemAmount>
                    </S.ItemInfo>
                  </S.ItemInfoWrapper>
                  <S.OrderLine></S.OrderLine>
                  <S.AfterOrder>
                  <S.TrackingShipment>배송조회</S.TrackingShipment>
                  <S.WriteReview>리뷰 작성하기</S.WriteReview>
                  </S.AfterOrder>
                </S.OrderWrapper>
              </S.Order>
            ))}
          </S.ListContents>
        </S.OrderList>
      </S.Wrapper>
    </>
  );
};

export default OrderHistoryPresenter;
