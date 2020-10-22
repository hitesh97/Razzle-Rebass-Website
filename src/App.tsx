import React from "react";
import { Route, Switch, RouteProps, Link } from "react-router-dom";
import Home from "./Home";
import Services from "./pages/services";
import StickyFooterLayout from "./layout/StickyFooterLayout";
import "./App.css";
import Technologies from "./pages/technologies";
import ContactUs from "./pages/contactUs";
import AboutUs from "./pages/aboutUs";
import HowWeWork from "./pages/howWeWork";

interface PrivateRouteProps extends RouteProps {
  // tslint:disable-next-line:no-any
  component: any;
  layout: any;
}

const RouteWrapper = (props: PrivateRouteProps) => {
  const { component: Component, layout: Layout, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

const App = () => (
  <Switch>
    <RouteWrapper
      exact={true}
      path="/"
      component={Home}
      layout={StickyFooterLayout}
    />
    <RouteWrapper
      exact={true}
      path="/services"
      component={Services}
      layout={StickyFooterLayout}
    />
    <RouteWrapper
      exact={true}
      path="/technologies"
      component={Technologies}
      layout={StickyFooterLayout}
    />
    <RouteWrapper
      exact={true}
      path="/contact-us"
      component={ContactUs}
      layout={StickyFooterLayout}
    />
    <RouteWrapper
      exact={true}
      path="/about-us"
      component={AboutUs}
      layout={StickyFooterLayout}
    />
    <RouteWrapper
      exact={true}
      path="/how-we-work"
      component={HowWeWork}
      layout={StickyFooterLayout}
    />
    <RouteWrapper component={Home} layout={StickyFooterLayout} />
  </Switch>
);

export default App;
