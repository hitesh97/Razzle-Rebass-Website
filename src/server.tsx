import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import { ThemeProvider } from "emotion-theming";
// import theme from "@rebass/preset";
import siteTheme from "./themes/SiteThemeGreen";

import App from "./App";

let assets: any;

const syncLoadAssets = () => {
  assets = require(process.env.RAZZLE_ASSETS_MANIFEST!);
};
syncLoadAssets();

const server = express()
  .disable("x-powered-by")
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR!))
  .get("/*", (req: express.Request, res: express.Response) => {
    const context = {};
    const markup = renderToString(
      <ThemeProvider theme={siteTheme}>
        <StaticRouter context={context} location={req.url}>
          <App />
        </StaticRouter>
      </ThemeProvider>
    );
    res.send(
      `<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet='utf-8' />
        <title>Akruti Consulting</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${
          assets.client.css
            ? `<link rel="stylesheet" href="${assets.client.css}">`
            : ""
        }
          ${
            process.env.NODE_ENV === "production"
              ? `<script src="${assets.client.js}" defer></script>`
              : `<script src="${assets.client.js}" defer crossorigin></script>`
          }
        <style>
        body {
          margin: 0px;
          padding: 0px;
          font-family: /*iOS*/ "AvenirNextCondensed-Bold", "Futura-CondensedExtraBold",
            /*MacOSX*/ HelveticaNeue-CondensedBold, /*Ubuntu*/ "Ubuntu Condensed",
            "Liberation Sans Narrow", /*Windows*/ "Franklin Gothic Demi Cond",
            "Arial Narrow", /*Android*/ sans-serif-condensed, /*Fallback*/ Arial,
            "Trebuchet MS", "Lucida Grande", Tahoma, Verdana, sans-serif;
          font-size: 1.25rem;
          line-height: "2rem";
        }
        </style>
    </head>
    <body>
        <div id="root">${markup}</div>
    </body>
</html>`
    );
  });

export default server;
