import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const WholeWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  /* background: yellow; */

  @media ${breakPoints.tablet} {
    width: 90%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    /* height: 100%; */
    padding: 0%;
    margin: 0px;
  }
`;

export const TitleLabel = styled.div`
  font-size: 40px;
  font-weight: 600;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 25px;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const ChatOutsideWrapper = styled.div`
  display: flex;
  height: 90%;
  width: 90%;
  margin-bottom: 30px;

  /* background: #f5f3f0; */
  /* margin-top: 80px; */
  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    margin-bottom: 0px;
  }
`;

export const Box = styled.div`
  background: white;
  width: 90%;
  /* border: 2px solid gray; */
  margin-left: 60px;
  border-radius: 10px;
  box-shadow: 3px 5px 20px 0 rgba(0, 0, 0, 0.1);
  border: solid 0.5px #e2e2e2;

  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    /* background: purple; */
    margin-left: 0%;
    width: 100%;
    height: 100%;
    border-radius: 0px;
  }
`;

export const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* padding-top: 100px; */
  padding: 10px;
  margin-bottom: 0px;
  overflow: auto;
  height: 550px;
  padding-left: 1.5%;
  padding-right: 1.5%;
  /* background: pink; */
  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    padding: 5%;
    /* margin-top: 11%; */
    min-height: 593px;
  }
`;

export const ChatInputWrapper = styled.div`
  display: flex;
  /* position: fixed; */
  /* bottom: 0; */
  width: 100%;

  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const CommentsInputWrite = styled.input`
  width: 100%;
  height: 60px;
  background-color: #f2f2f2;

  border: none;
  padding-left: 12px;
  outline: none;
  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const CommentsBnt = styled.div`
  width: 120px;
  height: 60px;
  /* background-color: #8915a6; */
  background-color: #4f3325;
  /* font-family: "NotoSansKRregular"; */
  font-size: 22px;
  color: #fff;
  font-weight: 600;
  line-height: 42px;
  cursor: pointer;
  display: flex;
  flex-direction: center;
  align-items: center;
  justify-content: center;
  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    /* position: fixed;
    bottom: 0; */
   
  }
  }
`;

export const GetMessageWrapper = styled.div`
  display: flex;
  width: 358px;
  margin-bottom: 5px;
  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;
export const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-top: 3px;
  background-color: gray;
  object-fit: cover;
  @media ${breakPoints.tablet} {
  }

  @media ${breakPoints.mobile} {
    width: 35px;
    height: 35px;
  }
`;
export const GetMessageBox = styled.div`
  max-width: 260px;
  border-radius: 10px;
  background-color: lightgray;
  padding: 10px 10px;

  @media ${breakPoints.tablet} {
    max-width: 58%;
  }

  @media ${breakPoints.mobile} {
    max-width: 58%;
  }
`;

export const MessageDate = styled.div`
  font-size: 12px;
  padding-left: 3px;
  padding-top: 2px;
  padding-right: 1px;

  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const Name = styled.div`
  font-weight: 500;
  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;
export const ProductWrapper = styled.div`
  width: 390px;
  height: 90px;
  display: flex;
  align-items: center;
  background-color: #b69acb;
  /* position: fixed;
  top: 100; */
  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;
// export const ProductImg = styled.img`
//   width: 90px;
//   height: 90px;
//   object-fit: cover;
//   @media ${breakPoints.tablet} {
//     width: 100%;
//   }

//   @media ${breakPoints.mobile} {

//   }
// `;
export const ProductInfo = styled.div`
  padding: 0 15px;
  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;
export const ProductName = styled.div`
  font-size: 16px;
  font-weight: 500;
  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;
export const ProductPrice = styled.div`
  font-size: 16px;
  font-weight: 500;
  padding-top: 10px;
  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;
export const MessageInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15px;

  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;
export const MyMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 5px;
  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;
export const NewDate = styled.div`
  text-align: center;
  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;
