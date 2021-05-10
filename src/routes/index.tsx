import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Page404 } from "../components/pageNotFound";
import Portfolio from "../screens/portfolio";
import { routes } from "./routes";
import { JavascriptConcepts } from "../screens/javascript";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path={routes.home}>
          <Portfolio />
        </Route>
        <Route exact path={routes.javascriptCocepts}>
          <JavascriptConcepts />
        </Route>
        <Route component={Page404} />
      </Switch>
    </Router>
  );
}
