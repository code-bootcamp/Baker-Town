import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: sticky; */
  /* position: absolute; */
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  transition: 800ms;
  /* background-color: blue; */
  background-size: cover;
  border-bottom: 1px solid rgba(157, 157, 157, 0.2);
  @media ${breakPoints.tablet} {
    padding-left: 5%;
  }

  @media ${breakPoints.mobile} {
    /* display: none; */
  }
`;

export const InnerLogo = styled.div`
  width: 115px;
  height: 42px;
  transition: 300ms;
  :hover {
    cursor: pointer;
  }
  margin-top: 2px;
  @media ${breakPoints.tablet} {
    width: 100px;
    height: 35px;
  }

  @media ${breakPoints.mobile} {
    /* display: none; */
    width: 50%;
  }
`;

export const ClassTitle = styled.div`
  width: 75px;
  height: 28px;
  font-size: 24px;
  font-weight: 600;
  text-align: left;
  color: #4f3325;
  margin-left: 148px;
  cursor: pointer;

  :hover {
    color: #4f3325;
    opacity: 0.5;
    transition: 300ms;
  }
  @media ${breakPoints.tablet} {
    width: 5%;
    margin-left: 2%;
    font-size: 130%;
  }

  @media ${breakPoints.mobile} {
    /* display: none; */
    margin-left: 0px;
    width: 20%;
    font-size: 140%;
  }
`;

export const StoreTitle = styled.div`
  width: 75px;
  height: 28px;
  font-size: 24px;
  font-weight: 600;
  text-align: left;
  color: #4f3325;
  margin-left: 50px;
  cursor: pointer;

  :hover {
    color: #4f3325;
    opacity: 0.5;
    transition: 300ms;
  }
  @media ${breakPoints.tablet} {
    width: 20%;
    font-size: 130%;
  }

  @media ${breakPoints.mobile} {
    /* display: none; */
    /* margin-left: 10px; */
    width: 20%;
    font-size: 140%;
    margin-left: 5%;
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
  @media ${breakPoints.tablet} {
    width: 58%;
    height: 54%;
    margin-top: 5px;
    margin-left: 5%;
    /* margin-right: 5%; */
    padding-left: 1px;
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
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
  background-color: #fafafa;
  :focus {
    /* outline: 1px solid rgba(0, 0, 0, 0.3); */
    outline: none;
  }
  @media ${breakPoints.tablet} {
    /* width: 90%; */
    font-size: 1em;
    margin-left: 5%;
  }
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
  transition: 300ms;
  cursor: pointer;
  @media ${breakPoints.tablet} {
    width: 30px;
    height: 27px;
  }
`;

export const RoundDivInnerIcon = styled.img`
  width: 12.4px;
  height: 12.4px;
  overflow: hidden;
  transition: 300ms;
  @media ${breakPoints.tablet} {
    /* display: none; */
    width: 70%;
    height: 65%;
    padding-left: 1px;
    padding-right: 1px;
  }
  @media ${breakPoints.mobile} {
    /* display: none; */
    width: 100%;
  }
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
  transition: 300ms;
  cursor: pointer;
  @media ${breakPoints.tablet} {
    /* width: 50%; */
    /* width: 40%; */
    /* height: 120%; */
    margin-top: 1px;
  }
`;

export const HeartToLogin = styled.div`
  display: flex;
  align-items: center;

  transition: 300ms;
  @media ${breakPoints.tablet} {
    width: 30%;
    margin-top: 5px;
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
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
  transition: 300ms;
  cursor: pointer;
  :hover {
    color: #4f3325;
    opacity: 0.5;
  }
  @media ${breakPoints.tablet} {
    width: 80%;
    font-size: 1em;
  }
`;

export const HeartFilled = styled.img`
  width: 12.4px;
  height: 12.4px;
  transition: 300ms;
`;

export const LogoImg = styled.img`
   width: 115px;
  height: 42px;
  /* margin: 2px 172px 0px 61px; */
  @media ${breakPoints.tablet} {
    /* display: none; */
    /* width: 100px; */
  }
  @media ${breakPoints.mobile} {
    /* display: none; */
    /* width: 80%; */
    width: 100px;
  }
}
`;
