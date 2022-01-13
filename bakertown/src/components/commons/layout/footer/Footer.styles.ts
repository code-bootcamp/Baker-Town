import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  height: 190px;
  background-color: #f5f3f0;
  display: flex;
  justify-content: center;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    padding-bottom: 15%;
    padding-left: 3%;
    padding-right: 3%;
    /* border: 10px dotted green; */
    /* display: none; */
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  @media ${breakPoints.tablet} {
    display: none;
  }
  @media ${breakPoints.mobile} {
    /* display: none; */
    width: 100%;
  }
`;

export const InnerLogo = styled.div`
  width: 115px;
  height: 42px;
`;

export const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 162px;
  @media ${breakPoints.tablet} {
    display: none;
  }
  @media ${breakPoints.mobile} {
    /* display: none; */
    padding-left: 30px;
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
    /* display: none; */
  }
  @media ${breakPoints.mobile} {
    /* display: none; */
    width: 100%;
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
`;

export const SeacrchBar = styled.div`
  width: 380px;
  height: 48px;
  margin: 10px 20px 0px 0px;
  padding: 8px 28px 8px 40px;
  border-radius: 80px;
  box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.2);
  background-color: #fafafa;
`;

export const HeartButton = styled.div`
  width: 32px;
  height: 32px;
  flex-grow: 0;
`;

export const SinInButton = styled.div`
  width: 60px;
  height: 25px;

  font-family: NotoSans;
  font-size: 18px;
  font-weight: bold;
  color: #4f3325;
`;

export const Img = styled.img`
   width: 115px;
  height: 42px;
  
}
`;
