import * as S from "./ClassDetail.styles";
import { IClassDetailPresenterProps } from "./ClassDetail.types";

const ClassDetailPresenter = (props: IClassDetailPresenterProps) => {
  return (
    <>
      <S.WholeWrapper>
        <S.IntroWrapper>
          <S.ClassIntro>
            <S.ClassTitle>내 입맛을 돋구어줄 나만의 마카롱 만들기</S.ClassTitle>

            <S.SubComponentWrapper>
              <S.SubTheme1>
                <S.ClassStarRate>별점</S.ClassStarRate>
                <S.CategoryTag>송파구•마카롱</S.CategoryTag>
              </S.SubTheme1>

              <S.SubTheme2>
                <S.DibsOnClass>찜하기</S.DibsOnClass>
                <S.ClassShare>공유하기</S.ClassShare>
              </S.SubTheme2>
            </S.SubComponentWrapper>

            <S.ClassImage>
              <div>파티셰가 넣는 소개 이미지</div>
            </S.ClassImage>
          </S.ClassIntro>

          <S.PatissierIntro>
            <S.ClassRemarksTitle>
              ㅇㅇㅇ님과 함께하는 마카롱 클래스
              <div>{props.myClass.className}</div>
            </S.ClassRemarksTitle>
            <S.ClassRemarksDetail>가성비로 소문난 바로 그 클래스 맞습니다</S.ClassRemarksDetail>

            <S.ProgramIntro>프로그램
              <S.ProgramGuide>
              <div>
                <div>프로그램 소개글</div>
                <div>{props.myClass.contents}</div>
              </div>
              </S.ProgramGuide>
            </S.ProgramIntro>
            <S.ProgramImage>
              <div>파티셰가 넣는 예시 이미지</div>
            </S.ProgramImage>

            <S.PatissierInfo>
              <S.PatissierPhoto>사진자리</S.PatissierPhoto>
              <S.PatissierName>홍길동 파티셰</S.PatissierName>
              <S.ContactPatissier>연락하기</S.ContactPatissier>
              <div>파티셰 소개글</div>
              <div>{props.myClass.patissier}</div>
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
