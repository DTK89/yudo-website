import React, { useState, useEffect, useContext } from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import SectionTemplate from "templates/SectionTemplate";
// import TechnologyDetailsTemplate from "templates/TechnologyDetailsTemplate";
import { RoutesContext } from "providers/RoutesProvider";
import MarketDetailsTemplate from "templates/MarketDetailsTemplate";
// import { background } from "./data";

const Technology = () => {
  const { path } = useRouteMatch();
  const { routes } = useContext(RoutesContext);
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    setTechnologies(routes.find((element) => element.url === path).subSection);
  }, [routes, path]);

  return (
    <SectionTemplate
      // backgroundImg={background}
      routes={technologies}
    >
      <Switch>
        <Route exact path={`${path}`}>
          <Redirect to="/technologies/iso" />
        </Route>

        <Route exact path={`${path}/:slug`}>
          <MarketDetailsTemplate sectionEndpoint={path} />
          {/* <TechnologyDetailsTemplate /> */}
        </Route>
        <Route path={`${path}/:slug/:slug`}>
          <MarketDetailsTemplate sectionEndpoint={path} />
          {/* <TechnologyDetailsTemplate /> */}
        </Route>
      </Switch>
    </SectionTemplate>
  );
};

export default Technology;
