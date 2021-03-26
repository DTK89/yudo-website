import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import { api, endpoints } from "api";
// import MarkdownParser from "components/MarkdownParser";
import SectionTemplate from "templates/SectionTemplate";
import Modal from "components/Modal";
import styled from "styled-components";
import { background } from "./data";

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

// const MarketDescription = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   grid-gap: 10px;
//   justify-content: center;
//   align-items: center;

//   img {
//     width: 100%;
//     max-height: 250px;
//     object-fit: contain;
//   }

//   p {
//     margin-left: 25px;
//     text-align: justify;
//   }

//   ul {
//     margin-left: 50px;
//   }

//   @media screen and (min-width: 425px) {
//     img {
//       justify-self: center;
//       width: 70%;
//     }
//   }

//   @media screen and (min-width: 992px) {
//     grid-template-columns: 1.5fr 1fr;
//     grid-template-rows: minmax(200px, auto);
//     grid-gap: 20px;

//     img {
//       justify-self: center;
//       width: 100%;
//       min-width: 300px;
//     }
//   }
// `;

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

const SucessfulCases = () => {
  const { path } = useRouteMatch();
  const [marketCases, setMarketCases] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);

  useEffect(() => {
    api
      .get(endpoints.markets)
      .then(({ data }) => {
        setMarketCases(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const openModal = (e) => {
    setCardIndex(e);
    setShowModal((prev) => !prev);
  };

  return (
    <SectionTemplate backgroundImg={background} routes={marketCases}>
      <Switch>
        <Route exact path={`${path}`}>
          <Redirect to="/sucessful-case/automotive" />
        </Route>
        {marketCases?.length ? (
          <>
            {marketCases.map((listCases) => (
              <Route key={listCases.id} path={`${path}/${listCases.slug}`}>
                <Modal
                  showModal={showModal}
                  setShowModal={setShowModal}
                  postContent={listCases.sucessfulCases[cardIndex]}
                />
                <TitleWrapper>
                  {/* <span /> */}
                  <h2>Sucessful Case</h2>
                  <h4>{listCases.label}</h4>
                </TitleWrapper>
                <GridWrapper>
                  {listCases.sucessfulCases.map((specificCase, index) => (
                    <FileCard
                      key={specificCase.id}
                      onClick={() => openModal(index)}
                    >
                      {specificCase?.applicationPicture[0]?.formats?.thumbnail
                        ?.url && (
                        <img
                          src={`http://localhost:1337${specificCase.applicationPicture[0].formats.thumbnail.url}`}
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
                  ))}
                </GridWrapper>
              </Route>
            ))}
          </>
        ) : (
          <h2>Chwilowy brak danych dotyczących tego sektora.</h2>
        )}
      </Switch>
    </SectionTemplate>
  );
};

export default SucessfulCases;
