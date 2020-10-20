import React from "react";
import Ecommerce from "../components/services/Ecommerce";
import EcommerceHeader from "../components/services/EcommerceHeader";
import WebDesign from "../components/services/WebDesign";
import WebDesignHeader from "../components/services/WebDesignHeader";
import WebDevelopment from "../components/services/WebDevelopment";
import WebDevelopmentHeader from "../components/services/WebDevelopmentHeader";
import MobileDevelopment from "../components/technologies/MobileDevelopment";
import MobileDevelopmentHeader from "../components/technologies/MobileDevelopmentHeader";
import TechnologiesHero from "../components/technologies/TechnologiesHero";

interface TechnologiesProps {}

class Technologies extends React.Component<TechnologiesProps, {}> {
  public render() {
    return (
      <>
        <TechnologiesHero />
        <MobileDevelopment />
        <MobileDevelopmentHeader />
        {/* <WebDevelopment />
        <WebDevelopmentHeader />
        <EcommerceHeader /> 
        <Ecommerce />*/}
      </>
    );
  }
}

export default Technologies;
