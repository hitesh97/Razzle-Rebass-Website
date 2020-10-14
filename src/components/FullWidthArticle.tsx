import React from "react";
import { Box, Flex, Image as RebassImage } from "rebass";

class FullWidthArticle extends React.Component<{}, {}> {
  public render() {
    return (
      <Flex
        sx={{
          flexDirection: "column",
          flexWrap: "nowrap",
          justifyContent: "flex-start",
          alignItems: "stretch",
          alignContent: "stretch",
          backgroundColor: "red",
        }}
      >
        <Box sx={{}}>
          <Flex
            sx={{
              flexWrap: "wrap",
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                flexBasis: 400,
                alignSelf: "center",
              }}
            ></Box>
            <Box
              sx={{
                flexGrow: 99,
                flexBasis: 0,
                minWidth: 320,
                padding: "20px",
              }}
            >
              <h1>Title here</h1>
            </Box>
          </Flex>
        </Box>
        <Box sx={{}}>
          <Flex
            sx={{
              flexWrap: "wrap",
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                flexBasis: 400,
                alignSelf: "center",
              }}
            >
              <Box
                sx={{
                  margin: "20px",
                  padding: "20px",
                }}
              >
                <RebassImage
                  src="undraw_community.svg"
                  width="100%"
                  height="100%"
                />
              </Box>
            </Box>
            <Box
              sx={{
                flexGrow: 99,
                flexBasis: 0,
                minWidth: 320,
                padding: "20px",
              }}
            >
              Main Content
              <br />
              Main Content
              <br />
              Main Content
              <br />
              Main Content
              <br />
              Main Content
              <br />
            </Box>
          </Flex>
        </Box>
      </Flex>
    );
  }
}

export default FullWidthArticle;
