import React from "react";
import Ecommerce from "../components/services/Ecommerce";
import EcommerceHeader from "../components/services/EcommerceHeader";
import ServicesHero from "../components/services/ServicesHero";
import WebDesign from "../components/services/WebDesign";
import WebDesignHeader from "../components/services/WebDesignHeader";
import WebDevelopment from "../components/services/WebDevelopment";
import WebDevelopmentHeader from "../components/services/WebDevelopmentHeader";
import MobileDevelopment from "../components/services/MobileDevelopment";
import MobileDevelopmentHeader from "../components/services/MobileDevelopmentHeader";

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
        <MobileDevelopmentHeader />
        <MobileDevelopment />
      </>
    );
  }
}

export default Services;
