import React from "react";
import { Box, Flex, Button, Text, Image } from "rebass";
import {
  FaRegLightbulb,
  FaStopwatch,
  FaRoute,
  FaToolbox,
} from "react-icons/fa";

interface TechnologyTileProps {
  icon: React.ReactNode;
  title: string;
  text: React.ReactNode;
}

class TechnologyTile extends React.Component<TechnologyTileProps, {}> {
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
          <Text as="p">{this.props.text}</Text>
        </Box>
      </Box>
    );
  }
}

export default TechnologyTile;
