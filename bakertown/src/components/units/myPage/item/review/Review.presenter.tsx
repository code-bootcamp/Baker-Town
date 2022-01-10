import * as S from "./Review.styles";
import { v4 as uuidv4 } from "uuid";
import SideNavigationContainer from "../../sideNav/SideNavigation.container";

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
            {props.userResult?.itemReveiw?.map((el) => (
              <S.OrderWrapper key={uuidv4()}>
                <S.ItemImage />
                <S.ClassPatissier>원데이</S.ClassPatissier>
                <S.ItemInfo>
                  <S.ItemName>장미칼,</S.ItemName>
                  <S.ItemAmount>1개</S.ItemAmount>
                </S.ItemInfo>
                <S.OrderDate>2022년 1월 1일</S.OrderDate>
                <S.Line>
                  <S.ItemReview>
                    <S.SubTheme>
                      <S.ItemStarRate>
                        <S.PersonalRate src="/imgs/star.png" />
                        <S.PersonalRate src="/imgs/star.png" />
                        <S.PersonalRate src="/imgs/star.png" />
                        <S.PersonalRate src="/imgs/star.png" />
                        <S.PersonalRate src="/imgs/star.png" />
                      </S.ItemStarRate>
                      <S.CreatedDate>2022.01.03</S.CreatedDate>
                    </S.SubTheme>
                    <S.ReviewRemarks>재밌어요</S.ReviewRemarks>
                    <S.Review>칼이 잘 들어요</S.Review>
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
