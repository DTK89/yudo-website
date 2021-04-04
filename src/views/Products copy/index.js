import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import { api, endpoints } from "api";
import SectionTemplate from "templates/SectionTemplate";
import ProductDetailsTemplate from "templates/ProductDetailsTemplate";
import { background } from "./data";

const Products = () => {
  const { path } = useRouteMatch();
  // const { slug } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api
      .get(endpoints.productList)
      .then(({ data }) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <SectionTemplate backgroundImg={background} routes={products.productList}>
      <Switch>
        <Route exact path={`${path}`}>
          <Redirect to="/products/hot-runner-systems/tina-am" />
        </Route>
        {products?.productList?.length ? (
          <>
            {products.productList.map((list) => (
              <Route key={list.label} path={`${path}/${list.slug}`}>
                <>
                  {list?.product?.length > 1 ? (
                    <>
                      {list.product.map((product) => (
                        <Route
                          key={product.label}
                          path={`${path}/${list.slug}/${product.slug}`}
                        >
                          <ProductDetailsTemplate slug={product.slug} />
                        </Route>
                      ))}
                    </>
                  ) : (
                    <ProductDetailsTemplate slug={list.slug} />
                  )}
                </>
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

export default Products;
