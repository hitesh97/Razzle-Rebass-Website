import React from "react";
import { Box, Flex, Button, Text } from "rebass";

interface TopHeroSectionProps {}

class TopHeroSection extends React.Component<TopHeroSectionProps, {}> {
  public render() {
    return (
      <Box
        sx={{
          backgroundImage: "url(/Top_Hero_img.jpeg)",
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
            paddingTop: "100px",
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              flexBasis: 450,
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
                width: "420px",
                minHeight: "420px",
                backgroundColor: "defaultBG",
                marginLeft: "20px",
              }}
            >
              <Box sx={{ paddingLeft: "30px" }}>
                <Box
                  sx={{ minHeight: "80px", borderLeft: "1px solid white" }}
                ></Box>
                <Text
                  as="h1"
                  sx={{
                    marginTop: "20px",
                    fontSize: "3.75rem",
                    fontWeight: "300",
                  }}
                >
                  Welcome To Our Studio
                </Text>
                <Text as="p" sx={{ marginTop: "20px" }}>
                  Design that excites. Brand identities that pop. Web solutions
                  that are beautiful + functional.
                </Text>
                <Button
                  variant="outline"
                  sx={{
                    marginTop: "20px",
                    backgroundColor: "defaultBG",
                    color: "white",
                    fontWeight: "300",
                    fontFamily: "'PT Sans', system-ui, sans-serif",
                  }}
                >
                  Find out more
                </Button>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
    );
  }
}

export default TopHeroSection;
