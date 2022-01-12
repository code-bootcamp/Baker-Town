import {
  Box,
  ChatInputWrapper,
  CommentsInputWrite,
  CommentsBnt,
  GetMessageWrapper,
  ProfileImg,
  GetMessageBox,
  MessageDate,
  Name,
  ChatWrapper,
  MessageInfo,
  MyMessageWrapper,
  NewDate,
} from "./chatRoom.styles";

export default function ChatRoomPresenter(props: any) {
  return (
    <Box>
      {/* 
        <ProductWrapper onClick={props.onClickToProduct}>
        <ProductImg
          src={`https://storage.googleapis.com/${props.productImg}`}
        />
        <ProductInfo>
          <ProductName>{props.productName}</ProductName>
          <ProductPrice>₩{props.productPrice}</ProductPrice>
        </ProductInfo>
      </ProductWrapper> */}
      <ChatWrapper ref={props.msgRef}>
        {props.messages.map((el: any, idx: number) => (
          <div key={el.key}>
            {props.messages[idx - 1]?.id.slice(0, 15) !==
              el.id.slice(0, 15) && <NewDate>{el.id.slice(0, 15)}</NewDate>}
            {props.myId !== el.writerId ? (
              <GetMessageWrapper>
                <ProfileImg
                  src={el.profilePicUrl}
                  //   onClick={props.onClickToProfile}
                />
                <MessageInfo>
                  <Name>{el.writer}</Name>
                  <GetMessageBox>{el.text}</GetMessageBox>
                  <MessageDate>{el.id}</MessageDate>
                </MessageInfo>
              </GetMessageWrapper>
            ) : (
              <MyMessageWrapper>
                <GetMessageBox>{el.text}</GetMessageBox>
                <MessageDate>{el.id.slice(16, 21)}</MessageDate>
              </MyMessageWrapper>
            )}
          </div>
        ))}
      </ChatWrapper>
      <ChatInputWrapper>
        <CommentsInputWrite
          placeholder="메세지를 입력하세요"
          ref={props.inputRef}
        />
        <CommentsBnt onClick={props.saveMessage}>보내기</CommentsBnt>
      </ChatInputWrapper>
    </Box>
  );
}
