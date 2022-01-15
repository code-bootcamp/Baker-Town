import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const ChatWrapper = styled.div`
  margin-bottom: 50px;
  /* overflow: auto; */
  width: 100%;
  max-width: 330px;

  @media ${breakPoints.mobile} {
    display: none;
  }
  @media ${breakPoints.tablet} {
    width: 40%;
  }
`;

export const MessageWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 407px;
  padding: 30px;
  border-bottom: 1px solid #959595;

  @media ${breakPoints.tablet} {
    width: 330px;
  }
`;
export const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: gray;
  object-fit: cover;
`;
export const Contents = styled.div`
  width: 100%;
  max-width: 407px;
  padding-top: 5px;

  @media ${breakPoints.tablet} {
    /* background: purple; */
  }
`;
export const LastTime = styled.span`
  font-size: 12px;
  color: gray;
`;
export const Name = styled.div`
  font-weight: 600;
  font-size: 18px;
`;

export const NameAndTime = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background: yellow; */
  /* width: 780px; */
  /* width: 100%; */
  width: 300px;

  @media ${breakPoints.tablet} {
  }
`;
