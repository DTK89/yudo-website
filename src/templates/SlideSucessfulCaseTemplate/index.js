import React from "react";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 10px 5% 40px;
`;

const SlideContainer = styled.div`
  display: grid;

  h2 {
    color: var(--clr-black);
    margin: 10px auto;
    font-size: 22px;
    text-align: center;
    @media screen and (min-width: 768px) {
      font-size: 18px;
    }
  }

  img {
    justify-self: center;
    max-height: 190px;
    min-width: 220px;
    object-fit: cover;
    overflow: hidden;
    @media screen and (min-width: 768px) {
      /* max-height: 300px; */
      max-height: 150px;
      /* max-width: 300px; */
      max-width: 150px;
      /* min-width: 220px; */
      min-width: 150px;
    }
  }

  @media screen and (min-width: 768px) {
    max-width: var(--max-width);
    margin: 0 auto;
    grid-template-columns: 1fr;
    grid-gap: 5px;
    /* grid-template-rows: 300px; */
    align-items: center;
    justify-content: center;
    padding: 2vh 2vw;
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
    font-size: 12px;
  }

  p {
    color: var(--clr-black);
    font-size: 1.4rem;
    margin: 4px 0 4px 15px;
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

// const StyledButton = styled(Link)`
//   align-self: center;
//   font-size: 1.5rem;
//   font-family: "Roboto";
//   color: var(--clr-primary);
//   background: var(--clr-secondary);
//   border: 1px solid var(--clr-primary);
//   border-radius: 0.3rem;
//   padding: 0.4rem 1rem;
//   max-width: 13rem;
//   text-align: center;

//   &:hover {
//     background-color: var(--clr-primary);
//     color: var(--clr-secondary);
//   }
// `;

const Slide = ({ content }) => {
  const {
    applicationPicture,
    name,
    description,
    system,
    gatesNo,
    material,
    weight,
  } = content;
  return (
    <Wrapper>
      <SlideContainer>
        <h2>{name}</h2>
        <img src={applicationPicture[0].url} alt="" />
        <Content>
          <p>{description}</p>
          {system && <p>System: {system}</p>}
          {gatesNo && <p>Nr gniazd: {gatesNo}</p>}
          {material && <p>Materiał: {material}</p>}
          {weight && <p>Waga detalu: {weight}</p>}
          {/* <StyledButton to={visitPath}>wiecej...</StyledButton> */}
        </Content>
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
