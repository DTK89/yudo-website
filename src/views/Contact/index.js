import React from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
// import { api, endpoints } from "api";
import SectionTemplate from "templates/SectionTemplate";
import ContactTemplate from "templates/ContactTemplate";
import WorldwideContactTemplate from "templates/ContactWorldwideTemplate";
// import styled from "styled-components";
import { sections, background } from "./data";

const Contact = () => {
  const { path } = useRouteMatch();

  return (
    <SectionTemplate backgroundImg={background} routes={sections}>
      <Switch>
        <Route exact path={`${path}`}>
          <Redirect to={`${path}/${sections[0].slug}`} />
        </Route>
        <Route exact path={`${path}/${sections[0].slug}`}>
          <ContactTemplate title={sections[0].label} />
        </Route>
        <Route path={`${path}/${sections[1].slug}`}>
          <WorldwideContactTemplate title={sections[1].label} />
        </Route>
      </Switch>
    </SectionTemplate>
  );
};

export default Contact;
