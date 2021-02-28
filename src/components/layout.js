import React from "react";
import { useStaticQuery, Link, graphql } from "gatsby";
import styled, { createGlobalStyle } from "styled-components";
import "@fontsource/open-sans";
import GlobalStyle from "./globalStyle";

const StyledTitle = styled.h1`
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    line-height: 2.5rem;
  }
`

const StyledSubTitle = styled.span`
  font-size: 60%;
  font-weight: normal;
  vertical-align: top;
  
`

const StyledLink = styled(Link)`
  font-weight: normal;
  background: none;
  text-decoration: none;
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
      <StyledTitle>
        <StyledLink to="/">Dani Jompero</StyledLink>
        <br />
        <StyledSubTitle>Game Designer</StyledSubTitle>
      </StyledTitle>
      <hr class="solid"></hr>
      {children}
    </main>
  );
};

export default Layout;
