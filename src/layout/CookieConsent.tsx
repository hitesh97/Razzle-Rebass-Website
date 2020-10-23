import React, { FunctionComponent, useState, useEffect } from "react";
import { Box, Flex, Text, Button } from "rebass";
import Modal from "react-modal";

import { useCookies } from "react-cookie";

Modal.setAppElement("#root");

enum cookiNames {
  privacyActioned = "privacy-actioned",
  userAccepted = "privacy-accepted",
}
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "400px",
    width: "800px",
  },
};

const CookieConsent: FunctionComponent = () => {
  const [cookies, setCookie] = useCookies([cookiNames.privacyActioned]);
  console.log(cookies[cookiNames.privacyActioned]);
  const [closeCookieDialog, setCloseCookieDialog] = useState(
    cookies[cookiNames.privacyActioned] || false
  );

  const onCookieUserAction = (didUserAccept: boolean) => {
    setCookie(cookiNames.privacyActioned, true, { path: "/" });
    setCookie(cookiNames.userAccepted, didUserAccept, { path: "/" });
    setCloseCookieDialog(true);
  };
  return (
    <Modal
      isOpen={!closeCookieDialog}
      onAfterOpen={() => {}}
      onRequestClose={() => {}}
      style={customStyles}
      contentLabel="Cookie consent"
    >
      <Flex
        sx={{
          flexWrap: "wrap",
          color: "defaultBG",
          padding: 2,
          top: "100%",
          width: "100%",
          paddingRight: "60px",
          paddingLeft: "60px",
          transitionProperty: "all",
          transitionDuration: "1s",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          <Text as="h3">Data and Cookie Consent</Text>
          <Box
            style={{ color: "black", fontSize: "0.9rem", marginTop: "20px" }}
          >
            In order to provide a more personal user experience, we and our
            partners use technology such as cookies to store and/or access
            device information. By clicking “I Agree” you consent to these
            technologies which will allow us and our partners to process
            non-sensitive data such as IP address, unique ID, and browsing data
            for the purposes of serving personalized ads and content, ad and
            content measurement, audience insights, and to develop and improve
            products. Your choices on this site will be applied only for this
            site. You can change your settings at any time, including
            withdrawing your consent, by going to the Privacy Policy page of
            this site.
          </Box>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            flexBasis: 512,
            textAlign: "right",
            flexWrap: "wrap",
          }}
        >
          <ul
            style={{
              display: "inline-flex",
              listStyle: "none",
              fontSize: "1.2rem",
              flexWrap: "inherit",
              padding: "0px",
            }}
          >
            <li style={{ marginRight: "10px" }}>
              <Button
                variant="outline"
                sx={{
                  marginTop: "20px",
                  backgroundColor: "defaultBG",
                  color: "white",
                  fontWeight: "300",
                  cursor: "pointer",
                }}
                as="a"
                onClick={() => onCookieUserAction(false)}
              >
                Do not agree
              </Button>
            </li>
            <li>
              <Button
                variant="outline"
                sx={{
                  marginTop: "20px",
                  backgroundColor: "defaultBG",
                  color: "white",
                  fontWeight: "300",

                  cursor: "pointer",
                }}
                onClick={() => onCookieUserAction(true)}
                as="a"
              >
                I Agree
              </Button>
            </li>
          </ul>
        </Box>
      </Flex>
    </Modal>
  );
};

export default CookieConsent;
