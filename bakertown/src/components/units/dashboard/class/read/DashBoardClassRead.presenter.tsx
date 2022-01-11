import { IDashBoardClassReadProps } from "./DashBoardClassRead.types";
import * as S from "./DashBoardClassRead.styles";
import { v4 as uuidv4 } from "uuid";

const DashBoardClassReadPresenter = (props: IDashBoardClassReadProps) => {
  return (
    <S.Wrapper>
      {props.class.map((el: any) => (
        <S.ComponentWrapper key={uuidv4()}>
          <S.ImageWrapper onClick={props.classDetail(el)} />
          <S.DetailWrapper>
            <S.CategoryWrapper>{el.category}</S.CategoryWrapper>
            <S.TitleWrapper onClick={props.classDetail(el)}>
              {el.className}
            </S.TitleWrapper>
            <S.ClassMember>수강신청 인원 2명</S.ClassMember>
          </S.DetailWrapper>
          <S.Line></S.Line>
          <S.CRUD>
            <S.Update>수정하기</S.Update>
            <S.Delete onClick={props.onClickDelete(el)}>삭제하기</S.Delete>
          </S.CRUD>
        </S.ComponentWrapper>
      ))}
      {/* <button onClick={fetchMore}>More</button> */}
    </S.Wrapper>
  );
};

export default DashBoardClassReadPresenter;
