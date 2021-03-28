import React from "react";
import PropTypes from "prop-types";
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
    margin-left: 0;
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
      margin-left: 50px;
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

const ProductDetailsTemplate = ({ product }) => (
  <ContentWrapper>
    <TitleWrapper>
      <span />
      <h2>{product.label}</h2>
    </TitleWrapper>
    <ProductDescription>
      {product.description ? (
        <MarkdownParser>{product.description}</MarkdownParser>
      ) : null}
    </ProductDescription>
  </ContentWrapper>
);

ProductDetailsTemplate.propTypes = {
  product: PropTypes.shape({
    label: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default ProductDetailsTemplate;
