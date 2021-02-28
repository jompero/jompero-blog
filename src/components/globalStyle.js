import { createGlobalStyle } from "styled-components";

// Background: #FFFFB4
// Accent: #40EEFF
// Accent 2: #FFB6B9

const GlobalStyle = createGlobalStyle`
  html {
    font-size:calc(16px + 1vw);

  }

  body {
    color: #444444;
    background-color: #FFFFB4;
    padding: 2rem;
    font-family: Open Sans, Roboto, sans-serif, serif;
    max-width: 900px;

    @media (max-width: 768px) {
        padding: 1.5rem;
      }
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

export default GlobalStyle;