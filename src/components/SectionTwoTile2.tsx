import React from "react";
import { Box, Flex, Button, Text, Image } from "rebass";
import { FaQuoteLeft } from "react-icons/fa";

interface SectionTwoTile2Props {
  tileContent: React.ReactNode;
}

class SectionTwoTile2 extends React.Component<SectionTwoTile2Props, {}> {
  public render() {
    return (
      <Box
        sx={{
          padding: "60px",
          backgroundColor: "defaultBGLight",
          height: "100%",
        }}
      >
        <FaQuoteLeft
          size="44"
          style={{
            position: "absolute",
            opacity: "0.2",
            height: "80px",
            width: "80px",
            marginTop: "-20px",
            marginLeft: "-20px",
          }}
        />
        <Box>{this.props.tileContent}</Box>
        <Image
          src="section2_tile2_img.jpeg"
          sx={{
            width: "4100%",
            height: "300px",
            objectPosition: "50% 0%",
            backgroundPosition: "50% 0%",
            marginTop: "30px",
          }}
        />
      </Box>
    );
  }
}

export default SectionTwoTile2;
