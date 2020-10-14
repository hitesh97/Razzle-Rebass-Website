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
        }}
      >
        <Box sx={{ backgroundColor: "red" }}>
          <Flex
            sx={{
              flexWrap: "wrap",
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                flexBasis: 400,
                backgroundColor: "hotpink",
                padding: "20px",
                margin: "20px",
                alignSelf: "center",
              }}
            ></Box>
            <Box
              sx={{
                flexGrow: 99,
                flexBasis: 0,
                minWidth: 320,
                backgroundColor: "blue",
              }}
            >
              <h1>Title here</h1>
            </Box>
          </Flex>
        </Box>
        <Box sx={{ backgroundColor: "green" }}>
          <Flex
            sx={{
              flexWrap: "wrap",
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                flexBasis: 400,
                backgroundColor: "hotpink",
                padding: "20px",
                margin: "20px",
                alignSelf: "center",
              }}
            >
              <RebassImage
                src="undraw_community.svg"
                width="100%"
                height="100%"
              />
            </Box>
            <Box
              sx={{
                flexGrow: 99,
                flexBasis: 0,
                minWidth: 320,
                backgroundColor: "blue",
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
