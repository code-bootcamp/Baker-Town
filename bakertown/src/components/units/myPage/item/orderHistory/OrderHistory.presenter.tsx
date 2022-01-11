import * as S from "./OrderHistory.styles";
import { v4 as uuidv4 } from "uuid";
import SideNavigationContainer from "../../sideNav/SideNavigation.container";
import { Modal } from "antd";
import WriteReviewContainer from "../../../../commons/writeReview/WriteReview.container";

const OrderHistoryPresenter = (props) => {
  return (
    <>
      <S.Wrapper>
        <SideNavigationContainer />
        <S.OrderList>
          <S.ListTitle>
            <S.ListTitleText>ITEM | 주문 내역</S.ListTitleText>
          </S.ListTitle>
          <S.ListContents>
            {props.userResult?.boughtItem?.map((el, index) => (
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
                      <S.ItemAmount>1개</S.ItemAmount>
                    </S.ItemInfo>
                  </S.ItemInfoWrapper>
                  <S.OrderLine></S.OrderLine>
                  <S.AfterOrder>
                    <S.TrackingShipment>배송조회</S.TrackingShipment>
                    <S.WriteReview onClick={props.onToggleModal}>
                      리뷰 작성하기
                    </S.WriteReview>
                    {props.isOpen && (
                      <Modal
                        title="리뷰 등록"
                        visible={props.isOpen}
                        onOk={props.onClickReview(index)}
                        onCancel={props.onToggleModal}
                      >
                        <WriteReviewContainer
                          setReviewContents={props.setReviewContents}
                          rating={props.rating}
                          setRating={props.setRating}
                        />
                      </Modal>
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
