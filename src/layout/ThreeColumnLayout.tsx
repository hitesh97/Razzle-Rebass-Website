import React from "react";
import { Box, Flex } from "rebass";
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

class ThreeColumnLayout extends React.Component<{}, {}> {
  public render() {
    return (
      <Flex
        sx={{
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Box>
          <SiteHeader />
        </Box>
        <Flex
          sx={{
            flex: 1,
            flexDirection: ["column", "row"],
          }}
        >
          <Box
            sx={{
              flex: 1,
              minWidth: 0,
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
          <Box
            sx={{
              flexBasis: ["auto", 64],
              order: -1,
            }}
          >
            {/* Nav */}
          </Box>
          <Box
            sx={{
              flexBasis: ["auto", 64],
            }}
          >
            {/* Ads */}
          </Box>
        </Flex>
        <Box>
          <SiteFooter />
        </Box>
      </Flex>
    );
  }
}

export default ThreeColumnLayout;
