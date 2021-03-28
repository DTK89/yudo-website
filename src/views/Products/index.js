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
      .get(endpoints.products)
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
      routes={products.productSection}
    >
      <Switch>
        <Route exact path={`${path}`}>
          <Redirect to="/products/hot-runner-system/tina-am" />
        </Route>
        {products?.productSection?.length ? (
          <>
            {products.productSection.map((productsList) => (
              <Route
                key={productsList.label}
                path={`${path}/${productsList.slug}`}
              >
                {productsList?.product?.length > 1 ? (
                  <>
                    {productsList.product.map((product) => (
                      <Route
                        key={product.label}
                        path={`${path}/${productsList.slug}/${product.slug}`}
                      >
                        <ProductDetailsTemplate product={product} />
                      </Route>
                    ))}
                  </>
                ) : (
                  <ProductDetailsTemplate product={productsList} />
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

export default Products;
