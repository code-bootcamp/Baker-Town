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
            {/* <S.SubjectView>크리에이터 이야기 전체 보기</S.SubjectView> */}
          </S.SubjectWrapper>
          <S.StoresWrapper2>
            {new Array(3).fill(1).map((el) => (
              <S.CreatorImage />
            ))}
          </S.StoresWrapper2>
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
                    {el.images?.[0] ? (
                      <S.StoreImage
                        src={`https://storage.googleapis.com/${el.images?.[0]}`}
                        onClick={props.storeDetail(el)}
                      />
                    ) : (
                      <S.StoreImage onClick={props.storeDetail(el)} />
                    )}

                    <S.Store>{el.patissier}</S.Store>
                    <S.StoreName onClick={props.storeDetail(el)}>
                      {el.itemName}
                    </S.StoreName>
                    <S.SmallLine></S.SmallLine>
                    <S.StorePrice>
                      {Number(el.price).toLocaleString("ko-KR")} 원
                    </S.StorePrice>
                  </S.StoreWrapper>
                ))}
              </Slider>
            </S.SliderWrapper>
            <S.SliderWrapper2>
              <Slider {...props.settings2}>
                {props.popular.map((el: any) => (
                  <S.StoreWrapper key={uuidv4()}>
                    {el.images?.[0] ? (
                      <S.StoreImage
                        src={`https://storage.googleapis.com/${el.images?.[0]}`}
                        onClick={props.storeDetail(el)}
                      />
                    ) : (
                      <S.StoreImage onClick={props.storeDetail(el)} />
                    )}
                    <S.Store>{el.patissier}</S.Store>
                    <S.StoreName onClick={props.storeDetail(el)}>
                      {el.itemName}
                    </S.StoreName>
                    <S.SmallLine></S.SmallLine>
                    <S.StorePrice>
                      {Number(el.price).toLocaleString("ko-KR")} 원
                    </S.StorePrice>
                  </S.StoreWrapper>
                ))}
              </Slider>
            </S.SliderWrapper2>
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
                    {el.images?.[0] ? (
                      <S.StoreImage
                        src={`https://storage.googleapis.com/${el.images?.[0]}`}
                        onClick={props.storeDetail(el)}
                      />
                    ) : (
                      <S.StoreImage onClick={props.storeDetail(el)} />
                    )}
                    <S.Store>{el.patissier}</S.Store>
                    <S.StoreName onClick={props.storeDetail(el)}>
                      {el.itemName}
                    </S.StoreName>
                    <S.SmallLine></S.SmallLine>
                    <S.StorePrice>
                      {Number(el.price).toLocaleString("ko-KR")} 원
                    </S.StorePrice>
                  </S.StoreWrapper>
                ))}
              </Slider>
            </S.SliderWrapper>
            <S.SliderWrapper2>
              <Slider {...props.settings2}>
                {props.popular.map((el: any) => (
                  <S.StoreWrapper key={uuidv4()}>
                    {el.images?.[0] ? (
                      <S.StoreImage
                        src={`https://storage.googleapis.com/${el.images?.[0]}`}
                        onClick={props.storeDetail(el)}
                      />
                    ) : (
                      <S.StoreImage onClick={props.storeDetail(el)} />
                    )}
                    <S.Store>{el.patissier}</S.Store>
                    <S.StoreName onClick={props.storeDetail(el)}>
                      {el.itemName}
                    </S.StoreName>
                    <S.SmallLine></S.SmallLine>
                    <S.StorePrice>
                      {Number(el.price).toLocaleString("ko-KR")} 원
                    </S.StorePrice>
                  </S.StoreWrapper>
                ))}
              </Slider>
            </S.SliderWrapper2>
          </S.StoresWrapper>
        </S.SubjectName>

        <S.SubjectName>
          <S.SubjectWrapper>
            <S.SubjectTitle>홈카페 아이템 기획전</S.SubjectTitle>
            {/* <S.SubjectView>홈파티 요리 전체보기</S.SubjectView> */}
          </S.SubjectWrapper>
          <S.StoresWrapper4>
            {props.promotion?.map((el) => (
              <S.StoreWrapper2>
                <S.StoreImage2
                  src={`https://storage.googleapis.com/${el.images?.[0]}`}
                />
                <S.Store>{el.patissier}</S.Store>
                <S.StoreName2>{el.itemName}</S.StoreName2>
                <S.SmallLine2></S.SmallLine2>
                <S.StorePrice>
                  {Number(el.price).toLocaleString("ko-KR")}원
                </S.StorePrice>
              </S.StoreWrapper2>
            ))}
          </S.StoresWrapper4>
        </S.SubjectName>
      </S.Wrapper>
    </>
  );
};

export default StorePresenter;
