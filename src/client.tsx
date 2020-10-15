import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "emotion-theming";
// import theme from "@rebass/preset";
import siteTheme from "./themes/SiteThemeGreen";
import App from "./App";

hydrate(
  <ThemeProvider theme={siteTheme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
