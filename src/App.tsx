import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Services from "./pages/services";

import "./App.css";

const App = () => (
  <Switch>
    <Route exact={true} path="/" component={Home} />
    <Route exact={true} path="/services" component={Services} />
    <Route component={Home} />
  </Switch>
);

export default App;
