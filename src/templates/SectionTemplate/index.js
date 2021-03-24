import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MainLayoutTemplate from "templates/MainLayoutTemplate";
import Sidebar from "components/Sidebar";

const PageWrapper = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: auto;
  padding: 40px 15px 20px 15px;
  display: flex;
  flex-direction: row;
  background-color: transparent;
`;

const SectionContent = styled.div`
  background: white;
  box-shadow: var(--light-shadow);
  border: 1px solid var(--clr-secondary);
  border-radius: 2px;
  width: 76%;
  padding: 10px 15px;

  @media screen and (max-width: 768px) {
    margin: 0;
    width: 100%;
  }
`;

const SectionTemplate = ({ children, backgroundImg, routes }) => (
  <MainLayoutTemplate backgroundImg={backgroundImg}>
    <PageWrapper>
      <Sidebar routes={routes} />
      <SectionContent>{children}</SectionContent>
    </PageWrapper>
  </MainLayoutTemplate>
);

SectionTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
  backgroundImg: PropTypes.string.isRequired,
};

export default SectionTemplate;
