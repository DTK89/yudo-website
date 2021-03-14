import React from "react";
import GlobalTemplate from "templates/GlobalStyleTemplate";
// import HomePage from "templates/HomePageTemplate";
import SectionTemplate from "templates/SectionTemplate";

function Root() {
  return (
    <>
      <GlobalTemplate>
        <SectionTemplate />
      </GlobalTemplate>
    </>
  );
}

export default Root;
