import React, { useState, useEffect, useContext } from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import SectionTemplate from "templates/SectionTemplate";
import MarketDetailsTemplate from "templates/MarketDetailsTemplate";
import { RoutesContext } from "providers/RoutesProvider";
// import styled from "styled-components";
// import { background } from "./data";

// const GridWrapper = styled.div`
//   padding: 10px;
//   display: grid;
//   grid-gap: 10px;
//   grid-template-columns: 1fr;

//   @media screen and (min-width: 768px) {
//     grid-template-columns: 1fr 1fr;
//   }

//   @media screen and (min-width: 992px) {
//     grid-template-columns: 1fr 1fr 1fr 1fr;
//   }
//   /* grid-template-rows: 12px 12px 12px; */
// `;

// const FileCard = styled.div`
//   border: 1px solid var(--clr-trinary);
//   padding: 10px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   align-items: center;
//   min-height: 150px;
//   h4 {
//     margin: 10px 0 10px 0;
//   }

//   a {
//     text-align: center;
//     width: 100%;
//     padding: 5px 15px;
//     color: var(--clr-primary);
//     border: 1px solid var(--clr-primary);
//     border-radius: 2px;

//     &:hover {
//       color: var(--clr-secondary);
//       background: var(--clr-primary);
//     }
//   }
// `;

const SectionView = () => {
  const { path } = useRouteMatch();
  const { routes } = useContext(RoutesContext);
  const [markets, setMarkets] = useState([]);

  useEffect(() => {
    setMarkets(routes.find((element) => element.url === path).subSection);
  }, [routes, path]);

  return (
    <SectionTemplate routes={markets}>
      <Switch>
        <Route exact path={`${path}`}>
          {path === `/products` && (
            <Redirect to={`${path}/hot-runner-system/tina-am`} />
          )}
          {path === `/markets` && <Redirect to={`${path}/automotive`} />}
          {path === `/technologies` && <Redirect to={`${path}/iso`} />}
        </Route>
        <Route exact path={`${path}/:slug`}>
          <MarketDetailsTemplate sectionEndpoint={path} />
        </Route>
        <Route path={`${path}/:slug/:slug`}>
          <MarketDetailsTemplate sectionEndpoint={path} />
        </Route>
      </Switch>
    </SectionTemplate>
  );
};

export default SectionView;
