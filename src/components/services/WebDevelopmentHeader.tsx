import React from "react";
import { Box, Flex, Button, Text, Image } from "rebass";

interface WebDevelopmentHeaderProps {}

class WebDevelopmentHeader extends React.Component<
  WebDevelopmentHeaderProps,
  {}
> {
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
          <Image src="web_development.svg" style={{ maxHeight: "320px" }} />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            flexBasis: 512,
            /* borderLeftStyle: "solid",
            borderWidth: "1px",
            borderLeftColor: "black", */
            margin: "20px",
            padding: "20px",
          }}
        >
          <Image src="web_developer.svg" style={{ maxHeight: "320px" }} />
        </Box>
      </Flex>
    );
  }
}

export default WebDevelopmentHeader;
