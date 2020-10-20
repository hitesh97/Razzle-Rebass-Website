import React from "react";
import { Box, Flex, Button, Text, Image } from "rebass";
import { FaPalette, FaRegPaperPlane } from "react-icons/fa";
import SectionTwoTile1 from "../home/SectionTwoTile1";
import SectionTwoTile2 from "../home/SectionTwoTile2";

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
