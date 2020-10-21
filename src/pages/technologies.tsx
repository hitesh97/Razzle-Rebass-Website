import React from "react";
import TechnologiesHero from "../components/technologies/TechnologiesHero";
import TechnologiesProcess from "../components/technologies/TechnologiesProcess";

interface TechnologiesProps {}

class Technologies extends React.Component<TechnologiesProps, {}> {
  public render() {
    return (
      <>
        <TechnologiesHero />
        <TechnologiesProcess />
      </>
    );
  }
}

export default Technologies;
