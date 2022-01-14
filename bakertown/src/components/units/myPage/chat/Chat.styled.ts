import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const ChatWrapper = styled.div`
  margin-bottom: 50px;
  /* overflow: auto; */
  height: 100%;
  width: 40%;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const MessageWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 30px;
  border-bottom: 1px solid #959595;
`;
export const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: gray;
  object-fit: cover;
`;
export const Contents = styled.div`
  width: 450px;
  padding-top: 5px;
  /* background: yellow; */
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
  width: 83%;
  /* width: 100%; */
`;
