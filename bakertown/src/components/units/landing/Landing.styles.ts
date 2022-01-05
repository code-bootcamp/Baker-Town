import styled from "@emotion/styled";

export const HeaderWrapper = styled.header`
  display: flex;
  padding-left: 323px;
  align-items: center;
  position: sticky;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  transition: 500ms;
  background-color: transparent;
  background-size: cover;


  &.change_header {
    position: fixed;
    background-color: rgba(255, 255, 255, 1);
    padding-bottom: 10px;
    padding-top: 10px;
    transition: 500ms;
    box-shadow: -1px 5px 19px -3px rgba(0,0,0,0.21);
     }
  }
`;

export const Img = styled.img`
  width: 115px;
  height: 42px;
`;

export const CategoryClass = styled.div`
  width: 75px;
  height: 28px;
  font-size: 24px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
  margin-left: 172px;

  &.change_header {
    color: black;
    transition: 500ms;
  }
`;

export const CategoryStore = styled.div`
  width: 75px;
  height: 28px;
  font-size: 24px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #fafafa;
  opacity: 0.7;
  margin-left: 50px;

  &.change_header {
    color: black;
    transition: 500ms;
  }
`;

export const RoundDiv = styled.div`
  width: 380px;
  height: 48px;
  flex-grow: 0;
  margin-left: 346px;
  padding-bottom: 3px;
  border-radius: 90px;
  box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.2);
  background-color: #fafafa;
  padding-left: 40px;
  padding-right: 9.8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 500ms;
`;

export const RoundDivInnerText = styled.div`
  width: 163px;
  height: 22px;
  flex-grow: 0;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #706b68;
  transition: 500ms;
`;

export const RoundDivCircle = styled.div`
  width: 32px;
  height: 32px;
  flex-grow: 0;
  background-color: #4f3325;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export const RoundDivInnerIcon = styled.img`
  width: 12.4px;
  height: 12.4px;
`;

export const HeartRoundDivCircle = styled.div`
  width: 32px;
  height: 32px;
  flex-grow: 0;
  background-color: #4f3325;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-left: 20px;
`;

export const HeartFilled = styled.img`
  width: 12.4px;
  height: 12.4px;
`;

export const LoginText = styled.div`
  width: 50px;
  height: 25px;
  margin: 12.8px 0 10.2px 15px;
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #4f3325;
  text-shadow: #fff 0px 0 30px;
`;

export const TopBanner = styled.div`
  width: 100vw;
  height: 680px;
  background-image: url("/imgs/landing/banner03.jpg"),
    linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #000 80%);
  position: relative;
  background-position: bottom 0px center;
  background-size: 110%;
  background-repeat: no-repeat;
  box-sizing: border-box;
  overflow: hidden;
  box-shadow: inset 9px -300px 67px -3px rgba(0, 0, 0, 0.1);
  background-size: cover;

  /* background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 30%
  ); */
`;

export const Wrapper = styled.div`
  display: flex;
  width: 1920px;
  /* height: 2000px; */
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
  padding-left: 323px;
  padding-right: 323px;
  /* position: absolute; */
  /* background-color: yellow; */
  scroll-behavior: smooth;
  overflow: hidden;
`;

export const SubjectName = styled.div``;

export const SubjectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 120px;
`;

export const SubjectTitle = styled.div`
  font-size: 32px;
  font-weight: bold;
`;

export const NewYearSubjectWrapper = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-top: 300px;
`;

export const SubjectView = styled.div`
  font-size: 16px;
  padding-top: 20px;
`;

export const FamousSubjectWrapper = styled.div`
  display: flex;
  width: 1274px;
  justify-content: space-between;
  margin-top: 140px;
`;

export const ClassesWrapper = styled.div`
  display: flex;
  height: 300px;
  width: 1274px;
  justify-content: space-between;
  margin-top: 30px;
`;

export const NewClassesWrapper = styled.div`
  display: flex;

  width: 1274px;
  justify-content: space-between;
  margin-top: 30px;

  /* background-color: red; */
`;

export const HotClassesWrapper = styled.div`
  display: flex;
  margin-top: 30px;
  width: 1274px;
  justify-content: space-between;

  /* background-color: red; */
`;

export const SpecialClassesWrapper = styled.div`
  display: flex;

  width: 1274px;
  justify-content: space-between;
  margin-bottom: 120px;
  /* background-color: red; */
`;

export const SlickWrapper = styled.div`
  background-color: pink;
  display: flex;
`;

export const ClassWrapper = styled.div`
  height: 400px;
`;

export const ClassImage = styled.img`
  width: 290px;
  height: 180px;
  border-radius: 10px;
  background-color: #c4c4c4;
  margin-bottom: 20px;
  opacity: 0.5;
`;

export const ClassPatissier = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ClassName = styled.div`
  width: 268px;
  font-size: 18px;
  margin-bottom: 9.5px;
`;

export const SmallLine = styled.div`
  border-bottom: 1px solid #b9b9b9;
  margin-bottom: 9.5px;
`;

export const ClassPrice = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const EventSubject = styled.div``;

export const EventImage = styled.img`
  width: 400px;
  height: 400px;
  background-color: #c4c4c4;
  border-radius: 10px;
  opacity: 0.5;
`;

export const CategoryWrapper = styled.div``;

export const CategoryButtonWrapper = styled.div`
  width: 1274px;
  height: 277px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CategoryFirstWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CategorySecondWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CategoryButton = styled.button`
  width: 400px;
  height: 120px;
  border-radius: 10px;
  border: none;
  background-color: #c4c4c4;
  font-size: 32px;
  font-weight: bold;
`;

export const MiddleBanner = styled.div`
  width: 100%;
  height: 190px;
  background-color: #e1e1e1;
`;

export const NextIcon = styled.button`
  width: 30px;
  background-color: #e1e1e1;
`;

export const BeforeIcon = styled.button`
  width: 30px;
  background-color: #e1e1e1;
`;
