import React, { useState, useEffect } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { api, endpoints } from "api";
import SectionTemplate from "templates/SectionTemplate";
import { sections, background } from "./data";

const About = () => {
  const [aboutInfo, setAboutInfo] = useState([]);
  const [aboutInfoGlobal, setAboutInfoGlobal] = useState([]);
  const { path } = useRouteMatch();

  useEffect(() => {
    api
      .get(endpoints.about)
      .then(({ data }) => {
        setAboutInfo(data);
        // console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    api
      .get(endpoints.aboutGlobal)
      .then(({ data }) => {
        setAboutInfoGlobal(data);
        // console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <SectionTemplate backgroundImg={background} routes={sections}>
      <Switch>
        <Route exact path={path}>
          {/* <AboutTemplate /> */}
          <div>
            <h2>{aboutInfo.title}</h2>
            <p>{aboutInfo.description}</p>
          </div>
        </Route>
        <Route path={`${path}/global`}>
          {/* <AboutTemplate /> */}
          <div>
            <h2>{aboutInfoGlobal.title}</h2>
            <p>{aboutInfoGlobal.description}</p>
          </div>
        </Route>
      </Switch>
    </SectionTemplate>
  );
};

export default About;
