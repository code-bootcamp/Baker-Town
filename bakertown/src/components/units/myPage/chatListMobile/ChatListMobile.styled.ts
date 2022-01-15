import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const ChatWrapper = styled.div`
  margin-bottom: 50px;
  /* overflow: auto; */
  /* height: 50%; */
  min-height: 690px;
  width: 50%;
  /* background: yellow; */
  margin-top: 40px;

  @media ${breakPoints.mobile} {
    display: inline;
    width: 80%;
  }
  @media ${breakPoints.tablet} {
    width: 70%;
  }
`;

export const MessageWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 30px;
  border-bottom: 1px solid #959595;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
  @media ${breakPoints.tablet} {
    width: 100%;
  }
`;

export const Contents = styled.div`
  /* width: 100%; */
  padding-top: 5px;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
  @media ${breakPoints.tablet} {
    /* background: purple; */
    width: 100%;
  }
`;

export const NameAndTime = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 780px;
  /* background: red; */

  /* width: 83%; */
  /* width: 100%; */

  @media ${breakPoints.mobile} {
    width: 282px;
  }
  @media ${breakPoints.tablet} {
    /* background: purple; */
  }
`;

export const LastTime = styled.span`
  font-size: 12px;
  color: gray;
  /* background: pink; */
  /* width: 200px; */
  /* padding-left: 80%; */
`;
export const Name = styled.div`
  font-weight: 600;
  font-size: 18px;

  /* width: 80%; */
  /* background: purple; */
`;
