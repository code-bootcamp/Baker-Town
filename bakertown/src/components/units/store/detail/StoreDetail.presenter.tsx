import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "../detail/StoreDetail.styles";
import { IStoreDetailPresenterProps } from "./StoreDetail.types";
import { v4 as uuidv4 } from "uuid";
import { Rate } from "antd";

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
                <S.Rate>{props.ratingAverage}</S.Rate>
                <S.Rater>{props.myStore?.itemReview?.length}</S.Rater>
              </S.ItemStarRate>
              <S.CategoryTag>{props.myStore?.category}</S.CategoryTag>
            </S.SubTheme1>
            <S.SubTheme2>
              <S.DibsOnItem onClick={props.heart}>
                <S.Heart src="/imgs/class/heart.png" />
                {props.myStore?.heart}
              </S.DibsOnItem>
              <S.DoShare>
                <S.Share src="/imgs/share.png" onClick={props.share} />
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
            {/* <S.Star src="/imgs/class/star.png" />
            <S.Star src="/imgs/class/star.png" />
            <S.Star src="/imgs/class/star.png" />
            <S.Star src="/imgs/class/star.png" />
            <S.Star src="/imgs/class/star.png" /> */}
            <Rate value={props.ratingAverage} />
            <S.Rate>{props.ratingAverage}</S.Rate>
            <S.Rater>{props.myStore?.itemReview?.length}</S.Rater>
          </S.ItemStarRate>

          {/* 이게 1번째 코드 <S.Review>
            {props.myStore?.review?.map((el: any) => (
              <div key={uuidv4()}>
                <div>{el.user}</div>
                <div>{el.rating}</div>
                <div>{el.createdAt}</div>
                <div>{el.contents}</div>
              </div>
            ))}
          </S.Review> */}

          {props.myStore?.itemReview?.map((el: any) => (
            <div key={uuidv4()}>
              <S.ReviewerInfo>
                <S.ReviewerPhoto src="/imgs/user.png" />
                <S.ReviewerSubInfo>
                  <S.ReviewerId>{el.user}</S.ReviewerId>
                  <S.ReviewerSubInfo2>
                    <S.PersonalRate>
                      <Rate value={el.rating} />
                    </S.PersonalRate>
                    <S.CreatedDate>{el.createdAt}</S.CreatedDate>
                  </S.ReviewerSubInfo2>
                </S.ReviewerSubInfo>
              </S.ReviewerInfo>
              <S.Review>{el.contents}</S.Review>
            </div>
          ))}

          {/* <S.ReviewerInfo>
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
          <S.Review></S.Review> */}
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
