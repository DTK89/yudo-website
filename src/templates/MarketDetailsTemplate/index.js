import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "api";
// import MarkdownParser from "components/MarkdownParser";
import styled from "styled-components";

const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 20px 0 30px 0;
  align-items: center;

  span {
    background: var(--clr-primary);
    height: 40px;
    width: 20px;
    margin-right: 8px;
  }

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
`;

const MarketDescription = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    max-height: 250px;
    object-fit: contain;
  }

  p {
    margin-left: 25px;
    text-align: justify;
  }

  ul {
    margin-left: 50px;
  }

  @media screen and (min-width: 425px) {
    img {
      justify-self: center;
      width: 70%;
    }
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: 1.5fr 1fr;
    grid-template-rows: minmax(200px, auto);
    grid-gap: 20px;

    img {
      justify-self: center;
      width: 100%;
      min-width: 300px;
    }
  }
`;

const MarketDetailsTemplate = ({ sectionEndpoint }) => {
  const [marketDescription, setMarketDescription] = useState();
  const { slug } = useParams();

  useEffect(() => {
    api
      .get(`${sectionEndpoint}?slug=${slug}`)
      .then(({ data }) => {
        setMarketDescription(data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [slug]);

  return (
    <>
      {marketDescription ? (
        <>
          <TitleWrapper>
            <span />
            <h2>{marketDescription.label}</h2>
          </TitleWrapper>
          <MarketDescription>
            {/* <MarkdownParser>{marketDescription.description}</MarkdownParser> */}
            {/* <img src={`${marketDescription.marketPicture[0].url}`} alt="" /> */}
          </MarketDescription>
          {/* {marketDescription.applications.map((application) => (
            <div key={application.id}>
              <TitleWrapper>
                <span />
                <h2>{application.name}</h2>
              </TitleWrapper>
              <MarketDescription>
                <MarkdownParser>{application.description}</MarkdownParser>
                {application?.picture[0]?.url && (
                  <img src={`${application.picture[0].url}`} alt="" />
                )}
              </MarketDescription>
            </div>
          ))} */}
        </>
      ) : (
        <h2>loading...</h2>
      )}
    </>
  );
};

export default MarketDetailsTemplate;
