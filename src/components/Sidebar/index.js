import React, { useEffect, useState } from "react";
// import { IoIosArrowDown } from "react-icons/io";
import { NavLink, useRouteMatch } from "react-router-dom";
import SidebarDropdownList from "components/SidebarDropdown";
import styled from "styled-components";

const Placeholder = styled.span`
  width: 24%;
  height: 100%;
  margin-right: 3rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const StyledList = styled.ul`
  background: transparent;
  width: 24%;
  margin-right: 3rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const SectionLink = styled(NavLink)`
  color: #555;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  padding: 1.1rem 1.5rem;
  margin-bottom: 2rem;
  background: hsla(0, 0%, 100%, 0.8);
  border: 1px solid white;
  display: block;
  transition: all 0.5s ease 0s;

  &:hover {
    background: hsla(0, 0%, 100%, 0.5);
  }

  &:active {
    background: hsla(0, 0%, 100%, 0.5);
    box-shadow: inset 0 5px 0 0 #fff;
  }
`;

const SubSectionLink = styled(SectionLink)`
  font-weight: 500;
`;

const Sidebar = ({ routes }) => {
  const [routeTree, setRouteTree] = useState([]);
  const { url } = useRouteMatch();
  const [activeDropdown, setDropdown] = useState(0);

  useEffect(() => setRouteTree(routes), [routes]);

  return (
    <>
      {routeTree?.length ? (
        <StyledList>
          {routeTree.map((sectionLink, index) => (
            <li key={sectionLink.slug}>
              {sectionLink.product && sectionLink.product.length > 1 ? (
                <SidebarDropdownList
                  labelTitle={sectionLink.label}
                  index={index}
                  active={activeDropdown}
                  setActive={setDropdown}
                >
                  <ul>
                    {sectionLink.product.map((subSectionLink) => (
                      <li key={subSectionLink.slug}>
                        <SubSectionLink
                          activeClassName="active"
                          to={`${url}/${sectionLink.slug}/${subSectionLink.slug}`}
                        >
                          {subSectionLink.label}
                        </SubSectionLink>
                      </li>
                    ))}
                  </ul>
                </SidebarDropdownList>
              ) : (
                <SectionLink
                  activeClassName="active"
                  onClick={() => setDropdown(index)}
                  to={`${url}/${sectionLink.slug}`}
                >
                  {sectionLink.label}
                </SectionLink>
              )}
            </li>
          ))}
        </StyledList>
      ) : (
        <Placeholder />
      )}
    </>
  );
};

export default Sidebar;
