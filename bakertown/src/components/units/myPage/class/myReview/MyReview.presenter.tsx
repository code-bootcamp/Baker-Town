import * as S from "./MyReview.styles";
import { v4 as uuidv4 } from "uuid";
import SideNavigationContainer from "../../sideNav/SideNavigation.container";

const MyReviewPresenter = () => {
  const myClass = ["참여 예정", "참여 완료", "나의 후기", "찜 목록"];
  const myItem = ["주문 내역", "장바구니", "리뷰"];
  return (
    <>
      <S.Wrapper>
        <SideNavigationContainer />
        <S.ClassList>
          <S.ListTitle>
            <S.ListTitleText>CLASS | 나의 후기</S.ListTitleText>
          </S.ListTitle>
          <S.ListContents>
            {new Array(4).fill(1).map((el) => (
              <S.ClassWrapper>
                <S.ClassImage />
                <S.ClassPatissier>원데이</S.ClassPatissier>
                <S.ClassName>마카롱클래스</S.ClassName>
                <S.ClassDate>
                  2022년 1월 1일 월요일 ~ 2022년 1월 5일 금요일
                </S.ClassDate>
                <S.Line>
                  <S.ClassReview>
                    <S.SubTheme>
                      <S.ClassStarRate>
                        <S.PersonalRate src="/imgs/star.png" />
                        <S.PersonalRate src="/imgs/star.png" />
                        <S.PersonalRate src="/imgs/star.png" />
                        <S.PersonalRate src="/imgs/star.png" />
                        <S.PersonalRate src="/imgs/star.png" />
                      </S.ClassStarRate>
                      <S.CreatedDate>2022.01.03</S.CreatedDate>
                    </S.SubTheme>
                    <S.ReviewRemarks>재밌어요</S.ReviewRemarks>
                    <S.Review>선생님이 친절하게 잘 알려주셨어요</S.Review>
                  </S.ClassReview>
                </S.Line>
                <S.ClassLine></S.ClassLine>
                <S.Label>
                  <S.ReviewEdit>수정</S.ReviewEdit>
                  <S.ReviewDelete>삭제</S.ReviewDelete>
                </S.Label>
              </S.ClassWrapper>
            ))}
          </S.ListContents>
        </S.ClassList>
      </S.Wrapper>
    </>
  );
};

export default MyReviewPresenter;
