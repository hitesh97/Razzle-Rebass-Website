import React, { FunctionComponent, useState, useEffect } from "react";
import { Box, Flex, Link } from "rebass";
import MenuItems from "../data/menu";

const SiteHeader: FunctionComponent = () => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0.1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <Flex
      sx={{
        flexWrap: "wrap",
        color: "white",
        padding: 2,
        position: `${scrolled ? "fixed" : ""}`,
        top: 0,
        width: "100%",
        backgroundColor: "siteSecondaryBG",
        boxShadow: `${scrolled ? "0 2px 6px rgba(0,0,0,0.2)" : ""}`,
        paddingRight: "60px",
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
            <li key={`header-menu-${item.id}`} style={{ marginLeft: "15px" }}>
              <Link key={item.id} href={item.href}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </Box>
    </Flex>
  );
};

export default SiteHeader;
