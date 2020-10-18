import React from "react";
import { Box, Flex, Button, Text, Image } from "rebass";
import { FaPalette, FaRegPaperPlane } from "react-icons/fa";
import SectionTwoTile1 from "../home/SectionTwoTile1";
import SectionTwoTile2 from "../home/SectionTwoTile2";

interface WebDesignProps {}

class WebDesign extends React.Component<WebDesignProps, {}> {
  public render() {
    return (
      <Flex
        sx={{
          flexWrap: "wrap",
          backgroundColor: "black",
          color: "white",
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
            tileIcon={null}
            tileSubTitle=""
            tileHeading="WEB DESIGN"
            tileContent={
              <ul style={{ lineHeight: "2.5rem", listStyle: "none" }}>
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
            tileIcon={null}
            tileSubTitle=""
            tileHeading=""
            tileContent={
              <Box style={{ fontSize: "1.5rem" }}>
                <p>
                  Sound design principles and interaction design characterize
                  today’s web. It is a combination of aesthetics, usability, and
                  responsiveness. The designs today are not only utilitarian but
                  also aspirational.
                </p>
                <p>
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
