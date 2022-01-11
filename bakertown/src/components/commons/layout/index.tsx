import { useRouter } from "next/router";
import { ReactChild } from "react";
import styled from "@emotion/styled";
import Banner from "./banner/Banner.container";
import Footer from "./footer/Footer.container";
import Header from "./header/Header.container";
import Navigation from "./navigation/Navigation.container";
// import Sidebar from "./siderbar/Sidebar.container";

interface ILayoutProps {
  children: ReactChild;
}

const Wrapper = styled.div`
  height: 100%;
`;
const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
// const BodyWrapper = styled.div`
//   display: flex;
// `;

const HIDDEN_HEADER = [`/signIn`, `/dashboard/main`, `/`, `/signUp`];

const HIDDEN_BANNER = [
  `/signIn`,
  `/signup`,
  `/dashboard/main`,
  `/store`,
  `/mypage`,
  `/`,
];
// const HIDDEN_SIDEBAR = [
//   `/`,
//   `/signin`,
//   `/signup`,
//   `/dashboard/main`,
//   // `/class/:id`,
// ];
const HIDDEN_NAVIGATION = [
  `/signIn`,
  `/signUp`,
  `/dashboard/main`,
  `/store`,
  `/mypage`,
];
const HIDDEN_FOOTER = [`/signIn`, `/dashboard/main`, `/signUp`];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const isHiddenHeader = HIDDEN_HEADER.includes(router.asPath);
  const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);
  // const isHiddenSidebar = HIDDEN_SIDEBAR.includes(router.asPath);
  const isHiddenNavigation = HIDDEN_NAVIGATION.includes(router.asPath);
  const isHiddenFooter = HIDDEN_FOOTER.includes(router.asPath);

  return (
    <>
      <Wrapper>
        {!isHiddenHeader && <Header />}
        {/* {!isHiddenBanner && <Banner />} */}
        {/* <BodyWrapper> */}
        <Body>{props.children}</Body>
        {/* {!isHiddenSidebar && <Sidebar />} */}
        {/* </BodyWrapper> */}
        {/* {!isHiddenNavigation && <Navigation />} */}
        {!isHiddenFooter && <Footer />}
      </Wrapper>
    </>
  );
}
