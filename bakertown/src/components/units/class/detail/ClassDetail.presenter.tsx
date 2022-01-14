import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./ClassDetail.styles";
import { IClassDetailPresenterProps } from "./ClassDetail.types";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
import { Rate } from "antd";

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
                content: `<div style="width:150px;text-align:center;padding:6px 0;border:1px solid ;">${props.myClass?.address}</div>`,
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
  }, [props.myClass?.address]);

  return (
    <>
      <S.NavBarWrapper
        className={
          props.scrollPosition < 70 ? "original_header" : "change_header"
        }
      >
        <S.NavBarCategory>
          {/* <S.NavTextWrapper> */}
          <S.NavProgram
            onClick={props.GoProgram}
            isSelectedProgram={props.isSelectedProgram}
          >
            프로그램
            {/* <S.ProgramLine
              isSelectedProgram={props.isSelectedProgram}
            ></S.ProgramLine> */}
          </S.NavProgram>
          <S.NavPlace onClick={props.GoMap} isSelectedMap={props.isSelectedMap}>
            위치정보
            {/* <S.MapLine isSelectedMap={props.isSelectedMap}></S.MapLine> */}
          </S.NavPlace>
          <S.NavReview
            onClick={props.GoReview}
            isSelectedReview={props.isSelectedReview}
          >
            후기
            {/* <S.ReviewLine
              isSelectedReview={props.isSelectedReview}
            ></S.ReviewLine> */}
          </S.NavReview>
          {/* </S.NavTextWrapper> */}
        </S.NavBarCategory>
      </S.NavBarWrapper>
      <S.WholeWrapper>
        <S.UnderWrapper>
          <S.IntroWrapper>
            <S.ProgramWrapper ref={props.ProgramRef}>
              <S.ClassIntro>
                <S.ClassTitle>{props.myClass?.className}</S.ClassTitle>
                <S.SubComponentWrapper>
                  <S.SubTheme1>
                    <S.ClassStarRate>
                      <S.Star src="/imgs/class/star.png" />
                      <S.Rate>{props.ratingAverage}</S.Rate>
                      <S.Rater>(1,700)</S.Rater>
                    </S.ClassStarRate>
                    <S.CategoryTag>
                      <S.Category>
                        {props.myClass?.district} • {props.myClass?.category}
                      </S.Category>
                    </S.CategoryTag>
                  </S.SubTheme1>
                  <S.SubTheme2>
                    <S.DibsOnClass onClick={props.heart}>
                      <S.SubTheme2Heart src="/imgs/class/heart.png" />
                      {props.myClass?.heart}
                    </S.DibsOnClass>
                    <S.ClassShare>
                      <S.Share src="/imgs/share.png" />
                      공유
                    </S.ClassShare>
                  </S.SubTheme2>
                </S.SubComponentWrapper>
                <Slider {...settings}>
                  {props.myClass?.images?.map((el: any) => (
                    <div key={uuidv4()}>
                      <S.ClassImage
                        src={`https://storage.googleapis.com/${el}`}
                      />
                    </div>
                  ))}
                </Slider>
              </S.ClassIntro>
            </S.ProgramWrapper>
            <S.PatissierIntro>
              <S.ClassRemarksTitle>
                {props.myClass?.patissier}님과 함께하는 마카롱 클래스
              </S.ClassRemarksTitle>
              <S.ClassRemarksDetail>
                {props.myClass?.remarks}
              </S.ClassRemarksDetail>

              <S.ProgramIntro>
                <S.SubjectTitle>프로그램</S.SubjectTitle>

                <S.ProgramGuideBox>
                  <S.ProgramContents>
                    {props.myClass?.contents}
                  </S.ProgramContents>

                  <S.ProgramImage></S.ProgramImage>
                </S.ProgramGuideBox>
              </S.ProgramIntro>
            </S.PatissierIntro>
            <S.PatissierInfo>
              <S.SubjectTitle>개설자 정보</S.SubjectTitle>
              <S.PatissierWrapper>
                <S.PatissierPhoto src="/imgs/user.png" />
                <S.PatissierName>
                  {props.myClass?.patissier} 파티셰
                </S.PatissierName>
                <S.ContactPatissier onClick={props.goChat}>
                  연락하기
                </S.ContactPatissier>
              </S.PatissierWrapper>
              <S.PatissierContentsBox>
                <div>{props?.myClass?.introduce}</div>
              </S.PatissierContentsBox>
            </S.PatissierInfo>
            <S.ClassLocationInfo ref={props.MapRef}>
              <S.SubjectTitleMobile>위치정보</S.SubjectTitleMobile>
              <S.LocationMap>
                <div id="map" style={{ width: "100%", height: "400px" }}></div>
              </S.LocationMap>
            </S.ClassLocationInfo>
            {/* <S.PatissierInfo>
            <S.SubjectTitle>개설자 정보</S.SubjectTitle>
            <S.PatissierWrapper>
              <S.PatissierPhoto src="/imgs/user.png" />
              <S.PatissierName>
                {props.myClass?.patissier} 파티셰
              </S.PatissierName>
              <S.ContactPatissier>연락하기</S.ContactPatissier>
            </S.PatissierWrapper>
            <S.PatissierContentsBox>
              <div>파티셰의 한 줄 소개입니다.</div>
            </S.PatissierContentsBox>
          </S.PatissierInfo> */}
            <S.ClassReviewInfo ref={props.ReviewRef}>
              <S.SubjectTitleMobile onClick={props.review}>
                실제 수강생 후기
              </S.SubjectTitleMobile>
              <S.ClassStarRate2>
                <Rate value={props.ratingAverage} />
                <S.Rate>{props.ratingAverage}</S.Rate>
                <S.Rater>(1,700)</S.Rater>
              </S.ClassStarRate2>
              {props.myClass?.review?.map((el: any) => (
                <div key={uuidv4()}>
                  <S.ClassReview>
                    <S.ClassReviewerPhoto src="/imgs/user.png" />
                    <S.Label3>
                      <S.ClassReviewerId>{el.user}</S.ClassReviewerId>
                      <S.Label>
                        <S.PersonalRate>
                          <Rate value={el.rating} />
                        </S.PersonalRate>
                        <S.CreatedDate>{el.createdAt}</S.CreatedDate>
                      </S.Label>
                    </S.Label3>
                  </S.ClassReview>
                  <S.ReviewBox>{el.contents}</S.ReviewBox>
                </div>
              ))}
            </S.ClassReviewInfo>
            <S.ViewMore>177개의 후기 더보기</S.ViewMore>
          </S.IntroWrapper>
          <S.ScheduleWrapper>
            <S.ClassSchedule>
              <S.SmallTitle>예약 정보</S.SmallTitle>
              <S.SmallSmallTitle>
                예약 가능한 일정을 선택해주세요
              </S.SmallSmallTitle>
              {/* <div>{Object.keys(props.myClass?.applyClass[0])[1]}</div>
                <div>{Object.keys(props.myClass?.applyClass[0])[0]}</div> */}
              <S.ClassScheduleWrapper>
                {props.myClass?.applyClass?.classArray?.map(
                  (el: any, index: number) => (
                    <S.ClassArrayWrapper
                      key={uuidv4()}
                      onClick={props.selectDate(el, index)}
                    >
                      {/* <div>날짜: {el.class.date}</div>
                    <div>시작시간: {el.class.start}</div>
                    <div>최대인원: {el.class.member}</div> */}
                      <S.ClassButton>
                        {/* <S.SmallText>모집 타임</S.SmallText> */}
                        <S.ClassDateToClassLine>
                          <S.ClassDateToClassTime>
                            <S.ClassDate>{el.class.date}</S.ClassDate>
                            <S.ClassStartTime>
                              시작시간 |&nbsp;&nbsp; {el.class.start}
                            </S.ClassStartTime>
                            <S.ClassRunningTime>
                              수업시간 |&nbsp;&nbsp; {el.class.runningTime}
                            </S.ClassRunningTime>
                          </S.ClassDateToClassTime>
                          <S.SmallLine></S.SmallLine>
                        </S.ClassDateToClassLine>
                        <S.ClassStartTimeTwo>
                          <div>
                            신청완료 &nbsp;&nbsp;{el.class.membersName.length}명
                          </div>
                          <div>수강인원 &nbsp;&nbsp;{el.class.member}명</div>
                        </S.ClassStartTimeTwo>
                      </S.ClassButton>
                    </S.ClassArrayWrapper>
                  )
                )}
              </S.ClassScheduleWrapper>
              <S.ClassScheduleUnderWrapper>
                <S.ClassPrice>{props.myClass?.price}원</S.ClassPrice>
                <S.ReservationButton onClick={props.reservation}>
                  예약하기
                </S.ReservationButton>
              </S.ClassScheduleUnderWrapper>
            </S.ClassSchedule>
          </S.ScheduleWrapper>
        </S.UnderWrapper>
      </S.WholeWrapper>
    </>
  );
};

export default ClassDetailPresenter;
