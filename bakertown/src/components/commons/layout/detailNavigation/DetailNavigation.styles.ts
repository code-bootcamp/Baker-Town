import styled from "@emotion/styled";
import { Modal } from "antd";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: white;
  border-top: 1px solid #eaeaea;
  display: none;

  @media ${breakPoints.mobile} {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;

export const SmallImage = styled.img`
  width: 40px;
  height: 35px;
`;

export const ReservationButton = styled.button`
  width: 50%;
  height: 70%;
  border: none;
  background-color: #4f3325;
  color: white;
  font-size: 0.9em;
`;

export const ReservationModal = styled(Modal)`
  /* height: 100%; */
  border: 10px solid green;
`;
