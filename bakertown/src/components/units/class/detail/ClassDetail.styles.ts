import styled from "@emotion/styled";
import {
  IClassDetailStylesMapProps,
  IClassDetailStylesProgramProps,
  IClassDetailStylesReviewProps,
} from "./ClassDetail.types";

export const NavBarWrapper = styled.div`
  width: 100vw;
  margin-left: 16px;
  height: 93px;
  position: absolute;
  display: flex;
  justify-content: center;
  background-color: white;
  box-shadow: 8px 8px 30px 0 rgba(0, 0, 0, 0.1);
  z-index: 2;
  /* top: 60px; */
  top: 80px;

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
  font-weight: ${(props: IClassDetailStylesProgramProps) =>
    props.isSelectedProgram ? "bold" : "none"};
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

// export const ProgramLine = styled.div`
//   width: 91px;
//   height: 5px;
//   position: absolute;
//   border-radius: 10px;
//   background-color: ${(props: IClassDetailStylesProgramProps) =>
//     props.isSelectedProgram ? "#1e1e1e" : "transparent"};
//   top: 94px;
//   transition: ${(props: IClassDetailStylesProgramProps) =>
//     props.isSelectedProgram ? "400ms" : "0s"};
// `;

export const NavPlace = styled.div`
  width: 89px;
  /* height: 33px; */
  font-size: 24px;
  font-weight: ${(props: IClassDetailStylesMapProps) =>
    props.isSelectedMap ? "bold" : "none"};
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

// export const MapLine = styled.div`
//   width: 91px;
//   height: 5px;
//   position: absolute;
//   border-radius: 10px;
//   /* background-color: black; */
//   background-color: ${(props: IClassDetailStylesMapProps) =>
//     props.isSelectedMap ? "#1e1e1e" : "transparent"};
//   top: 62px;
//   transition: ${(props) => (props.isSelectedMap ? "400ms" : "0s")};
// `;

export const NavReview = styled.div`
  width: 45px;
  /* height: 33px; */
  font-size: 24px;
  font-weight: ${(props: IClassDetailStylesReviewProps) =>
    !props.isSelectedReview ? "none" : "bold"};
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #1e1e1e;
  margin-left: 30px;
  cursor: pointer;
`;

// export const ReviewLine = styled.div`
//   width: 48px;
//   height: 5px;
//   position: absolute;
//   border-radius: 10px;
//   /* background-color: black; */
//   background-color: ${(props: IClassDetailStylesReviewProps) =>
//     props.isSelectedReview ? "#1e1e1e" : "transparent"};
//   top: 91px;
//   transition: ${(props) => (props.isSelectedReview ? "400ms" : "0s")};
// `;

export const WholeWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 162px;
  /* position: relative; */
  /* background: lightblue; */
  justify-content: center;
`;

export const UnderWrapper = styled.div`
  width: 1260px;
  height: 100%;
  /* background: yellow; */
  display: flex;
  /* justify-content: center; */
`;

export const IntroWrapper = styled.div`
  width: 864px;
  display: flex;
  flex-direction: column;
  /* background: green; */
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
  width: 100%;
  /* border: 1px solid gray; */

  font-size: 32px;
  font-weight: bold;
  margin-top: 70px;
`;

export const SubComponentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 28px;
`;

export const SubTheme1 = styled.div`
  display: flex;

  flex-direction: row;
  align-items: center;
`;

export const ClassStarRate = styled.div`
  display: flex;
  align-items: center;
`;

export const Star = styled.img`
  width: 29px;
  height: 29px;
`;

export const Rate = styled.div`
  font-size: 26px;
  font-weight: bold;
  margin-left: 20px;
`;

export const Rater = styled.div`
  width: 57px;
  height: 25px;
  margin-left: 20px;
  margin-bottom: 5px;
  font-size: 20px;
  color: rgba(95, 95, 95, 0.5);
`;

export const CategoryTag = styled.div`
  /* width: 150px; */
  display: flex;
  flex-direction: row;
`;

export const Category = styled.div`
  font-size: 21px;
  margin-left: 15px;
  margin-top: 2px;
`;

// export const ContentsCategory = styled.div`
//   font-size: 24px;
// `;

export const SubTheme2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* background: red; */
`;

export const SubTheme2Heart = styled.img`
  width: 21px;
  height: 21px;
  margin-right: 9px;
`;

export const DibsOnClass = styled.div`
  width: 140px;
  height: 50px;
  border-radius: 5px;
  background-color: #eee;
  /* background-color: yellow; */
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
  width: 25px;
  height: 28px;
  margin-right: 8px;
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
  width: 100%;
  height: 44px;
  margin-top: 50px;
  font-size: 32px;
  font-weight: bold;
  text-align: left;
  color: #1e1e1e;
`;

export const ClassRemarksDetail = styled.div`
  width: 100%;
  padding-top: 20px;
  font-size: 24px;
  text-align: left;
  color: #1e1e1e;
`;

export const ProgramIntro = styled.div`
  margin-top: 80px;
  font-size: 32px;
  font-weight: bold;
`;

export const SubjectTitle = styled.div`
  margin-top: 150px;
  height: 44px;
  font-size: 32px;
  font-weight: bold;
  /* background: yellow; */
`;

export const ProgramGuideBox = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 100%;
  min-height: 500px;
  padding: 35px 30px 35px 30px;
  border-radius: 10px;
  background-color: #f7f7f7;
`;

export const ProgramContents = styled.div`
  font-size: 20px;
  font-weight: normal;
`;

export const ProgramImage = styled.div``;

export const PatissierInfo = styled.div``;

export const PatissierWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: flex-start;
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
  margin-left: 9px;
`;

export const ContactPatissier = styled.button`
width: 105px;
height: 44px;
margin-top: 3.5px;
padding-top: 3.1px;
border: 0px solid black;
border-radius: 31px;
background-color: rgba(79, 51, 37, 0.9);
justify-content: space-evenly;
font-size: 16px
font-weight: bold; 
color: white;
cursor: pointer;
`;

export const PatissierContentsBox = styled.div`
  width: 100%;
  /* height: 100%; */
  padding: 35px 30px 35px 30px;
  border-radius: 10px;
  background-color: #f7f7f7;
  margin-top: 10px;
`;

export const ClassLocationInfo = styled.div``;

export const LocationInfo = styled.div`
  margin-top: 70px;
  font-size: 32px;
  font-weight: bold;
`;

export const LocationMap = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 50px;
  border-radius: 10px;
  background-color: #f7f7f7;
`;

export const ClassReviewInfo = styled.div``;

export const ClassReviewTitle = styled.div`
  margin-top: 70px;
  font-size: 32px;
  font-weight: bold;
`;

export const ClassStarRate2 = styled.div`
  margin-top: 31.7px;
  display: flex;

  align-items: center;
`;

export const Rate2 = styled.div`
  margin-left: 20px;
  margin-bottom: 2px;
  width: 35px;
  height: 33px;
  font-size: 24px;
  font-weight: bold;
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
  width: 400px;
`;

export const ClassSchedule = styled.div`
  width: 370px;
  height: 450px;
  /* border: 1px solid gray; */

  /* padding-top: 20px; */
  /* background-color: navy; */
  position: fixed;
  margin-top: 70px;
  box-shadow: 2px 1px 19px 3px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-left: 26px;
`;

export const ClassScheduleWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: auto;
  padding-top: 20px;
`;

export const SmallTitle = styled.div`
  font-weight: bold;
  font-size: 25px;
  padding-top: 20px;
  /* margin-bottom: 10px; */
`;

export const SmallSmallTitle = styled.div`
  font-size: 15px;
  font-weight: normal;
  padding-top: 3px;
  margin-bottom: 4px;
`;

export const ClassArrayWrapper = styled.div`
  :hover {
    background-color: rgba(0, 0, 0, 0.06);
    cursor: pointer;
  }
  background: rgba(247, 240, 232, 0.5);
  padding-bottom: 10px;
  margin-bottom: 3px;
  margin-top: 3px;
  /* margin-top: 10px; */
  /* border: 1px solid rgba(0, 0, 0, 0.1); */
  cursor: pointer;
  /* background: #f4f4f4; */
`;

export const ClassButton = styled.div`
  width: 330px;
  /* height: 100px; */
  padding-top: 15px;
  /* padding-left: 14.5px; */
  padding-bottom: 10px;

  /* border: 2px solid #f7f7f7; */
`;

// export const SmallText = styled.div`
//   font-size: 20px;
// `;

export const ClassDateToClassLine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ClassDateToClassTime = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding-left: 28px;
`;

export const ClassDate = styled.div`
  font-weight: bold;
  padding-bottom: 10px;
`;

export const SmallLine = styled.div`
  margin-top: 13px;
  margin-bottom: 15px;
  border-bottom: 1px solid rgba(79, 51, 37, 0.4);
  width: 267px;
`;
export const ClassStartTime = styled.div`
  /* font-weight: bold; */
`;

export const ClassStartTimeTwo = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ClassRunningTime = styled.div``;

export const ClassScheduleUnderWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  /* background: skyblue; */
  width: 100%;
  padding-left: 35px;
  padding-right: 35px;
  padding-bottom: 25px;
  padding-top: 20px;
`;

export const ClassPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 19px;
  font-weight: 600;
  margin-right: 10px;
`;

export const ReservationButton = styled.button`
  width: 105px;
  height: 44px;
  border: 0px solid black;
  border-radius: 31px;
  background-color: rgba(79, 51, 37, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
`;
