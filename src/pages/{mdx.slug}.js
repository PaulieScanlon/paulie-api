import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { Link as GatsbyLink } from 'gatsby'
import Prism from '@theme-ui/prism'

import { Link } from 'theme-ui'
import * as themeUiComponents from 'theme-ui'

import Icon from '../components/icon'
import EndpointMessage from '../components/endpoint-message'
import UsageDetails from '../components/usage-details'

const components = {
  a: ({ href, children }) => {
    // If it's an external url use Link and target _blank
    if (href.match(/^(http|https):/g)) {
      return (
        <Link href={href} target="_blank" rel="noopener">
          {children}
        </Link>
      )
    }
    // if it's a # use Link which will fires an anchorScroll in gatsby-browser
    if (href.match(/#/gi)) {
      return <Link href={href}>{children}</Link>
    }
    // if it's anything else use GatsbyLink
    return (
      <Link as={GatsbyLink} to={href}>
        {children}
      </Link>
    )
  },
  pre: ({ children }) => <Fragment>{children}</Fragment>,
  code: Prism,
  ...themeUiComponents,
  Icon,
  EndpointMessage,
  UsageDetails,
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
  query MDXQuery($id: String!) {
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
