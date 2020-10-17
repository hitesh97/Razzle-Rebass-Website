import React from "react";
import { Box, Flex, Link } from "rebass";

class SiteFooterMenu extends React.Component<{}, {}> {
  public render() {
    return (
      <Flex
        sx={{
          flexWrap: "wrap",
          color: "white",
          padding: 3,
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
          }}
        ></Box>
        <Box
          sx={{
            flexGrow: 1,
            flexBasis: 512,
            textAlign: "left",
            flexWrap: "wrap",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              flexWrap: "inherit",
              padding: "0px",
            }}
          >
            <li style={{ marginLeft: "15px" }}>HOME</li>
            <li style={{ marginLeft: "15px" }}>SERVICES</li>
            <li style={{ marginLeft: "15px" }}>TECHNOLOGIES</li>
            <li style={{ marginLeft: "15px" }}>INDUSTRIES</li>
            <li style={{ marginLeft: "15px" }}>PORTFOLIO</li>
            <li style={{ marginLeft: "15px" }}>COMPANY</li>
            <li style={{ marginLeft: "15px" }}>CONTACT</li>
          </ul>
        </Box>
      </Flex>
    );
  }
}

export default SiteFooterMenu;
