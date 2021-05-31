import React, { useState, useEffect, useContext } from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import { RoutesContext } from "providers/RoutesProvider";
import SectionTemplate from "templates/SectionTemplate";
import DetailsTemplate from "templates/DetailsTemplate";

const SectionView = () => {
  const { path } = useRouteMatch();
  const { navRoutes } = useContext(RoutesContext);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    setSections(navRoutes.find((element) => element.url === path).subSection);
  }, [navRoutes, path]);

  return (
    <SectionTemplate routes={sections}>
      <Switch>
        <Route exact path={`${path}`}>
          {path === `/products` && (
            <Redirect to={`${path}/hot-runner-system/tina-am`} />
          )}
          {path === `/products/hot-half-systems` && (
            <Redirect to="/products/hot-half-systems/hot-half" />
          )}
          {path === `/markets` && <Redirect to={`${path}/automotive`} />}
          {path === `/technologies` && <Redirect to={`${path}/iso`} />}
        </Route>
        <Route exact path={`${path}/:slug`}>
          <DetailsTemplate sectionEndpoint={path} />
        </Route>
        <Route path={`${path}/:slug/:slug`}>
          <DetailsTemplate sectionEndpoint={path} />
        </Route>
      </Switch>
    </SectionTemplate>
  );
};

export default SectionView;
