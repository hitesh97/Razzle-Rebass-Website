import React from "react";
import { Box, Flex } from "rebass";
import SectionTwoTile1 from "../home/SectionTwoTile1";

interface WebDesignProps {}

class WebDesign extends React.Component<WebDesignProps, {}> {
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
          <SectionTwoTile1
            backgroundColor="servicesPageBG"
            tileIcon={null}
            tileSubTitle=""
            tileHeading="WEB DESIGN"
            tileContent={
              <ul
                style={{
                  fontSize: "1.2rem",
                  lineHeight: "2.5rem",
                  listStyle: "none",
                }}
              >
                <li>RESPONSIVE DESIGNS WITH A MOBILE-FIRST APPROACH</li>
                <li>
                  PROPAGATES THE VALUES THAT YOUR BRAND STANDS FOR DISTINCTIVE,
                  YET USABLE
                </li>
                <li>BUILT WITH LOVE, CARE, AND SOUND DESIGN PRINCIPLES</li>
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
          <SectionTwoTile1
            backgroundColor="servicesPageBG"
            tileIcon={null}
            tileSubTitle=""
            tileHeading=""
            tileContent={
              <Box style={{ fontSize: "1.5rem" }}>
                <p style={{ marginTop: "15px", lineHeight: "2.5rem" }}>
                  Sound design principles and interaction design characterize
                  today’s web. It is a combination of aesthetics, usability, and
                  responsiveness. The designs today are not only utilitarian but
                  also aspirational.
                </p>
                <p style={{ marginTop: "15px", lineHeight: "2.5rem" }}>
                  We give shape and colors to your ideas and envisages a web
                  interface that users find a delight to interact with. We
                  understand the needs of today’s users, and hence our
                  mobile-first approach ensures that the designs we produce are
                  equally effective on any form factor.
                </p>
              </Box>
            }
          />
        </Box>
      </Flex>
    );
  }
}

export default WebDesign;
