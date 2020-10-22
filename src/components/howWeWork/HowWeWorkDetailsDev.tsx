import React from "react";
import { Box } from "rebass";
import TechnologyTile from "../technologies/TechnologyTile";

interface HowWeWorkDetailsDevProps {}

class HowWeWorkDetailsDev extends React.Component<
  HowWeWorkDetailsDevProps,
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
              title="Product Development"
              text={
                <p>
                  From designing state of the art products with the help of our
                  behavioural psychologists, to developing them using the latest
                  in technologies, we have what it takes to bring the next big
                  tech sensation to life.
                </p>
              }
            />
            <TechnologyTile
              icon={null}
              title="Web Development"
              text={
                <p>
                  From eCommerce systems and chatbots built on machine learning
                  to secure ledgers on blockchain systems, our expert web
                  developers build them full stack. Our UI/UX designers are
                  second to none with their presentation skills, ready to
                  impress your users. We also help improve existing systems, all
                  while keeping our turn around times quick and staying highly
                  affordable. Wherever we go, we carry our lean and agile
                  methodologies with us, for you.
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

export default HowWeWorkDetailsDev;
