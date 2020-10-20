import React from "react";
import { Box, Flex, Button, Text, Image } from "rebass";
import { FaPalette, FaRegPaperPlane } from "react-icons/fa";
import SectionTwoTile1 from "../home/SectionTwoTile1";
interface EcommerceProps {}

class Ecommerce extends React.Component<EcommerceProps, {}> {
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
            backgroundColor="white"
            tileIcon={null}
            tileSubTitle=""
            tileHeading="ECommerce"
            tileContent={
              <ul style={{ lineHeight: "2.5rem", listStyle: "none" }}>
                <li>EXPERIENCE IN ALL LEADING ECOMMERCE SOLUTIONS</li>
                <li>(SHOPIFY, WOOCOMMERCE, WAGTAIL, AND OTHERS)</li>
                <li>
                  PROVEN CAPABILITIES TO DEVELOP CUSTOM ECOMMERCE SOLUTIONS
                </li>
                <li>DEVELOPED WEB AS WELL AS MOBILE SHOPPING EXPERIENCES</li>
                <li>
                  EXPERTS IN INTEGRATIONS WITH OTHER APPLICATIONS, PAYMENT
                  GATEWAYS, AND THIRD-PARTY APIS
                </li>
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
            backgroundColor="white"
            tileIcon={null}
            tileSubTitle=""
            tileHeading=""
            tileContent={
              <Box style={{ fontSize: "1.5rem" }}>
                <p style={{ marginTop: "15px" }}>
                  We specialize in developing strategic customer-centric
                  shopping solutions that deliver measurable business results.
                  Our eCommerce consultants help clients build engaging digital
                  experiences for shoppers and consumers. Our team has extensive
                  experience with tailoring eCommerce solutions or developing
                  custom online shopping solutions from scratch. As a leading
                  eCommerce development solutions provider, we have the
                  experience and the expertise required to deliver a full range
                  of eCommerce services.
                </p>
              </Box>
            }
          />
        </Box>
      </Flex>
    );
  }
}

export default Ecommerce;
