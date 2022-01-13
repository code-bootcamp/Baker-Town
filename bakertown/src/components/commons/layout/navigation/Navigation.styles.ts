import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  background-color: white;
  border-top: 1px solid #eaeaea;

  display: none;

  @media ${breakPoints.tablet} {
    display: flex;
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
`;

export const NavImage = styled.img`
  width: 50%;
  height: 50%;
`;

export const NavText = styled.div`
  font-size: 0.7em;
`;
