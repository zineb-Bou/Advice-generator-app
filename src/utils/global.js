import { css } from '@emotion/react';
import { color } from './color';

const globalStyles = css`
  .sr-only:not(:focus):not(:active) {
    clip: rect(0 0 0 0);
    clip-path: inset(100%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
  body {
    font-family: 'Manrope', sans-serif;
    background-color: ${color.darkGrayishBlue};
    min-height: 100vh;
  }
`;

export default globalStyles;
