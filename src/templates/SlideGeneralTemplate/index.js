import React from "react";
import { Link } from "react-router-dom";
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
      /* max-height: 300px; */
      max-height: 300px;
      /* max-width: 300px; */
      max-width: 250px;
      /* min-width: 220px; */
      min-width: 150px;
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
    font-size: 25px;
    color: var(--clr-black);
    margin: 3px auto;
    text-align: center;
  }

  h3 {
    /* font-size: 25px; */
    color: var(--clr-black);
    margin: 5px auto 10px;
    text-align: center;
  }

  p {
    color: var(--clr-black);
    font-size: 1.4rem;
    text-align: center;
    /* padding: 20px 0 20px 0; */
  }

  @media screen and (min-width: 768px) {
    padding: 5px;
    height: 100%;
    justify-content: space-around;
    align-content: space-around;
    align-items: unset;
  }
`;

const StyledButton = styled(Link)`
  align-self: center;
  font-size: 1.5rem;
  font-family: "Roboto";
  color: var(--clr-primary);
  background: var(--clr-secondary);
  border: 1px solid var(--clr-primary);
  border-radius: 0.3rem;
  padding: 0.4rem 1rem;
  max-width: 13rem;
  text-align: center;

  &:hover {
    background-color: var(--clr-primary);
    color: var(--clr-secondary);
  }
`;

const Slide = ({ content }) => {
  const {
    image,
    title,
    title2,
    description,
    description2,
    description3,
    visitPath,
  } = content;
  return (
    <Wrapper>
      <SlideContainer>
        <Content>
          <div>
            <h2>{title}</h2>
            <h3>{title2}</h3>
          </div>
          <p>{description}</p>
          {description2 && <p>{description2}</p>}
          {description3 && <p>{description3}</p>}
          <StyledButton to={visitPath}>Dowiedz się wiecej</StyledButton>
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
    visitPath: PropTypes.string,
  }).isRequired,
};

export default Slide;
