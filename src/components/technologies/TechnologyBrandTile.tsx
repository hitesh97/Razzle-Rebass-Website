import React from "react";
import { Box, Flex, Button, Text, Image } from "rebass";
import {
  FaRegLightbulb,
  FaStopwatch,
  FaRoute,
  FaToolbox,
} from "react-icons/fa";

interface TechnologyBrandTileProps {
  icon: React.ReactNode;
  title: string;
}

class TechnologyBrandTile extends React.Component<
  TechnologyBrandTileProps,
  {}
> {
  public render() {
    return (
      <Box sx={{ maxHeight: "100%" }}>
        <Box
          sx={{
            textAlign: "left",
            padding: "30px",
          }}
        >
          <Box sx={{ color: "defaultBG" }}>{this.props.icon}</Box>
          <Text as="h4" sx={{ marginBottom: "10px" }}>
            {this.props.title}
          </Text>
        </Box>
      </Box>
    );
  }
}

export default TechnologyBrandTile;
