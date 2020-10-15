import React from "react";
import { Box, Flex, Button, Text } from "rebass";
import { FaPencilRuler } from "react-icons/fa";

interface SectionOneProps {}

class SectionOneTile3 extends React.Component<SectionOneProps, {}> {
  public render() {
    return (
      <Box
        sx={{
          gridArea: "rightMain",
          minHeight: "312px",
          paddingLeft: "30px",
        }}
      >
        <Box sx={{ color: "defaultBG", marginTop: "40px" }}>
          <FaPencilRuler size="44" />
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
          Web Design
        </Text>
        <ul style={{ listStyle: "circle" }}>
          <li>Front & Back-end</li>
          <li>E-Commerce</li>
          <li>Content Management</li>
          <li>WordPress / HTML5 / CSS3</li>
        </ul>
      </Box>
    );
  }
}

export default SectionOneTile3;
