import * as S from "../detail/StoreDetail.styles";
import { IStoreDetailPresenterProps } from "./StoreDetail.types";
import { v4 as uuidv4 } from "uuid";

const StoreDetailPresenter = (props: IStoreDetailPresenterProps) => {
  return (
    <S.Wrapper>
      <S.LeftWrapper>
        {/* <S.UpperWrapper> */}
        <S.TitleImage></S.TitleImage>
        {/* </S.UpperWrapper> */}
        <S.BodyWrapper>
          <S.Label>상품소개</S.Label>
          <S.ProductDetail>{props.myStore?.contents}</S.ProductDetail>
          <S.Label>배송일정</S.Label>
          <S.ProductDate>{props.myStore?.shippingTime}</S.ProductDate>
          <S.Label>리뷰</S.Label>
          <S.Review>
            {props.myStore?.review?.map((el: any) => (
              <div key={uuidv4()}>
                <div>{el.user}</div>
                <div>{el.rating}</div>
                <div>{el.createdAt}</div>
                <div>{el.contents}</div>
              </div>
            ))}
          </S.Review>
        </S.BodyWrapper>
      </S.LeftWrapper>
      <S.RightWrapper>
        <S.SidebarWrapper>
          <div>{props.myStore?.category}</div>
          <div>{props.myStore?.itemName}</div>
          <div>판매 가격: {props.myStore?.price}</div>
          <button onClick={props.purchase}>구매하기</button>
          <button onClick={props.heart}>찜하기 {props.myStore?.heart}</button>
        </S.SidebarWrapper>
      </S.RightWrapper>
    </S.Wrapper>
  );
};

export default StoreDetailPresenter;
