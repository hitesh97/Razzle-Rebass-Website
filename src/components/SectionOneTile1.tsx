import React from "react";
import { Box, Flex, Button, Text } from "rebass";
import { FaRegPaperPlane } from "react-icons/fa";

interface SectionOneProps {}

class SectionOneTile1 extends React.Component<SectionOneProps, {}> {
  public render() {
    return (
      <Box
        sx={{
          gridArea: "leftMain",
          minHeight: "312px",
          paddingLeft: "30px",
        }}
      >
        <Box sx={{ color: "defaultBG", marginTop: "40px" }}>
          <FaRegPaperPlane size="44" />
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
          Branding
        </Text>
        <ul style={{ listStyle: "circle" }}>
          <li>Development & Research</li>
          <li>Development</li>
          <li>Strategy & Placement</li>
          <li>Brand Application</li>
        </ul>
      </Box>
    );
  }
}

export default SectionOneTile1;
