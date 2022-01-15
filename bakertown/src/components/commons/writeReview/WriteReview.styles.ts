import styled from "@emotion/styled";

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(1.5px);
  /* -webkit-backdrop-filter: blur(1.5px); */
`;

export const Wrapper = styled.div`
  /* margin-top: -14px; */
  backdrop-filter: blur(13.5px);
  width: 500px;
  height: 500px;
  background-color: white;
  border: 1px solid black;
  position: relative;
  z-index: 1;
  top: -100;
  padding-left: 10px;
  padding-top: 10px;
  padding-right: 20px;
  border-radius: 10px;
`;

export const TitleWrapper = styled.div``;

export const WriteReview = styled.input`
  width: 470px;
  height: 350px;
  margin-top: 10px;
  padding-left: 10px;
  padding-bottom: 300px;
`;

export const ButtonWrapper = styled.div`
  padding-left: 340px;
  margin-top: 17px;
  display: flex;
  justify-content: space-between;
`;

export const ModalButton = styled.button`
  width: 60px;
`;
