import React from "react";
import styled from "styled-components";
import LogoIcon from "assets/logo-white.png";
import LogoGroupIcon from "assets/logo-group-white.png";
import Routes from "routes/routes.json";

const Wrapper = styled.div`
  height: 30rem;
  width: 100%;
  padding: 2rem;
  margin: auto;
  background-color: var(--clr-primary);
  display: flex;
  justify-content: center;
`;

const FooterContainer = styled.div`
  max-width: var(--max-width);
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    flex-direction: row;
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

const StyledLink = styled.a`
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

const StyledSubLink = styled.a`
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

const Footer = () => (
  <Wrapper>
    <FooterContainer>
      <LinksContainer>
        <ul>
          <li>
            <StyledLink href={Routes[0].url}>{Routes[0].name}</StyledLink>
          </li>
          <li>
            <StyledLink href={Routes[1].url}>{Routes[1].name}</StyledLink>
          </li>
          <li>
            <StyledLink href={Routes[2].url}>{Routes[2].name}</StyledLink>
          </li>
          <li>
            <StyledLink href={Routes[3].url}>{Routes[3].name}</StyledLink>
            <SyledSubList>
              {Routes[3].section.map((section) => (
                <li>
                  <StyledSubLink href={section.url}>
                    {section.name}
                  </StyledSubLink>
                </li>
              ))}
            </SyledSubList>
          </li>
        </ul>
        <SecPartListWrapper>
          <li>
            <StyledLink href={Routes[4].url}>{Routes[4].name}</StyledLink>
            <SyledSubList>
              {Routes[4].section.map((section) => (
                <li>
                  <StyledSubLink href={section.url}>
                    {section.name}
                  </StyledSubLink>
                </li>
              ))}
            </SyledSubList>
          </li>
          <li>
            <StyledLink href={Routes[5].url}>{Routes[5].name}</StyledLink>
            <SyledSubList>
              {Routes[5].section.map((section) => (
                <li>
                  <StyledSubLink href={section.url}>
                    {section.name}
                  </StyledSubLink>
                </li>
              ))}
            </SyledSubList>
          </li>
          <li>
            <StyledLink href={Routes[6].url}>{Routes[6].name}</StyledLink>
            <SyledSubList>
              {Routes[6].section.map((section) => (
                <li>
                  <StyledSubLink href={section.url}>
                    {section.name}
                  </StyledSubLink>
                </li>
              ))}
            </SyledSubList>
          </li>
          <li>
            <StyledLink href={Routes[7].url}>{Routes[7].name}</StyledLink>
            <SyledSubList>
              {Routes[7].section.map((section) => (
                <li>
                  <StyledSubLink href={section.url}>
                    {section.name}
                  </StyledSubLink>
                </li>
              ))}
            </SyledSubList>
          </li>
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
