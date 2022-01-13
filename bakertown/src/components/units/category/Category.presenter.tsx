import * as S from "./Category.styles";
import { ICategoryPresenterProps } from "./Category.types";

const CategoryPresenter = (props: ICategoryPresenterProps) => {
  return (
    <>
      <S.Wrapper>
        <S.SmallCategory>Class</S.SmallCategory>
        <S.CategoryWrapper>
          {props.classArray.map((el) => (
            <S.CategoryText onClick={props.classButton(el)}>
              {el.text}
            </S.CategoryText>
          ))}
        </S.CategoryWrapper>
        <S.SmallCategory>Store</S.SmallCategory>
        <S.CategoryWrapper>
          {props.storeArray.map((el) => (
            <S.CategoryText onClick={props.storeButton(el)}>
              {el.text}
            </S.CategoryText>
          ))}
        </S.CategoryWrapper>
      </S.Wrapper>
    </>
  );
};

export default CategoryPresenter;
