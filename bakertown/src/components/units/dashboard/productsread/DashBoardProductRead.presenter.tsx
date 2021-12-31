import * as S from "./DashBoardProductRead.styles";
import { v4 as uuidv4 } from "uuid";

const DashBoardProductsReadPresenter = (props) => {
  return (
    <>
      <S.Wrapper>
        <S.ItemList>
          <S.ItemListTitle>
            <S.ItemListTitleText>등록한 상품</S.ItemListTitleText>
            <S.ItemListSelect>
              <S.ItemListOption>추천순</S.ItemListOption>
              <S.ItemListOption>인기순</S.ItemListOption>
              <S.ItemListOption>최신순</S.ItemListOption>
            </S.ItemListSelect>
          </S.ItemListTitle>

          <S.ItemListContents>
            {props.recent.map((el) => (
              <S.ItemWrapper key={uuidv4()}>
                <S.ItemImage />
                <S.Seller></S.Seller>
                <S.ItemName>{el.itemName}</S.ItemName>
                <S.Line></S.Line>
                <S.ItemPrice>{el.price} 원</S.ItemPrice>
                <S.ItemDelete onClick={props.delete}>삭제</S.ItemDelete>
              </S.ItemWrapper>
            ))}
          </S.ItemListContents>
        </S.ItemList>
      </S.Wrapper>
    </>
  );
};

export default DashBoardProductsReadPresenter;
