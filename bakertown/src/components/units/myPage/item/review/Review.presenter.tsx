import * as S from "./Review.styles";
import { v4 as uuidv4 } from "uuid";
import SideNavigationContainer from "../../sideNav/SideNavigation.container";
import { Rate } from "antd";

const ReviewPresenter = (props) => {
  return (
    <>
      <S.Wrapper>
        <SideNavigationContainer />
        <S.OrderList>
          <S.ListTitle>
            <S.ListTitleText>ITEM | 나의 후기</S.ListTitleText>
          </S.ListTitle>
          <S.ListContents>
            {props.userResult?.itemReview?.map((el) => (
              <S.OrderWrapper key={uuidv4()}>
                <S.ItemImage />
                <S.ClassPatissier>원데이</S.ClassPatissier>
                <S.ItemInfo>
                  <S.ItemName>{el.itemName},</S.ItemName>
                  <S.ItemAmount>1개</S.ItemAmount>
                </S.ItemInfo>
                {/* <S.OrderDate>{el.createdAt}</S.OrderDate> */}
                <S.Line>
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
                </S.Line>
                <S.OrderLine></S.OrderLine>
                <S.Label>
                  <S.ReviewEdit>수정</S.ReviewEdit>
                  <S.ReviewDelete>삭제</S.ReviewDelete>
                </S.Label>
              </S.OrderWrapper>
            ))}
          </S.ListContents>
        </S.OrderList>
      </S.Wrapper>
    </>
  );
};

export default ReviewPresenter;
