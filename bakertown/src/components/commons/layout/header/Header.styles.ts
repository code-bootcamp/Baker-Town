import styled from "@emotion/styled";

export const Wrapper = styled.header``;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 1920px;
  height: 80px;
  background-color:#FBF5EF;
  padding-top: 10px;
  /* padding-bottom: 17px; */
};
`;

export const InnerLogo = styled.div`
  width: 115px;
  height: 42px;
  margin: 5px 70px 1px 140px;
  /* background-color: red; */
  :hover {
    cursor: pointer;
  }
`;

export const ClassTitle = styled.div`
  width: 75px;
  height: 28px;

  margin: 12px 50px 80px 72px;
  opacity: 0.6;
  /* font-family: Roboto; */
  font-size: 24px;
  font-weight: bold;
  color: #4f3325;
  :hover {
    cursor: pointer;
  }
  opacity: ${(props) => (props.isBold ? 1 : 0.6)};
`;

export const StoreTitle = styled.div`
  width: 75px;
  height: 28px;
  margin: 12px 346px 8px 30px;
  opacity: 0.6;
  /* font-family: Roboto; */
  font-size: 24px;
  font-weight: bold;
  text-align: left;
  color: #4f3325;
  :hover {
    cursor: pointer;
  }
  opacity: ${(props) => (props.isBold ? 1 : 0.6)};
`;

export const SeacrchBar = styled.input`
  width: 380px;
  height: 48px;
  /* margin: 10px 20px 0px 0px; */
  margin-top: 5px;
  padding: 8px 28px 8px 40px;
  border-radius: 80px;
  box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.2);
  background-color: #fafafa;
`;

export const HeartButton = styled.div`
  width: 32px;
  height: 32px;
  flex-grow: 0;
  margin: 8px 15px 8px 20px;
  padding: 10px 8.9px 10px 8.9px;
`;

export const SinInButton = styled.div`
  width: 60px;
  height: 25px;
  margin: 18px 0px 10.2px 20px;
  font-family: NotoSans;
  font-size: 18px;
  font-weight: bold;
  color: #4f3325;
  :hover {
    cursor: pointer;
  }
`;

export const Img = styled.img`
   width: 115px;
  height: 42px;
  margin: 5px 172px 1px 61px;
}
`;
