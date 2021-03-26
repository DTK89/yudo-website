import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import { api, endpoints } from "api";
import SectionTemplate from "templates/SectionTemplate";
import styled from "styled-components";
import { background } from "./data";

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
`;

const GridWrapper = styled.div`
  padding: 10px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  /* grid-template-rows: 12px 12px 12px; */
`;

const FileCard = styled.div`
  border: 1px solid var(--clr-trinary);
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 150px;
  h4 {
    margin: 10px 0 10px 0;
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

const Downloads = () => {
  const { path } = useRouteMatch();
  const [downloads, setDownloads] = useState([]);
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    api
      .get(endpoints.downloads)
      .then(({ data }) => {
        setRoutes(data.fileSection);
        setDownloads(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <SectionTemplate backgroundImg={background} routes={routes}>
      <Switch>
        <Route exact path={`${path}`}>
          {/* <h2>Test</h2> */}
          <Redirect to="/download/market-catalogues" />
        </Route>
        {downloads?.fileSection?.length ? (
          <>
            {downloads.fileSection.map((fileGroup) => (
              <Route key={fileGroup.id} path={`${path}/${fileGroup.slug}`}>
                <TitleWrapper>
                  <h2>Pobierz</h2>
                  <h4>{fileGroup.label}</h4>
                </TitleWrapper>
                <GridWrapper>
                  {fileGroup.fileDownloads.map((file) => (
                    <FileCard key={file.id}>
                      <h4>{file.label}</h4>
                      <p>Rozmiar: {file.file[0].size} kB</p>
                      <a
                        href={`http://localhost:1337${file.file[0].url}`}
                        download
                        through
                        target="_blank"
                        rel="noreferrer"
                      >
                        Plik
                      </a>
                    </FileCard>
                  ))}
                </GridWrapper>
              </Route>
            ))}
          </>
        ) : (
          <h2>loading</h2>
        )}
      </Switch>
    </SectionTemplate>
  );
};

export default Downloads;
