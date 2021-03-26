import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
// import routes from "routes/routes.json";

// const Wrapper = styled.div``;

const StyledList = styled.ul`
  background: transparent;
  width: 24%;
  margin-right: 3rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const StyledLink = styled(NavLink)`
  color: #555;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
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

const Sidebar = ({ routes }) => {
  const { url } = useRouteMatch();
  return (
    <StyledList>
      {routes.map(({ id, label, slug }) => (
        <li key={id}>
          <StyledLink activeClassName="active" to={`${url}/${slug}`}>
            {label}
          </StyledLink>
        </li>
      ))}
    </StyledList>
  );
};

export default Sidebar;
