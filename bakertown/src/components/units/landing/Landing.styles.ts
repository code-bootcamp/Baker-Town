import styled from "@emotion/styled";

export const HeaderWrapper = styled.div`
  display: flex;
  padding-left: 323px;
  align-items: center;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  transition: 500ms;
  background-color: transparent;
`;

export const Img = styled.img`
  width: 115px;
  height: 42px;
`;

export const TopBanner = styled.div`
  width: 100vw;
  height: 680px;
  box-shadow: inset 56px -39px 60px 35px rgba(0, 0, 0, 0.1);
  background-image: url("/imgs/landing/banner02.jpg");
  background-position: center center;
  background-size: 100%;
  background-repeat: no-repeat;
  box-sizing: border-box;
  overflow: hidden;

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
