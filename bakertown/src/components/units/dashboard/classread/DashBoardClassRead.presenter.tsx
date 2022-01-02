import { IDashBoardClassReadProps } from "./DashBoardClassRead.types";
import * as S from "./DashBoardClassRead.styles";

const DashBoardClassReadPresenter = (props: IDashBoardClassReadProps) => {
  return (
    <S.Wrapper>
      {props.classes.map((el) => (
        <S.ComponentWrapper>
          <S.ImageWrapper></S.ImageWrapper>
          <S.DetailWrapper>
            <S.CategoryWrapper>{el.category}</S.CategoryWrapper>
            <S.TitleWrapper>{el.className}</S.TitleWrapper>
            <S.ClassMember>수강신청 인원 2명</S.ClassMember>
          </S.DetailWrapper>
          <S.Line></S.Line>
          <S.Update>수정하기</S.Update>
          <S.Delete>삭제하기</S.Delete>
        </S.ComponentWrapper>
      ))}
      {/* <button onClick={fetchMore}>More</button> */}
    </S.Wrapper>
  );
};

export default DashBoardClassReadPresenter;
