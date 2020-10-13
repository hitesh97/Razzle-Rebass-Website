import React from "react";
import { Box, Flex } from "rebass";

class SiteHeader extends React.Component<{}, {}> {
  public render() {
    return (
      <Flex
        sx={{
          flexWrap: "wrap",
          backgroundColor: "black",
          color: "white",
          padding: 2,
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            flexBasis: 256,
          }}
        >
          Left Menu
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            flexBasis: 0,
            textAlign: "right",
          }}
        >
          Right Menu
        </Box>
      </Flex>
    );
  }
}

export default SiteHeader;
