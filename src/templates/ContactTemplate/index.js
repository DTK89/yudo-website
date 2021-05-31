import React, { useState, useEffect } from "react";
import { api, endpoints } from "api";
import Map from "components/Map";
import styled from "styled-components";

const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 20px 0 30px 0;

  h2 {
    margin: 0 7px 0 0;
    font-weight: 400;
    line-height: 1;
  }

  h4 {
    font-size: 19.5px;
    font-weight: 400;
    margin: 0 0 2px 0;

    color: #777;
  }

  h5 {
    font-size: 12px;
    font-weight: 400;
    margin: 5px 0 5px 0;

    color: #777;
  }
`;

const ContactSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */

  @media screen and (min-width: 992px) {
    flex-direction: row;
  }
`;

const ContactGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 425px) {
    flex-direction: column;
  }
`;

// const StyledMap = styled(Map)`
//   /* -ms-flex: 0 0 100%;
//   flex: 0 0 100%;
//   max-width: 100%; */

//   @media screen and (min-width: 768px) {
//     -ms-flex: 0 0 50%;
//     flex: 0 0 50%;
//     max-width: 50%;
//   }
// `;

const GlobalContactCard = styled.div`
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  min-width: 33%;
  margin: 10px;
  h4 {
    margin: 0 0 0.8rem 0;
    font-weight: 400;
    line-height: 1.1;
  }

  h5 {
    font-size: 16px;
    font-weight: 600;
    margin: 30px 0 5px 0;

    color: #777;
  }

  p {
    font-size: 1.4rem;
    font-family: "roboto";
    margin: 0;
    font-weight: 300;
    line-height: 1.42857;
  }

  @media screen and (min-width: 992px) {
    -ms-flex: 0 0 33%;
    flex: 0 0 33%;
    max-width: 33%;
  }
`;

const ContactCard = styled.div`
  display: block;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  margin: 10px;
  h4 {
    margin: 0 0 0.8rem 0;
    font-weight: 400;
    line-height: 1.1;
  }

  h5 {
    font-size: 16px;
    font-weight: 600;
    margin: 30px 0 5px 0;

    color: #777;
  }

  p {
    font-size: 1.4rem;
    font-family: "roboto";
    margin: 0;
    font-weight: 300;
    line-height: 1.42857;
  }

  @media screen and (min-width: 425px) {
    -ms-flex: 0 0 45%;
    flex: 0 0 45%;
    max-width: 45%;
  }

  @media screen and (min-width: 768px) {
    -ms-flex: 0 0 45%;
    flex: 0 0 45%;
    max-width: 45%;
  }

  @media screen and (min-width: 992px) {
    -ms-flex: 0 0 30%;
    flex: 0 0 30%;
    max-width: 30%;
  }
`;

const ContactTemplate = ({ title }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    api
      .get(endpoints.contact)
      .then(({ data }) => {
        setContacts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const {
    companyName,
    street,
    buildingNo,
    localNo,
    postalCode,
    city,
    country,
    nip,
    globalEmail,
  } = contacts;

  return (
    <>
      <TitleWrapper>
        <h2>Kontakt</h2>
        <h4>{title}</h4>
      </TitleWrapper>
      <h3>
        <ContactSectionWrapper>
          <>
            <GlobalContactCard>
              <h3>Adres</h3>
              <h4>{companyName}</h4>
              <p>
                ul.{street} {buildingNo} {localNo ? `,lokal ${localNo}` : ""}
              </p>
              <p>
                {postalCode}, {city}, {country}
              </p>
              <p>NIP: {nip}</p>
              {globalEmail && (
                <>
                  <h5>Wszystkie zapytania droga mailową proszę kierować na:</h5>
                  <p>e-mail: {globalEmail}</p>
                </>
              )}
            </GlobalContactCard>
          </>
          <Map />
        </ContactSectionWrapper>
      </h3>
      <>
        <h3>Zapytania ofertowe</h3>
        <ContactGrid>
          {contacts?.inquiries?.length ? (
            contacts.inquiries.map(
              ({ id, name, position, mobilePhone, email }) => (
                <ContactCard key={id}>
                  {name && <h4>{name}</h4>}
                  {position && <p>({position})</p>}
                  {mobilePhone && <p>Telefon: {mobilePhone}</p>}
                  {email && <p>e-mail: {email}</p>}
                </ContactCard>
              )
            )
          ) : (
            <h5>Loading...</h5>
          )}
        </ContactGrid>
      </>
      <>
        <h3>Serwis</h3>
        <ContactGrid>
          {contacts?.service?.length ? (
            contacts.service.map(
              ({ id, name, position, mobilePhone, email }) => (
                <ContactCard key={id}>
                  {name && <h4>{name}</h4>}
                  {position && <p>({position})</p>}
                  {mobilePhone && <p>Telefon: {mobilePhone}</p>}
                  {email && <p>e-mail: {email}</p>}
                </ContactCard>
              )
            )
          ) : (
            <h5>Loading...</h5>
          )}
        </ContactGrid>
      </>
      <>
        <h3>Projekt</h3>
        <ContactGrid>
          {contacts?.projects?.length ? (
            contacts.projects.map(
              ({ id, name, position, mobilePhone, email }) => (
                <ContactCard key={id}>
                  {name && <h4>{name}</h4>}
                  {position && <p>({position})</p>}
                  {mobilePhone && <p>Telefon: {mobilePhone}</p>}
                  {email && <p>e-mail: {email}</p>}
                </ContactCard>
              )
            )
          ) : (
            <h5>Loading...</h5>
          )}
        </ContactGrid>
      </>
      <>
        <h3>Administracja</h3>
        <ContactGrid>
          {contacts?.administration?.length ? (
            contacts.administration.map(
              ({ id, name, position, mobilePhone, email }) => (
                <ContactCard key={id}>
                  {name && <h4>{name}</h4>}
                  {position && <p>({position})</p>}
                  {mobilePhone && <p>Telefon: {mobilePhone}</p>}
                  {email && <p>e-mail: {email}</p>}
                </ContactCard>
              )
            )
          ) : (
            <h5>Loading...</h5>
          )}
        </ContactGrid>
      </>
    </>
  );
};

export default ContactTemplate;
