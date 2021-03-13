import * as React from "react";
import { Link } from "gatsby";

import styled from "styled-components";

const StyledLink = styled(Link)`
  background: none;
`;

const BlogTitle = styled.h3``;

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
`;

const Excerpt = styled.p``;

const PostThumbnail = ({ node }) => {
  return (
    <div>
      <BlogTitle>
        <StyledLink to={node.fields.slug}>{node.frontmatter.title}</StyledLink>
        <BlogDate>{node.frontmatter.date}</BlogDate>
      </BlogTitle>
      <Excerpt>{node.excerpt}</Excerpt>
    </div>
  );
};

export default PostThumbnail;
