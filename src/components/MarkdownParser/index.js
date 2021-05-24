import React from "react";
import styled from "styled-components";
import marked from "marked";

const StyledRichText = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */

  p {
    /* align-self: flex-start; */
    text-align: left;
  }

  img {
    display: block;
    margin: 0 auto;
  }

  ul {
    margin-left: 20px;
    list-style-type: disc;
    font-weight: 300;
  }

  &.img {
    align-self: center;
  }

  iframe {
    min-height: 200px;
    max-width: 560px;
    height: 100%;
    width: 100%;
    align-self: center;
    margin: 10px 0;

    @media screen and (min-width: 425px) {
      min-height: 315px;
    }
  }
`;

const MarkdownParser = ({ children }) => (
  <StyledRichText
    id="preview"
    dangerouslySetInnerHTML={{
      __html: marked(children),
    }}
  />
);

export default MarkdownParser;
