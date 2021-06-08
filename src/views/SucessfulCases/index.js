import React, { useState, useEffect, useContext } from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import { RoutesContext } from "providers/RoutesProvider";
import SectionTemplate from "templates/SectionTemplate";
import GridSucessfulCasesTemplate from "templates/GridSucessfulCasesTemplate";

const SucessfulCases = () => {
  const { path } = useRouteMatch();
  const { navRoutes } = useContext(RoutesContext);
  const [sections, setSections] = useState([
    {
      __component: "navigation.single-section",
      id: 31,
      label: "Przemysł Samochodowy",
      urlSlug: "automotive",
    },
  ]);

  useEffect(() => {
    setSections(navRoutes.find((element) => element.url === path)?.subSection);
  }, [navRoutes, path]);

  return (
    <SectionTemplate routes={sections}>
      <Switch>
        <Route exact path={`${path}`}>
          {path === `/sucessful-cases` && (
            <Redirect to={`${path}/automotive`} />
          )}
        </Route>
        <Route exact path={`${path}/:slug`}>
          {sections && <GridSucessfulCasesTemplate />}
        </Route>
      </Switch>
    </SectionTemplate>
  );
};

export default SucessfulCases;
