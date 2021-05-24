import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "api";
import Modal from "components/Modal";
import styled from "styled-components";

const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 20px 0 30px 0;
  /* align-items: center; */

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

const GridWrapper = styled.div`
  padding: 10px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const FileCard = styled.div`
  border: 1px solid var(--clr-trinary);
  padding: 10px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr;
  cursor: pointer;

  @media screen and (min-width: 500px) {
    grid-template-columns: 1fr 1.5fr;
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr;
  }

  @media screen and (min-width: 1100px) {
    grid-template-columns: 1fr 1.5fr;
  }

  img {
    /* min-height: 100px; */
    /* max-width: 150px; */
    width: 100%;
    justify-self: center;
    align-self: center;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h4 {
    margin: 10px 0 10px 0;
    justify-self: center;
  }

  a {
    text-align: center;
    width: 100%;
    padding: 5px 15px;
    color: var(--clr-primary);
    border: 1px solid var(--clr-primary);
    border-radius: 2px;

    &:hover {
      color: var(--clr-secondary);
      background: var(--clr-primary);
    }
  }
`;

const GridSucessfulCasesTemplate = ({ sectionEndpoint }) => {
  const [marketCases, setMarketCases] = useState();
  const { slug } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);

  useEffect(() => {
    api
      .get(`${sectionEndpoint}?market=${slug}`)
      .then(({ data }) => {
        setMarketCases(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [sectionEndpoint, slug]);

  const openModal = (e) => {
    setCardIndex(e);
    setShowModal((prev) => !prev);
  };

  return (
    <>
      {marketCases && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          postContent={marketCases[cardIndex]}
        />
      )}
      <TitleWrapper>
        {/* <span /> */}
        <h2>Sucessful Case</h2>
        <h4>{slug}</h4>
      </TitleWrapper>
      <GridWrapper>
        {marketCases?.length ? (
          <>
            {marketCases.map((specificCase, index) => (
              <div key={specificCase.id}>
                <FileCard onClick={() => openModal(index)}>
                  {specificCase?.applicationPicture[0]?.formats?.thumbnail
                    ?.url && (
                    <img
                      src={`${specificCase.applicationPicture[0].formats.thumbnail.url}`}
                      alt=""
                    />
                  )}
                  <div>
                    <h4>{specificCase.name}</h4>
                    <p>System: {specificCase.system}</p>
                    <p>Nr gniazd: {specificCase.gatesNo}</p>
                    <p>Materiał: {specificCase.material}</p>
                  </div>
                </FileCard>
              </div>
            ))}
          </>
        ) : (
          <h2>Chwilowy brak danych dotyczących tego sektora.</h2>
        )}
      </GridWrapper>
    </>
  );
};

export default GridSucessfulCasesTemplate;
