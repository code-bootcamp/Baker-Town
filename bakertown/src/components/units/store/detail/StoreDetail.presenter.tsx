import * as S from "../detail/StoreDetail.styles";
import { IStoreDetailPresenterProps } from "./StoreDetail.types";

const StoreDetailPresenter = (props: IStoreDetailPresenterProps) => {
  return (
    <S.Wrapper>
      <S.UpperWrapper>
        <S.TitleImage></S.TitleImage>
        <S.SidebarWrapper></S.SidebarWrapper>
      </S.UpperWrapper>
      <S.BodyWrapper>
        <S.Label>상품소개</S.Label>
        <S.ProductDetail></S.ProductDetail>
        <S.Label>배송일정</S.Label>
        <S.ProductDate></S.ProductDate>
        <S.Label>리뷰</S.Label>
        <S.Review></S.Review>
      </S.BodyWrapper>
    </S.Wrapper>
  );
};

export default StoreDetailPresenter;
