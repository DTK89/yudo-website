import React, { useState, useEffect, useContext } from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import { api, endpoints } from "api";
import MarkdownParser from "components/MarkdownParser";
import SectionTemplate from "templates/SectionTemplate";
import { RoutesContext } from "providers/RoutesProvider";
// import { sections } from "./data";

const About = () => {
  const [aboutInfo, setAboutInfo] = useState([]);
  const [aboutInfoGlobal, setAboutInfoGlobal] = useState([]);
  const { navRoutes } = useContext(RoutesContext);
  const { path } = useRouteMatch();

  useEffect(() => {
    api
      .get(endpoints.about)
      .then(({ data }) => {
        setAboutInfo(data);
        // console.log(data);
      })
      .catch((error) => {
        console.error(error);
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
        console.error(error);
      });
  }, []);

  // useEffect(() => {
  //   setContacts(navRoutes.find((element) => element.url === path).subSection);
  // }, [navRoutes, path]);

  return (
    <SectionTemplate
      // backgroundImg={
      //   navRoutes.find((element) => element.url === path).background.url
      // } // rebuild to display backgrounds.
      routes={navRoutes.find((element) => element.url === path).subSection}
    >
      <Switch>
        <Route exact path={`${path}`}>
          {/* <Redirect to={`${path}/${sections[0].urlSlug}`} /> */}
          <Redirect to={`${path}/yudo-global`} />
        </Route>
        {/* <Route path={`${path}/${sections[0].urlSlug}`}> */}
        <Route path={`${path}/yudo-global`}>
          <div>
            <h2>{aboutInfoGlobal.title}</h2>
            {aboutInfoGlobal.description ? (
              <MarkdownParser>{aboutInfoGlobal.description}</MarkdownParser>
            ) : (
              <h1>Loading</h1>
            )}
          </div>
        </Route>
        {/* <Route path={`${path}/${sections[1].urlSlug}`}> */}
        <Route path={`${path}/yudo-poland`}>
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
