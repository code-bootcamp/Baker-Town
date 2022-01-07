import * as S from "./MyReview.styles";
import { v4 as uuidv4 } from "uuid";
import SideNavigationContainer from "../../sideNav/SideNavigation.container";
import { Rate } from "antd";

const MyReviewPresenter = (props) => {
  return (
    <>
      <S.Wrapper>
        <SideNavigationContainer />
        <S.ClassList>
          <S.ListTitle>
            <S.ListTitleText>CLASS | 나의 후기</S.ListTitleText>
          </S.ListTitle>
          <S.ListContents>
            {props.userResult?.review?.map((el) => (
              <S.ClassWrapper key={uuidv4()}>
                <S.ClassImage />
                <S.ClassPatissier>{el.category}</S.ClassPatissier>
                <S.ClassName>{el.className}</S.ClassName>
                <S.ClassDate>{el.class?.date}</S.ClassDate>
                <S.Line>
                  <S.ClassReview>
                    <S.SubTheme>
                      <S.ClassStarRate>
                        <Rate value={el.rating} />
                      </S.ClassStarRate>
                      <S.CreatedDate>{el.createdAt}</S.CreatedDate>
                    </S.SubTheme>
                    {/* <S.ReviewRemarks>재밌어요</S.ReviewRemarks> */}
                    <S.Review>{el.contents}</S.Review>
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
