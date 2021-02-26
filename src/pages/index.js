import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
              <h3>
                <Link to={node.fields.slug}>
                  {node.frontmatter.title}
                  {" "}
                  <span>
                    — {node.frontmatter.date}
                  </span>
                </Link>
              </h3>
            <p>{node.excerpt}</p>
          </div>
        ))}
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
