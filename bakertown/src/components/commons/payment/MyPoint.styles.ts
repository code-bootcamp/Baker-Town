import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const MyPoint = styled.div`
  font-size: 27px;
  color: #ff4d12;

  @media ${breakPoints.tablet} {
    width: 80%;
  }

  @media ${breakPoints.mobile} {
    /* margin-left: 3%; */
  }
`;

export const ChargeButton = styled.button`
  width: 100%;
  height: 60px;
  border-radius: 0.5px;
  background-color: #4f3325;
  color: #f3f3f3;
  border: 0px solid gray;
  font-size: 23px;
  cursor: pointer;
  transition: 100ms;

  :hover {
    color: white;
    opacity: 0.95;
  }
  @media ${breakPoints.tablet} {
    width: 80%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 4%;
    font-size: 1.4em;
  }
`;
