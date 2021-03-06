import React, { useRef, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrLanguage } from "react-icons/gr";
import LogoIcon from "assets/logo/logo-red.png";
import routes from "routes/routes.json";
import MobileDropdownMenu from "components/MobileDropdownMenu";

const Wrapper = styled.div`
  z-index: 200;
  height: 6rem;
  width: 100%;
  background: var(--clr-secondary);
  border: 1px solid var(--clr-secondary);
  box-shadow: var(--light-shadow);
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 800px) {
    height: 10rem;
    align-items: center;
  }
`;

const NavBarContainer = styled.div`
  max-width: var(--max-width);
  z-index: 200;
  height: 100%;
  width: 100%;
`;

const HeadContainer = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: var(--transition);

  @media screen and (min-width: 800px) {
    padding: 0 2rem;
    height: 50%;
  }
`;

const Logo = styled(Link)`
  height: auto;
  padding: 0.5rem 1.5rem;
  cursor: pointer;

  img {
    margin-top: 1rem;
    max-height: 5rem;
    max-width: 15rem;
  }
`;

const LanguageButton = styled.button`
  display: none;

  @media screen and (min-width: 800px) {
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

  @media screen and (min-width: 800px) {
    display: none;
  }
`;

const MenuContainer = styled.ul`
  height: 50%;
  width: 100%;
  max-width: var(--max-width);
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const StyledLink = styled(NavLink)`
  padding: 1.5rem;
  background: transparent;
  display: block;

  &:hover {
    color: var(--clr-primary);
  }

  &.active {
    box-shadow: inset 0 -2px 0 0 var(--clr-primary);
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const handleOpen = () => {
    if (window.innerWidth > 800) {
      setIsOpen(false);
    } else {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (isOpen) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [isOpen]);

  return (
    <>
      <Wrapper>
        <NavBarContainer>
          <HeadContainer>
            <Logo to="/">
              <img src={LogoIcon} alt="" />{" "}
            </Logo>
            <LanguageButton>
              <GrLanguage />
            </LanguageButton>
            <MobileButton onClick={handleOpen}>
              <GiHamburgerMenu />
            </MobileButton>
          </HeadContainer>
          <MenuContainer>
            {/* <ul> */}
            {routes.map((route) => (
              <li key={route.id}>
                <StyledLink activeClassName="active" to={route.url}>
                  {route.name}
                </StyledLink>
              </li>
            ))}
            {/* </ul> */}
          </MenuContainer>
        </NavBarContainer>
        <MobileDropdownMenu
          routeLinks={routes}
          toggleDropdown={handleOpen}
          isOpen={isOpen}
          linksRef={linksRef}
          linksContainerRef={linksContainerRef}
        />
      </Wrapper>
    </>
  );
};

export default Header;
