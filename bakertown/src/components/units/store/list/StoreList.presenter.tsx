import * as S from "./StoreList.styles";
import { v4 as uuidv4 } from "uuid";

const StoreListPresenter = (props) => {
  const sideList = [
    "냄비•프라이팬•솥",
    "주방잡화",
    "커피•티용품",
    "베이킹용품",
    "이벤트",
  ];

  return (
    <>
      <S.Wrapper>
        <S.SideBar>
          <S.SideTitle onClick={props.itemList}>전체 아이템</S.SideTitle>
          {sideList.map((el) => (
            <div key={uuidv4()}>
              <S.SideButton onClick={props.onClickSideButton(el)}>
                {el}
              </S.SideButton>
              <S.SmallLine></S.SmallLine>
            </div>
          ))}
        </S.SideBar>
        <S.ItemList>
          <S.ListTitle>
            <S.ListTitleText>{props.categoryName} 아이템</S.ListTitleText>
            <S.ListSelect>
              <S.ListOption value="1">추천순</S.ListOption>
              <S.ListOption value="2">인기순</S.ListOption>
              <S.ListOption value="3">최신순</S.ListOption>
            </S.ListSelect>
          </S.ListTitle>
          <S.ListContents>
            {props.recent.map((el) => (
              <S.ItemListWrapper key={uuidv4()}>
                <S.ItemImage onClick={props.onClickDetail(el)} />

                <S.Patissier></S.Patissier>
                <S.ItemName onClick={props.onClickDetail(el)}>
                  {el.itemName}
                </S.ItemName>
                <S.Line></S.Line>
                <S.ItemPrice>{el.price}원</S.ItemPrice>
              </S.ItemListWrapper>
            ))}
          </S.ListContents>
        </S.ItemList>
      </S.Wrapper>
    </>
  );
};

export default StoreListPresenter;
