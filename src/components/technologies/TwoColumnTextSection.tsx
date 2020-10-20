import React from "react";
import { Box, Flex, Button, Text } from "rebass";
import { FaRegPaperPlane } from "react-icons/fa";

interface TwoColumnTextSectionProps {
  tileIcon: React.ReactNode;
  tileSubTitle: string;
  tileHeading: string;
  tileContent: React.ReactNode;
  backgroundColor?: string;
}

class TwoColumnTextSection extends React.Component<
  TwoColumnTextSectionProps,
  {}
> {
  public render() {
    return (
      <Box
        sx={{
          backgroundColor: this.props.backgroundColor || "defaultBG",
          padding: "60px",
          paddingTop: "0px",
          height: "100%",
        }}
      >
        {this.props.tileIcon && (
          <Box sx={{ color: "defaultBG" }}>{this.props.tileIcon}</Box>
        )}
        {this.props.tileSubTitle && (
          <Text
            as="h4"
            sx={{
              fontWeight: "300",
              fontSize: "1rem",
              marginTop: "40px",
            }}
          >
            {this.props.tileSubTitle}
          </Text>
        )}
        {this.props.tileHeading && (
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
        )}
        {this.props.tileContent}
      </Box>
    );
  }
}

export default TwoColumnTextSection;
