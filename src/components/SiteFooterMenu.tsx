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
            <li style={{}}>HOME</li>
            <li style={{}}>SERVICES</li>
            <li style={{}}>TECHNOLOGIES</li>
            <li style={{}}>INDUSTRIES</li>
            <li style={{}}>PORTFOLIO</li>
            <li style={{}}>COMPANY</li>
            <li style={{}}>CONTACT</li>
          </ul>
        </Box>
      </Flex>
    );
  }
}

export default SiteFooterMenu;
