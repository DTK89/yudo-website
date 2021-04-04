import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api, endpoints } from "api";
import MarkdownParser from "components/MarkdownParser";
import styled from "styled-components";

const ContentWrapper = styled.div``;

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

  @media screen and (max-width: 425px) {
    span {
      display: none;
    }
  }
`;

const ProductDescription = styled.div`
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
      margin-left: 25px;
      text-align: justify;
    }

    ul {
      /* margin-left: 50px; */
    }
  }

  @media screen and (min-width: 992px) {
    img {
      justify-self: center;
      width: 100%;
      min-width: 300px;
    }
  }
`;

const ProductDetailsTemplate = () => {
  const [pageContent, setPageContent] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    api
      .get(`${endpoints.technologies}${slug}`)
      .then(({ data }) => {
        setPageContent(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [slug]);

  return (
    <ContentWrapper>
      <TitleWrapper>
        <span />
        {pageContent.length ? <h2>{pageContent[0].label}</h2> : null}
      </TitleWrapper>
      <ProductDescription>
        {pageContent[0]?.paragraph?.length ? (
          <>
            {pageContent[0].paragraph.map((p) => (
              <MarkdownParser key={p.id}>{p.description}</MarkdownParser>
            ))}
          </>
        ) : null}
      </ProductDescription>
    </ContentWrapper>
  );
};

export default ProductDetailsTemplate;
