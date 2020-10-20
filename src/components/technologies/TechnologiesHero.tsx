import React from "react";
import { Box, Flex, Button, Text, Image } from "rebass";

interface TechnologiesHeroProps {}

class TechnologiesHero extends React.Component<TechnologiesHeroProps, {}> {
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
            <Text as="h1" sx={{ fontSize: "3rem", fontWeight: "300" }}>
              The Technology Partner, Trusted By Customers Again and Again!
            </Text>
            <p style={{ marginTop: "15px", lineHeight: "2.5rem" }}>
              Over the last decade of our existence, We have acquired excellent,
              wide expertise over software development platforms, technologies,
              and languages.
              <br />
              The clarity of fundamentals has always enabled us to understand
              and master the rapidly evolving technological eco-system.
              <br />
              The learning culture that we have established enables every team
              member to stay tune to and acquire expertise over the changes
              continuously.
              <br />
              Our focus on sound architectural design and clean coding practices
              ensure that we always deliver scalable, secure, and
              high-performing applications.
            </p>
            <Box
              sx={{
                width: "250px",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "black",
                textAlign: "center",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "60px",
              }}
            />
          </Box>
        </Box>
      </Flex>
    );
  }
}

export default TechnologiesHero;
