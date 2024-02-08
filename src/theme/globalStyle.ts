import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
  a{
    color:${() => theme.color.PRIMARY[300]};
    text-decoration: none;
  }
`;

export default GlobalStyle;
