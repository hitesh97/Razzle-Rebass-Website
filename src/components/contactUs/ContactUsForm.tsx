import React, { useState } from "react";
import { Box, Flex, Button, Text } from "rebass";
import { Label, Input, Textarea } from "@rebass/forms";
import SiteConfig from "../../data/SiteConfig";

import axios from "axios";

const AsterixComponent = () => <span style={{ color: "red" }}>*</span>;

interface ContactUsFormProps {}

const ContactUsForm = (props: ContactUsFormProps) => {
  const [formSubmitted, setFormSubmit] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [comments, setComments] = useState("");

  const [error, setError] = useState("");
  const onFormSubmit = () => {
    setError("");
    setFormSubmit(false);
    axios
      .post(
        "/contactus",
        {
          firstName,
          lastName,
          company,
          email,
          phoneNo,
          comments,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        setFormSubmit(true);
        if (res.status === 200) {
          const apiError = res.data.error;
          setError(apiError);
          if (apiError === "") {
            setFirstName("");
            setLastName("");
            setCompany("");
            setEmail("");
            setPhoneNo("");
            setComments("");
          } else {
            setError(apiError);
          }
        }
      });
  };
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
          e.preventDefault();
          onFormSubmit();
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
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
          <Label htmlFor="lastName">
            Last name <AsterixComponent />
          </Label>
          <Input
            id="lastName"
            name="lastName"
            type="text"
            sx={{ fontSize: "1rem", height: "2.25rem" }}
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
          <Label htmlFor="company">
            Company/Organization <AsterixComponent />
          </Label>
          <Input
            id="company"
            name="company"
            type="text"
            sx={{ fontSize: "1rem", height: "2.25rem" }}
            onChange={(e) => setCompany(e.target.value)}
            value={company}
          />
          <Label htmlFor="email">
            Email <AsterixComponent />
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            sx={{ fontSize: "1rem", height: "2.25rem" }}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Label htmlFor="phoneNo">Phone number (optional)</Label>
          <Input
            id="phoneNo"
            name="phoneNo"
            type="text"
            sx={{ fontSize: "1rem", height: "2.25rem" }}
            onChange={(e) => setPhoneNo(e.target.value)}
            value={phoneNo}
          />
          <Label htmlFor="comment">
            How can we help? <AsterixComponent />
          </Label>
          <Textarea
            id="comment"
            name="comment"
            onChange={(e) => setComments(e.target.value)}
            value={comments}
          />
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
          {formSubmitted && error === "" && (
            <Box sx={{}}>
              Thank you for contacting us. One of our team members will be in
              touch with you soon.
            </Box>
          )}
          {formSubmitted && error !== "" && (
            <Box sx={{ color: "red" }}>
              There was an error sending your enquiry. Please contact us later.
            </Box>
          )}
        </Box>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          flexBasis: 512,
          minHeight: "450px",
          padding: "60px",
          paddingTop: "100px",
        }}
      >
        <Box style={{ fontSize: "1.2rem", lineHeight: "2.5rem" }}>
          <Text
            as="h1"
            sx={{ fontSize: "2rem", fontWeight: "300", marginBottom: "20px" }}
          >
            Prefer to email or phone?
          </Text>
          <Text as="h3" sx={{ fontWeight: "300" }}>
            {SiteConfig.contactEmail}
          </Text>
          <Text as="h3" sx={{ fontWeight: "300" }}>
            {SiteConfig.phone}
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};
export default ContactUsForm;
