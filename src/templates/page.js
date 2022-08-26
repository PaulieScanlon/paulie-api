import React, { Fragment } from 'react';
import { graphql } from 'gatsby';

import MdxParser from '../components/mdx-parser';
import Seo from '../components/seo';

const Page = ({
  data: {
    mdx: {
      fields: { slug },
      frontmatter: { title, images },
      tableOfContents: { items: toc },
      body
    }
  }
}) => {
  return (
    <Fragment>
      <small className="mb-4 leading-6 font-semibold capitalize text-primary">{title}</small>
      <MdxParser images={images}>{body}</MdxParser>
    </Fragment>
  );
};

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      fields {
        slug
      }
      excerpt
      frontmatter {
        title
        images {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
      tableOfContents
      body
    }
  }
`;

export default Page;

export const Head = ({
  data: {
    mdx: {
      fields: { slug },
      excerpt,
      frontmatter: { title }
    }
  }
}) => {
  return <Seo title={title} description={excerpt} slug={slug} />;
};
