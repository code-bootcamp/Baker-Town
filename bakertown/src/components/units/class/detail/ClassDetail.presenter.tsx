import * as S from "./ClassDetail.styles";
import { IClassDetailPresenterProps } from "./ClassDetail.types";

const ClassDetailPresenter = (props: IClassDetailPresenterProps) => {
  return (
    <>
      <S.WholeWrapper>
        <S.IntroWrapper>
          <S.ClassIntro>
            <S.ClassTitle>{props.myClass.className}</S.ClassTitle>

            <S.SubComponentWrapper>
              <S.SubTheme1>
                <S.ClassStarRate>
                  <S.Star src="/imgs/star.png" />
                  <S.Rate>4.9</S.Rate>
                  <S.Rater>(1,700)</S.Rater>
                </S.ClassStarRate>

                <S.CategoryTag>
                  <S.AreaCategory>송파구•</S.AreaCategory>
                  <S.ContentsCategory>마카롱</S.ContentsCategory>
                </S.CategoryTag>
              </S.SubTheme1>

              <S.SubTheme2>
                <S.DibsOnClass>
                  <S.Heart src="/imgs/heart.png" />
                  100
                </S.DibsOnClass>
                <S.ClassShare>
                  <S.Share src="/imgs/share.png" />
                  공유
                </S.ClassShare>
              </S.SubTheme2>
            </S.SubComponentWrapper>

            <S.ClassImage>
              <div>파티셰가 넣는 소개 이미지</div>
            </S.ClassImage>
          </S.ClassIntro>

          <S.PatissierIntro>
            <S.ClassRemarksTitle>
              ㅇㅇㅇ님과 함께하는 마카롱 클래스
            </S.ClassRemarksTitle>
            <S.ClassRemarksDetail>
              가성비로 소문난 바로 그 클래스 맞습니다
            </S.ClassRemarksDetail>
            <S.ProgramIntro>
              <S.Program>프로그램</S.Program>
              <S.ProgramGuideBox>
                <div>
                  <div>프로그램 소개글</div>
                  <div>{props.myClass.contents}</div>
                </div>
                #.완성작품
                <S.ProgramImage>
                  <div>파티셰가 넣는 예시 이미지</div>
                </S.ProgramImage>
              </S.ProgramGuideBox>
            </S.ProgramIntro>
            <S.PatissierInfo>
              <S.Patissier>개설자 정보</S.Patissier>
              <S.PatissierWrapper>
                <S.PatissierPhoto src="/imgs/user.png" />
                <S.PatissierName>홍길동 파티셰</S.PatissierName>
                <S.ContactPatissier>연락하기</S.ContactPatissier>
              </S.PatissierWrapper>
              <S.PatissierContents>
                <div>파티셰 소개글</div>
                <div>{props.myClass.patissier}</div>
              </S.PatissierContents>
            </S.PatissierInfo>
          </S.PatissierIntro>

          <S.ClassLocationInfo>
            <S.LocationInfo></S.LocationInfo>
            <div>위치정보</div>
            <div>{props.myClass.address}</div>
          </S.ClassLocationInfo>

          <S.ClassReviewInfo></S.ClassReviewInfo>
          <S.ClassReview>실제 수강생 후기</S.ClassReview>
        </S.IntroWrapper>

        <S.ScheduleWrapper>
          <S.ClassSchedule></S.ClassSchedule>
        </S.ScheduleWrapper>
      </S.WholeWrapper>
    </>
  );
};

export default ClassDetailPresenter;
