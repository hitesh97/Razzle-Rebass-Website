import React from "react";
import { Box, Flex, Link } from "rebass";
import { FaEnvelope, FaPhone, FaWhatsapp, FaHome } from "react-icons/fa";

class SiteFooterContactUs extends React.Component<{}, {}> {
  public render() {
    return (
      <Flex
        sx={{
          flexWrap: "wrap",
          color: "white",
          padding: 3,
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
          }}
        ></Box>
        <Box
          sx={{
            flexGrow: 1,
            flexBasis: 512,
            flexWrap: "wrap",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              flexWrap: "inherit",
              padding: "0px",
              textAlign: "left",
            }}
          >
            <li style={{ marginLeft: "15px" }}>
              <FaEnvelope size="20" style={{ marginRight: "20px" }} />
              GET IN TOUCH
            </li>
            <li style={{ marginLeft: "15px" }}>
              <FaWhatsapp size="20" style={{ marginRight: "20px" }} />
              SCHEDULE A MEETING
            </li>
            <li style={{ marginLeft: "15px" }}>
              <FaPhone size="20" style={{ marginRight: "20px" }} />
              PHONE: XXX-XXX-XXX
            </li>
            <li style={{ marginLeft: "15px" }}>
              <FaHome size="20" style={{ marginRight: "20px" }} /> Address :
            </li>
          </ul>
        </Box>
      </Flex>
    );
  }
}

export default SiteFooterContactUs;
