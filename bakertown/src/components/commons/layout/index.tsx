import { useRouter } from "next/router";
import { ReactChild } from "react";
import styled from "@emotion/styled";
import Footer from "./footer/Footer.container";
import Header from "./header/Header.container";
import Navigation from "./navigation/Navigation.container";
import { breakPoints } from "../../../commons/styles/media";
import DetailNavigationContainer from "./detailNavigation/DetailNavigation.container";

interface ILayoutProps {
  children: ReactChild;
}

const Wrapper = styled.div`
  height: 100%;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
  }
`;
const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HIDDEN_HEADER = [`/signIn/`, `/dashboard/main`, `/`, `/signUp/`];

const HIDDEN_FOOTER = [
  `/signIn/`,
  `/dashboard/main/`,
  `/signUp/`,
  `/class/detail/`,
];

const SHOWN_DETAIL_NAVIGATION = [
  `/class/detail/`,
  `/store/detail`,
  `/class/detail/XEmzQvwW4XZdwNfoVi9c/`,
];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const isHiddenHeader = HIDDEN_HEADER.includes(router.asPath);
  const isHiddenFooter = HIDDEN_FOOTER.includes(router.asPath);
  const isShownDetailClassNavigation =
    router.asPath.startsWith("/class/detail");
  const isShownDetailItemNavigation = router.asPath.startsWith("/store/detail");

  return (
    <>
      <Wrapper>
        {!isHiddenHeader && <Header />}
        <Body>{props.children}</Body>
        {!isHiddenFooter && <Footer />}
        {!isShownDetailClassNavigation && !isShownDetailItemNavigation && (
          <Navigation />
        )}
        {isShownDetailClassNavigation && <DetailNavigationContainer />}
        {isShownDetailItemNavigation && <DetailNavigationContainer />}
      </Wrapper>
    </>
  );
}
