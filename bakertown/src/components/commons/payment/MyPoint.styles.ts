import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const MyPoint = styled.div`
  font-size: 27px;
  color: #ff4d12;
  @media ${breakPoints.tablet} {
    font-size: 1.2em;
  }
`;

export const ChargeButton = styled.button`
  width: 80%;
  height: 40px;
  border-radius: 5px;
  background-color: #4f3325;
  color: #f3f3f3;
  border: 1px solid;
  font-size: 23px;
  cursor: pointer;
  transition: 100ms;

  :hover {
    color: white;
    opacity: 0.95;
  }
  @media ${breakPoints.tablet} {
    width: 80%;
    height: 10%;
    font-size: 1em;
  }

  @media ${breakPoints.mobile} {
    width: 90%;
    height: 4%;
    font-size: 1.4em;
  }
`;

export const PointSelect = styled.select`
  width: 70%;
`;

export const PointOption = styled.option``;
