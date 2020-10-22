import React from "react";
import { Box } from "rebass";
import TechnologyTile from "../technologies/TechnologyTile";

interface UIDesignDetailsProps {}

class UIDesignDetails extends React.Component<UIDesignDetailsProps, {}> {
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
              gridTemplateColumns: ["repeat(1, 1fr)", "repeat(1, 1fr)"],
            }}
          >
            <TechnologyTile
              icon={null}
              title="Responsive design"
              text={
                <p>
                  It’s a multi-device world. Responsive web design is essential.
                  Our team builds digital products that look great and deliver
                  the best user experience on all devices. Our in-house
                  designers have a breadth of experience in responsive design,
                  we create functional products that look great on web, mobile
                  and tablet devices.
                </p>
              }
            />
            <TechnologyTile
              icon={null}
              title="Contemporary design, fundamental ideas"
              text={
                <p>
                  All of our designers are formally trained in color theory, and
                  the principles of visual design such as balance, hierarchy and
                  the appropriate use of textures and shapes. These deep
                  credentials are complemented by keeping a tap on the pulse of
                  modern UI design developments – such as the use of digital
                  illustrations, interaction design, 3d graphics and transition
                  design.
                </p>
              }
            />
          </Box>
        </Box>
      </Box>
    );
  }
}

export default UIDesignDetails;
