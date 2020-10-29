import React from "react";
import { Box, Flex } from "rebass";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

class ThreeColumnLayoutGrid extends React.Component<{}, {}> {
  public render() {
    return (
      <Box
        sx={{
          display: "grid",
          minHeight: "100vh",
          gridTemplateAreas: [
            '"header" "nav" "main" "ads" "footer"',
            '"header header header" "nav main ads" "footer footer footer"',
          ],
          gridTemplateColumns: ["1fr", "128px 1fr 128px"],
          gridTemplateRows: [
            "min-content min-content 1fr min-content min-content",
            "min-content 1fr min-content",
          ],
        }}
      >
        {/*         <Box
          sx={{
            gridArea: "header",
          }}
        >
          Header
        </Box> */}
        <Box
          sx={{
            gridArea: "main",
          }}
        >
          <SiteHeader isSticky={true} />
          {this.props.children}
          <SiteFooter />
        </Box>
        <Box
          sx={{
            gridArea: "nav",
          }}
        >
          {/*           Nav */}
        </Box>
        <Box
          sx={{
            gridArea: "ads",
          }}
        >
          {/*           Ads */}
        </Box>
        {/*         <Box
          sx={{
            gridArea: "footer",
          }}
        >
          Footer
        </Box> */}
      </Box>
    );
  }
}

export default ThreeColumnLayoutGrid;
