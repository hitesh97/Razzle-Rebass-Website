import React from "react";
import ContactUsForm from "../components/contactUs/ContactUsForm";
import ContactUsHeader from "../components/contactUs/ContactUsHeader";

interface ContactUsProps {}

class ContactUs extends React.Component<ContactUsProps, {}> {
  public render() {
    return (
      <>
        <ContactUsHeader />
        <ContactUsForm />
      </>
    );
  }
}

export default ContactUs;
