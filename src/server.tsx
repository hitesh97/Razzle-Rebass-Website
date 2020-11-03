import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import { ThemeProvider } from "emotion-theming";

import siteTheme from "./themes/SiteThemeGreen";

// @sendgrid/mail

import bodyParser from "body-parser";
import sgMail from "@sendgrid/mail";
const smtpKey = "DUMMY_KEY";
sgMail.setApiKey(process.env.SENDGRID_API_KEY || smtpKey);

import App from "./App";

let assets: any;

const syncLoadAssets = () => {
  assets = require(process.env.RAZZLE_ASSETS_MANIFEST!);
};
syncLoadAssets();

const server = express()
  .disable("x-powered-by")
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR!))
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .post("/contactus", (request, response) => {
    const msg = {
      to: "khatri.hitesh@gmail.com", // Change to your recipient
      from: request.body.email, // Change to your verified sender
      subject: "Akruti Consulting - Contacts-us form enquiry",
      text: `${JSON.stringify(request.body, null, 8)}`,
      html: `${JSON.stringify(request.body, null, 8)}`,
    };
    sgMail
      .send(msg)
      .then(() => {
        response.send({ error: "" });
      })
      .catch((error) => {
        response.send({ error: "Error sending email" });
      });
  })
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
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu+Condensed&display=swap" rel="stylesheet">
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
          font-family: 'Ubuntu Condensed', sans-serif;
          font-size: 1.25rem;
          line-height: "2rem";
        }
        h1 {
          line-height: 3.5rem;
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
