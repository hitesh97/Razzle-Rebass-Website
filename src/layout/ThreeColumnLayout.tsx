import React from "react";
import { Box, Flex } from "rebass";
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
