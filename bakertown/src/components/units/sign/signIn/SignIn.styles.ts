import styled from "@emotion/styled";

// export const Ba = styled.div`
//   /* background-image: url("/imgs/login.jpg"); */
//   /* background-position: center;
//   background-size: cover;
//   background-repeat: no-repeat; */
//   width: 100%;
//   height: 100vh;
//   background-repeat: no-repeat;
//   background-size: cover;
//   text-align: left;
//   background-color: #f7f0e8;
// `;

// export const Aa = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding-top: 300px;

//   /* background-image: url("/imgs/login.jpg"); */
// `;

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* background: #fbf5ef; */
`;

export const LoginWrapper = styled.div`
  width: 50vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoginInnerWrapper = styled.div`
  width: 50%;
  /* height: 100%; */
  /* background: gray; */
`;

export const BrandWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoLabel = styled.img`
  width: 20%;
  height: 100%;
  /* height: 100%; */
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
  /* color: #4f3325; */
  color: rgba(0, 0, 0, 0.7.5);
`;

export const Email = styled.input`
  background-color: white;
  border-radius: 5px;
  border: 0px solid gray;
  box-shadow: 0px 2px 7px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  width: 100%;
  height: 8%;
  font-size: 15px;
  padding-left: 10px;
  color: black;
  margin-top: 10px;
  :focus {
    /* outline: 1px solid rgba(0, 0, 0, 0.3); */
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
  color: rgba(0, 0, 0, 0.7.5);
`;

export const Password = styled.input`
  background-color: white;
  border-radius: 5px;
  border: 0px solid gray;
  box-shadow: 0px 2px 7px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  width: 100%;
  height: 8%;
  font-size: 20px;
  padding-left: 10px;
  color: black;
  margin-top: 10px;
  :focus {
    /* outline: 1px solid rgba(0, 0, 0, 0.3); */
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
`;

export const PhotoWrapper = styled.div`
  background-image: url("/imgs/login/login03.jpg");
  width: 50vw;
  height: 100vh;
  border: 0px solid gray;
  background-position: bottom -100px center;
  /* opacity: 0.9; */
  background-repeat: no-repeat;
  box-sizing: border-box;
  overflow: hidden;
  /* box-shadow: inset 9px -300px 67px -3px rgba(0, 0, 0, 0.1); */
  background-size: cover;
`;
// export const SignUpButton = styled.button`
//   margin-top: 5px;
//   width: 100%;
//   height: 50px;
//   border-radius: 5px;
//   background-color: #4f3325;
//   color: white;
//   border: 0px solid gray;
// `;
// export const NameLabel = styled.div`
//   font-size: 30px;
//   font-weight: bold;
// `;

// export const EmailLabel = styled.div`
//   font-size: 35px;
//   font-weight: bold;
// `;

// export const PasswordLabel = styled.div`
//   font-size: 35px;
//   font-weight: bold;
// `;

// export const Name = styled.input`

//   /* width: 350px;
//   height: 45px;
//   margin: 0px 950px 10px;
//   left: 0px;
//   right: 0px; */
//     font-size: 30px;
//     font-weight: normal;
//     line-height: 30px;
//     letter-spacing: -0.15px;
//     margin: 0px;
//     border: 3px solid rgb(239, 239, 239);
//     background-color: white;
//     height: 55px;
//     flex: 1 1 auto;
//     width: 100%;
//     color: rgb(26, 26, 26);
//     box-sizing: border-box;
//     padding: 0px 16px;
//     border-radius: 3px;
// }
// `;

// export const Email = styled.input`
// font-size: 14px;
//     font-weight: normal;
//     line-height: 20px;
//     letter-spacing: -0.15px;
//     margin: 0px;
//     border: 3px solid rgb(239, 239, 239);
//     background-color: white;
//     height: 48px;
//     flex: 1 1 auto;
//     width: 100%;
//     color: rgb(26, 26, 26);
//     box-sizing: border-box;
//     padding: 0px 16px;
//     border-radius: 3px;
// }
// `;

// export const Password = styled.input`
//  font-size: 14px;
//     font-weight: normal;
//     line-height: 20px;
//     letter-spacing: -0.15px;
//     margin: 0px;
//     border: 3px solid rgb(239, 239, 239);
//     background-color: white;
//     height: 48px;
//     flex: 1 1 auto;
//     width: 100%;
//     color: rgb(26, 26, 26);
//     box-sizing: border-box;
//     padding: 0px 16px;
//     border-radius: 3px;
// }
// `;

// export const SignUpButton = styled.button`
//   /* position: absolute;
//   width: 100%;
//   height: 50px;
//   /* margin: 10px 950px 10px; */
//   /* left: 0px;
//   right: 0px; */
//   /* background: orange; */
//   /* width: 100%;
//   cursor: pointer; */

//   width: 100%;

//   vertical-align: middle;

//   color: rgb(255, 255, 255);
//   background-color: rgb(255, 86, 0);
//   border: 1px solid rgb(239, 239, 239);
//   font-size: 30px;
//   border: 3px solid
//   /* padding: 0px 0px; */
//   height: 60px;
// `;
// export const Error = styled.div`
//   color: red;
// `;
