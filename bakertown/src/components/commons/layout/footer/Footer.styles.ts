import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  height: 190px;
  background-color: #f5f3f0;
  display: flex;
  justify-content: center;

  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const InnerLogo = styled.div`
  width: 115px;
  height: 42px;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 162px;

  @media ${breakPoints.tablet} {
    padding-left: 60px;
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const ClassTitle = styled.div`
  width: 130px;
  height: 22px;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: normal;
  text-align: left;
  color: #706b68;
  @media ${breakPoints.tablet} {
    display: none;
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const ClassTitle2 = styled.div`
  width: 217px;
  height: 54px;
  font-size: 10px;
  line-height: 1.8;
  letter-spacing: normal;
  text-align: left;
  color: #706b68;
  padding-top: 4px;
  @media ${breakPoints.tablet} {
    display: none;
    /* width: 100%; */
  }
  @media ${breakPoints.mobile} {
    /* display: none; */
    display: none;
  }
`;
export const StoreTitle = styled.div`
  width: 75px;
  height: 28px;
  margin: 12px 346px 8px 30px;
  opacity: 0.6;
  /* font-family: Roboto; */
  font-size: 24px;
  font-weight: bold;
  text-align: left;
  color: #4f3325;
  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const SeacrchBar = styled.div`
  width: 380px;
  height: 48px;
  margin: 10px 20px 0px 0px;
  padding: 8px 28px 8px 40px;
  border-radius: 80px;
  box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.2);
  background-color: #fafafa;
  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const HeartButton = styled.div`
  width: 32px;
  height: 32px;
  flex-grow: 0;
  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const SinInButton = styled.div`
  width: 60px;
  height: 25px;

  font-family: NotoSans;
  font-size: 18px;
  font-weight: bold;
  color: #4f3325;
  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const Img = styled.img`
   width: 115px;
  height: 42px;

  @media ${breakPoints.tablet} {
margin-left: 32px;
  }
  @media ${breakPoints.mobile} {
    display: none;

  }
  
}
`;

export const SecondColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 70px;

  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const FirstLabel = styled.div`
  font-size: 10px;
  font-weight: bold;
  color: #706b68;
  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    display: none;

    /* border: 10px dotted green; */
    /* display: none; */
  }
`;

export const SecondLabel = styled.div`
  font-size: 10px;
  font-weight: bold;
  color: #706b68;
  padding-top: 21px;
  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const LastColumn = styled.div`
  font-size: 10px;
  color: #706b68;
  padding-left: 195px;
  padding-top: 35px;

  @media ${breakPoints.tablet} {
    width: 100%;
    padding-left: 30px;
    padding-top: 0px;
    padding-bottom: 10px;
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`;
