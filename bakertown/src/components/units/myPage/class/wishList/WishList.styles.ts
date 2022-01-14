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
  }
`;

export const ClassList = styled.div`
  margin-left: 40px;
  @media ${breakPoints.tablet} {
    width: 100%;
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
    margin-bottom: 5%;
  }
`;

export const ListContents = styled.div`
  width: 1000px;
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
export const Class = styled.div`
  /* background-color: pink; */
  display: flex;
  @media ${breakPoints.tablet} {
    width: 75%;
    height: 1000%;
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

export const ClassInfoWrapper = styled.div`
  padding-left: 29.5px;
  margin-right: 29.5px;
  @media ${breakPoints.tablet} {
    height: 85%;
  }

  @media ${breakPoints.mobile} {
    /* display: none; */
    /* width: 50%; */
    height: 85%;
    margin-left: 2%;
    margin-right: 1%;
  }
`;

export const ClassImage = styled.img`
  width: 162px;
  height: 140px;
  border-radius: 10px;
  background-color: yellow;
  @media ${breakPoints.tablet} {
    width: 130px;
    height: 100px;
  }

  @media ${breakPoints.mobile} {
    /* display: none; */
    width: 120px;
    height: 100px;
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
  }

  @media ${breakPoints.mobile} {
    /* display: none; */
    font-size: 0.7em;
    width: 100%;
    height: 0;
    margin-bottom: 20%;
  }
`;

export const ClassName = styled.div`
  width: 536px;
  height: 33px;
  margin-bottom: 48px;
  font-family: NotoSans;
  font-size: 24px;
  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    /* display: none; */
    width: 100%;
    font-size: 0.9em;
    margin-bottom: 10px;
  }
`;

export const ClassLine = styled.div`
  width: 1px;
  height: 140px;
  background-color: #bdb7b3;
  @media ${breakPoints.tablet} {
    height: 120px;
  }
`;
