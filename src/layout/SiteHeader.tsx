import React from "react";
import { Box, Flex, Link } from "rebass";
import MenuItems from "../data/menu";

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
            {MenuItems.filter((item) => item.enabled).map((item) => (
              <li style={{ marginLeft: "15px" }}>
                <Link key={item.id} href={item.href}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </Box>
      </Flex>
    );
  }
}

export default SiteHeader;
