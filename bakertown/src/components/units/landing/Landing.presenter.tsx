import * as S from "./Landing.styles";
import { v4 as uuidv4 } from "uuid";
import { ClassSubject } from "./LandingSubject";
import { ILandingPresenterProps } from "./Landing.types";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AvatarPage from "../../commons/avatar/AvatarPage";

const LandingPresenter = (props: ILandingPresenterProps) => {
  // 반응형 헤더

  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    console.log(scrollPosition);
  });

  return (
    <>
      <S.HeaderWrapper
        // onScroll={scrollPosition < 100 ? originalHeader : changeHeader}
        className={scrollPosition < 90 ? "original_header" : "change_header"}
      >
        <S.Img
          onClick={props.landing}
          src={
            scrollPosition < 50
              ? "/imgs/landing/header01.png"
              : "/imgs/logo.png"
          }
        />
        <S.CategoryClass
          className={scrollPosition < 90 ? "original_header" : "change_header"}
          onClick={props.classList}
        >
          CLASS
        </S.CategoryClass>
        <S.CategoryStore
          className={scrollPosition < 90 ? "original_header" : "change_header"}
          onClick={props.storeList}
        >
          STORE
        </S.CategoryStore>
        <S.RoundDiv>
          <S.RoundDivInnerText
            placeholder="어떤 클래스를 원하세요?"
            onChange={props.keyWord}
            onKeyUp={props.enterKey}
          />
          <S.RoundDivCircle>
            <S.RoundDivInnerIcon
              src="/imgs/landing/searchicon01.png"
              onClick={props.search}
            />
          </S.RoundDivCircle>
        </S.RoundDiv>
        <S.HeartToLogin>
          <S.HeartRoundDivCircle>
            <S.HeartFilled
              src="/imgs/landing/heart01.png"
              onClick={props.heartClass}
            />
          </S.HeartRoundDivCircle>
          {props.currentUser?.uid ? (
            <AvatarPage scrollPosition={scrollPosition} />
          ) : (
            <S.LoginText
              scrollPosition={scrollPosition}
              className={
                scrollPosition < 90 ? "original_header" : "change_header"
              }
              onClick={props.signIn}
            >
              로그인
            </S.LoginText>
          )}
        </S.HeartToLogin>
      </S.HeaderWrapper>
      {/* 여기까지가 헤더임. 나중에 컴포넌트로 분리 */}
      <S.TopBanner></S.TopBanner>
      <S.TextWrapper>
        <S.TextTop>event</S.TextTop>
        <S.TextMiddleOne>지금 가장 핫한 클래스 </S.TextMiddleOne>
        <S.TextMiddleTwo>1+1 이벤트</S.TextMiddleTwo>
        <S.TextLow>아이와 함께하는 베이킹 클래스 지금 신청하세요!</S.TextLow>
      </S.TextWrapper>
      {/* 여기까지가 배너에요! */}
      <S.WholeWrapper>
        <S.InnerWrapper>
          <S.PopularClassWrapper>
            <S.SubjectWrapper>
              <S.SubjectTitle>인기 클래스</S.SubjectTitle>
              <S.SubjectView onClick={props.goPopular}>
                전체 인기 클래스 보기
              </S.SubjectView>
            </S.SubjectWrapper>
            <S.ClassesWrapper>
              <S.SliderWrapper>
                <Slider {...props.settings}>
                  {props.popular.map((el: any) => (
                    <ClassSubject
                      el={el}
                      key={uuidv4()}
                      classDetail={props.classDetail(el)}
                      // onClick={props.classDetail(el)}
                    />
                  ))}
                </Slider>
              </S.SliderWrapper>
              <S.SliderWrapper2>
                <Slider {...props.settings2}>
                  {props.popular.map((el: any) => (
                    <ClassSubject
                      el={el}
                      key={uuidv4()}
                      classDetail={props.classDetail(el)}
                      // onClick={props.classDetail(el)}
                    />
                  ))}
                </Slider>
              </S.SliderWrapper2>
              <S.SliderWrapper3>
                <Slider {...props.settings3}>
                  {props.popular.map((el: any) => (
                    <ClassSubject
                      el={el}
                      key={uuidv4()}
                      classDetail={props.classDetail(el)}
                      // onClick={props.classDetail(el)}
                    />
                  ))}
                </Slider>
              </S.SliderWrapper3>
            </S.ClassesWrapper>
          </S.PopularClassWrapper>
          <S.NewClassWrapper>
            <S.SubjectName>
              <S.SubjectWrapper>
                <S.SubjectTitle>신규 클래스</S.SubjectTitle>
                <S.SubjectView onClick={props.goRecent}>
                  전체 신규 클래스 보기
                </S.SubjectView>
              </S.SubjectWrapper>
              <S.ClassesWrapper>
                <S.SliderWrapper>
                  <Slider {...props.settings}>
                    {props.recent.map((el: any) => (
                      <ClassSubject
                        el={el}
                        key={uuidv4()}
                        classDetail={props.classDetail(el)}
                      />
                    ))}
                  </Slider>
                </S.SliderWrapper>
                <S.SliderWrapper2>
                  <Slider {...props.settings2}>
                    {props.recent.map((el: any) => (
                      <ClassSubject
                        el={el}
                        key={uuidv4()}
                        classDetail={props.classDetail(el)}
                      />
                    ))}
                  </Slider>
                </S.SliderWrapper2>
                <S.SliderWrapper3>
                  <Slider {...props.settings3}>
                    {props.recent.map((el: any) => (
                      <ClassSubject
                        el={el}
                        key={uuidv4()}
                        classDetail={props.classDetail(el)}
                      />
                    ))}
                  </Slider>
                </S.SliderWrapper3>
              </S.ClassesWrapper>
            </S.SubjectName>
          </S.NewClassWrapper>
          <S.EventWrapper>
            <S.SubjectWrapper>
              <S.SubjectTitle>새해 핫 아이템</S.SubjectTitle>
              <S.SubjectView onClick={props.storeList}>
                스토어 전체 보기
              </S.SubjectView>
            </S.SubjectWrapper>
            <S.EventItemWrapper>
              {new Array(3).fill(1).map((el) => (
                <S.EventImage key={uuidv4()} />
              ))}
            </S.EventItemWrapper>
          </S.EventWrapper>
          <S.MiddleBanner>
            <S.MiddleBannerWrapper>
              <S.MiddleBannerText onClick={props.bakingList}>
                베이킹 전혀 어렵지 않아요 ! 지금 배우러 가기{" "}
              </S.MiddleBannerText>
              <S.MiddleBannerArrow src="imgs/rightarrow.png" />
              <S.MiddleBannerImage src="imgs/landing/middlebannerimage.png" />
            </S.MiddleBannerWrapper>
          </S.MiddleBanner>
          <S.PromotionClass>
            <S.SubjectName>
              <S.SubjectWrapper>
                <S.SubjectTitle>기획 클래스</S.SubjectTitle>
                {/* <S.SubjectView>전체 기획 클래스 보기</S.SubjectView> */}
              </S.SubjectWrapper>
              <S.ClassesWrapper>
                <S.SliderWrapper>
                  <Slider {...props.settings}>
                    {props.promotion.map((el) => (
                      <ClassSubject
                        el={el}
                        key={uuidv4()}
                        classDetail={props.classDetail(el)}
                      />
                    ))}
                  </Slider>
                </S.SliderWrapper>
                <S.SliderWrapper2>
                  <Slider {...props.settings2}>
                    {props.promotion.map((el) => (
                      <ClassSubject
                        el={el}
                        key={uuidv4()}
                        classDetail={props.classDetail(el)}
                      />
                    ))}
                  </Slider>
                </S.SliderWrapper2>
                <S.SliderWrapper3>
                  <Slider {...props.settings3}>
                    {props.promotion.map((el) => (
                      <ClassSubject
                        el={el}
                        key={uuidv4()}
                        classDetail={props.classDetail(el)}
                      />
                    ))}
                  </Slider>
                </S.SliderWrapper3>
              </S.ClassesWrapper>
            </S.SubjectName>
          </S.PromotionClass>
          <S.CategoryWrapper>
            <S.SubjectTitle>클래스 카테고리</S.SubjectTitle>
            <S.CategoryButtonWrapper>
              <S.CategoryFirstWrapper>
                <S.CategoryDiv>
                  <S.CategoryButtonTitle>베이킹</S.CategoryButtonTitle>
                  <S.CategoryButton
                    value="베이킹"
                    onClick={props.category}
                  ></S.CategoryButton>
                </S.CategoryDiv>
                <S.CategoryDiv>
                  <S.CategoryButtonTitle>마카롱</S.CategoryButtonTitle>
                  <S.CategoryButton
                    value="마카롱"
                    onClick={props.category}
                  ></S.CategoryButton>
                </S.CategoryDiv>
                <S.CategoryDiv>
                  <S.CategoryButtonTitle>케이크</S.CategoryButtonTitle>
                  <S.CategoryButton
                    value="케이크"
                    onClick={props.category}
                  ></S.CategoryButton>
                </S.CategoryDiv>
              </S.CategoryFirstWrapper>
              <S.CategorySecondWrapper>
                <S.CategoryDiv>
                  <S.CategoryButtonTitle>
                    &nbsp;쿠&nbsp;&nbsp;&nbsp;키
                  </S.CategoryButtonTitle>
                  <S.CategoryButton
                    value="쿠키"
                    onClick={props.category}
                  ></S.CategoryButton>
                </S.CategoryDiv>
                <S.CategoryDiv>
                  <S.CategoryButtonTitle>
                    &nbsp;커&nbsp;&nbsp;&nbsp;피
                  </S.CategoryButtonTitle>
                  <S.CategoryButton
                    value="커피"
                    onClick={props.category}
                  ></S.CategoryButton>
                </S.CategoryDiv>
                <S.CategoryDiv>
                  <S.CategoryButtonTitle>쇼콜라</S.CategoryButtonTitle>
                  <S.CategoryButton
                    value="쇼콜라"
                    onClick={props.category}
                  ></S.CategoryButton>
                </S.CategoryDiv>
              </S.CategorySecondWrapper>
            </S.CategoryButtonWrapper>
          </S.CategoryWrapper>
        </S.InnerWrapper>
      </S.WholeWrapper>
    </>
  );
};

export default LandingPresenter;
