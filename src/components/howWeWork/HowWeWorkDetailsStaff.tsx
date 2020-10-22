import React from "react";
import { Box } from "rebass";
import TechnologyTile from "../technologies/TechnologyTile";

interface HowWeWorkDetailsStaffProps {}

class HowWeWorkDetailsStaff extends React.Component<
  HowWeWorkDetailsStaffProps,
  {}
> {
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
              title="Designers"
              text={
                <p>
                  Just imagine the result of your product designed by the most
                  inspiring minds with utmost creativity & cognitive knowledge.
                  That's what Digiryte has to offer. A flexible approach to
                  taking on board exactly what you need from a thoroughly vetted
                  pool of some of the best UI/UX talent around.
                </p>
              }
            />
            <TechnologyTile
              icon={null}
              title="Developers"
              text={
                <p>
                  Our highly skilled coders don't just use languages and
                  frameworks, they even contribute to the frameworks which are
                  used to build software by others. Do we really need to say
                  more about their expertise?
                </p>
              }
            />
            <TechnologyTile
              icon={null}
              title="App Development"
              text={
                <p>
                  Even after building a number of apps on both Android and iOS
                  systems, the new ideas we come across every day and the new
                  challenges they bring with them still manage to keep up on our
                  toes to find the newest and most innovate solutions. Whether
                  it’s a kids' learning app, an artistic tool, a management
                  utility, a payment interface or something never conceived
                  before, our expertise make the process of development that
                  much smoother.
                </p>
              }
            />
          </Box>
        </Box>
      </Box>
    );
  }
}

export default HowWeWorkDetailsStaff;
