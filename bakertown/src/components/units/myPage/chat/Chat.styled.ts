import styled from "@emotion/styled";

export const MessageWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 890px;
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
  padding-top: 3px;
`;
export const LastTime = styled.span`
  font-size: 12px;
  color: gray;
`;
export const Name = styled.div`
  font-weight: 500;
  font-size: 16px;
`;
export const ChatWrapper = styled.div`
  margin-bottom: 50px;
  overflow: auto;
  height: 730px;
`;
export const NameAndTime = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
