import React, { useState, useContext, useEffect } from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
// import { api, endpoints } from "api";
import SectionTemplate from "templates/SectionTemplate";
import ContactTemplate from "templates/ContactTemplate";
import WorldwideContactTemplate from "templates/ContactWorldwideTemplate";
import { RoutesContext } from "providers/RoutesProvider";
// import styled from "styled-components";
// import { sections, background } from "./data";

const Contact = () => {
  const { path } = useRouteMatch();
  const { routes } = useContext(RoutesContext);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setContacts(routes.find((element) => element.url === path).subSection);
  }, [routes, path]);

  return (
    <SectionTemplate routes={contacts}>
      <Switch>
        <Route exact path={`${path}`}>
          <Redirect to={`${path}/poland`} />
        </Route>
        <Route exact path={`${path}/poland`}>
          <ContactTemplate />
        </Route>
        <Route path={`${path}/worldwide`}>
          <WorldwideContactTemplate />
        </Route>
      </Switch>
    </SectionTemplate>
  );
};

export default Contact;
