import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./ClassDetail.styles";
import { IClassDetailPresenterProps } from "./ClassDetail.types";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

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
  };

  useEffect(() => {
    const script = document.createElement("script"); // <script></script>
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=56f2f6456a4bc97487f111ba4669797c&libraries=services";
    document.head.appendChild(script); // head에 script를 넣음

    // https://apis.map.kakao.com/web/documentation/#load
    // query string: 위 사이트에서 autoload=false를 넣으라고 했는데 뒤에 appkey도 넣어야 하기에 중간에 &을 넣어 합쳐준다.

    // script가 로드 된 후 실행
    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(37.48481, 126.89663), // 지도의 중심좌표.
          level: 5, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(
          props.myClass?.address,
          function (result: any, status: any) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              // 결과값으로 받은 위치를 마커로 표시합니다
              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });

              // 인포윈도우로 장소에 대한 설명을 표시합니다
              const infowindow = new window.kakao.maps.InfoWindow({
                content: `<div style="width:150px;text-align:center;padding:6px 0;border:1px solid ;">${props.myClass?.patissier}</div>`,
                // content: `<div style="background-color:transparent;">${props.myClass?.patissier}</div>`,
              });
              infowindow.open(map, marker);

              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              map.setCenter(coords);
            }
          }
        );
      });
    };
  }, []);

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
                  <S.ContentsCategory>
                    {props.myClass?.category}
                  </S.ContentsCategory>
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
                  <S.ClassImage src="/imgs/share.png" />
                </S.CarouselWrapper>
              </div>
              <div>
                <S.CarouselWrapper>
                  <S.ClassImage src="/imgs/good.png" />
                </S.CarouselWrapper>
              </div>
              <div>
                <S.CarouselWrapper>
                  <S.ClassImage src="/imgs/logo.png" />
                </S.CarouselWrapper>
              </div>
            </Slider>
          </S.ClassIntro>
          <S.PatissierIntro>
            <S.ClassRemarksTitle>
              ㅇㅇㅇ님과 함께하는 마카롱 클래스
            </S.ClassRemarksTitle>
            <S.ClassRemarksDetail>
              {props.myClass?.remarks}
            </S.ClassRemarksDetail>
            <S.ProgramIntro>
              <S.SubjectTitle>프로그램</S.SubjectTitle>
              <S.ProgramGuideBox>
                <div>
                  <div>{props.myClass?.contents}</div>
                </div>
                #.완성작품
                <S.ProgramImage>
                  <div>파티셰가 넣는 예시 이미지</div>
                </S.ProgramImage>
              </S.ProgramGuideBox>
            </S.ProgramIntro>
            <S.PatissierInfo>
              <S.SubjectTitle>개설자 정보</S.SubjectTitle>
              <S.PatissierWrapper>
                <S.PatissierPhoto src="/imgs/user.png" />
                <S.PatissierName>{props.myClass?.patissier} 파티셰</S.PatissierName>
                <S.ContactPatissier>연락하기</S.ContactPatissier>
              </S.PatissierWrapper>
              <S.PatissierContentsBox>
                <S.PatissierContents>
                  <div>{props.myClass?.patissier}</div>
                </S.PatissierContents>
              </S.PatissierContentsBox>
            </S.PatissierInfo>
          </S.PatissierIntro>
          <S.ClassLocationInfo>
            <S.SubjectTitle>위치정보</S.SubjectTitle>
            <S.LocationMap>
              <div id="map" style={{ width: "864px", height: "400px" }}></div>
            </S.LocationMap>
          </S.ClassLocationInfo>
          <S.ClassReviewInfo>
            <S.SubjectTitle>실제 수강생 후기</S.SubjectTitle>
            <S.ClassStarRate2>
              <S.Star2 src="/imgs/star.png" />
              <S.Star2 src="/imgs/star.png" />
              <S.Star2 src="/imgs/star.png" />
              <S.Star2 src="/imgs/star.png" />
              <S.Star3 src="/imgs/emptystar.png" />
              <S.Rate>4.9</S.Rate>
              <S.Rater>(1,700)</S.Rater>
            </S.ClassStarRate2>
            {new Array(2).fill(1).map(() => (
              <div key={uuidv4()}>
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
                <S.ReviewBox>
                  선생님 덕분에 제 2의 취미이자 일이 생겼어요 베이킹을 전공하고
                  결혼전까지 관련된 일만 하다가 아기 낳고 집에서 육아하며
                  결혼전까지 관련 일만 하다가 지내왔는데 가닥이 잡힌 것 같아요.
                  정말 감사합니다. 앞으로 쌤께 배운 것 응용하면서 발전시켜
                  볼게요. 감사합니다.
                </S.ReviewBox>
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
