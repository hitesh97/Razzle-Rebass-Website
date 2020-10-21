import React from "react";
import { Box, Flex, Button, Text } from "rebass";
import { FaPalette, FaRegPaperPlane } from "react-icons/fa";
import SectionTwoTile1 from "./SectionTwoTile1";
import SectionTwoTile2 from "./SectionTwoTile2";

interface SectionTwoProps {}

class SectionTwo extends React.Component<SectionTwoProps, {}> {
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
          <SectionTwoTile1
            tileIcon={null}
            tileSubTitle="ABOUT US"
            tileHeading="How We Work"
            tileContent={
              <>
                <p style={{ marginTop: "40px" }}>
                  Specialists in brand strategy, brand creation and design
                  across print, digital and environmental platforms. We use
                  design thinking to add commercial value to our clients
                  businesses and products, producing work that engages and
                  provokes positive change.
                </p>
                <Button
                  variant="outline"
                  sx={{
                    marginTop: "20px",
                    backgroundColor: "defaultBG",
                    color: "white",
                    fontWeight: "300",
                  }}
                  href="/howwework"
                  as="a"
                >
                  LEARN MORE
                </Button>
              </>
            }
          />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            flexBasis: 512,
            minHeight: "450px",
          }}
        >
          <SectionTwoTile2
            imgUrl="section2_tile2_img.jpeg"
            tileContent={
              <p style={{ fontSize: "1.2rem", marginTop: "30px" }}>
                They were also very responsive and focused on delivering just
                what we asked for. We’re extremely happy with our site, and
                found Elaine really guided us through the process.
              </p>
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
            <SectionTwoTile1
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

            <SectionTwoTile2
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

export default SectionTwo;
