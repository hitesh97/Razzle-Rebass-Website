import React from "react";
import { Box, Flex, Button, Text, Image } from "rebass";
import SectionTwoTile1 from "../home/SectionTwoTile1";

interface HowWeWorkHeaderDevProps {}

class HowWeWorkHeaderDev extends React.Component<HowWeWorkHeaderDevProps, {}> {
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
          }}
        >
          <SectionTwoTile1
            backgroundColor="servicesPageBG"
            tileIcon={null}
            tileSubTitle=""
            tileHeading="Development"
            tileContent={
              <Box style={{ fontSize: "1.5rem", marginTop: "20px" }}>
                <Text>
                  We always build products with the end user in mind. Whether
                  your product is a bespoke web-based application, a complex
                  mobile app, or an all-encompassing ecosystem, we'll build it
                  right.
                </Text>
              </Box>
            }
          />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            flexBasis: 512,
            minHeight: "450px",
            paddingTop: "20px",
          }}
        >
          <Image src="creative_team.svg" style={{ maxHeight: "320px" }} />
        </Box>
      </Flex>
    );
  }
}

export default HowWeWorkHeaderDev;
