import * as S from "./ClassDetail.styles";
import { IClassDetailPresenterProps } from "./ClassDetail.types";

const ClassDetailPresenter = (props: IClassDetailPresenterProps) => {
  return (
    <>
      <S.Wrapper>
        <S.ClassIntro>
          <S.ClassTitle>
            <div>클래스 소개글</div>
          </S.ClassTitle>
          <S.ClassImage>
            <div>파티셰가 넣는 소개 이미지</div>
          </S.ClassImage>
        </S.ClassIntro>

        <S.PatissierIntro>
          <S.ClassRemarks>
            <div>파티셰가 소개하는 클래스 한줄 소개</div>
            <div>{props.myClass.className}</div>
          </S.ClassRemarks>
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
        <S.ClassReview>
          <div>실제 수강생 후기</div>
        </S.ClassReview>
      </S.Wrapper>
    </>
  );
};

export default ClassDetailPresenter;
