import React from "react";
import { Box, Flex } from "rebass";

class ThreeColumnLayout extends React.Component<{}, {}> {
  public render() {
    return (
      <Flex
        sx={{
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Box>Header</Box>
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
            Main Content
          </Box>
          <Box
            sx={{
              flexBasis: ["auto", 64],
              order: -1,
            }}
          >
            Nav
          </Box>
          <Box
            sx={{
              flexBasis: ["auto", 64],
            }}
          >
            Ads
          </Box>
        </Flex>
        <Box>Footer</Box>
      </Flex>
    );
  }
}

export default ThreeColumnLayout;
