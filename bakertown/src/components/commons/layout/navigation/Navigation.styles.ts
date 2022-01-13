import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  /* visibility: hidden; */
  display: none;

  @media ${breakPoints.tablet} {
    visibility: visible;
    display: inline;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    background-color: pink;
  }
  @media ${breakPoints.mobile} {
    /* visibility: visible; */
    display: inline;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    background-color: pink;
  }
`;
