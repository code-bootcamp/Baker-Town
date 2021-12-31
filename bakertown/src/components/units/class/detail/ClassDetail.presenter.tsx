import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./ClassDetail.styles";
import { IClassDetailPresenterProps } from "./ClassDetail.types";

const ClassDetailPresenter = (props: IClassDetailPresenterProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    allows: true,
  }
  
  return (
    <>
      <S.WholeWrapper>
        <S.IntroWrapper>
          <S.ClassIntro>
            <S.ClassTitle>{props.myClass?.className}</S.ClassTitle>

            <S.SubComponentWrapper>
              <S.SubTheme1>
                <S.ClassStarRate>
                  <S.Star src="/imgs/star.png" />
                  <S.Rate>4.9</S.Rate>
                  <S.Rater>(1,700)</S.Rater>
                </S.ClassStarRate>

                <S.CategoryTag>
                  <S.AreaCategory>송파구•</S.AreaCategory>
                  <S.ContentsCategory>마카롱</S.ContentsCategory>
                </S.CategoryTag>
              </S.SubTheme1>

              <S.SubTheme2>
                <S.DibsOnClass>
                  {/* <S.Heart src="/imgs/heart.png" /> */}
                  {/* <S.Heart >❤️ 100</S.Heart> */}
                  ❤️ 100
                </S.DibsOnClass>
                <S.ClassShare>
                  <S.Share src="/imgs/share.png" />
                  공유
                </S.ClassShare>
              </S.SubTheme2>
            </S.SubComponentWrapper>
            <Slider {...settings}>
              <div>
                <S.CarouselWrapper>
              <S.ClassImage src="/imgs/share.png"/>
              </S.CarouselWrapper>
              </div>
              <div>
                <S.CarouselWrapper>
              <S.ClassImage src="/imgs/good.png"/>
              </S.CarouselWrapper>
              </div>
              <div>
                <S.CarouselWrapper>
              <S.ClassImage src="/imgs/logo.png"/>
              </S.CarouselWrapper>
              </div>
              </Slider>
            
          </S.ClassIntro>

          <S.PatissierIntro>
            <S.ClassRemarksTitle>
              ㅇㅇㅇ님과 함께하는 마카롱 클래스
            </S.ClassRemarksTitle>
            <S.ClassRemarksDetail>
              가성비로 소문난 바로 그 클래스 맞습니다
            </S.ClassRemarksDetail>
            <S.ProgramIntro>
              <S.Program>프로그램</S.Program>
              <S.ProgramGuideBox>
                <div>
                  <div>프로그램 소개글</div>
                  <div>{props.myClass?.contents}</div>
                </div>
                #.완성작품
                <S.ProgramImage>
                  <div>파티셰가 넣는 예시 이미지</div>
                </S.ProgramImage>
              </S.ProgramGuideBox>
            </S.ProgramIntro>
            <S.PatissierInfo>
              <S.Patissier>개설자 정보</S.Patissier>
              <S.PatissierWrapper>
                <S.PatissierPhoto src="/imgs/user.png" />
                <S.PatissierName>홍길동 파티셰</S.PatissierName>
                <S.ContactPatissier>연락하기</S.ContactPatissier>
              </S.PatissierWrapper>
              <S.PatissierContentsBox>
                <S.PatissierContents>
                  <div>파티셰 소개글</div>
                  <div>{props.myClass?.patissier}</div>
                </S.PatissierContents>
              </S.PatissierContentsBox>
            </S.PatissierInfo>
          </S.PatissierIntro>

          <S.ClassLocationInfo>
            <S.LocationInfo>
              위치정보
              <div>{props.myClass?.address}</div>
            </S.LocationInfo>
            <S.LocationMap></S.LocationMap>
          </S.ClassLocationInfo>

          <S.ClassReviewInfo>
            <S.ClassReviewTitle>실제 수강생 후기</S.ClassReviewTitle>
            <S.ClassStarRate2>
              <S.Star2 src="/imgs/star.png" />
              <S.Star2 src="/imgs/star.png" />
              <S.Star2 src="/imgs/star.png" />
              <S.Star2 src="/imgs/star.png" />
              <S.Star3 src="/imgs/emptystar.png" />
              <S.Rate2>4.9</S.Rate2>
              <S.Rater2>(1,700)</S.Rater2>
            </S.ClassStarRate2>

            {new Array(2).fill(1).map((_, index) => (
              <div>
                <S.ClassReview>
                  <S.ClassReviewerPhoto src="/imgs/user.png" />
                  <S.Label3>
                    <S.ClassReviewerId>클레어</S.ClassReviewerId>

                    <S.Label>
                      <S.PersonalRate>
                        <S.Star4 src="/imgs/star.png" />
                        <S.Star4 src="/imgs/star.png" />
                        <S.Star4 src="/imgs/star.png" />
                        <S.Star4 src="/imgs/star.png" />
                        <S.Star5 src="/imgs/emptystar.png" />
                      </S.PersonalRate>
                      <S.CreatedDate>6월 28일</S.CreatedDate>
                      <S.Label2>100% 수강 후 작성</S.Label2>
                    </S.Label>
                  </S.Label3>
                </S.ClassReview>
                <S.ReviewBox></S.ReviewBox>

                <S.CommentResponse>
                  <S.Comment>
                    <S.CommentIcon src="/imgs/comment.png" />
                    <S.WriteComment>댓글 달기</S.WriteComment>
                  </S.Comment>

                  <S.Help>
                    <S.GoodIcon src="/imgs/good.png" />
                    <S.Helpful>7명에게 도움됨</S.Helpful>
                  </S.Help>
                </S.CommentResponse>
              </div>
            ))}
          </S.ClassReviewInfo>
          <S.ViewMore>177개의 후기 더보기</S.ViewMore>
        </S.IntroWrapper>

        <S.ScheduleWrapper>
          <S.ClassSchedule></S.ClassSchedule>
        </S.ScheduleWrapper>
      </S.WholeWrapper>
    </>
  );
};

export default ClassDetailPresenter;
