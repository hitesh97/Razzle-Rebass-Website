import React from "react";
import { Box, Image, Flex, Text } from "rebass";
import SectionTwoTile1 from "../home/SectionTwoTile1";

interface UIDesignResponsiveProps {}

class UIDesignResponsive extends React.Component<UIDesignResponsiveProps, {}> {
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
            tileHeading="Responsive Design"
            tileContent={
              <Box style={{ fontSize: "1.5rem", marginTop: "20px" }}>
                <Text>
                  It’s a multi-device world. Responsive web design is essential.
                  Our team builds digital products that look great and deliver
                  the best user experience on all devices. Our in-house
                  designers have a breadth of experience in responsive design,
                  we create functional products that look great on web, mobile
                  and tablet devices.
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
            paddingLeft: "60px",
          }}
        >
          <Image
            src="ui_design_real_time_sync.svg"
            style={{ maxHeight: "320px" }}
          />
        </Box>
      </Flex>
    );
  }
}

export default UIDesignResponsive;
