import React from "react";
import { useStaticQuery, Link, graphql } from "gatsby";
import styled, { createGlobalStyle } from "styled-components";
import "@fontsource/open-sans";

// Background: #FFFFB4
// Accent: #40EEFF
// Accent 2: #FFB6B9

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 24px;
  }

  body {
    color: #444444;
    background-color: #FFFFB4;
    padding: 2rem;
    font-family: Open Sans, Roboto, sans-serif, serif;
  }

  a {
    color: #444444;
    font-weight: bold;
    vertical-align: 5%;
    background-color: #FFB6B9;
    border-radius: 0.25rem;
    padding: 0.1rem 0.2rem 0.1rem 0.2rem;
  }

  code {
    color: white;
    font-size: inherit;
    vertical-align: 0.6rem;
    background-color: #444444;
    padding: 0.3rem 0.6rem 0.3rem 0.6rem;
  }

  p > code,
  li > code,
  dd > code,
  td > code {
    vertical-align: 0.1rem;
    word-wrap: break-word;
    box-decoration-break: clone;
    padding: 0.1rem 0.2rem 0.1rem 0.2rem;
    border-radius: .25rem;
  }

  pre code {
    display: block;
    white-space: pre;
    -webkit-overflow-scrolling: touch;
    overflow-x: scroll;
    max-width: 100%;
    min-width: 100px;
    padding: 0.3rem 0.6rem 0.3rem 0.6rem;
  }

  blockquote {
    background: #ededa7;
    border-left: 10px solid #dada9a;
    margin: 1.5em 10px;
    padding: 0.5em 10px;
    
  }

  blockquote:before {
    content: open-quote;
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em;
  }
  
  blockquote p {
    display: inline;
  }

  hr.solid {
    border: 0;
    height: 1px;
    background: #444444;
  }
`;

const StyledLink = styled(Link)`
  background: none;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return (
    <main>
      <GlobalStyle />
      <title>{data.site.siteMetadata.title}</title>
      <header>
        <StyledLink to="/about/">About</StyledLink>
      </header>
      <h1>
        <StyledLink to="/">Dani Jompero</StyledLink>
        <br />
        <span style={{fontSize: "60%", verticalAlign: "top"}}>Game Designer</span>
      </h1>
      <hr class="solid"></hr>
      {children}
    </main>
  );
};

export default Layout;
