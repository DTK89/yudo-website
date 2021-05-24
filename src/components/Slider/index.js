import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Slide from "templates/SlideGeneralTemplate";
import Slide1 from "templates/SlideSucessfulCaseTemplate";
import Dots from "components/Dots";
import ArrowButton from "components/ArrowButton";

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const SlideContainer = styled.div`
  height: 100%;
  min-width: 100%;
  transform: translateX(${({ translate }) => translate});
  transition: 1s;
`;

const Slider = ({ slides, secondary }) => {
  const [slideState, setSlideState] = useState({
    activeSlide: 0,
    xTranslate: 0,
  });

  const { activeSlide, xTranslate } = slideState;

  const nextSlide = () =>
    setSlideState({
      activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1,
      xTranslate:
        xTranslate === -100 * (slides.length - 1) ? 0 : xTranslate - 100,
    });

  const prevSlide = () =>
    setSlideState({
      activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1,
      xTranslate:
        xTranslate === 0 ? -100 * (slides.length - 1) : xTranslate + 100,
    });

  const specificSlide = (i) =>
    setSlideState({
      activeSlide: i,
      xTranslate: xTranslate - 100 * (i - activeSlide),
    });

  useEffect(() => {
    const slider = setInterval(() => {
      nextSlide();
    }, 15000);
    return () => {
      clearInterval(slider);
    };
  }, [xTranslate]);

  return (
    <Wrapper>
      {slides.map((slide) => (
        <SlideContainer key={slide.id} translate={`${xTranslate}%`}>
          {!secondary && <Slide content={slide} />}
          {secondary && <Slide1 content={slide} />}
        </SlideContainer>
      ))}
      <ArrowButton left onClick={prevSlide} />
      <ArrowButton right onClick={nextSlide} />

      <Dots
        slides={slides}
        activeSlide={activeSlide}
        slideHandle={specificSlide}
      />
    </Wrapper>
  );
};

Slider.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Slider;
