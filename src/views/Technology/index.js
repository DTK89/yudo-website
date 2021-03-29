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
        console.log(error);
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
        {products?.technologyList?.length ? (
          <>
            {products.technologyList.map((list) => (
              <Route key={list.label} path={`${path}/${list.slug}`}>
                {list?.product?.length > 1 ? (
                  <>
                    {list.product.map((product) => (
                      <Route
                        key={product.label}
                        path={`${path}/${list.slug}/${product.slug}`}
                      >
                        <TechnologyDetailsTemplate slug={product.slug} />
                      </Route>
                    ))}
                  </>
                ) : (
                  <TechnologyDetailsTemplate slug={list.slug} />
                )}
              </Route>
            ))}
          </>
        ) : (
          <h2>loading</h2>
        )}
      </Switch>
    </SectionTemplate>
  );
};

export default Technology;
