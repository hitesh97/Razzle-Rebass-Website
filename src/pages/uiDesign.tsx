import React from "react";
import UIDesignContemporary from "../components/uiDesign/UIDesignContemporary";
import UIDesignResponsive from "../components/uiDesign/UIDesignResponsive";
import UIDesignHeader from "../components/uiDesign/UIDesignHeader";

interface UIDesignProps {}

class UIDesign extends React.Component<UIDesignProps, {}> {
  public render() {
    return (
      <>
        <UIDesignHeader />
        <UIDesignContemporary />
        <UIDesignResponsive />
      </>
    );
  }
}

export default UIDesign;
