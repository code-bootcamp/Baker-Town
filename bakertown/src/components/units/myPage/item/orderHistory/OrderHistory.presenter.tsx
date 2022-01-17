import * as S from "./OrderHistory.styles";
import { v4 as uuidv4 } from "uuid";
import SideNavigationContainer from "../../sideNav/SideNavigation.container";
import { Modal } from "antd";
import WriteReviewContainer from "../../../../commons/writeReview/WriteReview.container";
import { IOrderHistoryPresenter } from "./OrderHistory.types";

const OrderHistoryPresenter = (props: IOrderHistoryPresenter) => {
  return (
    <>
      <S.Wrapper>
        <SideNavigationContainer />
        <S.OrderList>
          <S.ListTitle>
            <S.ListTitleText>ITEM | 주문 내역</S.ListTitleText>
          </S.ListTitle>
          <S.ListContents>
            {props.userResult?.boughtItem?.map((el: any, index) => (
              <S.Order key={uuidv4()}>
                <S.OrderDate>{el.createdAt} 주문</S.OrderDate>
                <S.OrderWrapper>
                  <S.ItemImage onClick={props.itemDetail(el)} />
                  <S.ItemInfoWrapper>
                    <S.ItemName onClick={props.itemDetail(el)}>
                      {el.itemName}
                    </S.ItemName>
                    <S.ItemInfo>
                      <S.ItemPrice>{el.price}원</S.ItemPrice>
                      {/* <S.ItemAmount>1개</S.ItemAmount> */}
                    </S.ItemInfo>
                  </S.ItemInfoWrapper>
                  <S.OrderLine></S.OrderLine>
                  <S.AfterOrder>
                    {/* <S.TrackingShipment>배송조회</S.TrackingShipment> */}
                    <S.WriteReview onClick={props.onToggleModal}>
                      리뷰 쓰기
                    </S.WriteReview>
                    {props.isOpen && (
                      <WriteReviewContainer
                        // setReviewContents={props.setReviewContents}
                        rating={props.rating}
                        setRating={props.setRating}
                        reviewRef={props.reviewRef}
                        onToggleModal={props.onToggleModal}
                        onClickReview={props.onClickReview}
                        index={index}
                      />
                    )}
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
