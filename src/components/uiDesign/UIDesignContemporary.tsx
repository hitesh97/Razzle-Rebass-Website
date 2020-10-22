import React from "react";
import { Box, Image, Flex, Text } from "rebass";
import SectionTwoTile1 from "../home/SectionTwoTile1";

interface UIDesignContemporaryProps {}

class UIDesignContemporary extends React.Component<
  UIDesignContemporaryProps,
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
            paddingTop: "20px",
            paddingLeft: "60px",
          }}
        >
          <Image src="mobile_wireframe.svg" style={{ maxHeight: "320px" }} />
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
            tileHeading="Contemporary design, fundamental ideas"
            tileContent={
              <Box style={{ fontSize: "1.5rem", marginTop: "20px" }}>
                <Text>
                  All of our designers are formally trained in color theory, and
                  the principles of visual design such as balance, hierarchy and
                  the appropriate use of textures and shapes. These deep
                  credentials are complemented by keeping a tap on the pulse of
                  modern UI design developments – such as the use of digital
                  illustrations, interaction design, 3d graphics and transition
                  design.
                </Text>
              </Box>
            }
          />
        </Box>
      </Flex>
    );
  }
}

export default UIDesignContemporary;
