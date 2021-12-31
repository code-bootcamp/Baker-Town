import { IDashBoardClassReadProps } from "./DashBoardClassRead.types";
import * as S from "./DashBoardClassRead.styles";

const DashBoardClassReadPresenter = (props: IDashBoardClassReadProps) => {
  return (
    <S.Wrapper>
      <S.ComponentWrapper>
        <S.ImageWrapper></S.ImageWrapper>
        <S.DetailWrapper>
          <S.CategoryWrapper>원데이</S.CategoryWrapper>
          <S.TitleWrapper>
            [1+1] 커플 드로잉 레터롱 마카롱 클래스{" "}
          </S.TitleWrapper>
          <S.ClassMember>수강신청 인원 2명</S.ClassMember>
        </S.DetailWrapper>
        <S.Line></S.Line>
        <S.Update>수정하기</S.Update>
        <S.Delete>삭제하기</S.Delete>
      </S.ComponentWrapper>
    </S.Wrapper>
  );
};

export default DashBoardClassReadPresenter;
