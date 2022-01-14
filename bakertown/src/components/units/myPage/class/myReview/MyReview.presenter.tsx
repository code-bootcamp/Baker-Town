import * as S from "./MyReview.styles";
import { v4 as uuidv4 } from "uuid";
import SideNavigationContainer from "../../sideNav/SideNavigation.container";
import { Rate } from "antd";
import { IMyReviewPresenterProps } from "./MyReview.types";

const MyReviewPresenter = (props: IMyReviewPresenterProps) => {
  return (
    <>
      <S.Wrapper>
        <SideNavigationContainer />
        <S.ClassList>
          <S.ListTitle>
            <S.ListTitleText>CLASS | 나의 후기</S.ListTitleText>
          </S.ListTitle>
          <S.ListContents>
            {props.userResult?.review?.map((el: any) => (
              <S.ClassWrapper key={uuidv4()}>
                <S.Class>
                  <S.ClassImage onClick={props.classDetail(el)} />
                  <S.ClassInfoWrapper>
                    <S.ClassPatissier>{el.category}</S.ClassPatissier>
                    <S.ClassName onClick={props.classDetail(el)}>
                      {el.className}
                    </S.ClassName>
                    <S.ClassDate>{el.class?.date}</S.ClassDate>
                  </S.ClassInfoWrapper>
                </S.Class>
                <S.Line></S.Line>
                <S.ReviewWrapper>
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
                  {/* <S.Label>
                    <S.ReviewEdit>수정</S.ReviewEdit>
                    <S.ReviewDelete>삭제</S.ReviewDelete>
                  </S.Label> */}
                </S.ReviewWrapper>
              </S.ClassWrapper>
            ))}
          </S.ListContents>
        </S.ClassList>
      </S.Wrapper>
    </>
  );
};

export default MyReviewPresenter;
