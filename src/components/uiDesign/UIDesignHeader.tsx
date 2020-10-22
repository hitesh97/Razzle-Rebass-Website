import React from "react";
import { Box, Flex, Button, Text, Image } from "rebass";
import SectionTwoTile1 from "../home/SectionTwoTile1";

interface UIDesignHeaderProps {}

class UIDesignHeader extends React.Component<UIDesignHeaderProps, {}> {
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
            tileHeading="UI Design Services"
            tileContent={
              <Box style={{ fontSize: "1.5rem", marginTop: "20px" }}>
                <Text>
                  We craft user interfaces that fit both brand and product
                  function. Incorporating modern UI design patterns, and paying
                  careful attention to all aspects of the user interface; from
                  typography to color choice and overall mood.
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
          <Image
            src="ui_design_responsive.svg"
            style={{ maxHeight: "320px" }}
          />
        </Box>
      </Flex>
    );
  }
}

export default UIDesignHeader;
