import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from "routes";
import GlobalTemplate from "templates/GlobalStyleTemplate";
import HomePage from "templates/HomePageTemplate";
import About from "views/About";
import Contact from "views/Contact";

function Root() {
  return (
    <>
      <GlobalTemplate>
        <BrowserRouter>
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <Route path={routes.aboutUs} component={About} />
            <Route path={routes.aboutGlobal} component={About} />
            {/* <Route
              exact
              path={routes.twitters}
              component={Twitters}
              pageType="twitters"
            /> */}
            {/* <Route
              path={routes.twitter}
              component={DetailsPage}
              pageType="notes"
            /> */}
            {/* <Route path={routes.download} component={Downloads} /> */}
            <Route path={routes.contact} component={Contact} />
          </Switch>
        </BrowserRouter>
      </GlobalTemplate>
    </>
  );
}

export default Root;
