import React from "react";
import { Box } from "rebass";
// import FullWidthArticle from "../components/FullWidthArticle";
// import FullWidthArticleContentLeft from "../components/FullWidthArticleContentLeft";
import SectionEight from "../components/SectionEight";
import SectionFive from "../components/SectionFive";
import SectionFour from "../components/SectionFour";
import SectionOne from "../components/SectionOne";
import SectionSeven from "../components/SectionSeven";
import SectionSix from "../components/SectionSix";
import SectionThree from "../components/SectionThree";
import SectionTwo from "../components/SectionTwo";
import TopHeroSection from "../components/TopHeroSection";
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
          <TopHeroSection />
          <SectionOne />
          <SectionTwo />
          <SectionThree />
          <SectionFour />
          <SectionFive />
          <SectionSix />
          <SectionSeven />
          <SectionEight />
        </Box>
        <Box sx={{}}>
          <SiteFooter />
        </Box>
      </Box>
    );
  }
}

export default StickyFooterLayout;
