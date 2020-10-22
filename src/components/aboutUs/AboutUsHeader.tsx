import React from "react";
import { Box, Flex, Button, Text, Image } from "rebass";
import SectionTwoTile1 from "../home/SectionTwoTile1";

interface AboutUsHeaderProps {}

class AboutUsHeader extends React.Component<AboutUsHeaderProps, {}> {
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
            tileHeading="We are a small team"
            tileContent={
              <Box style={{ fontSize: "1.5rem" }}>
                <Text as="h5" sx={{ marginTop: "20px", marginBottom: "20px" }}>
                  with attention to details and efficiency at heart!
                </Text>
                <Text sx={{ lineHeight: "2.5rem" }}>
                  We are headquartered in the UK, with regional operations in
                  India. Our primary focus is the agile development of
                  cloud-connected web and mobile apps.
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
          <Image src="team_spirit.svg" style={{ maxHeight: "320px" }} />
        </Box>
      </Flex>
    );
  }
}

export default AboutUsHeader;
