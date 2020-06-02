import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.global.body.bg};
  }
  :focus {
    outline-color: ${({ theme }) => theme.outline} !important;
  }
`;

export default GlobalStyle;
