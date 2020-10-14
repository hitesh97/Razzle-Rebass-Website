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
          backgroundColor: "#ece7e7",
          padding: "8px",
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
                paddingLeft: "20px",
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
                alignSelf: "auto",
              }}
            >
              <Box
                sx={{
                  margin: "20px",
                }}
              >
                <RebassImage
                  src="undraw_community.svg"
                  width="100%"
                  height="100%"
                  sx={{
                    padding: "2px",
                    borderStyle: "solid",
                    borderColor: "#cacaca",
                    borderWidth: "1px",
                    borderRadius: "6px",
                  }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                flexGrow: 99,
                flexBasis: 0,
                minWidth: 320,
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              <br />
              Main Content Main Content Main Content Main Content Main Content
              Main Content Main Content Main Content Main Content Main Content
              Main Content Main Content Main Content Main Content Main Content
              Main Content Main Content Main Content Main Content Main Content
              Main Content Main Content
              <br />
              End
            </Box>
          </Flex>
        </Box>
      </Flex>
    );
  }
}

export default FullWidthArticle;
