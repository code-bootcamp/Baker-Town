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
`;
const BodyWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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
