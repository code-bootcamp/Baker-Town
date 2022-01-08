import styled from "@emotion/styled";

export const Ba = styled.div`
  background-image: url("/imgs/login.jpg");
  /* background-position: center;
  background-size: cover;
  background-repeat: no-repeat; */
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: left;
`;

export const Aa = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 300px;

  /* background-image: url("/imgs/login.jpg"); */
`;
export const Wrapper = styled.div`
  position: relative;
  /* position: absolute; */
  width: 600px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  /* height: 40px; */
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: 300px;
  line-height: 65px;
  /* background: blue; */
`;

export const Label = styled.div`
  /* position: absolute;
  padding: 60px 24px 0px;
  left: 950px;
  right: 0px;
  font-size: 50px;
  font-weight: bold; */
  font-size: 55px;
  font-weight: bold;
  padding-top: 20px;
`;

export const NameLabel = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

export const EmailLabel = styled.div`
  font-size: 35px;
  font-weight: bold;
`;

export const PasswordLabel = styled.div`
  font-size: 35px;
  font-weight: bold;
`;

export const Name = styled.input`

  /* width: 350px;
  height: 45px;
  margin: 0px 950px 10px;
  left: 0px;
  right: 0px; */
    font-size: 30px;
    font-weight: normal;
    line-height: 30px;
    letter-spacing: -0.15px;
    margin: 0px;
    border: 3px solid rgb(239, 239, 239);
    background-color: white;
    height: 55px;
    flex: 1 1 auto;
    width: 100%;
    color: rgb(26, 26, 26);
    box-sizing: border-box;
    padding: 0px 16px;
    border-radius: 3px;
}
`;

export const Email = styled.input`
font-size: 14px;
    font-weight: normal;
    line-height: 20px;
    letter-spacing: -0.15px;
    margin: 0px;
    border: 3px solid rgb(239, 239, 239);
    background-color: white;
    height: 48px;
    flex: 1 1 auto;
    width: 100%;
    color: rgb(26, 26, 26);
    box-sizing: border-box;
    padding: 0px 16px;
    border-radius: 3px;
}
`;

export const Password = styled.input`
 font-size: 14px;
    font-weight: normal;
    line-height: 20px;
    letter-spacing: -0.15px;
    margin: 0px;
    border: 3px solid rgb(239, 239, 239);
    background-color: white;
    height: 48px;
    flex: 1 1 auto;
    width: 100%;
    color: rgb(26, 26, 26);
    box-sizing: border-box;
    padding: 0px 16px;
    border-radius: 3px;
}
`;

export const SignUpButton = styled.button`
  /* position: absolute;
  width: 100%;
  height: 50px;
  /* margin: 10px 950px 10px; */
  /* left: 0px;
  right: 0px; */
  /* background: orange; */
  /* width: 100%;
  cursor: pointer; */
  


  width: 100%;
  
  vertical-align: middle;

  color: rgb(255, 255, 255);
  background-color: rgb(255, 86, 0);
  border: 1px solid rgb(239, 239, 239);
  font-size: 30px;
  border: 3px solid
  /* padding: 0px 0px; */
  height: 60px;
`;
export const Error = styled.div`
  color: red;
`;
