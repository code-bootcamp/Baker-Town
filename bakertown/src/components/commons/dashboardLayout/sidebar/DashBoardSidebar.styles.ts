import styled from "@emotion/styled";
import ListItem from "@mui/material/ListItem";

export const Wrapper = styled.div`
  width: 300px;
  height: 100vh;
  /* padding-top: 100px; */
  background-color: white;
  background-color: white;
  margin: 0px;
  padding-right: 0px;
  /* background-color: #f7f0e8; */
  box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.2);
  /* overscroll-behavior-y: none;
  position: fixed; */
`;

export const LogoWrapper = styled.div`
  width: 100%;
  margin: 0px 0px 0px 0px;
  display: flex;
  justify-content: center;
  padding: 24px 18px 23px 20px;
  /* background-color: white; */
  border: 10px solid rgba(0, 0, 0, 0.2);
  border-width: 0 0 0.1mm 0;
`;

export const LogoImage = styled.img`
  width: 65%;
  :hover {
    cursor: pointer;
  }
`;

export const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 30px;
  /* padding-top: 40px; */
  /* background-color: salmon; */
`;

export const ListItems = styled(ListItem)`
  width: 100%;
  padding-left: 30px;
  /* background-color: gray; */
`;
// 추후 사이드바 높이 반응형으로 조절하기.
