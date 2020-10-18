import React from "react";
import SectionOne from "../components/home/SectionOne";
import Ecommerce from "../components/services/Ecommerce";
import EcommerceHeader from "../components/services/EcommerceHeader";
import WebDesign from "../components/services/WebDesign";
import WebDesignHeader from "../components/services/WebDesignHeader";
import WebDevelopment from "../components/services/WebDevelopment";

interface ServicesProps {}

class Services extends React.Component<ServicesProps, {}> {
  public render() {
    return (
      <>
        <WebDesign />
        <WebDesignHeader />
        <WebDevelopment />
        <EcommerceHeader />
        <Ecommerce />
      </>
    );
  }
}

export default Services;
