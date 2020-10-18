import React from "react";
import { Box, Flex, Button, Text, Image } from "rebass";
import { FaPalette, FaRegPaperPlane } from "react-icons/fa";
import SectionTwoTile1 from "../home/SectionTwoTile1";
interface EcommerceHeaderProps {}

class EcommerceHeader extends React.Component<EcommerceHeaderProps, {}> {
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
          }}
        >
          <Image src="web_shopping.svg" style={{ maxHeight: "320px" }} />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            flexBasis: 512,
            borderLeftStyle: "solid",
            borderWidth: "1px",
            borderLeftColor: "black",
            margin: "20px",
            padding: "20px",
          }}
        >
          <Image src="eCommerce.svg" style={{ maxHeight: "320px" }} />
        </Box>
      </Flex>
    );
  }
}

export default EcommerceHeader;
