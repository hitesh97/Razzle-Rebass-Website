import React from "react";
import { Box, Flex, Button, Text } from "rebass";
import { FaPalette, FaPencilRuler, FaRegPaperPlane } from "react-icons/fa";
import SectionOneTile from "./SectionOneTile";

interface SectionOneProps {}

class SectionOne extends React.Component<SectionOneProps, {}> {
  public render() {
    return (
      <Box
        sx={{
          display: "grid",
          gridTemplateAreas: ['"main"', '"marginLeft" "main" "marginRight"'],
          gridTemplateColumns: ["1fr", "1fr"],
          marginBottom: "40px",
          marginTop: "40px",
        }}
      >
        <Box
          sx={{
            gridArea: "main",
            margin: "auto",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateAreas: [
                '"leftMain" "centerMain" "rightMain"',
                '"leftMain" "centerMain" "rightMain"',
                '"leftMain centerMain rightMain"',
              ],
              gridTemplateColumns: ["1fr", "1fr", "1fr 1fr 1fr"],
            }}
          >
            <SectionOneTile
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

            <SectionOneTile
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
            <SectionOneTile
              gridArea="rightMain"
              tileIcon={<FaPencilRuler size="44" />}
              tileHeading="Web Development"
              tileContent={
                <ul style={{ listStyle: "circle" }}>
                  <li>Front & Back-end</li>
                  <li>E-Commerce</li>
                  <li>Content Management</li>
                  <li>WordPress / HTML5 / CSS3</li>
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
    );
  }
}

export default SectionOne;
