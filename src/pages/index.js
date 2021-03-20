import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PostThumbnail from "../components/postThumbnail"


const IndexPage = ({ data }) => {

  const posts = data.allMarkdownRemark.edges.map(({ node }) => node.frontmatter.status !== "draft" && <PostThumbnail key={node.id} node={node}/>);
  console.log(`POSTS: ${posts}`)
  const noPosts = <p>Looks like there are no posts published at the moment.</p> 

  return (
    <Layout>
      <h2>Posts</h2>
      {posts}
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
            status
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
