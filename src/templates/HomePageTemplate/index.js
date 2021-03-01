import React from "react";
import styled from "styled-components";
import NavigationTemplate from "templates/NavigationTemplate";

const PageWrapper = styled.div`
  margin-top: 100px;
  width: 100%;
  height: 120vh;
  background: var(--clr-trinary);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomePage = () => (
  <NavigationTemplate>
    <PageWrapper>
      <h1>TEST | STYLE TEST | TEST</h1>
      <p>Domo argato mr Roboto</p>
    </PageWrapper>
  </NavigationTemplate>
);

export default HomePage;
