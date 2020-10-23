import React from "react";
import { Box, Flex, Button, Text, Image } from "rebass";

import TechnologyBrandsRibbon from "./TechnologyBrandsRibbon";

interface TechnologyBrandsProps {}

class TechnologyBrands extends React.Component<TechnologyBrandsProps, {}> {
  public render() {
    return (
      <Box
        sx={{
          padding: "60px",
          paddingTop: "0px",
          paddingBottom: "0px",
          color: "defaultBG",
        }}
      >
        <Box>
          <Text as="h1" sx={{ marginBottom: "20px" }}>
            OUR TECHNOLOGIES
          </Text>
          <Text as="p">
            Our software engineers have expertise in all the technologies needed
            to deliver comprehensive web developments services for companies
            across industries.
          </Text>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <TechnologyBrandsRibbon />
        </Box>
      </Box>
    );
  }
}

export default TechnologyBrands;
