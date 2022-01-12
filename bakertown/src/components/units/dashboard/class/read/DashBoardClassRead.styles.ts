import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 88vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: salmon; */
  /* height: 770px; */
  overflow: auto;
`;

export const ComponentWrapper = styled.div`
  width: 987px;
  height: 180px;
  margin: 43px 0px 24px 40px;
  padding: 20px 0px 20px 30px;
  border-radius: 10px;
  box-shadow: 3px 5px 20px 0 rgba(0, 0, 0, 0.1);
  border: solid 0.5px #e2e2e2;
  background-color: #fff;
  display: flex;
}
`;

export const DetailWrapper = styled.div``;

export const ImageWrapper = styled.div`
  width: 162px;
  height: 140px;
  border-radius: 10px;
  background-color: gray;
}
`;

export const CategoryWrapper = styled.div`
  width: 166px;
  height: 25px;
  margin: 0 371px 9px 19px;
  font-family: NotoSans;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: rgba(79, 51, 37, 0.9);
`;

export const TitleWrapper = styled.div`
  width: 419px; 
  height: 33px;
  margin: 9px 118px 48px 19px;
  font-family: NotoSans;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000;
}
`;

export const ClassMember = styled.div`
  width: 536px;
  height: 25px;
  margin: 48px 0 0 20px;
  font-family: NotoSans;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000;
`;

export const Line = styled.div`
  width: 1px;
  height: 140px;
  margin: 1px 0px 0 5.5px;
  background-color: #bdb7b3;
`;

export const CRUD = styled.div`
  margin-top: 50px;
  margin-left: 30px;
`;

export const Update = styled.button`
  height: 30px;
`;

export const Delete = styled.button`
  height: 30px;
  margin-left: 10px;
`;
