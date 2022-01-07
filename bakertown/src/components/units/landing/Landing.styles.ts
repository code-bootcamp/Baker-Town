import styled from "@emotion/styled";

export const HeaderWrapper = styled.header`
  display: flex;
 justify-content: center;
  align-items: center;
  position: sticky;
  position: absolute;
  z-index: 3;
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

export const LogoWrapper = styled.div``;

export const Img = styled.img`
  width: 115px;
  height: 42px;
  transition: 300ms;
  :hover {
    cursor: pointer;
  }
`;

export const CategoryClass = styled.div`
  width: 75px;
  height: 28px;
  font-size: 24px;
  font-weight: 600;
  text-align: left;
  color: #fff;
  margin-left: 172px;

  &.change_header {
    color: black;
    transition: 500ms;
  }
  :hover {
    cursor: pointer;
  }
`;

export const CategoryStore = styled.div`
  width: 75px;
  height: 28px;
  font-size: 24px;
  font-weight: 600;
  text-align: left;
  color: #fafafa;
  opacity: 0.7;
  margin-left: 50px;

  &.change_header {
    color: black;
    transition: 500ms;
  }
  :hover {
    cursor: pointer;
  }
`;

export const RoundDiv = styled.div`
  width: 380px;
  height: 48px;
  flex-grow: 0;
  margin-left: 320px;
  /* padding-bottom: 3px; */
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

export const RoundDivInnerText = styled.input`
  width: 280px;
  height: 30px;
  flex-grow: 0;
  font-size: 16px;
  border: none;
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
  overflow: hidden;
`;

export const HeartRoundDivCircle = styled.div`
  width: 32px;
  height: 32px;
  background-color: #4f3325;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-left: 20px;
  :hover {
    cursor: pointer;
  }
`;

export const HeartFilled = styled.img`
  width: 12.4px;
  height: 12.4px;
`;

export const LoginText = styled.div`
  padding-left: 15px;
  /* width: 55px;
  height: 25px; */
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #4f3325;
  text-shadow: #fff 0px 0 30px;
  :hover {
    cursor: pointer;
  }
`;

export const HeartToLogin = styled.div`
  display: flex;
  align-items: center;
`;

export const TopBanner = styled.div`
  width: 100%;
  height: 680px;
  background-image: url("/imgs/landing/banner03.jpg");
  position: relative;
  background-position: bottom 0px center;
  background-size: 110%;
  background-repeat: no-repeat;
  box-sizing: border-box;
  overflow: hidden;
  box-shadow: inset 9px -300px 67px -3px rgba(0, 0, 0, 0.1);
  background-size: cover;
`;

export const TextWrapper = styled.div`
  width: 1308px;
  height: 680px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: absolute;
  z-index: 1;
`;

export const TextTop = styled.div`
  width: 78px;
  height: 38px;
  font-family: Roboto;
  font-size: 32px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
`;

export const TextMiddle = styled.div`
  width: 453px;
  padding-top: 20px;
  font-size: 50px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
`;

export const TextLow = styled.div`
  width: 639px;
  padding-top: 60px;
  font-size: 32px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
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
  :hover {
    cursor: pointer;
  }
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
  color: rgba(255, 255, 255, 0.8);

  background-image: ${(props) =>
    props.value === "베이킹" && "url(/imgs/baking.jpg)"};
  background-image: ${(props) =>
    props.value === "마카롱" && "url(/imgs/macaron.jpg)"};
  background-image: ${(props) =>
    props.value === "케이크" && "url(/imgs/cake.jpg)"};
  background-image: ${(props) =>
    props.value === "쿠키" && "url(/imgs/cookie.jpg)"};
  background-image: ${(props) =>
    props.value === "커피" && "url(/imgs/coffee.jpg)"};
  background-image: ${(props) =>
    props.value === "쇼콜라" && "url(/imgs/chocolat.jpg)"};
  background-position: center center;
  font-size: 32px;
  font-weight: bold;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: ease 0.4s;
    color: #ff4d12;
  }
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
