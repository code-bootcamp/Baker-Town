import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  background-color: white;
  border-top: 1px solid #eaeaea;

  display: none;

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
  @media ${breakPoints.tablet} {
    width: 25%;
  }
`;

export const NavImage = styled.img`
  width: 50%;
  height: 50%;
  @media ${breakPoints.tablet} {
    /* width: 100%; */
    /* display: none; */
  }
`;

export const NavText = styled.div`
  font-size: 0.7em;
`;
