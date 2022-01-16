import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "../detail/StoreDetail.styles";
import { IStoreDetailPresenterProps } from "./StoreDetail.types";
import { v4 as uuidv4 } from "uuid";

const StoreDetailPresenter = (props: IStoreDetailPresenterProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    allows: true,
  };

  return (
    <S.Wrapper>
      <S.LeftWrapper>
        <S.ItemIntro>
          <S.ItemName>{props.myStore?.itemName}</S.ItemName>
          <S.SubComponentWrapper>
            <S.SubTheme1>
              <S.ItemStarRate>
                <S.Star src="/imgs/class/star.png" />
                <S.Rate>4.7</S.Rate>
                <S.Rater>(1,700)</S.Rater>
              </S.ItemStarRate>
              <S.CategoryTag>{props.myStore?.category}</S.CategoryTag>
            </S.SubTheme1>
            <S.SubTheme2>
              <S.DibsOnItem onClick={props.heart}>
                <S.Heart src="/imgs/class/heart.png" />
                찜하기 {props.myStore?.heart}
              </S.DibsOnItem>
              <S.DoShare>
                <S.Share src="/imgs/share.png" />
                공유
              </S.DoShare>
            </S.SubTheme2>
          </S.SubComponentWrapper>
          <Slider {...settings}>
            {props.myStore?.images?.map((el: any) => (
              <div key={uuidv4()}>
                <S.ItemImage src={`https://storage.googleapis.com/${el}`} />
              </div>
            ))}
          </Slider>
        </S.ItemIntro>

        <S.BodyWrapper>
          <S.Label>상품소개</S.Label>
          <S.ProductDetail>{props.myStore?.contents}</S.ProductDetail>
          <S.Label>판매자 정보</S.Label>
          <S.PatissierWrapper>
            <S.Photo src="/imgs/user.png" />
            <S.PatissierName>{props.myStore?.patissier} 파티셰</S.PatissierName>
            <S.ContactPatissier>연락하기</S.ContactPatissier>
          </S.PatissierWrapper>
          <S.PatissierContentsBox>
            {/* <div>{props?.myStore?.}</div> */}
          </S.PatissierContentsBox>
          <S.Label>배송일정</S.Label>
          <S.ProductDate>{props.myStore?.shippingTime}</S.ProductDate>
          <S.Label>구매자 후기</S.Label>
          <S.ItemStarRate>
            <S.Star src="/imgs/class/star.png" />
            <S.Star src="/imgs/class/star.png" />
            <S.Star src="/imgs/class/star.png" />
            <S.Star src="/imgs/class/star.png" />
            <S.Star src="/imgs/class/star.png" />
            <S.Rate>4.7</S.Rate>
            <S.Rater>(1,700)</S.Rater>
          </S.ItemStarRate>
          {/* <S.Review>
            {props.myStore?.review?.map((el: any) => (
              <div key={uuidv4()}>
                <div>{el.user}</div>
                <div>{el.rating}</div>
                <div>{el.createdAt}</div>
                <div>{el.contents}</div>
              </div>
            ))}
          </S.Review> */}
          <S.ReviewerInfo>
            <S.ReviewerPhoto src="/imgs/user.png" />
            <S.ReviewerSubInfo>
              <S.ReviewerId>클레어</S.ReviewerId>
              <S.ReviewerSubInfo2>
                <S.PersonalRate src="/imgs/class/star.png" />
                <S.PersonalRate src="/imgs/class/star.png" />
                <S.PersonalRate src="/imgs/class/star.png" />
                <S.PersonalRate src="/imgs/class/star.png" />
                <S.PersonalRate src="/imgs/class/star.png" />
                <S.CreatedDate>6월 28일</S.CreatedDate>
              </S.ReviewerSubInfo2>
            </S.ReviewerSubInfo>
          </S.ReviewerInfo>
          <S.Review></S.Review>
        </S.BodyWrapper>
      </S.LeftWrapper>

      <S.RightWrapper>
        <S.SidebarWrapper>
          <S.SideCategory>{props.myStore?.category}</S.SideCategory>
          <S.SideItemName>{props.myStore?.itemName}</S.SideItemName>
          <S.PriceToBuy>
            <S.SideItemPrice>
              {Number(props.myStore?.price).toLocaleString("ko-KR")}원
            </S.SideItemPrice>
            <S.ToBuyButton onClick={props.purchase}>구매하기</S.ToBuyButton>
          </S.PriceToBuy>
        </S.SidebarWrapper>
      </S.RightWrapper>
    </S.Wrapper>
  );
};

export default StoreDetailPresenter;
