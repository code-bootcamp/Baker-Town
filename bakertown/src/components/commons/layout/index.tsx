import { useRouter } from "next/router";
import { ReactChild } from "react";
import styled from "@emotion/styled";
import Banner from "./banner/Banner.container";
import Footer from "./footer/Footer.container";
import Header from "./header/Header.container";
import Navigation from "./navigation/Navigation.container";
import Sidebar from "./siderbar/Sidebar.container";

interface ILayoutProps {
  children: ReactChild;
}

const Wrapper = styled.div``;
const Body = styled.div`
  /* width: 1000px; */
  /* height: 1000px;
  background-color: lightgreen;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; */
`;
const BodyWrapper = styled.div`
  /* display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: green; */
`;

const HIDDEN_HEADER = [`/signin`, `/signup`, `/dashboard`];
const HIDDEN_BANNER = [`/signin`, `/signup`, `/dashboard`];
const HIDDEN_SIDEBAR = [`/signin`, `/signup`, `/dashboard`];
const HIDDEN_NAVIGATION = [`/signin`, `/signup`, `/dashboard`];
const HIDDEN_FOOTER = [`/signin`, `/signup`, `/dashboard`];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const isHiddenHeader = HIDDEN_HEADER.includes(router.asPath);
  const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);
  const isHiddenSidebar = HIDDEN_SIDEBAR.includes(router.asPath);
  const isHiddenNavigation = HIDDEN_NAVIGATION.includes(router.asPath);
  const isHiddenFooter = HIDDEN_FOOTER.includes(router.asPath);

  return (
    <>
      <Wrapper>
        {!isHiddenHeader && <Header />}
        {!isHiddenBanner && <Banner />}
        <BodyWrapper>
          <Body>{props.children}</Body>
          {!isHiddenSidebar && <Sidebar />}
        </BodyWrapper>
        {!isHiddenNavigation && <Navigation />}
        {!isHiddenFooter && <Footer />}
      </Wrapper>
    </>
  );
}
