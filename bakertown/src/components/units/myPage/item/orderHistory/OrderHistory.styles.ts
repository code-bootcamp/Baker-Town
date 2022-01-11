import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 77px;
`;

export const OrderList = styled.div`
  margin-left: 40px;
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
`;

export const ListContents = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 51px;
  /* justify-content: space-between; */
  /* background-color: red; */
`;

export const Order = styled.div`
  margin-bottom: 40px;
`;

export const OrderDate = styled.div`
  font-size: 20px;
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
`;

export const ItemImage = styled.div`
  width: 162px;
  height: 140px;
  border-radius: 10px;
  background-color: yellow;
`;

export const ItemInfoWrapper = styled.div`
  width: 536px;
  margin-left: 20px;
  margin-right: 33px;
  padding-top: 20px;
`;

export const ItemInfo = styled.div`
  display: flex;
  margin-top: 48px;
`;

export const ItemPrice = styled.div`
  margin-right: 20px;
`;

export const ItemAmount = styled.div``;

export const AfterOrder = styled.div`
  margin-top: 24px;
  margin-left: 80px;
`;

export const TrackingShipment = styled.button`
  width: 110px;
  height: 40px;
  font-size: 16px;
  cursor: pointer;
`;

export const WriteReview = styled.button`
  width: 110px;
  height: 40px;
  margin-top: 10px;
  font-size: 16px;
  cursor: pointer;
`;

export const ItemName = styled.div`
  width: 419px;
  height: 33px;
  font-size: 24px;
`;

export const OrderLine = styled.div`
  width: 1px;
  height: 140px;
  background-color: #bdb7b3;
`;
