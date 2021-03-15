import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 10px 5% 40px;
`;

const SlideContainer = styled.div`
  display: grid;

  img {
    justify-self: center;
    max-height: 190px;
    min-width: 220px;
    object-fit: cover;
    overflow: hidden;
    @media screen and (min-width: 768px) {
      max-height: 300px;
      max-width: 300px;
      min-width: 220px;
    }
  }

  @media screen and (min-width: 768px) {
    max-width: var(--max-width);
    margin: 0 auto;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 300px;
    align-items: center;
    padding: 0 2vw;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  h2 {
    color: var(--clr-black);
    margin: 10px auto;
  }

  p {
    color: var(--clr-black);
    font-size: 1.4rem;
    padding: 20px 0 20px 0;
  }

  button {
    align-self: center;
    font-size: 1.5rem;
    font-family: "Roboto";
    color: var(--clr-primary);
    background: var(--clr-secondary);
    border: 1px solid var(--clr-primary);
    border-radius: 0.3rem;
    padding: 0.4rem 1rem;
    max-width: 10rem;

    &:hover {
      background-color: var(--clr-primary);
      color: var(--clr-secondary);
    }
  }

  @media screen and (min-width: 768px) {
    padding: 5px;
    height: 100%;
    justify-content: space-around;
    align-content: space-around;
    align-items: unset;
  }
`;

const Slide = ({ content }) => {
  const { image, title, description, btnLink } = content;
  return (
    <Wrapper>
      <SlideContainer>
        <Content>
          <h2>{title}</h2>
          <p>{description}</p>
          <button type="button" onClick={btnLink}>
            Dowiedz się wiecej
          </button>
        </Content>
        <img src={image} alt="" />
      </SlideContainer>
    </Wrapper>
  );
};

Slide.propTypes = {
  content: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    btnLink: PropTypes.string,
  }).isRequired,
};

export default Slide;
