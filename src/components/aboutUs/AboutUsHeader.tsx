import React from "react";
import { Box, Flex, Button, Text, Image } from "rebass";
import SectionTwoTile1 from "../home/SectionTwoTile1";

interface AboutUsHeaderProps {}

class AboutUsHeader extends React.Component<AboutUsHeaderProps, {}> {
  public render() {
    /* return (
      <Flex
        sx={{
          flexWrap: "wrap",
          backgroundColor: "servicesPageBG",
          color: "defaultBG",
          padding: "60px",
          paddingTop: "0px",
          paddingBottom: "0px",
        }}
      >
        <Box style={{ fontSize: "1.2rem" }}>
          <Text
            as="h1"
            sx={{ fontSize: "3rem", fontWeight: "300", marginBottom: "20px" }}
          >
            We are a small team
          </Text>
          <Text as="h3" sx={{ fontWeight: "300" }}>
            with attention to details and efficiency at heart!
          </Text>

          <Box sx={{ maxWidth: "400px" }}>
            <Text>
              We are headquartered in the UK, with regional operations in India.
              Our primary focus is the agile development of cloud-connected web
              and mobile apps.
            </Text>
          </Box>
        </Box>
      </Flex>
    ); */
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
                <Text>
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
