import * as S from "./DashBoardItemRead.styles";
import { v4 as uuidv4 } from "uuid";
import { IDashBoardItemReadPresenterProps } from "./DashBoardItemRead.types";

const DashBoardItemReadPresenter = (
  props: IDashBoardItemReadPresenterProps
) => {
  return (
    <>
      <S.Wrapper>
        <S.ItemList>
          <S.ItemListTitle>
            <S.ItemListTitleText>등록한 상품</S.ItemListTitleText>
          </S.ItemListTitle>

          <S.ItemListContents>
            {props.recent.map((el: any) => (
              <S.ItemWrapper key={uuidv4()}>
                <S.ItemImage
                  src={`https://storage.googleapis.com/${el.images?.[0]}`}
                />
                <S.Seller></S.Seller>
                <S.ItemName>{el.itemName}</S.ItemName>
                <S.Line></S.Line>
                <S.ItemPrice>{el.price} 원</S.ItemPrice>
                <S.ItemUpdate onClick={props.update(el)}>수정하기</S.ItemUpdate>
                <S.ItemDelete onClick={props.onClickDelete(el)}>
                  삭제하기
                </S.ItemDelete>
              </S.ItemWrapper>
            ))}
          </S.ItemListContents>
        </S.ItemList>
      </S.Wrapper>
    </>
  );
};

export default DashBoardItemReadPresenter;
