import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoIcon from "assets/logo/logo-white.png";
import LogoGroupIcon from "assets/logo/logo-group-white.png";
// import routesDefault from "routes/routes.json";

const Wrapper = styled.div`
  height: 30rem;
  width: 100%;
  padding: 2rem;
  margin: auto;
  background-color: var(--clr-primary);
  display: flex;
  justify-content: center;
  border-top: 1px solid white;
`;

const FooterContainer = styled.div`
  max-width: var(--max-width);
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 992px) {
    flex-direction: row;
  }
`;

const SecPartListWrapper = styled.ul`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 992px) {
    flex-direction: row;
  }
`;

const StyledLink = styled(Link)`
  padding: 0 1.5rem;
  color: var(--clr-white);
`;

const SyledSubList = styled.ul`
  @media screen and (max-width: 1090px) {
    a {
      font-size: 1.1rem;
    }
  }

  @media screen and (max-width: 992px) {
    li {
      display: none;
    }
  }
`;

const StyledSubLink = styled(Link)`
  font-size: 1.3rem;
  font-weight: 300;
  padding: 0 1.5rem;
  color: var(--clr-white);
`;

const LogoColumnContainer = styled.div`
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 992px) {
    padding: 0 1.5rem 0 0;
    align-self: flex-start;
  }
`;

const StyledLogo = styled.a`
  height: auto;
  padding: 0.5rem 1.5rem;
  cursor: pointer;

  img {
    max-height: 5rem;
    max-width: 18rem;
  }
`;

const Footer = ({ routes }) => (
  <Wrapper>
    <FooterContainer>
      <LinksContainer>
        <ul>
          <li>
            <StyledLink to={routes[0].url}>{routes[0].label}</StyledLink>
          </li>
          <li>
            <StyledLink to={routes[5].url}>{routes[5].label}</StyledLink>
          </li>
          <li>
            <StyledLink to={routes[6].url}>{routes[6].label}</StyledLink>
          </li>
          <li>
            <StyledLink to={routes[1].url}>{routes[1].label}</StyledLink>
            <SyledSubList>
              {routes[1].subSection.length !== 0
                ? routes[1].subSection.map((section) => (
                    <li key={section.id}>
                      <StyledSubLink to={`${routes[1].url}/${section.slug}`}>
                        {section.label}
                      </StyledSubLink>
                    </li>
                  ))
                : null}
            </SyledSubList>
          </li>
        </ul>
        <SecPartListWrapper>
          <li>
            <StyledLink to={routes[2].url}>{routes[2].label}</StyledLink>
            <SyledSubList>
              {routes[2].subSection.length !== 0 &&
                routes[2].subSection.map((section) => (
                  <li key={section.id}>
                    <StyledSubLink to={`${routes[2].url}/${section.slug}`}>
                      {section.label}
                    </StyledSubLink>
                  </li>
                ))}
            </SyledSubList>
          </li>
          <li>
            <StyledLink to={routes[3].url}>{routes[3].label}</StyledLink>
            <SyledSubList>
              {routes[3].subSection.length !== 0 &&
                routes[3].subSection.map((section) => (
                  <li key={section.id}>
                    <StyledSubLink to={`${routes[3].url}/${section.slug}`}>
                      {section.label}
                    </StyledSubLink>
                  </li>
                ))}
            </SyledSubList>
          </li>
          <li>
            <StyledLink to={routes[4].url}>{routes[4].label}</StyledLink>
            <SyledSubList>
              {routes[4].subSection.length !== 0 &&
                routes[4].subSection.map((section) => (
                  <li key={section.id}>
                    <StyledSubLink to={`${routes[4].url}/${section.slug}`}>
                      {section.label}
                    </StyledSubLink>
                  </li>
                ))}
            </SyledSubList>
          </li>
          {/* <li>
              <StyledLink to={routes[5].url}>
                {routes[5].label}
              </StyledLink>
              <SyledSubList>
                {routes[5].subSection.map((section) => (
                  <li key={section.id}>
                    <StyledSubLink to={section.url}>
                      {section.label}
                    </StyledSubLink>
                  </li>
                ))}
              </SyledSubList>
            </li> */}
        </SecPartListWrapper>
      </LinksContainer>
      <LogoColumnContainer>
        <StyledLogo>
          <img src={LogoIcon} alt="YUDO Logo" />
        </StyledLogo>
        <StyledLogo>
          <img src={LogoGroupIcon} alt="YUDO Group Logo" />
        </StyledLogo>
      </LogoColumnContainer>
    </FooterContainer>
  </Wrapper>
);

export default Footer;
