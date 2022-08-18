import React from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { Link } from 'gatsby'

import { stripLeadingSlash } from '../utils/strip-leading-slash'

import Icon from '../components/icon'
import EndpointMessage from '../components/endpoint-message'
import UsageDetails from '../components/usage-details'
import ExpandableContent from '../components/expandable-content'

const components = {
  a: ({ href, children }) => {
    // If it's an external url, use <a> and target _blank
    if (href.match(/^(http|https|mailto):/g)) {
      return (
        <a href={href} target="_blank" rel="noreferrer">
          {children}
        </a>
      )
    }
    // if it's a jumplink #, use Link which will fires an anchorScroll in gatsby-browser
    if (href.match(/#/gi)) {
      return <a href={stripLeadingSlash(href)}>{children}</a>
    }
    // if it's anything else, use Link
    return <Link to={href}>{children}</Link>
  },
  Icon,
  EndpointMessage,
  UsageDetails,
  ExpandableContent,
}

const MdxPage = ({
  data: {
    mdx: {
      frontmatter: { embeddedImagesLocal },
      body,
    },
  },
}) => {
  return (
    <MDXProvider components={components}>
      <MDXRenderer localImages={embeddedImagesLocal}>{body}</MDXRenderer>
    </MDXProvider>
  )
}

export const pageQuery = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        embeddedImagesLocal {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
      body
    }
  }
`

export default MdxPage
