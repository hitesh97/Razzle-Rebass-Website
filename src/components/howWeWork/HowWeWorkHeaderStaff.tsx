import React from "react";
import { Box, Flex, Button, Text, Image } from "rebass";
import SectionTwoTile1 from "../home/SectionTwoTile1";

interface HowWeWorkHeaderStaffProps {}

class HowWeWorkHeaderStaff extends React.Component<
  HowWeWorkHeaderStaffProps,
  {}
> {
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
            tileHeading="Staff Augmentation"
            tileContent={
              <Box style={{ fontSize: "1.5rem", marginTop: "20px" }}>
                <Text>
                  Do you need additional power & knowledge in your product
                  development? Nearing project deadline? Worry not. Our expert
                  designers and developers, at your service.
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
          <Image src="team.svg" style={{ maxHeight: "320px" }} />
        </Box>
      </Flex>
    );
  }
}

export default HowWeWorkHeaderStaff;
