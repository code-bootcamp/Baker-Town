import * as S from "./Header.styles";
import { IHeaderProps } from "./Header.types";

const HeaderPresenter = (props: IHeaderProps) => {
  return (
    <>
      <S.Wrapper>헤더영역</S.Wrapper>
    </>
  );
};

export default HeaderPresenter;
