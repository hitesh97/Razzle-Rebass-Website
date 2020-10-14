import React from "react";
import { Box, Flex } from "rebass";

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
            "repeat(1, 0.25fr) repeat(1, 1fr) repeat(1, 1fr) repeat(1, 0.25fr)",
          ],
          p: 2,
        }}
      >
        <Box sx={{}}></Box>
        <Box sx={{}}>
          Tile 1
          <br />
          Tile 2
          <br />
          Tile 3
          <br />
          Tile 4
          <br />
          Tile 5
          <br />
          Tile 6
          <br />
          Tile 7
          <br />
          Tile 8
        </Box>
        <Box sx={{}}>Tile 9</Box>
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