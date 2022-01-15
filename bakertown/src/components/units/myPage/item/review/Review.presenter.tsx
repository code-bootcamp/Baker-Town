import * as S from "./Review.styles";
import { v4 as uuidv4 } from "uuid";
import SideNavigationContainer from "../../sideNav/SideNavigation.container";
import { Rate } from "antd";
import { IReviewPresenter } from "./Review.types";

const ReviewPresenter = (props: IReviewPresenter) => {
  return (
    <>
      <S.Wrapper>
        <SideNavigationContainer />
        <S.OrderList>
          <S.ListTitle>
            <S.ListTitleText>ITEM | 나의 후기</S.ListTitleText>
          </S.ListTitle>
          <S.ListContents>
            {props.userResult?.itemReview?.map((el: any) => (
              <S.OrderWrapper key={uuidv4()}>
                <S.TopWrapper>
                  <S.ItemImage onClick={props.itemDetail(el)} />
                  <S.ItemInfo>
                    <S.ItemCategory>{el.category}</S.ItemCategory>
                    <S.ItemName onClick={props.itemDetail(el)}>
                      {el.itemName},
                    </S.ItemName>
                    {/* <S.ItemAmount>1개</S.ItemAmount> */}
                  </S.ItemInfo>
                </S.TopWrapper>
                {/* <S.OrderDate>{el.createdAt}</S.OrderDate> */}
                <S.Line></S.Line>
                <S.BottomWrapper>
                  <S.ItemReview>
                    <S.SubTheme>
                      <S.ItemStarRate>
                        <Rate value={el.rating} />
                      </S.ItemStarRate>
                      <S.CreatedDate>{el.createdAt}</S.CreatedDate>
                    </S.SubTheme>
                    {/* <S.ReviewRemarks>재밌어요</S.ReviewRemarks> */}
                    <S.Review>{el.contents}</S.Review>
                  </S.ItemReview>
                  {/* <S.Label>
                    <S.ReviewEdit>수정</S.ReviewEdit>
                    <S.ReviewDelete>삭제</S.ReviewDelete>
                  </S.Label> */}
                </S.BottomWrapper>
              </S.OrderWrapper>
            ))}
          </S.ListContents>
        </S.OrderList>
      </S.Wrapper>
    </>
  );
};

export default ReviewPresenter;
