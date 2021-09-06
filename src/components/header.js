import React from 'react'
import { Container, Flex, Grid, Link } from 'theme-ui'
import { Link as GatsbyLink } from 'gatsby'

import Logo from './logo'
import Icon from './icon'

const Header = () => {
  return (
    <Flex as="header" variant="styles.header">
      <Container>
        <Flex as="nav" variant="styles.nav">
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
    </Flex>
  )
}

export default Header
