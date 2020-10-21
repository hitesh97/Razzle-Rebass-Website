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
            textAlign: "right",
          }}
        >
          <Image src="static_website.svg" style={{ maxHeight: "320px" }} />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            flexBasis: 512,
          }}
        >
          <Image src="web_developer.svg" style={{ maxHeight: "320px" }} />
        </Box>
      </Flex>
    );
  }
}

export default WebDevelopmentHeader;
