import React from "react";
import HowWeWorkDetailsDev from "../components/howWeWork/HowWeWorkDetailsDev";
import HowWeWorkDetailsStaff from "../components/howWeWork/HowWeWorkDetailsStaff";
import HowWeWorkHeaderDev from "../components/howWeWork/HowWeWorkHeaderDev";
import HowWeWorkHeaderStaff from "../components/howWeWork/HowWeWorkHeaderStaff";

interface HowWeWorkProps {}

class HowWeWork extends React.Component<HowWeWorkProps, {}> {
  public render() {
    return (
      <>
        <HowWeWorkHeaderDev />
        <HowWeWorkDetailsDev />
        <HowWeWorkHeaderStaff />
        <HowWeWorkDetailsStaff />
      </>
    );
  }
}

export default HowWeWork;
