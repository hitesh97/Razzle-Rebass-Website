import React from "react";
import { Box, Flex, Button, Text } from "rebass";
import SectionTwoTile1 from "../home/SectionTwoTile1";

interface WebDevelopmentProps {}

class WebDevelopment extends React.Component<WebDevelopmentProps, {}> {
  public render() {
    return (
      <Flex
        sx={{
          flexWrap: "wrap",
          color: "defaultBG",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            flexBasis: 512,
            minHeight: "450px",
            textAlign: "right",
          }}
        >
          <SectionTwoTile1
            backgroundColor="servicesPageBG"
            tileIcon={null}
            tileSubTitle=""
            tileHeading="WEB DEVELOPMENT"
            tileContent={
              <ul
                style={{
                  fontSize: "1.2rem",
                  lineHeight: "2.5rem",
                  listStyle: "none",
                }}
              >
                <li>CROSS-BROWSER WEBSITE AND APPLICATION</li>
                <li>CUSTOM APPLICATIONS DEVELOPMENT</li>
                <li>ENTERPRISE WEB DEVELOPMENT</li>
                <li>CMS DEVELOPMENT</li>
              </ul>
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
          <SectionTwoTile1
            backgroundColor="servicesPageBG"
            tileIcon={null}
            tileSubTitle=""
            tileHeading=""
            tileContent={
              <Box style={{ fontSize: "1.5rem" }}>
                <p style={{ marginTop: "15px", lineHeight: "2.5rem" }}>
                  Due to the breadth of our technology expertise, we leverage
                  the right tools and platforms to build web applications that
                  perform optimally no matter what the load is, are scalable,
                  and easy to maintain and modify. We architect our applications
                  on sound principles and develop with clean coding practices.
                  With our unwavering focus on quality, our clients can
                  concentrate on their business without worrying about their
                  data and processes.
                </p>
              </Box>
            }
          />
        </Box>
      </Flex>
    );
  }
}

export default WebDevelopment;
