import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  a{
    color:${() => theme.color.SUCCESS[900]};
    font-weight:bold
  }
`;

export default GlobalStyle;
