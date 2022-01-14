import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const TitleWrapper = styled.div`
  background-color: #f7f7f7;
  width: 247px;
  /* height: 188px; */
  margin-bottom: 24px;
  padding-left: 31px;
  padding-top: 20px;
  border-radius: 10px;
  @media ${breakPoints.tablet} {
    width: 90%;
  }
`;

export const MyPoint = styled.div`
  font-size: 24px;
  color: #ff4d12;
`;
export const MyPointTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  /* margin-bottom: 9px; */
`;
export const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 15.5px;
`;

export const SettingImage = styled.img`
  margin-left: 14px;
  padding-bottom: 4px;
`;

export const Sidebar = styled.div`
  @media ${breakPoints.tablet} {
    /* display: none; */
    width: 35%;
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const SidebarMyClass = styled.div`
  @media ${breakPoints.tablet} {
    width: 90%;
  }
`;

export const SidebarMyItem = styled.div``;

export const SideTitle = styled.div`
  width: 246px;
  height: 66px;
  background-color: #f7f7f7;
  border-radius: 10px;
  font-size: 24px;
  font-weight: bold;
  padding-top: 15px;
  padding-left: 30px;
  @media ${breakPoints.tablet} {
    width: 90%;
  }
`;

export const SideButton = styled.div`
  font-size: 20px;
  /* margin-top: 5.5px;
  margin-bottom: 9.5px; */
  padding-top: 15.5px;
  padding-bottom: 9.5px;
  padding-left: 30px;
  cursor: pointer;
  :hover {
    background: rgba(220, 220, 220, 0.1);
    font-weight: bold;
  }
`;

export const SmallLine = styled.div`
  width: 187px;
  border-bottom: 1px solid #e2e2e2;
  margin-left: 30px;
  @media ${breakPoints.tablet} {
    width: 80%;
  }
`;
export const SmallLine2 = styled.div`
  width: 187px;
  border-bottom: 1px solid #e2e2e2;
  margin-left: 30px;
  @media ${breakPoints.tablet} {
    width: 80%;
    margin-left: 0;
  }
`;
