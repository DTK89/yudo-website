import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import { api, endpoints } from "api";
import SectionTemplate from "templates/SectionTemplate";
import MarketDetailsTemplate from "templates/MarketDetailsTemplate";
// import styled from "styled-components";
import { background } from "./data";

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

const Markets = () => {
  const { path } = useRouteMatch();
  const [markets, setMarkets] = useState([]);

  useEffect(() => {
    api
      .get(endpoints.marketList)
      .then(({ data }) => {
        setMarkets(data.marketList);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <SectionTemplate backgroundImg={background} routes={markets}>
      <Switch>
        <Route exact path={`${path}`}>
          <Redirect to="/markets/automotive" />
        </Route>
        <Route exact path={`${path}/:slug`}>
          <MarketDetailsTemplate />
        </Route>
        <Route path={`${path}/:slug/:slug`}>
          <MarketDetailsTemplate />
        </Route>
      </Switch>
    </SectionTemplate>
  );
};

export default Markets;
