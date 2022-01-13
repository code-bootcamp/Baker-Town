import * as S from "./Navigation.styles";
import { INavigationProps } from "./Navigation.types";
import { v4 as uuidv4 } from "uuid";

const NavigationPresenter = (props: INavigationProps) => {
  return (
    <>
      <S.Wrapper>
        {props.navArray.map(
          (el: { text: string; src: string; link: string }) => (
            <S.NavButton onClick={props.onClickNav(el)} key={uuidv4()}>
              <S.NavImage src={el.src} />
              <S.NavText>{el.text}</S.NavText>
            </S.NavButton>
          )
        )}
      </S.Wrapper>
    </>
  );
};

export default NavigationPresenter;
