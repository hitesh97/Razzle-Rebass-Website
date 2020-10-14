import React from "react";
import { Box } from "rebass";
import FullWidthArticle from "../components/FullWidthArticle";
import FullWidthArticleContentLeft from "../components/FullWidthArticleContentLeft";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

class StickyFooterLayout extends React.Component<{}, {}> {
  public render() {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Box sx={{}}>
          <SiteHeader />
        </Box>
        <Box
          sx={{
            flex: "1 1 auto",
          }}
        >
          <FullWidthArticle heading="QUICKLY DEVELOP FIT-FOR-PURPOSE SOFTWARE">
            <>
              <br />
              Main Content Main Content Main Content Main Content Main Content
              Main Content Main Content Main Content Main Content Main Content
              Main Content Main Content Main Content Main Content Main Content
              Main Content Main Content Main Content Main Content Main Content
              Main Content Main Content
              <br />
              <br />
              Main Content Main Content Main Content Main Content Main Content
              Main Content Main Content Main Content Main Content Main Content
              Main Content Main Content Main Content Main Content Main Content
              Main Content Main Content Main Content Main Content Main Content
              Main Content Main Content
              <br />
              <br />
              Main Content Main Content Main Content Main Content Main Content
              Main Content Main Content Main Content Main Content Main Content
              Main Content Main Content Main Content Main Content Main Content
              Main Content Main Content Main Content Main Content Main Content
              Main Content Main Content
              <br />
              <br />
              Main Content Main Content Main Content Main Content Main Content
              Main Content Main Content Main Content Main Content Main Content
              Main Content Main Content Main Content Main Content Main Content
              Main Content Main Content Main Content Main Content Main Content
              Main Content Main Content
              <br />
              <br />
              Main Content Main Content Main Content Main Content Main Content
              Main Content Main Content Main Content Main Content Main Content
              Main Content Main Content Main Content Main Content Main Content
              Main Content Main Content Main Content Main Content Main Content
              Main Content Main Content
              <br />
              End
            </>
          </FullWidthArticle>
          <FullWidthArticleContentLeft heading="heading 1">
            <p>This is some text</p>
          </FullWidthArticleContentLeft>
          <FullWidthArticle heading="QUICKLY DEVELOP FIT-FOR-PURPOSE SOFTWARE">
            <>
              <br />
              Main Content Main Content Main Content Main Content Main Content
              Main Content Main Content Main Content Main Content Main Content
              Main Content Main Content Main Content Main Content Main Content
              Main Content Main Content Main Content Main Content Main Content
              Main Content Main Content
              <br />
              <br />
              Main Content Main Content Main Content Main Content Main Content
              Main Content Main Content Main Content Main Content Main Content
              Main Content Main Content Main Content Main Content Main Content
              Main Content Main Content Main Content Main Content Main Content
              Main Content Main Content
              <br />
              <br />
              Main Content Main Content Main Content Main Content Main Content
              Main Content Main Content Main Content Main Content Main Content
              Main Content Main Content Main Content Main Content Main Content
              Main Content Main Content Main Content Main Content Main Content
              Main Content Main Content
              <br />
              <br />
              Main Content Main Content Main Content Main Content Main Content
              Main Content Main Content Main Content Main Content Main Content
              Main Content Main Content Main Content Main Content Main Content
              Main Content Main Content Main Content Main Content Main Content
              Main Content Main Content
              <br />
              <br />
              Main Content Main Content Main Content Main Content Main Content
              Main Content Main Content Main Content Main Content Main Content
              Main Content Main Content Main Content Main Content Main Content
              Main Content Main Content Main Content Main Content Main Content
              Main Content Main Content
              <br />
              End
            </>
          </FullWidthArticle>
        </Box>
        <Box sx={{}}>
          <SiteFooter />
        </Box>
      </Box>
    );
  }
}

export default StickyFooterLayout;
