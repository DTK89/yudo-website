import React from "react";
import MainLayoutTemplate from "templates/MainLayoutTemplate";
import styled from "styled-components";
// import backgroundImg from "assets/backgrounds/technology.jpg";

const PageWrapper = styled.div`
  width: 100%;
  height: 120vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
`;

const HomePage = () => (
  <MainLayoutTemplate>
    <PageWrapper>
      <h1>TEST | STYLE TEST | TEST</h1>
      <p>Domo argato mr Roboto</p>
    </PageWrapper>
  </MainLayoutTemplate>
);

export default HomePage;
