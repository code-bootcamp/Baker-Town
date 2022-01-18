import * as S from "./WishList.styles";
import { v4 as uuidv4 } from "uuid";
import SideNavigationContainer from "../../sideNav/SideNavigation.container";
import { IWishListPresenter } from "./WishList.types";

const WishListPresenter = (props: IWishListPresenter) => {
  return (
    <>
      <S.Wrapper>
        <SideNavigationContainer />
        <S.ClassList>
          <S.ListTitle>
            <S.ListTitleText>CLASS | 찜목록</S.ListTitleText>
          </S.ListTitle>
          <S.ListContents>
            {props.userResult?.heart?.map((el: any) => (
              <S.ClassWrapper>
                <S.Class>
                  <S.ClassImage
                    onClick={props.classDetail(el)}
                    src={`https://storage.googleapis.com/${el.images?.[0]}`}
                  />
                  <S.ClassInfoWrapper>
                    <S.ClassPatissier>{el.category}</S.ClassPatissier>
                    <S.ClassName onClick={props.classDetail(el)}>
                      {el.className}
                    </S.ClassName>
                  </S.ClassInfoWrapper>
                  {/* <S.ClassLine></S.ClassLine> */}
                </S.Class>
              </S.ClassWrapper>
            ))}
          </S.ListContents>
        </S.ClassList>
      </S.Wrapper>
    </>
  );
};

export default WishListPresenter;
