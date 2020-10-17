import React from "react";
import { Box, Flex, Button, Text } from "rebass";

interface SectionEightProps {}

class SectionEight extends React.Component<SectionEightProps, {}> {
  public render() {
    return (
      <Box
        sx={{
          backgroundImage: "url(section8_tile1_img.jpeg)",
          backgroundSize: "",
          color: "white",
          bg: "gray",
          backgroundPosition: "50% 100%",
          minHeight: "600px",
          objectFit: "cover",
        }}
      >
        <Flex
          sx={{
            flexWrap: "wrap",
            color: "white",
            paddingTop: "120px",
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
            }}
          ></Box>
          <Box
            sx={{
              flexGrow: 1,
              flexBasis: 0,
              textAlign: "left",
            }}
          >
            <Box
              sx={{
                minHeight: "300px",
                backgroundColor: "defaultBG",
                marginLeft: "20px",
                marginRight: "60px",
              }}
            >
              <Box sx={{ paddingLeft: "30px" }}>
                <Text
                  as="h1"
                  sx={{
                    marginTop: "20px",
                    paddingTop: "40px",
                    fontSize: "3.75rem",
                    fontWeight: "300",
                  }}
                >
                  We Listen, You Talk!
                </Text>
                <Text as="p" sx={{ marginTop: "40px" }}>
                  That’s how we understand your expectations of your brand and
                  website. This simple approach provides us with the knowledge
                  we need to plan an effective strategy for your business.
                </Text>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
    );
  }
}

export default SectionEight;
