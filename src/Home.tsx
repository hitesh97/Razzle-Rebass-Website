import React from "react";
import StickyFooterLayout from "./layout/StickyFooterLayout";
import ThreeColumnLayout from "./layout/ThreeColumnLayout";
// import ThreeColumnLayoutGrid from "./layout/ThreeColumnLayoutGrid";

class Home extends React.Component<{}, {}> {
  public render() {
    /* return <ThreeColumnLayout />;*/
    /* return <ThreeColumnLayoutGrid />;*/
    return <StickyFooterLayout />;
  }
}

export default Home;
