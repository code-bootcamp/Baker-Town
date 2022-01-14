import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  display: flex;

  @media ${breakPoints.mobile} {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media ${breakPoints.tablet} {
    width: 100%;
    padding-left: 10px;
    padding-right: 30px;
  }
`;

export const SideBar = styled.div`
  margin-top: 79px;
  margin-right: 27px;

  @media ${breakPoints.mobile} {
    display: none;
  }

  @media ${breakPoints.tablet} {
    width: 20%;
  }
`;

export const SideTitle = styled.div`
  width: 246px;
  height: 66px;
  background-color: #f7f7f7;
  border-radius: 10px;
  font-size: 24px;
  font-weight: bold;
  padding-top: 20px;
  padding-left: 29px;
  margin-bottom: 16px;
  cursor: pointer;

  :hover {
    background: rgba(220, 220, 220, 0.1);
  }

  @media ${breakPoints.tablet} {
    width: 100%;
    font-size: 1em
  }
`;

export const SideButton = styled.div`
  font-size: 20px;
  padding-top: 5.5px;
  padding-bottom: 9.5px;
  padding-left: 29px;
  cursor: pointer;

  :hover {
    background: rgba(220, 220, 220, 0.1);
    font-weight: bold;
  }

  @media ${breakPoints.tablet} {
    font-size: 0.8em
  }
`;

export const SmallLine = styled.div`
  width: 187px;
  margin-left: 29px;
  border-bottom: 1px solid #e2e2e2;

  @media ${breakPoints.tablet} {
    width: 90%;
  }
`;

export const ItemList = styled.div`
  @media ${breakPoints.tablet} {
    width: 80%;
  }
`;

export const ListToSelect = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 72px;
  margin-bottom: 51px;
`;

export const ListTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ListTitleText = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 30px;

  @media ${breakPoints.tablet} {
    font-size: 1.5em;
    margin-left: 12px;
  }
`;

export const ListSelect = styled.select`
  height: 50px;
  width: 150px;
  padding-left: 55px;
  margin-right: 10px;
  border: 0px solid gray;
  cursor: pointer;
  :hover {
    color: gray;
  }
  :focus {
    /* outline: 1px solid rgba(0, 0, 0, 0.3); */
    outline: none;
  }
`;

export const ListOption = styled.option``;

export const ListContents = styled.div`
  width: 1000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media ${breakPoints.mobile} {
    width: 100%;
  }

  @media ${breakPoints.tablet} {
    width: 100%;
  }
`;

export const ItemWrapper = styled.div`
  margin-bottom: 80px;
  cursor: pointer;
  :hover {
    color: rgba(0, 0, 0, 0.5);
  }
  @media ${breakPoints.mobile} {
    width: 45%;
    margin-bottom: 40%;
  }
  @media ${breakPoints.tablet} {
    width: 30%;
    margin-bottom: 25%
    /* margin-top: 10% */
  }
`;

export const ItemImage = styled.img`
  width: 220px;
  height: 200px;
  border-radius: 10px;
  background-color: #c4c4c4;
  margin-bottom: 20px;
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 100%;
  }

  @media ${breakPoints.tablet} {
    width: 95%;
    height: 130%;
    /* margin-top: 2                                                        0px; */
  }
`;

export const ItemPatissierToPrice = styled.div`
  padding-left: 10px;

  @media ${breakPoints.tablet} {
    line-height: 5px
  }
`;

export const Patissier = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
  @media ${breakPoints.mobile} {
    font-size: 0.8em;
    /* padding-top: 5px; */
  }
`;

export const ItemName = styled.div`
  width: 218px;
  height: 30px;
  font-size: 17px;
  margin-bottom: 15px;
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media ${breakPoints.mobile} {
    height: 10px;
    width: 100%;
    font-size: 0.7em;
    margin-top: 5%;
    /* line-height: 50%; */
    /* background-color: pink; */
  }

  @media ${breakPoints.tablet} {
    width: 100%;
    font-size: 0.8em;
  }
`;

export const Line = styled.div`
  width: 220px;
  border-bottom: 1px solid rgba(220, 220, 220, 0.8);
  @media ${breakPoints.mobile} {
    width: 100%;
  }

  @media ${breakPoints.tablet} {
    width: 100%;
  }
`;

export const ItemPrice = styled.div`
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  @media ${breakPoints.mobile} {
    font-size: 0.8em;
  }

  @media ${breakPoints.tablet} {
    font-size: 0.9em;
  }
`;
