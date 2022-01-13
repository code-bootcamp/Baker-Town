import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 77px;

  @media ${breakPoints.tablet} {
    /* visibility: hidden; */
    width: 100%;
    /* padding-left: 5%; */
  }
  @media ${breakPoints.mobile} {
    /* visibility: hidden; */
    /* width: 100%; */
    /* padding-left: 5%; */
    width: 100%;
    margin-top: 0%;
    margin-right: 7%;
  }
`;

export const OrderList = styled.div`
  margin-left: 40px;
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const ListTitle = styled.div`
  display: flex;
  font-family: Roboto;
  font-size: 32px;
  font-weight: bold;
`;

export const ListTitleText = styled.div`
  font-size: 32px;
  font-weight: bold;

  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    font-size: 0.9em;
  }
`;

export const ListContents = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 51px;
  /* justify-content: space-between; */
  /* background-color: red; */
  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    width: 97%;
    margin-top: 0%;
  }
`;

export const Order = styled.div`
  margin-bottom: 40px;

  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const OrderDate = styled.div`
  font-size: 20px;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const OrderWrapper = styled.div`
  width: 987px;
  height: 180px;
  border-radius: 10px;
  box-shadow: 3px 5px 20px 0 rgba(0, 0, 0, 0.1);
  border: solid 0.5px #e2e2e2;
  display: flex;
  padding-left: 30px;
  padding-top: 20px;

  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 130px;
    padding-top: 2%;
    padding-left: 2%;
    /* padding-top: 10px; */
  }
`;

export const ItemImage = styled.div`
  width: 162px;
  height: 140px;
  border-radius: 10px;
  background-color: yellow;

  @media ${breakPoints.tablet} {
    margin-top:0px
    width: 300px;
    height: 120px;
  }
  @media ${breakPoints.mobile} {
    width: 500px;
    height: 110px;
  }
`;

export const ItemInfoWrapper = styled.div`
  width: 536px;
  margin-left: 20px;
  margin-right: 33px;
  padding-top: 20px;

  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    padding-top: 0px;
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  margin-top: 48px;

  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    /* width: 100%; */
    padding-top: 20px;
    margin-top: 0;
  }
`;

export const ItemPrice = styled.div`
  margin-right: 20px;

  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    font-size: 0.6em;
    /* padding-top: -40px; */
  }
`;

export const ItemAmount = styled.div`
  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const AfterOrder = styled.div`
  margin-top: 24px;
  margin-left: 80px;

  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    margin-top: 0%;
    margin-left: 0%;
  }
`;

export const TrackingShipment = styled.button`
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
  }
  @media ${breakPoints.mobile} {
    width: 76px;
    height: 25px;
    font-size: 0.5em;
  }
`;

export const WriteReview = styled.button`
  width: 100%;
  height: 40px;
  margin-top: 10px;
  font-size: 16px;

  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 25%;
    font-size: 0.05em;
  }
`;

export const ItemName = styled.div`
  width: 419px;
  height: 33px;
  font-size: 24px;

  @media ${breakPoints.mobile} {
    width: 100%;
    font-size: 0.8em;
    /* margin-top: 10px; */
  }
`;

export const OrderLine = styled.div`
  width: 1px;
  height: 140px;
  background-color: #bdb7b3;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    display: none;
  }
`;
