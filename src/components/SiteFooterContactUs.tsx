import React from "react";
import { Box, Flex, Link } from "rebass";
import { FaEnvelope, FaPhone, FaWhatsapp, FaHome } from "react-icons/fa";
import SiteConfig from "../data/SiteConfig";

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
              lineHeight: "1.5rem",
            }}
          >
            <li style={{}}>
              <FaEnvelope size="20" style={{ marginRight: "20px" }} />
              <Link sx={{ color: "white" }} href={"contact-us"}>
                GET IN TOUCH
              </Link>
            </li>
            <li style={{}}>
              <FaWhatsapp size="20" style={{ marginRight: "20px" }} />
              SCHEDULE A MEETING : {SiteConfig.whatsAppNo}
            </li>
            <li style={{}}>
              <FaPhone size="20" style={{ marginRight: "20px" }} />
              PHONE: {SiteConfig.phone}
            </li>
            {/* <li style={{}}>
              <FaHome size="20" style={{ marginRight: "20px" }} />
              Address
              <ol style={{ listStyle: "none", marginTop: "5px" }}>
                {SiteConfig.address.line1 && (
                  <li>{SiteConfig.address.line1}</li>
                )}
                {SiteConfig.address.line2 && (
                  <li>
                    {SiteConfig.address.line2}
                    {SiteConfig.address.line3 &&
                      `, ${SiteConfig.address.line3}`}
                  </li>
                )}
                {SiteConfig.address.state && (
                  <li>
                    {SiteConfig.address.state}
                    {SiteConfig.address.country &&
                      `, ${SiteConfig.address.country}`}
                  </li>
                )}
              </ol>
            </li> */}
          </ul>
        </Box>
      </Flex>
    );
  }
}

export default SiteFooterContactUs;
