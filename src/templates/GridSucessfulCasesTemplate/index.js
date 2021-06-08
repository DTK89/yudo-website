import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api, endpoints } from "api";
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

const PageButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;

  button {
    text-align: center;
    width: 20px;
    padding: 5px 5px;
    margin: 0 2px 0 2px;
    color: var(--clr-primary);
    border: 1px solid var(--clr-primary);
    border-radius: 2px;
    background-color: transparent;

    &:hover {
      color: var(--clr-secondary);
      background: var(--clr-primary);
    }
  }
`;

const GridSucessfulCasesTemplate = () => {
  const [marketCases, setMarketCases] = useState({});
  const { slug } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);
  const [mountedSection, setMountedSection] = useState(true);
  const [page, setPage] = useState(1);
  const [entriesNo, setEntriesNo] = useState(2);

  useEffect(() => {
    setMountedSection(true);
    api
      .get(
        `${endpoints.sucessfulCasesList}${slug}&_start=${
          (page - 1) * 10
        }&_limit=10`
      )
      .then(({ data }) => {
        if (mountedSection) {
          setMarketCases(data);
        }
      })
      .catch((error) => {
        console.error(error);
      });

    return () => setMountedSection(false);
  }, [slug, page]);

  useEffect(() => {
    setMountedSection(true);
    api
      .get(`${endpoints.sucessfulCasesPages}${slug}`)
      .then(({ data }) => {
        if (mountedSection) {
          setEntriesNo(data);
        }
      })
      .catch((error) => {
        console.error(error);
      });

    return () => setMountedSection(false);
  }, [slug]);

  useEffect(() => {
    setPage(1);
  }, [slug]);

  const nextPage = (i) => {
    setPage(i + 1);
  };

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
            {marketCases.map(
              (
                { id, name, system, gatesNo, material, applicationPicture },
                index
              ) => (
                <div key={id}>
                  <FileCard onClick={() => openModal(index)}>
                    {applicationPicture[0]?.formats?.thumbnail?.url && (
                      <img
                        src={`http://yudopl.com/api${applicationPicture[0].formats.thumbnail.url}`}
                        alt=""
                      />
                    )}
                    <div>
                      {name && <h4>{name}</h4>}
                      {system && <p>System: {system}</p>}
                      {gatesNo && <p>Nr gniazd: {gatesNo}</p>}
                      {material && <p>Materiał: {material}</p>}
                    </div>
                  </FileCard>
                </div>
              )
            )}
          </>
        ) : (
          <h2>Brak przypadków dla tego sektora.</h2>
        )}
      </GridWrapper>
      <PageButtonsWrapper>
        {[...Array(Math.round(entriesNo / 10))].map((e, i) => (
          <button
            type="button"
            key={Math.random() * 100}
            /* fix issue with generate key */ onClick={() => nextPage(i)}
          >
            {i + 1}
          </button>
        ))}
      </PageButtonsWrapper>
    </>
  );
};

export default GridSucessfulCasesTemplate;
