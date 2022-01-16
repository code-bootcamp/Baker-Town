import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  flex-grow: 0;
  background-color: #fff;
  /* background-color: red; */
  margin: 0px;
  padding-top: 70px;
  padding-left: 200px;
  padding-right: 40px;
  display: flex;

  @media ${breakPoints.mobile} {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media ${breakPoints.tablet} {
    width: 100%;
    padding-left: 25px;
    padding-right: 25px;
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
  display: flex;
  flex-direction: row;
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

export const ImageWrapper = styled.div`
  display: flex;
`;

export const Image = styled.img`
  width: 865px;
  height: 640px;
  border-radius: 10px;
  background-color: #c4c4c4;
  margin-top: 20px;
  object-fit: cover;
`;

export const RightWrapper = styled.div`
  @media ${breakPoints.tablet} {
    width: 40%;
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

export const SidebarWrapper = styled.div`
  width: 370px;
  height: 385px;
  flex-grow: 0;
  opacity: 0.5;
  border-radius: 10px;
  box-shadow: 8px 8px 40px 0 rgba(0, 0, 0, 0.25);
  background-color: #fff;
  margin-left: 38px;

  @media ${breakPoints.mobile} {
    display: none;
  }

  @media ${breakPoints.tablet} {
    width: 85%;
    /* margin-right: 120px */
  }
`;

export const Label = styled.div`
  width: 118px;
  height: 44px;
  font-size: 32px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #1e1e1e;
  margin-top: 70px;
`;

export const ProductDetail = styled.div`
  width: 864px;
  height: 200px;
  border-radius: 10px;
  background-color: #f7f7f7;
  margin-top: 30px;

  @media ${breakPoints.mobile} {
    width: 100%;
  }

  @media ${breakPoints.tablet} {
    width: 100%;
    height: 600px;
  }
`;

export const ProductDate = styled.div`
  width: 864px;
  height: 100px;
  border-radius: 10px;
  background-color: #f7f7f7;
  margin-top: 30px;

  @media ${breakPoints.mobile} {
    width: 100%;
  }

  @media ${breakPoints.tablet} {
    width: 100%;
  }
`;

export const Review = styled.div`
  width: 864px;
  height: 300px;
  border-radius: 10px;
  background-color: #f7f7f7;
  margin-top: 30px;

  @media ${breakPoints.mobile} {
    width: 100%;
  }

  @media ${breakPoints.tablet} {
    width: 100%;
  }
`;
