import React from "react";
import { Box, Flex, Button, Text, Image } from "rebass";
import SectionTwoTile1 from "../home/SectionTwoTile1";
import TwoColumnTextSection from "../technologies/TwoColumnTextSection";

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
                  We development skills to build and deploy applications
                  targeted at any of the mobile platforms and hardware
                  manufacturers in use today. The team is also well placed to
                  provide tailored approaches involving multiple technologies
                  and programming languages where necessary. Whatever your
                  business process or context, Blueberry has the expertise to
                  provide bespoke, comprehensive solutions to mobile
                  integration, enhancing not only communication but also
                  efficiency and productivity.
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
