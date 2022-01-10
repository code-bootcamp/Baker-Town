import * as S from "./StoreList.styles";
import { v4 as uuidv4 } from "uuid";

const StoreListPresenter = (props) => {
  const sideList = [
    "냄비/프라이팬/솥",
    "주방잡화",
    "커피/티용품",
    "베이킹용품",
  ];

  return (
    <>
      <S.Wrapper>
        <S.SideBar>
          <S.SideTitle>전체 아이템</S.SideTitle>
          {sideList.map((el) => (
            <div key={uuidv4()}>
              <S.SideButton>{el}</S.SideButton>
              <S.SmallLine></S.SmallLine>
            </div>
          ))}
        </S.SideBar>
        <S.ItemList>
          <S.ListTitle>
            <S.ListTitleText> 클래스</S.ListTitleText>
            <S.ListSelect>
              <S.ListOption value="1">추천순</S.ListOption>
              <S.ListOption value="2">인기순</S.ListOption>
              <S.ListOption value="3">최신순</S.ListOption>
            </S.ListSelect>
          </S.ListTitle>
          <S.ListContents>
            {new Array(12).fill(1).map((el) => (
              <S.ItemListWrapper key={uuidv4()}>
                <S.ItemImage />

                
                <S.Patissier>나리 파티셰</S.Patissier>
                <S.ItemName>주걱</S.ItemName>
                <S.Line></S.Line>
                <S.ItemPrice>350000원</S.ItemPrice>
              </S.ItemListWrapper>
            ))}
          </S.ListContents>
        </S.ItemList>
      </S.Wrapper>
    </>
  );
};

export default StoreListPresenter;
