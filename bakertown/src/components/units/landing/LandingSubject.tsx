import * as S from "./Landing.styles";
import { IClassSubject } from "./Landing.types";

export const ClassSubject = (props: IClassSubject) => {
  return (
    <>
      <S.ClassWrapper>
        <S.ImageWrapper>
          {props.el.images?.[0] ? (
            <S.ClassImage
              src={`https://storage.googleapis.com/${props.el.images?.[0]}`}
              onClick={props.classDetail}
            />
          ) : (
            <S.ClassImage onClick={props.classDetail} />
          )}
        </S.ImageWrapper>
        <S.ClassPatissier>{props.el.patissier}</S.ClassPatissier>
        <S.ClassName>{props.el.className}</S.ClassName>
        <S.SmallLine></S.SmallLine>
        <S.ClassPrice>
          {Number(props.el.price).toLocaleString("ko-KR")} 원
        </S.ClassPrice>
      </S.ClassWrapper>
    </>
  );
};
