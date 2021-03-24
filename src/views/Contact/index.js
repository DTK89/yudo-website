import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
// import { api, endpoints } from "api";
import SectionTemplate from "templates/SectionTemplate";
import ContactTemplate from "templates/ContactTemplate";
import WorldwideContactTemplate from "templates/WorldwideContactTemplate";
// import styled from "styled-components";
import { sections, background } from "./data";

const Contact = () => {
  const { path } = useRouteMatch();
  // const [contacts, setContacts] = useState([]);

  // useEffect(() => {
  //   api
  //     .get(endpoints.contact)
  //     .then(({ data }) => {
  //       setContacts(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  // const {
  //   companyName,
  //   street,
  //   buildingNo,
  //   localNo,
  //   postalCode,
  //   city,
  //   country,
  //   nip,
  // } = contacts;
  return (
    <SectionTemplate backgroundImg={background} routes={sections}>
      <Switch>
        <Route exact path={path}>
          <ContactTemplate title={sections[0].label} />
        </Route>
        <Route path={`${path}/global`}>
          <WorldwideContactTemplate />
        </Route>
      </Switch>
    </SectionTemplate>
  );
};

export default Contact;
