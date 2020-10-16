import React from "react";
import { Box, Flex, Image, Card, Heading, Text } from "rebass";
import { FaRegPaperPlane } from "react-icons/fa";
import SectionOneTile from "./SectionOneTile";
import SectionThreeTile from "./SectionThreeTile";

class SectionThree extends React.Component<{}, {}> {
  public render() {
    return (
      <Box
        sx={{
          backgroundColor: "sectionThreeBG",
          padding: "40px",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Text
            as="h3"
            sx={{
              fontWeight: "300",
              fontSize: "2.5rem",
              marginTop: "0px",
            }}
          >
            We Embrace New Technologies
          </Text>
        </Box>
        <Box
          sx={{
            backgroundColor: "sectionThreeBG",
            display: "grid",
            gridTemplateColumns: [
              "repeat(1, 1fr)",
              "repeat(1, 0.20fr) repeat(1, 1fr) repeat(1, 1fr) repeat(1, 1fr) repeat(1, 0.20fr)",
            ],
          }}
        >
          <Box sx={{}}></Box>
          <Box sx={{}}>
            <SectionThreeTile
              tileHeading="Ultimate Timing"
              tileImgUrl="/section3_tile1_img.jpeg"
              tileContent={
                <p>
                  Quisque faucibus lacus in consequat ornare proin tincidunt,
                  antesed condimentum congue.
                </p>
              }
            />
          </Box>
          <Box sx={{}}>
            <SectionThreeTile
              tileHeading="Faster & Stronger"
              tileImgUrl="/section3_tile2_img.jpeg"
              tileContent={
                <p>
                  Quisque faucibus lacus in consequat ornare proin tincidunt,
                  antesed condimentum congue.
                </p>
              }
            />
          </Box>
          <Box sx={{}}>
            <SectionThreeTile
              tileHeading="Young & Perspective"
              tileImgUrl="/section3_tile3_img.jpeg"
              tileContent={
                <p>
                  Quisque faucibus lacus in consequat ornare proin tincidunt,
                  antesed condimentum congue.
                </p>
              }
            />
          </Box>
          <Box sx={{}}></Box>
        </Box>
      </Box>
    );
  }
}

export default SectionThree;
