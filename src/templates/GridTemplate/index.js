import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
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

  button {
    text-align: center;
    width: 100%;
    padding: 5px 15px;
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

const GridTemplate = ({ fileLists }) => {
  const { slug } = useParams();
  const [downloadList, setDownloadList] = useState([]);

  const Download = (fileName, fileExt, fileData) => {
    axios({
      url: `http://yudopl.com/api/${fileData}`,
      method: "GET",
      responseType: "blob", // important
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${fileName}${fileExt}`); // or any other extension
      document.body.appendChild(link);
      link.click();
    });
  };

  useEffect(() => {
    setDownloadList(fileLists.find((element) => element.slug === slug));
  }, [slug, fileLists]);

  return (
    <>
      {downloadList?.fileDownloads?.length ? (
        <>
          <TitleWrapper>
            <h2>Pobierz</h2>
            <h4>{downloadList.label}</h4>
          </TitleWrapper>
          <GridWrapper>
            {downloadList.fileDownloads.map((file) => (
              <FileCard key={file.id}>
                <h4>{file.label}</h4>
                <p>Rozmiar: {file.file[0].size} kB</p>
                <button
                  onClick={() =>
                    Download(file.label, file.file[0].ext, file.file[0].url)
                  }
                  type="button"
                  target="_blank"
                  rel="noreferrer"
                >
                  Plik
                </button>
              </FileCard>
            ))}
          </GridWrapper>
        </>
      ) : (
        <h2>loading</h2>
      )}
    </>
  );
};

export default GridTemplate;
