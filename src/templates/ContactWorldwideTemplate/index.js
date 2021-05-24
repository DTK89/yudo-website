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
    margin: 0 0 3px 0;

    color: #777;
  }
`;

// const ContactSubContainer = styled.div`
//   min-height: 180px;
//   display: flex;

//   div {
//     min-width: 30%;
//   }

//   @media screen and (max-width: 992px) {
//     flex-direction: column;
//   }
// `;

const ContactGrid = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;

  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const BranchContactCard = styled.div`
  margin: 0 10px 0 10px;

  h3 {
    margin: 0.5rem 0 1rem 0;
    min-height: 26px;
    width: 100%;
    display: block;
    @media screen and (max-width: 992px) {
      min-height: 1px;
    }
  }

  h4 {
    margin: 0 0 0.8rem 0;
    display: block;
  }

  p {
    font-size: 1.4rem;
    margin: 2px 0;
  }
`;

const WorldwideContactTemplate = ({ title }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    api
      .get(endpoints.contactGlobal)
      .then(({ data }) => {
        setContacts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const { koreaHq, europeHq, chinaHq, branchContact, label } = contacts;

  return (
    <>
      <TitleWrapper>
        <h2>Kontakt</h2>
        <h4>{title}</h4>
      </TitleWrapper>
      <Map />
      <ContactGrid>
        <div>
          {koreaHq ? (
            <BranchContactCard>
              <h3>{koreaHq.country}</h3>
              <h4>{koreaHq.branchName}</h4>
              <p>{koreaHq.adress1}</p>
              <p>{koreaHq.adress2}</p>
              <p>{koreaHq.adress3}</p>
              {koreaHq.phone === null || koreaHq.phone === "" ? null : (
                <p>Telefon: {koreaHq.phone}</p>
              )}
              {koreaHq.fax === null || koreaHq.fax === "" ? null : (
                <p>Fax: {koreaHq.fax}</p>
              )}
              {koreaHq.email === null || koreaHq.email === "" ? null : (
                <p>e-mail: {koreaHq.email}</p>
              )}
            </BranchContactCard>
          ) : (
            <h3>Loading...</h3>
          )}
        </div>
        {europeHq?.length ? (
          europeHq.map(
            ({
              id,
              country,
              branchName,
              adress1,
              adress2,
              adress3,
              phone,
              fax,
              email,
            }) => (
              <div>
                <BranchContactCard key={id}>
                  <h3>{country}</h3>
                  <h4>{branchName}</h4>
                  <p>{adress1}</p>
                  <p>{adress2}</p>
                  <p>{adress3}</p>
                  {phone === null || phone === "" ? null : (
                    <p>Telefon: {phone}</p>
                  )}
                  {fax === null || fax === "" ? null : <p>Fax: {fax}</p>}
                  {email === null || email === "" ? null : (
                    <p>e-mail: {email}</p>
                  )}
                </BranchContactCard>
              </div>
            )
          )
        ) : (
          <h5>Loading...</h5>
        )}
      </ContactGrid>
      <ContactGrid>
        {chinaHq?.length ? (
          chinaHq.map(
            ({
              id,
              country,
              branchName,
              adress1,
              adress2,
              adress3,
              phone,
              fax,
              email,
            }) => (
              <BranchContactCard key={id}>
                <h3>{country}</h3>
                <h4>{branchName}</h4>
                <p>{adress1}</p>
                <p>{adress2}</p>
                <p>{adress3}</p>
                {phone === null || phone === "" ? null : (
                  <p>Telefon: {phone}</p>
                )}
                {fax === null || fax === "" ? null : <p>Fax: {fax}</p>}
                {email === null || email === "" ? null : <p>e-mail: {email}</p>}
              </BranchContactCard>
            )
          )
        ) : (
          <h5>Loading...</h5>
        )}
      </ContactGrid>
      <ContactGrid>
        {branchContact?.length ? (
          branchContact.map(
            ({
              id,
              country,
              branchName,
              adress1,
              adress2,
              adress3,
              phone,
              fax,
              email,
            }) => (
              <BranchContactCard key={id}>
                <h3>{country}</h3>
                <h4>{branchName}</h4>
                <p>{adress1}</p>
                <p>{adress2}</p>
                <p>{adress3}</p>
                {phone === null || phone === "" ? null : (
                  <p>Telefon: {phone}</p>
                )}
                {fax === null || fax === "" ? null : <p>Fax: {fax}</p>}
                {email === null || email === "" ? null : <p>e-mail: {email}</p>}
              </BranchContactCard>
            )
          )
        ) : (
          <h5>Loading...</h5>
        )}
      </ContactGrid>
      <h1>{label}</h1>
    </>
  );
};

export default WorldwideContactTemplate;
