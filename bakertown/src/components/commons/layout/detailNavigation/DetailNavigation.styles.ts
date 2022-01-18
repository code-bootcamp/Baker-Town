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

//
//
//
//

export const RightWrapper = styled.div`
  width: 100%;
  height: 1200px;
  position: absolute;
  left: 0;
  /* top: 1000; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(1.5px);
  /* border: 10px dotted green; */
`;

export const SidebarWrapper = styled.div`
  backdrop-filter: blur(13.5px);
  width: 100%;
  height: 100%;
  /* background-color: white; */
  /* border: 1px solid black; */
  position: relative;
  z-index: 1;
  top: 500;
  /* left: 1000; */
  /* padding-left: 8%; */
  /* padding-top: 10px; */
  /* padding-right: 20px; */
  padding-left: 3%;
  padding-right: 5%;
  border-radius: 10px;
`;

export const Purchase = styled.div`
  width: 94%;
  height: 200px;
  border: 1px solid gray;

  /* padding-top: 20px; */
  /* background-color: navy; */
  position: fixed;
  margin-top: 70px;
  box-shadow: 2px 1px 19px 3px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* margin-left: 26px; */
  background-color: white;
`;

export const SideCategory = styled.div`
  color: #b4b4b4;
`;

export const SideItemName = styled.div`
  font-size: 30px;
`;

export const PriceToBuy = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
`;

export const SideItemPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 19px;
  font-weight: 600;
  margin-right: 10px;
  padding-top: 5px;
`;

export const ToBuyButton = styled.button`
  width: 105px;
  height: 44px;
  border: 0px solid black;
  border-radius: 31px;
  background-color: rgba(79, 51, 37, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    cursor: pointer;
  }
`;
