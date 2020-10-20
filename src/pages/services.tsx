import React from "react";
import Ecommerce from "../components/services/Ecommerce";
import EcommerceHeader from "../components/services/EcommerceHeader";
import ServicesHero from "../components/services/ServicesHero";
import WebDesign from "../components/services/WebDesign";
import WebDesignHeader from "../components/services/WebDesignHeader";
import WebDevelopment from "../components/services/WebDevelopment";
import WebDevelopmentHeader from "../components/services/WebDevelopmentHeader";

interface ServicesProps {}

class Services extends React.Component<ServicesProps, {}> {
  public render() {
    return (
      <>
        <ServicesHero />
        <WebDesignHeader />
        <WebDesign />
        <WebDevelopmentHeader />
        <WebDevelopment />
        <EcommerceHeader />
        <Ecommerce />
      </>
    );
  }
}

export default Services;
