import styled from "@emotion/styled";
import ListItem from "@mui/material/ListItem";

export const Wrapper = styled.div`
  width: 400px;
  height: 100vh;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: white;
  background-color: white;
  margin: 0px;
  padding-right: 0px;
  background-color: #f7f0e8;
  /* box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.2); */
  /* overscroll-behavior-y: none;
  position: fixed; */
`;

export const ListWrapper = styled.div`
  width: 100%;
  padding-top: 40px;
  /* background-color: salmon; */
`;

export const ListItems = styled(ListItem)`
  width: 100%;
  padding-left: 30px;
  /* background-color: gray; */
`;

// 추후 사이드바 높이 반응형으로 조절하기.
