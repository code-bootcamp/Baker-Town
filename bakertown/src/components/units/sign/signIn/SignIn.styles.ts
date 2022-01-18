import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media ${breakPoints.tablet} {
    /* visibility: hidden; */
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    padding-left: 5%;
    padding-right: 5%;
    width: 100%;
    margin-bottom: 40%;
  }
`;

export const LoginWrapper = styled.div`
  width: 50vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media ${breakPoints.tablet} {
    width: 100%;
    padding-left: 3%;
    padding-right: 3%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const LoginInnerWrapper = styled.div`
  width: 50%;
  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const BrandWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoLabel = styled.img`
  width: 20%;
  height: 100%;
`;

export const SignUpWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 100ms;

  :hover {
    color: #4f3325;
    opacity: 0.5;
  }
`;

export const SignUpLabel = styled.div`
  font-size: 15px;
  font-weight: normal;
  display: flex;
  flex-direction: row;
`;

export const Rightarrow = styled.img`
  margin-left: 12px;
  margin-bottom: 4px;
  width: 13px;
  height: 13px;
`;

export const LoginLabel = styled.div`
  font-size: 30px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-top: 90px;
  color: color: rgba(0, 0, 0, 0.7.5);

`;

export const EmailLabel = styled.div`
  font-size: 20px;
  font-weight: normal;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-top: 50px;
  color: rgba(0, 0, 0, 0.7.5);
  font-weight: bold;
`;

export const Email = styled.input`
  background-color: white;
  border-radius: 5px;
  border: 0px solid gray;
  box-shadow: 0px 2px 7px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  width: 100%;
  height: 40px;
  font-size: 18px;
  padding-left: 10px;
  color: black;
  margin-top: 10px;
  :focus {
    outline: none;
  }
`;

export const PasswordLabel = styled.div`
  font-size: 20px;
  font-weight: normal;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-top: 16px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.7.5);
`;

export const Password = styled.input`
  background-color: white;
  border-radius: 5px;
  border: 0px solid gray;
  box-shadow: 0px 2px 7px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  width: 100%;
  height: 40px;
  font-size: 18px;
  padding-left: 10px;
  color: black;
  margin-top: 10px;
  :focus {
    outline: none;
  }
`;

export const SignInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
`;

export const SignInButton = styled.button`
  width: 100%;
  height: 65px;
  border-radius: 0.5px;
  background-color: #4f3325;
  color: #f3f3f3;
  border: 0px solid gray;
  margin-top: 70px;
  font-size: 24px;
  cursor: pointer;
  transition: 100ms;

  :hover {
    color: white;
    opacity: 0.95;
  }
  @media ${breakPoints.mobile} {
    margin-top: 5px;
  }
`;

export const PhotoWrapper = styled.div`
  background-image: url("/imgs/login/login03.jpg");
  width: 50vw;
  height: 100vh;
  border: 0px solid gray;
  background-position: bottom -100px center;
  background-repeat: no-repeat;
  box-sizing: border-box;
  overflow: hidden;
  background-size: cover;

  @media ${breakPoints.tablet} {
    /* visibility: hidden; */
    width: 100%;
    /* padding-left: 5%; */
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`;
