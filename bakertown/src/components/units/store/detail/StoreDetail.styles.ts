import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  flex-grow: 0;
  background-color: #fff;
  /* background-color: red; */
  margin-bottom: 100px;
  padding-top: 70px;
  padding-left: 100px;
  /* padding-right: 100px; */
  display: flex;

  @media ${breakPoints.mobile} {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media ${breakPoints.tablet} {
    width: 100%;
    padding-left: 25px;
    /* margin-right: 100px; */
  }
`;

export const LeftWrapper = styled.div`
  width: 864px;
  display: flex;
  flex-direction: column;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
  @media ${breakPoints.tablet} {
    width: 60%;
  }
`;

export const ItemIntro = styled.div``;

export const ItemName = styled.div`
  height: 44px;
  width: 100%;
  /* border: 1px solid gray; */

  font-size: 32px;
  font-weight: bold;
  margin-top: 70px;

  @media ${breakPoints.mobile} {
    width: 93%;
    font-size: 1.75em;
    margin-left: 19px;
    line-height: 41px;
    margin-top: 45px;
  }

  @media ${breakPoints.tablet} {
    width: 80%;
    font-size: 1.6em;
  }
`;

export const SubComponentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 28px;
  margin-bottom: 15px;
  @media ${breakPoints.mobile} {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 63px;
  }

  @media ${breakPoints.tablet} {
    width: 80%;
  }
`;

export const SubTheme1 = styled.div`
  display: flex;

  flex-direction: row;
  align-items: center;

  @media ${breakPoints.mobile} {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  @media ${breakPoints.tablet} {
    width: 80%;
  }
`;

export const ItemStarRate = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  /* padding-left: -10px; */

  @media ${breakPoints.mobile} {
    width: 30%;
  }
`;

export const Star = styled.img`
  width: 29px;
  height: 29px;
  margin-left: 10px;
  margin-bottom: 6px;

  @media ${breakPoints.mobile} {
    width: 16px;
    height: 16px;
    margin-left: 26px;
  }
`;

export const Rate = styled.div`
  font-size: 26px;
  font-weight: bold;
  margin-left: 20px;

  @media ${breakPoints.mobile} {
    margin-left: 12px;
    font-size: 1em;
  }
`;

export const Rater = styled.div`
  width: 57px;
  height: 25px;
  margin-left: 20px;
  margin-bottom: 5px;
  font-size: 20px;
  color: rgba(95, 95, 95, 0.5);
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const CategoryTag = styled.div`
  font-size: 21px;
  margin-left: 15px;
  margin-top: 18px;

  @media ${breakPoints.tablet} {
    width: 153px;
    font-size: 1.2em;

    /* background: pink; */
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    font-size: 0.9em;

    margin-right: 23px;
  }
`;

export const SubTheme2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* background: red; */
  @media ${breakPoints.mobile} {
    display: none;
  }

  @media ${breakPoints.tablet} {
    width: 40%;
    margin-left: 120px;
  }
`;

export const DibsOnItem = styled.div`
  width: 140px;
  height: 50px;
  border-radius: 5px;
  background-color: #eee;
  /* background-color: yellow; */
  margin-right: 8px;
  padding-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const Heart = styled.img`
  width: 21px;
  height: 23px;
  margin-right: 9px;
  padding-bottom: 2.5px;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const DoShare = styled.div`
  width: 140px;
  height: 50px;
  border-radius: 5px;
  background-color: #eee;
  padding-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const Share = styled.img`
  width: 25px;
  height: 28px;
  padding-bottom: 2.5px;
  margin-right: 8px;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const RightWrapper = styled.div`
  @media ${breakPoints.tablet} {
    width: 25%;
  }
`;

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemImage = styled.img`
  width: 864px;
  height: 640px;
  border-radius: 10px;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.7) 100%
  );

  @media ${breakPoints.mobile} {
    width: 100%;
  }

  @media ${breakPoints.tablet} {
    width: 100%;
    height: 500px;
  }
`;

export const Label = styled.div`
  width: 200px;
  height: 44px;
  font-size: 32px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #1e1e1e;
  margin-top: 100px;
`;

export const ProductDetail = styled.div`
  /* width: 864px;
  height: 200px;
  border-radius: 10px;
  background-color: #f7f7f7;
  margin-top: 30px; */
  margin-top: 50px;
  width: 100%;
  height: 100%;
  min-height: 500px;
  padding: 28px 30px 35px 30px;
  border-radius: 10px;
  background-color: #f7f7f7;

  @media ${breakPoints.mobile} {
    width: 100%;
  }

  @media ${breakPoints.tablet} {
    width: 100%;
    height: 600px;
  }
`;

export const PatissierWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: flex-start;

  @media ${breakPoints.mobile} {
    margin-top: 20px;
  }
`;

export const Photo = styled.img`
  width: 45px;
  height: 45px;
  margin-right: 9px;
`;

export const PatissierName = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding-right: 20px;
  padding-top: 12.5px;
  margin-left: 9px;

  @media ${breakPoints.mobile} {
    width: 94%;
    margin-left: 3px;
    font-size: 0.9em;
  }
`;

export const ContactPatissier = styled.button`
  width: 105px;
  height: 44px;
  margin-top: 3.5px;
  padding-top: 3.1px;
  border: 0px solid black;
  border-radius: 31px;
  background-color: rgba(79, 51, 37, 0.9);
  justify-content: space-evenly;
  font-size: 16px
  font-weight: bold; 
  color: white;
  cursor: pointer;

@media ${breakPoints.mobile} {
    width: 94%;
    font-size: 0.7em;
    margin-right: 10px;
    margin-top: 10px;
  }
`;

export const PatissierContentsBox = styled.div`
  width: 100%;
  /* height: 100%; */
  padding: 28px 30px 35px 30px;
  border-radius: 10px;
  background-color: #f7f7f7;
  margin-top: 10px;

  @media ${breakPoints.mobile} {
    width: 96%;
    margin-top: 20px;
  }
`;

export const ProductDate = styled.div`
  width: 864px;
  height: 100px;
  border-radius: 10px;
  background-color: #f7f7f7;
  margin-top: 30px;
  padding: 28px 30px 35px 30px;

  @media ${breakPoints.mobile} {
    width: 100%;
  }

  @media ${breakPoints.tablet} {
    width: 100%;
  }
`;

export const ReviewerInfo = styled.div`
  margin-top: 40px;
  display: flex;

  @media ${breakPoints.mobile} {
    width: 94%;
    margin-left: 17px;
  }
`;

export const ReviewerPhoto = styled.img`
  width: 58px;
  height: 58px;

  @media ${breakPoints.mobile} {
    width: 94%;
    margin-left: 17px;
    width: 45px;
    height: 45px;
  }
`;

export const ReviewerSubInfo = styled.div`
  margin-left: 9px;

  @media ${breakPoints.mobile} {
    width: 94%;
  }
`;

export const ReviewerId = styled.div`
  font-size: 18px;
  font-weight: bold;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const ReviewerSubInfo2 = styled.div`
  display: flex;
  align-items: center;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const PersonalRate = styled.div`
  /* width: 15px;
  height: 15px;
  margin-left: 3px;
  margin-bottom: 5px; */

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const CreatedDate = styled.div`
  margin-left: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #c4c4c4;
`;

export const Review = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 200px;
  border-radius: 10px;
  background-color: #f7f7f7;
  font-size: 20px;
  padding-left: 20px;
  padding-top: 20px;
  padding-right: 20px;
  /* margin-bottom: 200px; */

  @media ${breakPoints.mobile} {
    width: 94%;
    margin-left: 17px;
  }

  @media ${breakPoints.tablet} {
    width: 98%;
    margin-left: 17px;
    margin-bottom: 100px;
  }
`;

export const SidebarWrapper = styled.div`
  width: 370px;
  height: 200px;
  position: fixed;
  box-shadow: 2px 1px 19px 3px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #fff;
  margin-top: 90px;
  margin-left: 60px;
  padding-top: 15px;
  padding-left: 20px;
  padding-right: 25px;

  @media ${breakPoints.mobile} {
    display: none;
  }

  @media ${breakPoints.tablet} {
    width: 31%;
    /* margin-right: 120px */
  }
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
