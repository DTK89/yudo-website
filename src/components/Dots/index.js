import React, { memo } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  bottom: 23px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dot = styled.button`
  padding: 7px;
  margin-right: 8px;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  border: 1px solid var(--clr-grey-9);
  background: ${({ active }) =>
    active ? "var(--clr-primary)" : "var(--clr-secondary)"};
`;

const MemoDot = memo(Dot);

const Dots = ({ slides, activeSlide, slideHandle }) => (
  <Wrapper>
    {slides.map((slide, i) => (
      <MemoDot
        key={slide.id}
        active={activeSlide === i}
        onClick={() => slideHandle(i)}
      />
    ))}
  </Wrapper>
);

Dots.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeSlide: PropTypes.number.isRequired,
  slideHandle: PropTypes.func.isRequired,
};

export default Dots;
