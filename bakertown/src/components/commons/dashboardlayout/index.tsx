import { useRouter } from "next/router";
import { ReactChild } from "react";
import styled from "@emotion/styled";
import DashBoardSidebar from "./dashboardsidebar/DashBoardSidebar.container";
import DashBoardHeader from "./dashboardheader/DashBoardHeader.container";

interface ILayoutProps {
  children: ReactChild;
}

const Wrapper = styled.div`
  height: 100vh;
`;

const UpBodyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const InnerBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Body = styled.div`
  width: 100%;
  /* overflow-y: auto;
  overflow-x: hidden; */
`;

const Header = styled.div`
  width: 100%;
  background-color: white;
  /* position: fixed;
  overflow-y: hidden;
  overflow-x: hidden; */
`;

const HIDDEN_SIDEBAR = [""];
const HIDDEN_HEADER = [""];

export default function DashBoardLayout(props: ILayoutProps) {
  const router = useRouter();
  const isHiddenSidebar = HIDDEN_SIDEBAR.includes(router.asPath);
  const isHiddenHeader = HIDDEN_HEADER.includes(router.asPath);

  return (
    <>
      <Wrapper>
        <UpBodyWrapper>
          {!isHiddenSidebar && <DashBoardSidebar />}
          <InnerBodyWrapper>
            <Header>{!isHiddenHeader && <DashBoardHeader />}</Header>
            <Body>{props.children}</Body>
          </InnerBodyWrapper>
        </UpBodyWrapper>
      </Wrapper>
    </>
  );
}
