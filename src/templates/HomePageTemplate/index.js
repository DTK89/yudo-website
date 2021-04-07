import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api, endpoints } from "api";
// import MainLayoutTemplate from "templates/MainLayoutTemplate";
import styled from "styled-components";
import backgroundImg from "assets/backgrounds/HomePage.jpg";
import { FaPhoneSquareAlt, FaGlobeAmericas } from "react-icons/fa";
import yudoIcon from "assets/icons/YudoIcon.jpg";
import Slider from "components/Slider";
// import Slide from "components/Slide";
import slides from "components/Slider/data";
import Card from "components/Card";
import { productCards, casesCards, technologyCards } from "./data";

const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

const WelcomeSection = styled.div`
  width: 100%;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  clip-path: polygon(0 0%, 100% 0, 100% 100%, 0 90%);
`;

const WelcomeSectionContainer = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: 40px auto 80px;
  padding: 0 30px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 100%;

  @media screen and (min-width: 768px) {
    grid-template-columns: 30% 67%;
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: 22% 52% 22%;
  }
`;

const SliderWrapper = styled.div`
  background: white;
  border-radius: 3px;
  width: 100%;
  height: 100%;

  @media screen and (min-width: 1200px) {
    width: 100%;
    height: 350px;
  }
`;
const StyledSliderWrapper = styled(SliderWrapper)`
  display: none;
  background: white;
  border-radius: 3px;
  height: 100%;

  @media screen and (min-width: 768px) {
    display: block;
  }
  @media screen and (min-width: 1200px) {
    width: 100%;
    height: 350px;
  }
`;

const SiteDirectionsWrapper = styled.div`
  display: none;
  background: white;
  border-radius: 0.3rem;
  padding: 1rem 1.5rem;

  @media screen and (min-width: 1200px) {
    display: block;
    width: 100%;
  }
`;

const DirectionItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 2.1rem auto;
`;

const ItemIconWrapper = styled.div`
  width: 50%;
  font-size: 6.5rem;
  color: var(--clr-primary);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-height: 6.5rem;
  }
`;

const ItemButtonWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h5 {
    color: var(--clr-black);
    text-align: center;
    margin: 0.5rem auto 1rem;
  }

  /* button {
    font-size: 1.2rem;
    font-family: "Roboto";
    color: var(--clr-primary);
    background: var(--clr-secondary);
    border: 1px solid var(--clr-primary);
    border-radius: 0.3rem;
    padding: 0.2rem 0.5rem;
    max-width: 10rem;

    &:hover {
      background-color: var(--clr-primary);
      color: var(--clr-secondary);
    }
  } */
`;

const StyledLink = styled(Link)`
  font-size: 1.2rem;
  font-family: "Roboto";
  color: var(--clr-primary);
  background: var(--clr-secondary);
  border: 1px solid var(--clr-primary);
  border-radius: 0.3rem;
  padding: 0.2rem 0.5rem;
  max-width: 10rem;

  &:hover {
    background-color: var(--clr-primary);
    color: var(--clr-secondary);
  }
`;

const ProductsOverviewSection = styled.div`
  min-height: 400px;
  width: 100%;
  /* clip-path: polygon(0 0%, 100% 0, 100% 100%, 0 90%); */
  background: transparent;
`;

const TechnologyOverviewSection = styled.div`
  min-height: 400px;
  padding-top: 40px;
  padding-bottom: 20px;
  width: 100%;
  clip-path: polygon(0 10%, 100% 0, 100% 100%, 0 100%);
  background: var(--clr-primary);
  color: var(--clr-secondary);

  @media screen and (max-width: 992px) {
    clip-path: polygon(0 5%, 100% 0, 100% 100%, 0 100%);
  }
`;

const SectionContainer = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: 30px auto 30px;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-align: center;
    font-weight: 400;
  }
`;

const Underline = styled.div`
  width: 100%;
  height: 0.1rem;
  background: var(
    ${({ secondary }) => (secondary ? "--clr-secondary" : "--clr-trinary")}
  );
  margin: 2rem auto;
`;

const BoxWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  color: inherit;

  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`;

const HomePage = () => {
  const [sucessfulCases, setSucessfulCases] = useState([]);

  console.warn(sucessfulCases);

  useEffect(() => {
    api
      .get(endpoints.sucessfulCases)
      .then(({ data }) => {
        setSucessfulCases(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <PageWrapper>
        <WelcomeSection>
          <WelcomeSectionContainer>
            <StyledSliderWrapper>
              <Slider secondary slides={casesCards} />
            </StyledSliderWrapper>
            <SliderWrapper>
              <Slider slides={slides} />
            </SliderWrapper>
            <SiteDirectionsWrapper>
              <DirectionItem>
                <ItemIconWrapper>
                  <img src={yudoIcon} alt="" />
                </ItemIconWrapper>
                <ItemButtonWrapper>
                  <h5>O YUDO</h5>
                  <StyledLink to="/about/yudo-poland">Dowiedz się</StyledLink>
                </ItemButtonWrapper>
              </DirectionItem>
              <Underline />
              <DirectionItem>
                <ItemIconWrapper>
                  <FaPhoneSquareAlt />
                </ItemIconWrapper>
                <ItemButtonWrapper>
                  <h5>Kontakt</h5>
                  <StyledLink to="/contact/poland">Skontaktuj się</StyledLink>
                </ItemButtonWrapper>
              </DirectionItem>
              <Underline />
              <DirectionItem>
                <ItemIconWrapper>
                  <FaGlobeAmericas />
                </ItemIconWrapper>
                <ItemButtonWrapper>
                  <h5>YUDO na Świecie</h5>
                  <StyledLink to="/contact/worldwide">Zobacz</StyledLink>
                </ItemButtonWrapper>
              </DirectionItem>
            </SiteDirectionsWrapper>
          </WelcomeSectionContainer>
        </WelcomeSection>
        <ProductsOverviewSection>
          <SectionContainer>
            <h1>Produkty</h1>
            <Underline />
            <BoxWrapper>
              {productCards.map((product) => (
                <Card
                  key={product.id}
                  image={product.image}
                  title={product.title}
                  description={product.description}
                  btnLink={product.visitPath}
                />
              ))}
            </BoxWrapper>
          </SectionContainer>
        </ProductsOverviewSection>
        <TechnologyOverviewSection>
          <SectionContainer>
            <h1>Technologie</h1>
            <Underline secondary />
            <BoxWrapper>
              {technologyCards.map((product) => (
                <Card
                  key={product.id}
                  image={product.image}
                  title={product.title}
                  description={product.description}
                  btnLink={product.visitPath}
                />
              ))}
            </BoxWrapper>
          </SectionContainer>
        </TechnologyOverviewSection>
      </PageWrapper>
    </>
  );
};

export default HomePage;
