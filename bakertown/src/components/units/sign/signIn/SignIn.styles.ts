import styled from "@emotion/styled";
export const Aa = styled.div`
  display: flex;
`;
export const Wrapper = styled.div`
  width: 1100px;
  height: 1250px;
  /* border: 1px solid red; */
  float: left;
  margin-right: 8px;
`;

export const ImageWrapper = styled.div`
  width: 1135px;
  height: 1250px;
  /* border: 1px solid green; */
  float: left;
`;

export const Label = styled.div`
  position: absolute;
  padding: 60px 24px 0px;
  left: 350px;
  right: 0px;
  font-size: 50px;
  font-weight: bold;
`;

export const SignInLabel = styled.div`
  position: absolute;
  padding: 200px 24px 0px;
  /* padding-right: 20px; */
  left: 350px;
  right: 0px;
  font-size: 32px;
  font-weight: bold;
`;

export const EmailLabel = styled.div`
  padding: 270px 645px 10px;
  left: 350px;
  right: 0px;
  font-size: 25px;
`;

export const PasswordLabel = styled.div`
  /* position: absolute; */
  padding: 0px 645px 10px;
  /* padding-right: 20px; */
  left: 0px;
  right: 0px;
  font-size: 25px;
`;

export const Email = styled.input`
  width: 350px;
  height: 45px;
  margin: 0px 645px 10px;

  line-height: 35px;
`;

export const EmailError = styled.div`
  margin: 0px 370px 0px;
  color: red;
`;

export const Password = styled.input`
  width: 350px;
  height: 45px;
  margin: 0px 645px 10px;
  left: 0px;
  right: 0px;
  line-height: 35px;
`;

export const PasswordError = styled.div`
  margin: 0px 370px 0px;
  color: red;
`;

export const SignUp = styled.div`
  margin: 0px 645px 0px;
  font-size: 17px;
`;

export const Img = styled.img`
  width: 1135px;
  height: 1250px;
`;

export const SignInWithGoogle = styled.button`
  position: absolute;
  width: 350px;
  height: 50px;
  margin: 60px 370px 10px;
  left: 0px;
  right: 0px;
  background: yellow;
`;

export const SignInButton = styled.button`
  position: absolute;
  width: 350px;
  height: 50px;
  margin: 10px 370px 10px;
  left: 0px;
  right: 0px;
  background: orange;
`;
