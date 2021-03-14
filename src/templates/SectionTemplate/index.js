import React from "react";
import MainLayoutTemplate from "templates/MainLayoutTemplate";
import styled from "styled-components";
import Sidebar from "components/Sidebar";
// import backgroundImg from "assets/backgrounds/technology.jpg";

const PageWrapper = styled.div`
  width: 100%;
  max-width: var(--max-width);
  height: 120vh;
  margin: auto;
  padding: 40px 15px 20px 15px;
  display: flex;
  flex-direction: row;
  background-color: transparent;
`;

const SectionContent = styled.div`
  background: white;
  width: 76%;

  @media screen and (max-width: 768px) {
    margin: 0;
    width: 100%;
  }
`;

const SectionTemplate = () => (
  <MainLayoutTemplate>
    <PageWrapper>
      <Sidebar />
      <SectionContent>
        <h1>TEST | STYLE TEST | TEST</h1>
        <p>Domo argato mr Roboto</p>
      </SectionContent>
    </PageWrapper>
  </MainLayoutTemplate>
);

export default SectionTemplate;
