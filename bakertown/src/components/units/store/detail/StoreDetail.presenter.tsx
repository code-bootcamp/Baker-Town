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
              <S.CategoryTag></S.CategoryTag>
            </S.SubTheme1>
            <S.SubTheme2>
              <S.DibsOnItem>
                <S.Heart src="/imgs/class/heart.png" />
                찜하기
              </S.DibsOnItem>
              <S.DoShare>
                <S.Share src="/imgs/share.png" />
                공유
              </S.DoShare>
            </S.SubTheme2>
          </S.SubComponentWrapper>
          <Slider {...settings}>
            {/* {props.myStore?.images?.map((el: any) => (
              <div key={uuidv4()}>
                <S.ItemImage src={`https://storage.googleapis.com/${el}`} />
              </div>
            ))} */}
            <div>
              <S.ImageWrapper>
                <S.Image src="/imgs/baking.jpg" />
              </S.ImageWrapper>
            </div>
            <div>
              <S.ImageWrapper>
                <S.Image src="/imgs/chocolat.jpg" />
              </S.ImageWrapper>
            </div>
            <div>
              <S.ImageWrapper>
                <S.Image src="/imgs/cookie.jpg" />
              </S.ImageWrapper>
            </div>
          </Slider>
        </S.ItemIntro>

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
