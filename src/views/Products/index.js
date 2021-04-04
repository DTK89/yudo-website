import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import { api, endpoints } from "api";
import SectionTemplate from "templates/SectionTemplate";
import ProductDetailsTemplate from "templates/ProductDetailsTemplate";
import { background } from "./data";

const Products = () => {
  const { path } = useRouteMatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api
      .get(endpoints.productList)
      .then(({ data }) => {
        setProducts(data.productList);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <SectionTemplate backgroundImg={background} routes={products}>
      <Switch>
        <Route exact path={`${path}`}>
          <Redirect to="/products/hot-runner-systems/tina-am" />
        </Route>
        <Route exact path={`${path}/:slug`}>
          <ProductDetailsTemplate />
        </Route>
        <Route path={`${path}/:slug/:slug`}>
          <ProductDetailsTemplate />
        </Route>
      </Switch>
    </SectionTemplate>
  );
};

export default Products;
