import React from 'react'
import { Container, Flex, Grid, Link } from 'theme-ui'
import { Link as GatsbyLink } from 'gatsby'

import Logo from './logo'
import Icon from './icon'

const Header = () => {
  return (
    <Container>
      <Flex as="header" variant="styles.header">
        <Logo />
        <Grid
          sx={{
            gridTemplateColumns: 'repeat(2, auto)',
            alignItems: 'center',
            '.nav': {
              variant: 'links.nav',
            },
          }}
        >
          <GatsbyLink to="/about" className="nav">
            About
          </GatsbyLink>
          <Link
            href="https://github.com/PaulieScanlon/paulie-api"
            target="_blank"
            rel="noopener"
            sx={{
              color: 'text',
            }}
          >
            <Icon path="github" sx={{ width: '24px', height: '24px' }} />
          </Link>
        </Grid>
      </Flex>
    </Container>
  )
}

export default Header
