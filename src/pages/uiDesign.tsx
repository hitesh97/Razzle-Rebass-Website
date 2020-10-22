import React from "react";
import UIDesignDetails from "../components/uiDesign/UIDesignDetails";
import UIDesignHeader from "../components/uiDesign/UIDesignHeader";

interface UIDesignProps {}

class UIDesign extends React.Component<UIDesignProps, {}> {
  public render() {
    return (
      <>
        <UIDesignHeader />
        <UIDesignDetails />
      </>
    );
  }
}

export default UIDesign;
