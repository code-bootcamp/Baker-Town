import styled from "@emotion/styled";

export const NavBarWrapper = styled.div`
  width: 100%;
  margin-left: 16px;
  height: 93px;
  position: fixed;
  display: flex;
  justify-content: center;
  background-color: white;
  box-shadow: 8px 8px 30px 0 rgba(0, 0, 0, 0.1);
  z-index: 2;

  &.change_header {
    position: fixed;
    top: 0;
  }
`;

export const NavBarCategory = styled.div`
  width: 1260px;
  height: 93px;
  display: flex;
  align-items: center;
`;

export const NavProgram = styled.div`
  width: 89px;
  height: 100px;
  font-size: 24px;
  font-weight: ${(props) => (props.isSelectedProgram ? "bold" : "none")};
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  display: flex;
  align-items: center;
  color: #1e1e1e;
  position: relative;
  cursor: pointer;
`;

export const ProgramLine = styled.div`
  width: 91px;
  height: 5px;
  position: absolute;
  border-radius: 10px;
  background-color: ${(props) =>
    props.isSelectedProgram ? "#1e1e1e" : "transparent"};
  top: 94px;
  transition: ${(props) => (props.isSelectedProgram ? "400ms" : "0s")};
`;

export const NavPlace = styled.div`
  width: 89px;
  /* height: 33px; */
  font-size: 24px;
  font-weight: ${(props) =>
    props.isSelectedMap && !props.isSelectedReview ? "bold" : "none"};
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #1e1e1e;
  margin-left: 30px;
  cursor: pointer;
  position: relative;
`;

export const MapLine = styled.div`
  width: 91px;
  height: 5px;
  position: absolute;
  border-radius: 10px;
  /* background-color: black; */
  background-color: ${(props) =>
    props.isSelectedMap ? "#1e1e1e" : "transparent"};
  top: 62px;
  transition: ${(props) => (props.isSelectedMap ? "400ms" : "0s")};
`;

export const NavReview = styled.div`
  width: 45px;
  /* height: 33px; */
  font-size: 24px;
  font-weight: ${(props) => (!props.isSelectedReview ? "none" : "bold")};
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #1e1e1e;
  margin-left: 30px;
  cursor: pointer;
`;

export const ReviewLine = styled.div`
  width: 48px;
  height: 5px;
  position: absolute;
  border-radius: 10px;
  /* background-color: black; */
  background-color: ${(props) =>
    props.isSelectedReview ? "#1e1e1e" : "transparent"};
  top: 91px;
  transition: ${(props) => (props.isSelectedReview ? "400ms" : "0s")};
`;

export const WholeWrapper = styled.div`
  width: 100%;
  /* height: 2000px; */
  display: flex;
  justify-content: center;
  padding-top: 162px;
  padding-left: 324px;
  padding-right: 324px;
  position: relative;
`;

export const IntroWrapper = styled.div`
  /* height: 2700px; */
  /* border: 1px solid gray; */
  width: 864px;
  /* margin-left: 320px */
  /* background-color: green; */
  display: flex;
  flex-direction: column;
  /* background-color: coral; */
`;

export const ClassIntro = styled.div`
  /* border: 1px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: center; */
`;

export const ClassTitle = styled.div`
  /* height: 60px; */
  /* justify-content: center; */
  height: 44px;
  width: 540px;
  /* border: 1px solid gray; */
  padding-bottom: 90px;
  font-size: 32px;
  font-weight: bold;
`;

export const SubComponentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SubTheme1 = styled.div`
  display: flex;

  padding-right: 255px;

  flex-direction: row;
  align-items: center;
`;

export const ClassStarRate = styled.div`
  display: flex;
  padding-top: 28px;
  padding-right: 30px;
`;

export const Star = styled.img`
  width: 30px;
  height: 30px;
`;

export const Rate = styled.div`
  width: 35px;
  height: 33px;
  font-size: 24px;
  font-weight: bold;
`;

export const Rater = styled.div`
  width: 57px;
  height: 25px;
  padding-left: 10px;
  padding-top: 5px;
  font-size: 18px;
  color: rgba(95, 95, 95, 0.5);
`;

export const CategoryTag = styled.div`
  padding-top: 32.8px;
  /* width: 150px; */
  display: flex;
  flex-direction: row;
  align-items: center;
  /* background-color: yellow; */
`;

export const Category = styled.div`
  font-size: 17px;
`;

// export const ContentsCategory = styled.div`
//   font-size: 24px;
// `;

export const SubTheme2 = styled.div`
  display: flex;
  padding-top: 10px;
  flex-direction: row;
  align-items: center;
`;

export const DibsOnClass = styled.div`
  width: 140px;
  height: 50px;
  border-radius: 5px;
  background-color: #eee;
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
`;

// export const Heart = styled.div`
//   display: ;
//   justify-content: row;
//   width: 21px;
//   height: 17.6px;
// `;

export const ClassShare = styled.div`
  width: 140px;
  height: 50px;
  border-radius: 5px;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
`;

export const Share = styled.img`
  width: 28px;
  height: 28px;
`;

export const CarouselWrapper = styled.div`
  display: flex;
`;

export const ClassImage = styled.img`
  /* height: 200px; */
  width: 865px;
  height: 640px;
  border-radius: 10px;
  background-color: #c4c4c4;
  margin-top: 20px;
  object-fit: cover;
`;

export const ProgramWrapper = styled.div``;

export const PatissierIntro = styled.div``;

export const ClassRemarksTitle = styled.div`
  width: 612px;
  height: 44px;
  margin-top: 50px;
  font-size: 32px;
  font-weight: bold;
  text-align: left;
  color: #1e1e1e;
`;

export const ClassRemarksDetail = styled.div`
  width: 477px;
  height: 33px;
  padding-top: 20px;
  font-size: 24px;
  text-align: left;
  color: #1e1e1e;
`;

export const ProgramIntro = styled.div`
  padding-top: 60px;
  font-size: 32px;
  font-weight: bold;
`;

export const SubjectTitle = styled.div`
  /* padding-top: 80px; */
  margin-top: 43px;
  /* width: 118px; */
  height: 44px;
  font-size: 32px;
  font-weight: bold;
`;

export const ProgramGuideBox = styled.div`
  margin-top: 50px;
  width: 864px;
  height: 980px;
  /* flex-grow: 0; */
  padding-left: 20px;
  padding-top: 20px;
  border-radius: 10px;
  background-color: #f7f7f7;
`;

export const ProgramImage = styled.div``;

export const PatissierInfo = styled.div``;

export const PatissierWrapper = styled.div`
  width: 311px;
  height: 78px;
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
`;

export const PatissierPhoto = styled.img`
  width: 58px;
  height: 58px;
  margin-right: 9px;
`;

export const PatissierName = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding-right: 20px;
  padding-top: 12.5px;
`;

export const ContactPatissier = styled.button`
width: 105px;
height: 44px;
margin-top: 3.5px;
padding-top: 3.1px;
border-radius: 31px;
background-color: #550000;
justify-content: space-evenly;
font-size: 16px
font-weight: bold; 
color: white;
cursor: pointer;
`;

export const PatissierContentsBox = styled.div`
  width: 861px;
  height: 300px;
  border-radius: 10px;
  background-color: #f7f7f7;
  font-size: 20px;
  padding-left: 20px;
  padding-top: 20px;
`;

export const ClassLocationInfo = styled.div`
  padding-top: 100px;
`;

export const LocationInfo = styled.div`
  margin-top: 70px;
  font-size: 32px;
  font-weight: bold;
`;

export const LocationMap = styled.div`
  width: 864px;
  height: 400px;
  margin-top: 50px;
  border-radius: 10px;
  background-color: #f7f7f7;
`;

export const ClassReviewInfo = styled.div`
  padding-top: 80px;
`;

export const ClassReviewTitle = styled.div`
  margin-top: 70px;
  font-size: 32px;
  font-weight: bold;
`;

export const ClassStarRate2 = styled.div`
  margin-top: 31.7px;
  display: flex;
`;

export const Star2 = styled.img`
  width: 26.7px;
  height: 27px;
`;

export const Star3 = styled.img`
  padding-top: 4.4px;
  margin-left: 2px;
  width: 19.9px;
  height: 23.5px;
`;

export const Rate2 = styled.div`
  margin-left: 20px;
  margin-bottom: 2px;
  width: 35px;
  height: 33px;
  font-size: 24px;
  font-weight: bold;
`;

export const Rater2 = styled.div`
  padding-top: 3px;
  padding-left: 20px;
  color: rgba(95, 95, 95, 0.5);
`;

export const ClassReview = styled.div`
  margin-top: 40px;
  display: flex;
`;

export const ClassReviewerPhoto = styled.img`
  width: 58px;
  height: 58px;
`;

export const Label3 = styled.div`
  margin-left: 9px;
`;

export const ClassReviewerId = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

export const Label = styled.div`
  display: flex;
  align-items: center;
`;

export const PersonalRate = styled.div``;

export const Star4 = styled.img`
  width: 15.8px;
  height: 16px;
`;

export const Star5 = styled.img`
  padding-top: 1px;
  margin-left: 2px;
  width: 12.2px;
  height: 12.8px;
`;

export const CreatedDate = styled.div`
  margin-left: 6px;
  font-size: 16px;
  font-weight: bold;
  color: #c4c4c4;
`;

export const Label2 = styled.div`
  margin-left: 16px;
  font-size: 16px;
  font-weight: bold;
  color: #c4c4c4;
`;

export const ReviewBox = styled.div`
  margin-top: 10px;
  width: 863px;
  height: 153px;
  border-radius: 10px;
  background-color: #f7f7f7;
  font-size: 20px;
  padding-left: 20px;
  padding-top: 20px;
  padding-right: 20px;
`;

export const CommentResponse = styled.div`
  display: flex;
  margin-top: 24px;
`;

export const Comment = styled.div`
  display: flex;
`;

export const CommentIcon = styled.img`
  width: 24.2px;
  height: 22px;
`;

export const WriteComment = styled.div`
  margin-left: 8px;
  font-size: 16px;
  font-weight: bold;
  color: #c4c4c4;
`;

export const Help = styled.div`
  margin-left: 21px;
  display: flex;
`;

export const GoodIcon = styled.img`
  width: 26px;
  height: 25px;
  padding-bottom: 2px;
  margin-bottom: 1px;
`;

export const Helpful = styled.div`
  margin-left: 8px;
  margin-top: 1px;
  font-size: 16px;
  font-weight: bold;
  color: #c4c4c4;
`;

export const ViewMore = styled.div`
  margin-top: 80px;
  margin-bottom: 150px;
  width: 863px;
  height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  background-color: #f7f7f7;
  font-size: 14px;
  font-weight: bold;
  color: #9d9d9d;
`;

export const ScheduleWrapper = styled.div`
  width: 380px;
  padding-left: 40px;
  /* padding-right: 320px; */
`;

export const ClassSchedule = styled.div`
  width: 370px;
  /* height: 550px; */
  /* border: 1px solid gray; */
  padding-left: 30px;
  padding-top: 20px;
  /* background-color: navy; */
  position: fixed;
  box-shadow: 8px 8px 30px 0 rgba(0, 0, 0, 0.1);
`;

export const ClassScheduleWrapper = styled.div`
  width: 350px;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
  overflow: scroll;
`;

export const SmallTitle = styled.div`
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 10px;
`;

export const ClassArrayWrapper = styled.div`
  :hover {
    cursor: pointer;
  }
  box-shadow: 8px 8px 30px 0 rgba(0, 0, 0, 0.1);
`;

export const SmallText = styled.div``;

export const ClassButton = styled.div`
  width: 300px;
  /* height: 100px; */
  padding-top: 10px;
  padding-left: 14.5px;
  padding-bottom: 10px;
  border: 2px solid #f7f7f7;
`;

export const ClassDate = styled.div``;

export const SmallLine = styled.div`
  margin-top: 10px;
  margin-bottom: 15px;
  border-bottom: 2px solid #f7f7f7;
  width: 267px;
`;

export const ClassStartTime = styled.div``;

export const ClassRunningTime = styled.div``;

export const ClassPrice = styled.div`
  margin-top: 20px;
  margin-right: 45px;
  display: flex;
  justify-content: right;
  font-size: 20px;
  font-weight: bold;
`;

export const ReservationButton = styled.button`
  width: 100px;
  height: 39px;
  margin-top: 50px;
  margin-left: 110px;
  margin-bottom: 20px;
  padding-top: 7px;
  border: none;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  color: white;
  background-color: #662500;
  cursor: pointer;
`;
