import { useRouter } from "next/router";
import { ReactChild } from "react";
import styled from "@emotion/styled";
import DashBoardSidebar from "./dashboardsidebar/DashBoardSidebar.container";

interface ILayoutProps {
  children: ReactChild;
}

const Wrapper = styled.div``;
const Body = styled.div`
  width: 100%;
  height: 1000px;
  /* background-color: lightgreen; */
  /* border: 1px solid gray; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const BodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* border: 1px solid gray; */
  background-color: ;
`;

const HIDDEN_SIDEBAR = [""];

export default function DashBoardLayout(props: ILayoutProps) {
  const router = useRouter();

  const isHiddenSidebar = HIDDEN_SIDEBAR.includes(router.asPath);

  return (
    <>
      <Wrapper>
        <BodyWrapper>
          {!isHiddenSidebar && <DashBoardSidebar />}
          <Body>{props.children}</Body>
        </BodyWrapper>
      </Wrapper>
    </>
  );
}
