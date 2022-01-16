import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  position: fixed;
  bottom: -2px;
  left: 0;
  right: 0;
  /* height: 50px; */
  background-color: white;
  padding: 10px;
  padding-top: 14px;
  padding-bottom: 7%;
  display: none;
  box-shadow: 5px -2px 26px -3px rgba(0, 0, 0, 0.5);

  @media ${breakPoints.tablet} {
    display: none;
    justify-content: space-evenly;
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    display: flex;
    justify-content: space-evenly;
  }
`;

export const NavButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  height: 100%;

  background-color: white;
  @media ${breakPoints.tablet} {
    width: 25%;
  }
`;

export const NavImage = styled.img`
  width: 39%;
  height: 39%;
  background: white;
  /* opacity: 0.8; */
  @media ${breakPoints.tablet} {
    /* width: 100%; */
    /* display: none; */
  }
`;

export const NavText = styled.div`
  font-size: 0.7em;
  padding-top: 6px;
  background: white;
  /* opacity: 0.8; */
`;
