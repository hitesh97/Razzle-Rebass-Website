import React from "react";
import { Box, Flex, Link } from "rebass";

class SiteHeader extends React.Component<{}, {}> {
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
            textAlign: "right",
            flexWrap: "wrap",
          }}
        >
          <ul
            style={{
              display: "inline-flex",
              listStyle: "none",
              fontSize: "1.2rem",
              flexWrap: "inherit",
              padding: "0px",
            }}
          >
            <li style={{ marginLeft: "15px" }}>
              <Link href="/">HOME</Link>
            </li>
            <li style={{ marginLeft: "15px" }}>
              <Link href="/services">SERVICES</Link>
            </li>
            <li style={{ marginLeft: "15px" }}>
              <Link href="/technologies">TECHNOLOGIES</Link>
            </li>
            <li style={{ marginLeft: "15px" }}>
              <Link href="/industries">INDUSTRIES</Link>
            </li>
            <li style={{ marginLeft: "15px" }}>
              <Link href="/portfolio">PORTFOLIO</Link>
            </li>
            <li style={{ marginLeft: "15px" }}>
              <Link href="/company">COMPANY</Link>
            </li>
            <li style={{ marginLeft: "15px" }}>
              <Link href="/contact">CONTACT</Link>
            </li>
          </ul>
        </Box>
      </Flex>
    );
  }
}

export default SiteHeader;
