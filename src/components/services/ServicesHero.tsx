import React from "react";
import { Box, Flex, Button, Text, Image } from "rebass";

interface ServicesHeroProps {}

class ServicesHero extends React.Component<ServicesHeroProps, {}> {
  public render() {
    return (
      <Flex
        sx={{
          flexWrap: "wrap",
          backgroundColor: "servicesPageBG",
          color: "defaultBG",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            flexBasis: 512,
            minHeight: "450px",
            padding: "60px",
          }}
        >
          <Box style={{ fontSize: "1.2rem" }}>
            <Text as="h1" sx={{ fontSize: "2.5rem", fontWeight: "300" }}>
              Leverage technology for strategic achievements
            </Text>
            <Text
              as="h4"
              sx={{
                fontSize: "1.25rem",
                fontWeight: "300",
                lineHeight: "3rem",
              }}
            >
              THROUGH TRANSPARENT AND QUICK DELIVERY
            </Text>
            <p
              style={{
                marginTop: "15px",
                lineHeight: "2.5rem",
                fontSize: "1.5rem",
              }}
            >
              Our team designs and delivers innovative applications by
              leveraging our experience, skills, and processes. We have gained
              deep industry-insights by working with a variety of domains, and
              we bring this knowledge to ensure that you meet your core
              objectives. Our technical expertise ensures that the team can
              tackle any challenge to provide you with a quality solution.
            </p>
            <Box>
              <ul style={{ lineHeight: "2.5rem", listStyle: "circle" }}>
                <li>BROAD INDUSTRY AND TECHNOLOGY EXPERIENCE</li>
                <li>
                  TRANSPARENT COLLABORATION & PROJECT MANAGEMENT PROCESSES
                </li>
                <li>ARCHITECTURE BASED ON SOUND DESIGN PRINCIPLES</li>
                <li>FOCUS ON BALANCED INTERACTION DESIGN AND AESTHETICS</li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Flex>
    );
  }
}

export default ServicesHero;
