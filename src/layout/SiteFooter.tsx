import React from "react";
import { Box, Flex, Text } from "rebass";
import SiteFooterContactUs from "../components/SiteFooterContactUs";
import SiteFooterMenu from "../components/SiteFooterMenu";
import SiteFooterSocial from "../components/SiteFooterSocial";
import SiteHeader from "./SiteHeader";

class SiteFooter extends React.Component<{}, {}> {
  public render() {
    return (
      <Box
        sx={{
          backgroundColor: "black",
          color: "white",
          display: "grid",
          gridGap: 1,
          gridTemplateColumns: [
            "repeat(1, 1fr)",
            "repeat(1, 0.25fr) repeat(1, 1fr) repeat(1, 1fr) repeat(1, 1fr) repeat(1, 0.25fr)",
          ],
          p: 4,
          minHeight: "275px",
        }}
      >
        <Box sx={{}}></Box>
        <Box sx={{}}>
          <Box sx={{ maxWidth: "400px", textAlign: "center" }}>
            <SiteFooterMenu />
          </Box>
        </Box>
        <Box sx={{}}>
          <Box sx={{ maxWidth: "400px", textAlign: "center" }}>
            <SiteFooterContactUs />
          </Box>
        </Box>
        <Box sx={{}}>
          <Box sx={{ maxWidth: "400px", textAlign: "center" }}>
            <SiteFooterSocial />
          </Box>
        </Box>
        <Box sx={{}}></Box>
        {/* <Box></Box>
        <Box>
          Tile 11
          <br />
          Tile 12
          <br />
          Tile 13
          <br />
          Tile 14
        </Box>
        <Box>Tile 15</Box>
        <Box>
          Tile 16
          <br />
          Tile 17
          <br />
          Tile 18
          <br />
          Tile 19
        </Box> */}
      </Box>
    );
  }
}

export default SiteFooter;
