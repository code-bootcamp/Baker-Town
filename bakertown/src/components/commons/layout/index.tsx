import { useRouter } from "next/router";
import { ReactChild } from "react";
import styled from "@emotion/styled";
import Footer from "./footer/Footer.container";
import Header from "./header/Header.container";
import Navigation from "./navigation/Navigation.container";

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

const HIDDEN_HEADER = [`/signIn`, `/dashboard/main`, `/`, `/signUp`];

const HIDDEN_FOOTER = [`/signIn`, `/dashboard/main`, `/signUp`];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const isHiddenHeader = HIDDEN_HEADER.includes(router.asPath);
  const isHiddenFooter = HIDDEN_FOOTER.includes(router.asPath);

  return (
    <>
      <Wrapper>
        {!isHiddenHeader && <Header />}
        <Body>{props.children}</Body>
        {/* {!isHiddenNavigation && <Navigation />} */}
        {!isHiddenFooter && <Footer />}
      </Wrapper>
    </>
  );
}
