import styled from "@emotion/styled";

export const Box = styled.div``;
export const ChatInputWrapper = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
`;
export const CommentsInputWrite = styled.input`
  width: 311px;
  height: 42px;
  background-color: #f3f3f3;
  border: none;
  padding-left: 12px;
  outline: none;
`;
export const CommentsBnt = styled.div`
  width: 79px;
  height: 42px;
  background-color: #8915a6;
  font-family: "NotoSansKRregular";
  font-size: 16px;
  color: #fff;
  text-align: center;
  line-height: 42px;
  cursor: pointer;
`;
export const GetMessageWrapper = styled.div`
  display: flex;
  width: 358px;
  margin-bottom: 5px;
`;
export const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-top: 3px;
  background-color: gray;
  object-fit: cover;
`;
export const GetMessageBox = styled.div`
  max-width: 260px;
  border-radius: 10px;
  background-color: lightgray;
  padding: 10px 10px;
`;
export const MessageDate = styled.div`
  font-size: 12px;
  padding-left: 3px;
  padding-top: 2px;
  padding-right: 1px;
`;
export const Name = styled.div`
  font-weight: 500;
`;
export const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* padding-top: 100px; */
  padding: 10px;
  margin-bottom: 50px;
  overflow: auto;
  height: 730px;
`;
export const ProductWrapper = styled.div`
  width: 390px;
  height: 90px;
  display: flex;
  align-items: center;
  background-color: #b69acb;
  /* position: fixed;
  top: 100; */
`;
export const ProductImg = styled.img`
  width: 90px;
  height: 90px;
  object-fit: cover;
`;
export const ProductInfo = styled.div`
  padding: 0 15px;
`;
export const ProductName = styled.div`
  font-size: 16px;
  font-weight: 500;
`;
export const ProductPrice = styled.div`
  font-size: 16px;
  font-weight: 500;
  padding-top: 10px;
`;
export const MessageInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
`;
export const MyMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 5px;
`;
export const NewDate = styled.div`
  text-align: center;
`;
