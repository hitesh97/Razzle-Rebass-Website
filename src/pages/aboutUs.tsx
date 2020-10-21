import React from "react";
import AboutUsHeader from "../components/aboutUs/AboutUsHeader";
import AboutUsValues from "../components/aboutUs/AboutUsValues";

interface AboutUsProps {}

class AboutUs extends React.Component<AboutUsProps, {}> {
  public render() {
    return (
      <>
        <AboutUsHeader />
        <AboutUsValues />
      </>
    );
  }
}

export default AboutUs;
