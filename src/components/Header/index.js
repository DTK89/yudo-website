import React from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrLanguage } from "react-icons/gr";
import LogoIcon from "assets/logo-red.png";

const Wrapper = styled.div`
  z-index: 200;
  position: sticky;
  width: 100vw;
  top: 0;
  background: var(--clr-secondary);

  @media screen and (min-width: 992px) {
    box-shadow: var(--light-shadow);
  }
`;

const HeadContainer = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: var(--transition);
  @media screen and (min-width: 992px) {
    padding: 0 2rem;
  }
`;

const Logo = styled.a`
  height: auto;
  /* max-height: 5rem; */
  /* max-width: 15rem; */
  padding: 0.5rem 1.5rem;
  /* color: var(--clr-trinary); */
  cursor: pointer;

  img {
    max-height: 5rem;
    max-width: 15rem;
  }
`;

const LanguageButton = styled.button`
  display: none;

  @media screen and (min-width: 768px) {
    color: var(--clr-trinary);
    font-size: 2rem;
    margin: 1rem 1.5rem 0.8rem 0;
    background: transparent;
    border-color: transparent;
    transition: var(--transition);
    display: flex;
    align-items: center;
    outline: none;
    cursor: pointer;
    /* transform: rotate(${({ isOpen }) => (isOpen ? "180deg" : "0deg")}); */
  }
`;

const MobileButton = styled.button`
  color: var(--clr-black);
  font-size: 2.5rem;
  margin: 1rem 1.5rem 0.8rem 0;
  padding: 4px 10px;
  background: transparent;
  border: 1px solid var(--clr-black);
  border-radius: var(--radius);
  transition: var(--transition);
  display: flex;
  align-items: center;
  outline: none;
  cursor: pointer;
  /* transform: rotate(${({ isOpen }) => (isOpen ? "180deg" : "0deg")}); */

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Header = () => (
  <Wrapper>
    <HeadContainer>
      <Logo>
        <img src={LogoIcon} alt="" />{" "}
      </Logo>
      <LanguageButton>
        <GrLanguage />
      </LanguageButton>
      <MobileButton>
        <GiHamburgerMenu />
      </MobileButton>
    </HeadContainer>
  </Wrapper>
);

export default Header;
