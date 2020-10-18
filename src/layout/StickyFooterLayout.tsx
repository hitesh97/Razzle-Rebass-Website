import React from "react";
import { Box } from "rebass";
// import FullWidthArticle from "../components/FullWidthArticle";
// import FullWidthArticleContentLeft from "../components/FullWidthArticleContentLeft";
import SectionEight from "../components/home/SectionEight";
import SectionFive from "../components/home/SectionFive";
import SectionFour from "../components/home/SectionFour";
import SectionOne from "../components/home/SectionOne";
import SectionSeven from "../components/home/SectionSeven";
import SectionSix from "../components/home/SectionSix";
import SectionThree from "../components/home/SectionThree";
import SectionTwo from "../components/home/SectionTwo";
import TopHeroSection from "../components/home/TopHeroSection";
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
          {this.props.children}
        </Box>
        <Box sx={{}}>
          <SiteFooter />
        </Box>
      </Box>
    );
  }
}

export default StickyFooterLayout;
