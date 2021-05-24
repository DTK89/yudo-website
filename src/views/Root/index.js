import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { locations } from "routes";
import GlobalTemplate from "templates/GlobalStyleTemplate";
import RoutesProvider from "providers/RoutesProvider";
import HomePage from "templates/HomePageTemplate";
import About from "views/About";
import SectionView from "views/Section";
import SucessfulCases from "views/SucessfulCases";
import Downloads from "views/Downloads";
import Contact from "views/Contact";
import MainLayoutTemplate from "templates/MainLayoutTemplate";

function Root() {
  // const { path } = useRouteMatch();
  return (
    <GlobalTemplate>
      <BrowserRouter>
        <RoutesProvider>
          <MainLayoutTemplate>
            <Switch>
              <Route exact path={locations.home} component={HomePage} />
              <Route path={locations.aboutUs} component={About} />
              <Route path={locations.products} component={SectionView} />
              <Route path={locations.markets} component={SectionView} />
              <Route path={locations.technologies} component={SectionView} />
              <Route
                path={locations.sucessfulCases}
                component={SucessfulCases}
              />
              <Route path={locations.download} component={Downloads} />
              <Route path={locations.contact} component={Contact} />
            </Switch>
          </MainLayoutTemplate>
        </RoutesProvider>
      </BrowserRouter>
    </GlobalTemplate>
  );
}

export default Root;
