import { css } from "styled-components";

export const tabletUp = (props) => {
  return css`
    @media screen and (min-width: 768px) {
      ${props}
    }
  `;
};

export const desktopUp = (props) => {
  return css`
    @media screen and (min-width: 1024px) {
      ${props}
    }
  `;
};
