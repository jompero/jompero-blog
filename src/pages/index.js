import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const IndexPage = ({ data }) => {
  return (
    <Layout>

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

export default IndexPage
