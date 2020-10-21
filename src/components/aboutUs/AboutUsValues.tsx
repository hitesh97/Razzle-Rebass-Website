import React from "react";
import { Box } from "rebass";
import TechnologyTile from "../technologies/TechnologyTile";

interface AboutUsValuesProps {}

class AboutUsValues extends React.Component<AboutUsValuesProps, {}> {
  public render() {
    return (
      <Box
        sx={{
          padding: "60px",
          color: "defaultBG",
          paddingTop: "0px",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Box
            sx={{
              backgroundColor: "white",
              display: "grid",
              gridGap: 1,
              gridTemplateColumns: ["repeat(1, 1fr)", "repeat(2, 1fr)"],
            }}
          >
            <TechnologyTile
              icon={null}
              title="Company focus"
              text="Our focus is the agile development of web, cloud, and mobile applications - and helping organizations create and sustain digital innovation. We reduce development risk for our clients by using sprint methodology, user-focused design and standards-based code to get digital platforms to market quickly."
            />
            <TechnologyTile
              icon={null}
              title="Agile approach"
              text="Our approach is fast, flexible, and collaborative. All Tivix clients have direct access to our leadership team, plus a designated Product Manager who is responsible for making sure we thoroughly understand client expectations and deliver to them."
            />
            <TechnologyTile
              icon={null}
              title="Global team, local feel"
              text="We're a tightly knit global team, with offices in 6 major cities across the world. We're passionate about learning, developing ourselves professionally and creating innovative digital products for clients around the world."
            />
            <TechnologyTile
              icon={null}
              title="Process"
              text="We create business impact via a proven approach to identifying and delivering on digital opportunities, using best-in-class techniques such as design thinking, rapid prototyping and UXD. Our process includes aspects of the Google Ventures Design Sprint and Stanford’s d.school methodology."
            />
          </Box>
        </Box>
      </Box>
    );
  }
}

export default AboutUsValues;
