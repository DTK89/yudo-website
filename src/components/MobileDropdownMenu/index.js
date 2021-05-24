import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import SidebarDropdownList from "components/SubMenuDropdown";
import styled from "styled-components";

const activeClassName = "active";

const Wrapper = styled.div`
  z-index: 190;
  position: fixed;
  right: 0;
  transition: 0.7s ease-in-out;
  width: 100%;
  background-color: var(--clr-secondary);
  display: grid;
  align-items: center;
  top: 58px;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "58px" : "-100%")};

  @media screen and (min-width: 800px) {
    display: none;
  }
`;

const MenuContainer = styled.ul`
  overflow: hidden;
  list-style-type: none;
  transition: var(--transition);
`;

const SectionLink = styled(NavLink).attrs({ activeClassName })`
  color: #555;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  padding: 1.1rem 1.5rem;
  background: var(--clr-secondary);
  border: none;
  display: block;
  transition: all 0.5s ease 0s;

  &:hover {
    background: var(--clr-trinary);
  }

  &:active {
    background: var(--clr-trinary);
    box-shadow: inset 0 5px 0 0 #fff;
  }
`;

const SubSectionLink = styled(SectionLink)`
  font-weight: 700;
  background: transparent;
  padding: 0.6rem 1.2rem;
  border: none;

  &:hover {
    background: hsla(0, 0%, 100%, 0.5);
  }

  &:active {
    background: hsla(0, 0%, 100%, 0.5);
    box-shadow: inset 0 5px 0 0 #fff;
  }
`;

const SubSubSectionLink = styled(SubSectionLink)`
  font-weight: 500;
`;

const StyledDropdownList = styled(SidebarDropdownList)`
  margin-bottom: 0px;
`;

const DropdownMenu = ({
  routeLinks,
  isOpen,
  toggleDropdown,
  linksRef,
  linksContainerRef,
}) => {
  const [routeTree, setRouteTree] = useState(routeLinks);
  const [activeDropdown, setDropdown] = useState(0);

  useEffect(() => {
    if (routeLinks.length !== 0) {
      setRouteTree(routeLinks);
    }
  }, [routeLinks]);

  return (
    <Wrapper isOpen={isOpen} ref={linksContainerRef}>
      <MenuContainer ref={linksRef}>
        {routeTree?.length ? (
          <>
            {routeTree.map((section, index) => (
              <li key={section.url}>
                {section.subSection && section.subSection.length > 1 ? (
                  <StyledDropdownList
                    labelTitle={section.label}
                    index={index}
                    active={activeDropdown}
                    setActive={setDropdown}
                  >
                    <ul>
                      {section.subSection.map((subSectionLink) => (
                        <li key={subSectionLink.slug}>
                          <SubSectionLink
                            onClick={toggleDropdown}
                            to={`${section.url}/${subSectionLink.slug}`}
                          >
                            {subSectionLink.label}
                          </SubSectionLink>
                          {subSectionLink.singleSection &&
                            subSectionLink.singleSection.map(
                              (singleSection) => (
                                <SubSubSectionLink
                                  key={singleSection.slug}
                                  onClick={toggleDropdown}
                                  to={`${section.url}/${subSectionLink.slug}/${singleSection.slug}`}
                                >
                                  {singleSection.label}
                                </SubSubSectionLink>
                              )
                            )}
                        </li>
                      ))}
                    </ul>
                  </StyledDropdownList>
                ) : (
                  <SectionLink onClick={toggleDropdown} to={`${section.url}`}>
                    {section.label}
                  </SectionLink>
                )}
              </li>
            ))}
          </>
        ) : (
          <h1>Load</h1>
        )}
      </MenuContainer>
    </Wrapper>
  );
};

DropdownMenu.propTypes = {
  routeLinks: PropTypes.arrayOf(PropTypes.object).isRequired,
  isOpen: PropTypes.bool,
  toggleDropdown: PropTypes.func.isRequired,
};

DropdownMenu.defaultProps = {
  isOpen: false,
};

export default DropdownMenu;
