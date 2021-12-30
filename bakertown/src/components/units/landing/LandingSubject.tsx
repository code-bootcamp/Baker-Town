import * as S from "./Landing.styles";
import { IClassSubject } from "./Landing.types";

export const ClassSubject = (props: IClassSubject) => {
  return (
    <>
      <S.ClassWrapper>
        <S.ClassImage />
        <S.ClassPatissier>{props.el.patissier}</S.ClassPatissier>
        <S.ClassName>{props.el.className}</S.ClassName>
        <S.SmallLine></S.SmallLine>
        <S.ClassPrice>{props.el.price} 원</S.ClassPrice>
      </S.ClassWrapper>
    </>
  );
};
