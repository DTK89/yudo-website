import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from "routes";
import GlobalTemplate from "templates/GlobalStyleTemplate";
import HomePage from "templates/HomePageTemplate";
import About from "views/About";
import Markets from "views/Markets";
import SucessfulCases from "views/SucessfulCases";
import Downloads from "views/Downloads";
import Contact from "views/Contact";

function Root() {
  return (
    <>
      <GlobalTemplate>
        <BrowserRouter>
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <Route path={routes.aboutUs} component={About} />
            {/* <Route path={routes.download} component={Downloads} /> */}
            <Route path={routes.markets} component={Markets} />
            {/* <Route path={routes.download} component={Downloads} /> */}
            <Route path={routes.sucessfulCases} component={SucessfulCases} />
            <Route path={routes.download} component={Downloads} />
            <Route path={routes.contact} component={Contact} />
          </Switch>
        </BrowserRouter>
      </GlobalTemplate>
    </>
  );
}

export default Root;
