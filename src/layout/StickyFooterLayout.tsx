import React from "react";
import { Box } from "rebass";
import FullWidthArticle from "../components/FullWidthArticle";
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
          <FullWidthArticle />
        </Box>
        <Box sx={{}}>
          <SiteFooter />
        </Box>
      </Box>
    );
  }
}

export default StickyFooterLayout;
