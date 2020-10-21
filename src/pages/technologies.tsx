import React from "react";
import TechnologiesHero from "../components/technologies/TechnologiesHero";
import TechnologiesProcess from "../components/technologies/TechnologiesProcess";
import TechnologyBrands from "../components/technologies/TechnologyBrands";

interface TechnologiesProps {}

class Technologies extends React.Component<TechnologiesProps, {}> {
  public render() {
    return (
      <>
        <TechnologiesHero />
        <TechnologyBrands />
        <TechnologiesProcess />
      </>
    );
  }
}

export default Technologies;
