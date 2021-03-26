import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import { api, endpoints } from "api";
import MarkdownParser from "components/MarkdownParser";
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
        <Route exact path={`${path}`}>
          <Redirect to={`${path}/${sections[0].slug}`} />
        </Route>
        <Route path={`${path}/${sections[0].slug}`}>
          {/* <AboutTemplate /> */}
          <div>
            <h2>{aboutInfoGlobal.title}</h2>
            {aboutInfoGlobal.description ? (
              <MarkdownParser>{aboutInfoGlobal.description}</MarkdownParser>
            ) : (
              <h1>Loading</h1>
            )}
          </div>
        </Route>
        <Route path={`${path}/${sections[1].slug}`}>
          {/* <AboutTemplate /> */}
          <div>
            <h2>{aboutInfo.title}</h2>
            {aboutInfoGlobal.description ? (
              <MarkdownParser>{aboutInfo.description}</MarkdownParser>
            ) : (
              <h1>Loading</h1>
            )}
          </div>
        </Route>
      </Switch>
    </SectionTemplate>
  );
};

export default About;
