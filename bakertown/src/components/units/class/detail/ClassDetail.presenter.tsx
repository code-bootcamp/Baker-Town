import * as S from "./ClassDetail.styles";
import { IClassDetailPresenterProps } from "./ClassDetail.types";

const ClassDetailPresenter = (props: IClassDetailPresenterProps) => {
  return (
    <>
      <S.WholeWrapper>
        <S.IntroWrapper>
          <S.ClassIntro>
            <S.ClassTitle>
              <div>클래스 소개글</div>
            </S.ClassTitle>
            <S.ClassImage>
              <div>파티셰가 넣는 소개 이미지</div>
            </S.ClassImage>
          </S.ClassIntro>

          <S.PatissierIntro>
            <S.ClassRemarksTitle>
              <div>파티셰가 소개하는 클래스 한줄 소개</div>
              <div>{props.myClass.className}</div>
            </S.ClassRemarksTitle>
            <S.ClassRemarksDetail></S.ClassRemarksDetail>

            <S.ProgramIntro>
              <div>
                <div>프로그램 소개글</div>
                <div>{props.myClass.contents}</div>
              </div>
            </S.ProgramIntro>
            <S.ProgramImage>
              <div>파티셰가 넣는 예시 이미지</div>
            </S.ProgramImage>
            <S.PatissierRemarks>
              <div>파티셰 소개글</div>
              <div>{props.myClass.patissier}</div>
            </S.PatissierRemarks>
          </S.PatissierIntro>

          <S.ClassLocation>
            <div>위치정보</div>
            <div>{props.myClass.address}</div>
          </S.ClassLocation>
          <S.ClassReview>실제 수강생 후기</S.ClassReview>
        </S.IntroWrapper>

        <S.ScheduleWrapper>
          <S.ClassSchedule>
            <div>클래스 일정</div>
          </S.ClassSchedule>
        </S.ScheduleWrapper>
      </S.WholeWrapper>
    </>
  );
};

export default ClassDetailPresenter;
