import React from "react";
import { Box, Flex, Button, Text, Image } from "rebass";
import {
  FaRegLightbulb,
  FaStopwatch,
  FaRoute,
  FaToolbox,
} from "react-icons/fa";
import TechnologyTile from "./TechnologyTile";

interface TechnologiesProcessProps {}

class TechnologiesProcess extends React.Component<
  TechnologiesProcessProps,
  {}
> {
  public render() {
    return (
      <Box
        sx={{
          padding: "60px",
          paddingTop: "0px",
          color: "defaultBG",
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
              gridGap: 3,
              gridTemplateColumns: ["repeat(1, 1fr)", "repeat(2, 1fr)"],
            }}
          >
            <TechnologyTile
              icon={<FaRegLightbulb size="30" />}
              title="A complete solution"
              text="We take care of backend and frontend development, branding,
              UI/UX design, copywriting and SEO, everything needed to bring
              your ideas to life."
            />
            <TechnologyTile
              icon={<FaRoute size="30" />}
              title="A clear path"
              text="Before we get to work, we create a plan of action. One that
                  will explain—in plain English—precisely what we will be doing
                  and the steps we are going to take to achieve the goals we set
                  out."
            />
            <TechnologyTile
              icon={<FaStopwatch size="30" />}
              title="Delivered on time"
              text="Fundamental to our process is delivering on time, every time.
              When one domino falls, it’s easy for the rest to follow.
              That’s why we place such importance on setting a realistic
              timeframe and sticking to it."
            />
            <TechnologyTile
              icon={<FaToolbox size="30" />}
              title="An expert solutions and Tools"
              text="Our team is made up of some of the best full-stack and Laravel
              developers in the UK. Coupled with a core team of project
              managers, UX/UI designers and content writers, we provide the
              best and most competent team for the job."
            />
          </Box>
        </Box>
      </Box>
    );
  }
}

export default TechnologiesProcess;
