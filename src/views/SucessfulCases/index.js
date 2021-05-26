import React, { useState, useEffect, useContext } from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import { RoutesContext } from "providers/RoutesProvider";
import SectionTemplate from "templates/SectionTemplate";
import GridSucessfulCasesTemplate from "templates/GridSucessfulCasesTemplate";

const SucessfulCases = () => {
  const { path } = useRouteMatch();
  const { navRoutes } = useContext(RoutesContext);
  const [caseSection, setCaseSection] = useState([]);

  useEffect(() => {
    setCaseSection(
      navRoutes.find((element) => element.url === path).subSection
    );
  }, [path, navRoutes]);

  return (
    <SectionTemplate routes={caseSection}>
      <Switch>
        <Route exact path={`${path}`}>
          {path === `/sucessful-cases` && (
            <Redirect to={`${path}/automotive`} />
          )}
        </Route>
        <Route exact path={`${path}/:slug`}>
          {caseSection && <GridSucessfulCasesTemplate sectionEndpoint={path} />}
        </Route>
      </Switch>
    </SectionTemplate>
  );
};

export default SucessfulCases;
