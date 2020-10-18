import React from "react";
import { Box, Flex, Button, Text } from "rebass";
import SectionTwoTile1 from "./SectionTwoTile1";
import SectionFourTile1 from "./SectionFourTile1";

interface SectionFourProps {}

class SectionFour extends React.Component<SectionFourProps, {}> {
  public render() {
    return (
      <Flex
        sx={{
          flexWrap: "wrap",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            flexBasis: 512,
            minHeight: "450px",
          }}
        >
          <SectionFourTile1 imgUrl="section4_tile1_img.jpeg" />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            flexBasis: 512,
            minHeight: "450px",
          }}
        >
          <SectionTwoTile1
            tileIcon={null}
            tileSubTitle="WORKING TOGETHER"
            tileHeading="What Can We Do For You?"
            tileContent={
              <>
                <p style={{ fontSize: "1.1rem", marginTop: "40px" }}>
                  We can build you a new website from scratch. Most likely it
                  will be Wordpress-based. We will also take care of the domain
                  registration for you and and will host and support your site
                  after the development.
                </p>
                <Button
                  variant="outline"
                  sx={{
                    marginTop: "20px",
                    backgroundColor: "defaultBG",
                    color: "white",
                    fontWeight: "300",
                  }}
                  href="/worktogether"
                  as="a"
                >
                  LEARN MORE
                </Button>
              </>
            }
          />
        </Box>
      </Flex>
    );
    /* return (
      <Box
        sx={{
          display: "grid",
          gridTemplateAreas: [
            '"marginLeft" "main" "marginRight"',
            '"marginLeft main marginRight"',
          ],
          gridTemplateColumns: ["1fr", "100px 1fr 100px"],
          gridTemplateRows: [
            "min-content min-content 1fr min-content min-content",
          ],

          minHeight: "500px",
        }}
      >
        <Box
          sx={{
            gridArea: "main",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateAreas: [
                '"leftMain" "centerMain"',
                '"leftMain centerMain"',
              ],
              gridTemplateColumns: ["1fr", "1fr 1fr"],
              alignContent: "stretch",
              alignSelf: "stretch",
            }}
          >
            <SectionFourTile1
              gridArea="leftMain"
              tileIcon={<FaRegPaperPlane size="44" />}
              tileHeading="Branding"
              tileContent={
                <ul style={{ listStyle: "circle" }}>
                  <li>Development & Research</li>
                  <li>Development</li>
                  <li>Strategy & Placement</li>
                  <li>Brand Application</li>
                </ul>
              }
            />

            <SectionFourTile2
              gridArea="centerMain"
              tileIcon={<FaPalette size="44" />}
              tileHeading="Graphic Design"
              tileContent={
                <ul style={{ listStyle: "circle" }}>
                  <li>Stationery & Promotional Material</li>
                  <li>Design</li>
                  <li>Art Direction</li>
                  <li>Signage & Environment</li>
                </ul>
              }
            />
          </Box>
        </Box>
        <Box
          sx={{
            gridArea: "marginLeft",
          }}
        ></Box>
        <Box
          sx={{
            gridArea: "marginRight",
          }}
        ></Box>
      </Box>
    ); */
  }
}

export default SectionFour;
