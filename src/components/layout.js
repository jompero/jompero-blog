import React from "react";
import { useStaticQuery, Link, graphql } from "gatsby";
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    color: "#232129",
    padding: "96px",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
  }

  a {
    color: "#8954A8",
    fontWeight: "bold",
    fontSize: "16px",
    verticalAlign: "5%",
    margin: "1em",
  }
`;

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
        <Link to="/about/">About</Link>
      </header>
      <h1>
        Dani Jompero
        <br />
        <span>Game Designer</span>
      </h1>
      {children}
    </main>
  );
};

export default Layout;
