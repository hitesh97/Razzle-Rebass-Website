import React from "react";
import { Box, Flex, Button, Text, Image } from "rebass";
import {
  FaAngular,
  FaAws,
  FaCss3Alt,
  FaDocker,
  FaHtml5,
  FaNode,
  FaPhp,
  FaReact,
  FaWordpress,
} from "react-icons/fa";

import { DiJsBadge } from "react-icons/di";

import TechnologyBrandTile from "./TechnologyBrandTile";

interface TechnologyBrandsRibbonProps {}

class TechnologyBrandsRibbon extends React.Component<
  TechnologyBrandsRibbonProps,
  {}
> {
  public render() {
    return (
      <Box
        sx={{
          backgroundColor: "white",
          display: "grid",
          gridGap: 3,
          gridTemplateColumns: ["repeat(4, 1fr)", "repeat(10, 1fr)"],
        }}
      >
        <TechnologyBrandTile icon={<FaReact size="40" />} title="" />
        <TechnologyBrandTile icon={<FaHtml5 size="40" />} title="" />
        <TechnologyBrandTile icon={<FaCss3Alt size="40" />} title="" />
        <TechnologyBrandTile icon={<DiJsBadge size="40" />} title="" />
        <TechnologyBrandTile icon={<FaNode size="40" />} title="" />
        <TechnologyBrandTile icon={<FaAngular size="40" />} title="" />
        <TechnologyBrandTile icon={<FaWordpress size="40" />} title="" />
        <TechnologyBrandTile icon={<FaPhp size="40" />} title="" />
        <TechnologyBrandTile icon={<FaAws size="40" />} title="" />
        <TechnologyBrandTile icon={<FaDocker size="40" />} title="" />
      </Box>
    );
  }
}

export default TechnologyBrandsRibbon;
