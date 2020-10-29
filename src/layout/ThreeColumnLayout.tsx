import React from "react";
import { Box, Flex } from "rebass";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

class ThreeColumnLayout extends React.Component<{}, {}> {
  public render() {
    return (
      <Flex
        sx={{
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        {/*         <Box>
          <SiteHeader />
        </Box> */}
        <Flex
          sx={{
            flex: 1,
            flexDirection: ["column", "row"],
          }}
        >
          <Box
            sx={{
              flex: 1,
              minWidth: 0,
            }}
          >
            <SiteHeader isSticky={true} />
            {this.props.children}
            <SiteFooter />
          </Box>
          <Box
            sx={{
              flexBasis: ["auto", 256],
              order: -1,
            }}
          >
            {/* Nav */}
          </Box>
          <Box
            sx={{
              flexBasis: ["auto", 256],
            }}
          >
            {/* Ads */}
          </Box>
        </Flex>
        {/*         <Box>
          <SiteFooter />
        </Box> */}
      </Flex>
    );
  }
}

export default ThreeColumnLayout;
