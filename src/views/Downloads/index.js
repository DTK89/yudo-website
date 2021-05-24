import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import { api, endpoints } from "api";
import SectionTemplate from "templates/SectionTemplate";
import GridTemplate from "templates/GridTemplate";
import { background } from "./data";

const Downloads = () => {
  const { path } = useRouteMatch();
  const [downloads, setDownloads] = useState([]);

  useEffect(() => {
    api
      .get(endpoints.downloads)
      .then(({ data }) => {
        setDownloads(data.fileSection);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <SectionTemplate backgroundImg={background} routes={downloads}>
      <Switch>
        <Route exact path={`${path}`}>
          <Redirect to="/download/market-catalogues" />
        </Route>
        <Route exact path={`${path}/:slug`}>
          <GridTemplate fileLists={downloads} />
        </Route>
      </Switch>
    </SectionTemplate>
  );
};

export default Downloads;
