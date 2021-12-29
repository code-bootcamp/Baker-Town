import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0px;
    box-sizing: border-box;
    font-size: 20px;
    font-family: roboto, noto;
  }

  @font-face {
    font-family: "roboto";
    src: url("/fonts/Roboto-Light.ttf");
  }

  @font-face {
    font-family: "noto";
    src: url("/fonts/NotoSansKR-Regular.otf");
  }
`;
