import React from "react";
import { Box, Flex, Button, Text, Image } from "rebass";

interface ContactUsHeaderProps {}

class ContactUsHeader extends React.Component<ContactUsHeaderProps, {}> {
  public render() {
    return (
      <Flex
        sx={{
          flexWrap: "wrap",
          backgroundColor: "servicesPageBG",
          color: "defaultBG",
          padding: "60px",
          paddingTop: "40px",
          paddingBottom: "0px",
        }}
      >
        <Box style={{ fontSize: "1.2rem" }}>
          <Text
            as="h1"
            sx={{ fontSize: "3rem", fontWeight: "300", marginBottom: "20px" }}
          >
            What can we build for you?
          </Text>
          <Text as="h3" sx={{ fontWeight: "300" }}>
            Drop us a message.
          </Text>
        </Box>
      </Flex>
    );
  }
}

export default ContactUsHeader;
