import React, { Fragment } from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Link as GatsbyLink } from 'gatsby'
import Prism from '@theme-ui/prism'

import { Box, Container, Link } from 'theme-ui'
import * as themeUiComponents from 'theme-ui'

import Seo from './seo'
import Header from './header'
import Icon from './icon'
import EndpointMessage from './endpoint-message'
import UsageDetails from './usage-details'

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
  // img: (props) => {
  //   console.log('props: ', props)
  //   // return null
  //   return <StaticImage src={props.src} alt={props.alt} />
  // },

  pre: ({ children }) => <Fragment>{children}</Fragment>,
  code: Prism,
  ...themeUiComponents,
  Icon,
  EndpointMessage,
  UsageDetails,
}

const PageElement = ({ children }) => {
  return (
    <Fragment>
      <Seo />
      <Header />
      <Box as="main" variant="styles.main">
        <Container>
          <MDXProvider components={components}>{children}</MDXProvider>
        </Container>
      </Box>
    </Fragment>
  )
}

export default PageElement
