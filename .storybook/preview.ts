/* ******** Integrar Styled Components y Storybook: https://storybook.js.org/recipes/styled-components/ ******** */
// import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../src/theme/globalStyle";
import { theme } from "../src/theme/theme";
import "../src/index.css";

export const decorators = [
  withThemeFromJSXProvider({
    themes: { theme },
    Provider: ThemeProvider,
    GlobalStyles: GlobalStyle,
  }),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
  backgrounds: {
    values: [
      { name: "light", value: "#fff" },
      { name: "dark", value: "#333" },
      { name: "blue", value: "#00c" },
      { name: "green", value: "#0c0" },
    ],
  },
};

// const preview: Preview = {
//   /* parámetros para todas las historias */
//   parameters: {
//     actions: { argTypesRegex: "^on[A-Z].*" },
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/i,
//       },
//     },
//     backgrounds: {
//       values: [
//         { name: "light", value: "#fff" },
//         { name: "dark", value: "#333" },
//         { name: "blue", value: "#00c" },
//       ],
//     },
//   },
// };

// export default preview;
