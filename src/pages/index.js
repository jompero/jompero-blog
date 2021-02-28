import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"

const StyledLink = styled(Link)`
  background: none;
`

const BlogTitle = styled.h3`

`

const BlogDate = styled.span`
  font-size: smaller;
  color: #737373;
  
  @media (min-width: 768px) {
    float: right;
  }

  @media (max-width: 768px) {
    display: block;
    font-size: 50%;
  }
`

const Excerpt = styled.p`
  
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <h2>Posts</h2>
      {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
              <BlogTitle>
                <StyledLink to={node.fields.slug}>
                  {node.frontmatter.title}
                </StyledLink>
                <BlogDate>
                    {node.frontmatter.date}
                  </BlogDate>
              </BlogTitle>
            <Excerpt>{node.excerpt}</Excerpt>
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
