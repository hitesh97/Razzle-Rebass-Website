import React from "react";
import { Box, Flex, Button, Text } from "rebass";
import { FaRegPaperPlane } from "react-icons/fa";

interface SectionTwoTile1Props {
  tileIcon: React.ReactNode;
  tileSubTitle: string;
  tileHeading: string;
  tileContent: React.ReactNode;
}

class SectionTwoTile1 extends React.Component<SectionTwoTile1Props, {}> {
  public render() {
    return (
      <Box
        sx={{
          backgroundColor: "defaultBG",
          padding: "60px",
          height: "100%",
        }}
      >
        {this.props.tileIcon && (
          <Box sx={{ color: "defaultBG" }}>{this.props.tileIcon}</Box>
        )}
        <Text
          as="h4"
          sx={{
            fontWeight: "300",
            fontSize: "1rem",
            marginTop: "15px",
          }}
        >
          {this.props.tileSubTitle}
        </Text>
        <Text
          as="h3"
          sx={{
            fontWeight: "300",
            fontSize: "2.5rem",
            marginTop: "15px",
          }}
        >
          {this.props.tileHeading}
        </Text>
        {this.props.tileContent}
      </Box>
    );
  }
}

export default SectionTwoTile1;
