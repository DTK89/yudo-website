import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled(Link)`
  height: 100%;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease-out;
  cursor: pointer;

  img {
    width: 100%;
    object-fit: contain;
  }

  p {
    text-align: center;
  }

  &:hover {
    transition: transform 0.3s ease-out;
    transform: scale(1.1);
    box-shadow: 0 0 3px var(--clr-trinary);
  }
`;

const Card = ({ image, title, description, btnLink }) => (
  <Wrapper to={btnLink}>
    <img src={image} alt="test" />
    <h4>{title}</h4>
    <p>{description}</p>
  </Wrapper>
);

Card.propTypes = {
  // id: PropTypes.number.isRequired,
  image: PropTypes.isRequired,
  title: PropTypes.isRequired,
  description: PropTypes.isRequired,
  btnLink: PropTypes.isRequired,
};

export default Card;
