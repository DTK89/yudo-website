import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "api";
import MarkdownParser from "components/MarkdownParser";
import styled from "styled-components";

const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 20px 0 10px 0;
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

const RichTextWithPhotoRight = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  img {
    width: 100%;
    max-height: 250px;
    object-fit: contain;
  }

  p {
    margin-left: 10px;
    margin-right: 10px;
    text-align: justify;
  }

  ul {
    text-align: left;
    margin-left: 30px;
    margin-right: 10px;
  }

  @media screen and (min-width: 425px) {
    img {
      justify-self: center;
      width: 70%;
    }
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 48.5% 48.5%;
    grid-template-rows: minmax(200px, auto);
    grid-gap: 20px;

    img {
      justify-self: center;
      width: 100%;
      /* min-width: 300px; */
    }
  }
`;

const SingleRichText = styled.div`
  img {
    width: 100%;
    /* max-height: 250px; */
    object-fit: contain;
  }

  p {
    margin-left: 0;
    text-align: justify;
  }

  ul {
    /* margin-left: 20px; */
  }

  @media screen and (min-width: 425px) {
    img {
      justify-self: center;
      width: 70%;
    }

    p {
      margin-left: 10px;
      margin-right: 10px;
      text-align: justify;
    }

    ul {
      text-align: left;
      margin-left: 30px;
      margin-right: 10px;
    }
  }

  @media screen and (min-width: 992px) {
    margin-top: 20px;
    img {
      justify-self: center;
      width: 100%;
      min-width: 300px;
    }
  }
`;

const MarketDetailsTemplate = ({ sectionEndpoint }) => {
  const [description, setDescription] = useState();
  const { slug } = useParams();

  useEffect(() => {
    api
      .get(`${sectionEndpoint}?slug=${slug}`)
      .then(({ data }) => {
        setDescription(data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [slug]);

  return (
    <>
      {description ? (
        <>
          {description?.paragraph?.length !== 0 ? (
            description.paragraph.map((paragraphSection) => (
              <div key={paragraphSection.id}>
                {paragraphSection?.descriptionPicture ? (
                  <>
                    {paragraphSection.displayTitle === true ? (
                      <TitleWrapper>
                        <span />
                        <h2>{paragraphSection.title}</h2>
                      </TitleWrapper>
                    ) : null}
                    <RichTextWithPhotoRight>
                      {paragraphSection.movePictureLeft === true ? (
                        <img
                          src={`http://yudopl.com/api${paragraphSection.descriptionPicture.url}`}
                          alt=""
                        />
                      ) : null}
                      <MarkdownParser>
                        {paragraphSection.description}
                      </MarkdownParser>
                      {paragraphSection.movePictureLeft === false ? (
                        <img
                          src={`http://yudopl.com/api${paragraphSection.descriptionPicture.url}`}
                          alt=""
                        />
                      ) : null}
                    </RichTextWithPhotoRight>
                  </>
                ) : (
                  <>
                    {paragraphSection.displayTitle === true ? (
                      <TitleWrapper>
                        <span />
                        <h2>{paragraphSection.title}</h2>
                      </TitleWrapper>
                    ) : null}
                    <SingleRichText>
                      <MarkdownParser>
                        {paragraphSection.description}
                      </MarkdownParser>
                    </SingleRichText>
                  </>
                )}
              </div>
            ))
          ) : (
            <h1>Loading...</h1>
          )}
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
};

export default MarketDetailsTemplate;
