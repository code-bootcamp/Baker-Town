import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 1272px;
  height: 100%;
  flex-grow: 0;
  background-color: #fff;
  /* background-color: red; */
  margin: 0px;
  padding-top: 70px;
  padding-bottom: 150px;
  display: flex;

  @media ${breakPoints.mobile} {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const LeftWrapper = styled.div``;

export const RightWrapper = styled.div``;

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleImage = styled.div`
  width: 864px;
  height: 640px;
  border-radius: 10px;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.7) 100%
  );

  @media ${breakPoints.mobile} {
    width: 315px;
    height: 200px;
  }
`;

export const SidebarWrapper = styled.div`
  width: 370px;
  height: 385px;
  flex-grow: 0;
  opacity: 0.5;
  border-radius: 10px;
  box-shadow: 8px 8px 40px 0 rgba(0, 0, 0, 0.25);
  background-color: #fff;
  margin-left: 38px;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const Label = styled.div`
  width: 118px;
  height: 44px;
  font-size: 32px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #1e1e1e;
  margin-top: 70px;
`;

export const ProductDetail = styled.div`
  width: 864px;
  height: 1271px;
  border-radius: 10px;
  background-color: #f7f7f7;
  margin-top: 30px;

  @media ${breakPoints.mobile} {
    width: 315px;
    height: 200px;
  }
`;

export const ProductDate = styled.div`
  width: 864px;
  height: 300px;
  border-radius: 10px;
  background-color: #f7f7f7;
  margin-top: 30px;

  @media ${breakPoints.mobile} {
    width: 315px;
    height: 200px;
  }
`;

export const Review = styled.div`
  width: 864px;
  height: 300px;
  border-radius: 10px;
  background-color: #f7f7f7;
  margin-top: 30px;

  @media ${breakPoints.mobile} {
    width: 315px;
    height: 200px;
  }
`;
