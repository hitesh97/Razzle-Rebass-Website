import React from "react";
import { Box, Flex, Button, Text, Image } from "rebass";

interface MobileDevelopmentHeaderProps {}

class MobileDevelopmentHeader extends React.Component<
  MobileDevelopmentHeaderProps,
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
            paddingRight: "0px",
            marginRight: "0px",
            textAlign: "right",
          }}
        >
          <Image src="mobile_devices.svg" style={{ maxHeight: "320px" }} />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            flexBasis: 512,
            margin: "20px",
            paddingLeft: "0px",
            marginLeft: "0px",
            padding: "20px",
          }}
        >
          <Image src="mobile_development.svg" style={{ maxHeight: "320px" }} />
        </Box>
      </Flex>
    );
  }
}

export default MobileDevelopmentHeader;
