import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 77px;

  @media ${breakPoints.tablet} {
    padding-left: 2%;
    padding-right: 2%;
  }
  @media ${breakPoints.mobile} {
    height: 100%;
    margin-top: 3%;
  }
`;

export const TopWrapper = styled.div`
  display: flex;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  padding-top: 20px;

  @media ${breakPoints.tablet} {
    margin-bottom: 0%;
    padding-top: 0%;
  }
  @media ${breakPoints.mobile} {
    padding-top: 0%;
    margin-bottom: 0%;
  }
`;

export const OrderList = styled.div`
  margin-left: 40px;

  @media ${breakPoints.tablet} {
    margin-left: 2%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const ListTitle = styled.div`
  display: flex;
  font-family: Roboto;
  font-size: 32px;
  font-weight: bold;

  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const ListTitleText = styled.div`
  font-size: 32px;
  font-weight: bold;
  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
  }
`;

export const ListContents = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    width: 95%;
  }
`;

export const OrderWrapper = styled.div`
  width: 987px;
  border-radius: 10px;
  box-shadow: 3px 5px 20px 0 rgba(0, 0, 0, 0.1);
  border: solid 0.5px #e2e2e2;
  display: flex;
  padding-left: 30px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    padding-left: 4%;
    padding-top: 4%;
  }
`;

export const ItemImage = styled.img`
  width: 162px;
  height: 140px;
  border-radius: 10px;
  background-color: yellow;
  @media ${breakPoints.tablet} {
    /* width: 80px;
    height: 80px; */
    width: 220px;
    height: 120px;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    width: 200px;
    height: 120px;
  }
`;

export const ItemCategory = styled.div`
  width: 166px;
  margin-bottom: 30px;
  font-family: NotoSans;
  font-size: 18px;
  font-weight: bold;
  color: rgba(79, 51, 37, 0.9);

  @media ${breakPoints.tablet} {
    width: 100%;
    font-size: 1.2em;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const ItemInfo = styled.div`
  width: 536px;
  margin-left: 20px;
  margin-right: 33px;
  display: flex;
  flex-direction: column;

  @media ${breakPoints.tablet} {
    width: 100%;
    margin-top: 0%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const ItemName = styled.div`
  margin-bottom: 60px;
  font-family: NotoSans;
  font-size: 1.5em;

  @media ${breakPoints.tablet} {
    width: 100%;
    font-size: 1em;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    font-size: 0.8em;
  }
`;

export const ItemAmount = styled.div`
  margin-left: 10px;
  font-size: 24px;

  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const OrderDate = styled.div`
  width: 536px;
  height: 25px;
  font-family: NotoSans;
  font-size: 18px;

  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const Line = styled.div`
  width: 920px;
  height: 1px;
  background-color: #bdb7b3;
  margin-top: 35px;
  @media ${breakPoints.tablet} {
    width: 95%;
    margin-top: 0;
    margin-bottom: 0%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    margin-top: 0%;
  }
`;

export const ItemReview = styled.div`
  @media ${breakPoints.tablet} {
    width: 100%;
    margin-top: 0%;
    /* margin-left: 2%; */
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const SubTheme = styled.div`
  display: flex;
  align-items: center;
  @media ${breakPoints.tablet} {
    width: 90%;
    margin-left: 0%;
  }
  @media ${breakPoints.mobile} {
  }
`;

export const ItemStarRate = styled.div`
  display: flex;

  @media ${breakPoints.tablet} {
    width: 120%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const PersonalRate = styled.img`
  width: 27px;
  margin-top: 12px;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const CreatedDate = styled.div`
  margin-left: 16px;
  margin-top: 7px;

  color: #bdb7b3;
  @media ${breakPoints.tablet} {
    width: 100%;
    margin-right: 30%;
    margin-top: 0%;
    /* margin-top: 5%; */
  }
  @media ${breakPoints.mobile} {
    margin-right: 25%;
    margin-top: 0%;
  }
`;

export const ReviewRemarks = styled.div`
  margin-top: 20px;
  font-weight: bold;
  @media ${breakPoints.tablet} {
    margin-top: 0%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    margin-top: 1%;
  }
`;

export const Review = styled.div`
  margin-top: 20px;

  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    margin-top: 1%;
  }
`;

export const OrderLine = styled.div`
  width: 1px;
  height: 130px;
  background-color: #bdb7b3;
  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const Label = styled.div`
  width: 150px;
  padding-top: 10px;
  font-family: NotoSans;
  font-size: 18px;
  @media ${breakPoints.tablet} {
    padding-top: 0%;
  }
  @media ${breakPoints.mobile} {
    padding-top: 0%;
    /* padding-left: 8%; */
  }
`;

export const ReviewEdit = styled.button`
  margin-right: 10px;
  background-color: transparent;
  border: none;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }

  @media ${breakPoints.mobile} {
    /* width: 100%; */
  }
`;

export const ReviewDelete = styled.button`
  background-color: transparent;
  border: none;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }

  @media ${breakPoints.mobile} {
    /* width: 100%; */
  }
`;
