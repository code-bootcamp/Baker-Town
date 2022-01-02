import styled from "@emotion/styled";
import ListItem from "@mui/material/ListItem";

export const Wrapper = styled.div`
  width: 400px;
  height: 100vh;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start; */
  align-items: flex-start;
  background-color: white;
  background-color: lightgray;
  padding-left: 80px;
  margin: 0px;
  padding-right: 0px;
  overscroll-behavior-y: none;
  position: fixed;
`;

export const ListWrapper = styled.div`
  /* background-color: salmon; */
`;

export const ListItems = styled(ListItem)`
  /* background-color: gray; */
`;

// 추후 사이드바 높이 반응형으로 조절하기.
