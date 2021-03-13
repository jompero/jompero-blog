import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PostThumbnail from "../components/postThumbnail"


const IndexPage = ({ data }) => {
  return (
    <Layout>
      <h2>Posts</h2>
      {data.allMarkdownRemark.edges.map(({ node }) => node.frontmatter.date && <PostThumbnail key={node.id} node={node}/>)}
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
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`

export default IndexPage
