import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import { api, endpoints } from "api";
import SectionTemplate from "templates/SectionTemplate";
import TechnologyDetailsTemplate from "templates/TechnologyDetailsTemplate";
import { background } from "./data";

const Technology = () => {
  const { path } = useRouteMatch();
  // const { slug } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api
      .get(endpoints.technologyList)
      .then(({ data }) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <SectionTemplate
      backgroundImg={background}
      routes={products.technologyList}
    >
      <Switch>
        <Route exact path={`${path}`}>
          <Redirect to="/technology/iso" />
        </Route>

        <Route exact path={`${path}/:slug`}>
          <TechnologyDetailsTemplate />
        </Route>
        <Route path={`${path}/:slug/:slug`}>
          <TechnologyDetailsTemplate />
        </Route>
      </Switch>
    </SectionTemplate>
  );
};

export default Technology;
