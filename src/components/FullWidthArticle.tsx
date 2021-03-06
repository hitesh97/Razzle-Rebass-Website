import React from "react";
import { Box, Flex, Image as RebassImage } from "rebass";

interface FullWidthArticleProps {
  heading: string;
}

class FullWidthArticle extends React.Component<FullWidthArticleProps, {}> {
  public render() {
    return (
      <section>
        <Flex
          sx={{
            flexDirection: "column",
            flexWrap: "nowrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            alignContent: "stretch",
            backgroundColor: "#00B0FF", //"#6c63ff",
            paddingLeft: "80px",
            paddingRight: "80px",
            paddingTop: "30px",
            paddingBottom: "30px",
            color: "#ffffff",
          }}
        >
          <Box sx={{}}>
            <Flex
              sx={{
                flexWrap: "wrap",
                /* flexDirection: "row-reverse", */
              }}
            >
              {/* <Box
              sx={{
                flexGrow: 1,
                flexBasis: 400,
                alignSelf: "center",
              }}
            ></Box> */}
              <Box
                sx={{
                  flexGrow: 99,
                  flexBasis: 0,
                  minWidth: 320,
                  fontSize: "20px",
                  paddingLeft: "20px",
                  textAlign: "center",
                }}
              >
                <h1>{this.props.heading}</h1>
              </Box>
            </Flex>
          </Box>
          <Box sx={{}}>
            <Flex
              sx={{
                flexWrap: "wrap",
                /* flexDirection: "row-reverse", */
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
                      borderWidth: "0px",
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
                {this.props.children}
              </Box>
            </Flex>
          </Box>
        </Flex>
      </section>
    );
  }
}

export default FullWidthArticle;
