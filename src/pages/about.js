import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const AboutPage = () => {
    return (
        <Layout>
            <h1>About</h1>
            <p>
              Hello! My name is Dani Jompero. I am a passionate game designer with 8 years of game industry experience in game design, quality assurance and production.
              <br />
              <br />
              My career started with helping game studios like Ubisoft, EA, Sony and Microsoft localize their game projects. I have since moved to Ubisoft RedLynx mobile quality assurance team and later production. I am now a game designer in the same team.
              <br />
              <br />
              With the variety of experience in game industry, I have picked up the soft skills to work in a big and small teams as a member as well as a leader. I also have insight of the ins and out of game development from prototyping to development as well as dealing with outsourced teams and IP holders.
              <br />
              <br />            
              My journey is not over yet and I am learning and improving my skills everyday. I let this blog be my journal in the world game design. See you there!
            </p>
            <h3>Contact me</h3>
            <p>[dani.jompero@jompero.com](mailto:dani.jompero@gmail.com)</p>
        </Layout>
    )
} 

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default AboutPage