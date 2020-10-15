import React from "react";
import { Box, Flex, Button, Text } from "rebass";
import { FaPalette } from "react-icons/fa";

interface SectionOneProps {}

class SectionOneTile2 extends React.Component<SectionOneProps, {}> {
  public render() {
    return (
      <Box
        sx={{
          gridArea: "centerMain",
          minHeight: "312px",
          paddingLeft: "30px",
        }}
      >
        <Box sx={{ color: "defaultBG", marginTop: "40px" }}>
          <FaPalette size="44" />
        </Box>
        <Text
          as="h3"
          sx={{
            fontFamily: "'Open Sans',sans-serif",
            fontWeight: "300",
            fontSize: "2.5rem",
            marginTop: "15px",
          }}
        >
          Graphic Design
        </Text>
        <ul style={{ listStyle: "circle" }}>
          <li>Stationery & Promotional Material</li>
          <li>Design</li>
          <li>Art Direction</li>
          <li>Signage & Environment</li>
        </ul>
      </Box>
    );
  }
}

export default SectionOneTile2;
