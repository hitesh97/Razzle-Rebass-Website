import React from "react";
import { Box, Flex, Button, Text } from "rebass";
import { Label, Input, Textarea } from "@rebass/forms";
import SiteConfig from "../../data/SiteConfig";

const AsterixComponent = () => <span style={{ color: "red" }}>*</span>;

interface ContactUsFormProps {}

class ContactUsForm extends React.Component<ContactUsFormProps, {}> {
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
            maxWidth: "550px",
          }}
          as="form"
          onSubmit={(e) => {
            console.log("---------- form submit --------");
            e.preventDefault();
          }}
        >
          <Box
            sx={{ fontSize: "1.2rem", maxWidth: "400px", lineHeight: "2.5rem" }}
          >
            <Label htmlFor="firstName">
              First name <AsterixComponent />
            </Label>
            <Input
              id="firstName"
              name="firstName"
              type="text"
              sx={{ fontSize: "1rem", height: "2.25rem" }}
            />
            <Label htmlFor="lastName">
              Last name <AsterixComponent />
            </Label>
            <Input
              id="lastName"
              name="lastName"
              type="text"
              sx={{ fontSize: "1rem", height: "2.25rem" }}
            />
            <Label htmlFor="company">
              Company/Organization <AsterixComponent />
            </Label>
            <Input
              id="company"
              name="company"
              type="text"
              sx={{ fontSize: "1rem", height: "2.25rem" }}
            />
            <Label htmlFor="email">
              Email <AsterixComponent />
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              sx={{ fontSize: "1rem", height: "2.25rem" }}
            />
            <Label htmlFor="phoneNo">Phone number (optional)</Label>
            <Input
              id="phoneNo"
              name="phoneNo"
              type="text"
              sx={{ fontSize: "1rem", height: "2.25rem" }}
            />
            <Label htmlFor="comment">
              How can we help? <AsterixComponent />
            </Label>
            <Textarea id="comment" name="comment" />
            <Button
              variant="outline"
              sx={{
                marginTop: "20px",
                backgroundColor: "defaultBG",
                color: "white",
                fontWeight: "300",
                paddingTop: "0px",
                paddingBottom: "0px",
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            flexBasis: 512,
            minHeight: "450px",
            padding: "60px",
            paddingLeft: "0px",
            paddingTop: "100px",
          }}
        >
          <Box style={{ fontSize: "1.2rem" }}>
            <Text
              as="h1"
              sx={{ fontSize: "2rem", fontWeight: "300", marginBottom: "20px" }}
            >
              Prefer to email or phone?
            </Text>
            <Text as="h3" sx={{ fontWeight: "300" }}>
              {SiteConfig.adminEmail}
            </Text>
            <Text as="h3" sx={{ fontWeight: "300" }}>
              {SiteConfig.phone}
            </Text>
          </Box>
        </Box>
      </Flex>
    );
  }
}

export default ContactUsForm;
