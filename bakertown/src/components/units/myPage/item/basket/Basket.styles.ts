import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 77px;

  @media ${breakPoints.tablet} {
    padding-left: 2%;
    padding-right: 4%;
  }
  @media ${breakPoints.mobile} {
    height: 100%;
  }
`;

export const BasketList = styled.div`
  margin-left: 40px;
  @media ${breakPoints.tablet} {
    width: 100%;
    margin-left: 1%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    margin-left: 3%;
    margin-right: 3%;
  }
`;

export const BasketTitle = styled.div`
  font-family: Roboto;
  font-size: 32px;
  font-weight: bold;
`;

export const BasketTitleText = styled.div`
  font-size: 32px;
  font-weight: bold;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    font-size: 1.5em;
  }
`;

export const BasketCheckBoxContainer = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 20px;
  border: 1px solid black;
`;

export const BasketCheckBox = styled.input``;

export const BasketContents = styled.div`
  width: 1070px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;

    /* margin-top: 0px; */
  }
`;

export const ItemWrapper = styled.div`
  width: 987px;
  height: 180px;
  margin-bottom: 24px;
  padding-left: 30px;
  padding-top: 20px;
  display: flex;
  border-radius: 10px;
  box-shadow: 3px 5px 20px 0 rgba(0, 0, 0, 0.1);
  border: solid 0.5px #e2e2e2;

  @media ${breakPoints.tablet} {
    width: 100%;
    height: 100%;
    padding-top: 2%;
    padding-left: 3%;
    padding-bottom: 2%;
    margin-bottom: 5%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 100%;
    padding-top: 2%;
    padding-left: 3%;
    padding-bottom: 2%;
    margin-bottom: 5%;
  }
`;

export const ItemImage = styled.img`
  width: 162px;
  height: 140px;
  border-radius: 10px;
  background-color: yellow;

  @media ${breakPoints.tablet} {
    width: 130px;
    height: 110px;
  }
  @media ${breakPoints.mobile} {
    width: 100px;
    height: 80px;
  }
`;

export const ClassPatissier = styled.div`
  width: 166px;
  height: 25px;
  font-family: NotoSans;
  font-size: 18px;
  font-weight: bold;
  color: rgba(79, 51, 37, 0.9);

  @media ${breakPoints.tablet} {
    width: 100%;
    margin-bottom: 1%;
  }

  @media ${breakPoints.mobile} {
    /* display: none; */
    font-size: 0.7em;
    width: 100%;
    margin-bottom: 0;
  }
`;

export const ItemInfo = styled.div`
  padding-left: 29.5px;

  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const ItemName = styled.div`
  width: 419px;
  height: 33px;
  margin-bottom: 30px;
  font-family: NotoSans;
  font-size: 24px;
  @media ${breakPoints.tablet} {
    width: 100%;
    margin-bottom: 7%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    font-size: 0.7em;
    margin-bottom: 0px;
  }
`;

export const ItemPrice = styled.div`
  width: 536px;
  font-family: NotoSans;
  font-size: 18px;

  @media ${breakPoints.tablet} {
    width: 100%;
    font-size: 0.8em;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    font-size: 0.6em;
  }
`;

export const NumberSelect = styled.div``;

export const NumberOption = styled.div``;
// export const ClassLine = styled.div`
//   width: 1px;
//   height: 140px;
//   margin: -130px 29.5px 0 720px;
//   background-color: #bdb7b3;
// `;

// export const ClassPeople = styled.div`
//   width: 536px;
//   height: 25px;
//   margin: -40px 22px 1px 200px;
//   font-family: NotoSans;
//   font-size: 18px;
//   text-align: left;
// `;
