import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  padding-left: 72px;
  margin-top: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    padding-left: 3%;
    margin-top: 0%;
  }
`;

export const ModifyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const LeftWrapper = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: salmon; */
  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 900px;
  height: 250px;
  padding-left: 138px;
  padding-right: 28px;
  margin-bottom: 50px;

  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    padding-left: 0%;
  }
`;

export const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-right: 250px;
  background-color: skyblue;
`;

export const ModifyTitle = styled.div`
  font-family: NotoSans-Bold;
  margin-bottom: 32px;
  font-weight: 600;
  font-style: normal;
  font-size: 20px;
`;

export const Name = styled.div`
  font-family: NotoSans-Bold;
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
  line-height: 25px;
`;

export const Title = styled.div`
  font-family: NotoSans-Bold;
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  line-height: 25px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const Label = styled.div`
  font-family: NotoSans-Regular;
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const ImageTitle = styled.div`
  font-family: NotoSans-Bold;
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  line-height: 25px;
`;
export const ImageLabel = styled.div`
  font-family: NotoSans-Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
`;

export const ImageModifyButton = styled.button`
  width: 200px;
  height: 64px;
  background: #5b5bc0;
  border-radius: 8px;
  font-family: NotoSans-Bold;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 19px;
  color: #ffffff;
  border: none;
  cursor: pointer;
  margin-top: 32px;
  background-color: #4f3325;

  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
  }
`;
export const UserName = styled.div`
  font-family: NotoSans-Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 24px;
  margin-top: 32px;

  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`;
export const Input = styled.input`
  width: 532px;
  height: 48px;
  padding-left: 10px;
  background: #e0e0e0;
  border: 1px solid #4f3325;
  border-radius: 8px;
  background-color: #ffffff;
  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const NameWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ModifyNameButton = styled.button`
  width: 200px;
  height: 48px;
  background: #5b5bc0;
  border-radius: 5px;
  border: none;
  font-family: NotoSans-Bold;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
  cursor: pointer;
  background-color: #4f3325;
`;

export const ModifyButton = styled.button`
  width: 200px;
  height: 48px;
  background: #5b5bc0;
  border-radius: 5px;
  border: none;
  font-family: NotoSans-Bold;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
  cursor: pointer;
  background-color: #4f3325;

  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const DeleteAccount = styled.button`
  width: 200px;
  height: 48px;
  background: #5b5bc0;
  border-radius: 5px;
  border: none;
  font-family: NotoSans-Bold;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
  cursor: pointer;
  background-color: #4f3325;
  display: none;

  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    display: inline;
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const ProfileUpload = styled.img`
  width: 240px;

  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`;
