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
              lineHeight: "1.5rem",
            }}
          >
            <li style={{}}>
              <Link href="/" sx={{ color: "white" }}>
                HOME
              </Link>
            </li>
            <li style={{}}>
              <Link href="/service" sx={{ color: "white" }}>
                SERVICES
              </Link>
            </li>
            <li style={{}}>
              <Link href="/technologies" sx={{ color: "white" }}>
                TECHNOLOGIES
              </Link>
            </li>
            <li style={{}}>
              <Link href="/industries" sx={{ color: "white" }}>
                INDUSTRIES
              </Link>
            </li>
            <li style={{}}>
              <Link href="/portfolio" sx={{ color: "white" }}>
                PORTFOLIO
              </Link>
            </li>
            <li style={{}}>
              <Link href="/company" sx={{ color: "white" }}>
                COMPANY
              </Link>
            </li>
            <li style={{}}>
              <Link href="/contact" sx={{ color: "white" }}>
                CONTACT
              </Link>
            </li>
          </ul>
        </Box>
      </Flex>
    );
  }
}

export default SiteFooterMenu;
