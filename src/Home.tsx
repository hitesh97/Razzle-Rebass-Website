import React from "react";
import SectionEight from "./components/home/SectionEight";
import SectionFive from "./components/home/SectionFive";
import SectionFour from "./components/home/SectionFour";
import SectionOne from "./components/home/SectionOne";
import SectionSeven from "./components/home/SectionSeven";
import SectionSix from "./components/home/SectionSix";
import SectionThree from "./components/home/SectionThree";
import SectionTwo from "./components/home/SectionTwo";
import TopHeroSection from "./components/home/TopHeroSection";
import StickyFooterLayout from "./layout/StickyFooterLayout";
import ThreeColumnLayout from "./layout/ThreeColumnLayout";
// import ThreeColumnLayoutGrid from "./layout/ThreeColumnLayoutGrid";

class Home extends React.Component<{}, {}> {
  public render() {
    /* return <ThreeColumnLayout />;*/
    /* return <ThreeColumnLayoutGrid />;*/
    /* return <StickyFooterLayout />; */
    return (
      <>
        <TopHeroSection />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <SectionSeven />
        <SectionEight />
      </>
    );
  }
}

export default Home;
