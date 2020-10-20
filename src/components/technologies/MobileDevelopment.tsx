import React from "react";
import { Box, Flex, Button, Text, Image } from "rebass";
import SectionTwoTile1 from "../home/SectionTwoTile1";
import TwoColumnTextSection from "./TwoColumnTextSection";

interface MobileDevelopmentProps {}

class MobileDevelopment extends React.Component<MobileDevelopmentProps, {}> {
  public render() {
    return (
      <Flex
        sx={{
          flexWrap: "wrap",
          color: "defaultBG",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            flexBasis: 512,
            minHeight: "450px",
            textAlign: "right",
          }}
        >
          <TwoColumnTextSection
            backgroundColor="servicesPageBG"
            tileIcon={null}
            tileSubTitle=""
            tileHeading="MOBILE DEVELOPMENT"
            tileContent={
              <ul
                style={{
                  fontSize: "1.2rem",
                  lineHeight: "2.5rem",
                  listStyle: "none",
                }}
              >
                <li>NATIVE OR HYBRID, OUR EXPERTISE IS COMPREHENSIVE</li>
                <li>
                  EXPERIENCE ON OBJECTIVE-C & SWIFT FOR IOS, JAVA & KOTLIN FOR
                  ANDROID, AND REACT NATIVE & FLUTTER FOR HYBRID APPS
                </li>
                <li>
                  LEVERAGE EVERY MOBILE PLATFORM CAPABILITIES, FROM
                  COMMUNICATION TO LOCATION, AND PAYMENTS TO HEALTH
                </li>
                <li>SUPPORT BOTH ONLINE AND OFFLINE SCENARIOS</li>
              </ul>
            }
          />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            flexBasis: 512,
            minHeight: "450px",
          }}
        >
          <TwoColumnTextSection
            backgroundColor="servicesPageBG"
            tileIcon={null}
            tileSubTitle=""
            tileHeading=""
            tileContent={
              <Box style={{ fontSize: "1.5rem" }}>
                <p style={{ marginTop: "15px" }}>
                  Mobile applications have become a critical part of the
                  business growth strategy. Every possible professional arena
                  needs mobile apps for a seamless, comprehensive workflow
                  implementation. We had rightly predicted the opportunities and
                  challenges of mobile eco-system right at the onset of the
                  mobile economy, and have put in significant efforts and time
                  to master every aspect of the mobile apps development.
                </p>
              </Box>
            }
          />
        </Box>
      </Flex>
    );
  }
}

export default MobileDevelopment;
