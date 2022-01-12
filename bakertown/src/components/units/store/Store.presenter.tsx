import * as S from "./Store.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { v4 as uuidv4 } from "uuid";
import { IStorePresenterProps } from "./Store.types";

const StorePresenter = (props: IStorePresenterProps) => {
  return (
    <>
      <S.Wrapper>
        <S.CreatorSubject>
          <S.SubjectWrapper>
            <S.SubjectTitle>크리에이터 이야기</S.SubjectTitle>
            <S.SubjectView>크리에이터 이야기 전체 보기</S.SubjectView>
          </S.SubjectWrapper>
          <S.StoresWrapper>
            {new Array(3).fill(1).map((el) => (
              <S.CreatorImage />
            ))}
          </S.StoresWrapper>
        </S.CreatorSubject>
        <S.SubjectName>
          <S.SubjectWrapper>
            <S.SubjectTitle>이번주 인기 상품</S.SubjectTitle>
            <S.SubjectView>인기 상품 전체 보기</S.SubjectView>
          </S.SubjectWrapper>
          <S.StoresWrapper>
            <S.SliderWrapper>
              <Slider {...props.settings}>
                {props.popular.map((el: any) => (
                  <S.StoreWrapper key={uuidv4()}>
                    <S.StoreImage />
                    <S.Store>{el.patissier}</S.Store>
                    <S.StoreName>{el.itemName}</S.StoreName>
                    <S.SmallLine></S.SmallLine>
                    <S.StorePrice>{el.price} 원</S.StorePrice>
                  </S.StoreWrapper>
                ))}
              </Slider>
            </S.SliderWrapper>
          </S.StoresWrapper>
        </S.SubjectName>
        <S.SubjectName>
          <S.SubjectWrapper>
            <S.SubjectTitle>이번 주 새로운 상품</S.SubjectTitle>
            <S.SubjectView onClick={props.recentList}>
              새로운 상품 전체보기
            </S.SubjectView>
          </S.SubjectWrapper>
          <S.StoresWrapper>
            <S.SliderWrapper>
              <Slider {...props.settings}>
                {props.recent.map((el: any) => (
                  <S.StoreWrapper>
                    <S.StoreImage />
                    <S.Store>{el.patissier}</S.Store>
                    <S.StoreName>{el.itemName}</S.StoreName>
                    <S.SmallLine></S.SmallLine>
                    <S.StorePrice>{el.price} 원</S.StorePrice>
                  </S.StoreWrapper>
                ))}
              </Slider>
            </S.SliderWrapper>
          </S.StoresWrapper>
        </S.SubjectName>
        <S.SubjectName>
          <S.SubjectWrapper>
            <S.SubjectTitle>
              손 쉽게 만드는 육즙 가득한 홈파티 요리
            </S.SubjectTitle>
            <S.SubjectView>홈파티 요리 전체보기</S.SubjectView>
          </S.SubjectWrapper>
          <S.StoresWrapper>
            {new Array(4).fill(1).map((el) => (
              <S.StoreWrapper>
                <S.StoreImage />
                <S.Store>잔슨빌</S.Store>
                <S.StoreName>
                  [연말 초특가] 육즉 가득 담은 독일 소세지 세트
                </S.StoreName>
                <S.SmallLine></S.SmallLine>
                <S.StorePrice>50,000 원</S.StorePrice>
              </S.StoreWrapper>
            ))}
          </S.StoresWrapper>
        </S.SubjectName>
      </S.Wrapper>
    </>
  );
};

export default StorePresenter;
