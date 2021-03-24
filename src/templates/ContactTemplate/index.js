import React, { useState, useEffect } from "react";
import { api, endpoints } from "api";
import styled from "styled-components";

const ContactSubContainer = styled.div`
  /* min-height: 300px; */
`;

const ContactGrid = styled.div`
  display: flex;
  @media screen and (max-width: 425px) {
    flex-direction: column;
  }
`;

const ContactCard = styled.div`
  margin: 10px;
  h4 {
    margin: 0 0 0.8rem 0;
  }

  p {
    font-size: 1.4rem;
    margin: 2px 0;
  }
`;

const ContactTemplate = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    api
      .get(endpoints.contact)
      .then(({ data }) => {
        setContacts(data);
      })
      .catch((error) => {
        console.log(error);
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
  } = contacts;

  return (
    <>
      <ContactSubContainer>
        <h3>Adres</h3>
        <ContactCard>
          <h4>{companyName}</h4>
          <p>
            ul.{street} {buildingNo}, {localNo ? `lokal ${localNo}` : ""}
          </p>
          <p>
            {postalCode}, {city}, {country}
          </p>
          <p>NIP: {nip}</p>
        </ContactCard>
      </ContactSubContainer>
      <ContactSubContainer>
        <h3>Zapytania ofertowe</h3>
        <ContactGrid>
          {contacts?.inquiries?.length ? (
            contacts.inquiries.map(
              ({ id, name, position, mobilePhone, email }) => (
                <ContactCard key={id}>
                  <h4>{name}</h4>
                  <p>({position})</p>
                  <p>Telefon: {mobilePhone}</p>
                  <p>E-mail: {email}</p>
                </ContactCard>
              )
            )
          ) : (
            <h5>Loading...</h5>
          )}
        </ContactGrid>
      </ContactSubContainer>
      <ContactSubContainer>
        <h3>Serwis</h3>
        <ContactGrid>
          {contacts?.service?.length ? (
            contacts.service.map(
              ({ id, name, position, mobilePhone, email }) => (
                <ContactCard key={id}>
                  <h4>{name}</h4>
                  <p>({position})</p>
                  <p>Telefon: {mobilePhone}</p>
                  <p>E-mail: {email}</p>
                </ContactCard>
              )
            )
          ) : (
            <h5>Loading...</h5>
          )}
        </ContactGrid>
      </ContactSubContainer>
      <ContactSubContainer>
        <h3>Projekt</h3>
        <ContactGrid>
          {contacts?.projects?.length ? (
            contacts.projects.map(
              ({ id, name, position, mobilePhone, email }) => (
                <ContactCard key={id}>
                  <h4>{name}</h4>
                  <p>({position})</p>
                  <p>Telefon: {mobilePhone}</p>
                  <p>E-mail: {email}</p>
                </ContactCard>
              )
            )
          ) : (
            <h5>Loading...</h5>
          )}
        </ContactGrid>
      </ContactSubContainer>
      <ContactSubContainer>
        <h3>Administracja</h3>
        <ContactGrid>
          {contacts?.administration?.length ? (
            contacts.administration.map(
              ({ id, name, position, mobilePhone, email }) => (
                <ContactCard key={id}>
                  <h4>{name}</h4>
                  <p>({position})</p>
                  <p>Telefon: {mobilePhone}</p>
                  <p>E-mail: {email}</p>
                </ContactCard>
              )
            )
          ) : (
            <h5>Loading...</h5>
          )}
        </ContactGrid>
      </ContactSubContainer>
    </>
  );
};

export default ContactTemplate;
