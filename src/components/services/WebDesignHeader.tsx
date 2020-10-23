import React from "react";
import { Box, Flex, Button, Text, Image } from "rebass";

interface WebDesignHeaderProps {}

class WebDesignHeader extends React.Component<WebDesignHeaderProps, {}> {
  public render() {
    return (
      <Flex
        sx={{
          flexWrap: "wrap",
          color: "white",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            flexBasis: 512,
            margin: "20px",
            padding: "20px",
            textAlign: "right",
          }}
        >
          <Image src="website_setup.svg" style={{ maxHeight: "320px" }} />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            flexBasis: 512,
            margin: "20px",
            padding: "20px",
          }}
        >
          <Image src="wireframing.svg" style={{ maxHeight: "320px" }} />
        </Box>
      </Flex>
    );
  }
}

export default WebDesignHeader;
