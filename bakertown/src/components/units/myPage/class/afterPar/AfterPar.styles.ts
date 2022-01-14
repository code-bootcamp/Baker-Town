import { Contents } from "./../../chat/Chat.styled";
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
    /* display: none; */
    height: 100%;
  }
`;

export const ClassList = styled.div`
  margin-left: 40px;
  @media ${breakPoints.tablet} {
    width: 65%;
  }

  @media ${breakPoints.mobile} {
    /* display: none; */
    width: 100%;
    margin-left: 3%;
    margin-right: 3%;
  }
`;

export const ListTitle = styled.div``;

export const ListTitleText = styled.div`
  font-size: 32px;
  font-weight: bold;
  @media ${breakPoints.tablet} {
  }

  @media ${breakPoints.mobile} {
    /* display: none; */
    font-size: 1.5em;
  }
`;

export const ListContents = styled.div`
  width: 1070px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  /* background-color: red; */
  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    /* display: none; */
    width: 100%;
  }
`;

export const ClassWrapper = styled.div`
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
  }

  @media ${breakPoints.mobile} {
    /* display: none; */
    width: 100%;
    height: 100%;
    padding-top: 2%;
    padding-left: 3%;
    padding-bottom: 2%;
    margin-bottom: 5%;
  }
`;

export const Class = styled.div`
  /* background-color: pink; */
  display: flex;
  @media ${breakPoints.tablet} {
    width: 75%;
    height: 100%;
    justify-content: flex-start;
  }
  @media ${breakPoints.mobile} {
    width: 70%;
    height: 100%;
    justify-content: flex-start;
    /* margin-right: 0; */
  }
`;

export const ClassInfoWrapper = styled.div`
  padding-left: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${breakPoints.tablet} {
    width: 70%;
    height: 85%;
    padding-left: 3%;
  }

  @media ${breakPoints.mobile} {
    /* display: none; */
    width: 70%;
    height: 85%;
    padding-left: 3%;
  }
`;

export const ClassImage = styled.img`
  width: 162px;
  height: 140px;
  border-radius: 10px;
  background-color: yellow;

  @media ${breakPoints.tablet} {
    width: 130px;
    height: 110px;
  }

  @media ${breakPoints.mobile} {
    /* display: none; */
    width: 100px;
    height: 80px;
  }
`;

export const ClassPatissier = styled.div`
  width: 166px;
  height: 25px;
  margin-bottom: 9px;
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

export const ClassName = styled.div`
  width: 419px;
  height: 33px;
  margin-bottom: 48px;
  font-family: NotoSans;
  font-size: 24px;
  @media ${breakPoints.tablet} {
    width: 100%;
    margin-bottom: 7%;
  }

  @media ${breakPoints.mobile} {
    /* display: none; */
    width: 100%;
    font-size: 0.7em;
    margin-bottom: 0px;
  }
`;

export const ClassLine = styled.div`
  width: 1px;
  height: 140px;
  background-color: #bdb7b3;
  @media ${breakPoints.tablet} {
    height: 110px;
  }

  @media ${breakPoints.mobile} {
    /* display: none; */
    height: 80px;
  }
`;

export const ClassPeople = styled.div`
  width: 536px;
  font-family: NotoSans;
  font-size: 18px;
  margin-bottom: 20px;
  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    /* display: none; */
    width: 100%;
    margin-bottom: 0;
    font-size: 0.7em;
  }
`;

export const ClassSubWrapper = styled.div`
  width: 400px;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  @media ${breakPoints.tablet} {
    width: 25%;
    /* padding-left: 0; */
    margin-left: 0;
    align-items: center;
    justify-content: center;
  }

  @media ${breakPoints.mobile} {
    /* display: none; */
    width: 20%;
    margin-left: 5%;
    margin-top: 3%;
  }
`;
export const ClassDate = styled.div`
  font-size: 18px;
  color: #000;
  margin-bottom: 20px;
  @media ${breakPoints.tablet} {
    font-size: 0.9em;
    margin-bottom: 10%;
    width: 80%;
  }
  @media ${breakPoints.mobile} {
    font-size: 0.5em;
    margin-bottom: 20%;
  }
`;

export const WriteReview = styled.div`
  /* width: 50px; */
  /* height: 50px; */
  @media ${breakPoints.tablet} {
    width: 80%;
    margin-bottom: 10%;
  }
  @media ${breakPoints.mobile} {
    font-size: 0.5em;
  }
`;
